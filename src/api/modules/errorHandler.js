export const apiErrorHandler = (error, req, res, next) => {
    console.log('Error: ', error);
    res.status(500).send('Oops');
};
