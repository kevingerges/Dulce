import { useRouter } from "next/router";
import styles from "./index.module.css";
const Home = () => {
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

  const handleMenuClick1 = () => {
    router.push("/menu");
  };

  const handleContactUsClick = () => {
    router.push("/contact");
  };

  const handleDulceClick = () => {
    router.push("/");
  };

  return (
    <div className={styles.home} >
      <div className={styles.note}>**This is not the offical website for Dulce Cafe**</div>
      <div className={styles.dulce}>Dulce Cafe</div>
      <div className={styles.dulce} onClick={handleDulceClick}>
      </div>
      <div className={styles.dulce1}>{`About Dulce `}</div>
      <img className={styles.homeChild} alt="" src="/ellipse-13.svg" />
      <img className={styles.supple1Icon} alt="" src="/supple-1@2x.png" />
      <img className={styles.homeItem} alt="" src="/vector-12.svg" />
      <img className={styles.homeInner} alt="" src="/vector-22.svg" />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-2.svg" />
      <img className={styles.homeChild1} alt="" src="/ellipse-3.svg" />
      <img className={styles.homeChild2} alt="" src="/ellipse-2.svg" />
      <b className={styles.ourCozyCoffee}>
        Our cozy coffee shop is dedicated to serving you the finest quality
        matcha drinks that will transport you to a world of green magic.
      </b>
      <b className={styles.atDulceStayContainer}>
        <p className={styles.atDulceStay}>
          At Dulce Stay, we take pride in using premium exquisite matcha
          creations, ranging from classic matcha lattes to refreshing matcha
          iced teas. Our skilled baristas meticulously prepare each drink to
          perfection, ensuring a velvety-smooth texture and a delightful balance
          of flavors.
        </p>
        <p className={styles.atDulceStay}>&nbsp;</p>
        <p className={styles.atDulceStay}>
          Whether you're a matcha connoisseur or new to the world of matcha, our
          coffee shop is a haven for all matcha enthusiasts. So come and
          experience the enchanting taste and health benefits of matcha at Dulce
          Stay, where you can truly stay in your green magic!
        </p>
      </b>
      <div className={styles.rectangleParent}>
        <div className={styles.componentChild} />
        {/* <b className={styles.seeMenu}>See Menu</b> */}
        <div className={styles.menu} onClick={handleMenuClick1}>
        <b className={styles.seeMenu}>See Menu</b>
      </div>
        <b className={styles.chevron}>􀆓</b>
      </div>
      <img className={styles.greatEnergyIcon} alt="" src="/great-energy.svg" />
      <img className={styles.homeChild3} alt="" src="/ellipse-5@2x.png" />
      <img className={styles.homeChild4} alt="" src="/ellipse-6@2x.png" />
      <img className={styles.haveAGoodCupOfMatcha} alt="" />
      <img className={styles.homeChild5} alt="" src="/ellipse-7.svg" />
      <img className={styles.homeChild6} alt="" src="/ellipse-91.svg" />
      <img className={styles.homeChild7} alt="" src="/ellipse-101.svg" />
      <img className={styles.homeChild8} alt="" src="/ellipse-8.svg" />
      <a href="https://www.instagram.com/cafedulcela/" target="_blank" rel=" ">
        <img class={styles.groupIcon} alt="" src="/group-1.svg"/>
      </a>

      <a href="https://www.linkedin.com/company/cafe-dulce/about/" target="_blank" rel=" ">
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </a>
    
  <a href="tel:+12135365609" target="_blank" className={styles.phoneNumber}>
  <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
  </a>
      <div className={styles.home1} onClick={handleHomeClick}>
        Home
      </div>
      <div className={styles.menu} onClick={handleMenuClick}>
        Menu
      </div>
      <div className={styles.gallery} onClick={handleGalleryClick}>
        Gallery
      </div>
      <div className={styles.contactUs} onClick={handleContactUsClick}>
        Contact US
      </div>
    </div>
  );
};

export default Home;
