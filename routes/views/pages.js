var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	//set locals
	locals.section = "sitemap";

	//load
	view.query('pages', keystone.list('Page').model.find());

	//Render View
	view.render('pages');
}
