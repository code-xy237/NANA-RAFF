import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

export default function ProductCard({ p }){
  const { addToCart } = useContext(AppContext);
  return (
    <div className="card">
      <img src={p.images && p.images[0] ? p.images[0] : '/placeholder.png'} alt={p.name} />
      <div className="body">
        <h4>{p.name}</h4>
        <p>{p.short}</p>
        <div className="flex space">
          <strong>{Intl.NumberFormat('fr-FR').format(p.price)} FCFA</strong>
          <div>
            <Link to={`/product/${p.id}`} className="btn secondary">Voir</Link>
            <button className="btn" onClick={()=>addToCart(p,1)}>Ajouter</button>
          </div>
        </div>
      </div>
    </div>
  );
}
