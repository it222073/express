var express = require('express');
var router = express.Router();

// 接続情報を設定
const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://it222073:<password>@test.zo3ig35.mongodb.net/?retryWrites=true&w=majority&appName=test";
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
    // データベースコレクションを指定
    const database = client.db('notes');
    const notes = database.collection('notes');

    // idが１のドキュメントを取得
    const query = { id: 1 };
    const note = await notes.findOne(query);

    res.json(note.title);
})

module.exports = router;