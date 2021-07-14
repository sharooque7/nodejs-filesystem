const fs = require("fs");

let TimeStamp = +new Date();
const port = process.env.PORT || 5000;
const http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text-html" });
    const Path =
      "C:/Users/mohammed.sharooque/Documents/Jquery/Nodejs/FileSystem/Path";

    fs.writeFile("./Path/date-time.txt", TimeStamp.toString(), (err) => {
      if (err) throw err;
      console.log("File Created");
    });

    fs.readdir(Path, function (err, files) {
      console.log(typeof files);
      res.write("The list of files in Path \n");
      res.write(`${files.map((arr) => `${arr}`)}`);
      console.log(files);
      res.end();
    });
  })
  .listen(port);
