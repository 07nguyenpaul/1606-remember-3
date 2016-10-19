import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    remove(reminder) {
      reminder.destroyRecord();
    }
  }
});
