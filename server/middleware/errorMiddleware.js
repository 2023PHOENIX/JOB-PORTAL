

const errorMiddleWare = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "internal server error";
    const extraDetails = err.extraDetails || "Error from backend";
    
    return res.status(status).send({
        message,
        extraDetails
    })
}
module.exports = errorMiddleWare;