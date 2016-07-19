var eventbusState = {};

(function() {

    var handlers = {};

    /* Publishes event with id. Passes rest arguments to handler. */
    eventbusState.publish = function(eventId) {
      if(handlers[eventId]) {
        handlers[eventId].func.apply(handlers[eventId].thisRef, Array.prototype.slice.call(arguments, 1));
      } else {
        console.warn('No handler for ' + eventId);
      }
    }

    /* Registers callback which is invoked for event id */
    eventbusState.on = function(tr, id, fn) {
      handlers[id] = { thisRef: tr, func: fn};
    }

    module.exports.publish = eventbusState.publish;
    module.exports.on = eventbusState.on;

})();
