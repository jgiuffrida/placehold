(function(a){a.fn.placehold=function(){var b=function(){var a=document.createElement("input");return"placeholder"in a}();return this.each(function(){if(!b){var c=a(this),d=a("<span />"),e=a("<span />").text(c.attr("placeholder")),f=this,g=c.attr("value");d.addClass("placeholder").css("position","relative"),e.css({position:"absolute",top:"0",left:"0","z-index":1}),c.wrap(d),c.parent().append(e),e.on("click",function(){c.focus()}),c.on("blur",function(){g||e.show()}),c.on("focus",function(){e.hide()}),g&&e.hide()}})}})(jQuery)
