import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <main className=''>
            <Link href='pages/1'>Page 1</Link>
            <Link href='pages/2'>Page 2</Link>
        </main>
    );
}
