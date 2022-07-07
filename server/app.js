const express = require("express");
const path = require('path');
const app = express();

//Not sure why
app.use(express.static(path.join(__dirname, '../client')));

// The Root will send a generic static html welcome page
app.get("/",  (req,res) => {
	console.log("Accessing Root")
	res.sendFile(path.join(__dirname, '../client/public', 'index.html'));
	
})

// /api will handle the sending of data from backend to frontend
app.get("/api", (req, res) => {
	console.log("Accessing API")
	//fetch
	obj = {
		message: "Hello from server!"
	}
	res.json({ message: "Hello from server!" });
	
});

app.get("/react",  (req,res) => {
	console.log("Accessing React")
	res.sendFile(path.join(__dirname, '../client/public', 'react.html'));
	
})

//Start the server on specefied port
app.listen(3001, () => {
	console.log(`Server listening on 3001`);
});