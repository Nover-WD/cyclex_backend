//error 404
const notFound = (req, res, next) => {
    const ERROR = new Error(`${req.originalUrl} endpoint does not exists`);

    res.status(404);
    next(ERROR);
};

//error 500
const serverError = (error, req, res, next) => {
    const STATUSCODE = res.statusCode === 200 ? 500 : res.statusCode;

    res.status(STATUSCODE);
    res.json({
        message: error.message,
        error: error.stack,
    });
};

export { notFound, serverError };

