//@desc view Service Page
//@ROUTE GET /service
//@access Public

exports.service = (req, res, next) => {
  res.render('../views/templates/service')
};
