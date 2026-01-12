import React from 'react';
import styles from './Grid.module.css';

interface GridProps {
  children: React.ReactNode;
  columns?: '2' | '3' | '4' | '6';
  gap?: 'sm' | 'md' | 'lg';
}

export const Grid: React.FC<GridProps> = ({
  children,
  columns = '3',
  gap = 'md'
}) => {
  return (
    <div
      className={styles.grid}
      {...{ 'data-columns': columns, 'data-gap': gap }}
    >
      {children}
    </div>
  );
};
