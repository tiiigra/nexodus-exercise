import { useState, useEffect } from 'react';
import { EuiPage, EuiPanel, EuiBasicTable, EuiLink, EuiHealth } from '@elastic/eui';
import { ProductTable } from '../components/Tables'

//Move to services
const url = 'https://spaces.nexudus.com/api/token';
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


const productsUrl = 'https://spaces.nexudus.com/api/billing/products';

export const Products = () => {
    const [products, setProducts] = useState();
    const [token, setToken] =  useState('');

    // Check if there is a persistent token (in Local Storage?)
    useEffect(() => {
        fetch(url, options)
        .then(res => res.json())
        .then(json => setToken(json?.access_token))
        .catch(err => console.error('error:' + err));
    }, []);

    //Push to storage

    //Get Products
    useEffect(() => {
        if (!token) {
            return;
        }
        
        const productsOptions = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            method: 'GET',
        };

        fetch(productsUrl, productsOptions)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            return setProducts(json)
        })
        .catch(err => console.error('error:' + err));
    }, [token]);

    //Table setup

    const columns = [
        {
          field: 'BusinessName',
          name: 'Name',
        },
        {
          field: 'Tag',
          name: 'Category',
          header: false,
        },
        // {
        //   field: 'firstName',
        //   name: 'Full Name',
        //   mobileOptions: {
        //     only: true,
        //     fullWidth: true,
        //   },
        //   render: (name, item) => (
        //     <EuiFlexGroup responsive={false} alignItems="center">
        //       <EuiFlexItem>
        //         {item.firstName} {item.lastName}
        //       </EuiFlexItem>
        //       <EuiFlexItem grow={false}>{renderStatus(item.online)}</EuiFlexItem>
        //     </EuiFlexGroup>
        //   ),
        // },
      ];

      console.log(products);

    return (
        <EuiPage>
            <EuiPanel>
                { 
                    products?.Records ? (
                        <EuiBasicTable 
                            items={products?.Records}
                            columns={columns}
                    /> ) : (
                        <div>Loading...</div>
                    )
                }
            </EuiPanel>
        </EuiPage>
    )
};