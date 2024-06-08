const express = require("express");
const router = express.Router();


router.get("/", (request, response, next) => {

	return next(new Error("Error on purpose from root route"))

	response.json({
		message:"Hello world!"
	});
});

router.post("/", (request, response, next) => {

	response.json({
		message:"Received data!",
		data: request.body
	});

});

router.get("/headercheck", (request, response, next) => {

	let authData = request.headers.authorization;



	if (!authData) {
		return next(new Error("No auth data provided!"));
	}

	response.json({
		message:"Auth data received!",
		data: authData
	})

})


module.exports = router;