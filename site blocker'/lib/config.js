var config = {};

config.log = false;

config.test = {"page": "https://webbrowsertools.com/test-blocking-rules/"};

config.welcome = {
  set lastupdate (val) {app.storage.write("lastupdate", val)},
  get lastupdate () {return app.storage.read("lastupdate") !== undefined ? app.storage.read("lastupdate") : 0}
};

config.addon = {
  set notifications (val) {app.storage.write("notifications", val)},
  get notifications () {return app.storage.read("notifications") !== undefined ? app.storage.read("notifications") : true}
};

config.blocklist = {
  set domains (val) {app.storage.write("blocklist", val)},
  set iframes (val) {app.storage.write("blocklist-iframes", val)},
  get domains () {return app.storage.read("blocklist") !== undefined ? app.storage.read("blocklist") : {}},
  get iframes () {return app.storage.read("blocklist-iframes") !== undefined ? app.storage.read("blocklist-iframes") : {}}
};