const express = require("express")
const router = express.Router();
const Task = require('../models/task');



router.get('/tasks', (req, res, next) => {
    Task.find()
        .then((allTheTasks) => {

            res.json(allTheTasks);
        })
        .catch((err) => {
            res.json(err)
        })


});

router.post('/tasks/create', (req, res, next) => {
    Task.create({
        title: req.body.title,
        description: req.body.description,
        doneyet: req.body.doneyet
    })
        .then((response) => {
            res.json(response)
        })
        .catch((err) => {
            res.json(err);
        })

})


//task details route here
router.get('/tasks/:id', (req, res, next)=>{
  Task.findById(req.params.id)
  .then((response)=>{
    res.json(response)
  })
  .catch((err)=>{
    res.json(err)
  })
})

// edit task route here
router.post('/tasks/:id/edit', (req, res, next)=>{
  Task.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    description: req.body.description,
    doneyet: req.body.doneyet
  })
  .then((response)=>{
    res.json(response)
  })
  .catch((err)=>{
    next(err);
  });
});

//delete task route here
router.post("/tasks/:id/delete", (req, res, next)=>{
  Task.findByIdAndRemove(req.params.id)
  .then((response)=>{
    res.json(response);
  })
  .catch((err)=>{
    next(err);
  });
});


module.exports = router;
