import { useState, useEffect } from 'react';
import { EuiPage } from '@elastic/eui';
import { ProductTable } from '../components/Tables';
import { BASE_URL } from '../resources';

const url = `${BASE_URL}/api/billing/products`;

export const Products = ({token}) => {
    const [products, setProducts] = useState();

    useEffect(() => {
        const options = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            method: 'GET',
        };
        const fetchData = async () => {
            const data = await fetch(url, options);
            const json = await data.json();
            setProducts(json)
        }
      
        fetchData()
          .catch(console.error);
    }, [token])

    return (
        <EuiPage>
            <ProductTable products={products}/>
        </EuiPage>
    )   
};