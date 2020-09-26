const db = require("../data/db-config");

module.exports = {
    loadProjects,
	addProject,
	loadProRes
}

function loadProjects() {
	return db("projects");
}

function addProject(project) {
	return db("projects")
		.insert(project); 
}

function loadProRes(id){
    return db("projects")
        .join("resources", "projects.id", "resources.project_id")
        .select("resources.name", "projects.name as project name")
        .where({project_id:id})
}