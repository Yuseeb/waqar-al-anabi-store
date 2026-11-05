const WHATSAPP_NUMBER="923001234567"; // Replace this placeholder with your official WhatsApp number before launch.
const regions={PK:["Pakistan","🇵🇰","PKR","₨","Pakistani Rupee"],US:["United States","🇺🇸","USD","$","US Dollar"],GB:["United Kingdom","🇬🇧","GBP","£","British Pound"],AE:["United Arab Emirates","🇦🇪","AED","د.إ","UAE Dirham"],SA:["Saudi Arabia","🇸🇦","SAR","﷼","Saudi Riyal"],CA:["Canada","🇨🇦","CAD","$","Canadian Dollar"],AU:["Australia","🇦🇺","AUD","$","Australian Dollar"],IN:["India","🇮🇳","INR","₹","Indian Rupee"],TR:["Türkiye","🇹🇷","TRY","₺","Turkish Lira"],EU:["European Union","🇪🇺","EUR","€","Euro"],QA:["Qatar","🇶🇦","QAR","﷼","Qatari Riyal"],KW:["Kuwait","🇰🇼","KWD","د.ك","Kuwaiti Dinar"],OM:["Oman","🇴🇲","OMR","ر.ع.","Omani Rial"],BH:["Bahrain","🇧🇭","BHD",".د.ب","Bahraini Dinar"],MY:["Malaysia","🇲🇾","MYR","RM","Malaysian Ringgit"]};
let country="PK",currency="PKR",cart=[],filter="All";
let favorites=[];
try { favorites=JSON.parse(localStorage.getItem("wa-favorites")||"[]").map(Number); } catch(error) { favorites=[]; }

const $=id=>document.getElementById(id),countrySelect=$("countrySelect");

// Rotate the brand headline every 10 seconds, beginning with the original slogan.
const announcementHeadline = $("announcementHeadline");
if (announcementHeadline) {
  const announcementLines = [
    "— PEOPLE NOT TRENDS —",
    "— WE DON'T COMPETE. WE COMPLETE. —"
  ];
  let announcementIndex = 0;
  window.setInterval(() => {
    announcementHeadline.classList.add("is-changing");
    window.setTimeout(() => {
      announcementIndex = (announcementIndex + 1) % announcementLines.length;
      announcementHeadline.textContent = announcementLines[announcementIndex];
      announcementHeadline.classList.remove("is-changing");
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
function enterStore(){localStorage.setItem("wa-country",country);localStorage.setItem("wa-currency",currency);$("welcome").classList.add("hidden");$("store").classList.remove("hidden");$("region").textContent=country+" / "+currency;render();routePage();window.scrollTo(0,0)}
countrySelect.addEventListener("change",e=>chooseCountry(e.target.value));$("start").addEventListener("click",enterStore);$("change").addEventListener("click",openWelcome);
const products=[
{id:1,name:"Classic Polo Shirt",cat:"Men",price:3490,img:"https://images.unsplash.com/photo-1625910513413-5fc3f3b1f1b9?auto=format&fit=crop&w=800&q=85",sizes:["S","M","L","XL"],fit:"Regular fit — edit to match the final garment.",fabricComposition:"Add confirmed fabric composition",fabricQuality:"Add fabric weight, texture and finish details",sizeGuide:[{size:"S",chest:"—",length:"—",waist:"—",hip:"—"},{size:"M",chest:"—",length:"—",waist:"—",hip:"—"},{size:"L",chest:"—",length:"—",waist:"—",hip:"—"},{size:"XL",chest:"—",length:"—",waist:"—",hip:"—"}]},
{id:2,name:"Everyday Boxy Tee",cat:"Women",price:2490,img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85",sizes:["S","M","L","XL"],fit:"Relaxed boxy fit — edit to match the final garment.",fabricComposition:"Add confirmed fabric composition",fabricQuality:"Add fabric weight, softness and finish details",sizeGuide:[{size:"S",chest:"—",length:"—",waist:"—",hip:"—"},{size:"M",chest:"—",length:"—",waist:"—",hip:"—"},{size:"L",chest:"—",length:"—",waist:"—",hip:"—"},{size:"XL",chest:"—",length:"—",waist:"—",hip:"—"}]},
{id:3,name:"Relaxed Sweatshirt",cat:"Men",price:4290,img:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=85",sizes:["S","M","L","XL"],fit:"Relaxed fit — edit to match the final garment.",fabricComposition:"Add confirmed fabric composition",fabricQuality:"Add fabric weight, inner feel and finish details",sizeGuide:[{size:"S",chest:"—",length:"—",waist:"—",hip:"—"},{size:"M",chest:"—",length:"—",waist:"—",hip:"—"},{size:"L",chest:"—",length:"—",waist:"—",hip:"—"},{size:"XL",chest:"—",length:"—",waist:"—",hip:"—"}]},
{id:4,name:"Wide-Leg Trousers",cat:"Women",price:3990,img:"https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=85",sizes:["S","M","L","XL"],fit:"Wide-leg fit — edit to match the final garment.",fabricComposition:"Add confirmed fabric composition",fabricQuality:"Add fabric drape, weight and finish details",sizeGuide:[{size:"S",chest:"—",length:"—",waist:"—",hip:"—"},{size:"M",chest:"—",length:"—",waist:"—",hip:"—"},{size:"L",chest:"—",length:"—",waist:"—",hip:"—"},{size:"XL",chest:"—",length:"—",waist:"—",hip:"—"}]},
{id:5,name:"Modern Co-Ord Set",cat:"Women",price:5990,img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85",sizes:["S","M","L","XL"],fit:"Co-ord set — edit fit notes for top and bottom.",fabricComposition:"Add confirmed fabric composition",fabricQuality:"Add fabric texture, drape and finish details",sizeGuide:[{size:"S",chest:"—",length:"—",waist:"—",hip:"—"},{size:"M",chest:"—",length:"—",waist:"—",hip:"—"},{size:"L",chest:"—",length:"—",waist:"—",hip:"—"},{size:"XL",chest:"—",length:"—",waist:"—",hip:"—"}]},
{id:6,name:"Pleated Relaxed Pants",cat:"Men",price:4490,img:"https://images.unsplash.com/photo-1511196044526-5cb3bcbc707b?auto=format&fit=crop&w=800&q=85",sizes:["S","M","L","XL"],fit:"Relaxed pleated fit — edit to match the final garment.",fabricComposition:"Add confirmed fabric composition",fabricQuality:"Add fabric weight, drape and finish details",sizeGuide:[{size:"S",chest:"—",length:"—",waist:"—",hip:"—"},{size:"M",chest:"—",length:"—",waist:"—",hip:"—"},{size:"L",chest:"—",length:"—",waist:"—",hip:"—"},{size:"XL",chest:"—",length:"—",waist:"—",hip:"—"}]}
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
function render(){const grid=$("grid");grid.innerHTML=products.filter(p=>filter==="All"||p.cat===filter).map(productCard).join("")||'<p>No products found in this collection yet.</p>';grid.querySelectorAll("img").forEach(img=>img.addEventListener("error",()=>{img.style.display="none";img.parentElement.style.background="linear-gradient(135deg,#f1e8e1,#e4d2c9)"},{once:true}))}
function updateBag(){$("count").textContent=cart.reduce((a,p)=>a+p.qty,0);$("subtotal").textContent=money(cart.reduce((a,p)=>a+p.price*p.qty,0));$("items").innerHTML=cart.map(p=>'<p>'+p.name+' — Size: '+(p.selectedSize||"Not selected")+' × '+p.qty+' — '+money(p.price*p.qty)+' <button type="button" data-remove="'+p.id+'" data-size="'+(p.selectedSize||"Not selected")+'">Remove</button></p>').join("")||"Your bag is empty."}
$("grid").addEventListener("click",e=>{const fav=e.target.closest("[data-favorite]");if(fav){toggleFavorite(fav.dataset.favorite);return}handleProductCardClick(e)});
$("grid").addEventListener("keydown",handleProductCardKeydown);
$("collectionGrid").addEventListener("click",e=>{const fav=e.target.closest("[data-favorite]");if(fav){toggleFavorite(fav.dataset.favorite);return}handleProductCardClick(e)});
$("collectionGrid").addEventListener("keydown",handleProductCardKeydown);
$("productDetailContent").addEventListener("click",e=>{const button=e.target.closest("[data-detail-add]");if(button&&!button.disabled){const chosen=$("productDetailContent").querySelector(".size-option.selected");if(chosen)addProductToBag(button.dataset.detailAdd,chosen.dataset.size)}});
$("items").addEventListener("click",e=>{const id=Number(e.target.dataset.remove);if(id){const size=e.target.dataset.size||"Not selected";cart=cart.filter(p=>!(p.id===id&&(p.selectedSize||"Not selected")===size));updateBag()}});
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
function renderCollection(category){
  const title = category === "Women" ? "For Her" : "For Him";
  $("collectionTitle").textContent = title;
  $("collectionEyebrow").textContent = category === "Women" ? "THE WOMEN'S COLLECTION" : "THE MEN'S COLLECTION";
  $("collectionDescription").textContent = category === "Women"
    ? "Thoughtful silhouettes, effortless fits, and everyday pieces made to feel like you."
    : "Refined essentials, relaxed fits, and considered details for everyday confidence.";
  $("collectionGrid").innerHTML = products.filter(p=>p.cat===category).map(productCard).join("") || '<p class="empty-collection">New pieces are coming soon.</p>';
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
function routePage(){
  const route = location.hash.toLowerCase();
  const isCollection = route === "#for-him" || route === "#for-her";
  const productMatch = route.match(/^#product-(\d+)$/);
  const product = productMatch ? products.find(p=>p.id===Number(productMatch[1])) : null;
  const isProduct = Boolean(product);
  const showHome = !isCollection && !isProduct;
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
$("checkout").addEventListener("click",()=>{if(!cart.length){alert("Your bag is empty.");return}if(WHATSAPP_NUMBER==="923001234567"){alert("Please add your official WhatsApp number in script.js before accepting orders.");return}const msg="Hello WAQAR AL ANABI, I want to order:\n"+cart.map(p=>p.name+" (Size: "+(p.selectedSize||"Not selected")+") x "+p.qty+" — "+money(p.price*p.qty)).join("\n")+"\nTotal: "+money(cart.reduce((a,p)=>a+p.price*p.qty,0))+"\nCountry: "+regions[country][0]+"\nName:\nAddress:";window.open("https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(msg),"_blank","noopener")});

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
