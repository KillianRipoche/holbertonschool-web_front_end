function countPrimeNumbers() {
  function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return n === 2;
    const limit = Math.floor(Math.sqrt(n));
    for (let d = 3; d <= limit; d += 2) {
      if (n % d === 0) return false;
    }
    return true;
  }

  let count = 0;
  for (let n = 2; n <= 100; n += 1) {
    if (isPrime(n)) count += 1;
  }
  return count;
}

(function measure() {
  if (typeof performance === 'undefined') {
    try {
      globalThis.performance = require('perf_hooks').performance;
    } catch (e) {
      globalThis.performance = { now: () => Date.now() };
    }
  }

  const t0 = performance.now();
  const primes = countPrimeNumbers();
  const t1 = performance.now();

  console.log(`Found primes from 2 to 100: ${primes}`);
  console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);
})();
