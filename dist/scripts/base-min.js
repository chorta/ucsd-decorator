function initCopyright(){var a=new Date,b=".footer-copyright-year";$(b).empty(),$(b).append(a.getFullYear())}function initFooter(a){a+=location.pathname;var b=".footer-feedback",c='<a href="';c+=a,c+='" onclick="window.open(\'',c+=a,c+="', 'DYGWYW', 'menubar=0,resizable=1,scrollbars=1,width=450,height=650');\" target=\"DYGWYW\">Feedback</a>",$(b).empty(),$(b).append(c)}function initLogout(a){var b="https://a4.ucsd.edu/tritON/resources/bugscript.jsp?target=https%3A%2F%2Fwww.ucsd.edu&jsoncallback=?";$.getJSON(b,function(b){if(b.eduUcsdActLoggedin){var c=".layout-login .layout-container",d='<span class="login-content">You are logged in | <a href="https://act.ucsd.edu/security/logout?url=';d+=a,d+='">Log Out</a></span>',$(c).empty(),$(c).append(d)}})}!function(){var a=function(){var a=$(".btn-nav")[0],b=$(".navdrawer-container")[0],c=$(".layout-header")[0],g=$(".layout-main")[0],h=$(".layout-footer")[0],i="navbar-is-opened",j="open",k=!1,l=function(){d(),k?(f(b,i),f(c,j),f(g,j),f(h,j),k=!1):(e(b,i),e(c,j),e(g,j),e(h,j),k=!0)};a.addEventListener?a.addEventListener("click",function(a){a.preventDefault(),l()}):a.attachEvent("onclick",function(){l()})},b=function(){var a=$(".navbar-subnav")[0],b=$(".navbar-sublist")[0],c="subnav-is-opened",g="subnav-hover",h=!1,i=function(){h?(f(b,c),h=!h):(e(b,c),h=!h)};a.addEventListener?(a.addEventListener("click",function(a){d()&&a.preventDefault(),a.stopPropagation(),i()}),b.addEventListener("click",function(a){a.stopPropagation()}),a.addEventListener("mouseover",function(b){b.preventDefault(),d()||(e(a,g),h=!h)}),a.addEventListener("mouseout",function(b){b.preventDefault(),d()||(f(a,g),h=!h)})):(a.attachEvent("onclick",function(){i()}),a.attachEvent("onmouseover",function(){d()||(e(a,g),h=!0)}),a.attachEvent("onmouseout",function(){d()||(f(a,g),h=!1)}))},c=function(){var a=$(".search-toggle")[0],b=$(".search-content")[0],c="search-is-open",d=!1,g=function(){d?(f(b,c),f(a,c),d=!1):(e(b,c),e(a,c),d=!0)};a.addEventListener?a.addEventListener("click",function(a){a.preventDefault(),g()}):a.attachEvent("onclick",function(){g()})},d=function(){var a=window.innerWidth,b=960;return b+1>a},e=function(a,b){a&&(a.className=a.className.replace(/\s+$/gi,"")+" "+b)},f=function(a,b){a&&(a.className=a.className.replace(b,""))};a(),b(),c()}(document);