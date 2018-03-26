import * as React from 'react';
import styled from 'styled-components';

const logo = require('./logo.svg');

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const H1 = styled.h1`
  font-size: 1.5em;
`;

const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;

  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Header className="App-header">
          <AppLogo src={logo} alt="logo" />
          <H1>React // Mobx // Styled-Components // Typescript</H1>
        </Header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
