import {swap} from './Helpers'
import {disableButtons, enableButtons} from './Helpers'

/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
   array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */
const partition = async (arr, setArr, low, high) => {
 
    // pivot
    let pivot = arr[high];
 
    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = (low - 1);
 
    for (let j = low; j <= high - 1; j++) {
 
        // If current element is smaller
        // than the pivot
        if (arr[j][0] < pivot[0]) {
 
            // Increment index of
            // smaller element
            i++;
            await swap(arr, i, j);
            setArr([...arr]);
        }
    }
    await swap(arr, i + 1, high);
    setArr([...arr]);
    return (i + 1);
}
 
/* The main function that implements QuickSort
          arr[] --> Array to be sorted,
          low --> Starting index,
          high --> Ending index
 */
export const QuickSort = async (arr, setArr, low, high) => {
    disableButtons();
    if (low < high) {
        // pi is partitioning index, arr[p]
        // is now at right place
        let pi = await partition(arr, setArr, low, high);
 
        // Separately sort elements before
        // partition and after partition
        await QuickSort(arr, setArr, low, pi - 1);
        await QuickSort(arr, setArr, pi + 1, high);
    }
    enableButtons();
}

