import Head from 'next/head';
import styles from '../styles/Home.module.css';
import background from '../public/WebsitePicture1.png';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

export default function Home() {
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
          <div className={styles.container}>

            <div className={styles.image}>
          <img style={{ backgroundImage: `url(${background.src})`, backgroundSize: 'cover', width: 'inherit' }} src="./WebsitePicture1.png" layout='fill' />
          </div>
          <div className={styles.writingText}>
            <Typewriter
              options={{
                loop: true,
              }}
  onInit={(typewriter) => {
    typewriter.typeString('The fire flickered and faded more, threatening further to plunge Rumern into darkness...')
      .pauseFor(2500)
      .deleteAll()
      .typeString(`...but that night, she went into the Shadow's Emissary seemingly alone with the intention to gamble big and win even bigger.`)
      .pauseFor(2500)
      .deleteAll()
      .typeString(`For eight years, the fires raged in Viernon...`)
      .pauseFor(2500)
      .deleteAll()
      .start();
  }}
/>
</div>
          </div>
          <div className={styles.container}>
          <div className={styles.grid}>
            <Link href="/aiartgallery" className={styles.card}>
              <div className={styles.cardText}>
              <h3>AI Art &rarr;</h3>
              <p></p>
              </div>
              <img 
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="./AiArtBackground.png"
              />
            </Link>

            <Link href="/iridis" className={styles.card}>
            <div className={styles.cardText}>
              <h3>Iridis Stories &rarr;</h3>
              <p></p>
              </div>
              <img 
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="./IridisBackground.png"
              />
            </Link>

            <Link
              href="/blog"
              className={styles.card}
            >
              <div className={styles.cardText}>
              <h3>Writing Blog &rarr;</h3>
              <p></p>
              </div>
              <img 
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="./BlogBackground.png"
              />
            </Link>

            {/* <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <div className={styles.cardText}>
              <h3>Archives &rarr;</h3>
              <p>
              </p>
              </div>
              <img 
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="./ArchiveBackground.png"
              />
            </a> */}
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
          justify-content: center;
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
  );
}
