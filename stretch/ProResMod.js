const db = require("../data/db-config");

module.exports = {
    loadProjects,
    loadProRes
}; 

function loadProjects() {
	return db("projects");
}

function loadProRes(id){
    return db("projects")
        .join("resources", "projects.id", "resources.project_id")
        .select("resources.name", "projects.name as project name")
        .where({project_id:id})
}
