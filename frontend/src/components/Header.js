import React from 'react';
import { Link } from 'react-router-dom';
export default function Header(){
  return (
    <header className="site-header">
      <div className="container nav">
        <div className="brand">
          <img src="/logo192.png" alt="logo" className="logo-img"/>
          <span>VitalFit</span>
        </div>
        <nav>
          <Link to="/">Accueil</Link> | <Link to="/products">Produits</Link> | <Link to="/cart">Panier</Link>
        </nav>
      </div>
    </header>
  );
}
