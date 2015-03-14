function setvalues(){
  getip();
}

/*
 * Set the uid fingerprint into the DOM elements that need to know about it.
 * Do not call before the form loads, or the selectors won't find anything.
 */
var inputIpBinding = new Shiny.InputBinding();
$.extend(inputIpBinding, {
  find: function(scope) {
    return $.find('.ipaddr');
  },
  getValue: function(el) {
    return $(el).val();
  },
  setValue: function(el, values) {
    $(el).attr("value", getip())
    $(el).trigger("change");
  },
  subscribe: function(el, callback) {
    $(el).on("change.inputIpBinding", function(e) {
      callback();
    });
  },
  unsubscribe: function(el) {
    $(el).off(".inputIpBinding");
  }
});
Shiny.inputBindings.register(inputIpBinding);

function getip() {
ip = null;
$.getJSON("http://jsonip.com?callback=?",
  function(data){
       ip = data.ip;
       callback(ip);
       $(".ipaddr").attr("value", ip);
       $(".ipaddr").trigger("change");
 //return ip address correctly
  });
//alert(ip); //undefined or null
}
function callback(tempip)
{
ip=tempip;
// alert(ip); //undefined or null
}
