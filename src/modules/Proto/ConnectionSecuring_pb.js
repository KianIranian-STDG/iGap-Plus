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
goog.exportSymbol('proto.proto.ConnectionSecuringResponse', null, global);
goog.exportSymbol('proto.proto.ConnectionSymmetricKey', null, global);
goog.exportSymbol('proto.proto.ConnectionSymmetricKeyResponse', null, global);
goog.exportSymbol('proto.proto.ConnectionSymmetricKeyResponse.Status', null, global);

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
proto.proto.ConnectionSecuringResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ConnectionSecuringResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.ConnectionSecuringResponse.displayName = 'proto.proto.ConnectionSecuringResponse';
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
proto.proto.ConnectionSecuringResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ConnectionSecuringResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ConnectionSecuringResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ConnectionSecuringResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && Response_pb.Response.toObject(includeInstance, f),
    publicKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    symmetricKeyLength: jspb.Message.getFieldWithDefault(msg, 3, 0),
    heartbeatInterval: jspb.Message.getFieldWithDefault(msg, 4, 0),
    primaryNodeName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    secondaryChunkSize: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.proto.ConnectionSecuringResponse}
 */
proto.proto.ConnectionSecuringResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ConnectionSecuringResponse;
  return proto.proto.ConnectionSecuringResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ConnectionSecuringResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ConnectionSecuringResponse}
 */
proto.proto.ConnectionSecuringResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicKey(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymmetricKeyLength(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeartbeatInterval(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrimaryNodeName(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSecondaryChunkSize(value);
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
proto.proto.ConnectionSecuringResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ConnectionSecuringResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ConnectionSecuringResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ConnectionSecuringResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Response_pb.Response.serializeBinaryToWriter
    );
  }
  f = message.getPublicKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSymmetricKeyLength();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getHeartbeatInterval();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getPrimaryNodeName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSecondaryChunkSize();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional Response response = 1;
 * @return {?proto.proto.Response}
 */
proto.proto.ConnectionSecuringResponse.prototype.getResponse = function() {
  return /** @type{?proto.proto.Response} */ (
    jspb.Message.getWrapperField(this, Response_pb.Response, 1));
};


/** @param {?proto.proto.Response|undefined} value */
proto.proto.ConnectionSecuringResponse.prototype.setResponse = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.ConnectionSecuringResponse.prototype.clearResponse = function() {
  this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ConnectionSecuringResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string public_key = 2;
 * @return {string}
 */
proto.proto.ConnectionSecuringResponse.prototype.getPublicKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.proto.ConnectionSecuringResponse.prototype.setPublicKey = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 symmetric_key_length = 3;
 * @return {number}
 */
proto.proto.ConnectionSecuringResponse.prototype.getSymmetricKeyLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.proto.ConnectionSecuringResponse.prototype.setSymmetricKeyLength = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 heartbeat_interval = 4;
 * @return {number}
 */
proto.proto.ConnectionSecuringResponse.prototype.getHeartbeatInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.proto.ConnectionSecuringResponse.prototype.setHeartbeatInterval = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string primary_node_name = 5;
 * @return {string}
 */
proto.proto.ConnectionSecuringResponse.prototype.getPrimaryNodeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.proto.ConnectionSecuringResponse.prototype.setPrimaryNodeName = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint32 secondary_chunk_size = 6;
 * @return {number}
 */
proto.proto.ConnectionSecuringResponse.prototype.getSecondaryChunkSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.proto.ConnectionSecuringResponse.prototype.setSecondaryChunkSize = function(value) {
  jspb.Message.setField(this, 6, value);
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
proto.proto.ConnectionSymmetricKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ConnectionSymmetricKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.ConnectionSymmetricKey.displayName = 'proto.proto.ConnectionSymmetricKey';
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
proto.proto.ConnectionSymmetricKey.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ConnectionSymmetricKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ConnectionSymmetricKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ConnectionSymmetricKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && Request_pb.Request.toObject(includeInstance, f),
    symmetricKey: msg.getSymmetricKey_asB64(),
    version: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.proto.ConnectionSymmetricKey}
 */
proto.proto.ConnectionSymmetricKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ConnectionSymmetricKey;
  return proto.proto.ConnectionSymmetricKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ConnectionSymmetricKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ConnectionSymmetricKey}
 */
proto.proto.ConnectionSymmetricKey.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSymmetricKey(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
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
proto.proto.ConnectionSymmetricKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ConnectionSymmetricKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ConnectionSymmetricKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ConnectionSymmetricKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Request_pb.Request.serializeBinaryToWriter
    );
  }
  f = message.getSymmetricKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional Request request = 1;
 * @return {?proto.proto.Request}
 */
proto.proto.ConnectionSymmetricKey.prototype.getRequest = function() {
  return /** @type{?proto.proto.Request} */ (
    jspb.Message.getWrapperField(this, Request_pb.Request, 1));
};


/** @param {?proto.proto.Request|undefined} value */
proto.proto.ConnectionSymmetricKey.prototype.setRequest = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.ConnectionSymmetricKey.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ConnectionSymmetricKey.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes symmetric_key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ConnectionSymmetricKey.prototype.getSymmetricKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes symmetric_key = 2;
 * This is a type-conversion wrapper around `getSymmetricKey()`
 * @return {string}
 */
proto.proto.ConnectionSymmetricKey.prototype.getSymmetricKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSymmetricKey()));
};


/**
 * optional bytes symmetric_key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSymmetricKey()`
 * @return {!Uint8Array}
 */
proto.proto.ConnectionSymmetricKey.prototype.getSymmetricKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSymmetricKey()));
};


/** @param {!(string|Uint8Array)} value */
proto.proto.ConnectionSymmetricKey.prototype.setSymmetricKey = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 version = 3;
 * @return {number}
 */
proto.proto.ConnectionSymmetricKey.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.proto.ConnectionSymmetricKey.prototype.setVersion = function(value) {
  jspb.Message.setField(this, 3, value);
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
proto.proto.ConnectionSymmetricKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ConnectionSymmetricKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.ConnectionSymmetricKeyResponse.displayName = 'proto.proto.ConnectionSymmetricKeyResponse';
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
proto.proto.ConnectionSymmetricKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ConnectionSymmetricKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ConnectionSymmetricKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ConnectionSymmetricKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && Response_pb.Response.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    symmetricMethod: jspb.Message.getFieldWithDefault(msg, 3, ""),
    symmetricIvSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    securityIssue: jspb.Message.getFieldWithDefault(msg, 5, false)
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
 * @return {!proto.proto.ConnectionSymmetricKeyResponse}
 */
proto.proto.ConnectionSymmetricKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ConnectionSymmetricKeyResponse;
  return proto.proto.ConnectionSymmetricKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ConnectionSymmetricKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ConnectionSymmetricKeyResponse}
 */
proto.proto.ConnectionSymmetricKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.proto.ConnectionSymmetricKeyResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymmetricMethod(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymmetricIvSize(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSecurityIssue(value);
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
proto.proto.ConnectionSymmetricKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ConnectionSymmetricKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ConnectionSymmetricKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ConnectionSymmetricKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Response_pb.Response.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSymmetricMethod();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSymmetricIvSize();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getSecurityIssue();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.proto.ConnectionSymmetricKeyResponse.Status = {
  REJECTED: 0,
  ACCEPTED: 1
};

/**
 * optional Response response = 1;
 * @return {?proto.proto.Response}
 */
proto.proto.ConnectionSymmetricKeyResponse.prototype.getResponse = function() {
  return /** @type{?proto.proto.Response} */ (
    jspb.Message.getWrapperField(this, Response_pb.Response, 1));
};


/** @param {?proto.proto.Response|undefined} value */
proto.proto.ConnectionSymmetricKeyResponse.prototype.setResponse = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.ConnectionSymmetricKeyResponse.prototype.clearResponse = function() {
  this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ConnectionSymmetricKeyResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Status status = 2;
 * @return {!proto.proto.ConnectionSymmetricKeyResponse.Status}
 */
proto.proto.ConnectionSymmetricKeyResponse.prototype.getStatus = function() {
  return /** @type {!proto.proto.ConnectionSymmetricKeyResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.proto.ConnectionSymmetricKeyResponse.Status} value */
proto.proto.ConnectionSymmetricKeyResponse.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string symmetric_method = 3;
 * @return {string}
 */
proto.proto.ConnectionSymmetricKeyResponse.prototype.getSymmetricMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.proto.ConnectionSymmetricKeyResponse.prototype.setSymmetricMethod = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 symmetric_iv_size = 4;
 * @return {number}
 */
proto.proto.ConnectionSymmetricKeyResponse.prototype.getSymmetricIvSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.proto.ConnectionSymmetricKeyResponse.prototype.setSymmetricIvSize = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional bool security_issue = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.proto.ConnectionSymmetricKeyResponse.prototype.getSecurityIssue = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.proto.ConnectionSymmetricKeyResponse.prototype.setSecurityIssue = function(value) {
  jspb.Message.setField(this, 5, value);
};


goog.object.extend(exports, proto.proto);