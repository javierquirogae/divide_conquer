function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    // Check if the last element is 1, indicating no zeroes
    if (arr[right] === 1) {
      return 0;
    }
  
   // Check if the first element is 0, indicating all zeroes
    if (arr[0] === 0) {
      return arr.length;
    }
  
    // Binary search to find the first occurrence of 0
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === 0) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
  
    // The index of 'right' will be the count of zeroes
    return arr.length - right;
  
}
function sortedFrequency(arr, num) {
    const firstIndex = findFirstIndex(arr, num);
  
    if (firstIndex === -1) {
      return -1;
    }
  
    const lastIndex = findLastIndex(arr, num);
  
    return lastIndex - firstIndex + 1;
  }
  
  function findFirstIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let firstIndex = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        firstIndex = mid;
        right = mid - 1;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return firstIndex;
  }
  
  function findLastIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let lastIndex = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        lastIndex = mid;
        left = mid + 1;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return lastIndex;
  }


  function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        return mid;
      }
  
      if (arr[left] <= arr[mid]) {
        // Left side is sorted in ascending order
        if (arr[left] <= num && num < arr[mid]) {
          // Number lies within the sorted left side
          right = mid - 1;
        } else {
          // Number lies on the right side
          left = mid + 1;
        }
      } else {
        // Right side is sorted in ascending order
        if (arr[mid] < num && num <= arr[right]) {
          // Number lies within the sorted right side
          left = mid + 1;
        } else {
          // Number lies on the left side
          right = mid - 1;
        }
      }
    }
  
    return -1; // Number not found
  }


  function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      // If the subarray is already sorted, it means it has not been rotated
      if (arr[left] <= arr[right]) {
        return left;
      }
  
      const mid = Math.floor((left + right) / 2);
      const next = (mid + 1) % arr.length;
      const prev = (mid + arr.length - 1) % arr.length;
  
      // Check if the mid element is the smallest element
      if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
        return mid;
      }
  
      // Determine which side is unsorted and update the pointers
      if (arr[mid] <= arr[right]) {
        right = mid - 1; // Left side is unsorted, search in the left subarray
      } else {
        left = mid + 1; // Right side is unsorted, search in the right subarray
      }
    }
  
    return 0; // Array is not rotated, n = 0
  }
  
  function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === x) {
        return arr[mid];
      }
  
      if (arr[mid] < x) {
        floor = arr[mid]; // Update the floor value
        left = mid + 1; // Search in the right subarray
      } else {
        right = mid - 1; // Search in the left subarray
      }
    }
  
    return floor;
  }
  
  