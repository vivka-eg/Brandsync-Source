import React from 'react';
import styles from './Divider.module.css';

interface DividerProps {
  direction?: 'horizontal' | 'vertical';
}

export const Divider: React.FC<DividerProps> = ({
  direction = 'horizontal'
}) => {
  return (
    <div
      className={styles.divider}
      {...{ 'data-direction': direction }}
    />
  );
};
