const router = require("express").Router();

// require the Drone model here
const Drone = require("../models/Drone.model");
router.get('/drones', (req, res, next) => {
Drone.find()
  .then((response) => {
    console.log(response,"drone response");
    res.render("./drones/list.hbs", { response });
  })
  .catch((err) => {
    next(err);
  });
 
 
 
 
  // Iteration #2: List the drones
  // ... your code here
});





router.get('/drones/create-form', (req, res, next) => {
  
    res.render("./drones/create-form.hbs");
  

  // Iteration #3: Add a new drone
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  debugger
  Drone.create(req.body)
  .then((response) => {
    console.log(response,"drone response");
    res.render("./drones/list.hbs", { response });
  })
  .catch((err) => {
    next(err);
  });
 
  
  
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
 
  .then((response) => {

    console.log(response,"drone response");
    res.render("./drones/update-form.hbs", { response });
  })
  .catch((err) => {
    next(err);
  });



  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
 
 
  Drone.findOneAndReplace({"_id":req.params.id},req.body)
 
  .then((response) => {
    
    Drone.find()
    .then((response) => {
      console.log(response,"drone response");
      res.render("./drones/list.hbs", { response });
    })
    .catch((err) => {
      next(err);
  })
  .catch((err) => {
    next(err);
  });})
  
  
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drone.findByIdAndDelete(req.params.id)
 
  .then((response) => {
    
    Drone.find()
    .then((response) => {
      console.log(response,"drone response");
      res.render("./drones/list.hbs", { response });
    })
    .catch((err) => {
      next(err);
  })
  .catch((err) => {
    next(err);
  });})


});

module.exports = router;
