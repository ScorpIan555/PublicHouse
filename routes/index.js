// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

/*  This is the home route. It renders the index.mustache page from the views directory.
	Data is rendered using the Mustache templating engine. For more
	information, view here: https://mustache.github.io/#demo */
router.get('/', (req, res) => {

	const env = {
		navLogo: process.env.NAV_LOGO
	}

	const data = {
		cdn: process.env.TURBO_CDN,
		env: env,
		greeting: "Welcome to my restaurant",
		description: "Thai food!!!"
	}
	res.render('index', data)
})


module.exports = router
