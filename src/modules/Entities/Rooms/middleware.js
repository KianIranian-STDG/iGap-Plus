import {ENTITIES_ROOM_ADD, ENTITIES_ROOM_EDIT, ENTITIES_ROOM_REMOVE} from '../../../actions/entities/rooms';
import Rooms from '../../../models/entities/Rooms';

const middleware = ({dispatch, getState}) => next => action => {
  switch (action.type) {
    case ENTITIES_ROOM_ADD:
      if (action.fromServer) {
        for (const roomId in action.rooms) {
          if (action.rooms.hasOwnProperty(roomId)) {
            Rooms.saveToQueue(action.rooms[roomId]);
          }
        }
      }
      break;
    case ENTITIES_ROOM_REMOVE:
      Rooms.removeFromQueue(action.roomId);
      break;
    case ENTITIES_ROOM_EDIT:
      const room = getState().entities.rooms[action.id];
      if (room && action.updateDb) {
        Rooms.saveToQueue({
          ...room,
          ...action.payload,
        });
      }
      break;
  }
  return next(action);
};

export default middleware;