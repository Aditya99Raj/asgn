// var router = require("express").Router();

// router.get('/users', async (req, res) => {
//     res.send('Server is online')
// })

// router.post('/add', async (req, res) => {
//     res.send('Server is online')
// })

// router.use("/post", require("./post"));

// module.exports = router;

const Post = require("../models/Post");

var router = require("express").Router();

// @AssetPlus: This is a sample get request
router.get("/users", async (req, res) => {
    var posts = await Post.find();
    return res.send(posts);
});

router.post("/add", async (req, res) => {
    var posts = await Post.create(req.body)
    return res.send(posts);
});

router.delete("/delete/:id",async(req, res) => {
    const data = await Post.delete(req.params.id)
    return res.status(200).send(data)
})
// @AssetPlus: Add other routes here
// router.post("/add")

module.exports = router;