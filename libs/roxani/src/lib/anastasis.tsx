import styles from './anastasis.module.css';

/* eslint-disable-next-line */
export interface AnastasisProps {}

export function Anastasis(props: AnastasisProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Anastasis!</h1>
    </div>
  );
}

export default Anastasis;
