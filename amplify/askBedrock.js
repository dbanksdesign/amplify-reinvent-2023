export function request(ctx) {
  const { todos = [] } = ctx.args;

  const prompt = `I have these tasks to do: ${todos.join(
    ','
  )}. What should I do next? Respond with only the content of the next task I should do and your suggestion should not already be in the list.`;

  // const prompt = `Tell me a joke`;

  return {
    resourcePath: `/model/anthropic.claude-v2/invoke`,
    method: 'POST',
    params: {
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        prompt: `\n\nHuman:${prompt}\n\nAssistant:`,
        max_tokens_to_sample: 300,
        temperature: 0.2,
        top_k: 250,
        top_p: 1,
        stop_sequences: ['\\n\\nHuman:'],
      },
    },
  };
}

export function response(ctx) {
  return {
    body: ctx.result.body,
  };
}
