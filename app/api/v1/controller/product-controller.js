const productModel = require('../model/product-model');
const responseService = require('../../../helper/response-services');
const productDto = require('../dto/product-dto');

const getAll = (req, res, next) => {
    productModel.find({}, (err, items) => {
        if (err)
            next(err);
        else
            res.json(items);
    });
};

const getById = (req, res, next) => {
    productModel.findById({ _id: req.params.id }, (err, items) => {
        if (err)
            next(err);
        else
            res.json(items);
    });
};

const saveProduct = (req, res, next) => {
    productModel.create(productDto.productRequest(req), (err, result) => {
        if (err)
            next(err);
        else
            res.json({ ...responseService.successResponse(), result});
    });
};

module.exports = {
    getAll,
    getById,
    saveProduct
};