import React, { useEffect } from 'react';
import http from '../HttpProduct';
export default function Card(props: { match: any }) {
    const { match } = props;

    useEffect(() => {
        http.getDetails(match.params.id).then((details) => {
            console.log(details);
        })
    })
    return (
        <h2>{match.params.id}</h2>
    )
}