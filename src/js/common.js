(function () {
  // -------------------------------------------------------------------
  // htmlタグに以下のブラウザ判別用クラスを追加します
  // -------------------------------------------------------------------
  function addBrowserClass() {
    var __add = function (name, ver) {
      $(".wrap").addClass(
        name +
          (ver != "" ? " " + name + (ver * 1).toString().replace(".", "_") : "")
      );
    };
    var userAgent = window.navigator.userAgent.toLowerCase();
    var appVersion = window.navigator.appVersion.toLowerCase();
    var get;
    if ((get = userAgent.match(/msie (\d+(\.\d+)?)/i))) {
      __add("ie", get[1]);
    } else if ((get = userAgent.match(/Trident.+rv\:(\d+(\.\d+)?)/i))) {
      __add("ie", get[1]);
    } else if ((get = userAgent.match(/chrome\/(\d+(\.\d+)?)/i))) {
      __add("chrome", get[1]);
    } else if ((get = userAgent.match(/firefox\/(\d+(\.\d+)?)/i))) {
      __add("firefox", get[1]);
    } else if ((get = userAgent.match(/opera\/(\d+(\.\d+)?)/i))) {
      __add("opera", get[1]);
    } else if ((get = userAgent.match(/safari\/(\d+(\.\d+)?)/i))) {
      __add("safari", get[1]);
    }

    // ついでにモバイルOS情報を付加する→ios(iphone, ipad, ipod), android
    if ((get = userAgent.match(/iPhone OS (\d+(\.\d+)?)/i))) {
      __add("ios", get[1]);
    }
    if ((get = userAgent.match(/iPhone;/i))) {
      __add("iphone", "");
    } else if ((get = userAgent.match(/iPod;/i))) {
      __add("ipod", "");
    } else if ((get = userAgent.match(/iPad;/i))) {
      __add("ipad", "");
    } else if ((get = userAgent.match(/Android (\d+(\.\d+)?)/i))) {
      __add("android", get[1]);
    }
  }

  //リサイズ時のアニメーションを制御するプログラム
  function resizeTransitionControll() {
    var rsTimer = false,
        $_body = $("body");
    $(window).on('resize', function () {
      $_body.addClass("transitionStop");

      if (rsTimer !== false) {
        clearTimeout(rsTimer);
      }
      rsTimer = setTimeout(function () {
        $_body.removeClass("transitionStop");
      }, 100);
    });
  }

  // スマホメニュー
  function SpMenuObject() {
    this.initialize();
  }
  SpMenuObject.prototype = {
    initialize: function () {
      this.$_menuBtn = $("#js-spMenuBtn");
      this.$_menu = $("#js-responsive_menu");

      this.state = 0;

      this.handleEvents();
    },
    handleEvents: function () {
      var self = this;

      self.$_menuBtn.on("click", function () {
        if (self.state === 1) {
          self.close();
        } else {
          self.open();
        }
      });
      
      $(window).on("keydown", function (e) {
        if (e.keyCode == 27) {
          if (self.state === 1) {
            self.close();
          }
        }
      });
    },
    open: function (target) {
      $(".menu-trigger", target).addClass("active");
      this.$_menu.slideDown();
      this.state = 1;
    },
    close: function (target) {
      $(".menu-trigger", target).removeClass("active");
      this.$_menu.slideUp();
      this.state = 0;
    },
  };

  $(function () {
    addBrowserClass();
    resizeTransitionControll();

    new SpMenuObject();

    var anchorScroll = $(document).AnchorScroll({});
  });
})();
