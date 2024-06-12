import Head from 'next/head';
import styles from '../styles/Contact.module.css';
import Link from 'next/link';
import React, { useState } from 'react'


export default function ContactUs() {
     // States for contact form fields
   const [fullname, setFullname] = useState("");
   const [email, setEmail] = useState("");
   const [subject, setSubject] = useState("");
   const [message, setMessage] = useState("");

   const successMessage = "Thank you for reaching out! We'll get back to you as soon as possible.";
   const failureMessage = "An error occurred and your message wasn't sent. Please try again later."
 
   //   Form validation state
   const [errors, setErrors] = useState({});
 
   //   Setting button text on form submission
   const [buttonText, setButtonText] = useState("Send");
 
   // Setting success or failure messages states
   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
   const [showFailureMessage, setShowFailureMessage] = useState(false);
 
   // Validation check method
   const handleValidation = () => {
     let tempErrors = {};
     let isValid = true;
 
     if (fullname.length <= 0) {
       tempErrors["fullname"] = true;
       isValid = false;
     }
     if (email.length <= 0) {
       tempErrors["email"] = true;
       isValid = false;
     }
     if (subject.length <= 0) {
       tempErrors["subject"] = true;
       isValid = false;
     }
     if (message.length <= 0) {
       tempErrors["message"] = true;
       isValid = false;
     }
 
     setErrors({ ...tempErrors });
     console.log("errors", errors);
     return isValid;
   };
 
   //   Handling form submit
 
   const handleSubmit = async (e) => {
     e.preventDefault();
 
     let isValidForm = handleValidation();
 
     if (isValidForm) {
       setButtonText("Sending");
       const res = await fetch("/api/sendgrid", {
         body: JSON.stringify({
           email: email,
           fullname: fullname,
           subject: subject,
           message: message,
         }),
         headers: {
           "Content-Type": "application/json",
         },
         method: "POST",
       });
 
       const { error } = await res.json();
       if (error) {
         console.log(error);
         setShowSuccessMessage(false);
         setShowFailureMessage(true);
         setButtonText("Send");

         return;
       }
       setShowSuccessMessage(true);
       setShowFailureMessage(false);
       setButtonText("Send");
       // Reset form fields
       setFullname("");
       setEmail("");
       setMessage("");
       setSubject("");
     }
     console.log(fullname, email, subject, message);
   };

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
        <Link href="/"> 
        <h3>Home</h3>
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
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formContainer}>
      <h1 className="text-2xl font-bold dark:text-gray-50">Contact Me</h1>

      <label htmlFor="fullname" className="text-gray-500 font-light mt-8 dark:text-gray-50">Full name<span className="text-red-500 dark:text-gray-50">*</span></label>
      <input type="text" name="fullname" value={fullname} onChange={(e) => { setFullname(e.target.value)}} className={styles.field} />
        {errors?.fullname && (
            <p className="text-red-500">Full name cannot be empty.</p>
        )}

      <label htmlFor="email" className="text-gray-500 font-light mt-4 dark:text-gray-50">E-mail<span className="text-red-500">*</span></label>
      <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value)}} className={styles.field} />
            {errors?.email && (
                <p className="text-red-500">Email cannot be empty.</p>
            )}

      <label htmlFor="subject" className="text-gray-500 font-light mt-4 dark:text-gray-50">Subject<span className="text-red-500">*</span></label>
      <input type="text" name="subject" value={subject} onChange={(e) => { setSubject(e.target.value)}} className={styles.field} />
                {errors?.subject && (
                    <p className="text-red-500">Subject cannot be empty.</p>
                )}

      <label htmlFor="message" className="text-gray-500 font-light mt-4 dark:text-gray-50">Message<span className="text-red-500">*</span></label>
      <textarea name="message" value={message} onChange={(e) => { setMessage(e.target.value)}} className={styles.fieldMessage}></textarea>
      {errors?.message && (
          <p className="text-red-500">Message cannot be empty.</p>
      )}
      
      <div className="flex flex-row items-center justify-start">
        <button className={styles.button}>
          {buttonText}
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-cyan-500 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor" />
          </svg>
        </button>
        </div>
        <div className="text-left">
            {showSuccessMessage && (
                <p className="text-green-500 font-semibold text-sm my-2">
                    Thank you! Your message was delivered.
                </p>
            )}
            {showFailureMessage && (
                <p className="text-red-500">
                    Something went wrong, please try again.
                </p>
            )}
        </div>
      </div>
    </form>
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
    )
}

