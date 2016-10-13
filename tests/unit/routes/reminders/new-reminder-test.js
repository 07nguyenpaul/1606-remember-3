import { moduleFor, skip } from 'ember-qunit';

moduleFor('route:reminders/new-reminder', 'Unit | Route | reminders/new reminder', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

skip('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
