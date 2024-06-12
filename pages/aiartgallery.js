import Head from 'next/head';
import styles from '../styles/About.module.css';
import Link from 'next/link';
import LightGallery from 'lightgallery/react';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

export default function AIArtGallery() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Alt Nerd Noir</title>
          <link rel="icon" href="/Icon.png" />
          <link type="text/css" rel="stylesheet" href="css/lightgallery-bundle.css" />
        </Head>

    <script src="js/plugins/lg-zoom.umd.js"></script>
        <main className={styles.main}>
        <div className={styles.toolBar}>
          <div className={styles.navbarItems}>
          <p className={styles.title}>
              Alt Nerd Noir
            </p>
          <img style={{width: '45px', height: '45px' }} src="/Icon.png"/>
          </div>
  
        <div className={styles.navbarItemsRight}>
        <a style={{width: '40px', height: '40px' }} href="https://substack.com/@persephonenoir" >
          <img style={{width: '25px', height: '25px' }} src="/substack-3fcbaa60.png"/>
              </a>
      <a style={{width: '40px', height: '40px' }} href="https://www.etsy.com/shop/VelvetVeilDecor?ref=seller-platform-mcnav" >
          <img style={{width: '25px', height: '25px' }} src="/etsy.png"/>
              </a>
      <a style={{width: '40px', height: '40px' }} href="https://www.instagram.com/darkforestfae/" >
          <img style={{width: '25px', height: '25px' }} src="/instagram-logo.png"/>
              </a>
        <a style={{width: '40px', height: '40px' }} href="https://www.youtube.com/channel/UC-v2NjmUBcGwewxa5WwhMRw" >
          <img style={{width: '25px', height: '25px' }} src="/youtube.png"/>
              </a>
              <a style={{width: '40px', height: '40px' }} href="https://cash.app/$altnerdnoir" >
          <img style={{width: '25px', height: '25px' }} src="/cashapp.png"/>
              </a>
        {/* <a style={{width: '40px', height: '40px' }} href="https://nextjs.org/docs" >
          <img style={{width: '25px', height: '25px' }} src="/tik-tok.png"/>
              </a> */}
        </div>
        </div>
        <div className={styles.navBar}>
        <div className={styles.textBar}>
        <div className={styles.textBarItems}>
        <Link href="/"> 
        <h3>Home</h3>
            </Link>
            </div>
            <div className={styles.textBarItems}>
        <Link href="/contact"> 
          <h3>Contact</h3>
              </Link>
              </div>
              <div className={styles.textBarItems}>
              <Link href="/about"> 
        <h3>About</h3>
            </Link>
            </div>
              {/* <Link href="/faq"> 
        <h3>FAQ</h3>
            </Link> */}
            </div>
              </div>
              <div className={styles.aboutContainer}>
                  <p className={styles.header}>
                      Art Gallery
                  </p>
                  <LightGallery
          mode="lg-fade"
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
        >
                                                            <a
            className="gallery-item"
            data-src="https://i.ibb.co/8NHqYKq/image-2024-06-02-T233358-813.png"
            data-sub-html="<h4>Commision </h4>"
          >
            <img
              className="img-responsive"
              src="https://i.ibb.co/7nNtnQt/image-2024-06-02-T233358-813.png"
            />
          </a>
                                                  <a
            className="gallery-item"
            data-src="https://i.ibb.co/34STMF1/image-2024-05-24-T173455-551.png"
            data-sub-html="<h4>Commision </h4>"
          >
            <img
              className="img-responsive"
              src="https://i.ibb.co/LP8fhDQ/image-2024-05-24-T173455-551.png"
            />
          </a>
                                        <a
            className="gallery-item"
            data-src="https://i.ibb.co/tQ3w3Gh/image-2024-02-02-T035351-851.png"
            data-sub-html="<h4>Commision </h4>"
          >
            <img
              className="img-responsive"
              src="https://i.ibb.co/QK3H53C/image-2024-02-02-T035351-851.png"
            />
          </a>
                              <a
            className="gallery-item"
            data-src="https://i.ibb.co/5xFTXmc/image-2024-04-25-T213305-085.png"
            data-sub-html="<h4>Commision </h4>"
          >
            <img
              className="img-responsive"
              src="https://i.ibb.co/HxgtpK2/image-2024-04-25-T213305-085.png"
            />
          </a>
                    <a
            className="gallery-item"
            data-src="https://i.ibb.co/bb0tXhP/image-2024-01-10-T234834-589.png"
            data-sub-html="<h4>Commision </h4>"
          >
            <img
              className="img-responsive"
              src="https://i.ibb.co/RbWYHRk/image-2024-01-10-T234834-589.png"
            />
          </a>
          <a
            className="gallery-item"
            data-src="https://i.ibb.co/9nRB6gm/image-2023-12-25-T233803-769.png"
            data-sub-html="<h4>Commision for Dira Khali </h4>"
          >
            <img
              className="img-responsive"
              src="https://i.ibb.co/d5J9d6P/image-2023-12-25-T233803-769.png"
            />
          </a>
          <a
            className="gallery-item"
            data-src="https://i.ibb.co/x7CnKLV/image-2023-12-26-T044835-569.png"
            data-sub-html="<h4>Commision for Dira Khali </h4>"
          >
            <img
              className="img-responsive"
              src="https://i.ibb.co/VWCPytQ/image-2023-12-26-T044835-569.png"
            />
          </a>
          <a
            className="gallery-item"
            data-src="https://i.ibb.co/Y2gCqfr/image-2023-12-26-T034001-335.png"
            data-sub-html="<h4>Commision for Dira Khali </h4>"
          >
            <img
              className="img-responsive"
              src="https://i.ibb.co/k9V5SS0/image-2023-12-26-T034001-335.png"
            />
          </a>
          <a
            className="gallery-item"
            data-src="https://i.ibb.co/J7T1Cvc/image-2023-12-26-T013624-066.png"
            data-sub-html="<h4>Commision for Dira Khali </h4>"
          >
            <img
              className="img-responsive"
              src="https://i.ibb.co/vzQLs2J/image-2023-12-26-T013624-066.png"
            />
          </a>
          <a
            className="gallery-item"
            data-src="https://i.ibb.co/LPqy8Ws/image-2023-12-30-T013105-776.png"
            data-sub-html="<h4>Commision</h4>"
          >
            <img
              className="img-responsive"
              src="https://i.ibb.co/VYmwKk8/image-2023-12-30-T013105-776.png"
            />
          </a>
          <a
            className="gallery-item"
            data-src="https://i.ibb.co/2FyTnVt/Upscaled-Image6.png"
            data-sub-html="<h4>Commision</h4>"
          >
            <img
              className="img-responsive"
              src="https://i.ibb.co/X5NPWj3/Upscaled-Image6-Thumb.png"
            />
          </a>
        </LightGallery>
              </div>
              </main>

              <footer>
          
      </footer>

      <style jsx>{`
        main {
          padding: 0rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
              </div>
    )
}