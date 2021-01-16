var appRouter = function (app) {
    app.get("/", function (req, res) {
        res.status(200).send("user-services API testing");
    });
};

module.exports = appRouter;