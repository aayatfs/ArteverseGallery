import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignInPage.module.css";
const SignInPage = () => {
  const navigate = useNavigate();

  const onRegisterNowClick = useCallback(() => {
    navigate("/register-page");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleLink']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onWhyUsTextClick = useCallback(() => {
    navigate("/why-us");
  }, [navigate]);

  const onSignInText2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleLink']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.signInPage}>
      <img className={styles.signInPageChild} alt="" src="/rectangle-91.svg" />
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
      <img className={styles.signInPageItem} alt="" src="/rectangle-51.svg" />
      <div className={styles.signIn}>Sign In</div>
      <input
        className={styles.signInPageInner}
        type="email"
        placeholder="Email"
      />
      <input
        className={styles.rectangleInput}
        type="password"
        placeholder="Password"
      />
      <b className={styles.dontHaveAn}>Don’t have an account?</b>
      <Link
        className={styles.registerNow}
        to="/register-page"
        onClick={onRegisterNowClick}
      >
        Register Now
      </Link>
      <b className={styles.signIn1}>Sign In</b>
      <img
        className={styles.untitledDesign2RemovebgPreIcon}
        alt=""
        src="/untitled-design2removebgpreview-1@2x.png"
      />
      <div className={styles.rectangleParent}>
        <a
          className={styles.frameChild}
          target="_blank"
          data-scroll-to="rectangleLink"
        />
        <a className={styles.home} onClick={onHomeClick}>
          Home
        </a>
        <b className={styles.aboutUs} onClick={onAboutUsTextClick}>
          About Us
        </b>
        <b className={styles.whyUs} onClick={onWhyUsTextClick}>
          Why Us?
        </b>
        <b className={styles.signIn2} onClick={onSignInText2Click}>
          Sign in
        </b>
        <img className={styles.frameItem} alt="" src="/ellipse-1@2x.png" />
      </div>
    </div>
  );
};

export default SignInPage;
