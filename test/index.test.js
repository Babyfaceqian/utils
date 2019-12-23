import { isJsonStr, getCharLength, substrByCharLength, digitCode } from '../src';
import { bubbleSort, selectionSort, insertionSort, shellSort, mergeSort, quickSort, heapSort, countingSort, bucketSort, radixSort } from '../src/algorithm';


test('isJsonStr', () => {
  expect(isJsonStr('{}')).toBe(true);
  expect(isJsonStr('{a}')).toBe(false);
  expect(isJsonStr(1)).toBe(false);
  expect(isJsonStr('')).toBe(false);
  expect(isJsonStr(null)).toBe(false);
  expect(isJsonStr('null')).toBe(false);
  expect(isJsonStr('str')).toBe(false);
  expect(isJsonStr(false)).toBe(false);
  expect(isJsonStr(true)).toBe(false);
  expect(isJsonStr({})).toBe(false);
  expect(isJsonStr(undefined)).toBe(false);
  expect(isJsonStr(NaN)).toBe(false);
});

test('getCharLength', () => {
  expect(getCharLength('测试abc123!@# ')).toBe(14);
});

test('substrByCharLength', () => {
  expect(substrByCharLength('测试abc123!@# ', 5)).toBe('测试a');
  expect(substrByCharLength('测试abc123!@# ', -3)).toBe('');
  expect(substrByCharLength('测试abc123!@# ', '3')).toBe('测试');
  expect(substrByCharLength('测试abc123!@# ', 30)).toBe('测试abc123!@# ');
  expect(substrByCharLength('测试abc123!@# ', 'aa')).toBe('');
  expect(substrByCharLength({}, 2)).toBe('');
});

test('digitCode', () => {
  expect(digitCode().length).toBe(4);
  expect(digitCode(-2).length).toBe(1);
  expect(digitCode({}).length).toBe(4);
  expect(digitCode(6).length).toBe(6);
  expect(digitCode(17).length).toBe(15);
});

test('bubbleSort', () => {
  let arr = [1, 2, 3, 4, 5];
  bubbleSort(arr, 'DESC');
  expect(arr).toEqual([5, 4, 3, 2, 1]);
  bubbleSort(arr, 'ASC');
  expect(arr).toEqual([1, 2, 3, 4, 5]);
});

test('selectionSort', () => {
  let arr = [1, 2, 3, 4, 5];
  selectionSort(arr, 'DESC');
  expect(arr).toEqual([5, 4, 3, 2, 1]);
  selectionSort(arr, 'ASC');
  expect(arr).toEqual([1, 2, 3, 4, 5]);
});

test('insertionSort', () => {
  let arr = [1, 2, 3, 4, 5];
  insertionSort(arr, 'DESC');
  expect(arr).toEqual([5, 4, 3, 2, 1]);
  insertionSort(arr, 'ASC');
  expect(arr).toEqual([1, 2, 3, 4, 5]);
});

test('shellSort', () => {
  let arr = [1, 2, 3, 4, 5];
  shellSort(arr, 'DESC');
  expect(arr).toEqual([5, 4, 3, 2, 1]);
  shellSort(arr, 'ASC');
  expect(arr).toEqual([1, 2, 3, 4, 5]);
});

test('mergeSort', () => {
  let arr = [1, 2, 3, 4, 5];
  arr = mergeSort(arr, 'DESC');
  expect(arr).toEqual([5, 4, 3, 2, 1]);
  arr = mergeSort(arr, 'ASC');
  expect(arr).toEqual([1, 2, 3, 4, 5]);
});

test('quickSort', () => {
  let arr = [5, 4, 3, 2, 1];
  quickSort(arr);
  expect(arr).toEqual([1, 2, 3, 4, 5]);
});

test('heapSort', () => {
  let arr = [5, 4, 3, 2, 1];
  heapSort(arr);
  expect(arr).toEqual([1, 2, 3, 4, 5]);
})

test('countingSort', () => {
  let arr = [5, 4, 3, 2, 1];
  countingSort(arr, 5);
  expect(arr).toEqual([1, 2, 3, 4, 5]);
})

test('bucketSort', () => {
  let arr = [5, 4, 3, 2, 1];
  bucketSort(arr);
  expect(arr).toEqual([1, 2, 3, 4, 5]);
})

test('radixSort', () => {
  let arr = [5, 4, 3, 2, 1];
  radixSort(arr, 1);
  expect(arr).toEqual([1, 2, 3, 4, 5]);
})