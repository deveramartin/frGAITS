// Web search tool for AI function calling
export const webSearchTool = {
  name: 'search_documentation',
  description: 'Search programming documentation for relevant information',
  parameters: {
    type: 'object',
    properties: {
      query: { type: 'string', description: 'Search query' },
      language: { type: 'string', description: 'Programming language context' },
    },
    required: ['query'],
  },
};
