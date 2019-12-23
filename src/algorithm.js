/**
 * 
 * @file  Algorithm 
 */

/**
 * 冒泡排序
 * @param {array} arr - 数组
 * @param {string} [type = 'ASC'] - 升序或降序（`DESC`）
 */
export function bubbleSort(arr, type) {
  if (!Array.isArray(arr)) return [];
  type = type === 'DESC' ? 'DESC' : 'ASC';
  var len = arr.length;
  var temp;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if ((type === 'ASC' && arr[j] > arr[j + 1]) || (type === 'DESC' && arr[j] < arr[j + 1])) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

/**
 * 选择排序
 * @param {array} arr - 数组
 * @param {string} [type = 'ASC'] - 升序或降序（`DESC`）
 */
export function selectionSort(arr, type) {
  if (!Array.isArray(arr)) return [];
  type = type === 'DESC' ? 'DESC' : 'ASC';
  var len = arr.length;
  var index, temp;
  for (var i = 0; i < len - 1; i++) {
    index = i;
    for (var j = i + 1; j < len; j++) {
      if ((type === 'ASC' && arr[j] < arr[index]) || (type === 'DESC' && arr[j] > arr[index])) {
        index = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
  }
}
/**
 * 插入排序
 * @param {array} arr  - 数组
 * @param {string} type  [type = 'ASC'] - 升序或降序（`DESC`）
 */
export function insertionSort(arr, type) {
  if (!Array.isArray(arr)) return [];
  type = type === 'DESC' ? 'DESC' : 'ASC';
  var len = arr.length;
  var preIndex, current;
  for (var i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && ((type === 'ASC' && current < arr[preIndex]) || (type === 'DESC' && current > arr[preIndex]))) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
}
/**
 * 希尔排序
 * @param {array} arr  - 数组
 * @param {string} type  [type = 'ASC'] - 升序或降序（`DESC`）
 */
export function shellSort(arr, type) {
  if (!Array.isArray(arr)) return [];
  type = type === 'DESC' ? 'DESC' : 'ASC';
  var len = arr.length;
  for (var gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (var i = gap; i < len; i++) {
      var j = i;
      var current = arr[i];
      while (j - gap >= 0 && ((type === 'ASC' && current < arr[j - gap]) || (type === 'DESC' && current > arr[j - gap]))) {
        arr[j] = arr[j - gap];
        j = j - gap;
      }
      arr[j] = current;
    }
  }
}
/**
 * 归并算法
 * @param {array} arr  - 数组
 * @param {string} type  [type = 'ASC'] - 升序或降序（`DESC`）
 */
export function mergeSort(arr, type) {
  if (!Array.isArray(arr)) return [];
  type = type === 'DESC' ? 'DESC' : 'ASC';
  var len = arr.length;
  if (len < 2) {
    return arr;
  }
  var middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);
  return merge(mergeSort(left, type), mergeSort(right, type), type);
}

function merge(left, right, type) {
  var result = [];

  while (left.length > 0 && right.length > 0) {
    if (type === 'DESC' && left[0] >= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length)
    result.push(left.shift());

  while (right.length)
    result.push(right.shift());

  return result;
}

/**
 * 快速排序
 * @param {array} arr - 数组
 * @param {number} [left = 0]
 * @param {number} [right = arr.length - 1] 
 */
export function quickSort(arr, left, right) {
  var len = arr.length,
    partitionIndex,
    left = typeof left != 'number' ? 0 : left,
    right = typeof right != 'number' ? len - 1 : right;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
}

function partition(arr, left, right) {     // 分区操作
  var pivot = left,                      // 设定基准值（pivot）
    index = pivot + 1;
  for (var i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

var len;
function buildMaxHeap(arr) {   // 建立大顶堆
  len = arr.length;
  for (var i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i);
  }
}

function heapify(arr, i) {     // 堆调整
  var left = 2 * i + 1,
    right = 2 * i + 2,
    largest = i;

  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    swap(arr, i, largest);
    heapify(arr, largest);
  }
}

/**
 * 堆排序
 * @param {array} arr - 数组 
 */
export function heapSort(arr) {
  buildMaxHeap(arr);
  for (var i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    len--;
    heapify(arr, 0);
  }
}
/**
 * 计数排序
 * @param {array} arr - 数组 
 * @param {number} maxValue - 最大值
 */
export function countingSort(arr, maxValue) {
  var bucket = new Array(maxValue + 1),
    sortedIndex = 0,
    arrLen = arr.length,
    bucketLen = maxValue + 1;

  for (var i = 0; i < arrLen; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0;
    }
    bucket[arr[i]]++;
  }

  for (var j = 0; j < bucketLen; j++) {
    while (bucket[j] > 0) {
      arr[sortedIndex++] = j;
      bucket[j]--;
    }
  }
}
/**
 * 桶排序
 * @param {array} arr - 数组
 * @param {number} [bucketSize = 5] 桶的数量
 */
export function bucketSort(arr, bucketSize) {
  if (arr.length === 0) {
    return arr;
  }

  var i;
  var minValue = arr[0];
  var maxValue = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];                // 输入数据的最小值
    } else if (arr[i] > maxValue) {
      maxValue = arr[i];                // 输入数据的最大值
    }
  }

  // 桶的初始化
  var DEFAULT_BUCKET_SIZE = 5;            // 设置桶的默认数量为5
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var buckets = new Array(bucketCount);
  for (i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  // 利用映射函数将数据分配到各个桶中
  for (i = 0; i < arr.length; i++) {
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
  }

  arr.length = 0;
  for (i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]);                      // 对每个桶进行排序，这里使用了插入排序
    for (var j = 0; j < buckets[i].length; j++) {
      arr.push(buckets[i][j]);
    }
  }
}

var counter = [];
/**
 * 基数排序
 * @param {array} arr 
 * @param {number} maxDigit 
 */
export function radixSort(arr, maxDigit) {
  var mod = 10;
  var dev = 1;
  for (var i = 0; i < maxDigit; i++ , dev *= 10, mod *= 10) {
    for (var j = 0; j < arr.length; j++) {
      var bucket = parseInt((arr[j] % mod) / dev);
      if (counter[bucket] == null) {
        counter[bucket] = [];
      }
      counter[bucket].push(arr[j]);
    }
    var pos = 0;
    for (var j = 0; j < counter.length; j++) {
      var value = null;
      if (counter[j] != null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = value;
        }
      }
    }
  }
}