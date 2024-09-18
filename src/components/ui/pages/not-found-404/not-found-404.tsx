import { FC } from 'react';
import styles from '../common.module.css';

export const NotFound404UI: FC = () => (
  <div className={`${styles.wrapCenter} ${styles.text_center}`}>
    <h3 className={`pb-6 text text_type_main-large`}>
      Страница не найдена. Ошибка 404.
    </h3>
    <h2>😔</h2>
  </div>
);
