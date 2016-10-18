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

test('clicking on Add Reminder and creating a new reminder which renders to the page', function(assert) {

  visit('/');
  click('.add-reminder-button');
  fillIn('.spec-input-title', 'hello');
  fillIn('.spec-input-date', "2016-10-31");
  fillIn('.spec-input-notes', 'Boo, Happy Halloween!');

  andThen(function() {
    assert.equal(currentURL(), '/new');
    assert.equal(find('.spec-input-title').val(), "hello");
    assert.equal(find('.spec-input-date').val(), "2016-10-31");
    assert.equal(find('.spec-input-notes').val(), "Boo, Happy Halloween!");
  });

  click('.new-reminder-submit');

  andThen(function() {
    assert.equal(Ember.$('.spec-reminder-item:last').text().trim(), 'hello');
    assert.equal(Ember.$('.reminder-date:last').text().trim(), 'Sun Oct 30 2016 18:00:00 GMT-0600 (MDT)');
  });
});

  test('clicking on revert returns the reminder to the original state', function(assert) {
    visit('/');
    click('.add-reminder-button');
    fillIn('.spec-input-title', 'hello');
    fillIn('.spec-input-date', "2016-10-31");
    fillIn('.spec-input-notes', 'Boo, Happy Halloween!');
    click('.new-reminder-submit');
    click('.spec-reminder-item:last');
    click('.edit-button');


    andThen(function() {
      assert.equal(currentURL(), '/6');
      assert.equal(find('.edit-title').val(), 'hello');
    });

    fillIn('.edit-title', 'hello123');

    andThen(function() {
      assert.equal(currentURL(), '/6');
      assert.equal(find('.edit-title').val(), 'hello123');
    });

    click('.revert-button');

    andThen(function() {
      assert.equal(currentURL(), '/6');
      assert.equal(find('.edit-title').val(), 'hello');
    });
});
