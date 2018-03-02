// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

/*  This is the home route. It renders the index.mustache page from the views directory.
	Data is rendered using the Mustache templating engine. For more
	information, view here: https://mustache.github.io/#demo */
router.get('/', (req, res) => {

	const env = {
		navLogo: process.env.NAV_LOGO,
		facebook: process.env.FACEBOOK,
		// instagram: process.env.INSTAGRAM	,
		yelp: process.env.YELP,
		name: process.env.NAME,
		address: process.env.ADDRESS,
		phone: process.env.PHONE,
		year: process.env.YEAR,
		lunchHours: process.env.LUNCH_HOURS,
		pubHours: process.env.PUB_HOURS
	}

	const data = {
		cdn: process.env.TURBO_CDN,
		env: env,
		greeting: "Welcome to my restaurant",
		description: "Thai food!!!"
	}
	turbo.pageData('home')
	.then(pageConfig => {
		console.log(JSON.stringify(pageConfig))
		data['page'] = pageConfig

		res.render('index', data)
	})
	.catch(err => {
		console.log('error ' + JSON.stringify(err.message) )
	})
})



module.exports = router
