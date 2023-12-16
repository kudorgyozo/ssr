import React from 'react';
import { useEffect } from 'react';

type Props = {
    dataSourceId: string;
};

export const Table = (props: Props) => {
    const SECRET_API_KEY = '';

    // useEffect(() => {
    //     fetch(`/api/datasource/${props.dataSourceId}`).then((resp) => {});
    // }, [props.dataSourceId]);

    return <div>{process.env.NEXT_PUBLIC_API_URL} Table</div>;
};
