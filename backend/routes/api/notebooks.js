const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Notebook } = require('../../db/models');
const { restoreUser } = require('../../utils/auth');

// const { Notebook, Note } = require('../../db/models');

router.get('/', restoreUser, asyncHandler(async (req, res) => {
    const notebooks = await Notebook.findAll()
    console.log(notebooks)
    res.json(notebooks)
}))
// router.get('/', asyncHandler(async (req, res) => {
//     const states = await State.findAll();
//     res.json(states);
// }))

// // get all notes in notebook that aren't in trash
// app.get('/api/notes/:type', controller.getAllNotes);

module.exports = router;
