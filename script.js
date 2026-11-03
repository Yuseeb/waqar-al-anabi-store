const WHATSAPP_NUMBER="923001234567"; // Replace this placeholder with your official WhatsApp number before launch.
const regions={PK:["Pakistan","🇵🇰","PKR","₨","Pakistani Rupee"],US:["United States","🇺🇸","USD","$","US Dollar"],GB:["United Kingdom","🇬🇧","GBP","£","British Pound"],AE:["United Arab Emirates","🇦🇪","AED","د.إ","UAE Dirham"],SA:["Saudi Arabia","🇸🇦","SAR","﷼","Saudi Riyal"],CA:["Canada","🇨🇦","CAD","$","Canadian Dollar"],AU:["Australia","🇦🇺","AUD","$","Australian Dollar"],IN:["India","🇮🇳","INR","₹","Indian Rupee"],TR:["Türkiye","🇹🇷","TRY","₺","Turkish Lira"],EU:["European Union","🇪🇺","EUR","€","Euro"],QA:["Qatar","🇶🇦","QAR","﷼","Qatari Riyal"],KW:["Kuwait","🇰🇼","KWD","د.ك","Kuwaiti Dinar"],OM:["Oman","🇴🇲","OMR","ر.ع.","Omani Rial"],BH:["Bahrain","🇧🇭","BHD",".د.ب","Bahraini Dinar"],MY:["Malaysia","🇲🇾","MYR","RM","Malaysian Ringgit"]};
let country="PK",currency="PKR",cart=[],filter="All";
const $=id=>document.getElementById(id),countrySelect=$("countrySelect");

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
const products=[{id:1,name:"Classic Polo Shirt",cat:"Men",price:3490,img:"https://images.unsplash.com/photo-1625910513413-5fc3f3b1f1b9?auto=format&fit=crop&w=800&q=85"},{id:2,name:"Everyday Boxy Tee",cat:"Women",price:2490,img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85"},{id:3,name:"Relaxed Sweatshirt",cat:"Men",price:4290,img:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=85"},{id:4,name:"Wide-Leg Trousers",cat:"Women",price:3990,img:"https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=85"},{id:5,name:"Modern Co-Ord Set",cat:"Women",price:5990,img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85"},{id:6,name:"Pleated Relaxed Pants",cat:"Men",price:4490,img:"https://images.unsplash.com/photo-1511196044526-5cb3bcbc707b?auto=format&fit=crop&w=800&q=85"}];
const money=n=>{try{return new Intl.NumberFormat("en",{style:"currency",currency,maximumFractionDigits:0}).format(n)}catch{return currency+" "+Math.round(n).toLocaleString("en")}};
function render(){const grid=$("grid");grid.innerHTML=products.filter(p=>filter==="All"||p.cat===filter).map(p=>'<article class="product-card"><div class="product-image"><img src="'+p.img+'" alt="'+p.name+'" loading="lazy"><button type="button" data-add="'+p.id+'">QUICK ADD +</button></div><h3>'+p.name+'</h3><p>'+money(p.price)+'</p></article>').join("")||'<p>No products found in this collection yet.</p>';grid.querySelectorAll("img").forEach(img=>img.addEventListener("error",()=>{img.style.display="none";img.parentElement.style.background="linear-gradient(135deg,#f1e8e1,#e4d2c9)"},{once:true}))}
function updateBag(){$("count").textContent=cart.reduce((a,p)=>a+p.qty,0);$("subtotal").textContent=money(cart.reduce((a,p)=>a+p.price*p.qty,0));$("items").innerHTML=cart.map(p=>'<p>'+p.name+' × '+p.qty+' — '+money(p.price*p.qty)+' <button type="button" data-remove="'+p.id+'">Remove</button></p>').join("")||"Your bag is empty."}
$("grid").addEventListener("click",e=>{const id=Number(e.target.dataset.add);if(!id)return;const p=products.find(x=>x.id===id);if(!p)return;const existing=cart.find(x=>x.id===id);existing?existing.qty++:cart.push({...p,qty:1});updateBag();$("bag").classList.add("open")});
$("collectionGrid").addEventListener("click",e=>{const id=Number(e.target.dataset.add);if(!id)return;const p=products.find(x=>x.id===id);if(!p)return;const existing=cart.find(x=>x.id===id);existing?existing.qty++:cart.push({...p,qty:1});updateBag();$("bag").classList.add("open")});
$("items").addEventListener("click",e=>{const id=Number(e.target.dataset.remove);if(id){cart=cart.filter(p=>p.id!==id);updateBag()}});
$("cartOpen").addEventListener("click",()=>$("bag").classList.add("open"));$("close").addEventListener("click",()=>$("bag").classList.remove("open"));
document.addEventListener("keydown",e=>{if(e.key==="Escape"){$("bag").classList.remove("open");$("nav").classList.remove("open")}});
document.querySelectorAll(".filters button").forEach(b=>b.addEventListener("click",()=>{filter=b.dataset.cat;document.querySelectorAll(".filters button").forEach(x=>x.classList.toggle("active",x===b));render()}));
function renderCollection(category){
  const title = category === "Women" ? "For Her" : "For Him";
  $("collectionTitle").textContent = title;
  $("collectionEyebrow").textContent = category === "Women" ? "THE WOMEN'S COLLECTION" : "THE MEN'S COLLECTION";
  $("collectionDescription").textContent = category === "Women"
    ? "Thoughtful silhouettes, effortless fits, and everyday pieces made to feel like you."
    : "Refined essentials, relaxed fits, and considered details for everyday confidence.";
  $("collectionGrid").innerHTML = products.filter(p=>p.cat===category).map(p=>'<article class="product-card"><div class="product-image"><img src="'+p.img+'" alt="'+p.name+'" loading="lazy"><button type="button" data-add="'+p.id+'">QUICK ADD +</button></div><h3>'+p.name+'</h3><p>'+money(p.price)+'</p></article>').join("") || '<p class="empty-collection">New pieces are coming soon.</p>';
  $("collectionGrid").querySelectorAll("img").forEach(img=>img.addEventListener("error",()=>{img.style.display="none";img.parentElement.style.background="linear-gradient(135deg,#7A1E3A,#49202E)"},{once:true}));
}
function routePage(){
  const route = location.hash.toLowerCase();
  const isCollection = route === "#for-him" || route === "#for-her";
  document.querySelectorAll("#store main > section").forEach(section=>{
    section.classList.toggle("hidden", isCollection && section.id !== "collectionPage");
  });
  if(isCollection){
    renderCollection(route === "#for-her" ? "Women" : "Men");
    window.scrollTo(0,0);
  } else {
    $("collectionPage").classList.add("hidden");
    document.querySelectorAll("#store main > section").forEach(section=>section.classList.remove("hidden"));
    if(route === "#home" || route === "") window.scrollTo(0,0);
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

document.querySelector(".menu-toggle").addEventListener("click",()=>$("nav").classList.toggle("open"));document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>{$("nav").classList.remove("open");document.querySelectorAll("#nav a").forEach(link=>link.classList.toggle("active",link===a))}));
$("checkout").addEventListener("click",()=>{if(!cart.length){alert("Your bag is empty.");return}if(WHATSAPP_NUMBER==="923001234567"){alert("Please add your official WhatsApp number in script.js before accepting orders.");return}const msg="Hello WAQAR AL ANABI, I want to order:\n"+cart.map(p=>p.name+" x "+p.qty+" — "+money(p.price*p.qty)).join("\n")+"\nTotal: "+money(cart.reduce((a,p)=>a+p.price*p.qty,0))+"\nCountry: "+regions[country][0]+"\nName:\nAddress:";window.open("https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(msg),"_blank","noopener")});
$("year").textContent=new Date().getFullYear();chooseCountry(localStorage.getItem("wa-country")||"PK");render();updateBag();
setTimeout(()=>{const splash=$("splash");splash.classList.add("fade");setTimeout(()=>{splash.classList.add("hidden");openWelcome()},650)},1800);
