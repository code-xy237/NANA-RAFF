// ---------- Data (démo) ----------
  const PRODUCTS = [
    {
      id:'the-detox', name:'LK5 9g', price:4500, stock:42,
      short:'Infusion drainante à base de thé vert, citronnelle et menthe.',
      images:[
        'image/prod_pop_1.jpeg',
        'image/prod_pop_1.jpeg',
        'image/prod_pop_1.jpeg'
      ],
      category:'the',
      details:{
        desc:'Aide à éliminer les toxines et à alléger la sensation de lourdeur.',
        usage:'1 sachet, 200ml eau chaude, 3 à 5 min. 2 tasses/jour.',
        precautions:'Déconseillé aux femmes enceintes et aux enfants.',
        composition:'Thé vert 60%, citronnelle 20%, menthe 20%'
      }
    },
    {
      id:'Thé Minceur 900 g', name:'LK5 100g', price:9500, stock:18,
      short:'Complément thermogène avec caféine naturelle et L‑carnitine.',
      images:[
        'image/prod_pop_1.jpeg',
        'image/prod_pop_1.jpeg'
      ],
      category:'compléments',
      details:{
        desc:'Soutient l’oxydation des graisses lors d’une activité physique.',
        usage:'2 gélules le matin avec un grand verre d’eau.',
        precautions:'Contient caféine. Éviter en fin de journée.',
        composition:'Caféine 100mg, L‑carnitine 500mg, poivre noir'
      }
    },
    {
      id:'shaker', name:'LK5 250g', price:3500, stock:60,
      short:'Shaker anti‑fuite avec boule mélangeuse acier.',
      images:[
        'image/prod_pop_1.jpeg'
      ],
      category:'accessoires',
      details:{
        desc:'Parfait pour vos protéines et boissons isotoniques.',
        usage:'Rincer avant usage. Ne pas dépasser 60°C.',
        precautions:'Ne pas mettre au micro‑ondes.',
        composition:'PP sans BPA, acier inox'
      }
    },
    {
      id:'proteine', name:'LK5 500g', price:16500, stock:25,
      short:'Mix pois/riz, 23g de protéines/portion, arôme vanille.',
      images:[
        'image/prod_pop_1.jpeg',
        'image/prod_pop_1.jpeg'
      ],
      category:'compléments',
      details:{
        desc:'Contribue au maintien de la masse musculaire en déficit calorique.',
        usage:'30g dans 250ml d’eau ou lait végétal, 1‑2×/jour.',
        precautions:'Allergènes possibles: traces de soja.',
        composition:'Isolat de pois 70%, riz 30%'
      }
    }
  ];

  const CATEGORIES = ['tous','thé','compléments','accessoires'];

  // ---------- State ----------
  const state = {
    cart: JSON.parse(localStorage.getItem('cart')||'[]'),
    likes: JSON.parse(localStorage.getItem('likes')||'{}'), // {productId: count}
    reviews: JSON.parse(localStorage.getItem('reviews')||'{}'), // {productId: [ {rating,text,ts,helpful} ]}
    filter:{q:'',cat:'tous'}
  };

  // ---------- Utils ----------
  const fmt = n=> new Intl.NumberFormat('fr-FR').format(n)+ ' FCFA';
  const el = (sel,root=document)=> root.querySelector(sel);
  const els = (sel,root=document)=> Array.from(root.querySelectorAll(sel));
  const save = ()=>{
    localStorage.setItem('cart', JSON.stringify(state.cart));
    localStorage.setItem('likes', JSON.stringify(state.likes));
    localStorage.setItem('reviews', JSON.stringify(state.reviews));
    syncBadge();
  };
  const toast = (msg)=>{ const t=el('#toast'); t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),2200)}

  // ---------- Header & Carousel ----------
  function initCarousel(){
    const slides = el('.slides');
    const dots = el('#dots');
    const total = slides.children.length; let i=0;
    for(let k=0;k<total;k++){ const d=document.createElement('button'); d.className='dot'+(k===0?' active':''); d.addEventListener('click',()=>go(k)); dots.appendChild(d);}
    function go(idx){ i=idx; slides.style.transform=`translateX(-${i*100}%)`; els('.dot',dots).forEach((x,j)=>x.classList.toggle('active',j===i)); }
    setInterval(()=> go((i+1)%total), 5000);
  }

  // ---------- Catalogue ----------
  function renderChips(){
    const wrap = el('#categoryChips'); wrap.innerHTML='';
    CATEGORIES.forEach(cat=>{
      const b=document.createElement('button'); b.className='chip'+(state.filter.cat===cat?' active':''); b.textContent=cat.charAt(0).toUpperCase()+cat.slice(1);
      b.onclick=()=>{state.filter.cat=cat; renderProducts();}; wrap.appendChild(b);
    });
  }

  function renderProducts(){
    const grid = el('#productGrid'); grid.innerHTML='';
    const q=state.filter.q.toLowerCase();
    const cat=state.filter.cat;
    PRODUCTS.filter(p=> (cat==='tous'||p.category===cat) && (!q||p.name.toLowerCase().includes(q)||p.short.toLowerCase().includes(q)))
      .forEach(p=> grid.appendChild(productCard(p)) );
    syncBadge();
  }

  function productCard(p){
    const card=document.createElement('div'); card.className='card';
    card.innerHTML=`
      <div class="img"><img src="${p.images[0]}" alt="${p.name}"></div>
      <div class="body">
        <div class="flex space">
          <strong>${p.name}</strong>
          <span class="tag">${p.category}</span>
        </div>
        <div class="muted" style="margin:6px 0">${p.short}</div>
        <div class="flex space">
          <div class="price">${fmt(p.price)}</div>
          <div class="flex">
            <button class="btn secondary" aria-label="Voir le produit">Voir</button>
            <button class="btn" aria-label="Ajouter">+ Panier</button>
          </div>
        </div>
      </div>`;
    const [btnView, btnAdd] = els('button', card);
    btnView.onclick=()=> openProduct(p.id);
    btnAdd.onclick=()=> addToCart(p.id);
    return card;
  }

  // ---------- Product Modal ----------
  let currentProduct=null;
  function openProduct(id){
    const p = PRODUCTS.find(x=>x.id===id); currentProduct=p;
    const dlg = el('#productDialog');
    el('#pmName').textContent=p.name;
    el('#pmPrice').textContent=fmt(p.price);
    el('#pmShort').textContent=p.short;
    el('#pmStars').textContent='★★★★★';
    const main=el('#pmMain'); main.src=p.images[0];
    const thumbs=el('#pmThumbs'); thumbs.innerHTML='';
    p.images.forEach((src,i)=>{const im=new Image(); im.src=src; im.className=i===0?'active':''; im.onclick=()=>{main.src=src; els('img',thumbs).forEach(x=>x.classList.remove('active')); im.classList.add('active');}; thumbs.appendChild(im)});
    // Tabs
    const tabContent = el('#pmTabContent');
    const tabBtns = els('.tabs button', dlg);
    function setTab(key){
      tabBtns.forEach(b=> b.classList.toggle('active', b.dataset.tab===key));
      tabContent.textContent=p.details[key];
    }
    tabBtns.forEach(b=> b.onclick=()=> setTab(b.dataset.tab)); setTab('desc');

    // Likes
    const lc = state.likes[p.id]||0; el('#likeCount').textContent=lc;
    el('#likeBtn').onclick=()=>{ state.likes[p.id]=(state.likes[p.id]||0)+1; el('#likeCount').textContent=state.likes[p.id]; save(); };

    // Add to cart
    el('#addToCartBtn').onclick=()=>{ addToCart(p.id); toast('Ajouté au panier'); };

    // Reviews
    renderReviews();

    // Similar
    const simWrap = el('#similar'); simWrap.innerHTML='';
    PRODUCTS.filter(x=> x.category===p.category && x.id!==p.id).forEach(x=> simWrap.appendChild(productCard(x)));

    dlg.showModal();
  }
  function closeProduct(){ el('#productDialog').close(); currentProduct=null; }

  function renderReviews(){
    const pid=currentProduct.id; const list=(state.reviews[pid]||[]).slice();
    const sort = el('#sortReviews').value;
    list.sort((a,b)=> sort==='recent' ? b.ts-a.ts : (b.helpful||0)-(a.helpful||0));
    const wrap=el('#reviews'); wrap.innerHTML='';
    list.forEach((r,idx)=>{
      const d=document.createElement('div'); d.className='review';
      d.innerHTML=`
        <div class="row"><strong>${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</strong><button class="like">Utile (${r.helpful||0})</button></div>
        <div class="muted">${new Date(r.ts).toLocaleString('fr-FR')}</div>
        <div>${r.text}</div>`;
      el('.like',d).onclick=()=>{ r.helpful=(r.helpful||0)+1; state.reviews[pid][idx]=r; save(); renderReviews(); };
      wrap.appendChild(d);
    });
  }

  el('#postReview').onclick=()=>{
    if(!currentProduct) return;
    const rating=parseInt(el('#rating').value,10);
    const text=el('#reviewText').value.trim(); if(!text) return toast('Écrivez un avis');
    const pid=currentProduct.id; state.reviews[pid]=state.reviews[pid]||[];
    state.reviews[pid].push({rating,text,ts:Date.now(),helpful:0});
    el('#reviewText').value=''; save(); renderReviews(); toast('Avis publié');
  };
  el('#sortReviews').onchange=()=> renderReviews();

  // ---------- Cart ----------
  function syncBadge(){
    const n=state.cart.reduce((s,i)=>s+i.qty,0); const b=el('#openCart'); b.setAttribute('data-count',n);
    el('#cartTotal').textContent=fmt(state.cart.reduce((s,i)=> s + i.qty * PRODUCTS.find(p=>p.id===i.id).price, 0));
  }

  function addToCart(id){
    const item = state.cart.find(x=>x.id===id);
    if(item) item.qty++; else state.cart.push({id,qty:1});
    save();
  }

  function toggleCart(open){
    el('#drawer').classList.toggle('open',open);
    if(open){
      const list=el('#cartItems'); list.innerHTML='';
      state.cart.forEach(ci=>{
        const p=PRODUCTS.find(x=>x.id===ci.id);
        const row=document.createElement('div'); row.className='cart-item';
        row.innerHTML=`<img src="${p.images[0]}" alt="${p.name}" style="border-radius:10px">
          <div><div><strong>${p.name}</strong></div><div class="muted">${fmt(p.price)}</div></div>
          <div class="qty">
            <button>-</button><span>${ci.qty}</span><button>+</button>
          </div>`;
        const [minus, plus] = els('button',row);
        minus.onclick=()=>{ci.qty--; if(ci.qty<=0) state.cart=state.cart.filter(x=>x!==ci); save(); toggleCart(true)};
        plus.onclick=()=>{ci.qty++; save(); toggleCart(true)};
        list.appendChild(row);
      });
      syncBadge();
    }
  }

  function checkout(){
    if(!state.cart.length) return toast('Panier vide');
    const method = (document.querySelector('input[name=pay]:checked')||{}).value;
    const field = el('#payField').value.trim();
    if(!field) return toast('Renseignez votre numéro / email');
    // Démo: on réinitialise et confirme
    state.cart=[]; save(); toggleCart(false);
    alert(`Paiement ${method} initié pour ${field}.\nMerci pour votre confiance 💚`);
  }

  // ---------- Chat ----------
  const chatBox = el('#chatBox');
  el('#chatFab').onclick=()=> chatToggle();
  el('#supportBtn').onclick=()=> chatToggle(true);
  function chatToggle(force){ chatBox.classList.toggle('open', force!==undefined?force:!chatBox.classList.contains('open')); }
  function openSupport(msg){ chatToggle(true); setTimeout(()=>{ el('#chatInput').value=msg; sendMsg(); }, 200); }
  function sendMsg(){
    const input=el('#chatInput'); const txt=input.value.trim(); if(!txt) return;
    pushMsg(txt,true); input.value='';
    setTimeout(()=> pushMsg('Check !!! Bien recu, veillez contactez un conseillez au numero si dessous...'), 600);
    setTimeout(()=> pushMsg('+237 675479404. Merci !'), 1500);
  }
  function pushMsg(text,me){
    const box=el('#chatMessages'); const m=document.createElement('div'); m.className='msg'+(me?' me':''); m.textContent=text; box.appendChild(m); box.scrollTop=box.scrollHeight;
  }

  // ---------- Newsletter ----------
  function subscribe(){ const email = prompt('Votre email pour la newsletter :'); if(!email) return; toast('Inscription enregistrée'); }

  // ---------- Init ----------
  document.addEventListener('DOMContentLoaded',()=>{
    el('#year').textContent=new Date().getFullYear();
    initCarousel();
    renderChips();
    renderProducts();
    el('#searchInput').addEventListener('input', e=>{ state.filter.q=e.target.value; renderProducts(); });
    el('#openCart').onclick=()=> toggleCart(true);
    el('#openCart2').onclick=()=> toggleCart(true);
  });



  