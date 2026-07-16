// Code execution tool for AI function calling
export const codeExecutionTool = {
  name: 'execute_code',
  description: 'Execute a code snippet and return the output',
  parameters: {
    type: 'object',
    properties: {
      code: { type: 'string', description: 'The code to execute' },
      language: { type: 'string', description: 'Programming language' },
    },
    required: ['code', 'language'],
  },
};
