import React from "react";
import PropTypes from 'prop-types';
import s from '../TransactionHistory/TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
    return (
        <table className={ s.transaction__history}>
            <thead className={ s.trans_head}>
                <tr  >
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>


            {items.map(({ id, type, amount, currency }) =>
            (
                <tbody key={id}>
                    <tr >
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                </tbody>
            ))}


        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        })
    )

}