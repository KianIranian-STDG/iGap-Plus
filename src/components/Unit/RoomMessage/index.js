import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl, intlShape} from 'react-intl';
import {Proto} from '../../../modules/Proto/index';
import LogBox from './LoxBox';
import OwnerBox from './OwnerBox';
import ChatBox from './ChatBox';
import GroupBox from './GroupBox';
import ChannelBox from './ChannelBox';

class RoomMessage extends React.Component {
  render() {
    const {message, authorHash, roomType} = this.props;

    if (message.messageType === Proto.RoomMessageType.LOG) {
      return (<LogBox message={message}/>);
    } else if (roomType === Proto.Room.Type.CHANNEL) {
      return (<ChannelBox message={message} showText={false}/>);
    } else if (message.authorHash === authorHash) {
      return (<OwnerBox message={message} showText={true}/>);
    } else if (roomType === Proto.Room.Type.CHAT) {
      return (<ChatBox message={message} showText={true}/>);
    } else if (roomType === Proto.Room.Type.GROUP) {
      return (<GroupBox message={message} showText={true}/>);
    }

    return null;
  }
}

RoomMessage.propTypes = {
  intl: intlShape.isRequired,
  message: PropTypes.object.isRequired,
  authorHash: PropTypes.string.isRequired,
  roomType: PropTypes.oneOf([
    Proto.Room.Type.CHAT,
    Proto.Room.Type.GROUP,
    Proto.Room.Type.CHANNEL,
  ]).isRequired,
};
export default injectIntl(RoomMessage);