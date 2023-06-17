import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WhyUs.module.css";
const WhyUs = () => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onWhyUsText1Click = useCallback(() => {
    navigate("/why-us");
  }, [navigate]);

  const onSignInTextClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <div className={styles.whyUs}>
      <div className={styles.whyUsInner}>
        <div className={styles.isARevolutionizedEducationParent}>
          <div className={styles.isARevolutionizedContainer}>
            <p className={styles.isARevolutionized}> is a Revolutionized</p>
            <p className={styles.isARevolutionized}>
              Education Metaverse Based
            </p>
            <p className={styles.isARevolutionized}>System.</p>
          </div>
          <div className={styles.arteverse}>{`Arteverse `}</div>
        </div>
      </div>
      <div className={styles.arteverseIsCommittedContainer}>
        <p className={styles.isARevolutionized}>
          Arteverse is committed to student success and excellence in creativity
        </p>
        <p className={styles.isARevolutionized}>
          and interactive teaching. Our metaverse is built to educate, engage,
        </p>
        <p className={styles.isARevolutionized}>
          and enhance your artistic skills with a new learning experience.
        </p>
      </div>
      <div className={styles.whyUs1}>Why Us?</div>
      <div className={styles.rectangleParent}>
        <a className={styles.groupChild} target="_blank" />
        <b className={styles.home}>Home</b>
        <b className={styles.aboutUs} onClick={onAboutUsTextClick}>
          About Us
        </b>
        <b className={styles.whyUs2} onClick={onWhyUsText1Click}>
          Why Us?
        </b>
        <b className={styles.signIn} onClick={onSignInTextClick}>
          Sign in
        </b>
        <img className={styles.groupItem} alt="" src="/ellipse-1@2x.png" />
      </div>
    </div>
  );
};

export default WhyUs;
