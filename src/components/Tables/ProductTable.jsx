import { EuiPanel, EuiBasicTable, EuiBadge } from '@elastic/eui';
import { FormattedNumber } from 'react-intl';
import { truncate } from '../../utils';
import { currencies } from '../../i18n';

export const ProductTable = ({products}) => {
    const locale = navigator.language;
    const currency = currencies[locale] || 'USD';

    const columns = [
        {
            field: 'BusinessName',
            name: 'Name',
            render: (name, item) => {
                return (
                    <div>
                        <strong>{item.BusinessName}</strong>
                        <div>{truncate(item.Description, 10)}</div>
                    </div>
                )
            },
            footer: ({items}) => {
                return <em>Total number of records: {items?.length}</em>
            },
        },
        {
            field: 'Visible',
            name: 'Visible',
            dataType: 'boolean',

            render: (Visible) => {
                const color = Visible ? 'primary' : 'danger';
                const iconType = Visible ? 'eye' : 'eyeClosed';
                const label = Visible ? 'Yes' : 'No';
                return (<EuiBadge className="" color={color} iconType={iconType} iconSide="left">{label}</EuiBadge>)
            }
        },
        {
            field: 'Price',
            name: 'Price',
            render: (Price) => <FormattedNumber value={Price} style="currency" currency={currency}/>
        }
    ];

    return (
        <EuiPanel>
            { 
                products?.Records ? (
                    <EuiBasicTable
                        responsive={false}
                        className="product-table"
                        items={products?.Records}
                        columns={columns}
                /> ) : (
                    <div>Loading...</div>
                )
            }
        </EuiPanel>
    )
};
