
function errorObjectExist(error) {
    return error?.response?.status;
}

function generateInfoByStatus(error) {
    switch (error.response.status) {
        case 400:
            return error.response.data.message;
        case 401:
            return "You are not authorized";
        case 403:
            return "You have no permission to this resource";
        case 404:
            return error.response.data.message || "This element does not exist"
        case 405:
            return "This http method does not exist"
        case 500:
            return "Error on server side"
        default:
            return "The status code is not recognized";
    }
}

function httpErrorHandler(error) {
    return errorObjectExist(error) ? generateInfoByStatus(error) : "Error not recognized";
}

export default httpErrorHandler;
