import styled from 'styled-components';
import {disableButtons, enableButtons} from './algorithms/Helpers'
import {BubbleSort} from './algorithms/BubbleSort'
import {InsertionSort} from './algorithms/InsertionSort'
import {QuickSort} from './algorithms/QuickSort'

const DashboardWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const Button = styled.button`
    margin: ${props => props.reset ? "0 20px 0 10%" : "0 20px 0 20px"};
    padding: 15px 30px 15px 30px;
    background: none;

    cursor: pointer;
    font-size: 20px;
    color: ${props => props.reset ? "#515390" : "#907AD6"};
    border: 2px ${props => props.reset ? "#515390" : "#907AD6"} solid;
    border-radius: ${props => props.reset ? "4px" : "8px"};

    margin-top: 8vh;
    margin-bottom: 8vh;
    :disabled {
        cursor: default;
    }
`

export const Dashboard = (props) => {   
    return (
        <DashboardWrapper>
            <Button id="bubblesort-btn" onClick={() => BubbleSort(props.arr, props.setArr)}>BubbleSort</Button>
            <Button id="insertionsort-btn" onClick={() => InsertionSort(props.arr, props.setArr)}>InsertionSort</Button>
            <Button id="quicksort-btn" onClick={() => QuickSort(props.arr, props.setArr, 0, props.arr.length -1)}>QuickSort</Button>
            <Button reset id="reset-btn" onClick={() => Reset(props.setArr, props.initialState)}>Reset</Button>
        </DashboardWrapper>
    )
}   

//HELPER FUNCTIONS
export const Reset = (setArr, initialState) => {
    disableButtons()
    setArr([...initialState])
    enableButtons()
}




