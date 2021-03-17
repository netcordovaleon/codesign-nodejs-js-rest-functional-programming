const productResponse = () => {

};

const productRequest = (request) => {
    return {
        name : request.body.name,
        stock: request.body.stock,
        price: request.body.price
    }
};

module.exports = {
    productRequest,
    productResponse
};