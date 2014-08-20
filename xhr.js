var xhr = {
  busy: false,
  next: function () {
    if (xhr.queue.length > 0)
      xhr.queue.shift ().send (null)
    else xhr.busy = false
  },
  queue: [],
  send: function (pathname, callback) {
    var req = new XMLHttpRequest ()
    req.open ("GET", pathname, true)
    req.onload = (function (event) {
      if (req.readyState === 4) {
        if (req.status === 200)
          callback (null, req.responseText)
        else callback (req.statusText)
      }
      if (xhr.busy) xhr.next ()
    })
    req.onerror = function (event) {
      callback (req.statusText)
      xhr.next ()
    }
    if (xhr.busy)
      xhr.queue.push (req)
    else {
      req.send (null)
      xhr.busy = true
    }
  }
}
