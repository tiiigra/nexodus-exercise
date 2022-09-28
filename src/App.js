import { EuiButton } from '@elastic/eui';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EuiButton fill> View Products </EuiButton>
      </header>
    </div>
  );
}

export default App;
