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
  'messages.insert'(text, threadId, authorName) {
    check(text, String);

    Messages.insert({
      text: text,
      threadId: threadId,
      threadName: 'abc',
      authorName: authorName,
      timestamp: Date.now()
    });
  },
});