import styles from "./menu.module.css";
import { useRouter, history } from "next/router";
const Menu = () => {
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

  return (
    <div className={styles.menu}>
      <div className={styles.dulce} onClick={handleDulceClick}>
      <div className={styles.dulce}>Dulce Cafe</div>
      </div>
      <img className={styles.menuChild} alt="" src="vector-11.svg" />
      <img className={styles.haveAGoodCupOfMatcha} alt="" />
      <img className={styles.menuItem} alt="" src="ellipse-91.svg" />
      <img className={styles.menuInner} alt="" src="ellipse-10.svg" />
      <a href="https://www.instagram.com/cafedulcela/" target="_blank" rel=" ">
        <img class={styles.groupIcon} alt="" src="group-1.svg"/>
      </a>

      <a href="https://www.linkedin.com/company/cafe-dulce/about/" target="_blank" rel=" ">
        <img className={styles.vectorIcon} alt="" src="vector.svg" />
      </a>
    
  <a href="tel:+12135365609" target="_blank" className={styles.phoneNumber}>
  <img className={styles.vectorIcon1} alt="" src="vector1.svg" />
  </a>
      <div className={styles.dulcemenu1Wrapper}>
        <img
          className={styles.dulcemenu1Icon}
          alt=""
          src="dulcemenu-1@2x.png"
        />
      </div>
      <div className={styles.home} onClick={handleHomeClick}>
        Home
      </div>
      <div className={styles.menu1} onClick={handleMenuClick}>
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

export default Menu;
