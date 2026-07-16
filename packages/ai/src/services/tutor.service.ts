import type { AIProvider } from '../providers/types';
import { HINT_PROMPT, EXPLAIN_CODE_PROMPT } from '../prompts';

export class TutorService {
  constructor(private provider: AIProvider) {}

  async generateHint(problemDescription: string, studentCode: string): Promise<string> {
    const response = await this.provider.generateText([
      { role: 'system', content: HINT_PROMPT },
      { role: 'user', content: `Problem: ${problemDescription}\n\nStudent code:\n${studentCode}` },
    ]);
    return response.content;
  }

  async explainCode(code: string, language: string): Promise<string> {
    const response = await this.provider.generateText([
      { role: 'system', content: EXPLAIN_CODE_PROMPT },
      { role: 'user', content: `Language: ${language}\n\nCode:\n${code}` },
    ]);
    return response.content;
  }
}
