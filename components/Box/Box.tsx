import React from 'react';
import styles from './Box.module.css';

interface BoxProps {
  children: React.ReactNode;
  padding?: 'sm' | 'md' | 'lg';
}

export const Box: React.FC<BoxProps> = ({
  children,
  padding = 'md'
}) => {
  return (
    <div
      className={styles.box}
      {...{ 'data-padding': padding }}
    >
      {children}
    </div>
  );
};
