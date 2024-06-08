const {app, port} = require("./server.js");

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

