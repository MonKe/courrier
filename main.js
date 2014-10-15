window.onload = function (e) {
  var ids = document.querySelectorAll ("article")
    .map (function (x) {
      return x.getAttribute ("id")
    })
  if (ids.indexOf (window.location.hash) === -1)
    window.location.hash = ids[0]
}
