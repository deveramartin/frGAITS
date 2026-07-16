import Groq from 'groq-sdk';

import type { AIMessage, AIProvider, AIResponse, GenerateOptions } from './types';

export class GroqProvider implements AIProvider {
  private client: Groq;

  constructor(apiKey?: string) {
    this.client = new Groq({ apiKey: apiKey || process.env.GROQ_API_KEY });
  }

  async generateText(messages: AIMessage[], options?: GenerateOptions): Promise<AIResponse> {
    const response = await this.client.chat.completions.create({
      model: 'llama-3.1-70b-versatile',
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
      temperature: options?.temperature ?? 0.7,
      max_tokens: options?.maxTokens ?? 2048,
      top_p: options?.topP ?? 0.9,
      stop: options?.stop,
    });

    return {
      content: response.choices[0]?.message?.content ?? '',
      usage: response.usage
        ? {
            promptTokens: response.usage.prompt_tokens,
            completionTokens: response.usage.completion_tokens,
            totalTokens: response.usage.total_tokens,
          }
        : undefined,
    };
  }

  async *generateStream(messages: AIMessage[], options?: GenerateOptions): AsyncIterable<string> {
    const stream = await this.client.chat.completions.create({
      model: 'llama-3.1-70b-versatile',
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
      temperature: options?.temperature ?? 0.7,
      max_tokens: options?.maxTokens ?? 2048,
      stream: true,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content;
      if (content) yield content;
    }
  }
}
