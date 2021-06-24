const express = require('express');
const router = express.Router();

const { Note } = require('../../db/models');

const asyncHandler = require('express-async-handler');

//  // create new note
// app.post('/api/note', controller.createNewNote);
// //update Notes API
// app.put('/api/note/:id', controller.updateNoteById); // ID = note ID
// // detel notes
// app.delete('/api/note/:id', controller.deleteNote);

// router.post('/', possibleValidations.validateCreate, asyncHandler(async (req, res) => {
//     const id = await Note.create(req.body);
//     return res.redirect(`${req.baseURL}/${id}`);
// }));

// router.post(
//     '/:id/items',
//     itemValidations.validateCreate,
//     asyncHandler(async function(req, res) {
//       const item = await ItemsRepository.addItem(req.body, req.params.id);
//       return res.json(item);
//     })
//   );

router.get('/all', asyncHandler(async (req, res) => { // get all notes
    const notes = await Note.findAll();
    res.json(notes);
}));


module.exports = router;
