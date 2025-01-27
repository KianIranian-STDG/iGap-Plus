export default class GeoLocation {

  static getCurrentPosition(options) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        (error) => {
          reject(error);
        },
        options
      );
    });
  }

  static watchPosition(options, success, error = null) {
    return navigator.geolocation.watchPosition(success, error, options);
  }

  static clearWatch(id) {
    navigator.geolocation.clearWatch(id);
  }
}