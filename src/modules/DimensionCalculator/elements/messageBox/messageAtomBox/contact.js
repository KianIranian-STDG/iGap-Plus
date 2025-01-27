
/*
                   5
  +----min with 350-------------------+
  |                     4             |
  |  +-55---+   +-----+------------+  |
  |  |      |   |name | lastname   20 |
  | 55 icon |10 +------------------|  |
  |  |      |   | +20-+            |  | 5
5 |  +------+   |20   |6 phone     |  |
  |             | +---+            |  |
  |             +------------------+  |
  |             | +20-+            |  |
  |             |20   |6 email     |  |
  |             | +---+            |  |
  |             +------------------+  |
  +-----------------------------------+
                   5

*/



/**
 * @type dimensionCalculatorFunction
 */
const calculator = (maxWidth, outer, roomMessage, boxType, forwarded) => {
  /**
   * Padding : 0
   * Margin : 5+5
   * Components : 0
   * @type {number}
   */
  const xSpace = 10;

  const dimension = {
    width: 250, // TODO [Amerehie] - 2017-12-23 12:24 PM - fix me
    height: 55 + roomMessage.contact.getPhoneList().length * 26 + roomMessage.contact.getEmailList().length * 26, // TODO [Amerehie] - 2017-12-23 12:24 PM - fix me
  };


  if (outer) {
    /**
     * Padding : 0
     * Margin : 5+5
     * Components : 0
     * @type {number}
     */
    const ySpace = 10;// TODO [Amerehie] - 2017-12-23 12:24 PM - fix me

    dimension.width += xSpace;
    dimension.height += ySpace;
  }

  return dimension;
};

export default calculator;