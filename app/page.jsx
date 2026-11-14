
"use client";
import { useState } from "react";

const WHATSAPP = "https://wa.me/237651438848?text=Hello%20Joel!%20I%20want%20to%20order%20a%20website%20/%20webapp%20from%20Joel's%20Websites%20and%20Webapps.";
const GOLD = "#C9A227";
const NAVY = "#0A0F1E";
const CREAM = "#FAF7F0";
const HEADING = "'Playfair Display', serif";

const products = [
  { id:1, type:"WEBSITE • CAMEROON", title:"Business Website — Cameroon", desc:"5 pages, premium design, mobile perfect, SEO, WhatsApp button.", price:"250,000 FCFA", usd:"$450 • International", tag:"MOST POPULAR" },
  { id:2, type:"WEBSITE • CAMEROON", title:"E-commerce Shop — Cameroon", desc:"Online shop, MoMo / Orange Money, product pages, WhatsApp orders.", price:"750,000 FCFA", usd:"$1,200 • International", tag:"FOR SHOPS" },
  { id:3, type:"WEBAPP • CAMEROON", title:"Custom WebApp MVP — Cameroon", desc:"Login, Dashboard, Forms, Admin panel. For schools & businesses.", price:"2,500,000 FCFA", usd:"$4,200 • International", tag:"PREMIUM" },
  { id:4, type:"WEBSITE • ABROAD", title:"Business Website — USA / Europe", desc:"Premium design, CMS, SEO, 10 pages. International standard.", price:"$15,000", usd:"~ 8,750,000 FCFA", tag:"INTERNATIONAL" },
  { id:5, type:"WEBAPP • ABROAD", title:"SaaS WebApp MVP — USA / Europe", desc:"Full webapp, Auth, Payments, Dashboard. Built with Next.js.", price:"$50,000", usd:"~ 29,000,000 FCFA", tag:"INTERNATIONAL" },
  { id:6, type:"WEBSITE • CAMEROON", title:"Landing Page — Cameroon", desc:"1-page fast site for your business, church or event. 24h delivery.", price:"75,000 FCFA", usd:"$145 • International", tag:"FASTEST" },
];

export default function Home(){
  const [selected, setSelected] = useState(null);
  const [momoNumber, setMomoNumber] = useState("");
  const [momoName, setMomoName] = useState("");
  const [paid, setPaid] = useState(false);
  const [coursePaid, setCoursePaid] = useState(false);
  const [courseNumber, setCourseNumber] = useState("");
  const payDemo = (p) => { if(!momoNumber || momoNumber.length < 9){ alert("Enter your MTN MoMo number e.g 651438848"); return; } setPaid(p.title); };

  return (
    <div>
      {/* HEADER */}
      <header style={{background:NAVY,color:"white",padding:"16px 6%",display:"flex",justifyContent:"space-between",alignItems:"center",position:"sticky",top:0,zIndex:10,borderBottom:`2px solid ${GOLD}`}}>
        <div>
          <div style={{fontFamily:HEADING,fontSize:22,lineHeight:1}}>Joel's <span style={{color:GOLD}}>Websites & Webapps</span></div>
          <div style={{fontSize:10,letterSpacing:3,opacity:0.7,marginTop:4}}>YAOUNDÉ • CAMEROON • WORLDWIDE</div>
        </div>
        <div style={{display:"flex",gap:18,alignItems:"center"}}>
          <a href="#learn" style={{color:"white",textDecoration:"none",fontWeight:600,fontSize:14}}>Learn</a>
          <a href="#shop" style={{color:"white",textDecoration:"none",fontWeight:600,fontSize:14}}>Shop</a>
          <a href={WHATSAPP} target="_blank" style={{background:"#1FA855",color:"white",padding:"10px 18px",borderRadius:100,textDecoration:"none",fontWeight:700,fontSize:14}}>WhatsApp Joel</a>
        </div>
      </header>

      {/* HERO */}
      <section style={{background:NAVY,color:"white",padding:"64px 6% 60px"}}>
        <span style={{border:`1px solid ${GOLD}`,color:GOLD,padding:"7px 14px",borderRadius:100,fontWeight:700,fontSize:12,letterSpacing:1}}>✦ LEARN • BUILD • SELL • YAOUNDÉ</span>
        <h1 style={{fontFamily:HEADING,fontSize:52,lineHeight:1.05,margin:"22px 0 14px",fontWeight:800}}>Learn to Build Websites<br/><span style={{color:GOLD, fontStyle:"italic"}}>& Webapps.</span><br/>Then Sell Them.</h1>
        <p style={{maxWidth:620,fontSize:17,lineHeight:1.6,color:"#D8DDE8"}}>Joel teaches you step-by-step — even with zero experience. Build your first website in Week 1, your first webapp in Week 3, and start earning in Week 4.</p>
        <div style={{display:"flex",gap:12,marginTop:24,flexWrap:"wrap"}}>
          <a href="#learn" style={{background:GOLD,color:NAVY,padding:"15px 24px",borderRadius:100,fontWeight:800,textDecoration:"none"}}>Join Training — 50k / Month →</a>
          <a href="#shop" style={{background:"white",color:NAVY,padding:"15px 24px",borderRadius:100,fontWeight:800,textDecoration:"none"}}>Shop Websites & Webapps</a>
        </div>
        <div style={{display:"flex",gap:20,marginTop:28,flexWrap:"wrap",fontSize:13,color:"#B8C0D1"}}><span>✓ No experience needed</span><span>✓ Learn on your phone</span><span>✓ Real projects</span><span>✓ Certificate</span></div>
      </section>

      {/* LEARN */}
      <section id="learn" style={{padding:"48px 6%",background:CREAM}}>
        <p style={{color:GOLD,fontWeight:800,letterSpacing:2,fontSize:12}}>THE TRAINING</p>
        <h2 style={{fontFamily:HEADING,fontSize:36,margin:"8px 0"}}>Learn With Joel — 50,000 FCFA / Month</h2>
        <p style={{color:"#555",lineHeight:1.6}}>4 Weeks. Practical, not theory. You build real projects you can show clients.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:14,marginTop:18}}>
          {["Week 1 — Websites with HTML + Next.js","Week 2 — Premium Design & Mobile","Week 3 — Webapps, Forms, MoMo, WhatsApp","Week 4 — Find Clients & Sell in Cameroon + Abroad"].map((t,i)=>(
            <div key={i} style={{background:"white",padding:22,borderRadius:16,border:"1px solid #EDE6D6",boxShadow:"0 4px 20px rgba(0,0,0,0.04)"}}><div style={{color:GOLD,fontWeight:800,fontSize:12}}>MODULE {i+1}</div><p style={{fontWeight:600,lineHeight:1.5}}>{t}</p></div>
          ))}
        </div>
        <div style={{background:NAVY,color:"white",padding:24,borderRadius:18,marginTop:18}}>
          <h3 style={{fontFamily:HEADING,fontSize:22,margin:0}}>Enroll Now — Demo MoMo Payment</h3>
          <p style={{color:"#C9CDD6"}}>Course: <b style={{color:"white"}}>50,000 FCFA / Month</b> • Yaoundé • Online + In-person</p>
          {!coursePaid ? (
            <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:12}}>
              <input placeholder="Your MoMo number e.g 651438848" value={courseNumber} onChange={e=>setCourseNumber(e.target.value)} style={{padding:13,borderRadius:12,border:"1px solid #ccc",flex:1,minWidth:220,fontFamily:"inherit"}} />
              <button onClick={()=>{ if(courseNumber.length<9){alert("Enter MoMo number");return;} setCoursePaid(true); }} style={{background:GOLD,color:NAVY,padding:"13px 20px",border:"none",borderRadius:12,fontWeight:800,cursor:"pointer"}}>Pay 50,000 FCFA with MoMo (Demo) →</button>
            </div>
          ) : (
            <div style={{background:"#1A2B1A",padding:14,borderRadius:12,marginTop:12}}>✅ <b>Demo Payment Successful!</b> You are enrolled! <a href={WHATSAPP} target="_blank" style={{color:GOLD,fontWeight:800}}>Chat Joel now →</a></div>
          )}
          <p style={{fontSize:12,color:"#8A91A3",marginTop:8}}>DEMO ONLY — No real money taken. For real enrollment, chat Joel on WhatsApp.</p>
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" style={{padding:"20px 6% 48px",background:CREAM}}>
        <p style={{color:GOLD,fontWeight:800,letterSpacing:2,fontSize:12}}>THE SHOP</p>
        <h2 style={{fontFamily:HEADING,fontSize:36,margin:"8px 0"}}>Websites & Webapps — Real Prices</h2>
        <p style={{color:"#555"}}>Cameroon prices in FCFA • Abroad prices in USD. Click any product to pay with MoMo Demo.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:16,marginTop:18}}>
          {products.map(p=>(
            <div key={p.id} style={{background:"white",padding:24,borderRadius:20,border:"1px solid #EDE6D6",boxShadow:"0 6px 24px rgba(0,0,0,0.04)"}}>
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}><span style={{background:NAVY,color:"white",fontSize:11,padding:"5px 10px",borderRadius:100,fontWeight:700}}>{p.type}</span><span style={{background:GOLD,color:NAVY,fontSize:11,padding:"5px 10px",borderRadius:100,fontWeight:800}}>{p.tag}</span></div>
              <h3 style={{fontFamily:HEADING,fontSize:22,margin:"14px 0 6px",lineHeight:1.2}}>{p.title}</h3>
              <p style={{color:"#666",fontSize:14,lineHeight:1.6}}>{p.desc}</p>
              <div style={{fontSize:26,fontWeight:800,margin:"12px 0 2px"}}>{p.price}</div>
              <div style={{fontSize:13,color:"#0F6B2E",fontWeight:700}}>International: {p.usd}</div>
              <button onClick={()=>{setSelected(p.id); setPaid(false);}} style={{width:"100%",marginTop:14,background:NAVY,color:"white",padding:13,border:"none",borderRadius:12,fontWeight:800,cursor:"pointer"}}>Order This →</button>
              {selected===p.id && (
                <div style={{marginTop:14,background:CREAM,padding:16,borderRadius:14}}>
                  <b>Demo MoMo Payment</b><p style={{fontSize:13,margin:"6px 0"}}>Amount: <b>{p.price} ({p.usd})</b></p>
                  <input placeholder="Your name" value={momoName} onChange={e=>setMomoName(e.target.value)} style={{width:"100%",padding:11,borderRadius:10,border:"1px solid #ddd",marginTop:8,boxSizing:"border-box"}} />
                  <input placeholder="MoMo number e.g 651438848" value={momoNumber} onChange={e=>setMomoNumber(e.target.value)} style={{width:"100%",padding:11,borderRadius:10,border:"1px solid #ddd",marginTop:8,boxSizing:"border-box"}} />
                  {!paid ? <button onClick={()=>payDemo(p)} style={{width:"100%",marginTop:10,background:"#FFCC00",color:"#000",padding:12,border:"none",borderRadius:10,fontWeight:800,cursor:"pointer"}}>Pay with MTN MoMo (Demo)</button> : <div style={{background:"#E8F5EC",padding:12,borderRadius:10,marginTop:10}}><b>✅ Demo Payment Successful!</b><br/>Thanks {momoName || "Boss"}! Joel will confirm on WhatsApp.<br/><a href={WHATSAPP} target="_blank" style={{fontWeight:800,color:NAVY}}>Chat Joel →</a></div>}
                  <p style={{fontSize:11,color:"#888",marginTop:6}}>DEMO ONLY — No real money taken.</p>
                </div>
              )}
              <a href={WHATSAPP} target="_blank" style={{display:"block",textAlign:"center",marginTop:12,color:"#1FA855",fontWeight:800,textDecoration:"none",fontSize:14}}>💬 Or Chat Joel Directly</a>
            </div>
          ))}
        </div>
      </section>

      <footer style={{background:NAVY,color:"#AAB2C5",padding:"32px 6%",textAlign:"center"}}>
        <div style={{fontFamily:HEADING,color:"white",fontSize:20}}>Joel's <span style={{color:GOLD}}>Websites & Webapps</span></div>
        <div style={{marginTop:8}}>Yaoundé, Cameroon • WhatsApp: +237 651 438 848</div>
        <div style={{fontSize:12,marginTop:14}}>© 2026 Joel's Websites and Webapps. All rights reserved.</div>
      </footer>
      <a href={WHATSAPP} target="_blank" style={{position:"fixed",bottom:20,right:20,background:"#1FA855",color:"white",padding:"14px 20px",borderRadius:100,fontWeight:800,textDecoration:"none",boxShadow:"0 12px 30px rgba(0,0,0,.3)",zIndex:50}}>💬 Chat Joel</a>
    </div>
  );
}
