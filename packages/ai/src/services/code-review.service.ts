import type { AIProvider } from '../providers/types';
import { CODE_REVIEW_PROMPT } from '../prompts';

export class CodeReviewService {
  constructor(private provider: AIProvider) {}

  async reviewSolution(code: string, language: string, challenge: string): Promise<string> {
    const response = await this.provider.generateText([
      { role: 'system', content: CODE_REVIEW_PROMPT },
      {
        role: 'user',
        content: `Challenge: ${challenge}\nLanguage: ${language}\n\nSolution:\n${code}`,
      },
    ]);
    return response.content;
  }
}
