import styled from 'styled-components';

const DashboardWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const Button = styled.button`
    margin-top: 10vh;
    margin-bottom: 10vh;
`

const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}

const Bubblesort = async (arr, setArr) => {   
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j][0] > arr[j + 1][0]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                setArr([...arr]);
                await sleep(1)
            };
        }
    }
    console.log('sorted')
}

export const Dashboard = (props) => {
    return (
        <DashboardWrapper>
            <Button onClick={() => Bubblesort(props.arr, props.setArr)}>Start Algorithm</Button>
        </DashboardWrapper>
    )
}   

