import styles from "./contact.module.css";
import { useRouter, history } from "next/router";

const Contact = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };

  const handleMenuClick = () => {
    router.push("/menu");
  };

  const handleGalleryClick = () => {
    router.push("/gallery");
  };

  const handleContactUsClick = () => {
    router.push("/contact");
  };

  const handleDulceClick = () => {
    router.push("/");
  };

  const handleSecretClick = () => {
    router.push("/secret");
  };

  const openHours = {
    Sunday: { open: "8:00 AM", close: "9:00 PM" },
    Monday: { open: "8:00 AM", close: "9:00 PM" },
    Tuesday: { open: "8:00 AM", close: "9:00 PM" },
    Wednesday: { open: "8:00 AM", close: "9:00 PM" },
    Thursday: { open: "8:00 AM", close: "9:00 PM" },
    Friday: { open: "8:00 AM", close: "9:00 PM" },
    Saturday: { open: "8:00 AM", close: "9:00 PM" }
  };
  
  const now = new Date();
  console.log(now);
  const currentDay = now.toLocaleString("en-US", { weekday: "long", timeZone: "America/Los_Angeles" }); 
  const currentTime = now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "America/Los_Angeles"
  });
  
  const isOpen = () => {
    const openTime = new Date(`January 1, 2020 ${openHours[currentDay].open} PST`); 
    const closeTime = new Date(`January 1, 2020 ${openHours[currentDay].close} PST`); 
    return now >= openTime && now >= closeTime; 
  };
  
  console.log(isOpen());

  
  

  return (
    <div className={styles.contact}>

      <div className={styles.dulce}>Dulce Cafe</div>
      <div className={styles.dulce} onClick={handleDulceClick}>
      Dulce Cafe
      </div>
      <div className={styles.home} onClick={handleHomeClick}>
        Home
      </div>
      <div className={styles.products} onClick={handleMenuClick}>
        Menu
      </div>
      <div className={styles.gallery} onClick={handleGalleryClick}>
        Gallery
      </div>
      <div className={styles.contactUs} onClick={handleContactUsClick}>
        Contact US
      </div>
      <img className={styles.contactChild} alt="" src="vector-1.svg" />
      <img className={styles.contactItem} alt="" src="vector-21.svg" />
      <img className={styles.haveAGoodCupOfMatcha} alt="" />
      <img className={styles.contactInner} alt="" src="ellipse-10.svg" />
      <a href="https://www.instagram.com/cafedulcela/" target="_blank" rel=" ">
        <img class={styles.groupIcon} alt="" src="group-1.svg"/>
      </a>

      <a href="https://www.linkedin.com/company/cafe-dulce/about/" target="_blank" rel=" ">
        <img className={styles.vectorIcon} alt="" src="vector.svg" />
      </a>
    
  <a href="tel:+12135365609" target="_blank" className={styles.phoneNumber}>
  <img className={styles.vectorIcon1} alt="" src="vector1.svg" />
  </a>


      <b className={styles.weAreLocatedContainer}>
        <p className={styles.weAreLocated}>We are located at:</p>
        <p className={styles.weAreLocated}>&nbsp;</p>
        <p className={styles.weAreLocated}>
        <a
            className={styles.a}
            href={`https://www.google.com/search?q=dulce+cafe+locations&oq=dulce+&aqs=chrome.0.69i59l3j0i20i131i263i433i512j69i59j69i60l2j69i61.972j0j1&sourceid=chrome&ie=UTF-8#`}
            target="_blank"
          >
            <span className={styles.span}>3096 McClintock Ave Ste 1420, Los Angeles, CA 90007</span>
          </a>
          
          {" "}
  
        </p>
        
        <p className={styles.weAreLocated}>&nbsp;</p>
        <p className={styles.weAreLocated}>
          {`             - `}
          <a
            className={styles.a}
            href={`https://www.google.com/search?q=dulce+cafe+locations&oq=dulce+&aqs=chrome.0.69i59l3j0i20i131i263i433i512j69i59j69i60l2j69i61.972j0j1&sourceid=chrome&ie=UTF-8#`}
            target="_blank"
          >
            <span className={styles.span}>(213) 536-5609</span>
          </a>
        </p>
        <p className={styles.weAreLocated}>&nbsp;</p>
        <p className={styles.weAreLocated}>&nbsp;</p>
        <p className={styles.weAreLocated}>&nbsp;</p>
      </b>
      <div className={styles.rectangleParent}>
        <div className={styles.instanceChild} />
        <div className={styles.home} onClick={handleSecretClick}>
        <b className={styles.seeMenu}>{`click secret `}</b>
        <b className={styles.chevron}>􀆓</b>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <img className={styles.instapic} alt="" src="Screenshot 2023-04-23 at 3.27.02 PM.png" />
        <img className={styles.facebookpic} alt="" src="Screenshot 2023-04-23 at 3.27.22 PM.png" />
  <div className={styles.openStatus}>
    {isOpen() ? (
      <span className={styles.open}>Open</span>
    ) : (
      <span className={styles.closed}>Closed</span>
    )}
  </div>
</div>
    </div>
  );
};

export default Contact;
