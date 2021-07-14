// const express = require("express");
// const app = express();
// const port = 5000;
// const mongodb = require("mongodb");
// const mongoClient = mongodb.MongoClient;
// const dbUrl = "mongodb://127.0.0.1:27017";

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({ message: "Hello world" });
// });

// app.get("getUpdate:/id", (req, res) => {
//   res.json({ message: "Hello world" });
// });

// app.get("getStudent", async (req, res) => {
//   let client = await mongoClient.connect(dbUrl);
//   //select the db
//   try {
//     let db = client.db("MongoPractice");
//     //select the collection and perform action
//     const data = db.collection("users").find().toArray();
//     //close connection
//     res.json({ data });
//   } catch (error) {
//     console.log(error);
//     res.json({ message: "Something went wrong" });
//   } finally {
//     client.close();
//   }
// });

// app.post("/student", async (req, res) => {
//   //open connection
//   let client = await mongoClient.connect(dbUrl);
//   //select the db
//   try {
//     let db = client.db("MongoPractice");
//     //select the collection and perform action
//     const data = db.collection("users").insertOne(req.body);
//     //close connection
//     res.json({ message: "record created" });
//   } catch (error) {
//     console.log(error);
//     res.json({ message: "Something went wrong" });
//   } finally {
//     client.close();
//   }
// });

// app.put("/studentUpdate/:id", async (req, res) => {
//   let client = await mongoClient.connect(dbUrl);
//   const objId = mongodb.ObjectID(req.params.id);
//   try {
//     let db = client.db("MongoPractice");
//     const data = await db.collection("users").findOne({ _id: objId });
//     if (data) {
//       const update = await db
//         .collection("users")
//         .findOneAndUpdate(
//           { _id: objId },
//           { $set: { school: req.body.school } }
//         );
//       res.json({ message: "success" });
//     } else {
//       res.json({ message: "something went wrong" });
//     }
//   } catch (error) {
//     res.json({ message: "something went wrong" });
//   } finally {
//     client.close();
//   }
// });

// app.delete("/Delete/:id", async (req, res) => {
//   let client = await mongoClient.connect(dbUrl);
//   const objId = mongodb.ObjectID(req.params.id);
//   try {
//     let db = client.db("MongoPractice");
//     const data = await db.collection("users").findOne({ _id: objId });
//     if (data) {
//       const deleted = await db
//         .collection("users")
//         .findOneAndDelete({ _id: objId });
//       res.json({ message: "success" });
//     } else {
//       res.json({ message: "Something went wrong" });
//     }
//   } catch (error) {
//     res.json({ message: "something went wromg" });
//   } finally {
//     client.close();
//   }
// });
// app.listen(port);
