import ArrowSvgBtn from "../Svgs/ArrowSvgBtn";
import IconSvg from "../Svgs/IconSvg";
import anime from 'animejs/lib/anime';
import { useEffect } from "react";


export default function Nav() {

    useEffect(() => {
        anime({
            targets: '.logo',
            translateX: 150
        });

        anime({
            targets: '.login-container',
            translateX: -500
        });
    }, []);

    return(
        <>


            <nav>
                <div className='logo-container'>
                    <div className='logo'>
                        <IconSvg></IconSvg>
                    </div>
                    <div className='name'>Meigo</div>
                </div>
                <div className='login-container'>
                    <a className='btn-login' href="#">Ingresá</a>
                    <a className='btn-register' href="#">
                        Comenzar
                        <div>
                            <ArrowSvgBtn />
                        </div>
                    </a>
                </div>
            </nav>



            <style jsx>{`
                nav {
                    background-color: #7017ff;
                    color: #fff;
                    width: 100%;
                    height: 6rem;
                    font-size: 1.5rem;
                    padding: 0 2rem 0 1rem;
                    line-height: 1.15;
                    top: 0;
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    z-index: 6000;
                }

                .logo-container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }

                .logo-container > div {
                    display: inline-block;
                }

                .logo-container > .logo {
                    width: 3rem;
                    position: relative;
                    left: -150px;
                }

                .logo-container > .name {
                    margin-left: 0.8rem;
                }

                nav > div {
                    align-self: center;
                }

                .login-container {
                    font-size: 1.2rem;
                    position: relative;
                    right: -500px;
                }

                .btn-register {
                    border: 0.13rem solid #eaeaea;
                    border-radius: 0.9rem;
                    padding: 0.5rem 2rem;
                    transition: 0.2s ease background-color, 0.2s ease border-width, 0.1s ease padding-right;
                }

                .btn-register:hover,
                .btn-register:focus,
                .btn-register:active {
                    background-color: rgb(255,255,255, 0.1);
                    border-width: 0.2rem;
                    padding-right: 1rem;
                }

                .btn-register > div {
                    display: inline-block;
                    overflow: hidden;
                    width: 0rem;
                    height: 1rem;
                    filter: invert(1);
                    transition: 0.2s ease width, 0.2s ease margin-left;
                }

                .btn-register:hover > div,
                .btn-register:focus > div,
                .btn-register:active > div {
                    width: 1rem;
                    margin-left: 0.3rem;
                }

                .btn-login {
                    margin-right: 2rem;
                }

                .btn-login:hover,
                .btn-login:focus,
                .btn-login:active {
                    text-decoration: underline;
                }

            `}</style>
        </>
    )
}