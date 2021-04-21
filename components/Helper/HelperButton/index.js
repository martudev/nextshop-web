import anime from 'animejs/lib/anime';
import { useState, useEffect } from 'react';
import { isMobile } from '../../../styles/theme';


export default function HelperButton(props, { children }) {

    const [isOpened, setOpened] = useState(false);
    const [event, setEvent] = useState(null);


    const openHalperContent = () => {
        if (event === null) return;

        const btn = event.target;
        const parent = btn.parentElement;
        const container = parent.querySelector('.container');
        let height = props.containerHeight;
        if (isMobile()) height = props.mobileContainerHeight;
        
        anime({
          targets: container,
          duration: 250,
          paddingTop: '1.5rem',
          paddingBottom: '2rem',
          height: height,
          easing: 'easeInOutQuad',
        });

        anime({
          targets: btn.querySelector('span'),
          rotate: '0.5turn',
          translateY: -6
        });
    }

    const closeHalperContent = () => {
        if (event === null) return;

        const btn = event.target;
        const parent = btn.parentElement;
        const container = parent.querySelector('.container');
        
        anime({
          targets: container,
          duration: 250,
          paddingTop: 0,
          paddingBottom: 0,
          height: 0,
          easing: 'easeInOutQuad',
        });

        anime({
          targets: btn.querySelector('span'),
          rotate: '0turn',
          translateY: 0
        });
    }

    const toggableHalperContent = () => {
        if (isOpened) {
            openHalperContent();
        } else {
            closeHalperContent();
        }
    }

    useEffect(toggableHalperContent, [isOpened])
    
    const handleToggleHelperBtn = (currentEvent) => {
        setEvent(currentEvent);
        setOpened(!isOpened);
    }

    return(
        <>
            <section className='helpper-btn'>
                <div className='btn' onClick={handleToggleHelperBtn}>
                    {props.value} <span>⌄</span>
                </div>
                <div className='container slide-up'>
                    {props.container}
                </div>
            </section>

            <style jsx>{`

                .btn {
                    padding: 1rem 2rem;
                    margin-top: 1rem;
                    border-radius: 4px;
                    color: #3483fa;
                    background-color: #f9f3ff;
                    cursor: pointer;
                    line-height: 1.15;
                    font-weight: 600;
                    user-select: none;

                    /* For animated */
                    position: relative;
                    left: -1300px;
                }

                .btn > span {
                    position: relative;
                    display: inline-block;
                    top: -2px;
                }

                .container {
                    display: flex;
                    flex: 1;
                    padding: 0 2rem;
                    height: 0;
                    overflow: hidden;
                }

            `}</style>
        </>
    )
}