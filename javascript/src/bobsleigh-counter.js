export function countMaxBobsleigh(N, map) {
  if (!Array.isArray(map) || N !== map.length) return 0;

  let count = 0;

  for (let i = 0; i < N; i++) {
    const segments = map[i].split("X");

    for (const segment of segments) {
      count += Math.floor(segment.length / 4);
    }
  }

  return count;
}

