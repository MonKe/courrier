var main = {
  // dom bank
  $: {},
  // parsed json data
  data: null,
  // loading state, gets turned off after fist post display
  loading: true,
  // initial setup
  start: function () {
    // fill up the dom bank
    main.$ = {
      loader: document.querySelector (".loader"),
      post: document.querySelector (".post"),
      img: document.querySelector (".post_img"),
      news: document.querySelector (".post_news"),
      stamp: document.querySelector (".post_stamp"),
      newer: document.querySelector (".newer"),
      older: document.querySelector (".older")
    }
    // async retrieval of the post data
    xhr.send ("posts.json", function (err, response) {
      if (err) return console.log ("error loading data")
      // data is published posts only
      main.data = JSON.parse (response).posts.filter (function (x) {
        return x.flags.indexOf ("draft") === -1
      })
      if (main.data.length < 1) return console.log ("no data")
      // stripping hash char from id before load
      main.load (window.location.hash.replace ("#", ""))
    })
  },
  // load function, called everytime the hash is updated
  load: function (id) {
    var idlist = main.data.map (function (x) {
      return x.id
    }),
        index = idlist.indexOf (id) >= 0 ? idlist.indexOf (id) : 0,
        post = main.data[index]
    // update html
    if (post.flags.indexOf ("text-only") !== -1) main.$.img.setAttribute ("class", "post_img hide")
    else {
      main.$.img.setAttribute ("class", "post_img")
      main.$.img.setAttribute ("src", post.img)
    }
    main.$.news.innerHTML = "&nbsp;<br/>" + post.news.join ("<br/>")
    main.$.stamp.innerHTML = post.stamp
    // reveal the post if hidden
    if (main.loading) {
      main.$.loader.setAttribute ("class", "loader hide")
      main.$.post.setAttribute ("class", "post")
      main.loading = false
    }
    // set up nav
    if (index > 0) {
      main.$.newer.setAttribute ("href", "#" + main.data[index -1].id)
      main.$.newer.setAttribute ("class", "newer")
    } else main.$.newer.setAttribute ("class", "newer hide")
    if (index < main.data.length -1) {
      main.$.older.setAttribute ("href", "#" + main.data[index +1].id)
      main.$.older.setAttribute ("class", "older")
    } else main.$.older.setAttribute ("class", "older hide")
  }
}
