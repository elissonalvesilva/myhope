import styled from "styled-components";
import { Colors } from "../../styles/colors";

const Content = styled.div`
  height: 70vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
    width: 200px;
    display: inline-block;
    color: ${Colors.White};
    font-size: 42px;
  }
`

export {
  Content,
}