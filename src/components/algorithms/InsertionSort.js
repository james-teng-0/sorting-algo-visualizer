import {disableButtons, enableButtons, sleep} from './Helpers'

export const InsertionSort = async (arr, setArr) => {
    disableButtons()
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while ((j >= 0) && (arr[j][0] > current[0])) {
            arr[j + 1] = arr[j];
            j = j - 1;
            await sleep(0.1)
            setArr([...arr]);
        }
        arr[j + 1] = current;
        setArr([...arr]);
    }
    enableButtons()
}