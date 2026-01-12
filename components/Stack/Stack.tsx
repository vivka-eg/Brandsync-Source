import React from 'react';
import styles from './Stack.module.css';

interface StackProps {
  children: React.ReactNode;
  gap?: 'sm' | 'md' | 'lg';
  align?: 'start' | 'center' | 'end';
}

export const Stack: React.FC<StackProps> = ({
  children,
  gap = 'md',
  align = 'start'
}) => {
  return (
    <div
      className={styles.stack}
      {...{ 'data-gap': gap, 'data-align': align }}
    >
      {children}
    </div>
  );
};
