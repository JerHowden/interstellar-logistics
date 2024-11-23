export function poisson(lambda: number): number {
  let L = Math.exp(-lambda); // e^(-lambda)
  let p = 1;
  let k = 0;

  // Keep generating random numbers until we reach a cumulative probability greater than a random number
  while (p > L) {
    k++;
    p *= Math.random();
  }

  return k - 1; // Subtract 1 to account for the initial increment
}

export function exponential(lambda: number): number {
  return -Math.log(1 - Math.random()) / lambda;
}
