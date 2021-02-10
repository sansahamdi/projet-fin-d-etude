const express = require("express");
const connectDB = require("./config/connectDB");

const app = express();
const  http =require("http")
const server=http.createServer(app)
const cors = require("cors");
const socketIo= require("socket.io")(server, {
  cors:true,
  origins:["*"],
 }
 );


const  Message=require('./models/Messages')
const  Posts=require('./models/Posts')
//connect on DataBase
connectDB();






app.use(express.json());
app.use(cors());

app.use("/public", express.static("public"));

app.use("/api", require("./routes/upload"));
app.use("/api/level", require("./routes/level"));
app.use("/api/grade", require("./routes/grade"));
app.use("/api/speciality", require("./routes/speciality"));
app.use("/api/situation", require("./routes/situation"));
app.use("/api/city", require("./routes/city"));
app.use("/api/post", require("./routes/posts"));
app.use("/api/prof", require("./routes/enseignant"));
app.use("/api/prof/me", require("./routes/loginEnsaignant"));
app.use("/api/admin", require("./routes/administrateur"));
app.use("/api/school", require("./routes/school"));
app.use("/api/sch_ens", require("./routes/schoolEns"));
app.use("/api/note", require("./routes/note"));
app.use("/api/secteur", require("./routes/sector"));
app.use("/api/inspecteur", require("./routes/inspector"));
app.use("/api/discussion", require("./routes/chats"));

const port = process.env.PORT || 4000;



socketIo.on('connection', (socket) => {
  Message.removeListener('add', () => {});
  Message.addListener('add', (messageData, to) => {
    console.log('user the should be only reciving the notif', to);
    socket.emit(`add_message_${to}`, messageData);
  });
   

});




server.listen(port, () => console.log(`Listening on port ${port}`));

/* app.use((req, res, next) => {
  // Error goes via `next()` method
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
}); */

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
