const express = require("express");

const pro_res = require("./ProResMod");

const router = express.Router();

router.get("/", (req, res) => {
	pro_res
		.loadProRes()
		.then((pro_res) => res.status(200).json(pro_res))
		.catch((error) => {
			console.log(error.message);
			res.status(500).json({ message: 'Could not load project resource' });
		});
});


module.exports = router; 