import styled, { keyframes } from 'styled-components';
import logo from '../logo.svg';

export default function StyledPractice() {
  const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

  const App = styled.div`
    text-align: center;
  `;

  const Header = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;

  const Img = styled.img`
    height: 40vmin;
    pointer-events: none;
    @media (prefers-reduced-motion: no-preference) {
      animation: ${spin} infinite 20s linear;
    }
  `;

  const A = styled.a`
    color: #61dafb;
  `;

  return (
    <App>
      <Header>
        <Img src={logo} alt="logo"></Img>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <A href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </A>
      </Header>
    </App>
  );
}
