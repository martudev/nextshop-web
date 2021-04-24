import Link from "next/link"
import HelperButton from "../HelperButton"


export default function HelperInfo() {

    return(
        <>
            <section className='helpper'>
                <div className='view-all-payments'>
                    <HelperButton value='Ver todos los metodos de pago' containerHeight='1rem'>
                        No disponible
                    </HelperButton>
                </div>
                <div className='need-help'>
                    <HelperButton value='Necesito ayuda' containerHeight='1rem' mobileContainerHeight='6rem'>
                        <p>¡Hola! Si queres contactarnos podes enviarnos un mail a <Link href='mailto:help@meigo.shop'><a>help@meigo.shop</a></Link></p>
                    </HelperButton>
                </div>
                <div className='how-to-publish-my-product'>
                    <HelperButton value='Cómo publicar mi producto' containerHeight='1rem' >
                        No disponible
                    </HelperButton>
                </div>
            </section>
            
            <style jsx>{`
                .helpper {
                    width: 90%;
                    margin-top: 3rem;
                }

                .helpper > div {
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                }

                .helpper p {
                    padding: 0;
                    margin: 0;
                }

                .helpper a {
                    text-decoration: none;
                    color: #3483fa;
                }

                .helpper a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </>
    )
}