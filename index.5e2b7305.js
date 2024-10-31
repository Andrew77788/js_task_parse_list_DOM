var r,e,t=Array.from(document.querySelectorAll("ul li"));r=t=t.sort(function(r,e){var t=parseFloat(r.getAttribute("data-salary").replace(/[^\d.-]/g,""));return parseFloat(e.getAttribute("data-salary").replace(/[^\d.-]/g,""))-t}),(e=document.querySelector("ul")).innerHTML="",r.forEach(function(r){e.appendChild(r)});
//# sourceMappingURL=index.5e2b7305.js.map
