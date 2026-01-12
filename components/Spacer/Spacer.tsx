import React from 'react';
import styles from './Spacer.module.css';

interface SpacerProps {
  size?: 'sm' | 'md' | 'lg';
  direction?: 'horizontal' | 'vertical';
}

export const Spacer: React.FC<SpacerProps> = ({
  size = 'md',
  direction = 'vertical'
}) => {
  return (
    <div
      className={styles.spacer}
      {...{ 'data-size': size, 'data-direction': direction }}
    />
  );
};
