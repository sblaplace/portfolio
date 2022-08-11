import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <div className='flex flex-col min-h-screen bg-forestghosts text-zinc-600 bg-background-pattern flex justify-center'>
            <header className='m-4 bg-cambridgeblue bg-background-pattern mb-8 py-4'>
                <div className='container flex justify-between tracking-widest font-thin flex-row'>
                    <Link href='/'>
                        <a>HOME</a>
                    </Link>
                    <Link href='/projects'>
                        <a>PROJECTS</a>
                    </Link>
                    <Link href='/about'>
                        <a>CONTRACT</a>
                    </Link>
                    <Link href='/about'>
                        <a>ABOUT</a>
                    </Link>
                    <span className='mx-auto'></span>{' '}
                </div>
            </header>
            <main className='container mx-auto flex-1'>{children}</main>
            <footer className='bg-cambridgeblue bg-background-pattern m-4 mt-8 py-4'>
                <div className='container mx-auto flex justify-center tracking-widest font-thin text-zinc-600'>
                    &copy; 2022 Sarah Laplace
                </div>
            </footer>
        </div>
    );
}
