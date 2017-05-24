var keystone = require('keystone');
var Types = keystone.Field.Types;

var Page = new keystone.List('Page', {
	map: {name: 'title'},
	singular: 'Page',
	plural: 'Pages',
	autokey: {path: 'slug', from: 'title', unique: true}
});

	
	
Page.add({
	title: { type: String, required: true},
	permalink: {type: String},
	body: {type: {type: Types.Html, wysiwyg: true, height: 500}},
	published: {type: Boolean},
	image: {type: Types.CloudinaryImage},
	publishedDate: {type: Date, default: Date.now}
});


Page.register();
