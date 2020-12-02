//@desc view About Page
//@ROUTE GET /about
//@access Public

exports.about = (req, res, next) => {
  res.render('../views/templates/about')
};
