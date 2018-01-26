import { handleActions } from 'redux-actions';
import * as actions from '../actions/actions'
import initialState from './initialState';

const messageBarReducer = handleActions({
 [actions.closeSnackbar](state) {
    return { ...state, showSnackbar: false, message: '', style: initialState.common.style }
 },
 [actions.openSnackbarSuccess](state, { payload: { message } }) {
   return { ...state, message: message, showSnackbar: true, messageType: 'success', style: {color: 'green'}}
 },
 [actions.openSnackbarError](state, { payload: { message } }) {
   return { ...state, message: message, showSnackbar: true, messageType: 'error', style: {color: 'red'}}
 },
 [actions.webSocketError](state, { payload: { message } }) {
   return { ...state, message: message, showSnackbar: true, messageType: 'error', style: {color: 'red'}}
 },
 [actions.webSocketSuccess](state, { payload: { message } }) {
 	console.log(message);
   return { ...state, message: message, showSnackbar: true, messageType: 'success', style: {color: 'green'}}
 },
 [actions.webSocketPending](state, { payload: { message } }) {
   return { ...state, message: message, showSnackbar: true, messageType: 'pending', style: {color: 'white'}}
 }
}, initialState.messageBar);

export default messageBarReducer