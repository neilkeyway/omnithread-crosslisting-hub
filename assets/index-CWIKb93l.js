(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const x={fb_marketplace:{id:"fb_marketplace",name:"Facebook Marketplace",shortName:"FB Market",tagline:"Local Pickup & Shipping",color:"#1877f2",bgColor:"rgba(24, 119, 242, 0.15)",borderColor:"rgba(24, 119, 242, 0.35)",feePercentage:5,defaultMarkup:0,active:!0,autoDelist:!0,category:"General / Local Resale",accountHandle:"@apparel_vault_fb",simulatedLatency:800,iconSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>'},ebay:{id:"ebay",name:"eBay",shortName:"eBay",tagline:"Global Auction & Buy-It-Now",color:"#e53238",bgColor:"rgba(229, 50, 56, 0.15)",borderColor:"rgba(229, 50, 56, 0.35)",feePercentage:13.25,defaultMarkup:5,active:!0,autoDelist:!0,category:"Global Marketplace",accountHandle:"urban_apparel_store_official",simulatedLatency:1100,iconSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m10 15 5-3-5-3v6Z"/></svg>'},depop:{id:"depop",name:"Depop",shortName:"Depop",tagline:"Youth & Vintage Streetwear Community",color:"#ff2300",bgColor:"rgba(255, 35, 0, 0.15)",borderColor:"rgba(255, 35, 0, 0.35)",feePercentage:10,defaultMarkup:0,active:!0,autoDelist:!0,category:"Vintage & Streetwear",accountHandle:"@threads_curated",simulatedLatency:900,iconSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>'},poshmark:{id:"poshmark",name:"Poshmark",shortName:"Poshmark",tagline:"Social Fashion & Closet Sharing",color:"#8b1d3d",bgColor:"rgba(139, 29, 61, 0.18)",borderColor:"rgba(139, 29, 61, 0.4)",feePercentage:20,defaultMarkup:8,active:!0,autoDelist:!0,category:"Designer & Apparel",accountHandle:"@posh_wardrobe_lux",simulatedLatency:1200,iconSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>'},grailed:{id:"grailed",name:"Grailed",shortName:"Grailed",tagline:"Curated Menswear & High Fashion",color:"#e2e8f0",bgColor:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.25)",feePercentage:9,defaultMarkup:0,active:!0,autoDelist:!0,category:"Luxury & Archival",accountHandle:"grailed_archive_vault",simulatedLatency:950,iconSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'},mercari:{id:"mercari",name:"Mercari",shortName:"Mercari",tagline:"Fast Everyday Selling App",color:"#4986ff",bgColor:"rgba(73, 134, 255, 0.15)",borderColor:"rgba(73, 134, 255, 0.35)",feePercentage:10,defaultMarkup:2,active:!0,autoDelist:!0,category:"Quick Liquidation",accountHandle:"mercari_closet_fast",simulatedLatency:850,iconSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/></svg>'},vinted:{id:"vinted",name:"Vinted",shortName:"Vinted",tagline:"Zero Seller Fee Secondhand Platform",color:"#09b1ba",bgColor:"rgba(9, 177, 186, 0.15)",borderColor:"rgba(9, 177, 186, 0.35)",feePercentage:0,defaultMarkup:-3,active:!0,autoDelist:!0,category:"Thrift & Secondhand",accountHandle:"@vinted_thrift_circle",simulatedLatency:750,iconSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>'},etsy:{id:"etsy",name:"Etsy",shortName:"Etsy",tagline:"Vintage & Handmade Goods",color:"#f1641e",bgColor:"rgba(241, 100, 30, 0.15)",borderColor:"rgba(241, 100, 30, 0.35)",feePercentage:6.5,defaultMarkup:3,active:!1,autoDelist:!0,category:"Handmade & Vintage 20+ Yrs",accountHandle:"StudioThreadVintage",simulatedLatency:1e3,iconSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>'},stockx:{id:"stockx",name:"StockX",shortName:"StockX",tagline:"Deadstock Sneakers & Streetwear",color:"#006340",bgColor:"rgba(0, 99, 64, 0.2)",borderColor:"rgba(0, 99, 64, 0.4)",feePercentage:9,defaultMarkup:5,active:!1,autoDelist:!0,category:"Deadstock & Verification",accountHandle:"verified_drop_seller",simulatedLatency:1300,iconSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>'},goat:{id:"goat",name:"GOAT",shortName:"GOAT",tagline:"Sneakers, Apparel & Accessories",color:"#64748b",bgColor:"rgba(100, 116, 139, 0.15)",borderColor:"rgba(100, 116, 139, 0.35)",feePercentage:9.5,defaultMarkup:5,active:!1,autoDelist:!0,category:"Sneakers & Streetwear",accountHandle:"goat_closet_official",simulatedLatency:1150,iconSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 2 18 2 18 6 6 6 6 2"/><polygon points="3 6 21 6 21 10 3 10 3 6"/><polygon points="6 10 18 10 18 22 6 22 6 10"/></svg>'},vestiaire:{id:"vestiaire",name:"Vestiaire Collective",shortName:"Vestiaire",tagline:"Pre-owned Luxury & High End Designer",color:"#eab308",bgColor:"rgba(234, 179, 8, 0.15)",borderColor:"rgba(234, 179, 8, 0.35)",feePercentage:12,defaultMarkup:12,active:!1,autoDelist:!0,category:"Certified Luxury",accountHandle:"paris_vault_archive",simulatedLatency:1400,iconSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'},asos_marketplace:{id:"asos_marketplace",name:"ASOS Marketplace",shortName:"ASOS",tagline:"Independent Brands & Vintage Boutiques",color:"#9333ea",bgColor:"rgba(147, 51, 234, 0.15)",borderColor:"rgba(147, 51, 234, 0.35)",feePercentage:15,defaultMarkup:6,active:!1,autoDelist:!0,category:"Independent Boutiques",accountHandle:"studio_thread_boutique",simulatedLatency:1250,iconSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>'}},A={jacket:{id:"jacket",label:"Outerwear",color:"#818cf8",svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="garment-svg-placeholder"><path d="M4 4 9 2l3 4 3-4 5 2 2 6-4 2v10H6V12L2 10 4 4z"/><path d="M12 6v16"/><path d="M9 2 6 8"/><path d="M15 2l3 6"/></svg>'},hoodie:{id:"hoodie",label:"Hoodie",color:"#f43f5e",svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="garment-svg-placeholder"><path d="M3 7 9 3h6l6 4-2 6-3-1v10H8V12L5 13 3 7z"/><path d="M9 3v4a3 3 0 0 0 6 0V3"/><path d="M9 16h6v4H9z"/></svg>'},tshirt:{id:"tshirt",label:"T-Shirt",color:"#38bdf8",svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="garment-svg-placeholder"><path d="M6 3 2 7l4 2v12h12V9l4-2-4-4a4 4 0 0 1-6 2 4 4 0 0 1-6-2z"/></svg>'},jeans:{id:"jeans",label:"Pants / Denim",color:"#60a5fa",svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="garment-svg-placeholder"><path d="M5 3h14v4l-2 15h-4l-1-11-1 11H7L5 7V3z"/><path d="M5 7h14"/><path d="M10 7v3"/><path d="M14 7v3"/></svg>'},sneakers:{id:"sneakers",label:"Footwear",color:"#34d399",svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="garment-svg-placeholder"><path d="M2 17h20v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z"/><path d="M4 17V8a4 4 0 0 1 4-4h2l8 9h4v4"/><path d="M10 4v5"/><path d="M13 6v4"/></svg>'},sweater:{id:"sweater",label:"Knitwear",color:"#fbbf24",svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="garment-svg-placeholder"><path d="M3 6 8 2h8l5 4-3 6-2-1v11H8V11L6 12 3 6z"/><path d="M9 2a3 3 0 0 0 6 0"/><line x1="8" y1="16" x2="16" y2="16"/><line x1="8" y1="19" x2="16" y2="19"/></svg>'},hat:{id:"hat",label:"Headwear",color:"#c084fc",svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="garment-svg-placeholder"><path d="M2 18h20a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/><path d="M4 16c0-5 3-9 8-9s8 4 8 9"/><line x1="2" y1="18" x2="22" y2="18"/></svg>'},accessory:{id:"accessory",label:"Accessories",color:"#ec4899",svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="garment-svg-placeholder"><circle cx="12" cy="12" r="7"/><polyline points="12 9 12 12 14 14"/><path d="M12 2v3"/><path d="M12 19v3"/></svg>'}},O=[{id:"item_01",title:"Vintage Washed Heavyweight Boxy Moto Jacket",brand:"AllSaints / Archive",category:"jacket",size:"L",condition:"Excellent Pre-owned",color:"Distressed Black",basePrice:220,platformPrices:{fb_marketplace:210,ebay:235,depop:220,grailed:225,poshmark:245},platforms:["fb_marketplace","ebay","depop","grailed"],photos:[],status:"active",delistedPlatforms:[],soldDetails:null,description:"Grain-treated vintage moto leather with custom oxidized zips, boxy torso cut, quilted lining. No flaws, pristine condition.",createdAt:new Date(Date.now()-864e5*2).toISOString()},{id:"item_02",title:"Sun-Faded Vintage Acid Wash Heavyweight Hoodie",brand:"Balenciaga / Homme",category:"hoodie",size:"XL (Oversized)",condition:"Gently Worn",color:"Washed Charcoal",basePrice:165,platformPrices:{depop:165,ebay:175,mercari:168,vinted:160},platforms:["depop","ebay","mercari","vinted"],photos:[],status:"active",delistedPlatforms:[],soldDetails:null,description:"Ultra heavyweight 500 GSM loopback cotton fleece. Drop shoulders with washed sun-bleach distress gradient across the hood and pouch pocket.",createdAt:new Date(Date.now()-864e5*4).toISOString()},{id:"item_03",title:"Distressed Selvedge Wide-Leg Carpenter Denim",brand:"Carhartt WIP",category:"jeans",size:"34 x 32",condition:"New With Tags",color:"Light Indigo",basePrice:110,platformPrices:{fb_marketplace:105,ebay:120,depop:110,poshmark:125},platforms:["fb_marketplace","ebay","depop","poshmark"],photos:[],status:"active",delistedPlatforms:[],soldDetails:null,description:"Rigid 14oz Japanese selvedge denim. Triple needle stitch construction with hammer loop, utility stash pockets, and double knee reinforcement.",createdAt:new Date(Date.now()-864e5*6).toISOString()},{id:"item_04",title:"1998 Soundgarden Tour Single-Stitch Band Tee",brand:"Winterland Vintage",category:"tshirt",size:"L",condition:"True Vintage",color:"Aged Black",basePrice:145,platformPrices:{depop:145,ebay:155,grailed:150},platforms:["depop","ebay","grailed"],photos:[],status:"active",delistedPlatforms:[],soldDetails:null,description:"Authentic 90s single stitch graphic tee on original Winterland tag. Natural fade, subtle pinhole on lower hem adds to vintage drape.",createdAt:new Date(Date.now()-864e5*7).toISOString()},{id:"item_05",title:"Retro High OG Leather Court Sneakers",brand:"Jordan Brand",category:"sneakers",size:"US 10.5",condition:"Like New in Box",color:"Bred / Varsity Red",basePrice:280,platformPrices:{stockx:295,ebay:290,fb_marketplace:275},platforms:["ebay","fb_marketplace"],photos:[],status:"sold",delistedPlatforms:["ebay"],soldDetails:{platformId:"fb_marketplace",soldAt:new Date(Date.now()-864e5*1).toISOString(),salePrice:275,feePaid:13.75,netPayout:261.25,buyerUsername:"marcus_kicks_sea"},description:"Original box, extra red laces, receipt included. Worn once indoors for a photoshoot. Zero heel drag or toe creasing.",createdAt:new Date(Date.now()-864e5*10).toISOString()}],V=[{id:"notif_01",type:"sale",itemId:"item_05",title:"Item Sold on Facebook Marketplace!",itemTitle:"Retro High OG Leather Court Sneakers",platformId:"fb_marketplace",salePrice:275,netPayout:261.25,buyer:"marcus_kicks_sea",autoDelistedFrom:["ebay"],timestamp:new Date(Date.now()-864e5*1).toISOString(),unread:!1}];class U{constructor(){this.listeners=[],this.currentTab="dashboard",this.currentUser=null,this.init()}init(){this.currentUser=this.load("omnithread_session_user",null),this.loadUserData()}loadUserData(){const e=this.currentUser?`omnithread_${this.currentUser.email.toLowerCase().replace(/[^a-z0-9]/g,"_")}`:"omnithread_guest";this.platforms=this.load(`${e}_platforms`,x),this.clothes=this.load(`${e}_clothes`,O),this.notifications=this.load(`${e}_notifications`,V)}saveUserData(){const e=this.currentUser?`omnithread_${this.currentUser.email.toLowerCase().replace(/[^a-z0-9]/g,"_")}`:"omnithread_guest";this.save(`${e}_platforms`,this.platforms),this.save(`${e}_clothes`,this.clothes),this.save(`${e}_notifications`,this.notifications)}load(e,a){try{const i=localStorage.getItem(e);return i?JSON.parse(i):a}catch(i){return console.warn("Error reading from localStorage:",i),a}}save(e,a){try{localStorage.setItem(e,JSON.stringify(a))}catch(i){console.warn("Error saving to localStorage:",i)}}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(a=>a!==e)}}notify(){this.listeners.forEach(e=>{try{e(this)}catch(a){console.error("State subscriber error:",a)}})}login(e){const a=e.trim().toLowerCase();this.currentUser={email:a,name:a.split("@")[0],loggedInAt:new Date().toISOString()},this.save("omnithread_session_user",this.currentUser),this.loadUserData(),this.currentTab="dashboard",this.notify()}logout(){this.currentUser=null,this.save("omnithread_session_user",null),this.notify()}setTab(e){this.currentTab=e,this.notify()}togglePlatformActive(e){this.platforms[e]&&(this.platforms[e].active=!this.platforms[e].active,this.saveUserData(),this.notify())}togglePlatformAutoDelist(e){this.platforms[e]&&(this.platforms[e].autoDelist=!this.platforms[e].autoDelist,this.saveUserData(),this.notify())}updatePlatformMarkup(e,a){this.platforms[e]&&(this.platforms[e].defaultMarkup=Number(a),this.saveUserData(),this.notify())}addClothListing(e){const a={id:"item_"+Date.now().toString(36),title:e.title,brand:e.brand||"Unbranded",category:e.category||"jacket",size:e.size||"M",condition:e.condition||"Pre-owned",color:e.color||"Standard",basePrice:Number(e.basePrice)||50,platformPrices:e.platformPrices||{},platforms:e.platforms||[],photos:e.photos||[],status:"active",delistedPlatforms:[],soldDetails:null,description:e.description||"",createdAt:new Date().toISOString()};return this.clothes.unshift(a),this.saveUserData(),this.addNotification({type:"cross_post",itemId:a.id,title:`Successfully Cross-Listed on ${a.platforms.length} Platforms`,itemTitle:a.title,platforms:a.platforms,timestamp:new Date().toISOString(),unread:!0}),this.notify(),a}updateClothPrice(e,a,i){const r=this.clothes.find(t=>t.id===e);r&&(r.platformPrices||(r.platformPrices={}),r.platformPrices[a]=Number(i),this.saveUserData(),this.notify())}deleteCloth(e){this.clothes=this.clothes.filter(a=>a.id!==e),this.saveUserData(),this.notify()}recordSale({itemId:e,platformId:a,buyerUsername:i}){const r=this.clothes.find(h=>h.id===e);if(!r)return null;const t=this.platforms[a]||x[a],l=r.platformPrices&&r.platformPrices[a]?Number(r.platformPrices[a]):Number(r.basePrice),s=t?t.feePercentage:10,u=+(l*(s/100)).toFixed(2),m=+(l-u).toFixed(2),o=(r.platforms||[]).filter(h=>h!==a).filter(h=>{const f=this.platforms[h];return f?f.autoDelist:!0});r.status="sold",r.delistedPlatforms=o,r.soldDetails={platformId:a,platformName:t?t.name:a,soldAt:new Date().toISOString(),salePrice:l,feePaid:u,netPayout:m,buyerUsername:i||"vintage_buyer_"+Math.floor(1e3+Math.random()*9e3)};const v={id:"notif_"+Date.now(),type:"sale",itemId:r.id,title:`Sold on ${t?t.name:"Marketplace"}!`,itemTitle:r.title,platformId:a,salePrice:l,netPayout:m,buyer:r.soldDetails.buyerUsername,autoDelistedFrom:o,timestamp:new Date().toISOString(),unread:!0};return this.notifications.unshift(v),this.saveUserData(),this.notify(),{item:r,notification:v}}addNotification(e){this.notifications.unshift({id:"notif_"+Date.now(),unread:!0,...e}),this.saveUserData(),this.notify()}markAllNotificationsRead(){this.notifications.forEach(e=>e.unread=!1),this.saveUserData(),this.notify()}getUnreadCount(){return this.notifications.filter(e=>e.unread).length}getMetrics(){const e=this.clothes.filter(s=>s.status==="active"),a=this.clothes.filter(s=>s.status==="sold");let i=0,r=0;const t={};a.forEach(s=>{if(s.soldDetails){i+=s.soldDetails.salePrice||0,r+=s.soldDetails.netPayout||0;const u=s.soldDetails.platformId;t[u]=(t[u]||0)+1}});const l=e.reduce((s,u)=>s+(u.platforms?u.platforms.length:0),0);return{activeItemsCount:e.length,totalChannelsActive:Object.values(this.platforms).filter(s=>s.active).length,activeCrossListingsCount:l,soldItemsCount:a.length,grossRevenue:i,netProfit:r,platformSalesCount:t}}}const c=new U;class R{constructor(){this.ctx=null,this.muted=!1}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.muted=!this.muted,this.muted}playHappySaleChime(){if(!this.muted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,a=[{freq:523.25,time:0,dur:.35,gain:.3},{freq:659.25,time:.08,dur:.35,gain:.35},{freq:783.99,time:.16,dur:.45,gain:.4},{freq:1046.5,time:.24,dur:.65,gain:.5},{freq:1318.51,time:.34,dur:.85,gain:.45}],i=this.ctx.createGain();i.gain.setValueAtTime(.7,e),i.connect(this.ctx.destination),a.forEach(l=>{const s=this.ctx.createOscillator(),u=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(l.freq,e+l.time),u.gain.setValueAtTime(.001,e+l.time),u.gain.exponentialRampToValueAtTime(l.gain,e+l.time+.02),u.gain.exponentialRampToValueAtTime(.001,e+l.time+l.dur),s.connect(u),u.connect(i),s.start(e+l.time),s.stop(e+l.time+l.dur)});const r=this.ctx.createOscillator(),t=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(2093,e+.35),t.gain.setValueAtTime(.001,e+.35),t.gain.exponentialRampToValueAtTime(.3,e+.37),t.gain.exponentialRampToValueAtTime(1e-4,e+1.2),r.connect(t),t.connect(i),r.start(e+.35),r.stop(e+1.2)}catch(e){console.warn("Audio chime playback notice:",e)}}playSyncCompleteSound(){if(!this.muted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,a=this.ctx.createOscillator(),i=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(880,e),a.frequency.exponentialRampToValueAtTime(1174.66,e+.12),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.001,e+.25),a.connect(i),i.connect(this.ctx.destination),a.start(e),a.stop(e+.25)}catch{}}}const B=new R;class G{constructor(){this.container=document.getElementById("toast-container")}showSaleAlert({item:e,notification:a}){B.playHappySaleChime();const i=document.createElement("div");i.className="sale-toast",i.setAttribute("role","alert");const r=x[a.platformId]||{name:"Marketplace",color:"#10b981"},t=a.autoDelistedFrom&&a.autoDelistedFrom.length>0?`
        <div class="toast-delist-alert">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
          <span>Auto-delisted from: <strong>${a.autoDelistedFrom.map(l=>{var s;return((s=x[l])==null?void 0:s.shortName)||l}).join(", ")}</strong></span>
        </div>
      `:"";i.innerHTML=`
      <div class="toast-icon-box" style="color: ${r.color}; background: ${r.bgColor||"rgba(16, 185, 129, 0.15)"}">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
          <path d="M12 6v2m0 8v2"/>
        </svg>
      </div>
      <div class="toast-content">
        <div class="toast-header">
          <span class="toast-tag" style="color: ${r.color}">🎉 SALE CONFIRMED • ${r.shortName||r.name}</span>
          <span class="toast-time">Just now</span>
        </div>
        <div class="toast-title">${a.itemTitle}</div>
        <div class="toast-details">
          Sold for <strong>$${a.salePrice}</strong> to <em>${a.buyer}</em> (Net Payout: <strong>$${a.netPayout}</strong>)
        </div>
        ${t}
      </div>
      <button class="toast-close-btn" aria-label="Close notification">&times;</button>
    `,i.querySelector(".toast-close-btn").addEventListener("click",()=>{i.remove()}),this.container.appendChild(i),setTimeout(()=>{i.parentElement&&(i.style.animation="toast-slide-in 0.3s ease reverse forwards",setTimeout(()=>i.remove(),300))},9e3)}showInfoToast(e,a){const i=document.createElement("div");i.className="sale-toast",i.style.borderColor="rgba(99, 102, 241, 0.5)",i.style.boxShadow="0 10px 30px rgba(0,0,0,0.5), 0 0 25px rgba(99, 102, 241, 0.2)",i.innerHTML=`
      <div class="toast-icon-box" style="color: #818cf8; background: rgba(99, 102, 241, 0.15)">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
      </div>
      <div class="toast-content">
        <div class="toast-header">
          <span class="toast-tag" style="color: #818cf8">SYSTEM UPDATE</span>
          <span class="toast-time">Just now</span>
        </div>
        <div class="toast-title">${e}</div>
        <div class="toast-details">${a}</div>
      </div>
      <button class="toast-close-btn">&times;</button>
    `,i.querySelector(".toast-close-btn").addEventListener("click",()=>i.remove()),this.container.appendChild(i),setTimeout(()=>{i.parentElement&&i.remove()},5e3)}}const S=new G;function F(n){const e=c.getUnreadCount(),a=c.currentTab;n.innerHTML=`
    <div class="nav-container">
      <div class="brand-wrapper" id="nav-brand-logo">
        <div class="brand-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
          </svg>
        </div>
        <div class="brand-text">
          <div class="brand-title">
            OMNITHREAD
            <span class="brand-badge">Cross-Lister</span>
          </div>
          <div class="brand-subtitle">Apparel Multi-Channel Sync Hub</div>
        </div>
      </div>

      <nav>
        <ul class="nav-links">
          <li>
            <button class="nav-link-btn ${a==="dashboard"?"active":""}" data-tab="dashboard" title="Aesthetic Fashion Lookbook">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
              <span>Lookbook Dashboard</span>
            </button>
          </li>
          <li>
            <button class="nav-link-btn ${a==="command"?"active":""}" data-tab="command" title="Sales Command Center & Financials">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              <span>Sales Command Center</span>
            </button>
          </li>
          <li>
            <button class="nav-link-btn ${a==="composer"?"active":""}" data-tab="composer" title="List Once, Sell Everywhere with AI & Photos">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
              <span>Cross-Lister Studio</span>
            </button>
          </li>
          <li>
            <button class="nav-link-btn ${a==="inventory"?"active":""}" data-tab="inventory">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
              <span>Wardrobe Inventory</span>
            </button>
          </li>
          <li>
            <button class="nav-link-btn ${a==="platforms"?"active":""}" data-tab="platforms">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
              <span>Platforms (${Object.values(c.platforms).filter(u=>u.active).length})</span>
            </button>
          </li>
          <li>
            <button class="nav-link-btn ${a==="sales"?"active":""}" data-tab="sales">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              <span>Sales Feed</span>
            </button>
          </li>
        </ul>
      </nav>

      <div class="nav-actions">
        <!-- Happy Audio Test Button -->
        <button id="btn-test-sound" class="btn btn-secondary" title="Listen to Happy Sale Chime" style="padding: 0.5rem 0.85rem; font-size: 0.8rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          </svg>
          <span>Happy Chime</span>
        </button>

        <!-- Quick Simulate Sale Action -->
        <button id="btn-quick-sale" class="btn btn-success" style="font-size: 0.82rem; padding: 0.5rem 1rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
          <span>Simulate Sale Alert</span>
        </button>

        <!-- Bell Notification Counter -->
        <button id="btn-bell-notif" class="btn-icon-only" aria-label="Notifications">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
          </svg>
          ${e>0?`<span class="notification-count">${e}</span>`:""}
        </button>

        <!-- User Hub & Sign Out -->
        ${c.currentUser?`
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-left: 0.5rem; padding-left: 0.75rem; border-left: 1px solid var(--bg-card-border);">
            <div style="text-align: right; display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; font-weight: 700; color: #fff;">${c.currentUser.name}</span>
              <span style="font-size: 0.65rem; color: var(--text-muted);">${c.currentUser.email}</span>
            </div>
            <button id="btn-logout" class="btn-icon-only" title="Sign out of your hub" style="color: var(--color-danger);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
            </button>
          </div>
        `:""}
      </div>
    </div>
  `,n.querySelectorAll(".nav-link-btn").forEach(u=>{u.addEventListener("click",()=>{const m=u.getAttribute("data-tab");c.setTab(m)})});const i=n.querySelector("#nav-brand-logo");i&&i.addEventListener("click",()=>c.setTab("dashboard"));const r=n.querySelector("#btn-test-sound");r&&r.addEventListener("click",()=>{B.playHappySaleChime(),S.showInfoToast("Audio Preview","Playing joyful cash register chime! 🎶")});const t=n.querySelector("#btn-quick-sale");t&&t.addEventListener("click",()=>{const u=c.clothes.filter(k=>k.status==="active");if(u.length===0){alert("All items are currently sold! Create a new apparel listing first or relist an item.");return}const m=u[Math.floor(Math.random()*u.length)],g=m.platforms&&m.platforms.length>0?m.platforms:["depop","ebay","fb_marketplace"],o=g[Math.floor(Math.random()*g.length)],v=["alex_streetstyle","vintage_curator_nyc","thrift_queen_sf","kicks_collector_99","retro_drip_jp"],h=v[Math.floor(Math.random()*v.length)],f=c.recordSale({itemId:m.id,platformId:o,buyerUsername:h});f&&S.showSaleAlert(f)});const l=n.querySelector("#btn-bell-notif");l&&l.addEventListener("click",()=>{c.markAllNotificationsRead(),c.setTab("sales")});const s=n.querySelector("#btn-logout");s&&s.addEventListener("click",()=>{c.logout(),S.showInfoToast("Signed Out","You have been logged out of your reseller hub.")})}const P=[{id:"resell_01",url:"https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1920&q=85",title:"Curated Vintage Clothing Rails & Thrift Archive"},{id:"resell_02",url:"https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1920&q=85",title:"Heritage Heavyweight Denim & Streetwear Outerwear"},{id:"resell_03",url:"https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1920&q=85",title:"Deadstock Sneaker Vault & Kicks Collection"},{id:"resell_04",url:"https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1920&q=85",title:"Designer Wardrobe & Multi-Platform Resale Boutique"},{id:"resell_05",url:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1920&q=85",title:"High-Fashion Streetwear Lookbook Editorial"},{id:"resell_06",url:"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=85",title:"Order Dispatch & Multi-Channel Package Fulfillment"}];let $=null,T=0;function W(n){$&&(clearInterval($),$=null),n.innerHTML=`
    <div class="auth-gateway-wrap">
      <!-- Crossfading Dual Background Layers -->
      <div id="auth-bg-a" class="auth-bg-layer active" style="background-image: url('${P[0].url}');"></div>
      <div id="auth-bg-b" class="auth-bg-layer" style="background-image: url('${P[1].url}');"></div>
      <div class="auth-overlay-scrim"></div>

      <!-- Resell Background Caption -->
      <div class="auth-bg-caption" id="auth-bg-caption">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/></svg>
        <span id="caption-text">${P[0].title}</span>
      </div>

      <!-- Main Content Hero & Auth Card -->
      <div class="auth-center-content">
        <!-- Big Brand Title & Subtitle -->
        <div class="auth-header-block">
          <div class="auth-pill-badge">
            <span class="platform-dot pulse" style="background: #10b981;"></span>
            <span>MULTI-CHANNEL SELLING HUB</span>
          </div>

          <h1 class="auth-main-title">OMNITHREAD</h1>

          <p class="auth-sub-desc">
            The unified apparel cross-listing hub. Broadcast garments once to Facebook Marketplace, eBay, Depop, Poshmark, and 10+ platforms with real-time auto-delisting protection.
          </p>
        </div>

        <!-- Auth Card -->
        <div class="auth-card">
          <div class="auth-card-tabs">
            <button type="button" class="auth-tab-btn active" id="tab-login">Sign In</button>
            <button type="button" class="auth-tab-btn" id="tab-signup">Create Hub Account</button>
          </div>

          <form id="auth-form" class="auth-form-element">
            <div class="form-group" style="text-align: left; margin-bottom: 1.25rem;">
              <label for="auth-email" style="font-size: 0.85rem; font-weight: 700; color: #fff; margin-bottom: 0.4rem; display: block;">
                Seller Email Address
              </label>
              <div style="position: relative;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-muted);">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <input type="email" id="auth-email" required placeholder="seller@yourbrand.com" style="padding-left: 2.75rem; background: #0c101a; border-color: rgba(255,255,255,0.15); height: 48px;" value="reseller@omnithread.io" />
              </div>
              <span style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.35rem; display: block;">
                Each email loads a personal, isolated inventory hub and marketplace sync settings.
              </span>
            </div>

            <button type="submit" class="btn btn-primary auth-submit-btn" id="btn-auth-submit" style="width: 100%; height: 50px; font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem;">
              <span>Access Your Item Hub</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>

            <!-- Quick Demo Button -->
            <button type="button" id="btn-quick-demo" class="btn btn-secondary" style="width: 100%; height: 44px; font-size: 0.85rem; background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.1);">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              <span>Instant Guest Reseller Demo</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  `;const e=n.querySelector("#auth-bg-a"),a=n.querySelector("#auth-bg-b"),i=n.querySelector("#caption-text");let r="a";$=setInterval(()=>{T=(T+1)%P.length;const m=P[T];r==="a"?(a.style.backgroundImage=`url('${m.url}')`,a.classList.add("active"),e.classList.remove("active"),r="b"):(e.style.backgroundImage=`url('${m.url}')`,e.classList.add("active"),a.classList.remove("active"),r="a"),i&&(i.textContent=m.title)},1e4);const t=n.querySelector("#tab-login"),l=n.querySelector("#tab-signup"),s=n.querySelector("#btn-auth-submit");t.addEventListener("click",()=>{t.classList.add("active"),l.classList.remove("active"),s.querySelector("span").textContent="Access Your Item Hub"}),l.addEventListener("click",()=>{l.classList.add("active"),t.classList.remove("active"),s.querySelector("span").textContent="Create My Item Hub"}),n.querySelector("#auth-form").addEventListener("submit",m=>{m.preventDefault();const g=n.querySelector("#auth-email").value.trim();g&&($&&(clearInterval($),$=null),c.login(g),S.showInfoToast("Welcome Back!",`Logged in to personal hub: ${g}`))}),n.querySelector("#btn-quick-demo").addEventListener("click",()=>{$&&(clearInterval($),$=null),c.login("demo_reseller@omnithread.io"),S.showInfoToast("Demo Mode","Exploring as demo reseller with preloaded wardrobe items.")})}const D=[{id:"look_01",title:"Archive Noir: The Autumn Lookbook",tag:"EDITORIAL COLLECTION • VOL. 01",subtitle:"High-contrast oversized layering, distressed grain textures, and architectural silhouettes.",url:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1920&q=85",mood:"Avant-Garde Streetwear"},{id:"look_02",title:"Vintage Leather & Raw Selvedge Archive",tag:"HERITAGE APPAREL • VOL. 02",subtitle:"Classic heavy outerwear, distressed double-knee denim, and timeless utilitarian craftsmanship.",url:"https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1920&q=85",mood:"Vintage Moto & Heritage"},{id:"look_03",title:"Tokyo Cyber Drip & Minimalist Knitwear",tag:"GLOBAL CAPSULE • VOL. 03",subtitle:"Deconstructed wool knits, wide-leg trouser tailoring, and monochromatic aesthetic flow.",url:"https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1920&q=85",mood:"Tokyo Cyber Minimal"},{id:"look_04",title:"Studio Wardrobe: The Reseller Vault",tag:"CURATED RAILS • VOL. 04",subtitle:"Synchronized cross-platform boutique apparel ready for instant multi-channel dispatch.",url:"https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1920&q=85",mood:"Studio Curation"},{id:"look_05",title:"Modern High Fashion & Street Tailoring",tag:"RUNWAY ESSENTIALS • VOL. 05",subtitle:"Bold color palettes, statement coats, and progressive urban couture.",url:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1920&q=85",mood:"Runway Statement"}];let E=0;function I(){return E=(E+1)%D.length,D[E]}function q(n){const e=I();n.innerHTML=`
    <div class="lookbook-hero-container" id="lookbook-hero" style="background-image: url('${e.url}');">
      <div class="lookbook-hero-overlay"></div>

      <!-- Top Right Shuffle / Refresh Visual Button -->
      <div class="lookbook-controls">
        <button id="btn-cycle-look" class="btn-cycle-image" title="Shuffle aesthetic image">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
          <span>Cycle Visual (${e.mood})</span>
        </button>
      </div>

      <!-- Bottom Hero Content -->
      <div class="lookbook-content">
        <div class="lookbook-tag">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <span id="look-tag-text">${e.tag}</span>
        </div>

        <h1 class="lookbook-title" id="look-title-text">${e.title}</h1>
        <p class="lookbook-subtitle" id="look-subtitle-text">${e.subtitle}</p>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
          <button id="btn-hero-list" class="btn btn-primary" style="padding: 0.85rem 1.6rem; font-size: 0.95rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            <span>Cross-List An Item</span>
          </button>

          <button id="btn-hero-command" class="btn btn-secondary" style="background: rgba(15, 20, 32, 0.85); backdrop-filter: blur(16px); padding: 0.85rem 1.6rem; font-size: 0.95rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
            <span>Sales Command Center</span>
          </button>

          <button id="btn-hero-inventory" class="btn btn-secondary" style="background: rgba(15, 20, 32, 0.85); backdrop-filter: blur(16px); padding: 0.85rem 1.6rem; font-size: 0.95rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/></svg>
            <span>Wardrobe Inventory</span>
          </button>
        </div>
      </div>
    </div>
  `;const a=n.querySelector("#btn-cycle-look");a&&a.addEventListener("click",()=>{const l=I(),s=n.querySelector("#lookbook-hero");s&&(s.style.backgroundImage=`url('${l.url}')`),n.querySelector("#look-tag-text").textContent=l.tag,n.querySelector("#look-title-text").textContent=l.title,n.querySelector("#look-subtitle-text").textContent=l.subtitle,a.querySelector("span").textContent=`Cycle Visual (${l.mood})`});const i=n.querySelector("#btn-hero-list");i&&i.addEventListener("click",()=>c.setTab("composer"));const r=n.querySelector("#btn-hero-command");r&&r.addEventListener("click",()=>c.setTab("command"));const t=n.querySelector("#btn-hero-inventory");t&&t.addEventListener("click",()=>c.setTab("inventory"))}function J(n){const e=c.getMetrics(),a=c.clothes.filter(s=>s.status==="sold"),i=c.clothes.filter(s=>s.status==="active");Object.values(c.platforms).filter(s=>s.active),n.innerHTML=`
    <div class="view-header">
      <div class="view-title-group">
        <h1>Seller Command Center</h1>
        <p>Real-time cross-channel inventory synchronization, platform analytics, and automated multi-delisting protection.</p>
      </div>
      <div class="header-actions">
        <button id="btn-goto-composer" class="btn btn-primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          <span>Cross-List New Item</span>
        </button>
        <button id="btn-goto-platforms" class="btn btn-secondary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
          </svg>
          <span>Manage Platforms</span>
        </button>
      </div>
    </div>

    <!-- Top Key Metrics Cards -->
    <div class="metrics-grid">
      <div class="metric-card" style="--card-accent: #10b981;">
        <div class="metric-header">
          <span class="metric-label">Total Gross Sales</span>
          <div class="metric-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
        </div>
        <div class="metric-value">$${e.grossRevenue.toFixed(2)}</div>
        <div class="metric-sub positive">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
          <span>100% synchronized payout calculation</span>
        </div>
      </div>

      <div class="metric-card" style="--card-accent: #6366f1;">
        <div class="metric-header">
          <span class="metric-label">Net Take-Home Profit</span>
          <div class="metric-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
        </div>
        <div class="metric-value">$${e.netProfit.toFixed(2)}</div>
        <div class="metric-sub">
          <span>After platform fees & deductions</span>
        </div>
      </div>

      <div class="metric-card" style="--card-accent: #06b6d4;">
        <div class="metric-header">
          <span class="metric-label">Active Cross-Listings</span>
          <div class="metric-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
          </div>
        </div>
        <div class="metric-value">${e.activeCrossListingsCount}</div>
        <div class="metric-sub">
          <span>Across ${e.activeItemsCount} distinct apparel garments</span>
        </div>
      </div>

      <div class="metric-card" style="--card-accent: #f59e0b;">
        <div class="metric-header">
          <span class="metric-label">Active Channel Bridges</span>
          <div class="metric-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          </div>
        </div>
        <div class="metric-value">${e.totalChannelsActive} / 12</div>
        <div class="metric-sub">
          <span>Zero-latency auto-delist protection ON</span>
        </div>
      </div>
    </div>

    <!-- Active Channel Status Pill Bar -->
    <div class="content-panel" style="margin-bottom: 2rem;">
      <div class="panel-header">
        <div class="panel-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          <span>Live Channel Synchronization Status</span>
        </div>
        <span style="font-size: 0.8rem; color: var(--color-success); display: flex; align-items: center; gap: 0.4rem;">
          <span class="platform-dot pulse" style="background: var(--color-success)"></span>
          All channels responsive & listening
        </span>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
        ${Object.values(c.platforms).map(s=>`
          <div class="platform-pill ${s.active?"active":""}" 
               style="--pill-color: ${s.color}; --pill-bg: ${s.bgColor}; --pill-border: ${s.borderColor};">
            <span class="platform-dot ${s.active?"pulse":""}"></span>
            <strong>${s.shortName||s.name}</strong>
            <span style="opacity: 0.75; font-size: 0.7rem;">(${s.active?"Connected":"Disabled"})</span>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- 2 Column Layout: Recent Sales & Active Inventory Spotlight -->
    <div class="dashboard-columns">
      <!-- Left Column: Active Items Ready to Sell -->
      <div class="content-panel">
        <div class="panel-header">
          <div class="panel-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
            <span>Active Cross-Listed Clothes (${i.length})</span>
          </div>
          <button id="btn-view-all-inventory" class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.4rem 0.85rem;">View All Catalog &rarr;</button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${i.slice(0,3).map(s=>{const u=A[s.category]||A.jacket;return`
              <div style="display: flex; align-items: center; justify-content: space-between; background: var(--bg-surface); padding: 1rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--bg-card-border); gap: 1rem;">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 48px; height: 48px; border-radius: var(--radius-md); background: rgba(255,255,255,0.04); display: flex; align-items: center; justify-content: center; color: ${u.color};">
                    ${u.svg}
                  </div>
                  <div>
                    <div style="font-weight: 700; color: #fff; font-size: 0.95rem; margin-bottom: 0.2rem;">${s.title}</div>
                    <div style="font-size: 0.75rem; color: var(--text-muted); display: flex; gap: 0.75rem;">
                      <span>${s.brand}</span>
                      <span>•</span>
                      <span>Size ${s.size}</span>
                      <span>•</span>
                      <span style="color: var(--color-success); font-weight: 600;">$${s.basePrice} base</span>
                    </div>
                  </div>
                </div>

                <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; justify-content: flex-end;">
                  ${(s.platforms||[]).map(m=>{const g=x[m];return g?`
                      <span class="platform-pill" style="padding: 0.2rem 0.5rem; font-size: 0.7rem; color: ${g.color}; background: ${g.bgColor}; border-color: ${g.borderColor};">
                        ${g.shortName||g.name}
                      </span>
                    `:""}).join("")}
                </div>
              </div>
            `}).join("")}
        </div>
      </div>

      <!-- Right Column: Auto-Delist & Sales Protection Feed -->
      <div class="content-panel">
        <div class="panel-header">
          <div class="panel-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>Sales & Auto-Delist Logs</span>
          </div>
          <span style="font-size: 0.75rem; color: var(--text-muted);">${a.length} Completed</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.85rem;">
          ${a.length===0?`
            <div style="text-align: center; padding: 2rem; color: var(--text-muted); font-size: 0.85rem;">
              No sales logged yet. Click "Simulate Sale Alert" above to trigger one!
            </div>
          `:a.map(s=>{const u=s.soldDetails||{},m=x[u.platformId]||{name:u.platformId,color:"#10b981"};return`
              <div style="background: var(--bg-surface); border-radius: var(--radius-md); padding: 1rem; border: 1px solid rgba(16, 185, 129, 0.2);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                  <span style="font-size: 0.75rem; font-weight: 700; color: ${m.color}; text-transform: uppercase;">
                    Sold on ${u.platformName||m.name}
                  </span>
                  <span style="font-family: var(--font-display); font-weight: 700; color: var(--color-success); font-size: 1rem;">
                    +$${u.salePrice||s.basePrice}
                  </span>
                </div>
                <div style="font-size: 0.85rem; font-weight: 600; color: #fff; margin-bottom: 0.35rem;">
                  ${s.title}
                </div>
                <div style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
                  Buyer: <strong>${u.buyerUsername}</strong> • Net Payout: <strong style="color: #fff;">$${u.netPayout}</strong>
                </div>
                ${s.delistedPlatforms&&s.delistedPlatforms.length>0?`
                  <div style="font-size: 0.7rem; color: #a5b4fc; background: rgba(99, 102, 241, 0.12); padding: 0.3rem 0.5rem; border-radius: var(--radius-sm); display: flex; align-items: center; gap: 0.3rem;">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    <span>Delisted from: ${s.delistedPlatforms.map(g=>{var o;return((o=x[g])==null?void 0:o.shortName)||g}).join(", ")}</span>
                  </div>
                `:""}
              </div>
            `}).join("")}
        </div>
      </div>
    </div>
  `;const r=n.querySelector("#btn-goto-composer");r&&r.addEventListener("click",()=>c.setTab("composer"));const t=n.querySelector("#btn-goto-platforms");t&&t.addEventListener("click",()=>c.setTab("platforms"));const l=n.querySelector("#btn-view-all-inventory");l&&l.addEventListener("click",()=>c.setTab("inventory"))}function X(n){let e="jacket",a=120,i=[];const r={};Object.values(c.platforms).forEach(o=>{o.active&&(r[o.id]=a+(o.defaultMarkup||0))});const t=new Set(Object.values(c.platforms).filter(o=>o.active).map(o=>o.id));function l(o,v){const h=o*(v/100),f=Math.max(0,o-h);return{fee:h.toFixed(2),profit:f.toFixed(2)}}const s={carhartt:{prompt:"Vintage Carhartt Detroit Chore Coat Distressed Brown",title:"Vintage 90s Carhartt J97 Detroit Chore Jacket Blanket-Lined",brand:"Carhartt WIP",category:"jacket",size:"L",condition:"True Vintage Distressed",color:"Faded Hamilton Brown",basePrice:195,description:"Authentic 1990s USA-made Carhartt Detroit jacket (J97) in iconic Hamilton brown canvas. Heavyweight duck cotton with striped blanket lining, corduroy collar, and zip chest pocket. Natural patina, authentic distressing and sun fade throughout. Pristine vintage drape."},stussy:{prompt:"Stussy 8-Ball Mohair Knitted Sweater Cardigan",title:"Stussy 8-Ball Brushed Mohair Knit Cardigan",brand:"Stussy",category:"sweater",size:"XL (Oversized)",condition:"Brand New With Tags",color:"Bone / Black",basePrice:240,description:"Sold-out Stussy 8-Ball mohair blend cardigan. Ultra-soft hairy yarn texture with jacquard 8-Ball graphic across the back. Horn buttons, rib-knit cuffs and hem. 100% deadstock with original store tags and dust bag."},nike_dunk:{prompt:"Nike Dunk Low Retro Panda Black White",title:'Nike Dunk Low Retro "Panda" Black / White',brand:"Nike Sportswear",category:"sneakers",size:"US 10.5",condition:"Brand New With Tags",color:"White / Black",basePrice:135,description:"Classic two-tone smooth leather construction with perforated toe box, padded low-cut collar, and rubber traction outsole. Completely unworn in original box with receipt."},balenciaga:{prompt:"Balenciaga Oversized Heavyweight Washed Zip Hoodie",title:"Balenciaga Homme Washed Loopback Zip Hoodie",brand:"Balenciaga",category:"hoodie",size:"L",condition:"Pristine Pre-Owned",color:"Washed Charcoal",basePrice:420,description:"Signature drop-shoulder exaggerated cocoon silhouette in 600 GSM organic loopback fleece. Distressed sleeve cuffs and subtle enzyme-washed sun fading across hood seams. Includes brand hanger and authenticity card."}};function u(o){n.querySelector("#item-title").value=o.title,n.querySelector("#item-brand").value=o.brand,n.querySelector("#item-size").value=o.size,n.querySelector("#item-condition").value=o.condition,n.querySelector("#item-color").value=o.color,n.querySelector("#item-desc").value=o.description,n.querySelector("#item-base-price").value=o.basePrice,e=o.category,a=o.basePrice,Object.values(c.platforms).forEach(v=>{v.active&&(r[v.id]=a+(v.defaultMarkup||0))}),m(),S.showInfoToast("OmniAI Generated",`Generated listing & market price estimate for "${o.title}"!`)}function m(){n.innerHTML=`
      <div class="view-header">
        <div class="view-title-group">
          <h1>Universal Cross-Listing Composer</h1>
          <p>Upload photos, generate titles & descriptions with OmniAI, adjust platform pricing, and broadcast everywhere in one click.</p>
        </div>
      </div>

      <!-- OmniAI Studio Generation Banner -->
      <div class="ai-generator-panel">
        <div class="ai-generator-header">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <span class="ai-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              OmniAI Studio
            </span>
            <span style="font-size: 0.85rem; font-weight: 700; color: #fff;">Smart Title, Description & Resell Price Estimator</span>
          </div>
          <span style="font-size: 0.75rem; color: #cbd5e1;">Multi-Marketplace Algorithm v2.4</span>
        </div>

        <div style="font-size: 0.82rem; color: #e2e8f0; margin-bottom: 0.75rem;">
          Type in keywords (e.g. garment type, brand, era) or choose a quick prompt to automatically craft an SEO-optimized title, compelling description, and estimated price:
        </div>

        <div class="ai-input-row">
          <input type="text" id="ai-prompt-input" placeholder="e.g. Vintage 90s Carhartt Detroit jacket blanket lined faded brown" style="flex: 1; background: rgba(15, 20, 32, 0.7); border-color: rgba(168, 85, 247, 0.4);" />
          <button id="btn-ai-generate-action" class="btn-ai-generate">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            <span>Generate with AI</span>
          </button>
        </div>

        <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.75rem; flex-wrap: wrap;">
          <span style="font-size: 0.72rem; color: var(--text-muted);">Quick AI Prompts:</span>
          <span class="ai-chip" data-preset="carhartt">🔥 Vintage Carhartt Detroit ($195 est.)</span>
          <span class="ai-chip" data-preset="stussy">🎱 Stussy 8-Ball Mohair ($240 est.)</span>
          <span class="ai-chip" data-preset="nike_dunk">👟 Nike Dunk Panda ($135 est.)</span>
          <span class="ai-chip" data-preset="balenciaga">🧥 Balenciaga Oversized Hoodie ($420 est.)</span>
        </div>
      </div>

      <div class="composer-grid">
        <!-- Left Column: Apparel Details & Photos -->
        <div class="content-panel">
          <form id="composer-form">
            <!-- 1. Garment Photo Uploader -->
            <div class="form-section">
              <div class="form-section-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                <span>1. Garment Photography & Listing Photos</span>
              </div>

              <div class="photo-uploader-dropzone" id="photo-dropzone">
                <input type="file" id="photo-file-input" multiple accept="image/*" style="display: none;" />
                <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem; pointer-events: none;">
                  <div style="width: 48px; height: 48px; border-radius: var(--radius-md); background: rgba(99, 102, 241, 0.15); display: flex; align-items: center; justify-content: center; color: var(--accent-primary);">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                  </div>
                  <strong style="color: #fff; font-size: 0.95rem;">Click or Drag Photos Here to Upload</strong>
                  <span style="font-size: 0.78rem; color: var(--text-muted);">
                    PNG, JPG, WEBP. Photos will automatically be attached to all cross-posted listings.
                  </span>
                </div>
              </div>

              <!-- Uploaded Previews -->
              ${i.length>0?`
                <div class="photo-previews-grid">
                  ${i.map((d,p)=>`
                    <div class="photo-preview-card">
                      <img src="${d.url}" alt="Garment photo" />
                      ${p===0?'<span class="photo-cover-badge">Cover</span>':""}
                      <button type="button" class="photo-remove-btn" data-idx="${p}" title="Remove photo">&times;</button>
                    </div>
                  `).join("")}
                </div>
              `:""}
            </div>

            <!-- 2. Garment Placeholder Icon Picker -->
            <div class="form-section">
              <div class="form-section-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
                <span>2. Select Garment Category Icon</span>
              </div>
              <div class="garment-icon-picker">
                ${Object.values(A).map(d=>`
                  <div class="garment-icon-card ${d.id===e?"selected":""}" data-cat="${d.id}">
                    <div style="color: ${d.color};">
                      ${d.svg}
                    </div>
                    <span>${d.label}</span>
                  </div>
                `).join("")}
              </div>
            </div>

            <!-- 3. Basic Apparel Attributes -->
            <div class="form-section">
              <div class="form-section-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <span>3. Apparel Details & Specifications</span>
              </div>

              <div class="form-group">
                <label for="item-title">Listing Title *</label>
                <input type="text" id="item-title" required placeholder="e.g. Vintage 90s Heavyweight Washed Leather Biker Jacket" value="Vintage 90s Heavyweight Boxy Moto Jacket" />
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label for="item-brand">Brand / Designer *</label>
                  <input type="text" id="item-brand" required placeholder="e.g. Acne Studios, Nike, Carhartt WIP" value="Archive Studio" />
                </div>
                <div class="form-group">
                  <label for="item-size">Size *</label>
                  <select id="item-size">
                    <option value="XS">Extra Small (XS)</option>
                    <option value="S">Small (S)</option>
                    <option value="M" selected>Medium (M)</option>
                    <option value="L">Large (L)</option>
                    <option value="XL">Extra Large (XL)</option>
                    <option value="XXL">XXL</option>
                    <option value="32x32">32 x 32 (Pants)</option>
                    <option value="US 10.5">US 10.5 (Shoes)</option>
                  </select>
                </div>
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label for="item-condition">Garment Condition</label>
                  <select id="item-condition">
                    <option value="Brand New With Tags">Brand New With Tags (BNWT)</option>
                    <option value="Pristine Pre-Owned" selected>Pristine Pre-Owned</option>
                    <option value="Gently Worn">Gently Worn / Good Condition</option>
                    <option value="True Vintage Distressed">True Vintage Distressed</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="item-color">Colorway / Wash</label>
                  <input type="text" id="item-color" placeholder="e.g. Washed Obsidian, Olive Drab" value="Washed Black" />
                </div>
              </div>

              <div class="form-group">
                <label for="item-base-price">Universal Base Asking Price ($ USD) *</label>
                <input type="number" id="item-base-price" min="5" step="1" required value="${a}" />
                <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem; display: block;">
                  Adjusting this automatically recalibrates platform prices across all channels below.
                </span>
              </div>

              <div class="form-group">
                <label for="item-desc">Garment Description & Measurements</label>
                <textarea id="item-desc" rows="4" placeholder="Mention fit, measurements (pit-to-pit, length), fabric weight, and shipping notes...">Grain-treated heavyweight leather with custom oxidized zips, boxy torso cut, quilted lining. No flaws, pristine condition. Ships same day.</textarea>
              </div>
            </div>
          </form>
        </div>

        <!-- Right Column: Multi-Channel Cross-Posting & Pricing Overrides -->
        <div class="content-panel">
          <div class="panel-header">
            <div class="panel-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>
              <span>4. Multi-Channel Broadcast Engine</span>
            </div>
            <span style="font-size: 0.8rem; color: var(--color-success); font-weight: 600;">
              ${t.size} channels selected
            </span>
          </div>

          <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 1rem;">
            Toggle which platforms you want to post to. You can adjust the price for individual platforms (e.g. higher on eBay/Poshmark to offset fees, lower on Facebook for local pickup) anytime.
          </p>

          <table class="platform-price-table">
            <tbody>
              ${Object.values(c.platforms).filter(d=>d.active).map(d=>{const p=r[d.id]??a+(d.defaultMarkup||0),{fee:b,profit:y}=l(p,d.feePercentage),C=t.has(d.id);return`
                  <tr class="platform-price-row" style="${C?"":"opacity: 0.5;"}">
                    <td class="platform-price-cell" style="width: 40px;">
                      <label class="toggle-switch">
                        <input type="checkbox" class="channel-check" data-platform="${d.id}" ${C?"checked":""} />
                        <span class="toggle-slider"></span>
                      </label>
                    </td>
                    <td class="platform-price-cell">
                      <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="color: ${d.color};">${d.iconSvg}</span>
                        <div>
                          <div style="font-weight: 700; color: #fff; font-size: 0.85rem;">${d.name}</div>
                          <div style="font-size: 0.7rem; color: var(--text-muted);">${d.feePercentage}% fee • est. -$${b}</div>
                        </div>
                      </div>
                    </td>
                    <td class="platform-price-cell" style="width: 130px;">
                      <div style="display: flex; align-items: center; gap: 0.25rem;">
                        <span style="color: var(--text-muted); font-size: 0.85rem;">$</span>
                        <input type="number" 
                               class="platform-price-input" 
                               data-platform="${d.id}" 
                               value="${p}" 
                               step="1" 
                               min="1" 
                               style="padding: 0.4rem 0.5rem; font-size: 0.85rem; font-weight: 700; text-align: right;"
                               ${C?"":"disabled"} />
                      </div>
                      <div style="font-size: 0.68rem; color: var(--color-success); text-align: right; margin-top: 0.2rem;">
                        Net: $${y}
                      </div>
                    </td>
                  </tr>
                `}).join("")}
            </tbody>
          </table>

          <div style="margin-top: 1.75rem; padding-top: 1.25rem; border-top: 1px solid rgba(255,255,255,0.08);">
            <button id="btn-broadcast-submit" class="btn btn-primary" style="width: 100%; padding: 0.9rem; font-size: 1rem;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              <span>Publish & Cross-Post to ${t.size} Platforms</span>
            </button>
            <div style="text-align: center; margin-top: 0.75rem; font-size: 0.75rem; color: var(--text-muted);">
              ⚡ Auto-delisting protection is armed: when sold on any platform, listings on other channels will immediately deactivate.
            </div>
          </div>
        </div>
      </div>
    `;const o=n.querySelector("#photo-dropzone"),v=n.querySelector("#photo-file-input");o&&v&&(o.addEventListener("click",()=>v.click()),o.addEventListener("dragover",d=>{d.preventDefault(),o.classList.add("dragover")}),o.addEventListener("dragleave",()=>{o.classList.remove("dragover")}),o.addEventListener("drop",d=>{d.preventDefault(),o.classList.remove("dragover"),d.dataTransfer.files&&d.dataTransfer.files.length>0&&h(d.dataTransfer.files)}),v.addEventListener("change",d=>{d.target.files&&d.target.files.length>0&&h(d.target.files)}));function h(d){Array.from(d).forEach(p=>{if(p.type.startsWith("image/")){const b=new FileReader;b.onload=y=>{i.push({id:"photo_"+Date.now()+Math.random(),name:p.name,url:y.target.result}),m()},b.readAsDataURL(p)}})}n.querySelectorAll(".photo-remove-btn").forEach(d=>{d.addEventListener("click",p=>{p.stopPropagation();const b=Number(d.getAttribute("data-idx"));i.splice(b,1),m()})});const f=n.querySelector("#btn-ai-generate-action");f&&f.addEventListener("click",()=>{const d=n.querySelector("#ai-prompt-input").value.trim();if(!d){u(s.carhartt);return}const p=d.toLowerCase();let b="jacket";p.includes("hoodie")||p.includes("sweatshirt")?b="hoodie":p.includes("pant")||p.includes("jean")||p.includes("denim")?b="jeans":p.includes("shoe")||p.includes("sneaker")||p.includes("boot")?b="sneakers":p.includes("shirt")||p.includes("tee")?b="tshirt":(p.includes("knit")||p.includes("sweater")||p.includes("cardigan"))&&(b="sweater");const y={title:d.split(" ").map(C=>C.charAt(0).toUpperCase()+C.slice(1)).join(" ")+" (Curated Archive)",brand:d.split(" ")[0].toUpperCase(),category:b,size:"L",condition:"Pristine Pre-Owned",color:"Custom Tone",basePrice:165,description:`Authentic curated ${d}. High quality materials, premium vintage cut with natural drape. Flawless stitching, sanitized and ships same business day.`};u(y)}),n.querySelectorAll(".ai-chip").forEach(d=>{d.addEventListener("click",()=>{const p=d.getAttribute("data-preset");s[p]&&u(s[p])})}),n.querySelectorAll(".garment-icon-card").forEach(d=>{d.addEventListener("click",()=>{e=d.getAttribute("data-cat"),m()})});const k=n.querySelector("#item-base-price");k&&k.addEventListener("input",d=>{a=Number(d.target.value)||0,Object.values(c.platforms).forEach(p=>{p.active&&(r[p.id]=a+(p.defaultMarkup||0))}),m()}),n.querySelectorAll(".channel-check").forEach(d=>{d.addEventListener("change",p=>{const b=p.target.getAttribute("data-platform");p.target.checked?t.add(b):t.delete(b),m()})}),n.querySelectorAll(".platform-price-input").forEach(d=>{d.addEventListener("input",p=>{const b=p.target.getAttribute("data-platform");r[b]=Number(p.target.value)||0})});const w=n.querySelector("#btn-broadcast-submit");w&&w.addEventListener("click",d=>{d.preventDefault();const p=n.querySelector("#item-title").value.trim(),b=n.querySelector("#item-brand").value.trim(),y=n.querySelector("#item-size").value,C=n.querySelector("#item-condition").value,z=n.querySelector("#item-color").value,N=n.querySelector("#item-desc").value;if(!p){alert("Please enter a listing title.");return}if(t.size===0){alert("Please select at least one selling platform to publish to.");return}g({title:p,brand:b,size:y,condition:C,color:z,category:e,basePrice:a,platformPrices:{...r},platforms:Array.from(t),photos:i.map(H=>H.url),description:N})})}function g(o){var p;const v=document.getElementById("modal-root");v.className="modal-root";const h=o.platforms;let f=0;v.innerHTML=`
      <div class="modal-window">
        <div class="modal-header">
          <h2 class="modal-title" style="display: flex; align-items: center; gap: 0.6rem;">
            <span class="platform-dot pulse" style="background: var(--accent-primary); width: 10px; height: 10px;"></span>
            Instant Cross-Listing Engine
          </h2>
          <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">LIVE BROADCAST</span>
        </div>

        <div style="margin-bottom: 1rem;">
          <div style="font-weight: 700; color: #fff; font-size: 1rem; margin-bottom: 0.25rem;">
            ${o.title}
          </div>
          <div style="font-size: 0.8rem; color: var(--text-secondary);">
            Syncing item metadata, ${((p=o.photos)==null?void 0:p.length)||0} photo(s), pricing overrides, and garment specs across ${h.length} selling channels.
          </div>
        </div>

        <div class="sync-progress-bar-wrap">
          <div id="sync-progress-bar" class="sync-progress-bar-inner"></div>
        </div>

        <div class="sync-steps-list" id="sync-steps-list">
          ${h.map(b=>{const y=x[b]||{name:b,color:"#fff"};return`
              <div class="sync-step-item pending" id="step-item-${b}">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <span style="color: ${y.color};">${y.iconSvg||""}</span>
                  <div>
                    <strong style="color: #fff; font-size: 0.85rem;">${y.name}</strong>
                    <span style="color: var(--text-muted); font-size: 0.75rem; margin-left: 0.4rem;">($${o.platformPrices[b]||o.basePrice})</span>
                  </div>
                </div>
                <span class="step-status-tag" style="font-size: 0.75rem; color: var(--text-muted);">
                  Queued...
                </span>
              </div>
            `}).join("")}
        </div>

        <div id="modal-actions-area" style="margin-top: 1.5rem; text-align: right; display: none;">
          <button id="btn-modal-finish" class="btn btn-success" style="width: 100%;">
            Listing Live Everywhere! Open Wardrobe Inventory &rarr;
          </button>
        </div>
      </div>
    `;const k=document.getElementById("sync-progress-bar"),w=document.getElementById("modal-actions-area");function d(){if(f>=h.length){k.style.width="100%",B.playSyncCompleteSound(),w.style.display="block",c.addClothListing(o),document.getElementById("btn-modal-finish").addEventListener("click",()=>{v.className="modal-root hidden",v.innerHTML="",c.setTab("inventory")});return}const b=h[f],y=document.getElementById(`step-item-${b}`);y&&(y.className="sync-step-item",y.querySelector(".step-status-tag").innerHTML=`
          <span style="color: var(--color-cyan); display: flex; align-items: center; gap: 0.3rem;">
            <span class="platform-dot pulse" style="background: var(--color-cyan)"></span>
            Publishing schema & photos...
          </span>
        `);const C=Math.round((f+.5)/h.length*100);k.style.width=C+"%",setTimeout(()=>{y&&(y.className="sync-step-item completed",y.querySelector(".step-status-tag").innerHTML=`
            <span style="color: var(--color-success); font-weight: 700; display: flex; align-items: center; gap: 0.3rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
              Live & Synced
            </span>
          `),f++;const z=Math.round(f/h.length*100);k.style.width=z+"%",d()},450)}setTimeout(d,300)}m()}function Z(n){let e="all",a="all",i="";function r(){let l=c.clothes.filter(o=>{if(e!=="all"&&o.status!==e||a!=="all"&&(!o.platforms||!o.platforms.includes(a)))return!1;if(i){const v=i.toLowerCase(),h=(o.title||"").toLowerCase().includes(v),f=(o.brand||"").toLowerCase().includes(v),k=(o.size||"").toLowerCase().includes(v),w=(o.color||"").toLowerCase().includes(v);if(!h&&!f&&!k&&!w)return!1}return!0});n.innerHTML=`
      <div class="view-header">
        <div class="view-title-group">
          <h1>Wardrobe Inventory & Sync Status</h1>
          <p>Browse and manage all cross-listed garments across Facebook Marketplace, eBay, Depop, and connected channels.</p>
        </div>
        <div class="header-actions">
          <button id="btn-inv-new" class="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            <span>Cross-List New Garment</span>
          </button>
        </div>
      </div>

      <!-- Controls: Search & Filters -->
      <div class="inventory-controls">
        <div class="search-input-wrap">
          <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
          </svg>
          <input type="text" id="inv-search" placeholder="Search by garment title, brand, size, or wash..." value="${i}" />
        </div>

        <div class="filter-chips">
          <button class="filter-chip ${e==="all"?"active":""}" data-status="all">
            All (${c.clothes.length})
          </button>
          <button class="filter-chip ${e==="active"?"active":""}" data-status="active">
            Active (${c.clothes.filter(o=>o.status==="active").length})
          </button>
          <button class="filter-chip ${e==="sold"?"active":""}" data-status="sold">
            Sold (${c.clothes.filter(o=>o.status==="sold").length})
          </button>
        </div>

        <div style="min-width: 180px;">
          <select id="inv-platform-filter" style="padding: 0.5rem 0.75rem; font-size: 0.85rem;">
            <option value="all" ${a==="all"?"selected":""}>All Platforms</option>
            ${Object.values(c.platforms).filter(o=>o.active).map(o=>`
              <option value="${o.id}" ${a===o.id?"selected":""}>${o.name}</option>
            `).join("")}
          </select>
        </div>
      </div>

      <!-- Garment Cards Grid -->
      ${l.length===0?`
        <div class="empty-state">
          <div class="empty-state-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
          </div>
          <h3>No garments match your filters</h3>
          <p>Try clearing your search filters or add a new clothing item to cross-post to your selling channels.</p>
          <button class="btn btn-secondary" id="btn-clear-filters">Reset Filters</button>
        </div>
      `:`
        <div class="clothes-grid">
          ${l.map(o=>{const v=A[o.category]||A.jacket,h=o.status==="sold",f=o.soldDetails||{},k=x[f.platformId];return`
              <div class="cloth-card ${h?"sold-status":""}" data-id="${o.id}">
                <div class="cloth-thumbnail-wrap">
                  ${o.photos&&o.photos.length>0?`
                    <img src="${o.photos[0]}" alt="${o.title}" style="width: 100%; height: 100%; object-fit: cover;" />
                  `:`
                    <!-- Crisp Vector Placeholder Icon -->
                    <div style="color: ${v.color};">
                      ${v.svg}
                    </div>
                  `}

                  <span class="cloth-status-tag ${h?"sold":"active"}">
                    ${h?"SOLD OUT":"LIVE & SYNCED"}
                  </span>

                  <span class="cloth-price-tag">
                    $${o.basePrice}
                  </span>
                </div>

                <div class="cloth-details">
                  <div class="cloth-meta-top">
                    <span class="cloth-brand">${o.brand}</span>
                    <span class="cloth-size">Size ${o.size} • ${o.color||"Standard"}</span>
                  </div>

                  <h3 class="cloth-title">${o.title}</h3>
                  <p class="cloth-desc">${o.description||"No description provided."}</p>

                  <div class="cloth-platforms-listed">
                    <div class="cloth-platforms-label">
                      <span>Channel Sync & Platform Pricing:</span>
                      <span style="font-weight: 700; color: #fff;">${o.platforms?o.platforms.length:0} Channels</span>
                    </div>

                    <div class="cloth-platforms-chips">
                      ${(o.platforms||[]).map(w=>{const d=x[w];if(!d)return"";const p=o.platformPrices&&o.platformPrices[w]||o.basePrice;return`
                          <div class="platform-pill" style="color: ${d.color}; background: ${d.bgColor}; border-color: ${d.borderColor}; font-size: 0.72rem; padding: 0.25rem 0.55rem;">
                            <span>${d.shortName||d.name}:</span>
                            <strong style="color: #fff; margin-left: 0.2rem;">$${p}</strong>
                          </div>
                        `}).join("")}
                    </div>

                    ${h?`
                      <div style="margin-top: 0.85rem; padding: 0.65rem 0.85rem; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: var(--radius-md);">
                        <div style="font-size: 0.75rem; color: #10b981; font-weight: 700; display: flex; justify-content: space-between;">
                          <span>Sold via ${f.platformName||(k==null?void 0:k.name)||"Platform"}</span>
                          <span>Net: $${f.netPayout}</span>
                        </div>
                        <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 0.2rem;">
                          Buyer: <strong>${f.buyerUsername}</strong>
                        </div>
                        ${o.delistedPlatforms&&o.delistedPlatforms.length>0?`
                          <div style="font-size: 0.68rem; color: #a5b4fc; margin-top: 0.35rem; display: flex; align-items: center; gap: 0.25rem;">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                            <span>Protected & auto-delisted from: ${o.delistedPlatforms.map(w=>{var d;return((d=x[w])==null?void 0:d.shortName)||w}).join(", ")}</span>
                          </div>
                        `:""}
                      </div>
                    `:""}
                  </div>

                  <div class="cloth-card-actions">
                    ${h?`
                      <button class="btn btn-secondary btn-relist-item" data-id="${o.id}" style="flex: 1; font-size: 0.8rem; padding: 0.5rem 0.75rem;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                        <span>Relist Everywhere</span>
                      </button>
                    `:`
                      <button class="btn btn-success btn-sell-item" data-id="${o.id}" style="flex: 1; font-size: 0.78rem; padding: 0.5rem 0.6rem;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        <span>Simulate Sale</span>
                      </button>
                      <button class="btn btn-secondary btn-edit-prices" data-id="${o.id}" style="font-size: 0.78rem; padding: 0.5rem 0.75rem;" title="Adjust prices per platform">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                        <span>Adjust Prices</span>
                      </button>
                    `}
                    <button class="btn btn-secondary btn-delete-item" data-id="${o.id}" style="padding: 0.5rem; color: var(--color-danger);" title="Delete listing">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            `}).join("")}
        </div>
      `}
    `;const s=n.querySelector("#inv-search");s&&s.addEventListener("input",o=>{i=o.target.value,r()}),n.querySelectorAll(".filter-chip").forEach(o=>{o.addEventListener("click",()=>{e=o.getAttribute("data-status"),r()})});const u=n.querySelector("#inv-platform-filter");u&&u.addEventListener("change",o=>{a=o.target.value,r()});const m=n.querySelector("#btn-clear-filters");m&&m.addEventListener("click",()=>{e="all",a="all",i="",r()});const g=n.querySelector("#btn-inv-new");g&&g.addEventListener("click",()=>c.setTab("composer")),n.querySelectorAll(".btn-sell-item").forEach(o=>{o.addEventListener("click",()=>{const v=o.getAttribute("data-id"),h=c.clothes.find(b=>b.id===v);if(!h)return;const f=h.platforms&&h.platforms.length>0?h.platforms:["depop"],k=f[Math.floor(Math.random()*f.length)],w=["retro_street_co","drip_curator_nyc","grail_hunter","tokyo_vintage_finds"],d=w[Math.floor(Math.random()*w.length)],p=c.recordSale({itemId:h.id,platformId:k,buyerUsername:d});p&&(S.showSaleAlert(p),r())})}),n.querySelectorAll(".btn-edit-prices").forEach(o=>{o.addEventListener("click",()=>{const v=o.getAttribute("data-id"),h=c.clothes.find(f=>f.id===v);h&&t(h)})}),n.querySelectorAll(".btn-relist-item").forEach(o=>{o.addEventListener("click",()=>{const v=o.getAttribute("data-id"),h=c.clothes.find(f=>f.id===v);h&&(h.status="active",h.soldDetails=null,h.delistedPlatforms=[],c.save("omnithread_clothes_v1",c.clothes),S.showInfoToast("Item Relisted",`"${h.title}" is now active across all platforms.`),c.notify())})}),n.querySelectorAll(".btn-delete-item").forEach(o=>{o.addEventListener("click",()=>{const v=o.getAttribute("data-id");confirm("Are you sure you want to remove this garment listing?")&&(c.deleteCloth(v),r())})})}function t(l){const s=document.getElementById("modal-root");s.className="modal-root",s.innerHTML=`
      <div class="modal-window">
        <div class="modal-header">
          <div>
            <h2 class="modal-title">Adjust Channel Prices</h2>
            <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.2rem;">
              Fine-tune the price for "${l.title}" per marketplace.
            </p>
          </div>
          <button id="modal-close-btn" class="toast-close-btn" style="position: static; font-size: 1.5rem;">&times;</button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
          ${(l.platforms||[]).map(m=>{const g=x[m];if(!g)return"";const o=l.platformPrices&&l.platformPrices[m]||l.basePrice;return`
              <div style="display: flex; align-items: center; justify-content: space-between; background: var(--bg-surface); padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--bg-card-border);">
                <div style="display: flex; align-items: center; gap: 0.6rem;">
                  <span style="color: ${g.color};">${g.iconSvg}</span>
                  <div>
                    <strong style="color: #fff; font-size: 0.9rem;">${g.name}</strong>
                    <div style="font-size: 0.72rem; color: var(--text-muted);">${g.feePercentage}% fee</div>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 0.35rem;">
                  <span style="color: var(--text-muted);">$</span>
                  <input type="number" 
                         class="modal-price-input" 
                         data-platform="${g.id}" 
                         value="${o}" 
                         style="width: 90px; text-align: right; padding: 0.4rem 0.5rem; font-weight: 700;" />
                </div>
              </div>
            `}).join("")}
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 0.75rem;">
          <button id="modal-cancel-btn" class="btn btn-secondary">Cancel</button>
          <button id="modal-save-btn" class="btn btn-primary">Save & Sync Changes</button>
        </div>
      </div>
    `;const u=()=>{s.className="modal-root hidden",s.innerHTML=""};s.querySelector("#modal-close-btn").addEventListener("click",u),s.querySelector("#modal-cancel-btn").addEventListener("click",u),s.querySelector("#modal-save-btn").addEventListener("click",()=>{s.querySelectorAll(".modal-price-input").forEach(m=>{const g=m.getAttribute("data-platform"),o=Number(m.value)||l.basePrice;c.updateClothPrice(l.id,g,o)}),u(),S.showInfoToast("Prices Updated",`Updated prices for "${l.title}" across connected channels.`),r()})}r()}function K(n){function e(){const i=Object.values(c.platforms),r=i.filter(t=>t.active).length;n.innerHTML=`
      <div class="view-header">
        <div class="view-title-group">
          <h1>Selling Platforms & Channel Bridges</h1>
          <p>Toggle and configure active marketplaces. Enable auto-delist protection to ensure items are pulled when sold on another channel.</p>
        </div>
        <div class="header-actions">
          <div style="font-size: 0.85rem; background: rgba(99, 102, 241, 0.15); border: 1px solid rgba(99, 102, 241, 0.3); color: #a5b4fc; padding: 0.5rem 1rem; border-radius: var(--radius-full); font-weight: 700;">
            ${r} of ${i.length} Marketplaces Active
          </div>
        </div>
      </div>

      <div class="platforms-grid">
        ${i.map(t=>`
            <div class="platform-manage-card" style="${t.active?"":"opacity: 0.7;"}">
              <div class="platform-manage-header">
                <div class="platform-brand-info">
                  <div class="platform-icon-large" style="background: ${t.bgColor}; color: ${t.color}; border: 1px solid ${t.borderColor};">
                    ${t.iconSvg}
                  </div>
                  <div class="platform-title-group">
                    <h3>${t.name}</h3>
                    <div class="platform-category-tag">${t.category}</div>
                  </div>
                </div>

                <label class="toggle-switch" title="Toggle active platform">
                  <input type="checkbox" class="plat-toggle-active" data-id="${t.id}" ${t.active?"checked":""} />
                  <span class="toggle-slider"></span>
                </label>
              </div>

              <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
                ${t.tagline}
              </div>

              <div class="platform-stats-row">
                <div class="platform-stat-item">
                  <span class="platform-stat-label">Marketplace Fee</span>
                  <span class="platform-stat-value" style="color: ${t.color};">${t.feePercentage}%</span>
                </div>
                <div class="platform-stat-item">
                  <span class="platform-stat-label">Default Price Offset</span>
                  <span class="platform-stat-value">
                    ${t.defaultMarkup>=0?`+$${t.defaultMarkup}`:`-$${Math.abs(t.defaultMarkup)}`}
                  </span>
                </div>
              </div>

              <div class="platform-settings-toggle">
                <span>Account Status:</span>
                <span style="font-weight: 600; color: ${t.active?"var(--color-success)":"var(--text-muted)"}; display: flex; align-items: center; gap: 0.35rem;">
                  <span class="platform-dot ${t.active?"pulse":""}" style="background: ${t.active?"var(--color-success)":"var(--text-muted)"};"></span>
                  ${t.active?t.accountHandle||"Connected":"Disconnected"}
                </span>
              </div>

              <div class="platform-settings-toggle">
                <span title="When an item sells on any channel, immediately delist from this platform">
                  Auto-Delist Protection:
                </span>
                <label class="toggle-switch" style="width: 36px; height: 20px;">
                  <input type="checkbox" class="plat-toggle-delist" data-id="${t.id}" ${t.autoDelist?"checked":""} />
                  <span class="toggle-slider" style="border-radius: 20px;"></span>
                </label>
              </div>

              <div style="margin-top: 1.25rem; display: flex; gap: 0.5rem;">
                <button class="btn btn-secondary btn-config-platform" data-id="${t.id}" style="width: 100%; font-size: 0.8rem; padding: 0.45rem;">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                  <span>Configure Settings & Auth</span>
                </button>
              </div>
            </div>
          `).join("")}
      </div>
    `,n.querySelectorAll(".plat-toggle-active").forEach(t=>{t.addEventListener("change",l=>{const s=l.target.getAttribute("data-id");c.togglePlatformActive(s),S.showInfoToast("Platform Updated",`${c.platforms[s].name} is now ${c.platforms[s].active?"Active":"Disabled"}.`),e()})}),n.querySelectorAll(".plat-toggle-delist").forEach(t=>{t.addEventListener("change",l=>{const s=l.target.getAttribute("data-id");c.togglePlatformAutoDelist(s),e()})}),n.querySelectorAll(".btn-config-platform").forEach(t=>{t.addEventListener("click",()=>{const l=t.getAttribute("data-id"),s=c.platforms[l];a(s)})})}function a(i){const r=document.getElementById("modal-root");r.className="modal-root",r.innerHTML=`
      <div class="modal-window">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div style="width: 38px; height: 38px; border-radius: var(--radius-md); background: ${i.bgColor}; color: ${i.color}; display: flex; align-items: center; justify-content: center;">
              ${i.iconSvg}
            </div>
            <div>
              <h2 class="modal-title">${i.name} Settings</h2>
              <div style="font-size: 0.75rem; color: var(--text-muted);">${i.category}</div>
            </div>
          </div>
          <button id="modal-close-btn" class="toast-close-btn" style="position: static; font-size: 1.5rem;">&times;</button>
        </div>

        <div class="form-group">
          <label>Seller Account Handle / Username</label>
          <input type="text" id="cfg-handle" value="${i.accountHandle||""}" placeholder="e.g. @your_brand_store" />
        </div>

        <div class="form-group">
          <label>Default Price Offset ($ USD added/subtracted on listing)</label>
          <input type="number" id="cfg-markup" value="${i.defaultMarkup||0}" step="1" />
          <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem; display: block;">
            Marketplace fee is <strong>${i.feePercentage}%</strong>. Adding a +$5 to +$10 offset protects your profit margins against seller fees.
          </span>
        </div>

        <div class="form-group" style="margin-top: 1rem; padding: 1rem; background: rgba(255,255,255,0.03); border-radius: var(--radius-md); border: 1px solid var(--bg-card-border);">
          <div style="font-weight: 700; color: #fff; font-size: 0.85rem; margin-bottom: 0.3rem;">API Authentication & OAuth Status</div>
          <div style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
            Simulated live OAuth bridge with token exchange and webhook listeners.
          </div>
          <button id="btn-reauth" class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.4rem 0.85rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
            <span>Re-authenticate Credentials</span>
          </button>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 0.75rem; margin-top: 1.5rem;">
          <button id="modal-cancel-btn" class="btn btn-secondary">Cancel</button>
          <button id="modal-save-btn" class="btn btn-primary">Save Settings</button>
        </div>
      </div>
    `;const t=()=>{r.className="modal-root hidden",r.innerHTML=""};r.querySelector("#modal-close-btn").addEventListener("click",t),r.querySelector("#modal-cancel-btn").addEventListener("click",t),r.querySelector("#btn-reauth").addEventListener("click",l=>{l.target.innerHTML="Connecting...",setTimeout(()=>{l.target.innerHTML="✓ Authenticated Successfully",S.showInfoToast("OAuth Refreshed",`Connected and synchronized with ${i.name} APIs.`)},700)}),r.querySelector("#modal-save-btn").addEventListener("click",()=>{const l=r.querySelector("#cfg-handle").value.trim(),s=Number(r.querySelector("#cfg-markup").value)||0;i.accountHandle=l,i.defaultMarkup=s,c.save("omnithread_platforms_v1",c.platforms),t(),S.showInfoToast("Saved",`${i.name} settings updated.`),e()})}e()}function _(n){const e=c.notifications,a=c.clothes.filter(t=>t.status==="sold");n.innerHTML=`
    <div class="view-header">
      <div class="view-title-group">
        <h1>Sales Events & Real-Time Notifications</h1>
        <p>Live audit trail of completed sales, platform payouts, and cross-channel auto-delisting logs.</p>
      </div>
      <div class="header-actions">
        <button id="btn-trigger-sale-feed" class="btn btn-success">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          <span>Trigger New Simulated Sale</span>
        </button>
      </div>
    </div>

    <div class="dashboard-columns">
      <!-- Left: Notifications Log -->
      <div class="content-panel">
        <div class="panel-header">
          <div class="panel-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            <span>Live Sale Activity Feed (${e.length})</span>
          </div>
          <button id="btn-clear-notifs" class="btn btn-secondary" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;">Clear All</button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${e.length===0?`
            <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
              No notifications yet. Trigger a sale or cross-post a new clothing item!
            </div>
          `:e.map(t=>{const l=t.type==="sale",s=x[t.platformId]||{name:"Marketplace",color:"#10b981"};return`
              <div style="background: var(--bg-surface); border: 1px solid ${l?"rgba(16, 185, 129, 0.3)":"var(--bg-card-border)"}; border-radius: var(--radius-md); padding: 1.25rem; position: relative;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                  <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span class="platform-dot" style="background: ${l?"var(--color-success)":"var(--accent-primary)"};"></span>
                    <span style="font-weight: 700; font-size: 0.85rem; color: ${l?"var(--color-success)":"#fff"}; text-transform: uppercase; letter-spacing: 0.05em;">
                      ${t.title}
                    </span>
                  </div>
                  <span style="font-size: 0.75rem; color: var(--text-muted);">
                    ${new Date(t.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}
                  </span>
                </div>

                <div style="font-size: 0.95rem; font-weight: 700; color: #fff; margin-bottom: 0.35rem;">
                  ${t.itemTitle}
                </div>

                ${l?`
                  <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.6rem;">
                    Sold to buyer <strong>${t.buyer}</strong> on <span style="color: ${s.color}; font-weight: 600;">${s.name}</span> for <strong>$${t.salePrice}</strong>. 
                    Net payout after fee: <strong style="color: #fff;">$${t.netPayout}</strong>.
                  </div>
                  ${t.autoDelistedFrom&&t.autoDelistedFrom.length>0?`
                    <div style="font-size: 0.72rem; color: #a5b4fc; background: rgba(99, 102, 241, 0.12); padding: 0.4rem 0.6rem; border-radius: var(--radius-sm); display: flex; align-items: center; gap: 0.4rem;">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>Auto-delist active: instantly deactivated on <strong>${t.autoDelistedFrom.map(u=>{var m;return((m=x[u])==null?void 0:m.shortName)||u}).join(", ")}</strong></span>
                    </div>
                  `:""}
                `:`
                  <div style="font-size: 0.8rem; color: var(--text-secondary);">
                    Broadcasted to ${t.platforms?t.platforms.length:0} channels: ${(t.platforms||[]).map(u=>{var m;return((m=x[u])==null?void 0:m.shortName)||u}).join(", ")}
                  </div>
                `}
              </div>
            `}).join("")}
        </div>
      </div>

      <!-- Right: Payout Breakdown & Platform Revenue Distribution -->
      <div class="content-panel">
        <div class="panel-header">
          <div class="panel-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/></svg>
            <span>Sales By Marketplace</span>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.85rem;">
          ${Object.values(c.platforms).filter(t=>t.active).map(t=>{const l=a.filter(u=>u.soldDetails&&u.soldDetails.platformId===t.id).length,s=a.filter(u=>u.soldDetails&&u.soldDetails.platformId===t.id).reduce((u,m)=>u+(m.soldDetails.salePrice||0),0);return`
              <div style="display: flex; align-items: center; justify-content: space-between; background: var(--bg-surface); padding: 0.85rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--bg-card-border);">
                <div style="display: flex; align-items: center; gap: 0.6rem;">
                  <span style="color: ${t.color};">${t.iconSvg}</span>
                  <div>
                    <div style="font-weight: 700; color: #fff; font-size: 0.85rem;">${t.name}</div>
                    <div style="font-size: 0.72rem; color: var(--text-muted);">${l} items sold</div>
                  </div>
                </div>
                <div style="text-align: right;">
                  <div style="font-family: var(--font-display); font-weight: 700; color: #fff; font-size: 0.95rem;">
                    $${s.toFixed(2)}
                  </div>
                  <div style="font-size: 0.7rem; color: var(--color-success);">
                    Fee: ${t.feePercentage}%
                  </div>
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
    </div>
  `;const i=n.querySelector("#btn-clear-notifs");i&&i.addEventListener("click",()=>{c.notifications=[],c.save("omnithread_notifications_v1",[]),c.notify()});const r=n.querySelector("#btn-trigger-sale-feed");r&&r.addEventListener("click",()=>{const t=c.clothes.filter(v=>v.status==="active");if(t.length===0){alert("All items are sold! Relist or add a new garment first.");return}const l=t[Math.floor(Math.random()*t.length)],s=l.platforms&&l.platforms.length>0?l.platforms:["ebay"],u=s[Math.floor(Math.random()*s.length)],m=["tokyo_drip","melbourne_vintage","london_streetwear","nyc_hype_beast"],g=m[Math.floor(Math.random()*m.length)],o=c.recordSale({itemId:l.id,platformId:u,buyerUsername:g});o&&(S.showSaleAlert(o),_(n))})}const M=document.getElementById("navbar-root"),L=document.getElementById("main-content");function j(){if(!c.currentUser){M.innerHTML="",M.style.display="none",W(L);return}switch(M.style.display="block",F(M),c.currentTab){case"dashboard":q(L);break;case"command":J(L);break;case"composer":X(L);break;case"inventory":Z(L);break;case"platforms":K(L);break;case"sales":_(L);break;default:q(L)}}c.subscribe(()=>{j()});window.addEventListener("click",()=>{B.init()},{once:!0});j();
