/* ---------- Données produits (≥ 20 images publiques via picsum.photos) ---------- */
const products = [
  {id:1, title:"LK saint 9g", category:"Skincare", price:24.99,
   img:"image/prod_pop_1.jpeg",
   description:"Complément à base de céréales végétales pour lutter contre le ventre gonflé et les ballonnements. Idéal pour un effet ventre plat en 15 jours.",
   usage:"1 sachet/jour matin et soir les 3 premiers jours, puis 1/jour. Mélanger avec 1/2 verre d'eau tiède.",
   precaution:"Éviter le contact direct avec les yeux. En cas d'irritation, cesser l'usage.",
   composition:"Céréales complètes, fibres végétales, extraits de plantes digestives (gingembre, menthe locale)."},

  {id:2, title:"LK saint 100g", category:"Skincare", price:34.50,
   img:"image/prod_pop_1.jpeg",
   description:"Booster métabolique pour brûler les graisses tout en boostant l'énergie quotidienne.",
   usage:"1 sachet matin, avec eau ou yaourt. Cure de 10 jours renouvelable.",
   precaution:"Tester sur une petite zone pour les peaux sensibles.",
   composition:"Thé vert local, graines de chia, moringa, fibres de manioc."},

  {id:3, title:"LK saint 250g", category:"Skincare", price:12.99,
   img:"image/prod_pop_1.jpeg",
   description:"Masque à l'argile qui absorbe l'excès de sébum et affine le grain de peau.",
   usage:"Appliquer 10 min puis rincer à l'eau tiède.",
   precaution:"Ne pas laisser sécher complètement si peau très sèche.",
   composition:"Céréales bio, probiotiques naturels, aloe vera camerounais."},

  {id:4, title:"LK saint 9g", category:"Haircare", price:9.90,
   img:"image/prod_pop_1.jpeg",
   description:"Détoxifiant pour purifier le foie et réduire les risques cardiovasculaires.",
   usage:"1 sachet soir, pendant 21 jours.",
   precaution:"Plantes hépatiques (artichaut africain), fibres solubles, extraits de citron vert.",
   composition:"Plantes hépatiques (artichaut africain), fibres solubles, extraits de citron vert."},

  {id:5, title:"LK saint 100g", category:"Haircare", price:11.99,
   img:"image/prod_pop_1.jpeg",
   description:"Démêle et nourrit les cheveux secs sans alourdir.",
   usage:"1/2 sachet/jour, dès le 1er trimestre.",
   precaution:"Éviter le contact avec le cuir chevelu sensible.",
   composition:"Céréales enrichies en fer, folates naturels, oméga-3 de poisson local."},

  {id:6, title:"LK saint 250g", category:"Supplements", price:15.00,
   img:"image/prod_pop_1.jpeg",
   description:"Les comprimés B12 pour soutenir l'énergie et le métabolisme.",
   usage:"1 comprimé par jour avec un verre d'eau.",
   precaution:"Consulter un médecin si enceinte ou prenant des médicaments.",
   composition:"Cyanocobalamin 1000µg, Excipients."},

  {id:7, title:"LK saint 9g", category:"Supplements", price:19.50,
   img:"image/prod_pop_1.jpeg",
   description:"Huile de poisson riche en EPA/DHA pour le cœur et le cerveau.",
   usage:"1 capsule par jour pendant le repas.",
   precaution:"Ne pas dépasser la dose recommandée.",
   composition:"Fish Oil, EPA, DHA, Vitamin E."},

  {id:8, title:"LK saint 100g", category:"Home", price:39.99,
   img:"image/prod_pop_1.jpeg",
   description:"Diffuseur élégant à ultrasons pour parfumer et purifier l'air.",
   usage:"Ajouter eau + 3-5 gouttes d'huile essentielle. Brancher.",
   precaution:"Nettoyer régulièrement. Tenir hors de portée des enfants.",
   composition:"ABS, céramique, composants électriques."},

  {id:9, title:"LK saint 250g", category:"Home", price:14.00,
   img:"image/prod_pop_1.jpeg",
   description:"Bougie artisanale parfum verveine pour apaiser l'esprit.",
   usage:"Couper la mèche à 0.5cm entre deux utilisations.",
   precaution:"Ne jamais laisser une bougie allumée sans surveillance.",
   composition:"Cire de soja, fragrance naturelle."},

  {id:10, title:"LK saint 9g", category:"Home", price:7.50,
   img:"image/prod_pop_1.jpeg",
   description:"Spray à base d'alcool et d'extraits naturels pour surface & mains.",
   usage:"Vaporiser à 20 cm et essuyer si nécessaire.",
   precaution:"Inflammable. Tenir loin des flammes.",
   composition:"Alcohol 70%, Aloe vera, Tea Tree."},

  {id:11, title:"LK saint 100g", category:"Skincare", price:5.99,
   img:"image/prod_pop_1.jpeg",
   description:"Baume riche pour réparer et protéger les lèvres gercées.",
   usage:"Appliquer au besoin plusieurs fois par jour.",
   precaution:"Arrêter l'utilisation en cas d'allergie.",
   composition:"Beeswax, Shea Butter, Vitamin E."},

  {id:12, title:"LK saint 250g", category:"Skincare", price:29.99,
   img:"image/prod_pop_1.jpeg",
   description:"Sérum concentré en rétinol pour lisser les rides et stimuler le collagène.",
   usage:"Appliquer le soir, éviter exposition solaire immédiate.",
   precaution:"Utiliser un écran solaire pendant la journée.",
   composition:"Retinol, Hyaluronic Acid, Plant Extracts."},

  {id:13, title:"LK saint 500g", category:"Skincare", price:8.99,
   img:"image/prod_pop_1.jpeg",
   description:"Crème mains non grasse pour les peaux très sèches.",
   usage:"Appliquer après chaque lavage de mains.",
   precaution:"Usage externe uniquement.",
   composition:"Glycerin, Urea, Shea Butter."},

  {id:14, title:"LK saint 700g", category:"Accessories", price:13.99,
   img:"image/prod_pop_1.jpeg",
   description:"Brosse ergonomique avec picots flexibles qui respectent les cheveux.",
   usage:"Brosser en douceur des pointes vers les racines.",
   precaution:"Nettoyer régulièrement pour éviter accumulation de produits.",
   composition:"Poignée bois, picots nylon."},

  {id:15, title:"LK saint 800g", category:"Accessories", price:22.50,
   img:"image/prod_pop_1.jpeg",
   description:"Trousse imperméable pour cosmétiques et accessoires de voyage.",
   usage:"Idéale pour transporter vos essentiels en toute sécurité.",
   precaution:"Ne pas placer d'objets tranchants sans protection.",
   composition:"Polyester imperméable, zips métalliques."},

  {id:16, title:"LK saint 900g", category:"Skincare", price:18.00,
   img:"image/prod_pop_1.jpeg",
   description:"Masque de nuit concentré pour peau fatiguée et terne.",
   usage:"Appliquer 2x par semaine comme soin intensif.",
   precaution:"Peut provoquer un léger picotement, normal pour certains ingrédients.",
   composition:"Aloe, Glycolic Acid, Niacinamide."},

  {id:17, title:"LK saint 350g", category:"Skincare", price:14.50,
   img:"image/prod_pop_1.jpeg",
   description:"Gommage doux aux grains naturels pour une peau lisse.",
   usage:"Utiliser 1-2x par semaine sous la douche, rincer.",
   precaution:"Éviter peaux abîmées ou irritées.",
   composition:"Salt Particles, Olive Oil, Essential Oils."},

  {id:18, title:"LK saint 200g", category:"Haircare", price:16.99,
   img:"image/prod_pop_1.jpeg",
   description:"Huile légère pour apporter brillance et réduire les frisottis.",
   usage:"Appliquer quelques gouttes sur cheveux secs ou humides.",
   precaution:"N'en mettre qu'une petite quantité pour éviter l'effet gras.",
   composition:"Argan Oil, Vitamin E, Fragrance."},

  {id:19, title:"LK saint 150g", category:"Skincare", price:9.99,
   img:"image/prod_pop_1.jpeg",
   description:"Patchs rafraîchissants pour décongestionner le contour des yeux.",
   usage:"Laisser poser 15-20 min sur peau nettoyée.",
   precaution:"Ne pas réutiliser les patchs.",
   composition:"Hyaluronic Acid, Caffeine, Green Tea Extract."},

  {id:20, title:"LK saint 300g", category:"Supplements", price:6.50,
   img:"image/prod_pop_1.jpeg",
   description:"Infusion relaxante pour favoriser le sommeil naturel.",
   usage:"Infuser 5-8 min dans de l'eau chaude.",
   precaution:"Ne pas dépasser 3 tasses par jour. Tenir hors de portée des enfants.",
   composition:"Camomile, Lavender, Lemon Balm."}
];

/* ---------- Initialisation UI ---------- */
const categories = ["Tous", ...Array.from(new Set(products.map(p=>p.category)))];
const categoryChips = document.getElementById('categoryChips');
const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const sortBy = document.getElementById('sortBy');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalPrice = document.getElementById('modalPrice');
const modalDesc = document.getElementById('modalDesc');
const modalUsage = document.getElementById('modalUsage');
const modalPrecaution = document.getElementById('modalPrecaution');
const modalComposition = document.getElementById('modalComposition');
const closeModal = document.getElementById('closeModal');
const addToCartBtn = document.getElementById('addToCart');
const viewCartBtn = document.getElementById('viewCart');

let activeCategory = "Tous";
let cart = JSON.parse(localStorage.getItem('nr_cart')||'[]');

/* Affiche le nombre dans le bouton panier */
function refreshCartCount(){
  viewCartBtn.innerText = `Panier (${cart.length})`;
}
refreshCartCount();

/* Génère chips */
function renderChips(){
  categoryChips.innerHTML = '';
  categories.forEach(c=>{
    const el = document.createElement('button');
    el.className = 'chip' + (c===activeCategory ? ' active':'');
    el.innerText = c;
    el.onclick = ()=> { filterBy(c) }
    categoryChips.appendChild(el);
  });
}
renderChips();

/* Filtrage et affichage produits */
function renderProducts(list){
  productGrid.innerHTML = '';
  if(list.length===0){
    productGrid.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:var(--muted); padding:40px">Aucun produit trouvé.</div>';
    return;
  }
  list.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="media">
        <img loading="lazy" src="${p.img}" alt="${p.title}">
      </div>
      <div class="body">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <h3>${p.title}</h3>
          <div class="tag">${p.category}</div>
        </div>
        <div style="color:var(--muted); font-size:14px; min-height:36px;">${p.description}</div>
        <div class="price-row">
          <div class="price">${p.price.toLocaleString('fr-FR',{style:'currency',currency:'EUR'})}</div>
          <div>
            <button class="btn secondary" onclick="viewProduct(${p.id})">Voir</button>
            <button class="btn" onclick="quickAdd(${p.id})">Ajouter</button>
          </div>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

/* Filtres et recherche */
function filterBy(cat){
  activeCategory = cat;
  renderChips();
  applyFilters();
}

function applyFilters(){
  const q = searchInput.value.trim().toLowerCase();
  let list = products.filter(p=>{
    const inCat = activeCategory === 'Tous' ? true : p.category===activeCategory;
    const matches = [p.title,p.description,p.category].join(' ').toLowerCase().includes(q);
    return inCat && matches;
  });

  // tri
  const s = sortBy.value;
  if(s === 'price-asc') list.sort((a,b)=>a.price-b.price);
  if(s === 'price-desc') list.sort((a,b)=>b.price-a.price);

  renderProducts(list);
}

/* Recherche live */
searchInput.addEventListener('input', ()=> applyFilters());
sortBy.addEventListener('change', ()=> applyFilters());

/* Vue produit/Modal */
function viewProduct(id){
  const p = products.find(x=>x.id===id);
  if(!p) return;
  modalImage.src = p.img;
  modalTitle.innerText = p.title;
  modalCategory.innerText = p.category;
  modalPrice.innerText = p.price.toLocaleString('fr-FR',{style:'currency',currency:'EUR'});
  modalDesc.innerText = p.description;
  modalUsage.innerText = p.usage;
  modalPrecaution.innerText = p.precaution;
  modalComposition.innerText = p.composition;
  modalBackdrop.classList.add('show');
  modalBackdrop.setAttribute('aria-hidden','false');

  // link add to cart to this product id
  addToCartBtn.onclick = ()=> { addToCart(p.id); };
  buyNow.onclick = ()=> { addToCart(p.id); alert('Achat simulé — merci !'); };
}

/* Close modal logic */
closeModal.onclick = ()=> { modalBackdrop.classList.remove('show'); modalBackdrop.setAttribute('aria-hidden','true'); };
modalBackdrop.addEventListener('click', (e)=> { if(e.target===modalBackdrop) { closeModal.click(); } });

/* Panier simple */
function addToCart(id){
  const p = products.find(x=>x.id===id);
  if(!p) return;
  cart.push({id:p.id, title:p.title, price:p.price});
  localStorage.setItem('nr_cart', JSON.stringify(cart));
  refreshCartCount();
  alert(`${p.title} ajouté au panier`);
  modalBackdrop.classList.remove('show');
}

function quickAdd(id){ addToCart(id) }

/* Voir panier (simple simulate) */
viewCartBtn.onclick = ()=>{
  if(cart.length===0) return alert('Votre panier est vide.');
  const lines = cart.map((c,i)=>`${i+1}. ${c.title} — ${c.price.toLocaleString('fr-FR',{style:'currency',currency:'EUR'})}`).join('\n');
  const total = cart.reduce((s,c)=>s+c.price,0);
  const proceed = confirm(`Panier :\n\n${lines}\n\nTotal : ${total.toLocaleString('fr-FR',{style:'currency',currency:'EUR'})}\n\nProcéder à la commande ?`);
  if(proceed){
    // simulation d'achat
    alert('Commande simulée — merci pour votre achat chez NANA RAFF !');
    cart = []; localStorage.setItem('nr_cart', JSON.stringify(cart)); refreshCartCount();
  }
}

/* Init render */
applyFilters();

/* Small entrance animation for grid */
document.querySelectorAll('.card').forEach((c,i)=> {
  c.style.opacity = 0; c.style.transform = 'translateY(12px)';
  setTimeout(()=> { c.style.transition = 'all .5s cubic-bezier(.2,.9,.2,1)'; c.style.opacity=1; c.style.transform='translateY(0)'; }, 80*i);
});

/* Accessibility: close modal on ESC */
document.addEventListener('keydown', e=>{
  if(e.key === 'Escape') closeModal.click();
});


function chargerProduits() {
  let produits = JSON.parse(localStorage.getItem("produits")) || [];
  let grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  produits.forEach(p => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="media"><img src="${p.image}" alt="${p.nom}"></div>
      <div class="body">
        <h3>${p.nom}</h3>
        <p>${p.description}</p>
        <div class="price-row">
          <span class="price">${p.prix} FCFA</span>
          <button class="btn" onclick="commander(${p.id})">Commander</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}
document.addEventListener("DOMContentLoaded", chargerProduits);


function commander(idProduit) {
  let produits = JSON.parse(localStorage.getItem("produits"));
  let commandes = JSON.parse(localStorage.getItem("commandes"));

  let produit = produits.find(p => p.id === idProduit);
  if (produit) {
    commandes.push({
      id: Date.now(),
      produit: produit.nom,
      prix: produit.prix,
      date: new Date().toLocaleString()
    });
    localStorage.setItem("commandes", JSON.stringify(commandes));
    alert("Commande enregistrée !");
  }
}


/* Responsive: lazy image loading handled by browser via loading="lazy" attribute */

/* End */