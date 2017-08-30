/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var Request_pb = require('./Request_pb.js');
var Response_pb = require('./Response_pb.js');
var Global_pb = require('./Global_pb.js');
goog.exportSymbol('proto.proto.ChannelAvatarGetList', null, global);
goog.exportSymbol('proto.proto.ChannelAvatarGetListResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChannelAvatarGetList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChannelAvatarGetList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.ChannelAvatarGetList.displayName = 'proto.proto.ChannelAvatarGetList';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChannelAvatarGetList.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChannelAvatarGetList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChannelAvatarGetList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChannelAvatarGetList.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && Request_pb.Request.toObject(includeInstance, f),
    roomId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChannelAvatarGetList}
 */
proto.proto.ChannelAvatarGetList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChannelAvatarGetList;
  return proto.proto.ChannelAvatarGetList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChannelAvatarGetList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChannelAvatarGetList}
 */
proto.proto.ChannelAvatarGetList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Request_pb.Request;
      reader.readMessage(value,Request_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRoomId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChannelAvatarGetList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChannelAvatarGetList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChannelAvatarGetList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChannelAvatarGetList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Request_pb.Request.serializeBinaryToWriter
    );
  }
  f = message.getRoomId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional Request request = 1;
 * @return {?proto.proto.Request}
 */
proto.proto.ChannelAvatarGetList.prototype.getRequest = function() {
  return /** @type{?proto.proto.Request} */ (
    jspb.Message.getWrapperField(this, Request_pb.Request, 1));
};


/** @param {?proto.proto.Request|undefined} value */
proto.proto.ChannelAvatarGetList.prototype.setRequest = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.ChannelAvatarGetList.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ChannelAvatarGetList.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 room_id = 2;
 * @return {number}
 */
proto.proto.ChannelAvatarGetList.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.proto.ChannelAvatarGetList.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChannelAvatarGetListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ChannelAvatarGetListResponse.repeatedFields_, null);
};
goog.inherits(proto.proto.ChannelAvatarGetListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.ChannelAvatarGetListResponse.displayName = 'proto.proto.ChannelAvatarGetListResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ChannelAvatarGetListResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChannelAvatarGetListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChannelAvatarGetListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChannelAvatarGetListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChannelAvatarGetListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && Response_pb.Response.toObject(includeInstance, f),
    avatarList: jspb.Message.toObjectList(msg.getAvatarList(),
    Global_pb.Avatar.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChannelAvatarGetListResponse}
 */
proto.proto.ChannelAvatarGetListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChannelAvatarGetListResponse;
  return proto.proto.ChannelAvatarGetListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChannelAvatarGetListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChannelAvatarGetListResponse}
 */
proto.proto.ChannelAvatarGetListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Response_pb.Response;
      reader.readMessage(value,Response_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    case 2:
      var value = new Global_pb.Avatar;
      reader.readMessage(value,Global_pb.Avatar.deserializeBinaryFromReader);
      msg.addAvatar(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChannelAvatarGetListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChannelAvatarGetListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChannelAvatarGetListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChannelAvatarGetListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Response_pb.Response.serializeBinaryToWriter
    );
  }
  f = message.getAvatarList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      Global_pb.Avatar.serializeBinaryToWriter
    );
  }
};


/**
 * optional Response response = 1;
 * @return {?proto.proto.Response}
 */
proto.proto.ChannelAvatarGetListResponse.prototype.getResponse = function() {
  return /** @type{?proto.proto.Response} */ (
    jspb.Message.getWrapperField(this, Response_pb.Response, 1));
};


/** @param {?proto.proto.Response|undefined} value */
proto.proto.ChannelAvatarGetListResponse.prototype.setResponse = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.ChannelAvatarGetListResponse.prototype.clearResponse = function() {
  this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ChannelAvatarGetListResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Avatar avatar = 2;
 * @return {!Array.<!proto.proto.Avatar>}
 */
proto.proto.ChannelAvatarGetListResponse.prototype.getAvatarList = function() {
  return /** @type{!Array.<!proto.proto.Avatar>} */ (
    jspb.Message.getRepeatedWrapperField(this, Global_pb.Avatar, 2));
};


/** @param {!Array.<!proto.proto.Avatar>} value */
proto.proto.ChannelAvatarGetListResponse.prototype.setAvatarList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.proto.Avatar=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.Avatar}
 */
proto.proto.ChannelAvatarGetListResponse.prototype.addAvatar = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.Avatar, opt_index);
};


proto.proto.ChannelAvatarGetListResponse.prototype.clearAvatarList = function() {
  this.setAvatarList([]);
};


goog.object.extend(exports, proto.proto);