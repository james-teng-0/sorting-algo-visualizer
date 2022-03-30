export const sleep = (time) => {
    return new Promise( resolve => setTimeout(resolve, time))
}

export const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

export const disableButtons = () => {
    document.getElementById("bubblesort-btn").disabled = true;
    document.getElementById("insertionsort-btn").disabled = true;
    document.getElementById("quicksort-btn").disabled = true;
    document.getElementById("reset-btn").disabled = true;
}

export const enableButtons = () => {
    document.getElementById("bubblesort-btn").disabled = false;
    document.getElementById("insertionsort-btn").disabled = false;
    document.getElementById("quicksort-btn").disabled = false;
    document.getElementById("reset-btn").disabled = false;
}

