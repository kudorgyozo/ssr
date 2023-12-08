'use client';

import { useEffect } from 'react';

type Props = {
    dataSourceId: string;
};

export const Table = (props: Props) => {
    useEffect(() => {
        fetch(`/api/datasource/${props.dataSourceId}`).then((resp) => {});
    }, [props.dataSourceId]);

    return <div>Table</div>;
};
