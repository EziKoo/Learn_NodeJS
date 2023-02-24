function renderHTML(url){
  switch(url){
    case "/home":
      return `
      <html>
        <b>Home页面</b>
      </html>
      `
    case "/list":
      return `
      <html>
        <b>List页面</b>
      </html>
      `
    case "/api/home":
      return `['home1','home2','home3']`
    case "/api/list":
      return `['list1','list2','list3']`
    default:
      return `
      <html>
        <b>404 not Found</b>
      </html>
      `
  }
}

module.exports = {
  renderHTML
}