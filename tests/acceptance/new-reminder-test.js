// import { test } from 'qunit';
// import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';
//
// import Ember from 'ember';
//
// moduleForAcceptance('Acceptance | new reminders', {
//   beforeEach() {
//      server.createList('reminder', 5);
//    },
//    afterEach() {
//      server.shutdown();
//    }
//  });
//
//  test('clicking on new and creating a new item', function(assert) {
//
//    visit('/');
//    click('.create-new-reminder');
//    fillIn('.spec-input-title', 'learn ember');
//    fillIn('.spec-input-date', "2016-10-30");
//    fillIn('.spec-input-notes', 'look and docs do tutorial');
//
//    andThen(function() {
//      assert.equal(currentURL(), '/new');
//      assert.equal(find('.spec-input-title').val(), "learn ember");
//      assert.equal(find('.spec-input-date').val(), "2016-10-30");
//      assert.equal(find('.spec-input-notes').val(), "look and docs do tutorial");
//    });
//
//    click('.new-reminder-submit');
//
//    andThen(function() {
//      assert.equal(Ember.$('.spec-reminder-item:last').text().trim(), 'learn ember');
//      assert.equal(Ember.$('.list-date:last').text().trim(), 'Sat Oct 29 2016 18:00:00 GMT-0600 (MDT)');
//    });
//  });
