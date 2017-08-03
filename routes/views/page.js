var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	//set locals
	locals.section = "sitemap";
	locals.filters = {
		page: req.params.page,
	}
	locals.data = {
		pages:[],
	}

	//load
	view.on('init', function(next){
		var q = keystone.list('Page').model.findOne({
			slug: locals.filters.page
		});
		
		q.exec(function(err, result){
			locals.data.page = result;
			next(err);
		});
	});

//Render View
	if(req.params.page == 'home'){
		view.render('page', { layout: 'home' });
	}else{
		view.render('page');
	}
}

