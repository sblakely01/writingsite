import Head from 'next/head';
import styles from '../styles/Blog.module.css';
import Link from 'next/link';

export default function Iridis() {
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
            <img src="/Icon.png" />
          </div>

          <div className={styles.navbarItemsRight}>
            <a style={{ width: '40px', height: '40px' }} href="https://substack.com/@persephonenoir" >
              <img style={{ width: '25px', height: '25px' }} src="/substack-3fcbaa60.png" />
            </a>
            <a style={{ width: '40px', height: '40px' }} href="https://www.etsy.com/shop/VelvetVeilDecor?ref=seller-platform-mcnav" >
              <img style={{ width: '25px', height: '25px' }} src="/etsy.png" />
            </a>
            <a style={{ width: '40px', height: '40px' }} href="https://www.instagram.com/darkforestfae/" >
              <img style={{ width: '25px', height: '25px' }} src="/instagram-logo.png" />
            </a>
            <a style={{ width: '40px', height: '40px' }} href="https://www.youtube.com/channel/UC-v2NjmUBcGwewxa5WwhMRw" >
              <img style={{ width: '25px', height: '25px' }} src="/youtube.png" />
            </a>
            <a style={{ width: '40px', height: '40px' }} href="https://cash.app/$altnerdnoir" >
              <img style={{ width: '25px', height: '25px' }} src="/cashapp.png" />
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
            <h3>Writing Blog</h3>
          </p>
          <div className={styles.grid}>
            <a
              href="https://open.substack.com/pub/persephonenoir/p/a-day-at-the-renaissance-faire?r=3i1oh3&utm_campaign=post&utm_medium=web"
              className={styles.card}
            >
              <div className={styles.cardText}>
              </div>
              <img
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="./Post5.jpg"
                width={250} height={250}
              />
              <p>
                May 25, 2024
              </p>
            </a>
            <a
              href="https://open.substack.com/pub/persephonenoir/p/crafting-vivid-settings?r=3i1oh3&utm_campaign=post&utm_medium=web"
              className={styles.card}
            >
              <div className={styles.cardText}>
              </div>
              <img
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="./Post4.jpg"
                width={250} height={250}
              />
              <p>
                May 3, 2024
              </p>
            </a>
            <a
              href="https://open.substack.com/pub/persephonenoir/p/magic-in-the-making?r=3i1oh3&utm_campaign=post&utm_medium=web"
              className={styles.card}
            >
              <div className={styles.cardText}>
              </div>
              <img
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="./Post3.jpg"
                width={250} height={250}
              />
              <p>
                April 26, 2024
              </p>
            </a>
            <a
              href="https://open.substack.com/pub/persephonenoir/p/the-shadows-quarry?r=3i1oh3&utm_campaign=post&utm_medium=web"
              className={styles.card}
            >
              <div className={styles.cardText}>
              </div>
              <img
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="./Post2.jpg"
                width={250} height={250}
              />
              <p>
                March 3, 2024
              </p>
            </a>
            <a
              href="https://persephonenoir.substack.com/p/coming-soon"
              className={styles.card}
            >
              <div className={styles.cardText}>
              </div>
              <img
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="./Post1.jpg"
                width={250} height={250}
              />
              <p>
                March 2, 2024
              </p>
            </a>



          </div>
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