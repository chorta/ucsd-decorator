$(document).ready(function(){function a(){f.width()>=c&&(b.hasClass("active")&&b.removeClass("active"),e.height()>d?b.addClass("collapse-nav"):b.removeClass("collapse-nav")),f.width()<c&&b.hasClass("collapse-nav")&&b.removeClass("collapse-nav")}var b=$("body"),c=768,d=38,e=$("#tdr_nav"),f=$(window),g=e.find(".tdr_search"),h=$(".tdr_nav_list"),i=!1;h.find("> li").length>0&&(i=!0),i?h.superfish({cssArrows:!1}):($("#tdr_title_menu_link").attr("style","display: none"),$("#tdr_title_content").addClass("noMenu")),$("#tdr_search_toggle").click(function(){g.toggleClass("show")}),$(".navbar-toggle").on("click",function(){b.toggleClass("active")}),FastClick.attach(document.body),f.on("ready orientationchange resize",a)});