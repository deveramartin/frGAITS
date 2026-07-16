export interface AIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface AIResponse {
  content: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

export interface AIProvider {
  generateText(messages: AIMessage[], options?: GenerateOptions): Promise<AIResponse>;
  generateStream(messages: AIMessage[], options?: GenerateOptions): AsyncIterable<string>;
}

export interface GenerateOptions {
  temperature?: number;
  maxTokens?: number;
  topP?: number;
  stop?: string[];
}
