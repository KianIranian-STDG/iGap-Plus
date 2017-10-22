import React, {Component} from 'react';
import RoomHistoryComponent from '../../components/Room/RoomHistory';
import {getRoom} from '../../selector/entities/room';
import {connect} from 'react-redux';
import loadRoomHistory from '../../modules/Messenger/loadRoomHistory';
import {getRoomMessageList} from '../../selector/messenger/roomMessage';
import {goRoomInfo} from '../../navigators/SecondaryNavigator';

class RoomHistoryScreen extends Component {

  async componentDidMount() {
    const {roomId} = this.props.navigation.state.params;
    await loadRoomHistory(roomId);
  }

  goRoomInfoBtn = () => {
    const {roomId} = this.props.navigation.state.params;
    goRoomInfo(roomId);
  }

  render() {
    const {room, messageList} = this.props;

    return (
      <RoomHistoryComponent
        room={room}
        messageList={messageList}
        goRoomInfoBtn={this.goRoomInfoBtn}
        goBack={this.props.navigation.goBack}
      />
    );
  }
}

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      room: getRoom(state, props),
      messageList: getRoomMessageList(state, props),
    };
  };
};


export default connect(
  makeMapStateToProps,
)(RoomHistoryScreen);