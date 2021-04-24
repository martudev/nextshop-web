import ArrowSvgBtn from "../Svgs/ArrowSvgBtn";
import IconSvg from "../Svgs/IconSvg";
import anime from 'animejs/lib/anime';
import { useEffect, useState } from "react";
import { isMobile } from "../../styles/theme";
import NavBarMenuIcon from "../Svgs/NavBarMenuIcon";


export default function Nav() {

    const [isLoginCollapsed, setLoginCollapse] = useState(false);

    const closeNavBarMobileContent = () => {
        anime({
            targets: '.navbar-collapsable .login-container',
            duration: 250,
            paddingTop: '0rem',
            paddingBottom: '0rem',
            easing: 'easeInOutQuad',
        });
    }

    const openNavBarMobileContent = () => {
        anime({
            targets: '.navbar-collapsable .login-container',
            duration: 250,
            paddingTop: '2.5rem',
            paddingBottom: '2.5rem',
            easing: 'easeInOutQuad',
        });
    }

    const toggableHalperContent = () => {
        if (isLoginCollapsed) {
            openNavBarMobileContent();
        } else {
            closeNavBarMobileContent();
        }
    }

    useEffect(toggableHalperContent, [isLoginCollapsed])
    
    const handleToggleHelperBtn = (currentEvent) => {
        setLoginCollapse(!isLoginCollapsed);
    }
    

    useEffect(() => {
        anime({
            targets: '.logo',
            translateX: 150
        });

        let container = '.navbar-collapsable .login-container'
        if (isMobile()) container = '.navbar-collapsable .mobile-container'

        anime({
            targets: container,
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



                <div className='navbar-collapsable'>
                    <div className='mobile-container'>
                        <button onClick={handleToggleHelperBtn}>
                            <span className="icon">
                                <NavBarMenuIcon />
                            </span>
                        </button>
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
                </div>




                {/*<div className='login-container'>
                    <a className='btn-login' href="#">Ingresá</a>
                    <a className='btn-register' href="#">
                        Comenzar
                        <div>
                            <ArrowSvgBtn />
                        </div>
                    </a>
                    <div className='mobile-container'>
                        <button>
                            <span className="icon">
                                <NavBarMenuIcon />
                            </span>
                        </button>
                    </div>
                </div>*/}
            </nav>



            <style jsx>{`
                nav {
                    background-color: #705df2;
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

                .mobile-container {
                    display: none;
                }

                .mobile-container > button {
                    border: 1px solid #eaeaea;
                    padding: .25rem .75rem;
                    font-size: 1.25rem;
                    line-height: 1;
                    background-color: transparent;
                    border-radius: .25rem;
                }

                .mobile-container > button > .icon {
                    display: inline-block;
                    width: 1.2rem;
                    height: 1.2rem;
                    vertical-align: middle;
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

                .navbar-collapsable {
                    font-size: 1.2rem;
                }


                .login-container {
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

                @media (max-width: 600px) {

                    .mobile-container {
                        display: block;
                    }

                    .login-container {
                        position: absolute;
                        right: 0;
                        top: 100%;
                        background-color: #7017ff;
                        width: 100%;
                        height: 0;
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .mobile-container {
                        position: relative;
                        right: -500px;
                    }

                }

            `}</style>
        </>
    )
}