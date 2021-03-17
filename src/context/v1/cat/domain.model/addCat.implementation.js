const validate = async (catByNameIO, newCat) => {
	const cat = await catByNameIO(newCat.name);
	if (!cat) {
		return;
	}

	throw {
		code: 'catExits',
		message: `Cat with name ${newCat.name} alrady existe`
	};
};

const formatCat = newCat => {
	return {
		name: newCat.name,
		createdAt: new Date().toISOString()
	};
};

export const addCat = async (addCatIO, catByNameIO, cat) => {
	return validate(catByNameIO, cat)
		.then(() => formatCat(cat))
		.then(catFormated => addCatIO(catFormated));
};
