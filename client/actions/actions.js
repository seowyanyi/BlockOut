import { Meteor } from 'meteor/meteor';

let constants = require('../../imports/constants.js');

function makeActionCreator(type, ...argNames) {
    return function(...args) {
        let action = { type };
        argNames.forEach((arg, index) => {
          action[argNames[index]] = args[index];
        });
        return action;
    }
}

/**
 * Reducers listen for action types (the first parameter, referenced through AppConstants)
 * emitted by dispatched actionCreators. Note: the first parameter of the action creator is already
 * named "type". So DO NOT name other parameters as "type".
 */

 export const updateAppStatus = makeActionCreator(constants.UPDATE_APP_STATUS, 'app');