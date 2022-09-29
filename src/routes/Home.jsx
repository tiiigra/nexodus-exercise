import { EuiButton } from '@elastic/eui';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export const Home = () => (  
    <div className="App">
        <div className="App-home">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/products">
                <EuiButton fill>View Products</EuiButton>
            </Link>
        </div>
    </div>
);
