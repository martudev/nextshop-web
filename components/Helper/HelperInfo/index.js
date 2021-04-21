import HelperButton from "../HelperButton"


export default function HelperInfo() {

    return(
        <>
            <section className='helpper'>
                <div className='view-all-payments'>
                    <HelperButton value='Ver todos los metodos de pago' container='No disponible' containerHeight='1rem' />
                </div>
                <div className='need-help'>
                    <HelperButton value='Necesito ayuda' container='¡Hola! Si queres contactarnos podes enviarnos un mail a help@meigo.shop' containerHeight='1rem' mobileContainerHeight='6rem' />
                </div>
                <div className='how-to-publish-my-product'>
                    <HelperButton value='Cómo publicar mi producto' container='No disponible' containerHeight='1rem' />
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
            `}</style>
        </>
    )
}