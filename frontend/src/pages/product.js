import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct, postReview } from '../api/api';
import { AppContext } from '../context/AppContext';

export default function Product(){
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, user } = useContext(AppContext);
  useEffect(()=>{ fetchProduct(id).then(r=>setProduct(r)).catch(()=>setProduct(null)) },[id]);

  // simplified review post (auth required)
  const submitReview = async (rating, text) => {
    try{
      const token = user?.token; await postReview(token, id, { rating, comment: text });
      alert('Avis envoyé');
    }catch(e){ alert('Erreur') }
  };

  if(!product) return <div>Chargement...</div>;
  return (
    <section className="container">
      <h2>{product.name}</h2>
      <div className="product">{/* gallery + info */}</div>
      <button className="btn" onClick={()=>addToCart(product,1)}>Ajouter au panier</button>
    </section>
  );
}
