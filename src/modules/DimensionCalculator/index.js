import Device from '../Responsive/Device';
import {min} from 'lodash';

import logBoxCalculator from './elements/messageBox/messageAtomBox/log';
import noBoxCalculator from './elements/noBox';
import ownerBoxCalculator from './elements/ownerBox';
import chatBoxCalculator from './elements/chatBox';
import groupBoxCalculator from './elements/groupBox';
import channelBoxCalculator from './elements/channelBox';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../constants/screenBreakPoints';
import {Proto} from '../Proto/index';
import {getAuthorHash} from '../../utils/app';

export const BOX_TYPE_NONE = 0;
export const BOX_TYPE_OWNER = 1;
export const BOX_TYPE_CHAT = 2;
export const BOX_TYPE_GROUP = 3;
export const BOX_TYPE_CHANNEL = 4;

/**
 * @param {boolean} outer
 * @param {FlatRoomMessage} roomMessage
 * @param {number} boxType
 * @param {boolean} forwarded
 * @return {{width:number,height:number}}
 * @private
 */
function _calculateDimension(outer, roomMessage, boxType, forwarded) {
  if (!roomMessage || roomMessage.deleted) {
    return {width: 0, height: 0};
  }
  const maxWidth = getSecondaryWidth();
  if (roomMessage.log) {
    return logBoxCalculator(maxWidth, outer, roomMessage, boxType, forwarded);
  }
  switch (boxType) {
    case  BOX_TYPE_NONE :
      return noBoxCalculator(maxWidth, outer, roomMessage, boxType, forwarded);
    case  BOX_TYPE_OWNER :
      return ownerBoxCalculator(maxWidth, outer, roomMessage, boxType, forwarded);
    case  BOX_TYPE_CHAT :
      return chatBoxCalculator(maxWidth, outer, roomMessage, boxType, forwarded);
    case  BOX_TYPE_GROUP :
      return groupBoxCalculator(maxWidth, outer, roomMessage, boxType, forwarded);
    case  BOX_TYPE_CHANNEL :
      return channelBoxCalculator(maxWidth, outer, roomMessage, boxType, forwarded);
    default:
      throw new Error('Cannot calculate dimension : Invalid box type', roomMessage);
  }
}

/**
 * @param {FlatRoomMessage} roomMessage
 * @param {number} boxType
 * @param {boolean} forwarded
 * @return {{width:number,height:number}}
 */
export function innerDimension(roomMessage, boxType, forwarded = false) {
  return _calculateDimension(false, roomMessage, boxType, forwarded);
}

/**
 * @param {FlatRoomMessage} roomMessage
 * @param {number} boxType
 * @param {boolean} forwarded
 * @return {{width:number,height:number}}
 */
export function outerDimension(roomMessage, boxType, forwarded = false) {
  return _calculateDimension(true, roomMessage, boxType, forwarded);
}

/**
 * @returns {number}
 */
export function getPrimaryWidth() {
  //TODO calculate me
  const {width} = Device.dimensions.window;
  if (width > NORMAL_HEIGHT) {
    return min([width * 0.44, NORMAL_WIDTH]);
  }
  return width;
}

/**
 * @returns {number}
 */
export function getSecondaryWidth() {
  //TODO calculate me according to getPrimaryWidth
  const {width} = Device.dimensions.window;
  if (width > NORMAL_HEIGHT) {
    return width - getPrimaryWidth();
  }
  return width;
}

/**
 * get object of roomMessages and return the dimensions
 * @param roomMessages
 * @param roomType
 */
export function getMessagesDimension(roomMessages, roomType) {
  let height = 0;
  for (let id in roomMessages) {
    const message = roomMessages[id];
    let boxType = BOX_TYPE_NONE;
    if (roomType === Proto.Room.Type.CHANNEL) {
      boxType = BOX_TYPE_CHANNEL;
    } else if (message.authorHash === getAuthorHash()) {
      boxType = BOX_TYPE_OWNER;
    } else if (roomType === Proto.Room.Type.CHAT) {
      boxType = BOX_TYPE_CHAT;
    } else if (roomType === Proto.Room.Type.GROUP) {
      boxType = BOX_TYPE_GROUP;
    }
    height += outerDimension(message, boxType).height;
  }
  return height;
}