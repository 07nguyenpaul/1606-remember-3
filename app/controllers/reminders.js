import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    deleteReminder(reminder) {
      reminder.destroyRecord();
    }
  }
});
