const dotenv = require("dotenv");
const exprees = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectToMongoDB } = require("./connection");

const authRoute = require("./routes/auth");
const errorMiddleWare = require("./middleware/errorMiddleware");
const portalRoute = require("./routes/portal");

dotenv.config();

const app = exprees();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); // * help in parsing incoming body request
app.use(bodyParser.json()); // * help in parsing json body request.

// ^ Routes
app.use("/auth", authRoute);
app.use("/portal", portalRoute);

// & help in checking the health of the server.
app.get("/healthz", (req, res, next) => {
    try {
        res.send({
            message: "working fine",
            health: "ok",
            time: Date.now(),
        });
    } catch (e) {
        const error = new Error();
        error.message = e.message;
        error.status = 404;

        next(error);
    }
});

app.use(errorMiddleWare); // & put it in the end of all the routes

app.listen(process.env.PORT, () => {
    connectToMongoDB();
    console.log("working on port ", process.env.PORT);
});
