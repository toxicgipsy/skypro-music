'use client';
import Link from 'next/link';
import styles from './SelectionCard.module.css';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import Image from 'next/image';

type SelectionCardProps = {
  id: number;
  src: string;
  title: string;
};

const SelectionCard = ({ id, src, title }: SelectionCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <Link
      href={`/music/category/${id}`}
      className={styles.card}
      aria-label={title}
      aria-busy={isLoading}
    >
      {isLoading && (
        <div className={styles.placeholder}>
          <Skeleton height="100%" baseColor="#313131" highlightColor="#444" />
        </div>
      )}
      {hasError ? (
        <span className={styles.fallback}>{title}</span>
      ) : (
        <Image
          src={src}
          alt={title}
          fill
          sizes="250px"
          loading={id === 2 ? 'eager' : 'lazy'}
          className={styles.image}
          style={{ opacity: isLoading ? 0 : 1 }}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      )}
    </Link>
  );
};

export default SelectionCard;
