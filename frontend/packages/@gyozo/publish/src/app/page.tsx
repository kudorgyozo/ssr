//import Image from 'next/image';
import { Table } from '@gyozo/lib/components/Table';
import Link from 'next/link';

export default async function Home() {
    const API_KEY = '';

    //const components: [] = await (await fetch('be-api/components')).json();

    //problems: routing,

    return (
        <main className=''>
            <Link href='pages/1'>Page 1</Link>
            <Link href='pages/2'>Page 2</Link>
        </main>
    );
}
