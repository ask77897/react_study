import Button from './button';
import styled from 'styled-components';
// import {css} from '@emotion/styled';
// import emotion from '@emotion/styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootButton from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';


// const EmotionButton = styled.emotion`
//   background-color: blue;
//   color: white;
//   padding: 10px;

//   &:hover{
//     background-color:darkblue;
//   }
// `;

const StyledButton = styled.button`
    background-color: aqua;
    color: white;
    padding: 10px;

    &:hover{
        background-color:blue;
    }
`;

// const EmoButton = styled.button`
//     ${EmotionButton}
// `;

function App() {
  return (
    <>
      <Button/><br/>
      <StyledButton>StyledButton</StyledButton><br/>
      {/* <EmoButton>EmoButton</EmoButton>
      <EmotionButton>EmoButton</EmotionButton> */}
      <BootButton as='input' type='button' value='Input'/><br/>
      <Container>
        <Row>
          <Col>
           <h1>Hello World!</h1>
           <BootButton variant='default'>button</BootButton>
           <BootButton variant='primary'>button</BootButton>
           <BootButton variant='success'>button</BootButton>
           <BootButton variant='info'>button</BootButton>
           <BootButton variant='warning'>button</BootButton>
           <BootButton variant='danger'>button</BootButton>
           <BootButton variant='link'>button</BootButton>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default App;
