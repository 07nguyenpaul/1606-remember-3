import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),

  isEditable: false,
  isDirty: false,

  actions: {
    editReminder() {
      this.set('isEditing', true);
    },
    saveChanges() {
      this.set('isEditing', false);
    },
    revertChanges() {
      this.get('model').rollbackAttributes();
    }
  }
});
