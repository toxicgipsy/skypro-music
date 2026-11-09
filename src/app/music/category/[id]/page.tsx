'use client';

import { useParams } from 'next/navigation';

const CategoryPage = () => {
  const params = useParams<{ id: string }>();
};

export default CategoryPage;
