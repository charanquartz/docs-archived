import styles from "./Logo.module.css";

const Logo = ({ className = "", ...props }) => (
  <div className={styles.logo}>
   <img src='https://assets.charanquartz.vercel.app/a/w/docs.assets/cq.svg' alt='next' />
    <strong>charanquartz</strong>
  </div>
);

export default Logo;