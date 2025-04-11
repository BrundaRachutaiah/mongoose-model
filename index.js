const mongoose = require('mongoose');
const car = require('./models/car.model');  // Import the User model

// 3. Function to add a new user
function addNewCar(model, release_year, make) {
  mongoose.connect('mongodb://localhost:27017/testDB')
    .then(() => {
      console.log('Connected to MongoDB');

      const newCar = new car({ model, release_year, make });

      newCar.save()
        .then(() => {
          console.log('car saved successfully!');
          mongoose.disconnect();
        })
        .catch((err) => {
          console.log('Error saving car:', err.message);
          mongoose.disconnect();
        });

    })
    .catch((err) => {
      console.log('MongoDB Connection Error:', err.message);
    });
}

// 4. Call the function with test data
addNewCar('Toyota Corolla', 1966, 'Toyota');


