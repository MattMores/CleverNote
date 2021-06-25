const express = require('express');
const router = express.Router();

const { Note, Notebook } = require('../../db/models');

const asyncHandler = require('express-async-handler');

//  // create new note
// app.post('/api/note', controller.createNewNote);
// //update Notes API
// app.put('/api/note/:id', controller.updateNoteById); // ID = note ID
// // detel notes
// app.delete('/api/note/:id', controller.deleteNote);


router.get('/all', asyncHandler(async (req, res) => { // get all notes
    const notes = await Note.findAll({includes: Notebook});
    res.json(notes);
}));

router.post('/', asyncHandler(async (req, res) => {
  console.log("----------------------------", req.body)
  const { userId, title, content, notebookId } = req.body; //notebookId
    console.log("--------------------", userId, title, content); //notebookId
    const note = await Note.create({ //notebookId
      userId,
      title,
      content,
      notebookId
    });
    res.json(note);
  }));

module.exports = router;
