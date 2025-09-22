import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/api';
import ProductCard from '../components/ProductCard';

export default function Products(){
  const [products,setProducts]=useState([]);
  const [q,setQ]=useState('');
  useEffect(()=>{ fetchProducts(q).then(r=>setProducts(r)).catch(()=>setProducts([])) },[q]);
  return (
    <section className="container">
      <h2>Produits</h2>
      <input placeholder="Rechercher..." value={q} onChange={e=>setQ(e.target.value)} />
      <div className="grid">{products.map(p=> <ProductCard key={p.id} p={p} />)}</div>
    </section>
  );
}
