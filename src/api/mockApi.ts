export const mockApiBuyCorn = (() => {
  let lastBuyTime = 0;

  return async (): Promise<{
    status: number,
    message?: string,
    data?: { corn: number },
  }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const now = Date.now();
        // Business Rule: 1 corn per client per minute (60000ms)
        if (now - lastBuyTime < 60000) {
          resolve({ status: 429, message: "Too Many Requests" });
        } else {
          lastBuyTime = now;
          resolve({ status: 200, data: { corn: 1 } });
        }
      }, 600); // Simula latencia de red
    });
  };
})();
