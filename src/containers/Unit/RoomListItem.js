import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RoomListItemComponent from '../../components/Unit/RoomListItem';
import {connect} from 'react-redux';
import {Proto} from '../../modules/Proto/index';
import {getAuthorHash} from '../../utils/app';
import {goRoomHistory} from '../../navigators/SecondaryNavigator';
import {makeGetRoomWithMessages} from '../../selector/entities/room';

class RoomListItem extends Component {
  render() {
    const {room} = this.props;
    if (!room) {
      return null;
    }

    const authorHash = getAuthorHash();
    const ownerLastMessage = room.lastMessage && authorHash === room.lastMessage.authorHash;
    const lastMessageStatus = ownerLastMessage && room.type !== Proto.Room.Type.CHANNEL ? room.lastMessage.status : false;

    return (<RoomListItemComponent roomId={room.id}
      roomTitle={room.title}
      roomType={room.type}
      unreadCount={0}
      lastMessageTitle={this.getSecondaryTitle()}
      lastMessageTime={room.lastMessage ? room.lastMessage.createTime : null}
      ownerLastMessage={ownerLastMessage}
      lastMessageStatue={lastMessageStatus}
      onPress={() => {
        goRoomHistory(room.id);
      }}
    />);
  }

  getSecondaryTitle() {
    const {room} = this.props;
    if (!room.lastMessage) {
      return '';
    }
    if (room.lastMessage.message) {
      return room.lastMessage.message;
    }
    if (room.lastMessage.attachment) {
      return 'Attachment';
    }
    if (room.lastMessage.log) {
      return 'Log Message';
    }
    if (room.lastMessage.location) {
      return 'location';
    }
    if (room.lastMessage.location) {
      return 'location';
    }
    if (room.lastMessage.deleted) {
      return 'Deleted Message';
    }
  }
}

RoomListItem.propTypes = {
  roomId: PropTypes.string.isRequired,
};

const makeMapStateToProps = () => {
  const getRoomSelector = makeGetRoomWithMessages();
  return (state, props) => {
    return {
      room: getRoomSelector(state, props),
    };
  };
};

export default connect(
  makeMapStateToProps,
)(RoomListItem);
