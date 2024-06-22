import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Sidebar</h1>
      <input
        type="range"
        className={styles.slider}
        min="0"
        max="100"
        step="10"
        defaultValue={0}
      />
    </div>
  );
};

export default Sidebar;
