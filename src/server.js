
const express = require("express");
const app = express();


const port = process.env.PORT || 3000;

app.use(express.json());

const apiV2 = require("./v2/index.js");
app.use("/v2", apiV2);

app.use((error, request, response, next) => {
	response.json({
		message:"Error occured!",
		error: error
	});
});


app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

module.exports = {app}