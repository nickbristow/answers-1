var Mustache="undefined"!=typeof module&&module.exports||{};!function(t){function e(t){return b.test(t)}function i(t){return String(t).replace(/&(?!\w+;)|[<>"']/g,function(t){return w[t]||t})}function n(t,e,i,n){n=n||"<template>";for(var s,o=e.split("\n"),r=Math.max(i-3,0),a=Math.min(o.length,i+3),l=o.slice(r,a),h=0,c=l.length;c>h;++h)s=h+r+1,l[h]=(s===i?" >> ":"    ")+l[h];return t.template=e,t.line=i,t.file=n,t.message=[n+":"+i,l.join("\n"),"",t.message].join("\n"),t}function s(t,e,i){if("."===t)return e[e.length-1];for(var n,s,o,r,a=t.split("."),l=a.length-1,h=a[l],c=e.length;c;){for(r=e.slice(0),s=e[--c],o=0;l>o&&(s=s[a[o++]],null!=s);)r.push(s);if(s&&"object"==typeof s&&h in s){n=s[h];break}}return"function"==typeof n&&(n=n.call(r[r.length-1])),null==n?i:n}function o(t,e,i,n){var o="",r=s(t,e);if(n)(null==r||r===!1||u(r)&&0===r.length)&&(o+=i());else if(u(r))m(r,function(t){e.push(t),o+=i(),e.pop()});else if("object"==typeof r)e.push(r),o+=i(),e.pop();else if("function"==typeof r){var a=e[e.length-1],l=function(t){return c(t,a)};o+=r.call(a,i(),l)||""}else r&&(o+=i());return o}function r(i,s){s=s||{};for(var o,r,a,l,h,c=s.tags||t.tags,u=c[0],d=c[c.length-1],p=['var buffer = "";',"\nvar line = 1;","\ntry {",'\nbuffer += "'],f=[],g=!1,m=!1,b=function(){if(!g||m||s.space)f=[];else for(;f.length;)p.splice(f.pop(),1);g=!1,m=!1},y=[],_=function(t){c=v(t).split(/\s+/),r=c[0],a=c[c.length-1]},w=function(t){p.push('";',o,'\nvar partial = partials["'+v(t)+'"];',"\nif (partial) {","\n  buffer += render(partial,stack[stack.length - 1],partials);","\n}",'\nbuffer += "')},x=function(t,e){var r=v(t);if(""===r)throw n(new Error("Section name may not be empty"),i,S,s.file);y.push({name:r,inverted:e}),p.push('";',o,'\nvar name = "'+r+'";',"\nvar callback = (function () {","\n  return function () {",'\n    var buffer = "";','\nbuffer += "')},k=function(t){x(t,!0)},C=function(t){var e=v(t),o=0!=y.length&&y[y.length-1].name;if(!o||e!=o)throw n(new Error('Section named "'+e+'" was never opened'),i,S,s.file);var r=y.pop();p.push('";',"\n    return buffer;","\n  };","\n})();"),p.push(r.inverted?"\nbuffer += renderSection(name,stack,callback,true);":"\nbuffer += renderSection(name,stack,callback);"),p.push('\nbuffer += "')},T=function(t){p.push('";',o,'\nbuffer += lookup("'+v(t)+'",stack,"");','\nbuffer += "')},D=function(t){p.push('";',o,'\nbuffer += escapeHTML(lookup("'+v(t)+'",stack,""));','\nbuffer += "')},S=1,E=0,I=i.length;I>E;++E)if(i.slice(E,E+u.length)===u){switch(E+=u.length,l=i.substr(E,1),o="\nline = "+S+";",r=u,a=d,g=!0,l){case"!":E++,h=null;break;case"=":E++,d="="+d,h=_;break;case">":E++,h=w;break;case"#":E++,h=x;break;case"^":E++,h=k;break;case"/":E++,h=C;break;case"{":d="}"+d;case"&":E++,m=!0,h=T;break;default:m=!0,h=D}var M=i.indexOf(d,E);if(-1===M)throw n(new Error('Tag "'+u+'" was not closed properly'),i,S,s.file);var P=i.substring(E,M);h&&h(P);for(var N=0;~(N=P.indexOf("\n",N));)S++,N++;E=M+d.length-1,u=r,d=a}else switch(l=i.substr(E,1)){case'"':case"\\":m=!0,p.push("\\"+l);break;case"\r":break;case"\n":f.push(p.length),p.push("\\n"),b(),S++;break;default:e(l)?f.push(p.length):m=!0,p.push(l)}if(0!=y.length)throw n(new Error('Section "'+y[y.length-1].name+'" was not closed properly'),i,S,s.file);b(),p.push('";',"\nreturn buffer;","\n} catch (e) { throw {error: e, line: line}; }");var A=p.join("").replace(/buffer \+= "";\n/g,"");return s.debug&&("undefined"!=typeof console&&console.log?console.log(A):"function"==typeof print&&print(A)),A}function a(t,e){var a="view,partials,stack,lookup,escapeHTML,renderSection,render",l=r(t,e),h=new Function(a,l);return function(r,a){a=a||{};var l=[r];try{return h(r,a,l,s,i,o,c)}catch(u){throw n(u.error,t,u.line,e.file)}}}function l(){x={}}function h(t,e){return e=e||{},e.cache!==!1?(x[t]||(x[t]=a(t,e)),x[t]):a(t,e)}function c(t,e,i){return h(t)(e,i)}t.name="mustache.js",t.version="0.5.0-dev",t.tags=["{{","}}"],t.parse=r,t.compile=h,t.render=c,t.clearCache=l,t.to_html=function(t,e,i,n){var s=c(t,e,i);return"function"!=typeof n?s:void n(s)};var u,d=Object.prototype.toString,p=Array.isArray,f=Array.prototype.forEach,g=String.prototype.trim;u=p?p:function(t){return"[object Array]"===d.call(t)};var m;m=f?function(t,e,i){return f.call(t,e,i)}:function(t,e,i){for(var n=0,s=t.length;s>n;++n)e.call(i,t[n],n,t)};var v,b=/^\s*$/;if(g)v=function(t){return null==t?"":g.call(t)};else{var y,_;e("\xa0")?(y=/^\s+/,_=/\s+$/):(y=/^[\s\xA0]+/,_=/[\s\xA0]+$/),v=function(t){return null==t?"":String(t).replace(y,"").replace(_,"")}}var w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},x={}}(Mustache);