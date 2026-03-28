import { sequentialSearch } from "../search/sequentialSearch";
import { binarySearch } from "../search/binarySearch";
import { BST } from "../search/bst";

function generateArray(n: number) {
  return Array.from({ length: n }, (_, i) => i);
}

function average(arr: number[]) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function std(arr: number[]) {
  const avg = average(arr);

  const variance = arr.reduce((sum, v) => sum + (v - avg) ** 2, 0) / arr.length;

  return Math.sqrt(variance);
}

function measure(fn: () => void) {
  const start = performance.now();
  fn();
  const end = performance.now();

  return end - start;
}

function runTest(size: number) {
  const seqTimes: number[] = [];
  const binTimes: number[] = [];
  const bstTimes: number[] = [];

  for (let i = 0; i < 30; i++) {
    const arr = generateArray(size);
    const target = arr[arr.length - 1];

    const bst = new BST();
    arr.forEach((v) => bst.insert(v));

    seqTimes.push(measure(() => sequentialSearch(arr, target)));

    binTimes.push(measure(() => binarySearch(arr, target)));

    bstTimes.push(measure(() => bst.search(target)));
  }

  console.log(`\nVolume de dados: ${size}`);

  console.log(
    `Busca Sequencial média: ${average(seqTimes).toFixed(4)} ms | desvio: ${std(seqTimes).toFixed(4)}`,
  );

  console.log(
    `Busca Binária média: ${average(binTimes).toFixed(4)} ms | desvio: ${std(binTimes).toFixed(4)}`,
  );

  console.log(
    `Busca BST média: ${average(bstTimes).toFixed(4)} ms | desvio: ${std(bstTimes).toFixed(4)}`,
  );
}

export function runBenchmark() {
  const sizes = [1000, 5000, 10000];

  sizes.forEach(runTest);
}
