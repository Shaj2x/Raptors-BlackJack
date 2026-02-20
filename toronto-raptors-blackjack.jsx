import { useState } from "react";

const LOGO_SRC = "data:image/png;base64,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";

// ── Official Toronto Raptors palette ─────────────────────────────────────────
const C = {
  red:     "#CE1141",
  darkRed: "#8B0029",
  black:   "#000000",
  silver:  "#A1A1A4",
  gold:    "#B4975A",
  white:   "#FFFFFF",
  felt:    "#0d2016",
  feltMid: "#102318",
};

// ── 2024-25 Raptors Roster (used as dealer "personas") ───────────────────────
const RAPTORS = [
  { name: "Scottie Barnes",     number: 4,  pos: "SF" },
  { name: "Immanuel Quickley",  number: 5,  pos: "PG" },
  { name: "RJ Barrett",         number: 9,  pos: "SG" },
  { name: "Jakob Poeltl",       number: 19, pos: "C"  },
  { name: "Gradey Dick",        number: 1,  pos: "SG" },
  { name: "Ochai Agbaji",       number: 13, pos: "SF" },
  { name: "Kelly Olynyk",       number: 13, pos: "PF" },
  { name: "Davion Mitchell",    number: 45, pos: "PG" },
  { name: "Jamal Shead",        number: 10, pos: "PG" },
  { name: "Bruce Brown",        number: 11, pos: "SF" },
];

// ── Card engine ───────────────────────────────────────────────────────────────
const SUITS = ["♠","♥","♦","♣"];
const VALS  = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const mkDeck = () => {
  const d = [];
  for (const s of SUITS) for (const v of VALS) d.push({s,v});
  return shuffle(d);
};
const shuffle = a => {
  const b=[...a];
  for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}
  return b;
};
const cVal = c => ["J","Q","K"].includes(c.v)?10:c.v==="A"?11:+c.v;
const total = hand => {
  let t=0,a=0;
  for(const c of hand){t+=cVal(c);if(c.v==="A")a++;}
  while(t>21&&a>0){t-=10;a--;}
  return t;
};
const isRed = c => c.s==="♥"||c.s==="♦";

// ── Win probability (Monte Carlo, 500 trials) ────────────────────────────────
// HOUSE EDGE BUILT IN: cashout formula pays less than fair value
const estimateWinProb = (pHand, dealerUp, remainingDeck) => {
  const pt = total(pHand);
  if(pt>21) return 0;
  let wins=0;
  for(let t=0;t<500;t++){
    const dk=shuffle([...remainingDeck]);
    let di=0, dh=[dealerUp, dk[di++]];
    while(total(dh)<17) dh.push(dk[di++]);
    const dt=total(dh);
    if(dt>21||pt>dt) wins++;
    else if(pt===dt) wins+=0.5;
  }
  return wins/500;
};

// Cashout value: penalized — player gets only 60% of fair EV
// Fair would be: bet * winProb * 2
// Ours:          bet * winProb * 2 * 0.60  (house takes 40% cut on cashout)
const calcCashout = (bet, winProb) => Math.round(bet * winProb * 2 * 0.60);

// ── Playing Card component ────────────────────────────────────────────────────
function Card({ card, hidden=false }) {
  if(hidden) return (
    <div style={{
      width:68,height:96,borderRadius:8,flexShrink:0,
      background:`linear-gradient(145deg,${C.red},${C.darkRed})`,
      border:`2px solid ${C.gold}`,
      display:"flex",alignItems:"center",justifyContent:"center",
      boxShadow:"0 6px 18px rgba(0,0,0,0.7)",
      overflow:"hidden",position:"relative",
    }}>
      <div style={{position:"absolute",inset:0,opacity:0.12,
        backgroundImage:"repeating-linear-gradient(45deg,#fff 0px,#fff 1px,transparent 1px,transparent 8px)"}}/>
      <img src={LOGO_SRC} alt="Raptors" style={{width:44,height:44,opacity:0.9,borderRadius:"50%"}}/>
    </div>
  );
  const red = isRed(card);
  const col = red ? C.red : "#111";
  return (
    <div style={{
      width:68,height:96,borderRadius:8,flexShrink:0,
      background:"linear-gradient(160deg,#fff 65%,#f5f0e6 100%)",
      border:`2px solid ${red?"#e8b0bc":"#444"}`,
      display:"flex",flexDirection:"column",padding:"4px 5px",
      boxShadow:"0 6px 18px rgba(0,0,0,0.6)",
      position:"relative",fontFamily:"Georgia,serif",
    }}>
      <span style={{fontSize:16,fontWeight:"bold",color:col,lineHeight:1}}>{card.v}</span>
      <span style={{fontSize:13,color:col,lineHeight:1}}>{card.s}</span>
      <span style={{
        position:"absolute",top:"50%",left:"50%",
        transform:"translate(-50%,-50%)",
        fontSize:32,color:col,opacity:0.07,userSelect:"none",
      }}>{card.s}</span>
      <span style={{
        position:"absolute",bottom:4,right:5,
        transform:"rotate(180deg)",
        fontSize:16,fontWeight:"bold",color:col,lineHeight:1,
      }}>{card.v}<br/><span style={{fontSize:13}}>{card.s}</span></span>
    </div>
  );
}

// ── Hand display ──────────────────────────────────────────────────────────────
function Hand({ cards, hideSecond=false, label, score }) {
  const bust = score > 21;
  return (
    <div style={{textAlign:"center"}}>
      <div style={{
        fontSize:10,letterSpacing:5,color:C.silver,marginBottom:7,
        fontFamily:"Impact,sans-serif",textTransform:"uppercase",
      }}>{label}</div>
      <div style={{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap",minHeight:96}}>
        {cards.map((c,i)=><Card key={i} card={c} hidden={hideSecond&&i===1}/>)}
      </div>
      {score!==undefined&&(
        <div style={{
          marginTop:8,fontFamily:"Impact,sans-serif",
          fontSize:28,letterSpacing:3,
          color:bust?"#ff3355":score===21?C.gold:C.white,
          textShadow:score===21?`0 0 24px ${C.gold}`:"none",
        }}>
          {bust?"BUST":score===21?"21 🔥":score}
        </div>
      )}
    </div>
  );
}

// ── Claw mark divider ─────────────────────────────────────────────────────────
function ClawDivider() {
  return (
    <div style={{display:"flex",alignItems:"center",gap:10,margin:"14px 0"}}>
      <div style={{flex:1,height:1,background:`linear-gradient(to right,transparent,${C.gold}55)`}}/>
      <svg width="56" height="14" viewBox="0 0 56 14">
        {[7,18,28,38,49].map((x,i)=>(
          <g key={i}>
            <path d={`M${x-2} 0 L${x-4} 14`} stroke={C.red} strokeWidth="2" strokeLinecap="round"/>
            <path d={`M${x+1} 0 L${x-0.5} 14`} stroke={C.red} strokeWidth="2" strokeLinecap="round"/>
            <path d={`M${x+4} 0 L${x+3} 14`} stroke={C.red} strokeWidth="2" strokeLinecap="round"/>
          </g>
        ))}
      </svg>
      <div style={{flex:1,height:1,background:`linear-gradient(to left,transparent,${C.gold}55)`}}/>
    </div>
  );
}

// ── Chip button ───────────────────────────────────────────────────────────────
function Chip({ value, onClick, disabled }) {
  const chipCol = value>=100?C.gold:value>=50?C.silver:C.red;
  return (
    <button onClick={onClick} disabled={disabled} style={{
      width:58,height:58,borderRadius:"50%",border:"none",cursor:disabled?"not-allowed":"pointer",
      background:disabled?"#1e1e1e":`radial-gradient(circle at 35% 30%,${chipCol}ee,${chipCol}88)`,
      boxShadow:disabled?"none":`0 4px 12px ${chipCol}55,inset 0 2px 0 rgba(255,255,255,0.25),inset 0 -2px 0 rgba(0,0,0,0.4)`,
      color:disabled?"#555":C.white,
      fontFamily:"Impact,sans-serif",fontSize:14,letterSpacing:1,
      textShadow:disabled?"none":"0 1px 3px rgba(0,0,0,0.8)",
      transition:"transform 0.1s",outline:"none",
    }}
    onMouseEnter={e=>{if(!disabled)e.currentTarget.style.transform="translateY(-2px) scale(1.06)";}}
    onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";}}
    onMouseDown={e=>{if(!disabled)e.currentTarget.style.transform="scale(0.92)";}}
    onMouseUp={e=>{e.currentTarget.style.transform="scale(1)";}}
    >${value}</button>
  );
}

// ── Action button ─────────────────────────────────────────────────────────────
function Btn({ label, onClick, disabled, color=C.red, textColor=C.white }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{
      padding:"11px 28px",borderRadius:8,border:`2px solid ${disabled?"#333":color}`,
      background:disabled?"#111":`linear-gradient(145deg,${color},${color}cc)`,
      color:disabled?"#444":textColor,
      fontFamily:"Impact,sans-serif",fontSize:16,letterSpacing:4,
      cursor:disabled?"not-allowed":"pointer",
      boxShadow:disabled?"none":`0 4px 16px ${color}44`,
      transition:"filter 0.15s",outline:"none",
    }}
    onMouseEnter={e=>{if(!disabled)e.currentTarget.style.filter="brightness(1.2)";}}
    onMouseLeave={e=>{e.currentTarget.style.filter="brightness(1)";}}
    >{label}</button>
  );
}

// ── Cashout panel ─────────────────────────────────────────────────────────────
function CashoutPanel({ onCashout, bet, winProb }) {
  const pct       = Math.round(winProb*100);
  const fairPay   = Math.round(bet*winProb*2);
  const cashAmt   = calcCashout(bet, winProb);
  const barColor  = pct>60?"#4ade80":pct>40?C.gold:"#f87171";

  return (
    <div style={{
      border:`1px solid ${barColor}33`,borderRadius:10,padding:"10px 14px",
      background:`${barColor}08`,textAlign:"center",
    }}>
      <div style={{
        fontFamily:"Impact,sans-serif",fontSize:10,letterSpacing:3,color:C.silver,marginBottom:5,
      }}>
        WIN CHANCE: <span style={{color:barColor}}>{pct}%</span>
        <span style={{color:"rgba(255,255,255,0.3)",marginLeft:12}}>FAIR VALUE: ${fairPay}</span>
      </div>
      {/* bar */}
      <div style={{height:5,background:"rgba(255,255,255,0.08)",borderRadius:3,overflow:"hidden",marginBottom:8}}>
        <div style={{width:`${pct}%`,height:"100%",background:`linear-gradient(90deg,${C.red},${barColor})`,borderRadius:3,transition:"width 0.4s"}}/>
      </div>
      <button onClick={onCashout} style={{
        padding:"7px 20px",borderRadius:7,border:`2px solid ${barColor}`,
        background:`${barColor}18`,color:barColor,
        fontFamily:"Impact,sans-serif",fontSize:14,letterSpacing:3,
        cursor:"pointer",transition:"background 0.2s",outline:"none",
      }}
      onMouseEnter={e=>{e.currentTarget.style.background=`${barColor}30`;}}
      onMouseLeave={e=>{e.currentTarget.style.background=`${barColor}18`;}}
      >
        💰 CASH OUT ${cashAmt}
      </button>
      <div style={{marginTop:5,fontSize:9,letterSpacing:2,color:"rgba(255,255,255,0.25)",fontFamily:"Impact,sans-serif"}}>
        HOUSE TAKES A CUT — RISK IT FOR ${bet*2}
      </div>
    </div>
  );
}

// ── Result banner ─────────────────────────────────────────────────────────────
function Banner({ text, type }) {
  const map = {
    win:  {border:C.gold,   color:C.gold,   bg:`${C.gold}18`},
    bj:   {border:C.gold,   color:C.gold,   bg:`${C.gold}28`},
    lose: {border:"#f87171",color:"#f87171",bg:"rgba(248,113,113,0.1)"},
    push: {border:C.silver, color:C.silver, bg:"rgba(161,161,164,0.1)"},
    cash: {border:"#4ade80",color:"#4ade80",bg:"rgba(74,222,128,0.1)"},
  };
  const s = map[type]||map.push;
  return (
    <div style={{
      padding:"12px",borderRadius:10,marginTop:12,textAlign:"center",
      border:`2px solid ${s.border}`,background:s.bg,
      boxShadow:`0 0 20px ${s.border}33`,
      animation:"bannerPop 0.4s cubic-bezier(0.175,0.885,0.32,1.275)",
    }}>
      <div style={{fontFamily:"Impact,sans-serif",fontSize:20,letterSpacing:4,color:s.color,textShadow:`0 0 14px ${s.border}`}}>
        {text}
      </div>
    </div>
  );
}

// ── Main game ─────────────────────────────────────────────────────────────────
const CHIPS_LIST = [5,10,25,50,100];
const INIT_BAL   = 1000;

export default function RaptorsBlackjack() {
  const [bal,      setBal     ] = useState(INIT_BAL);
  const [bet,      setBet     ] = useState(0);
  const [deck,     setDeck    ] = useState([]);
  const [pHand,    setPHand   ] = useState([]);
  const [dHand,    setDHand   ] = useState([]);
  const [phase,    setPhase   ] = useState("bet");
  const [msg,      setMsg     ] = useState(null);
  const [winP,     setWinP    ] = useState(0.5);
  const [stats,    setStats   ] = useState({w:0,l:0,p:0});
  const [streak,   setStreak  ] = useState(0);
  const [dealer,   setDealer  ] = useState(()=>RAPTORS[Math.floor(Math.random()*RAPTORS.length)]);

  // ── Bet ─────────────────────────────────────────────────────────────────────
  const addChip = v => { if(bal>=v){setBet(b=>b+v);setBal(b=>b-v);} };
  const clearBet = () => { setBal(b=>b+bet);setBet(0); };

  // ── Deal ────────────────────────────────────────────────────────────────────
  const deal = () => {
    if(!bet) return;
    const dk = mkDeck();
    const ph = [dk[0],dk[2]];
    const dh = [dk[1],dk[3]];
    const rest = dk.slice(4);
    setPHand(ph); setDHand(dh); setDeck(rest);
    setMsg(null); setPhase("play");
    setDealer(RAPTORS[Math.floor(Math.random()*RAPTORS.length)]);
    setWinP(estimateWinProb(ph,dh[0],rest));
    if(total(ph)===21) setTimeout(()=>resolve(rest,ph,dh,true),300);
  };

  // ── Hit ─────────────────────────────────────────────────────────────────────
  const hit = () => {
    const [card,...rest] = deck;
    const nh = [...pHand,card];
    setPHand(nh); setDeck(rest);
    if(total(nh)>=21) setTimeout(()=>resolve(rest,nh,dHand),400);
    else setWinP(estimateWinProb(nh,dHand[0],rest));
  };

  // ── Stand ───────────────────────────────────────────────────────────────────
  const stand = () => resolve(deck,pHand,dHand);

  // ── Cash out ────────────────────────────────────────────────────────────────
  const cashout = () => {
    const amt = calcCashout(bet,winP);
    setBal(b=>b+amt); setBet(0);
    setMsg({text:`CASHED OUT $${amt} (HOUSE TOOK ITS CUT)`,type:"cash"});
    setPhase("result");
    setStats(s=>({...s,p:s.p+1})); setStreak(0);
  };

  // ── Resolve ─────────────────────────────────────────────────────────────────
  const resolve = (dk,ph,dh,blackjack=false) => {
    setPhase("dealer");
    let d=[...dh],rest=[...dk];
    while(total(d)<17){d.push(rest[0]);rest=rest.slice(1);}
    setDHand(d); setDeck(rest);

    setTimeout(()=>{
      const pt=total(ph), dt=total(d);
      let text,type,payout=0;
      if(pt>21){
        text=`BUST — ${dealer.name.toUpperCase()} BLOCKS YOU`;type="lose";
        setStats(s=>({...s,l:s.l+1})); setStreak(k=>k<0?k-1:-1);
      } else if(dt>21||pt>dt){
        if(blackjack&&pt===21&&ph.length===2){
          payout=Math.floor(bet*2.5);
          text="BLACKJACK! WE THE NORTH! 🏆";type="bj";
        } else {
          payout=bet*2;
          text="WE THE NORTH — YOU WIN! 🦖";type="win";
        }
        setBal(b=>b+payout);
        setStats(s=>({...s,w:s.w+1})); setStreak(k=>k>0?k+1:1);
      } else if(pt===dt){
        payout=bet; text="PUSH — OVERTIME! ⚪";type="push";
        setBal(b=>b+payout);
        setStats(s=>({...s,p:s.p+1})); setStreak(0);
      } else {
        text=`${dealer.name.toUpperCase()} WINS — DEALER DOMINATES`;type="lose";
        setStats(s=>({...s,l:s.l+1})); setStreak(k=>k<0?k-1:-1);
      }
      setBet(0); setMsg({text,type}); setPhase("result");
    },900);
  };

  // ── New round ───────────────────────────────────────────────────────────────
  const newRound = () => {
    setPHand([]); setDHand([]); setMsg(null); setPhase("bet");
    if(bal===0) setBal(INIT_BAL);
  };

  const playerScore = pHand.length?total(pHand):undefined;
  const dealerScore = (phase==="dealer"||phase==="result")&&dHand.length ? total(dHand) : undefined;
  const showDealerScore = phase==="play" && dHand.length ? cVal(dHand[0]) : dealerScore;

  return (
    <div style={{
      minHeight:"100vh",
      background:`
        radial-gradient(ellipse 140% 70% at 50% -10%,rgba(206,17,65,0.18) 0%,transparent 55%),
        linear-gradient(180deg,#080808 0%,#0e0e0e 100%)
      `,
      display:"flex",flexDirection:"column",alignItems:"center",
      padding:"16px 10px 36px",
      fontFamily:"Impact,'Arial Black',sans-serif",
    }}>
      <style>{`
        @keyframes bannerPop{from{opacity:0;transform:scale(0.82) translateY(-6px)}to{opacity:1;transform:scale(1)}}
        @keyframes dealerPulse{0%,100%{opacity:1}50%{opacity:0.35}}
        @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
        *{box-sizing:border-box;}
      `}</style>

      {/* ── HEADER ── */}
      <div style={{display:"flex",alignItems:"center",gap:18,marginBottom:8,animation:"floatY 5s ease-in-out infinite"}}>
        <img src={LOGO_SRC} alt="Toronto Raptors" style={{width:80,height:80,borderRadius:"50%",boxShadow:`0 0 28px ${C.red}55`}}/>
        <div style={{textAlign:"center"}}>
          <div style={{fontSize:44,letterSpacing:8,lineHeight:0.82,color:C.red,textShadow:`0 0 24px ${C.red}88,0 3px 0 #500`}}>
            TORONTO
          </div>
          <div style={{fontSize:24,letterSpacing:10,color:C.gold,textShadow:`0 0 18px ${C.gold}66`}}>
            RAPTORS
          </div>
          <div style={{fontSize:12,letterSpacing:6,color:C.silver,marginTop:2}}>BLACKJACK</div>
        </div>
        <img src={LOGO_SRC} alt="Toronto Raptors" style={{width:80,height:80,borderRadius:"50%",boxShadow:`0 0 28px ${C.red}55`}}/>
      </div>

      {/* ── STATS ── */}
      <div style={{
        display:"flex",gap:18,marginBottom:8,
        fontSize:12,letterSpacing:3,color:C.silver,
      }}>
        <span>W<span style={{color:"#4ade80",marginLeft:4}}>{stats.w}</span></span>
        <span style={{color:"#333"}}>|</span>
        <span>L<span style={{color:"#f87171",marginLeft:4}}>{stats.l}</span></span>
        <span style={{color:"#333"}}>|</span>
        <span>P<span style={{color:C.silver,marginLeft:4}}>{stats.p}</span></span>
        {streak!==0&&<>
          <span style={{color:"#333"}}>|</span>
          <span style={{color:streak>0?"#4ade80":"#f87171"}}>
            {streak>0?`🔥 ${streak}W STREAK`:`❄️ ${Math.abs(streak)}L STREAK`}
          </span>
        </>}
      </div>

      {/* ── DEALER ID BADGE ── */}
      <div style={{
        marginBottom:10,padding:"5px 16px",
        border:`1px solid ${C.gold}44`,borderRadius:20,
        background:"rgba(180,151,90,0.07)",
        fontSize:11,letterSpacing:3,color:C.gold,
      }}>
        DEALER: #{dealer.number} {dealer.name.toUpperCase()} · {dealer.pos}
      </div>

      <ClawDivider/>

      {/* ── FELT TABLE ── */}
      <div style={{
        width:"100%",maxWidth:500,
        background:`linear-gradient(180deg,${C.felt} 0%,${C.feltMid} 100%)`,
        border:`1.5px solid ${C.gold}44`,
        borderRadius:20,padding:"20px 14px 18px",
        boxShadow:`0 0 50px rgba(0,0,0,0.85),0 0 0 1px ${C.gold}18,inset 0 0 70px rgba(0,0,0,0.4)`,
        position:"relative",overflow:"hidden",
      }}>
        {/* Court arc decoration */}
        <svg style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",opacity:0.04,pointerEvents:"none"}}>
          <ellipse cx="50%" cy="0" rx="45%" ry="120" stroke="#fff" strokeWidth="2" fill="none"/>
          <line x1="0" y1="52%" x2="100%" y2="52%" stroke="#fff" strokeWidth="1.5"/>
          <circle cx="50%" cy="52%" r="50" stroke="#fff" strokeWidth="1.5" fill="none"/>
        </svg>

        {/* Dealer hand */}
        <Hand
          cards={dHand}
          hideSecond={phase==="play"}
          label={`🦖 ${dealer.name.toUpperCase()} (DEALER)`}
          score={dHand.length?showDealerScore:undefined}
        />
        {dHand.length===0&&(
          <div style={{height:108,display:"flex",alignItems:"center",justifyContent:"center",
            color:`${C.gold}22`,fontSize:11,letterSpacing:5}}>DEALER</div>
        )}

        <ClawDivider/>

        {/* Player hand */}
        <Hand
          cards={pHand}
          label="🏀 YOU (PLAYER)"
          score={playerScore}
        />
        {pHand.length===0&&(
          <div style={{height:108,display:"flex",alignItems:"center",justifyContent:"center",
            color:`${C.gold}22`,fontSize:11,letterSpacing:5}}>PLAYER</div>
        )}

        {/* Result banner */}
        {msg&&<Banner text={msg.text} type={msg.type}/>}
      </div>

      {/* ── BALANCE + BET ── */}
      <div style={{display:"flex",gap:36,marginTop:16,marginBottom:12}}>
        <div style={{textAlign:"center"}}>
          <div style={{fontSize:9,letterSpacing:4,color:C.silver,marginBottom:2}}>BALANCE</div>
          <div style={{fontSize:24,letterSpacing:2,color:C.gold,textShadow:`0 0 10px ${C.gold}55`}}>
            ${bal.toLocaleString()}
          </div>
        </div>
        <div style={{width:1,background:`${C.gold}33`}}/>
        <div style={{textAlign:"center"}}>
          <div style={{fontSize:9,letterSpacing:4,color:C.silver,marginBottom:2}}>BET</div>
          <div style={{fontSize:24,letterSpacing:2,color:C.red,textShadow:`0 0 10px ${C.red}55`}}>
            ${bet.toLocaleString()}
          </div>
        </div>
      </div>

      {/* ── CONTROLS ── */}
      <div style={{width:"100%",maxWidth:500}}>

        {/* BET PHASE */}
        {phase==="bet"&&(
          <div style={{animation:"bannerPop 0.3s ease"}}>
            <div style={{display:"flex",justifyContent:"center",gap:10,flexWrap:"wrap",marginBottom:14}}>
              {CHIPS_LIST.map(v=><Chip key={v} value={v} onClick={()=>addChip(v)} disabled={bal<v}/>)}
            </div>
            <div style={{display:"flex",gap:10,justifyContent:"center"}}>
              <Btn label="CLEAR" onClick={clearBet} disabled={!bet} color={C.silver} textColor={C.black}/>
              <Btn label="DEAL" onClick={deal} disabled={!bet} color={C.red}/>
            </div>
            {bal===0&&bet===0&&(
              <div style={{textAlign:"center",marginTop:10,fontSize:10,letterSpacing:3,color:C.silver}}>
                OUT OF CHIPS — NEXT ROUND RELOADS $1,000
              </div>
            )}
          </div>
        )}

        {/* PLAY PHASE */}
        {phase==="play"&&(
          <div style={{animation:"bannerPop 0.25s ease"}}>
            <div style={{display:"flex",gap:10,justifyContent:"center",marginBottom:12}}>
              <Btn label="HIT" onClick={hit} color={C.red}/>
              <Btn label="STAND" onClick={stand} color={C.gold} textColor={C.black}/>
            </div>
            <CashoutPanel onCashout={cashout} bet={bet} winProb={winP}/>
          </div>
        )}

        {/* DEALER PLAYING */}
        {phase==="dealer"&&(
          <div style={{textAlign:"center",fontSize:16,letterSpacing:5,color:C.gold,animation:"dealerPulse 0.9s ease-in-out infinite"}}>
            {dealer.name.toUpperCase()} IS DEALING...
          </div>
        )}

        {/* RESULT */}
        {phase==="result"&&(
          <div style={{textAlign:"center",animation:"bannerPop 0.3s ease"}}>
            <Btn
              label={bal===0&&!bet?"RELOAD ($1,000)":"NEXT ROUND →"}
              onClick={newRound}
              color={C.red}
            />
          </div>
        )}
      </div>

      {/* ── FOOTER ── */}
      <div style={{
        marginTop:20,textAlign:"center",
        fontSize:9,letterSpacing:4,color:"rgba(161,161,164,0.35)",lineHeight:2,
      }}>
        SCOTIABANK ARENA · TORONTO, CANADA<br/>
        BLACKJACK 3:2 · DEALER STANDS SOFT 17 · CASH OUT = 60% FAIR VALUE
      </div>
    </div>
  );
}
