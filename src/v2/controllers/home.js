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



module.exports = router;