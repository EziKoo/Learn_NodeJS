function render(res, data, type = "") {
  res.writeHead(200, {"Content-Type": `${type ? type : "application/json"};chaset=utf-8`})
  res.write(data)
  res.end()
}

const apiRoute = {
  "/api/login": (res) => {
    render(res, `{ok:1}`)
  }
}

module.exports = apiRoute