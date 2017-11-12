import {uniqueId} from 'lodash';
import {primary} from '../../../themes/default/index';

const id = uniqueId();

export default [
  id, [
    {
      query: {},
      style: {
        container: {
          flex: 1,
        },
        scroll: {
          paddingBottom: 100,
        },
        form: {
          padding: 15,
        },
        avatarWrap: {
          margin: 10,
          alignSelf: 'center',
          height: 150,
        },
        radioWrap: {
          flexDirection: 'row',
          flex: 1,
          height: 50,
        },
        radioLabel: {
          fontWeight: 'bold',
          fontSize: 15,
        },
        usernameWrap: {},
        LinkWrap: {
          backgroundColor: '#fff',
          borderBottomWidth: 1,
          borderBottomColor: '#eee',
          borderTopWidth: 1,
          borderTopColor: '#eee',
          padding: 7,
        },
        inviteLinkWrap: {
          flex: 1,
        },
        inviteLinkLabel: {
          fontWeight: 'bold',
          color: primary,
        },
        inviteLink: {
          padding: 5,
          paddingTop: 10,
        },
      },
    },
  ],
];