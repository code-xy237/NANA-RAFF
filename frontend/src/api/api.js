const BASE = process.env.REACT_APP_API || 'http://localhost:4000/api';

async function request(path, opts={}){
  const res = await fetch(`${BASE}${path}`, opts);
  if(!res.ok) throw new Error((await res.json()).msg || 'API error');
  return res.json();
}

export async function fetchProducts(q=''){ return request(`/products${q?`?q=${encodeURIComponent(q)}`:''}`); }
export async function fetchProduct(id){ return request(`/products/${id}`); }
export async function login(body){ return request('/auth/login', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) }); }
export async function register(body){ return request('/auth/register', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) }); }
export async function createOrder(token, body){ return request('/orders', { method:'POST', headers:{'Content-Type':'application/json', 'Authorization': `Bearer ${token}`}, body: JSON.stringify(body) }); }
export async function postReview(token, productId, body){ return request(`/reviews/${productId}`, { method:'POST', headers:{'Content-Type':'application/json','Authorization':`Bearer ${token}`}, body: JSON.stringify(body)}); }


