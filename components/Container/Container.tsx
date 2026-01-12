import React from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'full';
  padding?: 'sm' | 'md' | 'lg';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  padding = 'md'
}) => {
  return (
    <div
      className={styles.container}
      {...{ 'data-size': size, 'data-padding': padding }}
    >
      {children}
    </div>
  );
};
