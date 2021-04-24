import Head from 'next/head'
import Link from 'next/link'
import Nav from '../Nav'
import { useState } from 'react';


export default function App({ children }) {

    const [isMouseInsideFooter, setFooter] = useState(false)

    const handleMouseEnterFooter = () => {
        setFooter(true)
    }

    const handleMouseLeaveFooter = () => {
        setFooter(false)
    }

    return(
        <>
            <Head>
                <title>Meigo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <div className='container'>
                {children}
                <div className={(isMouseInsideFooter ? 'mouse-inside' : 'mouse-outside')}>
                    <span></span>
                    <hr />
                    <span></span>
                </div>
                <footer onMouseEnter={handleMouseEnterFooter} onMouseLeave={handleMouseLeaveFooter}>
                        <Link href='#'>
                            <a>Términos y condiciones</a>
                        </Link>
                        <span>•</span>
                        <Link href='#'>
                            <a>Cómo cuidamos tu privacidad</a>
                        </Link>
                        <span>•</span>
                        <Link href='#'>
                            <a>Ayuda</a>
                        </Link>
                </footer>
            </div>


            <style jsx>{`

                .container > div {
                    display: grid;
                    grid-template-columns: 3rem auto 3rem;
                    margin-top: 3rem;
                }

                .container > div.mouse-outside {
                    animation: 0.7s contract cubic-bezier(.86,0,.07,1) 0.4s both;
                }

                .container > div.mouse-inside {
                    animation: 0.7s expand cubic-bezier(.86,0,.07,1) 0.4s both;
                }

                @keyframes expand {
                    0% {
                        grid-gap: 30%;
                    }
                    
                    100% {
                        grid-gap: 0;
                    }
                }

                @keyframes contract {
                    0% {
                        grid-gap: 0;
                    }
                    
                    100% {
                        grid-gap: 30%;
                    }
                }

                hr {
                    margin: 0;
                    border: 1px solid rgba(200,200,200, 0.5);

                }

                footer {
                    width: 100%;
                    padding: 3rem;
                    color: rgb(150,150,150);
                    background-color: rgba(200,200,200, 0.15);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                }


                a {
                    text-align: center;
                }

                a:hover,
                a:focus,
                a:active {
                    color: rgb(80,80,80);
                }

                span {
                    padding: 0 0.8rem 0 0.8rem;
                }

                @media(max-width: 600px) {
                    a {
                        width: 100%;
                        padding: 0;
                        margin-bottom: 1.5rem;
                    }
                    
                    footer {
                        padding: 2rem 0 0 0;
                    }

                    footer > span {
                        display: none;
                    }
                }
            `}</style>
        </>
    )
}