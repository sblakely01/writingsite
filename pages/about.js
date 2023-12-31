import Head from 'next/head';
import styles from '../styles/About.module.css';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

export default function About() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Alt Nerd Noir</title>
          <link rel="icon" href="/favicon.ico" />
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
        <a style={{width: '40px', height: '40px' }} href="https://nextjs.org/docs" >
          <img style={{width: '25px', height: '25px' }} src="/instagram-logo.png"/>
              </a>
        <a style={{width: '40px', height: '40px' }} href="https://nextjs.org/docs" >
          <img style={{width: '25px', height: '25px' }} src="/youtube.png"/>
              </a>
        <a style={{width: '40px', height: '40px' }} href="https://nextjs.org/docs" >
          <img style={{width: '25px', height: '25px' }} src="/tik-tok.png"/>
              </a>
        </div>
        </div>
        <div className={styles.navBar}>
        <Link href="/contact"> 
          <h3>Contact</h3>
              </Link>
              <div className={styles.navSpacer}></div>
              <Link href="/"> 
        <h3>Home</h3>
            </Link>
              <div className={styles.navSpacer}></div>
              <Link href="/faq"> 
        <h3>FAQ</h3>
            </Link>
              <div className={styles.navSpacer}></div>
              </div>
              <div className={styles.container}>
                
                
                <div className={styles.container}>
                    <div className={styles.aboutPhoto}>
                        <img src="./20231215_144434-resize.jpg" />
                    </div>
                    <div>
                    <div className={styles.aboutContainer}>
                    <Typewriter
              options={{
                loop: true,
              }}
  onInit={(typewriter) => {
    typewriter.typeString('On a cloudy September night in a hospital in Landstuhl, Germany that sat in the shadow of Nanstein Castle, a child was born...')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
                        <br></br>
                        <p>Writing has always been a passion of mine, from the time I was eight years old and tried to write a sprawling fantasy novel inspired by my 
                        favorite books at the time - the Redwall series by Brian Jacques and The Wind in the Willows. I was convinced that I was supposed to be an author
                        and I worked tirelessly at it after school and during the summers. However, that all seemed to change when a cruel twist of fate resulted in the family's
                        Tandy desktop computer, which I had been writing on, was destroyed by a "blue screen of death". I remember anxiously watching my parents reformatting it and
                        trying to convince myself that my stories and novels which I had put so much time into for years, would still be there after the reformat. They weren't, of course.</p>

                        <p>For years afterwards, I struggled to take on any more ambitious writing projects, but I still felt drawn to writing, fiction, and fantasy. I began to learn to 
                        program in Ruby to build indie games in order to have a different medium for telling stories. I excelled in all of my literature and writing classes and was encouraged
                        by teachers and family to enter into contests and to continue writing even if it was just short stories. In high school, I had several poems that were published in
                        an anthology book, but it was years later - armed with a myriad of life experiences - before I finally felt the strong call to write regularly again.</p>

                        <p>On my 30th birthday, someone close to me who knew that I was struggling with the thought that I was too old to switch into doing what I loved bought me two books -
                        Why I Write by George Orwell and On Writing: A Memoir of the Craft by Stephen King. Aside from my already having been a fan of both authors, after reading both books, I realized that
                        both of them didn't have much traction to their writing careers until their 30s also and this helped me significantly to realize that when it comes to your calling 
                        in life, there is no such thing as "too late".</p>

                        <p>Today, I write regularly and also find other ways to tell stories through my AI art, indie game development, and even my website and application design as a 
                        software engineer. Because what it has taken half a lifetime for me to finally see is that writing is something that I love, have always loved, and will always love.</p>

                        <p className={styles.signature}>
                            Persephone
                        </p>
                        </div>
                    </div>
                </div>
              </div>
              </main>

              <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
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
    )
}