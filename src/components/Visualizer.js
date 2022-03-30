import styled from 'styled-components';
import {motion} from "framer-motion";

const VisualizerWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden; 
`

const VisualizerBlock = styled(motion.li)`

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  font-size: 15px;
  border-style: solid;

  margin-left: ${props => props.margin}vw;
  margin-right: ${props => props.margin}vw;
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

  return (
    <VisualizerWrapper>
      {props.arr.map((background) => {
          return (
          <VisualizerBlock
            width={50/props.arr.length}
            margin={22/props.arr.length}
            height={75 * (background/99)}
            key={background}
            layout
            transition={spring}
            style={{ background  }} 
          > {background}  
          </VisualizerBlock>
        );
        })
      }
    </VisualizerWrapper>
  );
};  