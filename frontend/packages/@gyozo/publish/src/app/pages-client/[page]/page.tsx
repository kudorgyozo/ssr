'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

type Props = {
    params: {
        page: string;
    };
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

//const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

export default (props: Props) => {
    //const [page, setPage] = useState<any>();

    const backendUrl = process.env.NEXT_PUBLIC_API_URL;
    const { data, error } = useSWR(`${backendUrl}/pages/${props.params.page}`, fetcher);

    console.log(data);

    // useEffect(() => {
    //     const asyncFunc = async () => {
    //         const backendUrl = process.env.NEXT_PUBLIC_API_URL;
    //         var response = await fetch(`${backendUrl}/pages/${props.params.page}`);
    //         var page = await response.json();
    //         console.log(page);
    //         setPage(page);
    //     };

    //     //asyncFunc();
    // }, []);

    return (
        <div>
            Page {data?.id} {data?.content}
        </div>
    );
};
