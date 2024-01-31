import Head from 'next/head';
import styles from '../styles/About.module.css';
import Link from 'next/link';

export default function FAQ() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Alt Nerd Noir</title>
          <link rel="icon" href="/Icon.png" />
        </Head>
  
  
        <main className={styles.main}>
        <div className={styles.toolBar}>
          <div className={styles.navbarItems}>
          <p className={styles.title}>
              Alt Nerd Noir
            </p>
          <img src="/Icon.png"/>
          </div>
  
        <div className={styles.navbarItemsRight}>
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
        <Link href="/contact"> 
          <h3>Contact</h3>
              </Link>
              </div>
              <div className={styles.textBarItems}>
              <Link href="/about"> 
        <h3>About</h3>
            </Link>
            </div>
            <div className={styles.textBarItems}>
              <Link href="/"> 
        <h3>Home</h3>
            </Link>
            </div>
            </div>
              </div>
              <div className={styles.aboutContainer}>
                  <p className={styles.header}>
                      Coming soon!
                  </p>
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