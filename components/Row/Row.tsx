import React from 'react';
import styles from './Row.module.css';

interface RowProps {
  children: React.ReactNode;
  gap?: 'sm' | 'md' | 'lg';
  align?: 'start' | 'center' | 'end';
}

export const Row: React.FC<RowProps> = ({
  children,
  gap = 'md',
  align = 'center'
}) => {
  return (
    <div
      className={styles.row}
      {...{ 'data-gap': gap, 'data-align': align }}
    >
      {children}
    </div>
  );
};
