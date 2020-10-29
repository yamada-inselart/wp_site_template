(function ($) {
  function isset(data) {
    if (data === "" || data === null || data === undefined) {
      return false;
    } else {
      return true;
    }
  }

  // Observer
  function Observer() {
    this.listeners = {};
  }
  Observer.prototype = {
    on: function (event, func) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(func);
    },
    off: function (event, func) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(func);
    },
    trigger: function (event, args) {
      if (!this.listeners[event]) {
        return;
      }
      var ref = this.listeners[event];
      for (var i = 0, len = ref.length; i < len; i++) {
        var listener = ref[i];
        if (typeof listener === "function") listener(args);
      }
    },
  };

  function AnchorScroll(options) {
    this.initialize(options);
  }
  AnchorScroll.prototype = {
    initialize: function (options) {
      var defaults = {
        target: 'a[href^="#"]',
        speed: 500,
        easing: "swing",
        offset: 0,
        center: 0,
      };
      this.settings = $.extend({}, defaults, options);
      this.Observer = new Observer();

      this.handleEvents();
    },
    handleEvents: function () {
      var self = this,
        target = self.settings.target;

      $(target).on("click", function () {
        var href = $(this).attr("href"),
          _target = $(href == "#" || href === "" ? "html" : href);
        self.toScroll(_target);
        return false;
      });
      $(window).on("load", function () {
        var urlHash = location.hash;
        if (!urlHash) {
          return false;
        }
        self.toScroll($(urlHash));
      });
    },
    on: function (event, func) {
      switch (event) {
        case "scrollStart":
          this.Observer.on("scrollStart", func);
          break;
        case "scrollEnd":
          this.Observer.on("scrollEnd", func);
          break;
        default:
          console.log("Error Observer");
          break;
      }
    },
    toScroll: function (target) {
      var self = this,
        _settings = $.extend({}, this.settings, $(target).data()); //data-〇〇にセットされていれば優先

      self.Observer.trigger("scrollStart", {
        target: target,
        settings: _settings,
      });

      var position = this.getPosition(target, _settings),
        callback = 0;

      $("body, html").animate(
        { scrollTop: position },
        _settings.speed,
        _settings.easing,
        function () {
          if (callback === 0) {
            self.Observer.trigger("scrollEnd", {
              target: target,
            });
            callback = 1;
          }
        }
      );
    },
    getPosition: function (target, settings) {
      var position = target.offset().top;
      if (settings.center == 1) {
        //センターの場合
        position = position + target.outerHeight() / 2 - $(window).height() / 2;
      }
      position = position + Number(settings.offset);
      position = 0 <= position ? position : 0;
      return position;
    },
  };

  $.fn.AnchorScroll = function (options) {
    return new AnchorScroll(options);
  };
})(jQuery);
