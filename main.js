window.onload = function (e) {
  var nodes = document.querySelectorAll ("article"),
      ids = []
  for (var i = 0; i < nodes.length; i++)
      ids[i] = nodes[i].getAttribute ("id")
  if (ids.indexOf (window.location.hash.substring (1)) === -1)
    window.location.hash = ids[0]
}
