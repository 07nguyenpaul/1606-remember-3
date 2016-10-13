/* globals server */

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

import Ember from 'ember';

moduleForAcceptance('Acceptance | reminders list', {
  beforeEach() {
     server.createList('reminder', 5);
   },
   afterEach() {
     server.shutdown();
   }
 });

test('viewing the homepage', function(assert) {

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(Ember.$('.spec-reminder-item').length, 5);
  });
});

test('clicking on an individual item', function(assert) {

  visit('/');
  click('.spec-reminder-item:first');

  andThen(function() {
    assert.equal(currentURL(), '/1');
    assert.equal(Ember.$('.spec-reminder-item:first').text().trim(), Ember.$('.spec-reminder-title').text().trim());
  });

// test('viewing new reminders', function(assert) {
//
//   visit('/');
//   click('.new-reminder');
//   fillIn('.spec-input-title', 'Hello');
//
//   andThen(function() {
//     assert.equal(currentURL(), '/new');
//     assert.equal(find('.spec-input-title').val(), 'Hello');
//   });
//  });
//   // click('.new-reminder-submit');
//
});
