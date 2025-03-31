export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetcher = async (url, delay = 0) => {
  if (delay > 0) await sleep(delay);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
  return res.json();
};