'use strict';
module.exports = function(app) {
  const appController = require('../controller/appController');

  // todoList Routes
  app.route('/tasks')
    .get(appController.list_all_tasks)
    .post(appController.create_a_task);
   
   app.route('/tasks/:taskId')
    .get(appController.read_a_task)
    .put(appController.update_a_task)
    .delete(appController.delete_a_task);
};