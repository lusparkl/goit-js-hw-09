const t={btnStart:document.querySelector(".btn-start"),btnStop:document.querySelector(".btn-stop"),body:document.querySelector("body")};let e;t.btnStart.addEventListener("click",(function(){t.btnStop.removeAttribute("disabled"),e=setInterval((()=>{t.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.btnStart.setAttribute("disabled","")})),t.btnStop.addEventListener("click",(function(){clearInterval(e),t.body.style.background="#ffffff",t.btnStart.removeAttribute("disabled"),t.btnStop.setAttribute("disabled","")}));
//# sourceMappingURL=01-color-switcher.0cb0eff1.js.map