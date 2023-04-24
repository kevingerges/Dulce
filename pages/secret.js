import styles from "./secret.module.css";

import { useRouter, history } from "next/router";

const Secret = () => {
  const router = useRouter();

  const handleContactUsClick = () => {
    router.push("/contact");
  };
  
  return (
    <div className={styles.secret}>
      <img className={styles.secretChild} alt="" src="/ellipse-1.svg" />
      <img className={styles.secretItem} alt="" src="/vector-1.svg" />
      <img className={styles.haveAGoodCupOfMatcha} alt="" />
      <img className={styles.secretInner} alt="" src="/ellipse-10.svg" />
      <div className={styles.rectangleParent}>
        <div className={styles.instanceChild} />
        <div className={styles.contactUs} onClick={handleContactUsClick}>
        <b className={styles.seeMenu}>{`    close it `}</b>
        <b className={styles.chevron}>􀆓</b>
        </div>
      </div>
      <b className={styles.bestThingsToContainer}>
        <p className={styles.bestThingsTo}>Best things to order on the menu:</p>
        <p className={styles.bestThingsTo}>&nbsp;</p>
        <p className={styles.bestThingsTo}>&nbsp;</p>
        <p className={styles.bestThingsTo}>
          {" "}
          - Matcha Latte cold iced regular milk -
        </p>
        <p className={styles.bestThingsTo}>&nbsp;</p>
        <p className={styles.bestThingsTo}> - Brick toast heated</p>
        <p className={styles.bestThingsTo}>&nbsp;</p>
        <p
          className={styles.bestThingsTo}
        >{`             - Breakfast Sandwich with extra sauce `}</p>
        <p className={styles.p}>&nbsp;</p>
        <p className={styles.p}>{`            `}</p>
        <p className={styles.p}>&nbsp;</p>
        <p className={styles.p}>&nbsp;</p>
        <p className={styles.p}>&nbsp;</p>
      </b>
      <img className={styles.secretChild1} alt="" src="/vector-2.svg" />
      <img className={styles.secretChild2} alt="" src="/vector-1.svg" />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-11.svg" />
      <img className={styles.secretChild3} alt="" src="/vector-2.svg" />
      <img className={styles.secretChild4} alt="" src="/vector-1.svg" />
      <img className={styles.secretChild5} alt="" src="/ellipse-12.svg" />
    </div>
  );
};

export default Secret;
