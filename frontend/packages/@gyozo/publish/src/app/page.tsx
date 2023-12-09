import Image from 'next/image';
import { Table } from '@gyozo/lib/components/Table';

export default async function Home() {
    const API_KEY = '';

    //const components: [] = await (await fetch('be-api/components')).json();

    //problems: routing,

    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <Table dataSourceId='5' />
        </main>
    );
}
