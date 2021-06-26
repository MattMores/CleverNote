const express = require('express');
const router = express.Router();

const { Note, Notebook, User } = require('../../db/models');

const asyncHandler = require('express-async-handler');

//  // create new note
// app.post('/api/note', controller.createNewNote);
// //update Notes API
// app.put('/api/note/:id', controller.updateNoteById); // ID = note ID
// // detel notes
// app.delete('/api/note/:id', controller.deleteNote);


router.get('/all', asyncHandler(async (req, res) => { // get all notes
    const notes = await Note.findAll({include: [Notebook, User]});
    res.json(notes);
}));

router.post('/', asyncHandler(async (req, res) => {
  // console.log("----------------------------", req.body)
  let { userId, title, content, notebookId } = req.body; //notebookId
    // console.log("--------------------", userId, title, content); //notebookId
    const note = await Note.create({ //notebookId
      userId,
      title,
      content,
      notebookId
    });
    res.json(note);
  }));

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const note = await Note.findByPk(req.params.id, {
        include: [Notebook]
    })
    res.json(note)
}))

router.put('/', asyncHandler(async (req, res) => {
  // console.log("----------------------------", req.body)
  let { id, title, content, notebookId, userId } = req.body; //notebookId
    // console.log("--------------------", id, title, content, notebookId, userId); //notebookId
    userId = Number(userId)
    const note = await Note.findByPk(id) //notebookId
    console.log("------------------", note)
    // if (title === note.dataValues.title && content !== note.dataValues.content) { // unreadable object before you res.json
    //   return note
    // } else {
        await note.update({...note.dataValues, title, content})
        res.json(note)
    // };
  }));

module.exports = router;
