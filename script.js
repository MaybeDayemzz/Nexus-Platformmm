
(() => {
'use strict';

const KEY='nexus-v1';
const icons={home:'⌂',communities:'◈',messages:'✉',projects:'▦',analytics:'◒',developers:'⌘',creators:'✦',moderation:'◉',notifications:'♢',settings:'⚙',profile:'●',devices:'▣',search:'⌕',menu:'☰',plus:'＋'};
const pageLabels={overview:'Overview',dashboard:'Dashboard',communities:'Communities',messages:'Messages',projects:'Projects',analytics:'Analytics',developers:'Developers',creators:'Creators',moderation:'Moderation',notifications:'Notifications',settings:'Settings',profile:'Profile',devices:'Devices & Sessions'};

const seed={
 user:{name:'Dayem',email:'demo@nexus.local',role:'Admin'},
 communities:[
  {id:'c1',name:'NEXUS Community',description:'Product, development and community operations.',icon:'N',privacy:'Private',defaultRole:'Member',members:1248,createdAt:'2026-05-14'},
  {id:'c2',name:'Roblox Devs',description:'Builders sharing Roblox development workflows.',icon:'R',privacy:'Public',defaultRole:'Member',members:683,createdAt:'2026-06-02'},
  {id:'c3',name:'Creator Team',description:'Designers, editors and creators shipping together.',icon:'C',privacy:'Private',defaultRole:'Contributor',members:219,createdAt:'2026-07-19'}
 ],
 activeCommunity:'c1',
 members:[
  {id:'u1',name:'Avery Chen',role:'Owner',status:'Online',joined:'2026-05-14',activity:96},
  {id:'u2',name:'Mika Santos',role:'Admin',status:'Online',joined:'2026-05-19',activity:89},
  {id:'u3',name:'Jordan Lee',role:'Moderator',status:'Away',joined:'2026-06-03',activity:77},
  {id:'u4',name:'Samir Khan',role:'Developer',status:'Online',joined:'2026-06-11',activity:68},
  {id:'u5',name:'Noah Wilson',role:'Member',status:'Offline',joined:'2026-07-01',activity:43},
  {id:'u6',name:'Elena Park',role:'Creator',status:'Online',joined:'2026-07-12',activity:81},
  {id:'u7',name:'Theo Grant',role:'Member',status:'Away',joined:'2026-07-29',activity:55},
  {id:'u8',name:'Iris Cole',role:'Member',status:'Online',joined:'2026-08-04',activity:72}
 ],
 channels:['general','announcements','dev-chat','creator-lounge','roblox'],
 messages:[
  {id:'m1',channel:'general',user:'Avery Chen',text:'Welcome to the new NEXUS workspace. Drop your weekly goals here.',time:'09:14',reactions:['👍 8','🚀 4']},
  {id:'m2',channel:'general',user:'Mika Santos',text:'Dashboard metrics are wired to local demo state now.',time:'09:19',reactions:['✨ 5']},
  {id:'m3',channel:'general',user:'Dayem',text:'Nice. I am reviewing the mobile experience next.',time:'09:22',reactions:['🔥 3']},
  {id:'m4',channel:'dev-chat',user:'Samir Khan',text:'API documentation draft is ready for review.',time:'10:02',reactions:['👍 6']},
  {id:'m5',channel:'creator-lounge',user:'Elena Park',text:'New creator profile cards are looking clean.',time:'10:18',reactions:['❤️ 7']}
 ],
 projects:[
  {id:'p1',name:'NEXUS Launch',description:'Polish core product surfaces and onboarding.',progress:72,owner:'Mika Santos',status:'Active'},
  {id:'p2',name:'Creator Hub',description:'Discovery, profiles and creator workflows.',progress:46,owner:'Elena Park',status:'Active'},
  {id:'p3',name:'API v2',description:'Document stable community and project endpoints.',progress:84,owner:'Samir Khan',status:'Review'}
 ],
 tasks:[
  {id:'t1',title:'Polish mobile navigation',description:'Improve app-like mobile navigation and touch targets.',assignee:'Dayem',priority:'High',due:'2026-09-12',status:'In Progress',tags:['UI','Mobile']},
  {id:'t2',title:'Review API examples',description:'Verify request and response examples.',assignee:'Samir Khan',priority:'Medium',due:'2026-09-10',status:'Review',tags:['API']},
  {id:'t3',title:'Create creator filters',description:'Add skills, follower and availability filters.',assignee:'Elena Park',priority:'Medium',due:'2026-09-18',status:'To Do',tags:['Creators']},
  {id:'t4',title:'Write deployment notes',description:'Document static hosting and backend roadmap.',assignee:'Mika Santos',priority:'Low',due:'2026-09-22',status:'Backlog',tags:['Docs']},
  {id:'t5',title:'Accessibility pass',description:'Audit keyboard focus, labels and reduced motion.',assignee:'Avery Chen',priority:'High',due:'2026-09-15',status:'Completed',tags:['A11y']}
 ],
 notifications:[
  {id:'n1',type:'Mention',title:'Avery mentioned you',body:'“Dashboard metrics are wired…”',time:'8 min ago',read:false},
  {id:'n2',type:'Project',title:'Task assigned',body:'Polish mobile navigation was assigned to you.',time:'34 min ago',read:false},
  {id:'n3',type:'Security',title:'New session',body:'Chrome on Windows • Demo metadata',time:'2 hr ago',read:true},
  {id:'n4',type:'Moderation',title:'Report resolved',body:'A spam report was dismissed.',time:'Yesterday',read:true}
 ],
 moderation:[
  {id:'r1',target:'user_47',action:'Spam report',status:'Open',moderator:'Avery Chen',time:'Today 09:11'},
  {id:'r2',target:'user_19',action:'Harassment report',status:'Review',moderator:'Jordan Lee',time:'Today 08:40'},
  {id:'r3',target:'user_31',action:'Link filter',status:'Resolved',moderator:'Mika Santos',time:'Yesterday 17:05'}
 ],
 audit:[
  {time:'2026-09-07 09:11',moderator:'Avery Chen',action:'Opened report',target:'user_47',metadata:'report:r1'},
  {time:'2026-09-07 08:40',moderator:'Jordan Lee',action:'Warned',target:'user_19',metadata:'reason:harassment'},
  {time:'2026-09-06 17:05',moderator:'Mika Santos',action:'Dismissed report',target:'user_31',metadata:'reason:resolved'}
 ],
 creators:[
  {id:'cr1',name:'Elena Park',handle:'elenap',bio:'Motion designer building creator-first products.',skills:['Motion','UI','Brand'],projects:12,followers:8420,following:false,likes:214},
  {id:'cr2',name:'Samir Khan',handle:'samirk',bio:'Developer focused on APIs, tooling and Roblox systems.',skills:['JavaScript','APIs','Roblox'],projects:19,followers:6120,following:false,likes:188},
  {id:'cr3',name:'Iris Cole',handle:'iriscreates',bio:'Visual storyteller and thumbnail designer.',skills:['Design','Editing','3D'],projects:27,followers:11900,following:false,likes:301},
  {id:'cr4',name:'Theo Grant',handle:'theogrant',bio:'Community strategist and product writer.',skills:['Community','Writing','Research'],projects:8,followers:4310,following:false,likes:94},
  {id:'cr5',name:'Mika Santos',handle:'mikaops',bio:'Product operations and collaboration systems.',skills:['Ops','Analytics','Projects'],projects:15,followers:7240,following:false,likes:173},
  {id:'cr6',name:'Noah Wilson',handle:'noahbuilds',bio:'Indie builder experimenting with game communities.',skills:['Roblox','Games','Backend'],projects:11,followers:3890,following:false,likes:122}
 ],
 settings:{theme:'dark',accent:'violet',compact:false,reducedMotion:false,mentions:true,messages:true,projects:true,security:true}
};

let state=loadState();
let currentChannel='general';
let memberSort={key:'name',dir:1};
let activePalette=-1;

function loadState(){
 try{
  const raw=localStorage.getItem(KEY);
  if(raw)return {...seed,...JSON.parse(raw)};
 }catch(e){}
 return structuredClone(seed);
}
function save(){localStorage.setItem(KEY,JSON.stringify(state));}
function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function initials(n){return String(n).split(' ').map(x=>x[0]).join('').slice(0,2).toUpperCase();}
function active(){return state.communities.find(c=>c.id===state.activeCommunity)||state.communities[0];}
function pathFor(page){return page==='overview'||page==='dashboard'?'index.html':`pages/${page}.html`;}
function go(page){window.location.href=pathFor(page);}
function toast(message,type='success'){
 const wrap=document.querySelector('.toastwrap')||document.body.appendChild(Object.assign(document.createElement('div'),{className:'toastwrap'}));
 const el=document.createElement('div');el.className=`toast ${type}`;el.textContent=message;wrap.appendChild(el);setTimeout(()=>el.remove(),3200);
}
function modal(title,body,actions=''){
 closeModal();
 const back=document.createElement('div');back.className='modalback';back.id='modalback';
 back.innerHTML=`<div class="modal" role="dialog" aria-modal="true" aria-label="${esc(title)}"><div class="modalhead"><div><h2>${esc(title)}</h2></div><button class="iconbtn" data-close-modal aria-label="Close">×</button></div>${body}${actions?`<div class="actions" style="justify-content:flex-end;margin-top:15px">${actions}</div>`:''}</div>`;
 document.body.appendChild(back);back.addEventListener('click',e=>{if(e.target===back)closeModal()});
}
function closeModal(){document.getElementById('modalback')?.remove();}
function nav(page){return `<a class="navitem ${page===getPage()?'active':''}" href="${pathFor(page)}"><span class="ico">${icons[page]||'•'}</span><span class="navlabel">${esc(pageLabels[page]||page)}</span></a>`}
function getPage(){return document.body.dataset.page||'overview';}

function shell(content){
 const p=getPage(), unread=state.notifications.filter(n=>!n.read).length;
 document.getElementById('app').innerHTML=`
 <div class="app">
  <header class="topbar">
   <button class="iconbtn mobileonly" data-open-drawer aria-label="Open navigation">☰</button>
   <a class="brand" href="index.html"><span class="logo">N</span><span class="brandname">NEXUS</span></a>
   <div class="topsearch"><span class="searchicon">⌕</span><input id="globalSearch" placeholder="Search communities, people, messages, projects…  /" aria-label="Global search"></div>
   <div class="topactions">
    <button class="iconbtn hide-mobile" data-command aria-label="Command palette">⌘</button>
    <button class="iconbtn" data-page-nav="notifications" aria-label="Notifications">♢${unread?`<sup style="color:var(--accent2);font-size:8px">${unread}</sup>`:''}</button>
    <button class="avatar" data-profile-menu aria-label="Profile menu">${initials(state.user.name)}</button>
   </div>
  </header>
  <aside class="sidebar" id="sidebar">
   <div class="workspace-switch" data-community-switch tabindex="0"><div class="mini">${esc(active()?.icon||'N')}</div><div><strong>${esc(active()?.name||'Workspace')}</strong><span>${active()?.members?.toLocaleString()||0} members</span></div></div>
   <div class="side-group">Workspace</div>${nav('overview')}${nav('communities')}${nav('messages')}${nav('projects')}${nav('analytics')}
   <div class="side-group">Ecosystem</div>${nav('developers')}${nav('creators')}<a class="navitem" href="pages/developers.html#roblox"><span class="ico">◇</span><span class="navlabel">Roblox</span></a>
   <div class="side-group">Management</div>${nav('moderation')}${nav('notifications')}<a class="navitem" href="pages/moderation.html#audit"><span class="ico">≡</span><span class="navlabel">Audit Logs</span></a>
   <div class="side-group">Account</div>${nav('profile')}${nav('settings')}${nav('devices')}
   <div style="margin-top:18px"><button class="navitem" style="width:100%;border:0;background:none" data-collapse><span class="ico">‹</span><span class="navlabel">Collapse sidebar</span></button></div>
  </aside>
  <main class="main" id="main"><div class="container">${content}</div></main>
  <nav class="mobilebottom">
   ${['overview','communities','messages','projects','profile'].map(x=>`<a class="${p===x?'active':''}" href="${pathFor(x)}"><span class="ico">${icons[x]}</span>${pageLabels[x]}</a>`).join('')}
  </nav>
  <button class="fab" data-fab aria-label="Create">＋</button>
  <div id="liveRegion" aria-live="polite" class="hidden"></div>
 </div>`;
 bindShell();
}

function bindShell(){
 document.querySelector('[data-collapse]')?.addEventListener('click',()=>{
  const s=document.querySelector('.sidebar'),m=document.querySelector('.main');s.classList.toggle('collapsed');m.classList.toggle('expanded');localStorage.setItem('nexus-sidebar',s.classList.contains('collapsed')?'1':'0');
 });
 if(localStorage.getItem('nexus-sidebar')==='1'){document.querySelector('.sidebar')?.classList.add('collapsed');document.querySelector('.main')?.classList.add('expanded')}
 document.querySelector('[data-open-drawer]')?.addEventListener('click',()=>document.querySelector('.sidebar')?.classList.add('open'));
 document.querySelector('.sidebar')?.addEventListener('click',e=>{if(e.target.closest('.navitem'))document.querySelector('.sidebar').classList.remove('open')});
 document.querySelector('[data-command]')?.addEventListener('click',openPalette);
 document.addEventListener('keydown',globalKeys,{once:false});
 document.querySelector('[data-community-switch]')?.addEventListener('click',communitySwitcher);
 document.querySelector('[data-profile-menu]')?.addEventListener('click',profileMenu);
 document.querySelector('[data-fab]')?.addEventListener('click',()=>getPage()==='projects'?taskModal():communityModal());
 document.querySelector('#globalSearch')?.addEventListener('keydown',e=>{if(e.key==='Enter')globalSearch(e.target.value)});
 document.querySelectorAll('[data-page-nav]').forEach(x=>x.addEventListener('click',()=>go(x.dataset.pageNav)));
}

function globalKeys(e){
 if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openPalette()}
 if((e.ctrlKey||e.metaKey)&&e.key==='/'){e.preventDefault();document.querySelector('#globalSearch')?.focus()}
 if(e.key==='Escape')closeModal();
}
function openPalette(){
 const commands=[
  ['Search','Focus global search','search'],
  ['Create community','New community','community'],
  ['Create project','New project','project'],
  ['Create task','New task','task'],
  ['Open analytics','Go to analytics','analytics'],
  ['Open messages','Go to messages','messages'],
  ['Open settings','Go to settings','settings'],
  ['Switch community','Choose workspace','switch'],
  ['Toggle theme','Change appearance','theme']
 ];
 modal('Command palette',`<input class="input commandinput" id="paletteInput" placeholder="Type a command…" autofocus><div class="commands">${commands.map((c,i)=>`<div class="command ${i===0?'active':''}" data-command-item="${c[2]}" data-i="${i}"><span>${c[0]} <small class="muted">— ${c[1]}</small></span><span class="kbd">${i<3?'↵':''}</span></div>`).join('')}</div>`);
 const inp=document.getElementById('paletteInput');inp.addEventListener('input',()=>filterCommands(inp.value));inp.addEventListener('keydown',paletteKeys);
 document.querySelectorAll('[data-command-item]').forEach(el=>el.addEventListener('click',()=>runCommand(el.dataset.commandItem)));
}
function filterCommands(q){document.querySelectorAll('[data-command-item]').forEach(el=>el.classList.toggle('hidden',!el.textContent.toLowerCase().includes(q.toLowerCase())))}
function paletteKeys(e){
 const items=[...document.querySelectorAll('[data-command-item]:not(.hidden)')];
 if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();activePalette=(activePalette+(e.key==='ArrowDown'?1:-1)+items.length)%items.length;items.forEach((x,i)=>x.classList.toggle('active',i===activePalette))}
 if(e.key==='Enter'&&items[activePalette])runCommand(items[activePalette].dataset.commandItem);
}
function runCommand(c){
 closeModal();
 if(c==='search'){document.querySelector('#globalSearch')?.focus();return}
 if(c==='community')communityModal(); else if(c==='project')projectModal(); else if(c==='task')taskModal(); else if(c==='switch')communitySwitcher(); else if(c==='theme'){state.settings.theme=state.settings.theme==='dark'?'light':'dark';save();applyTheme();toast(`Theme set to ${state.settings.theme}`,'success')} else go(c);
}
function communitySwitcher(){
 modal('Switch community',`${state.communities.map(c=>`<button class="command" data-switch="${c.id}"><span><b>${esc(c.icon)}</b> ${esc(c.name)}</span><span class="muted">${c.members.toLocaleString()} members</span></button>`).join('')}<div class="section"><button class="btn primary" data-create-community>＋ Create community</button></div>`);
 document.querySelectorAll('[data-switch]').forEach(b=>b.addEventListener('click',()=>{state.activeCommunity=b.dataset.switch;save();closeModal();location.reload();}));
 document.querySelector('[data-create-community]')?.addEventListener('click',communityModal);
}
function profileMenu(){
 modal('Account menu',`<div class="commands">
 <button class="command" data-menu-go="profile">Profile <span class="muted">View profile</span></button>
 <button class="command" data-menu-go="settings">Settings <span class="muted">Preferences</span></button>
 <button class="command" data-menu-go="devices">Devices & Sessions <span class="muted">Security</span></button>
 <button class="command" data-menu-go="notifications">Notifications <span class="muted">Center</span></button>
 <button class="command" data-menu-go="shortcuts">Keyboard shortcuts <span class="muted">Ctrl/Cmd K</span></button>
 <button class="command" data-signout>Sign out <span class="muted">Demo session</span></button>
 </div>`);
 document.querySelectorAll('[data-menu-go]').forEach(b=>b.addEventListener('click',()=>{if(b.dataset.menuGo==='shortcuts')openShortcuts();else go(b.dataset.menuGo)}));
 document.querySelector('[data-signout]')?.addEventListener('click',()=>{closeModal();toast('Signed out of the demo workspace.','info')});
}
function openShortcuts(){modal('Keyboard shortcuts',`<div class="commands"><div class="command"><span>Command palette</span><span class="kbd">Ctrl/Cmd K</span></div><div class="command"><span>Global search</span><span class="kbd">Ctrl/Cmd /</span></div><div class="command"><span>Close dialog</span><span class="kbd">Esc</span></div><div class="command"><span>Navigate palette</span><span class="kbd">↑ ↓ Enter</span></div></div>`)}
function globalSearch(q){
 q=q.trim();if(!q){toast('Type a search term first.','warning');return}
 const all=[
  ...state.communities.map(x=>({type:'Community',title:x.name,sub:x.description,page:'communities'})),
  ...state.members.map(x=>({type:'User',title:x.name,sub:`${x.role} • ${x.status}`,page:'communities'})),
  ...state.messages.map(x=>({type:'Message',title:x.text,sub:`${x.user} • #${x.channel}`,page:'messages'})),
  ...state.projects.map(x=>({type:'Project',title:x.name,sub:x.description,page:'projects'})),
  ...state.creators.map(x=>({type:'Creator',title:x.name,sub:`@${x.handle}`,page:'creators'})),
  ...state.tasks.map(x=>({type:'Task',title:x.title,sub:`${x.status} • ${x.assignee}`,page:'projects'}))
 ].filter(x=>(x.title+' '+x.sub).toLowerCase().includes(q.toLowerCase())).slice(0,12);
 modal(`Search results for “${esc(q)}”`,all.length?all.map(x=>`<a class="command" href="${pathFor(x.page)}"><span><b>${esc(x.type)}</b> ${esc(x.title)}</span><span class="muted">${esc(x.sub)}</span></a>`).join(''):`<div class="empty"><strong>No results</strong>Try a community, user, message, project or task.`)
}

function metric(label,value,delta){return `<div class="card metric"><div class="label">${label}</div><div class="value">${value}</div><div class="delta up">↗ ${delta}</div></div>`}
function pageHead(kicker,title,desc,actions=''){return `<div class="pagehead"><div><div class="eyebrow">${kicker}</div><h1>${title}</h1><p>${desc}</p></div><div class="actions">${actions}</div></div>`}
function canvasChart(id,data,labels=[]){
 requestAnimationFrame(()=>{
  const c=document.getElementById(id);if(!c)return;const dpr=devicePixelRatio||1,rect=c.getBoundingClientRect();c.width=rect.width*dpr;c.height=rect.height*dpr;const ctx=c.getContext('2d');ctx.scale(dpr,dpr);
  const w=rect.width,h=rect.height,pad=28,max=Math.max(...data)*1.15,min=Math.min(...data)*.88;const x=i=>pad+i*(w-pad*2)/(data.length-1),y=v=>h-pad-(v-min)*(h-pad*2)/(max-min||1);
  ctx.strokeStyle='rgba(255,255,255,.07)';ctx.lineWidth=1;for(let i=0;i<4;i++){const yy=pad+i*(h-pad*2)/3;ctx.beginPath();ctx.moveTo(pad,yy);ctx.lineTo(w-pad,yy);ctx.stroke()}
  ctx.beginPath();data.forEach((v,i)=>i?ctx.lineTo(x(i),y(v)):ctx.moveTo(x(i),y(v)));ctx.strokeStyle='#8b7cff';ctx.lineWidth=2.5;ctx.stroke();
  ctx.beginPath();data.forEach((v,i)=>i?ctx.lineTo(x(i),y(v)):ctx.moveTo(x(i),y(v)));ctx.lineTo(x(data.length-1),h-pad);ctx.lineTo(x(0),h-pad);ctx.closePath();ctx.fillStyle='rgba(139,124,255,.09)';ctx.fill();
  data.forEach((v,i)=>{ctx.beginPath();ctx.arc(x(i),y(v),3.5,0,Math.PI*2);ctx.fillStyle='#8b7cff';ctx.fill()});
  ctx.fillStyle='#657084';ctx.font='10px system-ui';(labels.length?labels:data.map((_,i)=>String(i+1))).forEach((t,i)=>ctx.fillText(t,x(i)-10,h-8));
 });
}
function resizeCharts(){document.querySelectorAll('canvas[data-chart]').forEach(c=>{const data=JSON.parse(c.dataset.chart),labels=JSON.parse(c.dataset.labels||'[]');canvasChart(c.id,data,labels)})}
window.addEventListener('resize',()=>resizeCharts());

function renderOverview(){
 shell(`
 ${pageHead('Workspace','Your community. Your team. Your ecosystem.','One Nexus — a focused operating layer for communities, projects, creators and developers.','<button class="btn" data-explore>Explore platform</button><button class="btn primary" data-create>Get started</button>')}
 <section class="hero">
  <div class="eyebrow">NEXUS WORKSPACE</div><h1>Everything your ecosystem needs, in one place.</h1>
  <p>Manage communities, collaborate on projects, communicate in real time, discover creators and build against a clear API surface — without pretending a static frontend is a production backend.</p>
  <div class="hero-actions"><button class="btn primary" data-create>＋ Create community</button><a class="btn" href="pages/dashboard.html">Open dashboard</a></div>
  <div class="preview"><div class="previewbar"><i class="dot"></i><i class="dot"></i><i class="dot"></i></div><div class="previewgrid"><div class="previewnav"><div class="sk w1"></div><div class="sk"></div><div class="sk w2"></div><div class="sk w3"></div><div class="sk"></div></div><div class="previewmain"><div class="previewcards"><div class="previewcard"><div class="previewline"></div><b>1,248</b></div><div class="previewcard"><div class="previewline"></div><b>18.4k</b></div><div class="previewcard"><div class="previewline"></div><b>92%</b></div></div><div class="sk w2" style="margin-top:18px"></div><div class="sk"></div><div class="sk w3"></div></div></div></div>
 </section>
 <div class="grid g4 kpis">${metric('Active members','1,248','8.6%')}${metric('Messages','18,420','12.4%')}${metric('Projects','24','4.2%')}${metric('API requests','84.2k','18.1%')}</div>
 <div class="grid g2 section"><div class="card"><div class="panelhead"><h2>Community growth</h2><span>Last 30 days</span></div><div class="chart"><canvas id="growth" data-chart="[42,48,47,61,66,72,69,82,91,98,105,118,124,139,145,152,161,173,181,190]" data-labels='["1","3","5","7","9","11","13","15","17","19","21","23","25","27","29",""]'></canvas></div></div><div class="card"><div class="panelhead"><h2>Workspace health</h2><span>Current</span></div><div style="display:grid;gap:17px;margin-top:25px">${[['Engagement','92%'],['Response rate','87%'],['Project delivery','78%'],['Moderation coverage','96%']].map(x=>`<div><div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:7px"><span>${x[0]}</span><span class="muted">${x[1]}</span></div><div class="statbar"><i style="width:${x[1]}"></i></div></div>`).join('')}</div></div></div>
 `);
 document.querySelectorAll('[data-create]').forEach(b=>b.addEventListener('click',communityModal));document.querySelector('[data-explore]')?.addEventListener('click',()=>go('dashboard'));resizeCharts();
}
function renderDashboard(){
 shell(`${pageHead('Workspace','Dashboard','A high-signal view of community, collaboration and platform activity.','<a class="btn" href="pages/analytics.html">View analytics</a><button class="btn primary" data-create-task>＋ New task</button>')}
 <div class="grid g4">${metric('Active members','1,248','8.6%')}${metric('Messages','18,420','12.4%')}${metric('Projects','24','4.2%')}${metric('API requests','84.2k','18.1%')}</div>
 <div class="grid g2 section"><div class="card"><div class="panelhead"><h2>Engagement trend</h2><span>7 days</span></div><div class="chart"><canvas id="dashchart" data-chart="[61,72,69,78,75,88,94,91,99,104,98,111,116,120]" data-labels='["M","T","W","T","F","S","S","","","","","","",""]'></canvas></div></div><div class="card"><div class="panelhead"><h2>Community activity</h2><span>${esc(active().name)}</span></div>${[['General','6.2k messages','92%'],['Dev Chat','3.8k messages','73%'],['Creator Lounge','2.1k messages','58%'],['Announcements','1.2k messages','41%']].map(x=>`<div style="padding:12px 0;border-bottom:1px solid var(--border)"><div style="display:flex;justify-content:space-between;font-size:11px"><b>#${x[0]}</b><span class="muted">${x[1]}</span></div><div class="statbar" style="margin-top:7px"><i style="width:${x[2]}"></i></div></div>`).join('')}</div></div>
 <div class="card section"><div class="panelhead"><h2>Recent activity</h2><span>Local demo state</span></div><div class="tablewrap"><table class="table"><thead><tr><th>Event</th><th>Actor</th><th>Time</th><th>Status</th></tr></thead><tbody>${state.audit.map(x=>`<tr><td>${esc(x.action)}</td><td>${esc(x.moderator)}</td><td>${esc(x.time)}</td><td><span class="badge success">Recorded</span></td></tr>`).join('')}</tbody></table></div></div>`);
 document.querySelector('[data-create-task]')?.addEventListener('click',taskModal);resizeCharts();
}
function renderCommunities(){
 const q={q:'',sort:'name',status:'all'};let members=[...state.members];
 shell(`${pageHead('Workspace','Communities','Create, switch and operate your community spaces.','<button class="btn primary" data-create-community>＋ Create community</button>')}
 <div class="grid g3">${state.communities.map(c=>`<div class="card"><div style="display:flex;justify-content:space-between"><div class="userdot">${esc(c.icon)}</div><span class="badge">${esc(c.privacy)}</span></div><h3 style="margin-top:14px">${esc(c.name)}</h3><p class="muted tiny">${esc(c.description)}</p><div style="display:flex;justify-content:space-between;margin-top:15px;font-size:11px"><span>${c.members.toLocaleString()} members</span><span class="muted">${c.createdAt}</span></div><div class="actions" style="margin-top:13px"><button class="btn small" data-switch="${c.id}">Switch</button><button class="btn small" data-edit-community="${c.id}">Edit</button><button class="btn small danger" data-delete-community="${c.id}">Delete</button></div></div>`).join('')}</div>
 <div class="card section"><div class="panelhead"><h2>Members</h2><div class="actions"><input class="input" id="memberSearch" placeholder="Search members…" style="width:190px"><select class="select" id="roleFilter" style="width:120px"><option value="all">All roles</option><option>Admin</option><option>Moderator</option><option>Developer</option><option>Creator</option><option>Member</option></select><button class="btn small" data-export-members>Export CSV</button></div></div><div class="tablewrap mobile-cards" id="membersTable"><table class="table"><thead><tr>${['name','role','status','joined','activity'].map(k=>`<th><button class="btn small" data-sort="${k}">${k[0].toUpperCase()+k.slice(1)} ↕</button></th>`).join('')}<th>Actions</th></tr></thead><tbody id="memberRows"></tbody></table></div></div>`);
 renderMemberRows();
 document.querySelector('[data-create-community]')?.addEventListener('click',communityModal);
 document.querySelectorAll('[data-switch]').forEach(b=>b.addEventListener('click',()=>{state.activeCommunity=b.dataset.switch;save();toast(`Switched to ${active().name}`);location.reload()}));
 document.querySelectorAll('[data-edit-community]').forEach(b=>b.addEventListener('click',()=>communityModal(b.dataset.editCommunity)));
 document.querySelectorAll('[data-delete-community]').forEach(b=>b.addEventListener('click',()=>deleteCommunity(b.dataset.deleteCommunity)));
 document.querySelector('#memberSearch').addEventListener('input',renderMemberRows);document.querySelector('#roleFilter').addEventListener('change',renderMemberRows);
 document.querySelectorAll('[data-sort]').forEach(b=>b.addEventListener('click',()=>{const k=b.dataset.sort;if(memberSort.key===k)memberSort.dir*=-1;else{memberSort.key=k;memberSort.dir=1}renderMemberRows()}));
 document.querySelector('[data-export-members]')?.addEventListener('click',()=>downloadCSV('members.csv',state.members));
}
function renderMemberRows(){
 const q=(document.querySelector('#memberSearch')?.value||'').toLowerCase(),role=document.querySelector('#roleFilter')?.value||'all';
 let rows=state.members.filter(m=>(m.name+' '+m.role+' '+m.status).toLowerCase().includes(q)&&(role==='all'||m.role===role));
 rows.sort((a,b)=>String(a[memberSort.key]).localeCompare(String(b[memberSort.key]),undefined,{numeric:true})*memberSort.dir);
 const el=document.querySelector('#memberRows');if(!el)return;
 el.innerHTML=rows.map(m=>`<tr><td data-label="User"><div class="usercell"><div class="userdot">${initials(m.name)}</div><b>${esc(m.name)}</b></div></td><td data-label="Role"><span class="badge">${esc(m.role)}</span></td><td data-label="Status"><span class="badge ${m.status==='Online'?'success':m.status==='Away'?'warn':''}">${esc(m.status)}</span></td><td data-label="Joined">${m.joined}</td><td data-label="Activity">${m.activity}%</td><td data-label="Actions"><button class="btn small" data-role="${m.id}">Manage</button></td></tr>`).join('');
 el.querySelectorAll('[data-role]').forEach(b=>b.addEventListener('click',()=>memberManage(b.dataset.role)));
}
function memberManage(id){const m=state.members.find(x=>x.id===id);modal(`Manage ${m.name}`,`<div class="field"><label>Role</label><select class="select" id="memberRole">${['Owner','Admin','Moderator','Developer','Creator','Member'].map(x=>`<option ${x===m.role?'selected':''}>${x}</option>`).join('')}</select></div><div class="field"><label>Status</label><select class="select" id="memberStatus">${['Online','Away','Offline'].map(x=>`<option ${x===m.status?'selected':''}>${x}</option>`).join('')}</select></div>`,'<button class="btn" data-close-modal>Cancel</button><button class="btn primary" id="saveMember">Save changes</button>');document.querySelector('#saveMember').addEventListener('click',()=>{m.role=document.querySelector('#memberRole').value;m.status=document.querySelector('#memberStatus').value;save();closeModal();renderCommunities();toast('Member updated')})}

function communityModal(id=null){
 const c=id?state.communities.find(x=>x.id===id):null;
 modal(c?'Edit community':'Create community',`<form id="communityForm"><div class="formgrid"><div class="field"><label for="cname">Community name *</label><input id="cname" class="input" maxlength="42" required value="${esc(c?.name||'')}"><div id="cnameErr" class="error"></div></div><div class="field"><label for="cicon">Icon</label><input id="cicon" class="input" maxlength="2" value="${esc(c?.icon||'N')}"></div><div class="field full"><label for="cdesc">Description *</label><textarea id="cdesc" class="textarea" maxlength="180" required>${esc(c?.description||'')}</textarea></div><div class="field"><label>Privacy</label><select id="cprivacy" class="select"><option ${c?.privacy==='Private'?'selected':''}>Private</option><option ${c?.privacy==='Public'?'selected':''}>Public</option></select></div><div class="field"><label>Default role</label><select id="crole" class="select"><option>Member</option><option ${c?.defaultRole==='Contributor'?'selected':''}>Contributor</option></select></div></div></form>`,'<button class="btn" data-close-modal>Cancel</button><button class="btn primary" id="saveCommunity">Save community</button>');
 document.querySelector('#saveCommunity').addEventListener('click',()=>{
  const name=document.querySelector('#cname').value.trim(),desc=document.querySelector('#cdesc').value.trim(),err=document.querySelector('#cnameErr');
  if(!name){err.textContent='Name is required.';return} if(name.length<3){err.textContent='Use at least 3 characters.';return}
  if(state.communities.some(x=>x.name.toLowerCase()===name.toLowerCase()&&x.id!==id)){err.textContent='A community with this name already exists.';return}
  if(!desc){document.querySelector('#cdesc').focus();toast('Add a short description.','warning');return}
  if(c){Object.assign(c,{name,description:desc,icon:document.querySelector('#cicon').value.trim()||'N',privacy:document.querySelector('#cprivacy').value,defaultRole:document.querySelector('#crole').value})}
  else{const n={id:'c'+Date.now(),name,description:desc,icon:document.querySelector('#cicon').value.trim()||'N',privacy:document.querySelector('#cprivacy').value,defaultRole:document.querySelector('#crole').value,members:0,createdAt:new Date().toISOString().slice(0,10)};state.communities.push(n);state.activeCommunity=n.id}
  save();closeModal();location.reload();toast(c?'Community updated':'Community created successfully');
 });
}
function deleteCommunity(id){if(state.communities.length===1){toast('Keep at least one community in the workspace.','warning');return}const c=state.communities.find(x=>x.id===id);modal(`Delete ${c.name}?`,`<p>This demo action removes the community from local state. It cannot be undone from this browser.</p>`,'<button class="btn" data-close-modal>Cancel</button><button class="btn danger" id="confirmDelete">Delete</button>');document.querySelector('#confirmDelete').addEventListener('click',()=>{state.communities=state.communities.filter(x=>x.id!==id);if(state.activeCommunity===id)state.activeCommunity=state.communities[0].id;save();closeModal();location.reload();toast('Community deleted','success')})}

function renderMessages(){
 shell(`${pageHead('Workspace','Messages','Channels, threads and local-first chat state.','<button class="btn" data-message-search>Search messages</button>')}
 <div class="card chat"><div class="chatcol"><div class="chathead">${esc(active().name)}</div><div class="channels">${state.channels.map(c=>`<div class="channel ${c===currentChannel?'active':''}" data-channel="${c}"># ${c}</div>`).join('')}</div></div><div class="chatcol messages"><div class="chathead"># ${currentChannel}</div><div class="msglist" id="msglist"></div><div class="typing">Mika is typing…</div><div class="composer"><button class="iconbtn" data-attach aria-label="Attach">＋</button><input class="input" id="messageInput" placeholder="Message #${currentChannel}…" maxlength="500"><button class="iconbtn" data-emoji aria-label="Emoji">☺</button><button class="btn primary" id="sendMessage">Send</button></div></div><div class="chatcol"><div class="chathead">Thread</div><div class="thread" id="threadPanel"><div class="empty"><strong>Open a thread</strong>Select a message to see replies.</div></div></div></div>`);
 renderMessagesList();
 document.querySelectorAll('[data-channel]').forEach(x=>x.addEventListener('click',()=>{currentChannel=x.dataset.channel;renderMessages()}));
 document.querySelector('#sendMessage').addEventListener('click',sendMessage);document.querySelector('#messageInput').addEventListener('keydown',e=>{if(e.key==='Enter')sendMessage()});
 document.querySelector('[data-emoji]').addEventListener('click',()=>{document.querySelector('#messageInput').value+=' ✨';document.querySelector('#messageInput').focus()});
 document.querySelector('[data-attach]').addEventListener('click',()=>toast('Attachments require a backend upload service.','info'));
 document.querySelector('[data-message-search]').addEventListener('click',()=>{modal('Search messages',`<input class="input" id="msgSearch" placeholder="Search message text…"><div id="msgResults" class="commands" style="margin-top:10px"></div>`);const f=()=>{const q=document.querySelector('#msgSearch').value.toLowerCase();document.querySelector('#msgResults').innerHTML=state.messages.filter(m=>m.text.toLowerCase().includes(q)).map(m=>`<div class="command"><span>${esc(m.text)}</span><span class="muted">#${m.channel}</span></div>`).join('')||'<div class="empty">No matching messages.</div>'};document.querySelector('#msgSearch').addEventListener('input',f);f()});
}
function renderMessagesList(){
 const el=document.querySelector('#msglist');if(!el)return;el.innerHTML=state.messages.filter(m=>m.channel===currentChannel).map(m=>`<div class="msg" data-msg="${m.id}"><div class="userdot">${initials(m.user)}</div><div class="msgbody"><div class="msgmeta"><b>${esc(m.user)}</b> <span class="muted">${m.time}</span></div><div class="msgtext">${esc(m.text)}</div><div class="actions" style="margin-top:6px"><span class="badge">${m.reactions.join(' · ')}</span><button class="btn small" data-thread="${m.id}">Reply</button><button class="btn small" data-edit-msg="${m.id}">Edit</button><button class="btn small danger" data-delete-msg="${m.id}">Delete</button></div></div></div>`).join('')||'<div class="empty"><strong>No messages yet</strong>Send the first message in this channel.</div>';
 el.querySelectorAll('[data-thread]').forEach(b=>b.addEventListener('click',()=>threadModal(b.dataset.thread)));
 el.querySelectorAll('[data-edit-msg]').forEach(b=>b.addEventListener('click',()=>editMessage(b.dataset.editMsg)));
 el.querySelectorAll('[data-delete-msg]').forEach(b=>b.addEventListener('click',()=>deleteMessage(b.dataset.deleteMsg)));
}
function sendMessage(){const input=document.querySelector('#messageInput'),text=input.value.trim();if(!text){toast('Message cannot be empty.','warning');return}state.messages.push({id:'m'+Date.now(),channel:currentChannel,user:state.user.name,text,time:new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}),reactions:[]});save();input.value='';renderMessagesList();document.querySelector('#msglist').scrollTop=99999}
function editMessage(id){const m=state.messages.find(x=>x.id===id);modal('Edit message',`<textarea class="textarea" id="editText" maxlength="500">${esc(m.text)}</textarea>`,'<button class="btn" data-close-modal>Cancel</button><button class="btn primary" id="saveMsg">Save</button>');document.querySelector('#saveMsg').addEventListener('click',()=>{const t=document.querySelector('#editText').value.trim();if(!t){toast('Message cannot be empty.','error');return}m.text=t;save();closeModal();renderMessagesList();toast('Message edited')})}
function deleteMessage(id){modal('Delete message?','<p>This removes the message from the local demo state.</p>','<button class="btn" data-close-modal>Cancel</button><button class="btn danger" id="deleteMsg">Delete</button>');document.querySelector('#deleteMsg').addEventListener('click',()=>{state.messages=state.messages.filter(x=>x.id!==id);save();closeModal();renderMessagesList();toast('Message deleted')})}
function threadModal(id){const m=state.messages.find(x=>x.id===id);modal('Message thread',`<div class="threadmsg"><b>${esc(m.user)}</b><p>${esc(m.text)}</p><span class="muted">${m.time}</span></div><div id="replies"><div class="threadmsg"><b>Mika Santos</b><p>Looks good from my side.</p></div></div><div class="composer" style="padding:0;border:0;margin-top:10px"><input class="input" id="replyText" placeholder="Write a reply…"><button class="btn primary" id="sendReply">Send</button></div>`);document.querySelector('#sendReply').addEventListener('click',()=>{const t=document.querySelector('#replyText').value.trim();if(!t)return;document.querySelector('#replies').insertAdjacentHTML('beforeend',`<div class="threadmsg"><b>${esc(state.user.name)}</b><p>${esc(t)}</p></div>`);document.querySelector('#replyText').value='';toast('Reply added')})}

function renderProjects(){
 shell(`${pageHead('Workspace','Projects','Plan work with a persistent native drag-and-drop board.','<button class="btn" data-new-project>＋ Project</button><button class="btn primary" data-new-task>＋ Task</button>')}
 <div class="grid g3">${state.projects.map(p=>`<div class="card"><div class="panelhead"><h2>${esc(p.name)}</h2><span class="badge success">${esc(p.status)}</span></div><p class="muted tiny">${esc(p.description)}</p><div style="margin:14px 0 6px;display:flex;justify-content:space-between;font-size:10px"><span>Progress</span><b>${p.progress}%</b></div><div class="statbar"><i style="width:${p.progress}%"></i></div><div style="margin-top:12px;font-size:10px;color:var(--muted)">Owner · ${esc(p.owner)}</div><div class="actions" style="margin-top:12px"><button class="btn small" data-edit-project="${p.id}">Edit</button><button class="btn small danger" data-delete-project="${p.id}">Delete</button></div></div>`).join('')}</div>
 <div class="card section"><div class="panelhead"><h2>Kanban board</h2><span>Drag tasks between columns</span></div><div class="kanban" id="kanban">${['Backlog','To Do','In Progress','Review','Completed'].map(s=>`<div class="column" data-status="${s}"><div class="colhead"><b>${s}</b><span>${state.tasks.filter(t=>t.status===s).length}</span></div><div class="dropzoneinner">${state.tasks.filter(t=>t.status===s).map(taskCard).join('')}</div></div>`).join('')}</div></div>`);
 document.querySelector('[data-new-project]').addEventListener('click',projectModal);document.querySelector('[data-new-task]').addEventListener('click',taskModal);
 document.querySelectorAll('[data-edit-project]').forEach(b=>b.addEventListener('click',()=>projectModal(b.dataset.editProject)));document.querySelectorAll('[data-delete-project]').forEach(b=>b.addEventListener('click',()=>deleteProject(b.dataset.deleteProject)));
 bindDnD();
}
function taskCard(t){return `<div class="task" draggable="true" data-task="${t.id}"><strong>${esc(t.title)}</strong><p>${esc(t.description)}</p><div style="display:flex;justify-content:space-between"><span class="badge ${t.priority==='High'?'danger':t.priority==='Medium'?'warn':''}">${t.priority}</span><span class="muted tiny">${esc(t.assignee)}</span></div></div>`}
function bindDnD(){document.querySelectorAll('.task').forEach(t=>{t.addEventListener('dragstart',()=>t.classList.add('dragging'));t.addEventListener('dragend',()=>t.classList.remove('dragging'))});document.querySelectorAll('.column').forEach(col=>{col.addEventListener('dragover',e=>{e.preventDefault();col.classList.add('dropzone')});col.addEventListener('dragleave',()=>col.classList.remove('dropzone'));col.addEventListener('drop',e=>{e.preventDefault();col.classList.remove('dropzone');const id=document.querySelector('.task.dragging')?.dataset.task;if(!id)return;const t=state.tasks.find(x=>x.id===id);t.status=col.dataset.status;save();renderProjects();toast(`Task moved to ${t.status}`)})})}
function projectModal(id=null){const p=id?state.projects.find(x=>x.id===id):null;modal(p?'Edit project':'Create project',`<form id="projectForm"><div class="field"><label>Name *</label><input id="pname" class="input" maxlength="70" value="${esc(p?.name||'')}"></div><div class="field"><label>Description *</label><textarea id="pdesc" class="textarea" maxlength="220">${esc(p?.description||'')}</textarea></div></form>`,'<button class="btn" data-close-modal>Cancel</button><button class="btn primary" id="saveProject">Save</button>');document.querySelector('#saveProject').addEventListener('click',()=>{const name=document.querySelector('#pname').value.trim(),desc=document.querySelector('#pdesc').value.trim();if(!name||!desc){toast('Name and description are required.','error');return}if(p)Object.assign(p,{name,description:desc});else state.projects.push({id:'p'+Date.now(),name,description:desc,progress:0,owner:state.user.name,status:'Active'});save();closeModal();renderProjects();toast(p?'Project updated':'Project created')})}
function deleteProject(id){modal('Delete project?','<p>Delete this project and its project card from local state?</p>','<button class="btn" data-close-modal>Cancel</button><button class="btn danger" id="confirmProjectDelete">Delete</button>');document.querySelector('#confirmProjectDelete').addEventListener('click',()=>{state.projects=state.projects.filter(x=>x.id!==id);save();closeModal();renderProjects();toast('Project deleted')})}
function taskModal(id=null){const t=id?state.tasks.find(x=>x.id===id):null;modal(t?'Edit task':'Create task',`<form id="taskForm"><div class="formgrid"><div class="field full"><label>Title *</label><input id="ttitle" class="input" maxlength="90" value="${esc(t?.title||'')}"></div><div class="field full"><label>Description</label><textarea id="tdesc" class="textarea" maxlength="300">${esc(t?.description||'')}</textarea></div><div class="field"><label>Assignee</label><select id="tassign" class="select">${[state.user.name,...state.members.map(x=>x.name)].filter((v,i,a)=>a.indexOf(v)===i).map(x=>`<option ${x===t?.assignee?'selected':''}>${esc(x)}</option>`).join('')}</select></div><div class="field"><label>Priority</label><select id="tpriority" class="select">${['Low','Medium','High'].map(x=>`<option ${x===t?.priority?'selected':''}>${x}</option>`).join('')}</select></div><div class="field"><label>Due date</label><input id="tdue" class="input" type="date" value="${t?.due||''}"></div><div class="field"><label>Status</label><select id="tstatus" class="select">${['Backlog','To Do','In Progress','Review','Completed'].map(x=>`<option ${x===t?.status?'selected':''}>${x}</option>`).join('')}</select></div></div></form>`,'<button class="btn" data-close-modal>Cancel</button><button class="btn primary" id="saveTask">Save task</button>');document.querySelector('#saveTask').addEventListener('click',()=>{const title=document.querySelector('#ttitle').value.trim();if(!title){toast('Task title is required.','error');return}const data={title,description:document.querySelector('#tdesc').value.trim(),assignee:document.querySelector('#tassign').value,priority:document.querySelector('#tpriority').value,due:document.querySelector('#tdue').value,status:document.querySelector('#tstatus').value,tags:t?.tags||[]};if(t)Object.assign(t,data);else state.tasks.push({id:'t'+Date.now(),...data});save();closeModal();renderProjects();toast(t?'Task updated':'Task created')})}

function renderAnalytics(){
 const ranges={24:[28,34,31,42,45,49,53,50,57,61,59,66],7:[42,48,47,61,66,72,69,82,91,98,105,118],30:[35,43,47,52,61,67,72,79,91,102,111,124],90:[21,29,35,43,55,67,72,81,95,110,129,145]};let range='30';
 shell(`${pageHead('Insights','Analytics','Structured local demo data with responsive charts and exports.','<button class="btn" data-export-analytics>Export CSV</button>')}
 <div class="tabs"><button class="tab active" data-range="24">24 hours</button><button class="tab" data-range="7">7 days</button><button class="tab" data-range="30">30 days</button><button class="tab" data-range="90">90 days</button><button class="tab" data-range="custom">Custom</button></div>
 <div class="grid g4" id="analyticsMetrics">${metric('Members','1,248','8.6%')}${metric('Messages','18.4k','12.4%')}${metric('Engagement','92%','5.1%')}${metric('Completion','78%','6.8%')}</div>
 <div class="grid g2 section"><div class="card"><div class="panelhead"><h2>Member growth</h2><span id="rangeLabel">30 days</span></div><div class="chart"><canvas id="analyticsChart"></canvas></div></div><div class="card"><div class="panelhead"><h2>Project completion</h2><span>By status</span></div>${[['Completed',78],['Review',61],['In Progress',54],['To Do',31]].map(x=>`<div style="margin:16px 0"><div style="display:flex;justify-content:space-between;font-size:11px"><span>${x[0]}</span><b>${x[1]}%</b></div><div class="statbar" style="margin-top:7px"><i style="width:${x[1]}%"></i></div></div>`).join('')}</div></div>
 <div class="card section"><div class="panelhead"><h2>API usage</h2><span>Requests by endpoint</span></div><div class="tablewrap"><table class="table"><thead><tr><th>Endpoint</th><th>Requests</th><th>Success</th><th>Latency</th></tr></thead><tbody>${[['GET /communities','32,481','99.8%','118ms'],['GET /members','21,902','99.9%','94ms'],['POST /messages','14,120','99.2%','131ms'],['GET /projects','9,811','99.7%','102ms'],['POST /webhooks/test','5,904','Demo only','—']].map(x=>`<tr>${x.map((v,i)=>`<td>${i===2?`<span class="badge ${v==='Demo only'?'warn':'success'}">${v}</span>`:v}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`);
 const draw=()=>{const c=document.getElementById('analyticsChart');if(!c)return;const d=ranges[range]||ranges[30];canvasChart('analyticsChart',d,['1','2','3','4','5','6','7','8','9','10','11','12'])};draw();
 document.querySelectorAll('[data-range]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-range]').forEach(x=>x.classList.remove('active'));b.classList.add('active');if(b.dataset.range==='custom'){toast('Custom range picker is ready for backend/date-library integration.','info');return}range=b.dataset.range;document.querySelector('#rangeLabel').textContent=`${range} ${range==='24'?'hours':'days'}`;draw()}));
 document.querySelector('[data-export-analytics]').addEventListener('click',()=>downloadCSV('analytics.csv',ranges[30].map((v,i)=>({period:i+1,members:v,messages:Math.round(v*130),engagement:Math.min(99,60+i*3)}))));
}

function renderDevelopers(){
 shell(`${pageHead('Ecosystem','Developer platform','API keys, webhooks and documentation — with static-demo boundaries made explicit.','<button class="btn primary" data-api-key>＋ Generate demo key</button>')}
 <div class="notice">Integration not configured. Real API secrets, webhook delivery and authentication require a secure backend; this frontend never stores production credentials.</div>
 <div class="tabs" style="margin-top:16px"><button class="tab active" data-devtab="overview">Overview</button><button class="tab" data-devtab="keys">API Keys</button><button class="tab" data-devtab="webhooks">Webhooks</button><button class="tab" data-devtab="docs">Documentation</button><button class="tab" data-devtab="roblox">Roblox</button></div>
 <div id="devcontent"></div>`);
 renderDevTab('overview');
 document.querySelectorAll('[data-devtab]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-devtab]').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderDevTab(b.dataset.devtab)}));document.querySelector('[data-api-key]').addEventListener('click',apiKeyModal);
}
function renderDevTab(tab){
 const el=document.querySelector('#devcontent');if(!el)return;
 if(tab==='overview')el.innerHTML=`<div class="grid g3">${metric('Requests','84.2k','18.1%')}${metric('Success rate','99.7%','0.3%')}${metric('Median latency','118ms','7.4%')}</div><div class="card section"><div class="panelhead"><h2>Integration status</h2><span>Static frontend</span></div><div class="grid g2"><div><h3>Backend API</h3><p class="muted tiny">Connect Node.js + PostgreSQL + Redis behind a server-side API boundary.</p></div><div><h3>WebSocket</h3><p class="muted tiny">Replace local message persistence with authenticated WebSocket sessions for production chat.</p></div></div></div>`;
 if(tab==='keys')el.innerHTML=`<div class="card"><div class="panelhead"><h2>API keys</h2><button class="btn small" data-generate-key>Generate</button></div><div id="keysList"><div class="empty"><strong>No production keys</strong>Demo key generation is intentionally non-secret and local only.</div></div></div>`; 
 if(tab==='webhooks')el.innerHTML=`<div class="card"><div class="panelhead"><h2>Webhooks</h2><button class="btn small primary" data-create-webhook>Create webhook</button></div><div class="tablewrap"><table class="table"><thead><tr><th>Name</th><th>Status</th><th>Last delivery</th><th>Actions</th></tr></thead><tbody><tr><td>Project events</td><td><span class="badge success">Active</span></td><td>Not configured</td><td><button class="btn small" data-test-webhook>Test</button></td></tr><tr><td>Moderation alerts</td><td><span class="badge warn">Disabled</span></td><td>Not configured</td><td><button class="btn small">Enable</button></td></tr></tbody></table></div></div>`;
 if(tab==='docs')el.innerHTML=`<div class="card"><div class="panelhead"><h2>API documentation</h2><span>Version 2</span></div>${[['GET','/v2/communities','List communities'],['POST','/v2/communities','Create community'],['PATCH','/v2/projects/:id','Update project'],['DELETE','/v2/projects/:id','Delete project']].map(x=>`<div class="command"><span><span class="badge">${x[0]}</span> <code>${x[1]}</code> <span class="muted">${x[2]}</span></span><button class="btn small" data-copy="${x[1]}">Copy</button></div>`).join('')}<div class="section"><h3>Authentication</h3><p class="muted tiny">Use server-side API keys or OAuth tokens. Never expose secrets in browser source or localStorage.</p></div></div>`;
 if(tab==='roblox')el.innerHTML=`<div class="card"><div class="panelhead"><h2>Roblox integration</h2><span>External service</span></div><div class="empty"><strong>Roblox integration not configured.</strong>Connect your Roblox API credentials to enable live data.<div style="margin-top:14px"><button class="btn primary" data-connect-roblox>Configure integration</button></div></div></div>`;
 el.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(b.dataset.copy);toast('Copied endpoint')}catch(e){toast('Clipboard unavailable in this context.','warning')}}));
 el.querySelector('[data-test-webhook]')?.addEventListener('click',()=>toast('Webhook delivery not attempted — backend is not configured.','info'));
 el.querySelector('[data-create-webhook]')?.addEventListener('click',()=>modal('Create webhook',`<div class="field"><label>Name</label><input class="input" id="whName" maxlength="50"></div><div class="field"><label>Endpoint URL</label><input class="input" id="whUrl" type="url" placeholder="https://example.com/webhook"></div>`,'<button class="btn" data-close-modal>Cancel</button><button class="btn primary" id="saveWh">Save demo webhook</button>'));el.querySelector('#saveWh')?.addEventListener('click',()=>{if(!document.querySelector('#whName').value.trim()||!document.querySelector('#whUrl').value.trim()){toast('Name and URL are required.','error');return}closeModal();toast('Webhook saved as local demo configuration.','success')});
 el.querySelector('[data-connect-roblox]')?.addEventListener('click',()=>toast('Integration not configured — add server-side Roblox credentials.','info'));
 el.querySelector('[data-generate-key]')?.addEventListener('click',apiKeyModal);
}
function apiKeyModal(){const demo='nxs_demo_'+Math.random().toString(36).slice(2,16);modal('Generate demo API key',`<div class="notice">This is a disposable demo identifier, not a secure production secret. It will not be stored as a secret.</div><div class="field" style="margin-top:14px"><label>Demo key</label><input class="input" readonly value="${demo}"></div><p>For production, generate and store key material only on the backend and reveal the secret once.</p>`,'<button class="btn" data-close-modal>Done</button>')}

function renderCreators(){
 let list=[...state.creators];
 shell(`${pageHead('Ecosystem','Creator network','Discover builders, designers and operators across your ecosystem.','<input id="creatorSearch" class="input" placeholder="Search creators…" style="width:210px">')}
 <div class="actions" style="margin-bottom:14px"><select id="creatorSort" class="select" style="width:160px"><option value="followers">Most followed</option><option value="projects">Most projects</option><option value="likes">Most liked</option></select><select id="skillFilter" class="select" style="width:150px"><option value="all">All skills</option><option>Roblox</option><option>Design</option><option>APIs</option><option>Community</option></select></div><div class="creatorgrid" id="creatorGrid"></div>`);
 const draw=()=>{const q=document.querySelector('#creatorSearch').value.toLowerCase(),skill=document.querySelector('#skillFilter').value,sort=document.querySelector('#creatorSort').value;list=state.creators.filter(c=>(c.name+' '+c.handle+' '+c.bio+' '+c.skills.join(' ')).toLowerCase().includes(q)&&(skill==='all'||c.skills.includes(skill))).sort((a,b)=>b[sort]-a[sort]);document.querySelector('#creatorGrid').innerHTML=list.map(c=>`<div class="card"><div class="creator"><div class="bigavatar">${initials(c.name)}</div><div style="flex:1"><h3>${esc(c.name)}</h3><div class="muted tiny">@${esc(c.handle)} · ${c.followers.toLocaleString()} followers</div></div></div><p class="muted tiny" style="line-height:1.55">${esc(c.bio)}</p><div class="skills">${c.skills.map(s=>`<span class="badge">${esc(s)}</span>`).join('')}</div><div class="actions" style="margin-top:13px"><button class="btn small" data-follow="${c.id}">${c.following?'Following':'Follow'}</button><button class="btn small" data-like="${c.id}">♥ ${c.likes}</button><button class="btn small" data-view-creator="${c.id}">View</button></div></div>`).join('')||'<div class="empty"><strong>No creators found</strong>Try another filter.</div>';document.querySelectorAll('[data-follow]').forEach(b=>b.addEventListener('click',()=>{const c=state.creators.find(x=>x.id===b.dataset.follow);c.following=!c.following;save();draw();toast(c.following?`Following ${c.name}`:`Unfollowed ${c.name}`)}));document.querySelectorAll('[data-like]').forEach(b=>b.addEventListener('click',()=>{const c=state.creators.find(x=>x.id===b.dataset.like);c.likes++;save();draw();toast('Creator liked')}));document.querySelectorAll('[data-view-creator]').forEach(b=>b.addEventListener('click',()=>creatorModal(b.dataset.viewCreator)))};document.querySelector('#creatorSearch').addEventListener('input',draw);document.querySelector('#skillFilter').addEventListener('change',draw);document.querySelector('#creatorSort').addEventListener('change',draw);draw();
}
function creatorModal(id){const c=state.creators.find(x=>x.id===id);modal(c.name,`<div class="creator"><div class="bigavatar">${initials(c.name)}</div><div><h3>@${esc(c.handle)}</h3><p class="muted tiny">${esc(c.bio)}</p></div></div><div class="tabs" style="margin-top:15px"><button class="tab active">Overview</button><button class="tab">Projects (${c.projects})</button><button class="tab">Skills</button><button class="tab">Activity</button><button class="tab">Links</button></div><p class="muted tiny">Editable profile mode is available from the Profile page for the local demo user.</p>`,'<button class="btn" data-close-modal>Close</button>')}

function renderModeration(){
 shell(`${pageHead('Management','Moderation','Review reports, apply actions and keep an auditable trail.','<button class="btn" data-export-audit>Export logs</button>')}
 <div class="grid g4">${metric('Open reports','12','2.1%')}${metric('Warnings','37','5.4%')}${metric('Restrictions','8','1.7%')}${metric('Resolved today','24','12.2%')}</div>
 <div class="grid g2 section"><div class="card"><div class="panelhead"><h2>Reports</h2><span>Action changes local state</span></div><div class="tablewrap"><table class="table"><thead><tr><th>Target</th><th>Report</th><th>Status</th><th>Moderator</th><th>Actions</th></tr></thead><tbody>${state.moderation.map(r=>`<tr><td>${esc(r.target)}</td><td>${esc(r.action)}</td><td><span class="badge ${r.status==='Open'?'danger':r.status==='Review'?'warn':'success'}">${r.status}</span></td><td>${esc(r.moderator)}</td><td><div class="actions"><button class="btn small" data-mod="Warn" data-id="${r.id}">Warn</button><button class="btn small" data-mod="Restrict" data-id="${r.id}">Restrict</button><button class="btn small danger" data-mod="Remove" data-id="${r.id}">Remove</button><button class="btn small" data-mod="Dismiss" data-id="${r.id}">Dismiss</button></div></td></tr>`).join('')}</tbody></table></div></div><div class="card"><div class="panelhead"><h2>Controls</h2><span>Current configuration</span></div>${[['Word filters','Enabled'],['Spam controls','Strict'],['Link protection','Enabled'],['Auto restrictions','Moderate']].map(x=>`<div class="command"><span>${x[0]}</span><span class="badge success">${x[1]}</span></div>`).join('')}</div></div>
 <div class="card section" id="audit"><div class="panelhead"><h2>Audit logs</h2><div class="actions"><input id="auditSearch" class="input" placeholder="Search logs…" style="width:170px"><select id="auditFilter" class="select" style="width:140px"><option>All actions</option><option>Warned</option><option>Dismissed report</option><option>Opened report</option></select></div></div><div class="tablewrap"><table class="table"><thead><tr><th>Timestamp</th><th>Moderator</th><th>Action</th><th>Target</th><th>Metadata</th></tr></thead><tbody id="auditRows"></tbody></table></div></div>`);
 document.querySelectorAll('[data-mod]').forEach(b=>b.addEventListener('click',()=>moderate(b.dataset.id,b.dataset.mod)));renderAudit();document.querySelector('#auditSearch').addEventListener('input',renderAudit);document.querySelector('#auditFilter').addEventListener('change',renderAudit);document.querySelector('[data-export-audit]').addEventListener('click',()=>downloadCSV('audit-logs.csv',state.audit));
}
function moderate(id,action){const r=state.moderation.find(x=>x.id===id);r.status=action==='Dismiss'?'Resolved':'Review';r.moderator=state.user.name;state.audit.unshift({time:new Date().toLocaleString(),moderator:state.user.name,action:action==='Dismiss'?'Dismissed report':`${action}ed`,target:r.target,metadata:`report:${id}`});save();toast(`${action} action recorded`);renderModeration()}
function renderAudit(){const q=(document.querySelector('#auditSearch')?.value||'').toLowerCase(),f=document.querySelector('#auditFilter')?.value||'All actions';const el=document.querySelector('#auditRows');if(!el)return;el.innerHTML=state.audit.filter(x=>(x.moderator+' '+x.action+' '+x.target+' '+x.metadata).toLowerCase().includes(q)&&(f==='All actions'||x.action===f)).map(x=>`<tr><td>${esc(x.time)}</td><td>${esc(x.moderator)}</td><td>${esc(x.action)}</td><td>${esc(x.target)}</td><td>${esc(x.metadata)}</td></tr>`).join('')}

function renderNotifications(){
 shell(`${pageHead('Management','Notification center','Mentions, messages, projects, moderation and security alerts.','<button class="btn" data-mark-all>Mark all read</button>')}
 <div class="actions" style="margin-bottom:14px"><button class="btn small active" data-notif-filter="all">All</button><button class="btn small" data-notif-filter="unread">Unread</button><button class="btn small" data-notif-filter="Security">Security</button><button class="btn small" data-notif-filter="Project">Projects</button></div><div class="grid g2" id="notifGrid"></div>`);
 let filter='all';const draw=()=>{let n=state.notifications.filter(x=>filter==='all'||(filter==='unread'?!x.read:x.type===filter));document.querySelector('#notifGrid').innerHTML=n.map(x=>`<div class="card" style="opacity:${x.read?.65:1}"><div class="panelhead"><h2>${esc(x.title)}</h2><span class="badge ${x.read?'':'success'}">${x.read?'Read':'Unread'}</span></div><p class="muted tiny">${esc(x.body)}</p><div style="display:flex;justify-content:space-between;align-items:center"><span class="muted tiny">${esc(x.type)} · ${esc(x.time)}</span><div class="actions">${!x.read?`<button class="btn small" data-read="${x.id}">Mark read</button>`:''}<button class="btn small danger" data-del-notif="${x.id}">Delete</button></div></div></div>`).join('')||'<div class="empty"><strong>No notifications</strong>You are all caught up.</div>';document.querySelectorAll('[data-read]').forEach(b=>b.addEventListener('click',()=>{state.notifications.find(x=>x.id===b.dataset.read).read=true;save();draw()}));document.querySelectorAll('[data-del-notif]').forEach(b=>b.addEventListener('click',()=>{state.notifications=state.notifications.filter(x=>x.id!==b.dataset.delNotif);save();draw()}))};draw();document.querySelectorAll('[data-notif-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.notifFilter;draw()}));document.querySelector('[data-mark-all]').addEventListener('click',()=>{state.notifications.forEach(x=>x.read=true);save();draw();toast('All notifications marked as read')});
}

function renderSettings(){
 shell(`${pageHead('Account','Settings','Persisted preferences for this browser demo.','<button class="btn primary" id="saveSettings">Save changes</button>')}
 <div class="grid g2"><div class="card"><h3>Account</h3><div class="section"><div class="field"><label>Username</label><input class="input" id="setName" value="${esc(state.user.name)}"></div><div class="field"><label>Email</label><input class="input" id="setEmail" type="email" value="${esc(state.user.email)}"></div></div></div>
 <div class="card"><h3>Appearance</h3><div class="section"><div class="field"><label>Theme</label><select class="select" id="setTheme"><option value="dark">Dark</option><option value="light">Light</option></select></div><div class="field"><label>Accent</label><select class="select" id="setAccent"><option value="violet">Violet</option><option value="teal">Teal</option></select></div><label style="display:flex;gap:9px;align-items:center"><input id="setCompact" type="checkbox"> Compact mode</label><label style="display:flex;gap:9px;align-items:center;margin-top:12px"><input id="setMotion" type="checkbox"> Reduced motion</label></div></div>
 <div class="card"><h3>Notifications</h3><div class="section">${[['mentions','Mentions'],['messages','Messages'],['projects','Projects'],['security','Security']].map(x=>`<label style="display:flex;gap:9px;align-items:center;margin:12px 0"><input type="checkbox" id="set_${x[0]}"> ${x[1]}</label>`).join('')}</div></div>
 <div class="card"><h3>Security architecture</h3><div class="section"><div class="notice">2FA, password handling and session revocation are UI architecture only in this static build. Passwords, tokens and API secrets are never stored in localStorage.</div><p class="muted tiny" style="margin-top:12px">Connect the form to a backend identity provider before using this in production.</p></div></div></div>`);
 document.querySelector('#setTheme').value=state.settings.theme;document.querySelector('#setAccent').value=state.settings.accent;document.querySelector('#setCompact').checked=state.settings.compact;document.querySelector('#setMotion').checked=state.settings.reducedMotion;['mentions','messages','projects','security'].forEach(k=>document.querySelector('#set_'+k).checked=state.settings[k]);
 document.querySelector('#saveSettings').addEventListener('click',()=>{state.user.name=document.querySelector('#setName').value.trim()||'Dayem';state.user.email=document.querySelector('#setEmail').value.trim()||'demo@nexus.local';state.settings.theme=document.querySelector('#setTheme').value;state.settings.accent=document.querySelector('#setAccent').value;state.settings.compact=document.querySelector('#setCompact').checked;state.settings.reducedMotion=document.querySelector('#setMotion').checked;['mentions','messages','projects','security'].forEach(k=>state.settings[k]=document.querySelector('#set_'+k).checked);save();applyTheme();toast('Settings saved')});
}
function applyTheme(){document.documentElement.dataset.theme=state.settings.theme;document.documentElement.style.setProperty('--accent',state.settings.accent==='teal'?'#5ee7d2':'#8b7cff');document.documentElement.style.setProperty('--accent2',state.settings.accent==='teal'?'#8b7cff':'#5ee7d2');document.documentElement.style.setProperty('--bg',state.settings.theme==='light'?'#f2f4f8':'#080a10');document.documentElement.style.setProperty('--text',state.settings.theme==='light'?'#131721':'#f4f7fb');document.documentElement.style.setProperty('--muted',state.settings.theme==='light'?'#596273':'#8e98aa');if(state.settings.compact)document.documentElement.style.setProperty('--r','11px');}
function renderProfile(){
 shell(`${pageHead('Account','Profile','Your creator and workspace identity.','<button class="btn primary" id="editProfile">Edit profile</button>')}
 <div class="profilecover"></div><div class="profileinfo"><div class="bigavatar">${initials(state.user.name)}</div><div><h2 style="margin:0">${esc(state.user.name)}</h2><div class="muted tiny">${esc(state.user.email)} · ${esc(state.user.role)}</div></div></div>
 <div class="grid g3 section"><div class="card"><h3>Overview</h3><p class="muted tiny">Product-focused workspace member with community, project and developer access.</p></div><div class="card"><h3>Projects</h3><p class="muted tiny">${state.projects.length} active workspace projects.</p></div><div class="card"><h3>Skills</h3><div class="skills"><span class="badge">Community Ops</span><span class="badge">Product</span><span class="badge">Developer</span></div></div></div>
 <div class="card section"><div class="panelhead"><h2>Activity</h2><span>Local demo</span></div><div class="commands">${state.audit.slice(0,5).map(x=>`<div class="command"><span>${esc(x.action)} · ${esc(x.target)}</span><span class="muted">${esc(x.time)}</span></div>`).join('')}</div></div>`);
 document.querySelector('#editProfile').addEventListener('click',()=>modal('Edit profile',`<div class="field"><label>Display name *</label><input class="input" id="profileName" maxlength="40" value="${esc(state.user.name)}"></div><div class="field"><label>Email *</label><input class="input" id="profileEmail" type="email" value="${esc(state.user.email)}"></div>`,'<button class="btn" data-close-modal>Cancel</button><button class="btn primary" id="saveProfile">Save</button>'));document.querySelector('#saveProfile')?.addEventListener('click',()=>{const n=document.querySelector('#profileName').value.trim(),e=document.querySelector('#profileEmail').value.trim();if(n.length<2||!/^[^@]+@[^@]+\\.[^@]+$/.test(e)){toast('Enter a valid name and email.','error');return}state.user.name=n;state.user.email=e;save();closeModal();renderProfile();toast('Profile updated')})
}
function renderDevices(){
 shell(`${pageHead('Account','Devices & Sessions','Approximate/demo session metadata only — real session security belongs on the backend.','<button class="btn danger" data-signout-all>Sign out all others</button>')}
 <div class="grid g2"><div class="card"><div class="panelhead"><h2>Current session</h2><span class="badge success">Active</span></div><div class="command"><span>Desktop · Chrome</span><span class="muted">Windows</span></div><div class="command"><span>Location</span><span class="muted">Approximate demo metadata</span></div><div class="command"><span>Last active</span><span class="muted">Just now</span></div></div><div class="card"><div class="panelhead"><h2>Other sessions</h2><span>2 devices</span></div><div class="command"><span>Mobile · Chrome</span><span class="muted">Yesterday</span><button class="btn small" data-signout-device>Sign out</button></div><div class="command"><span>Desktop · Edge</span><span class="muted">3 days ago</span><button class="btn small" data-signout-device>Sign out</button></div></div></div>`);
 document.querySelector('[data-signout-all]').addEventListener('click',()=>toast('Demo sessions marked for sign-out; no real server session was revoked.','info'));document.querySelectorAll('[data-signout-device]').forEach(b=>b.addEventListener('click',()=>{b.textContent='Signed out';b.disabled=true;toast('Demo session removed')}));
}

function downloadCSV(filename,rows){
 const arr=Array.isArray(rows)?rows:[];if(!arr.length){toast('Nothing to export.','warning');return}
 const cols=[...new Set(arr.flatMap(r=>Object.keys(r)))];const csv=[cols.join(','),...arr.map(r=>cols.map(c=>`"${String(r[c]??'').replace(/"/g,'""')}"`).join(','))].join('\\n');
 const blob=new Blob([csv],{type:'text/csv;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=filename;a.click();URL.revokeObjectURL(url);toast(`${filename} exported`);
}

function initDeviceDetection(){
 const update=()=>{const w=innerWidth,t=matchMedia('(pointer:coarse)').matches;document.documentElement.dataset.device=w<821?'mobile':w<1101?'tablet':'desktop';document.documentElement.dataset.touch=t?'touch':'pointer';document.documentElement.dataset.orientation=innerHeight>innerWidth?'portrait':'landscape';};
 update();addEventListener('resize',update);
}
function init(){
 applyTheme();initDeviceDetection();
 const p=getPage();
 if(p==='overview')renderOverview();else if(p==='dashboard')renderDashboard();else if(p==='communities')renderCommunities();else if(p==='messages')renderMessages();else if(p==='projects')renderProjects();else if(p==='analytics')renderAnalytics();else if(p==='developers')renderDevelopers();else if(p==='creators')renderCreators();else if(p==='moderation')renderModeration();else if(p==='notifications')renderNotifications();else if(p==='settings')renderSettings();else if(p==='profile')renderProfile();else if(p==='devices')renderDevices();else renderOverview();
}
document.addEventListener('click',e=>{if(e.target.matches('[data-close-modal]'))closeModal()});
document.addEventListener('DOMContentLoaded',init);
})();

if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('./service-worker.js').catch(()=>{});
