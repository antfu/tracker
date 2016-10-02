var url_el = document.getElementById('url')
var xpath_el = document.getElementById('xpath')
var text_el = document.getElementById('text')

var data = null;
var handleRequest = function (request, sender, cb) {
  if (request.type === 'element_update') {
    data = request.data;
    url_el.innerHTML = request.data.url || ' '
    xpath_el.innerHTML = request.data.xpath || ' '
    text_el.innerHTML = request.data.text || ' '
  }
}

chrome.runtime.onMessage.addListener(handleRequest)

document.getElementById('cancel').addEventListener("click", function (){
  chrome.runtime.sendMessage({
    type: 'dialog_hide'
  })
});
