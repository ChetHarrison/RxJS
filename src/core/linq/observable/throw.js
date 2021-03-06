  /**
   *  Returns an observable sequence that terminates with an exception, using the specified scheduler to send out the single onError message.
   *  There is an alias to this method called 'throwException' for browsers <IE9.
   *  
   * @example
   *  var res = Rx.Observable.throw(new Error('Error'));
   *  var res = Rx.Observable.throw(new Error('Error'), Rx.Scheduler.timeout);
   * @param {Mixed} exception An object used for the sequence's termination.
   * @param {Scheduler} scheduler Scheduler to send the exceptional termination call on. If not specified, defaults to Scheduler.immediate.
   * @returns {Observable} The observable sequence that terminates exceptionally with the specified exception object.
   */
  var observableThrow = Observable['throw'] = Observable.throwException = function (exception, scheduler) {
    isScheduler(scheduler) || (scheduler = immediateScheduler);
    return new AnonymousObservable(function (observer) {
      return scheduler.schedule(function () {
        observer.onError(exception);
      });
    });
  };
