const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const bodyParser = require("body-parser");

const photos = [
  {
    id: 1,
    title: "Super Cat",
    url: "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
    comments: [
      {
        id: 1,
        text: "Very crazy!",
        userId: 1,
      },
    ],
  },
  {
    id: 2,
    title: "Good Cat",
    url: "https://images.unsplash.com/photo-1615796153287-98eacf0abb13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
    comments: [],
  },
  {
    id: 3,
    title: "Funny Cat",
    url: "https://images.unsplash.com/photo-1579168765467-3b235f938439?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D",
    comments: [],
  },
  {
    id: 4,
    title: "Bad Cat",
    url: "https://images.unsplash.com/photo-1583083527882-4bee9aba2eea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D",
    comments: [],
  },
  {
    id: 5,
    title: "Unknown Cat",
    url: "https://images.unsplash.com/photo-1506755855567-92ff770e8d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D",
    comments: [],
  },
  {
    id: 6,
    title: "Big Cat",
    url: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D",
    comments: [],
  },
  {
    id: 7,
    title: "Tiny Cat",
    url: "https://images.unsplash.com/photo-1585699777545-355976789272?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D",
    comments: [],
  },
  {
    id: 8,
    title: "New Cat",
    url: "https://images.unsplash.com/photo-1601373879104-b4290a56b691?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D",
    comments: [],
  },
];

const users = [
  { id: 1, email: "test@gmail.com", passwordHash: "dGVzdA==" },
  { id: 2, email: "test1@gmail.com", passwordHash: "dGVzdDE=" },
];

app.use(bodyParser.json());

app.post("/api/auth", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (user) =>
      user.email === email &&
      user.passwordHash === Buffer.from(password).toString("base64")
  );

  if (!user) {
    return res.json({ error: "User not found" });
  }

  res.json({
    token: jwt.sign(user, "salt"),
  });
});

app.use((req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  try {
    const user = jwt.verify(token, "salt");
    req.user = user;

    return next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "bad token" });
  }
});

app.get("/api/photos", (req, res) => {
  res.json({ data: photos });
});

app.post("/api/photos/:id/comments", (req, res) => {
  const { text } = req.body;
  const photo = photos.find((photo) => photo.id === Number(req.params.id));
  if (photo) {
    photo.comments.push({
      id: photo.comments.length + 1,
      text,
      userId: req.user.id,
    });
  } else {
    return res.json({ error: "photo not found" });
  }
  return res.json({ status: "ok" });
});

app.delete("/api/photos/:id/comments/:commentId", (req, res) => {
  const photo = photos.find((photo) => photo.id === Number(req.params.id));

  if (photo) {
    photo.comments = photo.comments.filter(
      (comment) =>
        comment.id !==
        Number(req.params.commentId && comment.userId === req.user.id)
    );
  } else {
    return res.json({ error: "photo not found" });
  }
  return res.json({ status: "ok" });
});

app.listen(3001);
