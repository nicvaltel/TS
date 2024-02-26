"use strict";
let link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";
// if(link instanceof HTMLAnchorElement){
//     link.textContent = "Mozilla Developer Network";
//     link.href="https://developer.mozilla.org";
// }
let sect = document.querySelector("section111");
let para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride";
sect === null || sect === void 0 ? void 0 : sect.appendChild(para);
let text = document.createTextNode(" — the premier source for web development knowledge.");
let linkPara = document.querySelector("p");
linkPara === null || linkPara === void 0 ? void 0 : linkPara.appendChild(text);
sect === null || sect === void 0 ? void 0 : sect.appendChild(linkPara);
sect === null || sect === void 0 ? void 0 : sect.removeChild(linkPara);
// para.setAttribute("class","highlight");
para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";
