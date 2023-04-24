import styles from "./gallery.module.css";
import { useRouter, history } from "next/router";


const Gallery = () => {
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
    <div className={styles.gallery}>
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
      <div className={styles.gallery1} onClick={handleGalleryClick}>
        Gallery
      </div>
      <div className={styles.contactUs} onClick={handleContactUsClick}>
        Contact US
      </div>
      <img className={styles.galleryChild} alt="" src="vector-1.svg" />
      <img className={styles.haveAGoodCupOfMatcha} alt="" />
      <img className={styles.galleryItem} alt="" src="ellipse-10.svg" />
      <a href="https://www.instagram.com/cafedulcela/" target="_blank" rel=" ">
        <img class={styles.groupIcon} alt="" src="group-1.svg"/>
      </a>

      <a href="https://www.linkedin.com/company/cafe-dulce/about/" target="_blank" rel=" ">
        <img className={styles.vectorIcon} alt="" src="vector.svg" />
      </a>
    
  <a href="tel:+12135365609" target="_blank" className={styles.phoneNumber}>
  <img className={styles.vectorIcon1} alt="" src="vector1.svg" />
  </a>
      <img className={styles.ellipseIcon} alt="" src="ellipse-9.svg" />
      <img
        className={styles.n1Icon}
        alt=""
        src="325957254-3263819690596497-8404350369448068777-n-1@2x.png"
      />
      <img
        className={styles.n1Icon1}
        alt=""
        src="327018147-1218495802082771-1631395122978311977-n-1@2x.png"
      />
      <img
        className={styles.c68da1a6Fb7d43c7Ac52Bf382aIcon}
        alt=""
        src="c68da1a6fb7d43c7ac52bf382acedbd7-1@2x.png"
      />
      <img
        className={styles.n1Icon2}
        alt=""
        src="326813029-5867427406682163-5721945814270487397-n-1@2x.png"
      />
      <img
        className={styles.aafedD235499f8d0f63078ef8cIcon}
        alt=""
        src="495aafedd235499f8d0f63078ef8c4b9-1@2x.png"
      />
      <img
        className={styles.eddf552ad14ec9B72f53f546bfIcon}
        alt=""
        src="08eddf552ad14ec9b72f53f546bf995d-1@2x.png"
      />
      <img
        className={styles.d5cac97Aaed49a9Bec10f8681dIcon}
        alt=""
        src="3d5cac97aaed49a9bec10f8681d72e99-1@2x.png"
      />
      <img
        className={styles.ad34bd095f363945f2abaf51Icon}
        alt=""
        src="803551823ad34bd095f363945f2abaf5-1@2x.png"
      />
      <img
        className={styles.aea7029247fa4394B6b6C5a683Icon}
        alt=""
        src="aea7029247fa4394b6b6c5a683bed9a4-1@2x.png"
      />
      <img
        className={styles.n1Icon3}
        alt=""
        src="270018648-689369742444823-3012690409930394352-n-1@2x.png"
      />
      <img
        className={styles.a41b9114385a4b2d9931Ba467dIcon}
        alt=""
        src="a41b9114385a4b2d9931ba467d582204-1@2x.png"
      />
    </div>
  );
};

export default Gallery;
