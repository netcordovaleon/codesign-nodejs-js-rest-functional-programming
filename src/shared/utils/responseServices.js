export const successResponse200 = (res, body) => {
	res.set({
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Max-Age': 86400
	});

	return res.status(200).json(body);
};

export  const errorResponse400 = (res, err) => {
	res.set({
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Max-Age': 86400
	});

	return res.status(400).json(err);
};