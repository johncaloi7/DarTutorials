//@desc view landing page or homepage
//@ROUTE GET /home
//@access Public

exports.home = (req, res, next) => {
  res.render('../views/templates/home')
};
