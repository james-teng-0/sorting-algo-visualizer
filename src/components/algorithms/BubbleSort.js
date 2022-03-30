import {swap, disableButtons, enableButtons} from './Helpers'

export const BubbleSort = async (arr, setArr) => {   
    disableButtons()
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j][0] > arr[j + 1][0]) {
                await swap(arr, j, j + 1)
                setArr([...arr]);
            };
        }
    }
    enableButtons()
}
