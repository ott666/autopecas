'use client'
// app/products/page.tsx
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import dataProducts from '@/data/resultados.json'; // Importando o arquivo JSON local
import { Card1 } from '@/components/Cards/Card1';

// Defina a interface Product
interface Product {
  id: string;
  title: string;
  value_name: string;
  permalink: string;
  urls: string[][];
}

const ProductsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const page = parseInt(searchParams.get('page') || '1', 10);
    setCurrentPage(page);
    const startIndex = (page - 1) * 8;
    const endIndex = startIndex + 8;
    const fetchedProducts = dataProducts.slice(startIndex, endIndex);
    setProducts(fetchedProducts);
  }, [searchParams]);

  const handlePageChange = (newPage: number) => {
    router.push(`/products?page=${newPage}`);
  };

  return (
    <div className='grid grid-cols-6'>
      {products.map((product) => (
        <div className='col-span-1' key={product.id}>
          <Card1 title={product.title} thumb={product.urls[0][1]} />
        </div>
      ))}
      <div>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous Page
        </button>
        <button onClick={() => handlePageChange(currentPage + 1)}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;
