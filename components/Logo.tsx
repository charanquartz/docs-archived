import styles from "./Logo.module.css";

const Logo = ({ className = "", ...props }) => (
  <div className={styles.logo}>
    <img src='./c.svg' alt='next' />
    <strong>charanquartz</strong>
  </div>
);

export default Logo;