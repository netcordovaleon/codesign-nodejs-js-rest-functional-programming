const catList = require('../domain.model/catList.implementation');

export const catListWorkflow = (catListIO) => {
	return catList(catListIO);
}

module.exports = catListWorkflow;