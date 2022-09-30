import { useState, useEffect } from 'react';
import { EuiPage } from '@elastic/eui';
import { ProductTable } from '../components/Tables';

const productsUrl = 'https://spaces.nexudus.com/api/billing/products';

export const Products = ({token}) => {
    const [products, setProducts] = useState();

    useEffect(() => {
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
            return setProducts(json)
        })
        .catch(err => console.error('error:' + err));
    }, [token]);

    return (
        <EuiPage>
            <ProductTable products={products}/>
        </EuiPage>
    )
};