exports.handler = async (event) => {
  const start = performance.now();
  console.log({ event });
  return {
    content: event.arguments.content,
    executionDuration: performance.now() - start,
  };
};
