import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),

  isEditing: false,

  actions: {
    editReminder() {
      this.toggleProperty('isEditing');
    },
    saveChanges() {
      this.get('model').save().then( () => {
        this.toggleProperty('isEditing');
      });
    },
    revertChanges() {
      this.get('model').rollbackAttributes();
    },
    deleteReminder() {
      this.get('model').destroyRecord().then( () => {
        this.transitionToRoute('reminders');
      });
    }
  }
});
