var express = require('express');
var path = require('path');
var app = express();

module.exports = function (app) {
	// to the home page
	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/index.html'));
	});

	app.get('/data-engineer', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/dataengineer.html'));
	});

	app.get('/quality-assurance', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/qualityassurance.html'));
	});

	app.get('/media-planning', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/media-planning.html'));
	});

	app.get('/customer-experience', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/customerexperience.html'));
	});

	app.get('/public-relations-advertising', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/publicrelations.html'));
	});

	app.get('/innovation', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/innovation.html'));
	});

	app.get('/insights', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/insights.html'));
	});

	app.get('/seo', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/seo.html'));
	});

	app.get('/promotion', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/promotion.html'));
	});

	app.get('/digital', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/digital.html'));
	});

	app.get('/shopper', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/shopper.html'));
	});

	app.get('/brand', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/brandmanagement.html'));
	});

	app.get('/accountexec', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/accountexecutive.html'));
	});

	app.get('/creative', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/creative.html'));
	});

	app.get('/datascientist', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/datascientist.html'));
	});

	app.get('/engineer', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/engineer.html'));
	});

	app.get('/project', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/project.html'));
	});

	app.get('/category', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/category.html'));
	});

	app.get('/customer', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/customer.html'));
	});

	app.get('/sales', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/sales.html'));
	});

	app.get('/merchandising', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/merchandising.html'));
	});

	// gotta catch 'em all
	app.get('*', function (req, res) {
		res.redirect('/');
	});
};