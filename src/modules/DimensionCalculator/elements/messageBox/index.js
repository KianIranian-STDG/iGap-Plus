/*

+-+------------------------------+
| |             5                |
| |   +-----------------------+  |
|3|10 |reply to :short message 5 |               reply to
| |   |       h=21            |  |
| |   +-----------------------+  |
| |              5               |
+-+------------------------------+
                 5

+------------------------------------------+
|                                          |
|                                          |
|  forward from   h=21                     |
|                                          |
+------------------------------------------+

* */


import {Proto} from '../../../../modules/Proto/index';
import messageAtomBoxCalculator from './messageAtomBox';
import channelBoxCalculator from '../channelBox';


/**
 * @type dimensionCalculatorFunction
 */
const calculator = (maxWidth, outer, roomMessage, boxType, forwarded) => {
  if (outer) {
    const dimension = {
      width: 0,
      height: 0,
    };

    const forwardFrom = roomMessage.forwardFrom;
    if (forwardFrom) {
      /**
       * Padding : 0
       * Margin : 0
       * Components : 19
       */
      dimension.height += 19;

      if (forwardFrom.channelViewsLabel) {
        const {width, height} = channelBoxCalculator(maxWidth, outer, forwardFrom, boxType, true);
        dimension.width += width;
        dimension.height += height;
      } else {
        const {width, height} = messageAtomBoxCalculator(maxWidth, outer, forwardFrom, boxType, true);
        dimension.width += width;
        dimension.height += height;
      }
    }

    if (!forwardFrom || (forwardFrom && (roomMessage.messageType !== Proto.RoomMessageType.TEXT || roomMessage.message))) {
      const {width, height} = messageAtomBoxCalculator(maxWidth, outer, roomMessage, boxType, forwarded);
      dimension.width += width;
      dimension.height += height;
    }

    return dimension;

  } else {
    if (forwarded && roomMessage.channelViewsLabel) {
      return channelBoxCalculator(maxWidth, outer, roomMessage, boxType, false);
    }
    return messageAtomBoxCalculator(maxWidth, outer, roomMessage, boxType, forwarded);
  }
};

export default calculator;