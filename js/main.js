(function(d) {
  function App() {
    function clearAndFocus() {
      if(!!this.classList && !!this.classList.contains('active')) return false;
      var title = this;
      var activ = d.querySelectorAll(".accordion-title.active");
      if(!!activ&&!!activ.length) for(var e in activ) {
        if(!activ[e].hasOwnProperty('classList')) continue;
        activ[e].classList.remove("active");
        activ[e].nextElementSibling.classList.remove("active");
      }
      var detail = title.nextElementSibling;
      if(!!detail&&!!detail.classList) {
        title.classList.add("active");
        detail.classList.add("active");
      }
    }
    function initBindings() {
      Array.prototype.slice.call(
        // Create Array from NodeList (accordion titles)
        d.querySelectorAll(".accordion-title")
      ).forEach(function(title){
        // Loop through Each and Attach Handle
        title.addEventListener("click",clearAndFocus,false);
      });
    }
    (function() {
      initBindings();
    })(); // INIT
  }
  var loaded = function() {
    return(["interactive", "complete"].indexOf(document.readyState) !== -1);
  };
  var checkLoad = function() {
    if(!loaded()) setTimeout(checkLoad, 100);
    else App();
  };
  checkLoad();
})(document);