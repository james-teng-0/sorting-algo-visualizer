import styled from 'styled-components';
import {motion} from "framer-motion";

const VisualizerWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden; 
`

const VisualizerBlock = styled(motion.li)`
  background: ${props => props.colour};
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  font-size: 12px;
  border: 0;
  outline: 1px solid black;

  height: ${props => props.height}vh;
  width: ${props => props.width}vw;

  position: relative;
  bottom: 0;
`

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300
};


export const Visualizer = (props) => {
  console.log(props.arr)

  return (
    <VisualizerWrapper>
      {props.arr.map((background) => {
          return (
          <VisualizerBlock
            width={95/props.arr.length}
            height={75 * (background[0]/99)}
            key={background[0]}
            colour={background[1]}
            layout
            transition={spring}
            style={{ background }} 
          > {background[0]}  
          </VisualizerBlock>
        );
        })
      }
    </VisualizerWrapper>
  );
};  