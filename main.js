var main = {
  $: {},
  data: null,
  loading: true,
  start: function () {
    main.$ = {
      loader: document.querySelector (".loader"),
      post: document.querySelector (".post"),
      img: document.querySelector (".post_img"),
      news: document.querySelector (".post_news"),
      stamp: document.querySelector (".post_stamp"),
      newer: document.querySelector (".newer"),
      older: document.querySelector (".older")
    }
    xhr.send ("posts.json", function (err, response) {
      if (err) return console.log ("error loading data")
      main.data = JSON.parse (response).posts
      if (main.data.length < 1) return console.log ("no data")
      main.load (window.location.hash.replace ("#", ""))
    })
  },
  load: function (id) {
    var idlist = main.data.map (function (x) {
      return x.id
    }),
        index = idlist.indexOf (id) >= 0 ? idlist.indexOf (id) : 0,
        post = main.data[index]
    // update html
    main.$.img.setAttribute ("src", post.img)
    main.$.news.innerHTML = "<br/>" + post.news.join ("<br/>")
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
