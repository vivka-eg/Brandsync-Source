import React from 'react';
import styles from './Surface.module.css';

interface SurfaceProps {
  children: React.ReactNode;
  variant?: 'base' | 'raised' | 'container' | 'inset';
  padding?: 'sm' | 'md' | 'lg' | 'none';
}

export const Surface: React.FC<SurfaceProps> = ({
  children,
  variant = 'base',
  padding = 'md'
}) => {
  return (
    <div
      className={styles.surface}
      {...{ 'data-variant': variant, 'data-padding': padding }}
    >
      {children}
    </div>
  );
};
