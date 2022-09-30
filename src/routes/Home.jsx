import { useEffect } from 'react';
import { EuiButton } from '@elastic/eui';
import { Link } from 'react-router-dom';
import { BASE_URL, BEARER } from '../resources';
import logo from '../logo.svg';

const url = `${BASE_URL}/api/token`;
const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',

    },
    body: new URLSearchParams({
        'grant_type': 'password',
        'userName': 'adrian+1004930927@nexudus.com',
        'password': 'WVw12Z59sxCv',
    })
}

export const Home = () => {
    useEffect(() => {
        if (localStorage.getItem(BEARER)) {
            return;
        }
        fetch(url, options)
        .then(res => res.json())
        .then(json => {
            return localStorage.setItem(BEARER, json?.access_token);
        })
        .catch(err => console.error('error:' + err));
    });

    return (  
        <div className="App">
            <div className="App-home">
                <img src={logo} className="App-logo" alt="logo" />
                <Link to="/products">
                    <EuiButton fill>View Products</EuiButton>
                </Link>
            </div>
        </div>
    )
};
