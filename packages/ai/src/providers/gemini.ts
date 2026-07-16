import { GoogleGenerativeAI } from '@google/generative-ai';

import type { AIMessage, AIProvider, AIResponse, GenerateOptions } from './types';

export class GeminiProvider implements AIProvider {
  private client: GoogleGenerativeAI;

  constructor(apiKey?: string) {
    this.client = new GoogleGenerativeAI(apiKey || process.env.GOOGLE_GENERATIVE_AI_API_KEY!);
  }

  async generateText(messages: AIMessage[], options?: GenerateOptions): Promise<AIResponse> {
    const model = this.client.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const chat = model.startChat({
      generationConfig: {
        temperature: options?.temperature ?? 0.7,
        maxOutputTokens: options?.maxTokens ?? 2048,
        topP: options?.topP ?? 0.9,
      },
    });

    const lastMessage = messages[messages.length - 1];
    const result = await chat.sendMessage(lastMessage?.content ?? '');
    const response = await result.response;

    return {
      content: response.text(),
    };
  }

  async *generateStream(messages: AIMessage[], options?: GenerateOptions): AsyncIterable<string> {
    const model = this.client.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const chat = model.startChat({
      generationConfig: {
        temperature: options?.temperature ?? 0.7,
        maxOutputTokens: options?.maxTokens ?? 2048,
      },
    });

    const lastMessage = messages[messages.length - 1];
    const result = await chat.sendMessageStream(lastMessage?.content ?? '');

    for await (const chunk of result.stream) {
      yield chunk.text();
    }
  }
}
