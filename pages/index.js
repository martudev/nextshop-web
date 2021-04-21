import Head from 'next/head'
import App from '../components/App'
import anime from 'animejs/lib/anime';
import { useEffect } from "react";
import HelperInfo from '../components/Helper/HelperInfo';


export default function Home() {

  useEffect(() => {
    anime({
      targets: '.helpper .btn',
      translateX: 1300,
      delay: function(el, i, l) {
        return i * 100;
      },
      endDelay: function(el, i, l) {
        return (l - i) * 100;
      }
    });
  }, []);

  return (
    <App>
        <Head>
          <title>Meigo Argentina</title>
        </Head>



        <main>

          <HelperInfo></HelperInfo>

          
          <section className='discovery'>
            <div className="title">
              <div className='container'>
                <span>Descubrimientos 🤯</span>
                <a href='#'>Ver Más</a>
              </div>
              <div className="bar"></div>
            </div>

            <div className='content'>
              <div className='grid'>
                <a className='card' href="#">
                  <div className='image-container'>
                    <img src='https://http2.mlstatic.com/D_Q_NP_711388-MLA40381347063_012020-AB.webp'></img>
                  </div>
                  <p>
                    $ 230.000
                  </p>
                  <div>Heladera alta calidad 33w, espacio para 2 meses de productos</div>
                </a>
                <a className='card' href="#">
                  <div className='image-container'>
                    <img src='https://http2.mlstatic.com/D_Q_NP_711388-MLA40381347063_012020-AB.webp'></img>
                  </div>
                  <p>
                    $ 230.000
                  </p>
                  <div>Heladera alta calidad 33w, espacio para 2 meses de productos</div>
                </a>
                <a className='card' href="#">
                  <div className='image-container'>
                    <img src='https://http2.mlstatic.com/D_Q_NP_711388-MLA40381347063_012020-AB.webp'></img>
                  </div>
                  <p>
                    $ 230.000
                  </p>
                  <div>Heladera alta calidad 33w, espacio para 2 meses de productos</div>
                </a>
                <a className='card' href="#">
                  <div className='image-container'>
                    <img src='https://http2.mlstatic.com/D_Q_NP_711388-MLA40381347063_012020-AB.webp'></img>
                  </div>
                  <p>
                    $ 230.000
                  </p>
                  <div>Heladera alta calidad 33w, espacio para 2 meses de productos</div>
                </a>
              </div>
            </div>
          </section>
          
        </main>




        <style jsx>{`

          main {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            flex-direction: column;
          }
          
          .grid {
            display: flex;
            align-items: top;
            flex-wrap: wrap;
            max-width: 100%;
          }

          @media (max-width: 600px) {
            .grid {
              justify-content: center;
            }

            .discovery > .title > .container > a {
                margin: 0 !important;
                padding: 0.3rem 0.5rem !important;
            }
          }

          .card {
            margin: 1rem;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            max-width: 275px;
            transition: color 0.15s ease, border-color 0.15s ease, 0.2s ease transform;
          }

          .card:hover,
          .card:focus,
          .card:active {
            border-color: #0070f3;
            cursor: pointer;
            transform: translate(0px, -0.5rem);
            background-color: #0070f306;
          }

          .card:hover p, .card:hover div,
          .card:focus p, .card:focus div,
          .card:active p, .card:active div {
            color: #0070f3;
          }

          .card p {
            margin: 1rem 0 0.5rem 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          .image-container {
            overflow: hidden;
            width: 225px;
            height: 225px;
          }

          .image-container > img {
            height: 100%;
          }

          .card > div {
            overflow: hidden;
            color: rgb(100,100,100);
          }

          .content {
            margin-top: 1rem;
          }

          .discovery {
            margin-top: 3rem;
          }

          .discovery > .title {
            margin-left: 1rem;
            font-size: 1.5rem;
            line-height: 1.15;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding-right: 2rem;
          }

          .discovery > .title > .container {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
          }

          .discovery > .title > .container > a {
            padding: 0.5rem 1rem;
            font-size: 1.2rem;
            border-radius: 0.4rem;
            color: #3483fa;
            margin: 0 1rem 0 0.6rem;
            transition: 0.5s ease background-color;
          }

          .discovery > .title > .container > a:hover {
            background-color: rgba(0, 112, 243, 0.1);
          }

          .discovery > .title > .bar {
            flex: 1;
            background-color: rgb(220,220,220);
            height: 1px;
          }

        `}</style>
    </App>
    
  )
}
