import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Messages = new Mongo.Collection('messages');

if (Meteor.isServer) {
  Meteor.publish('messages', function tasksPublication() {
    return Messages.find({});
  });
}

Meteor.methods({
  'messages.insert'(text, postalCode, subGroupName, authorName) {
    check(text, String);

    Messages.insert({
      text: text,
      postalCode: postalCode,
      subGroupName: subGroupName,
      authorName: authorName,
      timestamp: Date.now(),
    });
  },
});