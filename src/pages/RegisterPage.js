import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RegisterPage.module.css";
const RegisterPage = () => {
  const navigate = useNavigate();

  const onWhyUsTextClick = useCallback(() => {
    navigate("/why-us");
  }, [navigate]);

  const onSignInTextClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleLink']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutUsText1Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onWhyUsText1Click = useCallback(() => {
    navigate("/why-us");
  }, [navigate]);

  const onSignInText1Click = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <div className={styles.registerPage}>
      <b className={styles.aboutUs}>About Us</b>
      <b className={styles.whyUs} onClick={onWhyUsTextClick}>
        Why Us?
      </b>
      <b className={styles.guide}>Guide</b>
      <b className={styles.tuitionFees}>Tuition Fees</b>
      <img className={styles.registerPageChild} alt="" src="/rectangle-9.svg" />
      <img className={styles.registerPageItem} alt="" src="/rectangle-51.svg" />
      <div className={styles.register}>Register</div>
      <input
        className={styles.registerPageInner}
        type="text"
        placeholder="First Name"
      />
      <input
        className={styles.rectangleInput}
        type="text"
        placeholder="Last Name"
      />
      <input
        className={styles.registerPageChild1}
        type="email"
        placeholder="Email"
      />
      <input
        className={styles.registerPageChild2}
        type="password"
        placeholder="Password"
      />
      <b className={styles.alreadyHaveAn}>Already have an account?</b>
      <b className={styles.signIn} onClick={onSignInTextClick}>
        Sign In
      </b>
      <b className={styles.register1}>Register</b>
      <img
        className={styles.untitledDesign3RemovebgPreIcon}
        alt=""
        src="/untitled-design3removebgpreview-1@2x.png"
      />
      <div className={styles.radioButton}>
        <b className={styles.asAdmin}>As Admin</b>
        <input className={styles.radioButton3} type="radio" name="user-type" />
      </div>
      <div className={styles.radioButton1}>
        <b className={styles.asAdmin}>As Instructor</b>
        <input className={styles.radioButton3} type="radio" name="user-type" />
      </div>
      <div className={styles.radioButton4}>
        <b className={styles.asStudent}>As Student</b>
        <input className={styles.radioButton11} type="radio" name="user-type" />
      </div>
      <div className={styles.rectangleParent}>
        <a className={styles.frameChild} target="_blank" />
        <a className={styles.home} onClick={onHomeClick}>
          Home
        </a>
        <b className={styles.aboutUs1} onClick={onAboutUsText1Click}>
          About Us
        </b>
        <b className={styles.whyUs1} onClick={onWhyUsText1Click}>
          Why Us?
        </b>
        <b className={styles.signIn1} onClick={onSignInText1Click}>
          Sign in
        </b>
        <img className={styles.frameItem} alt="" src="/ellipse-1@2x.png" />
      </div>
    </div>
  );
};

export default RegisterPage;
