const liveServer="/api",localServer="http://localhost:5003",activeServer=location.host.startsWith("localhost")||location.host.startsWith("127.0.0.1")?localServer:"/api";function fetcher(e,t){let n={...t};return n.headers={...t?t.headers:null,"Content-Type":"application/json"},n.credentials="include",t&&t.hasOwnProperty("body")&&(n.method="POST",n.body=JSON.stringify({...t?t.body:null})),fetch(`${activeServer}${e}`,n)}function numFormatter(e){return e<0?0:e>999&&e<1e6?(e/1e3).toFixed(1)+"K":e>1e6?(e/1e6).toFixed(1)+"M":e<1e3?e:void 0}function randomProperty(e){let t=Object.keys(e);return t[Math.floor(t.length*Math.random())]}function capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}function counter(e,t,n,o){const i=document.getElementById(e),s=n-t;if(0==s)return;const a=n>t?1:-1,r=Math.abs(Math.floor(o/s));let l=t,c=setInterval((()=>{l+=a,i.textContent=l,l==n&&clearInterval(c)}),r)}if(null==localStorage.getItem("website")&&localStorage.setItem("website","https://classroom.google.com/"),null==localStorage.getItem("disguise"))localStorage.setItem("disguise","none");else{const e=localStorage.getItem("disguise"),t=document.querySelector("[rel=icon]"),n=document.querySelector("title");"gc"==e?(n.innerHTML="Google Classroom",t.href="./assets/images/disguises/gcicon.png"):"gd"==e?(n.innerHTML="Google Docs",t.href="./assets/images/disguises/gdicon.png"):"canvas"==e?(n.innerHTML="Dashboard",t.href="./assets/images/disguises/canvasicon.jpg"):"g"==e?(n.innerHTML="Google",t.href="./assets/images/disguises/googleicon.png"):"calc"==e?(n.innerHTML="Calculator",t.href="./assets/images/disguises/calculator.png"):"wiki"==e&&(n.innerHTML="Wikipedia",t.href="./assets/images/disguises/wikipedia.png")}var isMac=navigator.platform.toUpperCase().indexOf("MAC")>=0;async function setPoints(){let e=await fetcher("/points/check"),t=await e.text();200==e.status?document.getElementById("pointsDisplay").innerText=t:document.getElementById("pointsDisplay").innerText=0}async function logout(){await fetcher("/auth/logout"),location.reload()}function aboutInBlank(){let e=location.href;maskedWindow=window.open();const t=maskedWindow.document;t.title="";let n=t.createElement("embed");e.includes("https://")||e.includes("http://")?n.src=e:n.src="https://"+e,n.width="100%",n.height="100%",n.style.position="fixed",n.style.top="0",n.style.left="0";let o=document.createElement("script");o.innerHTML='\n        window.onbeforeunload = function() {\n            return "reloading the site will end the aboutblank session. Are you sure you want to continue?";\n        };\n    ',t.body.appendChild(n),t.body.appendChild(o)}void 0!==screen.orientation||isMac||window.open("/mobile/index.php","_self"),window.addEventListener("keydown",(e=>{"`"==e.key?window.open(localStorage.getItem("website"),"_blank"):"["==e.key&&aboutInBlank()}),!1),window.addEventListener("load",(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js"),setPoints()}));