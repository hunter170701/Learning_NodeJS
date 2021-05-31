class NewsController {

  // TODO: [GET] /news
  index(req, res) {
    res.render("news");
  }

  // TODO: [GET] /news/:slug
  show(req, res) {
      res.send('News Details')
  }

}

module.exports = new NewsController();
