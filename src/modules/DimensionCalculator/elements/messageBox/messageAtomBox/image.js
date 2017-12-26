import {dimensionCalculate, estimateTextHeight} from '../../../util';
import {min} from 'lodash';
import Device from '../../../../Responsive/Device';
import {BOX_TYPE_CHANNEL} from '../../../index';

/**
 * @type dimensionCalculatorFunction
 */
const calculator = (maxWidth, outer, roomMessage, boxType, forwarded) => {
  /**
   * Padding : 0
   * Margin : 0
   * Components : 0
   * @type {number}
   */
  const xSpace = 0;

  const {attachment} = roomMessage;

  let imageWidth;
  let imageHeight;
  if (attachment) {
    imageWidth = attachment.getWidth();
    imageHeight = attachment.getHeight();
  } else {
    // TODO [Amerehie] - 2017-12-23 12:00 PM -  Picked file imageWidth imageHeight
    imageWidth = 0;
    imageHeight = 0;
  }

  if (boxType !== BOX_TYPE_CHANNEL) {
    maxWidth = min([250, maxWidth]);
  }

  const boxHeight = min([500, (0.8 * Device.dimensions.window.height)]);
  const dimension = dimensionCalculate(imageWidth, imageHeight, maxWidth, boxHeight);

  if (outer) {
    if (boxType !== BOX_TYPE_CHANNEL && roomMessage.message) {
      // TODO [Amerehie] - 2017-12-23 12:00 PM - add possible padding
      dimension.height += estimateTextHeight(
        roomMessage.message,
        dimension.width
      );
    }

    /**
     * Padding : 0
     * Margin : 0
     * Components : 0
     * @type {number}
     */
    const ySpace = 0;

    dimension.width += xSpace;
    dimension.height += ySpace;
  }

  return dimension;
};

export default calculator;