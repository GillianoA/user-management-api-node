module.exports = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: {
            message: err.message,
            timestamp: new Date().toISOString(),
            path: req.originalUrl
        }
    });
};