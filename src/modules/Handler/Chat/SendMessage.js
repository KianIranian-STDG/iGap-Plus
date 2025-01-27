import Base from '../Base';
import putState, {waitForRoom} from '../../Entities/Rooms/index';
import {getAuthorHash, prepareRoomMessage} from '../../../utils/app';
import {entitiesRoomEdit} from '../../../actions/entities/rooms';

import {normalize} from 'normalizr';
import roomMessage from '../../../schemas/roomMessage';
import {entitiesRoomMessagesAdd} from '../../../actions/entities/roomMessages';
import {messengerRoomMessageConcat} from '../../../actions/messenger/roomMessages';
import {toPairs} from 'lodash';
import store from '../../../configureStore';
import {messengerRoomAddList} from '../../../actions/messenger/rooms';

/**
 * @property {ProtoChatSendMessage} _request
 * @property {ProtoChatSendMessageResponse} _response
 */
export default class SendMessage extends Base {
  async handle() {
    const roomId = this._response.getRoomId().toString();
    await putState(roomId);
    const room = await waitForRoom(roomId);
    const message = this._response.getRoomMessage();
    const messageId = message.getMessageId().toString();

    if (!store.getState().messenger.rooms[roomId] || room.isParticipant) {
      this.dispatch(messengerRoomAddList({
        [roomId]: {
          id: roomId,
          sort: messageId,
        },
      }));
    }

    const editRoomPayload = {};
    if (!room.lastMessage || room.lastMessage < messageId) {
      editRoomPayload.lastMessage = messageId;
      if (!message.getDeleted() && message.getAuthor().getHash() !== getAuthorHash()) {
        editRoomPayload.unreadCount = room.unreadCount + 1;
      }
      this.dispatch(entitiesRoomEdit(roomId, editRoomPayload));
    }

    const normalizedData = normalize(message, roomMessage);

    toPairs(normalizedData.entities.roomMessages).forEach(([messageId, roomMessage]) => {
      prepareRoomMessage(normalizedData.entities.roomMessages[messageId], roomId, true);
    });

    if (!this._request) {
      this.dispatch(entitiesRoomMessagesAdd(normalizedData.entities.roomMessages));
      this.dispatch(messengerRoomMessageConcat(roomId, [normalizedData.result], false));
    }
  }
}