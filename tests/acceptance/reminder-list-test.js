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
});

test('clicking on new and creating a new item', function(assert) {

  visit('/');
  click('.add-reminder-button');
  fillIn('.spec-input-title', 'hello');
  fillIn('.spec-input-date', "2016-10-20");
  fillIn('.spec-input-notes', 'Boo, Happy Halloween!');

  andThen(function() {
    assert.equal(currentURL(), '/new');
    assert.equal(find('.spec-input-title').val(), "hello");
    assert.equal(find('.spec-input-date').val(), "2016-10-20");
    assert.equal(find('.spec-input-notes').val(), "Boo, Happy Halloween!");
  });

  click('.new-reminder-submit');

  andThen(function() {
    assert.equal(Ember.$('.spec-reminder-item:last').text().trim(), 'hello');
    assert.equal(Ember.$('.reminder-date:last').text().trim(), 'Wed Oct 19 2016 18:00:00 GMT-0600 (MDT)');
  });
});
