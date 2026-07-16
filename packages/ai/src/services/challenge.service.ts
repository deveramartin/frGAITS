import type { AIProvider } from '../providers/types';
import { GENERATE_CHALLENGE_PROMPT, EVALUATE_SUBMISSION_PROMPT } from '../prompts';

export class ChallengeService {
  constructor(private provider: AIProvider) {}

  async generateChallenge(topic: string, difficulty: string): Promise<string> {
    const response = await this.provider.generateText([
      { role: 'system', content: GENERATE_CHALLENGE_PROMPT },
      { role: 'user', content: `Topic: ${topic}\nDifficulty: ${difficulty}` },
    ]);
    return response.content;
  }

  async evaluateSubmission(
    code: string,
    challenge: string,
    testResults: string,
  ): Promise<string> {
    const response = await this.provider.generateText([
      { role: 'system', content: EVALUATE_SUBMISSION_PROMPT },
      {
        role: 'user',
        content: `Challenge: ${challenge}\nCode:\n${code}\nTest Results: ${testResults}`,
      },
    ]);
    return response.content;
  }
}
