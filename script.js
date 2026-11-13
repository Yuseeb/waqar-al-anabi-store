const regions={PK:["Pakistan","🇵🇰","PKR","₨","Pakistani Rupee"],US:["United States","🇺🇸","USD","$","US Dollar"],GB:["United Kingdom","🇬🇧","GBP","£","British Pound"],AE:["United Arab Emirates","🇦🇪","AED","د.إ","UAE Dirham"],SA:["Saudi Arabia","🇸🇦","SAR","﷼","Saudi Riyal"],CA:["Canada","🇨🇦","CAD","$","Canadian Dollar"],AU:["Australia","🇦🇺","AUD","$","Australian Dollar"],IN:["India","🇮🇳","INR","₹","Indian Rupee"],TR:["Türkiye","🇹🇷","TRY","₺","Turkish Lira"],EU:["European Union","🇪🇺","EUR","€","Euro"],QA:["Qatar","🇶🇦","QAR","﷼","Qatari Riyal"],KW:["Kuwait","🇰🇼","KWD","د.ك","Kuwaiti Dinar"],OM:["Oman","🇴🇲","OMR","ر.ع.","Omani Rial"],BH:["Bahrain","🇧🇭","BHD",".د.ب","Bahraini Dinar"],MY:["Malaysia","🇲🇾","MYR","RM","Malaysian Ringgit"]};
let country="PK",currency="PKR",cart=[],filter="All";
try { cart=JSON.parse(localStorage.getItem("wa-cart")||"[]"); if(!Array.isArray(cart))cart=[]; } catch(error) { cart=[]; }
let favorites=[];
try { favorites=JSON.parse(localStorage.getItem("wa-favorites")||"[]").map(Number); } catch(error) { favorites=[]; }

const $=id=>document.getElementById(id),countrySelect=$("countrySelect");

// Start the headline rotation only after the visitor enters the store.
let announcementTimer = null;
function startAnnouncementTicker() {
  const headline = $("announcementHeadline");
  if (!headline || announcementTimer) return;
  const headlines = [
    "— PEOPLE NOT TRENDS —",
    "— WE DON'T COMPETE. WE COMPLETE. —"
  ];
  let index = 0;
  headline.textContent = headlines[index];
  announcementTimer = window.setInterval(() => {
    headline.classList.add("is-changing");
    window.setTimeout(() => {
      index = (index + 1) % headlines.length;
      headline.textContent = headlines[index];
      headline.classList.remove("is-changing");
    }, 350);
  }, 10000);
}


const themeToggle = $("themeToggle");
function applyTheme(theme) {
  const selected = theme === "dark" ? "dark" : "light";
  document.body.dataset.theme = selected;
  localStorage.setItem("wa-theme", selected);
  if (themeToggle) {
    themeToggle.textContent = selected === "dark" ? "☀" : "☾";
    themeToggle.setAttribute("aria-label", selected === "dark" ? "Switch to light mode" : "Switch to dark mode");
    themeToggle.setAttribute("title", selected === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }
}
applyTheme(localStorage.getItem("wa-theme") || "light");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    applyTheme(document.body.dataset.theme === "dark" ? "light" : "dark");
  });
}

function chooseCountry(code){const r=regions.PK;country="PK";currency="PKR";$("flag").textContent=r[1];$("symbol").textContent=r[3];$("currencySelect").innerHTML='<option value="PKR">PKR — Pakistani Rupee</option>';countrySelect.value="PK";countrySelect.options[0].disabled=false;for(let i=1;i<countrySelect.options.length;i++)countrySelect.options[i].disabled=true;const selectedName=countrySelect.options[countrySelect.selectedIndex].textContent.trim().split(" — ")[0];$("startCountry").textContent=selectedName.toUpperCase()}
function openWelcome(){$("store").classList.add("hidden");$("welcome").classList.remove("hidden");chooseCountry("PK");window.scrollTo(0,0)}
function enterStore(){localStorage.setItem("wa-country",country);localStorage.setItem("wa-currency",currency);$("welcome").classList.add("hidden");$("store").classList.remove("hidden");$("region").textContent=country+" / "+currency;startAnnouncementTicker();render();routePage();window.scrollTo(0,0)}
countrySelect.addEventListener("change",e=>chooseCountry(e.target.value));$("start").addEventListener("click",enterStore);$("change").addEventListener("click",openWelcome);
const products=[
{id:1,name:"Classic Polo Shirt",cat:"Men",price:3490,img:"https://images.unsplash.com/photo-1625910513413-5fc3f3b1f1b9?auto=format&fit=crop&w=800&q=85",sizes:["S","M","L","XL"],fit:"Regular fit — edit to match the final garment.",fabricComposition:"Add confirmed fabric composition",fabricQuality:"Add fabric weight, texture and finish details",sizeGuide:[{size:"S",chest:"—",length:"—",waist:"—",hip:"—"},{size:"M",chest:"—",length:"—",waist:"—",hip:"—"},{size:"L",chest:"—",length:"—",waist:"—",hip:"—"},{size:"XL",chest:"—",length:"—",waist:"—",hip:"—"}]},
{id:2,name:"Everyday Boxy Tee",cat:"Women",price:2490,img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85",sizes:["S","M","L","XL"],fit:"Relaxed boxy fit — edit to match the final garment.",fabricComposition:"Add confirmed fabric composition",fabricQuality:"Add fabric weight, softness and finish details",sizeGuide:[{size:"S",chest:"—",length:"—",waist:"—",hip:"—"},{size:"M",chest:"—",length:"—",waist:"—",hip:"—"},{size:"L",chest:"—",length:"—",waist:"—",hip:"—"},{size:"XL",chest:"—",length:"—",waist:"—",hip:"—"}]},
{id:3,name:"Relaxed Sweatshirt",cat:"Men",price:4290,img:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=85",sizes:["S","M","L","XL"],fit:"Relaxed fit — edit to match the final garment.",fabricComposition:"Add confirmed fabric composition",fabricQuality:"Add fabric weight, inner feel and finish details",sizeGuide:[{size:"S",chest:"—",length:"—",waist:"—",hip:"—"},{size:"M",chest:"—",length:"—",waist:"—",hip:"—"},{size:"L",chest:"—",length:"—",waist:"—",hip:"—"},{size:"XL",chest:"—",length:"—",waist:"—",hip:"—"}]},
{id:4,name:"Wide-Leg Trousers",cat:"Women",price:3990,img:"https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=85",sizes:["S","M","L","XL"],fit:"Wide-leg fit — edit to match the final garment.",fabricComposition:"Add confirmed fabric composition",fabricQuality:"Add fabric drape, weight and finish details",sizeGuide:[{size:"S",chest:"—",length:"—",waist:"—",hip:"—"},{size:"M",chest:"—",length:"—",waist:"—",hip:"—"},{size:"L",chest:"—",length:"—",waist:"—",hip:"—"},{size:"XL",chest:"—",length:"—",waist:"—",hip:"—"}]},
{id:5,name:"Modern Co-Ord Set",cat:"Women",price:5990,img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85",sizes:["S","M","L","XL"],fit:"Co-ord set — edit fit notes for top and bottom.",fabricComposition:"Add confirmed fabric composition",fabricQuality:"Add fabric texture, drape and finish details",sizeGuide:[{size:"S",chest:"—",length:"—",waist:"—",hip:"—"},{size:"M",chest:"—",length:"—",waist:"—",hip:"—"},{size:"L",chest:"—",length:"—",waist:"—",hip:"—"},{size:"XL",chest:"—",length:"—",waist:"—",hip:"—"}]},
{id:6,name:"Pleated Relaxed Pants",cat:"Men",price:4490,img:"https://images.unsplash.com/photo-1511196044526-5cb3bcbc707b?auto=format&fit=crop&w=800&q=85",sizes:["S","M","L","XL"],fit:"Relaxed pleated fit — edit to match the final garment.",fabricComposition:"Add confirmed fabric composition",fabricQuality:"Add fabric weight, drape and finish details",sizeGuide:[{size:"S",chest:"—",length:"—",waist:"—",hip:"—"},{size:"M",chest:"—",length:"—",waist:"—",hip:"—"},{size:"L",chest:"—",length:"—",waist:"—",hip:"—"},{size:"XL",chest:"—",length:"—",waist:"—",hip:"—"}]},
{id:7,name:"Classic Polo Shirt — Women",cat:"Women",price:3490,img:"https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=85",sizes:["S","M","L","XL"],fit:"Regular fit — edit to match the final garment.",fabricComposition:"Add confirmed fabric composition",fabricQuality:"Add fabric weight, texture and finish details",sizeGuide:[{size:"S",chest:"—",length:"—",waist:"—",hip:"—"},{size:"M",chest:"—",length:"—",waist:"—",hip:"—"},{size:"L",chest:"—",length:"—",waist:"—",hip:"—"},{size:"XL",chest:"—",length:"—",waist:"—",hip:"—"}]},
{id:8,name:"Boxy T-Shirt — Men",cat:"Men",price:2490,img:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=85",sizes:["S","M","L","XL"],fit:"Relaxed boxy fit — edit to match the final garment.",fabricComposition:"Add confirmed fabric composition",fabricQuality:"Add fabric weight, softness and finish details",sizeGuide:[{size:"S",chest:"—",length:"—",waist:"—",hip:"—"},{size:"M",chest:"—",length:"—",waist:"—",hip:"—"},{size:"L",chest:"—",length:"—",waist:"—",hip:"—"},{size:"XL",chest:"—",length:"—",waist:"—",hip:"—"}]}
];
const money=n=>{try{return new Intl.NumberFormat("en",{style:"currency",currency,maximumFractionDigits:0}).format(n)}catch{return currency+" "+Math.round(n).toLocaleString("en")}};
function updateFavorites(){
  const count=$("favoriteCount");
  if(count)count.textContent=favorites.length;
  const items=$("favoriteItems");
  if(!items)return;
  const savedProducts=products.filter(p=>favorites.includes(p.id));
  items.innerHTML=savedProducts.map(p=>'<article class="favorite-item"><button type="button" class="favorite-item-image" data-view-favorite="'+p.id+'"><img src="'+p.img+'" alt="'+p.name+'"></button><div class="favorite-item-info"><button type="button" class="favorite-item-name" data-view-favorite="'+p.id+'">'+p.name+'</button><span>'+money(p.price)+'</span><button type="button" class="favorite-remove" data-remove-favorite="'+p.id+'">REMOVE ♥</button></div></article>').join("")||'<p class="favorites-empty">Your favourites list is empty. Save pieces you love and find them here.</p>';
  items.querySelectorAll("img").forEach(img=>img.addEventListener("error",()=>{img.style.visibility="hidden"},{once:true}));
}
function toggleFavorite(productId){
  const id=Number(productId);
  if(favorites.includes(id))favorites=favorites.filter(item=>item!==id);
  else favorites.push(id);
  localStorage.setItem("wa-favorites",JSON.stringify(favorites));
  updateFavorites();
  document.querySelectorAll('[data-favorite="'+id+'"]').forEach(button=>{
    const saved=favorites.includes(id);
    button.classList.toggle("is-favorite",saved);
    button.setAttribute("aria-pressed",String(saved));
    button.setAttribute("aria-label",saved?"Remove from favourites":"Add to favourites");
    button.innerHTML='<span aria-hidden="true">'+(saved?'♥':'♡')+'</span><em>'+(saved?'SAVED':'ADD TO FAVOURITES')+'</em>';
  });
  if(favorites.includes(id))$("favorites").classList.add("open");
}
function productCard(p){
  const saved=favorites.includes(p.id);
  return '<article class="product-card" data-product-id="'+p.id+'" role="link" tabindex="0" aria-label="View details for '+p.name+'"><div class="product-image"><img src="'+p.img+'" alt="'+p.name+'" loading="lazy"><button type="button" class="favorite-card-button '+(saved?'is-favorite':'')+'" data-favorite="'+p.id+'" aria-label="'+(saved?'Remove from':'Add to')+' favourites" aria-pressed="'+saved+'"><span aria-hidden="true">'+(saved?'♥':'♡')+'</span><em>'+(saved?'SAVED':'ADD TO FAVOURITES')+'</em></button></div><h3>'+p.name+'</h3><p>'+money(p.price)+'</p></article>';
}
function sortedProducts(items,sort){
  const list=[...items];
  if(sort==="price-asc")list.sort((a,b)=>a.price-b.price);
  else if(sort==="price-desc")list.sort((a,b)=>b.price-a.price);
  else if(sort==="name")list.sort((a,b)=>a.name.localeCompare(b.name));
  return list;
}
function render(){
  const grid=$("grid");
  const maxPrice=Number($("productMaxPrice")?.value||0);
  const matches=products.filter(p=>(filter==="All"||p.cat===filter)&&(!maxPrice||p.price<=maxPrice));
  grid.innerHTML=sortedProducts(matches,$("productSort")?.value).map(productCard).join("")||'<p>No pieces match these filters. Try a different price or category.</p>';
  grid.querySelectorAll("img").forEach(img=>img.addEventListener("error",()=>{img.style.display="none";img.parentElement.style.background="linear-gradient(135deg,#f1e8e1,#e4d2c9)"},{once:true}));
}
function updateBag(){
  localStorage.setItem("wa-cart",JSON.stringify(cart));
  $("count").textContent=cart.reduce((a,p)=>a+p.qty,0);
  $("subtotal").textContent=money(cart.reduce((a,p)=>a+p.price*p.qty,0));
  $("items").innerHTML=cart.map(p=>'<article class="bag-line-item"><div class="bag-line-copy"><strong>'+p.name+'</strong><small>Size: '+(p.selectedSize||"Not selected")+'</small><b>'+money(p.price*p.qty)+'</b></div><div class="bag-line-actions"><button type="button" data-quantity="-1" data-id="'+p.id+'" data-size="'+(p.selectedSize||"Not selected")+'" aria-label="Decrease quantity">−</button><span>'+p.qty+'</span><button type="button" data-quantity="1" data-id="'+p.id+'" data-size="'+(p.selectedSize||"Not selected")+'" aria-label="Increase quantity">+</button><button type="button" data-remove="'+p.id+'" data-size="'+(p.selectedSize||"Not selected")+'">Remove</button></div></article>').join("")||'<p class="bag-empty">Your bag is empty. Discover your next favourite piece.</p>';
}
$("grid").addEventListener("click",e=>{const fav=e.target.closest("[data-favorite]");if(fav){toggleFavorite(fav.dataset.favorite);return}handleProductCardClick(e)});
$("grid").addEventListener("keydown",handleProductCardKeydown);
$("collectionGrid").addEventListener("click",e=>{const fav=e.target.closest("[data-favorite]");if(fav){toggleFavorite(fav.dataset.favorite);return}handleProductCardClick(e)});
$("collectionGrid").addEventListener("keydown",handleProductCardKeydown);
$("productDetailContent").addEventListener("click",e=>{const button=e.target.closest("[data-detail-add]");if(button&&!button.disabled){const chosen=$("productDetailContent").querySelector(".size-option.selected");if(chosen)addProductToBag(button.dataset.detailAdd,chosen.dataset.size)}});
$("items").addEventListener("click",e=>{
  const target=e.target.closest("button");
  if(!target)return;
  const id=Number(target.dataset.id||target.dataset.remove);
  if(!id)return;
  const size=target.dataset.size||"Not selected";
  const item=cart.find(p=>p.id===id&&(p.selectedSize||"Not selected")===size);
  if(target.dataset.remove){
    cart=cart.filter(p=>!(p.id===id&&(p.selectedSize||"Not selected")===size));
  }else if(target.dataset.quantity&&item){
    item.qty=Math.max(1,item.qty+Number(target.dataset.quantity));
  }
  updateBag();
});
$("favoriteItems").addEventListener("click",e=>{
  const remove=e.target.closest("[data-remove-favorite]");
  const view=e.target.closest("[data-view-favorite]");
  if(remove){toggleFavorite(remove.dataset.removeFavorite);return}
  if(view){$("favorites").classList.remove("open");openProduct(view.dataset.viewFavorite)}
});
$("favoritesOpen").addEventListener("click",()=>{$("favorites").classList.add("open");setMobileNavActive(mobileFavorites)});
$("favoritesClose").addEventListener("click",()=>{$("favorites").classList.remove("open");setMobileNavActive(mobileHome)});

$("cartOpen").addEventListener("click",()=>{$("bag").classList.add("open");setMobileNavActive(mobileBag)});$("close").addEventListener("click",()=>{$("bag").classList.remove("open");setMobileNavActive(mobileHome)});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){$("bag").classList.remove("open");$("favorites").classList.remove("open");$("nav").classList.remove("open");setMobileNavActive(mobileHome)}});
document.querySelectorAll(".filters button").forEach(b=>b.addEventListener("click",()=>{filter=b.dataset.cat;document.querySelectorAll(".filters button").forEach(x=>x.classList.toggle("active",x===b));render()}));
$("productSort").addEventListener("change",render);
$("productMaxPrice").addEventListener("change",render);
$("collectionSort").addEventListener("change",routePage);
function renderCollection(category){
  const title = category === "Women" ? "For Her" : "For Him";
  $("collectionTitle").textContent = title;
  $("collectionEyebrow").textContent = category === "Women" ? "THE WOMEN'S COLLECTION" : "THE MEN'S COLLECTION";
  $("collectionDescription").textContent = category === "Women"
    ? "Thoughtful silhouettes, effortless fits, and everyday pieces made to feel like you."
    : "Refined essentials, relaxed fits, and considered details for everyday confidence.";
  $("collectionGrid").innerHTML = sortedProducts(products.filter(p=>p.cat===category),$("collectionSort")?.value).map(productCard).join("") || '<p class="empty-collection">New pieces are coming soon.</p>';
  $("collectionGrid").querySelectorAll("img").forEach(img=>img.addEventListener("error",()=>{img.style.display="none";img.parentElement.style.background="linear-gradient(135deg,#7A1E3A,#49202E)"},{once:true}));
}

function renderProductDetail(product){
  const isWomen = product.cat === "Women";
  const galleryImages = product.galleryImages && product.galleryImages.length ? product.galleryImages : [product.img];
  let activeImageIndex = 0;
  $("productBack").href = isWomen ? "#for-her" : "#for-him";
  const sizeRows=(product.sizeGuide||[]).map(row=>'<tr><td>'+row.size+'</td><td>'+row.chest+'</td><td>'+row.length+'</td><td>'+row.waist+'</td><td>'+row.hip+'</td></tr>').join("");
  const sizes=(product.sizes||["S","M","L","XL"]).map(size=>'<button type="button" class="size-option" data-size="'+size+'" aria-pressed="false">'+size+'</button>').join("");
  const thumbs = galleryImages.length > 1 ? '<div class="product-gallery-thumbnails">'+galleryImages.map((src,index)=>'<button type="button" class="gallery-thumb '+(index===0?'active':'')+'" data-gallery-index="'+index+'" aria-label="Show product photo '+(index+1)+'"><img src="'+src+'" alt=""></button>').join("")+'</div>' : "";
  const arrows = galleryImages.length > 1 ? '<button type="button" class="gallery-arrow gallery-prev" aria-label="Previous photo">‹</button><button type="button" class="gallery-arrow gallery-next" aria-label="Next photo">›</button><span class="gallery-count">1 / '+galleryImages.length+'</span>' : '<span class="gallery-zoom-hint">CLICK TO ZOOM</span>';
  $("productDetailContent").innerHTML =
    '<div class="product-gallery-column"><div class="product-detail-image product-gallery-frame"><img id="productGalleryImage" src="'+galleryImages[0]+'" alt="'+product.name+' — photo 1" tabindex="0" role="button" aria-label="Zoom product photo"><button type="button" class="gallery-zoom-button" aria-label="Zoom image">⌕</button>'+arrows+'</div>'+thumbs+'</div>'+
    '<div class="product-detail-info">'+
      '<small class="product-detail-kicker">'+(isWomen ? "THE WOMEN'S COLLECTION" : "THE MEN'S COLLECTION")+'</small>'+
      '<h1>'+product.name+'</h1>'+
      '<p class="product-detail-price">'+money(product.price)+'</p>'+
      '<div class="product-detail-rule"></div>'+
      '<p class="product-detail-description">'+(isWomen ? "Thoughtful design, effortless styling, and considered details. A versatile addition to your everyday wardrobe." : "A refined everyday essential, designed with an effortless fit and considered details. Made to become part of your everyday rotation.")+'</p>'+
      '<div class="product-fit-block"><span class="detail-label">FIT</span><p>'+product.fit+'</p></div>'+
      '<div class="product-size-block"><div class="size-heading"><span class="detail-label">SELECT SIZE</span><button type="button" class="size-guide-toggle" id="sizeGuideToggle">SIZE GUIDE +</button></div><div class="size-options">'+sizes+'</div><p class="size-selection-hint" id="sizeSelectionHint">Please select a size before adding to bag.</p></div>'+
      '<div class="fabric-details"><span class="detail-label">FABRIC & QUALITY</span><p><strong>Composition</strong> — '+product.fabricComposition+'</p><p><strong>Quality & feel</strong> — '+product.fabricQuality+'</p></div>'+
      '<div class="size-guide-panel hidden" id="sizeGuidePanel"><p class="size-guide-title">GARMENT MEASUREMENTS <span>(INCHES)</span></p><div class="size-table-wrap"><table class="size-guide-table"><thead><tr><th>Size</th><th>Chest</th><th>Length</th><th>Waist</th><th>Hip</th></tr></thead><tbody>'+sizeRows+'</tbody></table></div><small>Measurements are editable placeholders. Add your confirmed garment measurements before publishing.</small></div>'+
      '<p class="product-detail-note">PEOPLE NOT TRENDS. — WAQAR AL ANABI</p>'+
      '<button type="button" class="product-detail-add" data-detail-add="'+product.id+'" disabled>SELECT A SIZE <span>↗</span></button>'+
      '<p class="product-detail-shipping">Prices displayed in PKR.</p>'+
    '</div>'+
    '<div class="product-image-lightbox hidden" id="productImageLightbox" role="dialog" aria-modal="true" aria-label="Product photo viewer"><button type="button" class="lightbox-close" aria-label="Close zoomed image">×</button><button type="button" class="lightbox-arrow lightbox-prev" aria-label="Previous photo">‹</button><img id="lightboxImage" src="'+galleryImages[0]+'" alt="'+product.name+' — enlarged photo"><button type="button" class="lightbox-arrow lightbox-next" aria-label="Next photo">›</button><span class="lightbox-count">1 / '+galleryImages.length+'</span></div>';
  const mainImage=$("productGalleryImage");
  const lightbox=$("productImageLightbox");
  const lightboxImage=$("lightboxImage");
  const count=lightbox.querySelector(".lightbox-count");
  const updateGallery=()=>{
    const src=galleryImages[activeImageIndex];
    mainImage.src=src;
    mainImage.alt=product.name+" — photo "+(activeImageIndex+1);
    lightboxImage.src=src;
    lightboxImage.alt=product.name+" — enlarged photo "+(activeImageIndex+1);
    count.textContent=(activeImageIndex+1)+" / "+galleryImages.length;
    $("productDetailContent").querySelectorAll("[data-gallery-index]").forEach(button=>button.classList.toggle("active",Number(button.dataset.galleryIndex)===activeImageIndex));
  };
  const moveGallery=(step)=>{
    if(galleryImages.length<2)return;
    activeImageIndex=(activeImageIndex+step+galleryImages.length)%galleryImages.length;
    updateGallery();
  };
  const openZoom=()=>{lightbox.classList.remove("hidden");document.body.classList.add("gallery-zoom-open");lightbox.querySelector(".lightbox-close").focus()};
  const closeZoom=()=>{lightbox.classList.add("hidden");document.body.classList.remove("gallery-zoom-open")};
  mainImage.addEventListener("click",openZoom);
  mainImage.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();openZoom()}});
  $("productDetailContent").querySelector(".gallery-zoom-button").addEventListener("click",openZoom);
  $("productDetailContent").querySelector(".gallery-prev")?.addEventListener("click",()=>moveGallery(-1));
  $("productDetailContent").querySelector(".gallery-next")?.addEventListener("click",()=>moveGallery(1));
  $("productDetailContent").querySelectorAll("[data-gallery-index]").forEach(button=>button.addEventListener("click",()=>{activeImageIndex=Number(button.dataset.galleryIndex);updateGallery()}));
  lightbox.querySelector(".lightbox-close").addEventListener("click",closeZoom);
  lightbox.querySelector(".lightbox-prev").addEventListener("click",()=>moveGallery(-1));
  lightbox.querySelector(".lightbox-next").addEventListener("click",()=>moveGallery(1));
  lightbox.addEventListener("click",event=>{if(event.target===lightbox)closeZoom()});
  const escapeHandler=event=>{if(event.key==="Escape"&&!lightbox.classList.contains("hidden"))closeZoom();if(event.key==="ArrowLeft"&&!lightbox.classList.contains("hidden"))moveGallery(-1);if(event.key==="ArrowRight"&&!lightbox.classList.contains("hidden"))moveGallery(1)};
  document.addEventListener("keydown",escapeHandler);
  let selectedSize="";
  const addButton=$("productDetailContent").querySelector("[data-detail-add]");
  $("productDetailContent").querySelectorAll("[data-size]").forEach(button=>button.addEventListener("click",()=>{
    selectedSize=button.dataset.size;
    $("productDetailContent").querySelectorAll("[data-size]").forEach(option=>{
      const active=option===button;
      option.classList.toggle("selected",active);
      option.setAttribute("aria-pressed",String(active));
    });
    $("sizeSelectionHint").textContent="Selected size: "+selectedSize;
    addButton.disabled=false;
    addButton.innerHTML='ADD TO BAG — '+selectedSize+' <span>↗</span>';
  }));
  $("sizeGuideToggle").addEventListener("click",()=>{
    const panel=$("sizeGuidePanel");
    const opening=panel.classList.contains("hidden");
    panel.classList.toggle("hidden",!opening);
    $("sizeGuideToggle").textContent=opening?"SIZE GUIDE −":"SIZE GUIDE +";
  });
  mainImage.addEventListener("error",()=>{mainImage.style.display="none";mainImage.parentElement.style.background="linear-gradient(135deg,#7A1E3A,#49202E)"},{once:true});
}
function openProduct(productId){
  const product=products.find(p=>p.id===Number(productId));
  if(!product)return;
  location.hash="#product-"+product.id;
}
function addProductToBag(productId, selectedSize="Not selected"){
  const p=products.find(x=>x.id===Number(productId));
  if(!p)return;
  const existing=cart.find(x=>x.id===p.id&&x.selectedSize===selectedSize);
  existing?existing.qty++:cart.push({...p,selectedSize,qty:1});
  updateBag();
  $("bag").classList.add("open");
}
function handleProductCardClick(event){
  if(event.target.closest("[data-add]"))return;
  const card=event.target.closest("[data-product-id]");
  if(card)openProduct(card.dataset.productId);
}
function handleProductCardKeydown(event){
  if((event.key==="Enter"||event.key===" ") && event.target.matches("[data-product-id]")){
    event.preventDefault();
    openProduct(event.target.dataset.productId);
  }
}
const storeInformation={
  "size-guide":'<h1>Size Guide</h1><p>Sizes vary by garment. Select a product to view its individual measurement chart. Measurements marked with a dash are not yet confirmed by the brand; please do not rely on them when ordering.</p><p>For the best fit, compare a similar garment you own with the measurements shown on the product page once published.</p>',
  "faq":'<h1>Frequently Asked Questions</h1><h3>Where can I shop?</h3><p>Pakistan is the current launch market. Other locations are marked coming soon.</p><h3>How do I choose a size?</h3><p>Use the product-specific size chart after the brand publishes confirmed garment measurements. Contact us if you need help.</p><h3>Which payment methods are available?</h3><p>Online card and wallet payments are not active yet. The checkout lets you select a preferred method, but no payment is collected on this site. The store will confirm payment arrangements separately.</p><h3>When is my order confirmed?</h3><p>Your checkout submission is an order request, not an accepted or paid order. The store will contact you to confirm availability, delivery charges and next steps.</p>',
  "shipping":'<h1>Shipping Information</h1><p>Shipping destinations within Pakistan, courier partners, delivery times, charges and any free-shipping threshold must be confirmed by the store before an order is accepted. The store will confirm the delivery fee and estimate with the customer. Email waqaralanabi0@gmail.com for shipping questions.</p>',
  "returns":'<h1>Returns & Exchanges</h1><p>The return and exchange window, eligibility requirements, condition of returned items and return-shipping responsibility must be confirmed by the store before sales begin. Email waqaralanabi0@gmail.com for the current policy. This page does not create or limit any rights available under applicable law.</p>',
  "contact":'<h1>Contact WAQAR AL ANABI</h1><p>For product questions and order-request follow-up, email <a href="mailto:waqaralanabi0@gmail.com">waqaralanabi0@gmail.com</a>.</p><p>Checkout order requests are sent to this email through FormSubmit. The first submission requires the store owner to activate the email address using the confirmation message sent by FormSubmit. If the form is not activated, the customer will see an error and can retry.</p><p>For payment security, do not email card numbers, CVV codes, passwords or one-time passcodes.</p>',
  "privacy":'<h1>Privacy Information</h1><p>Favourites, shopping bag and theme preferences are stored in your browser using local storage. When you submit checkout, the customer details and selected items are sent to FormSubmit for email delivery to waqaralanabi0@gmail.com. FormSubmit processes that information to deliver the message under its own privacy terms.</p><p>Do not enter payment-card details, CVV codes, passwords or one-time passcodes in the checkout form. Online payment is not processed by this website.</p><p>This is a basic notice for the current email-request checkout. The business owner should review and expand it before launch to cover retention, deletion requests, analytics, payment providers and applicable legal requirements.</p>',
  "terms":'<h1>Terms & Conditions</h1><p>This storefront is being prepared for launch. Product information, prices and availability are subject to verification. Preparing an order request does not create a confirmed sale. Payment and delivery terms must be confirmed before an order is accepted. A full business-approved terms document will be published before live sales.</p>'
};
function routePage(){
  const route = location.hash.toLowerCase();
  const isCollection = route === "#for-him" || route === "#for-her";
  const productMatch = route.match(/^#product-(\d+)$/);
  const product = productMatch ? products.find(p=>p.id===Number(productMatch[1])) : null;
  const isProduct = Boolean(product);
  const infoRoute = route.replace(/^#/,"");
  const isInfo = Object.prototype.hasOwnProperty.call(storeInformation,infoRoute);
  const showHome = !isCollection && !isProduct && !isInfo;
  document.querySelectorAll("#store main > section:not(#collectionPage):not(#productPage)").forEach(section=>{
    section.style.display = showHome ? "" : "none";
    section.classList.toggle("hidden", !showHome);
  });
  const collectionPage=$("collectionPage");
  collectionPage.style.display=isCollection?"block":"none";
  collectionPage.classList.toggle("hidden",!isCollection);
  const productPage=$("productPage");
  productPage.style.display=isProduct?"block":"none";
  productPage.classList.toggle("hidden",!isProduct);
  const infoPage=$("infoPage");
  infoPage.classList.toggle("hidden",!isInfo);
  infoPage.style.display=isInfo?"block":"none";
  if(isInfo){
    $("infoContent").innerHTML=storeInformation[infoRoute];
    window.scrollTo({top:0,behavior:"instant"});
  }
  const storeFooter=document.querySelector("#store > footer");
  if(storeFooter)storeFooter.style.display=(isCollection||isProduct)?"none":"";
  if(isCollection){
    renderCollection(route==="#for-her"?"Women":"Men");
    window.scrollTo({top:0,behavior:"instant"});
  }else if(isProduct){
    renderProductDetail(product);
    window.scrollTo({top:0,behavior:"instant"});
  }else if(route==="#home"||route===""){
    window.scrollTo({top:0,behavior:"instant"});
  }
}
window.addEventListener("hashchange",routePage);
document.querySelectorAll(".categories a[data-filter]").forEach(card=>{
  card.addEventListener("click",event=>{
    event.preventDefault();
    const target = card.dataset.filter === "Women" ? "#for-her" : "#for-him";
    if(location.hash === target) routePage();
    else location.hash = target;
  });
});
document.querySelector(".collection-back").addEventListener("click",event=>{
  event.preventDefault();
  location.hash = "#home";
  routePage();
});

function setMobileNavActive(activeItem){
  if(!window.matchMedia("(max-width: 800px)").matches)return;
  document.querySelectorAll("#store .mobile-bottom-bar > a, #store .mobile-bottom-bar > button").forEach(item=>{
    const selected=item===activeItem;
    item.classList.toggle("active",selected);
    if(selected)item.setAttribute("aria-current","page");
    else item.removeAttribute("aria-current");
  });
}
const mobileHome=document.querySelector(".mobile-nav-home");
const mobileMenu=document.querySelector(".mobile-bottom-bar .menu-toggle");
const mobileSearchButton=document.querySelector(".mobile-search-open");
const mobileFavorites=document.querySelector("#favoritesOpen");
const mobileBag=document.querySelector("#cartOpen");
if(window.matchMedia("(max-width: 800px)").matches)setMobileNavActive(mobileHome);
document.querySelector(".menu-toggle").addEventListener("click",()=>{
  $("nav").classList.toggle("open");
  setMobileNavActive($("nav").classList.contains("open")?mobileMenu:mobileHome);
});document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>{$("nav").classList.remove("open");document.querySelectorAll("#nav a").forEach(link=>link.classList.toggle("active",link===a))}));
const checkoutOverlay=$("checkoutOverlay");
function closeCheckout(){
  checkoutOverlay.classList.add("hidden");
  checkoutOverlay.setAttribute("aria-hidden","true");
}
$("checkout").addEventListener("click",()=>{
  if(!cart.length){alert("Your bag is empty.");return;}
  $("checkoutSubtotal").textContent=money(cart.reduce((total,p)=>total+p.price*p.qty,0));
  $("checkoutForm").classList.remove("hidden");
  $("checkoutResult").classList.add("hidden");
  checkoutOverlay.classList.remove("hidden");
  checkoutOverlay.setAttribute("aria-hidden","false");
  $("bag").classList.remove("open");
  $("checkoutForm").querySelector("input").focus();
});
$("checkoutClose").addEventListener("click",closeCheckout);
checkoutOverlay.addEventListener("click",event=>{if(event.target===checkoutOverlay)closeCheckout();});
$("checkoutForm").addEventListener("submit",async event=>{
  event.preventDefault();
  if(!cart.length){alert("Your bag is empty.");closeCheckout();return;}
  const form=event.currentTarget;
  if(!form.reportValidity())return;
  const fields=new FormData(form);
  const customer=Object.fromEntries(fields.entries());
  const subtotal=cart.reduce((total,p)=>total+p.price*p.qty,0);
  const orderLines=cart.map(p=>p.name+" | Size: "+(p.selectedSize||"Not selected")+" | Qty: "+p.qty+" | "+money(p.price*p.qty));
  const summary=[
    "WAQAR AL ANABI — NEW ORDER REQUEST",
    ...orderLines,
    "Items subtotal: "+money(subtotal),
    "Delivery fee: To be confirmed",
    "Customer: "+customer.fullName,
    "Phone: "+customer.phone,
    "Email: "+(customer.email||"Not provided"),
    "Address: "+customer.address+", "+customer.city+" "+(customer.postal||""),
    "Payment preference: "+customer.payment,
    "Payment status: NOT PAID — confirm payment separately",
    "Please contact the customer to confirm stock, delivery charges and payment."
  ].join("\n");
  const submit=form.querySelector('button[type="submit"]');
  const result=$("checkoutResult");
  submit.disabled=true;
  submit.textContent="SENDING ORDER REQUEST…";
  try{
    const response=await fetch("https://formsubmit.co/ajax/waqaralanabi0@gmail.com",{
      method:"POST",
      headers:{"Content-Type":"application/json","Accept":"application/json"},
      body:JSON.stringify({
        name:customer.fullName,
        email:customer.email||"Not provided",
        phone:customer.phone,
        address:customer.address,
        city:customer.city,
        postal_code:customer.postal||"Not provided",
        order_items:orderLines.join("\n"),
        order_subtotal:money(subtotal),
        payment_preference:customer.payment,
        payment_status:"NOT PAID — no payment was collected",
        message:summary,
        _subject:"New WAQAR AL ANABI order request",
        _template:"table"
      })
    });
    const data=await response.json();
    if(data.success!=="true"){
      const activation=String(data.message||"").toLowerCase().includes("activation");
      throw new Error(activation
        ?"Please open the activation email sent to waqaralanabi0@gmail.com and confirm the form. Then submit this order again."
        :(data.message||"The email service could not accept this request. Please try again."));
    }
    result.classList.remove("hidden");
    form.classList.add("hidden");
    result.innerHTML='<h3>Order request sent</h3><p>Thank you. Your order request has been emailed to the WAQAR AL ANABI team. This is not a payment confirmation. The store will confirm availability, delivery charges and payment separately.</p>';
    cart=[];
    updateBag();
  }catch(error){
    result.classList.remove("hidden");
    result.innerHTML='<h3>Order not sent</h3><p></p><button type="button" id="retryOrder" class="btn">TRY AGAIN</button>';
    result.querySelector("p").textContent=error.message||"Could not send the order. Please try again.";
    $("retryOrder").addEventListener("click",()=>{
      result.classList.add("hidden");
      form.classList.remove("hidden");
    });
  }finally{
    submit.disabled=false;
    submit.textContent="SEND ORDER REQUEST";
  }
});

// Move the same navigation controls between header and bottom bar by viewport.
// Desktop keeps the original top navigation; only phones use the bottom bar.
(function setupResponsiveNavigation(){
  const header=document.querySelector("#store header");
  const brand=header.querySelector(".brand");
  const actions=header.querySelector(".actions");
  const bottom=document.querySelector("#store .mobile-bottom-bar");
  const menu=header.querySelector(".menu-toggle");
  const favorites=actions.querySelector("#favoritesOpen");
  const bag=actions.querySelector("#cartOpen");
  const home=bottom.querySelector(".mobile-nav-home");
  const search=bottom.querySelector(".mobile-search-open");
  const mobile=window.matchMedia("(max-width: 800px)");
  function placeControls(){
    if(mobile.matches){
      bottom.append(menu,search,home,favorites,bag);
    }else{
      header.insertBefore(menu,brand);
      actions.append(favorites,bag);
      bottom.append(home,search);
    }
  }
  placeControls();
  if(mobile.addEventListener)mobile.addEventListener("change",placeControls);
  else mobile.addListener(placeControls);
})();

// Mobile bottom-bar product search.
(function setupMobileSearch(){
  const panel=$("mobileSearch");
  const input=$("mobileSearchInput");
  const results=$("mobileSearchResults");
  const openButton=document.querySelector(".mobile-search-open");
  const closeButton=$("mobileSearchClose");
  function showResults(){
    const query=input.value.trim().toLowerCase();
    const matches=query?products.filter(p=>(p.name+" "+p.cat+" "+(p.fabricComposition||"")).toLowerCase().includes(query)):products;
    results.innerHTML=matches.length?matches.map(p=>'<button type="button" class="mobile-search-result" data-search-product="'+p.id+'"><img src="'+p.img+'" alt=""><span><strong>'+p.name+'</strong><small>'+money(p.price)+'</small></span><b>↗</b></button>').join(""):'<p>No matching pieces found. Try another search.</p>';
  }
  function openSearch(){
    panel.classList.add("open");
    panel.setAttribute("aria-hidden","false");
    document.body.classList.add("mobile-search-open");
    showResults();
    setTimeout(()=>input.focus(),50);
  }
  function closeSearch(){
    panel.classList.remove("open");
    panel.setAttribute("aria-hidden","true");
    document.body.classList.remove("mobile-search-open");
  }
  openButton.addEventListener("click",()=>{openSearch();setMobileNavActive(mobileSearchButton)});
  const desktopOpenButton=$("desktopSearchOpen");
  desktopOpenButton.addEventListener("click",openSearch);
  closeButton.addEventListener("click",()=>{closeSearch();setMobileNavActive(mobileHome)});
  input.addEventListener("input",showResults);
  results.addEventListener("click",event=>{
    const result=event.target.closest("[data-search-product]");
    if(!result)return;
    closeSearch();
    setMobileNavActive(mobileHome);
    openProduct(result.dataset.searchProduct);
  });
  document.addEventListener("keydown",event=>{
    if(event.key==="Escape"&&panel.classList.contains("open")){closeSearch();setMobileNavActive(mobileHome)}
  });
})();
$("year").textContent=new Date().getFullYear();chooseCountry(localStorage.getItem("wa-country")||"PK");render();updateBag();updateFavorites();
setTimeout(()=>{const splash=$("splash");splash.classList.add("fade");setTimeout(()=>{splash.classList.add("hidden");openWelcome()},650)},1800);
