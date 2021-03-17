const constants = require('../helper/constants');

const response = (responseType, message) => {
    return { type: responseType, message: message }
};

const successResponse = () => {
    return response(constants.responseType.success, constants.genericMessage.success);
};

const errorResponse = () => {
    return response(constants.responseType.error, constants.genericMessage.error);
};

module.exports = {
    successResponse,
    errorResponse
};