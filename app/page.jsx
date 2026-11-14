"use client";
import { useState } from "react";

const WHATSAPP = "https://wa.me/237651438848?text=Hello%20Joel!%20I%20want%20to%20order%20a%20website%20/%20webapp%20from%20Joel's%20Websites%20and%20Webapps.";

const products = [
  { id:1, type:"WEBSITE - CAMEROON", title:"Business Website - Cameroon", desc:"5 pages, Mobile-friendly, SEO, WhatsApp button, Contact form. Delivery 3-5 days.", priceFCFA:"250,000 FCFA", priceUSD:"$450", tag:"MOST POPULAR" },
  { id:2, type:"WEBSITE - CAMEROON", title:"E-commerce Shop - Cameroon", desc:"Online shop, MoMo / Orange Money, Product pages, Orders via WhatsApp.", priceFCFA:"750,000 FCFA", priceUSD:"$1,200", tag:"BEST FOR SHOPS" },
  { id:3, type:"WEBAPP - CAMEROON", title:"Custom WebApp MVP - Cameroon", desc:"Login, Dashboard, Forms, Admin panel. For schools, hospitals, businesses.", priceFCFA:"2,500,000 FCFA", priceUSD:"$4,200", tag:"PREMIUM" },
  { id:4, type:"WEBSITE - ABROAD", title:"Business Website - USA / Europe", desc:"Premium design, CMS, SEO, 10 pages. International standard.", priceFCFA:"~ 8,750,000 FCFA", priceUSD:"$15,000", tag:"INTERNATIONAL" },
  { id:5, type:"WEBAPP - ABROAD", title:"SaaS / WebApp MVP - USA / Europe", desc:"Full webapp, Auth, Payments, Dashboard. Built with Next.js.", priceFCFA:"~ 29,000,000 FCFA", priceUSD:"$50,000", tag:"INTERNATIONAL" },
  { id:6, type:"WEBSITE - CAMEROON", title:"Landing Page - Cameroon", desc:"1-page fast site for your business, church, event. Delivery 24h.", priceFCFA:"75,000 FCFA", priceUSD:"$145", tag:"FASTEST" },
];

export default function Home(){
  const [selected, setSelected] = useState(null);
  const [momoNumber, setMomoNumber] = useState("");
  const [momoName, setMomoName] = useState("");
  const [paid, setPaid] = useState(false);
  const [coursePaid, setCoursePaid] = useState(false);
  const [courseNumber, setCourseNumber] = useState("");

  const payDemo = (p) => {
    if(!momoNumber || momoNumber.length < 9){ alert("Enter your MTN MoMo number e.g 651438848"); return; }
    setPaid(p.title);
  };

  return (
    <div>
      {/* HEADER */}
      <header style={{background:"#0b2e16",color:"white",padding:"14px 6%",display:"flex",justifyContent:"space-between",alignItems:"center",position:"sticky",top:0,zIndex:10}}>
        <div><b style={{fontSize:20}}>JOEL'S</b> <span style={{color:"#f9c74f",fontWeight:800}}>WEBSITES & WEBAPPS</span><div style={{fontSize:11,letterSpacing:2,opacity:0.8}}>YAOUNDE • CAMEROON • WORLDWIDE</div></div>
        <div style={{display:"flex",gap:12}}>
          <a href="#learn" style={{color:"white",textDecoration:"none",fontWeight:700}}>Learn</a>
          <a href="#shop" style={{color:"white",textDecoration:"none",fontWeight:700}}>Shop</a>
          <a href={WHATSAPP} target="_blank" style={{background:"#25D366",color:"white",padding:"8px 16px",borderRadius:100,textDecoration:"none",fontWeight:800}}>💬 WhatsApp</a>
        </div>
      </header>

      {/* HERO */}
      <section style={{background:"linear-gradient(135deg,#0b2e16,#0f6b2e)",color:"white",padding:"50px 6%"}}>
        <span style={{background:"#f9c74f",color:"#0b2e16",padding:"6px 12px",borderRadius:100,fontWeight:800,fontSize:12}}>✦ YAOUNDE • LEARN • BUILD • SELL</span>
        <h1 style={{fontSize:44,lineHeight:1.1,margin:"18px 0"}}>Learn to Build Websites<br/> & Webapps. <span style={{color:"#f9c74f"}}>Then Sell Them.</span></h1>
        <p style={{maxWidth:600,opacity:0.9}}>Joel teaches you step-by-step, even if you have zero experience. Then you can order a premium website or webapp for your business — with real prices for Cameroon and abroad, and pay with MoMo demo.</p>
        <div style={{display:"flex",gap:12,marginTop:20,flexWrap:"wrap"}}>
          <a href="#learn" style={{background:"#f9c74f",color:"#0b2e16",padding:"14px 22px",borderRadius:100,fontWeight:800,textDecoration:"none"}}>Join Training - 50k / Month →</a>
          <a href="#shop" style={{background:"white",color:"#0b2e16",padding:"14px 22px",borderRadius:100,fontWeight:800,textDecoration:"none"}}>Shop Websites & Webapps</a>
        </div>
        <div style={{display:"flex",gap:16,marginTop:22,flexWrap:"wrap",fontSize:13}}>
          <span>✅ No experience needed</span><span>✅ Learn on your phone</span><span>✅ Real projects</span><span>✅ Certificate</span>
        </div>
      </section>

      {/* LEARN */}
      <section id="learn" style={{padding:"40px 6%"}}>
        <h2 style={{fontSize:32}}>🎓 Learn With Joel — 50,000 FCFA / Month</h2>
        <p>4 Weeks. Build your first website in Week 1, your first webapp in Week 3, and start selling in Week 4.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:14,marginTop:16}}>
          {["Week 1: Websites with HTML + Next.js","Week 2: Design, Premium Look, Mobile","Week 3: Webapps, Forms, MoMo, WhatsApp","Week 4: How to Find Clients & Sell in Cameroon + Abroad"].map((t,i)=>(
            <div key={i} style={{background:"white",padding:20,borderRadius:16,border:"1px solid #eee"}}><b>Module {i+1}</b><p>{t}</p></div>
          ))}
        </div>
        <div style={{background:"white",padding:22,borderRadius:16,marginTop:16,border:"2px solid #0f6b2e"}}>
          <h3>Enroll Now — Demo MoMo Payment</h3>
          <p>Course: <b>50,000 FCFA / Month</b> • Yaounde • Online + In-person</p>
          {!coursePaid ? (
            <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:12}}>
              <input placeholder="Your MoMo number e.g 651438848" value={courseNumber} onChange={e=>setCourseNumber(e.target.value)} style={{padding:12,borderRadius:10,border:"1px solid #ccc",flex:1,minWidth:200}} />
              <button onClick={()=>{ if(courseNumber.length<9){alert("Enter MoMo number");return;} setCoursePaid(true); }} style={{background:"#0f6b2e",color:"white",padding:"12px 20px",border:"none",borderRadius:10,fontWeight:800}}>Pay 50,000 FCFA with MoMo (Demo) →</button>
            </div>
          ) : (
            <div style={{background:"#e8f5ec",padding:14,borderRadius:10,marginTop:12}}><b>✅ Demo Payment Successful!</b><br/>You are enrolled! Joel will message you on WhatsApp. <a href={WHATSAPP} target="_blank" style={{fontWeight:800}}>Chat Joel now →</a></div>
          )}
          <p style={{fontSize:12,color:"#888",marginTop:8}}>DEMO ONLY — No real money is taken. For real enrollment, chat Joel on WhatsApp.</p>
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" style={{padding:"10px 6% 40px"}}>
        <h2 style={{fontSize:32}}>🛒 Shop: Websites & Webapps — Real Prices</h2>
        <p>Cameroon prices in FCFA • Abroad prices in USD. Click any product to pay with MoMo Demo or chat Joel.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:16,marginTop:16}}>
          {products.map(p=>(
            <div key={p.id} style={{background:"white",padding:20,borderRadius:18,border:"1px solid #eee"}}>
              <span style={{background:"#0b2e16",color:"white",fontSize:11,padding:"4px 10px",borderRadius:100,fontWeight:700}}>{p.type}</span>
              <span style={{background:"#f9c74f",color:"#0b2e16",fontSize:11,padding:"4px 10px",borderRadius:100,fontWeight:800,marginLeft:8}}>{p.tag}</span>
              <h3 style={{margin:"12px 0 6px"}}>{p.title}</h3>
              <p style={{color:"#666",fontSize:14}}>{p.desc}</p>
              <div style={{fontSize:22,fontWeight:800,margin:"10px 0"}}>{p.priceFCFA}</div>
              <div style={{fontSize:14,color:"#0f6b2e",fontWeight:700}}>International: {p.priceUSD}</div>
              <button onClick={()=>{setSelected(p.id); setPaid(false);}} style={{width:"100%",marginTop:12,background:"#0b2e16",color:"white",padding:12,border:"none",borderRadius:10,fontWeight:800}}>Order This →</button>
              {selected===p.id && (
                <div style={{marginTop:14,background:"#f7f8f3",padding:14,borderRadius:12}}>
                  <b>Demo MoMo Payment — {p.title}</b>
                  <p style={{fontSize:13}}>Amount: <b>{p.priceFCFA} ({p.priceUSD})</b></p>
                  <input placeholder="Your name" value={momoName} onChange={e=>setMomoName(e.target.value)} style={{width:"100%",padding:10,borderRadius:8,border:"1px solid #ccc",marginTop:8}} />
                  <input placeholder="MoMo number e.g 651438848" value={momoNumber} onChange={e=>setMomoNumber(e.target.value)} style={{width:"100%",padding:10,borderRadius:8,border:"1px solid #ccc",marginTop:8}} />
                  {!paid ? (
                    <button onClick={()=>payDemo(p)} style={{width:"100%",marginTop:10,background:"#FFCC00",color:"#000",padding:12,border:"none",borderRadius:10,fontWeight:800}}>Pay with MTN MoMo (Demo)</button>
                  ) : (
                    <div style={{background:"#e8f5ec",padding:12,borderRadius:10,marginTop:10}}><b>✅ Demo Payment Successful!</b><br/>Thanks {momoName || "Boss"}! Joel will confirm on WhatsApp.<br/><a href={WHATSAPP} target="_blank" style={{fontWeight:800}}>Chat Joel on WhatsApp →</a></div>
                  )}
                  <p style={{fontSize:11,color:"#888",marginTop:6}}>DEMO ONLY — No real money taken. Real payment confirmed via WhatsApp.</p>
                </div>
              )}
              <a href={WHATSAPP} target="_blank" style={{display:"block",textAlign:"center",marginTop:10,color:"#25D366",fontWeight:800,textDecoration:"none"}}>💬 Or Chat Joel Directly</a>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:"#071f0e",color:"#ccc",padding:"30px 6%",textAlign:"center"}}>
        <b style={{color:"white",fontSize:18}}>JOEL'S WEBSITES & WEBAPPS</b><br/>Yaounde, Cameroon • WhatsApp: +237 651 438 848<br/>Learn • Build • Sell • Premium Websites & Webapps<br/><br/>© 2026 Joel's Websites and Webapps. All rights reserved.
      </footer>

      {/* FLOATING WHATSAPP BUTTON — REAL CHAT */}
      <a href={WHATSAPP} target="_blank" style={{position:"fixed",bottom:20,right:20,background:"#25D366",color:"white",padding:"14px 18px",borderRadius:100,fontWeight:800,textDecoration:"none",boxShadow:"0 10px 30px rgba(0,0,0,.3)",zIndex:50}}>💬 Chat Joel Now</a>
    </div>
  );
   }
