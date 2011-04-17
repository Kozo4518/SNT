/***********************************************************
 *
 *	File:			script.js
 *	Author:		RMS
 *	Created:	March 2011
 *
 **********************************************************/

/* RMS code section. begin
Created by Wing
rms_todo: remove at implementation
*/

var gbl_env = "";

switch(window.location.hostname)
{
   case "cateamsite03":
   case "www.rms.com":
     gbl_env = "rms";
     break;
   default:
     gbl_env = "";
}

/* RMS code section. end */


function inspect(obj) {
  var str = '';
  for (var i in obj) str += i + ': ' + obj[i] + '\n';
  alert(str);
}

/*
  jQuery doesn't yet support input[type=email], which has UI benefits for iOS users
  create capability here
  note that for input[type=email] elements, $(obj).attr('type') returns 'text'
  ALSO: jQuery validator scripts were hacked to make this work; search for ':email' in each
*/
$(function () {
  $.extend($.expr[':'], {
    email: function (obj) {
      return obj.getAttribute('type') == 'email';
    }
  });
});


$(document).ready(function(){
  
	//===============================================
	//	VIDEO PRESENTER
	//  Manages interactions related to hero video (Careers)
	//===============================================
  (function($){
    $.fn.videoPresenter = function(options) {
      return this.each(function() {
        new $vp(this, options);
      });
    };
    
    var defaults = {
      dur:400
    };
    
    /**
     * The videoPresenter object.
     *
     * @constructor
     * @name $.videoPresenter
     * @param Object e The element to create the videoPresenter for.
     * @param Hash o A set of key/value pairs to set as configuration properties.
     */
    $.videoPresenter = function(e, o) {
      this.options            = $.extend({}, defaults, o || {});

      // elements
      var self                = this;
      this.container          = $(e);
      this.win                = $('#presenter');
      this.nav                = $('#presenterNav').find('ul');
      this.heroImg            = this.win.find('.hero');
      this.vBg                = $('#vidOverlay');
      this.btnClose           = this.vBg.find('a.close');
      this.iframe             = $('#vidFrame');
      
      // flags, measurements
      this.heroH              = this.heroImg.height();
      
      // attach behaviors
      this.nav.children().each(function(){
        $(this).find('a').bind('click', { obj: self }, self.showVideo);
      });
      $(this.btnClose).bind('click', { obj: self }, self.hideVideo);

    };

    // Create shortcut for internal use
    var $vp = $.videoPresenter;
    $vp.fn = $vp.prototype = {};
    $vp.fn.extend = $vp.extend = $.extend;

    $vp.fn.extend({
      /**
       * Shows a video.
       *
       * @name showVideo
       * @type undefined
       */
      showVideo: function(e) {
        var o = e.data.obj; //the instantiated $.videoPresenter object
        var src = $(this).attr('href');
		    var onComplete = function() {
		      o.vBg.css({ top:0 });
		      o.iframe.attr({ src: src });
		    };
        o.heroImg.animate(
          { top:-o.heroH },
          o.options.dur,
          'easeOutQuint',
          onComplete
        );
        e.preventDefault();
      },

      /**
       * Hides the video overlay.
       *
       * @name hideVideo
       * @type undefined
       */
      hideVideo: function(e) {
        var o = e.data.obj; //the instantiated $.videoPresenter object
		    o.vBg.css({ top:-10000 });
		    o.iframe.attr({ src: '' });
        o.heroImg.animate(
          { top:0 },
          o.options.dur,
          'easeOutQuint'
        );
        e.preventDefault();
      }

    });

  })(jQuery);
  
  if ($('#presenterCont').length) $('#presenterCont').videoPresenter();
  

	//===============================================
	//	TEAM PHOTO
	//  Manages interactions related to Team Photo
	//===============================================
  (function($){
    $.fn.teamPhoto = function(options) {
      return this.each(function() {
        new $tp(this, options);
      });
    };

    var defaults = {
      fadeDur:    300,
      animDur:    750,
      easing:     'easeOutQuint',
      popupShim:  15 // accounts for left padding of containing section
    };

    /**
     * The teamPhoto object.
     *
     * @constructor
     * @name $.teamPhoto
     * @param Object e The element to create the teamPhoto for.
     * @param Hash o A set of key/value pairs to set as configuration properties.
     */
    $.teamPhoto = function(e, o) {
      this.options            = $.extend({}, defaults, o || {});

      // fade animations will be different for IE
      this.specialFade        = $('html').is('.ie8, .ie7');
      
      // elements
      var self                = this;
      this.container          = $(e);
      this.panel              = $('#team_panel');
      this.slider             = $('#team_slider');
      this.photo              = this.panel.find('img.photo');
      this.people             = this.panel.find('ul');
      this.popup              = $('#tooltip');
      this.pointer            = this.popup.find('.pointer');
      
      this.bioName            = $('#bioName');
      this.bioPosition        = $('#bioPosition');
      this.bioLocation        = $('#bioLocation');
      this.bioImg             = $('#bioImg');
      this.bioContent         = $('#bioContent');
      
      // flags, measurements
      this.winW               = this.container.width();
      this.photoW             = this.photo.width();
      this.panelRange         = this.photoW - this.winW;
      this.popupRange         = this.winW - this.popup.outerWidth();
      this.popupLeft          = parseInt(this.popup.css('left'));
      this.pointerLeft        = parseInt(this.pointer.css('left'));
      
      // restore popup position
//      this.popup.css({opacity:0, bottom:-125});
      this.teamFade(this.popup, 0, 0);
      this.popup.css({bottom:-135});
      
      // pull in JSON data
      /*
      rms_todo: remove gbl_env and non-rms code (else)
      */
      if (gbl_env == "rms")
      {
        $.ajax({
          type: "POST",
          contentType: "application/json; charset=utf-8",
          url: "/careers.asmx/get_employee_profiles",
          cache: false,
          context: this,
          data: "{}",
          dataType: "json",
          success: function(msg) {
            this.bios = $.parseJSON(msg.d);                    
          }
        });

      } else {
        $.ajax({
          url: "/careers/get_employee_profiles.txt",
          context: this,
          success: function(data){
            this.bios = $.parseJSON(data);
          }
        });
      }

      // attach behaviors
      this.people.children().each(function(i){
        // determine leftPos of panel needed to center this image
        var imgOffset = Math.round($(this).position().left + ($(this).width()/2));
        var left = Math.round((self.winW/2) - imgOffset);
        
        // determine boundaries and attach data to <li>
        if (left > 0) { // can't scroll far enough to left, move popup
          var popupLeft = self.popupLeft - left;
          var d = { panel:0, handle:0, popup:popupLeft, pointer:self.pointerLeft }
          if (popupLeft < 0) { // popup will be out of bounds too, move pointer
            var delta = -popupLeft;
            d.popup = self.options.popupShim;
            d.pointer -= delta + self.options.popupShim;
          }
        } else if (left < -self.panelRange) { // can't scroll far enough to right, move popup
          var popupLeft = self.popupLeft + Math.abs(left + self.panelRange);
          var d = { panel:-self.panelRange, handle:100, popup:popupLeft, pointer:self.pointerLeft }
          if (popupLeft > self.popupRange) { // popup will be out of bounds too, move pointer
            var delta = popupLeft - self.popupRange;
            d.popup = self.popupRange + self.options.popupShim;
            d.pointer += delta - self.options.popupShim;
          }
        } else {
          var handleLeft = Math.abs(left) / self.panelRange * 100;
          var d = { panel:left, handle:handleLeft, popup:self.popupLeft, pointer:self.pointerLeft }
        }
        $(this).data('positions', d);
        
        // add handler
        $(this).find('a').bind('click', { obj: self, order: i }, self.selectPerson);
      });
      
      // instantiate slider
      if (this.panelRange < 0) {
        this.slider.hide();
      } else {
        this.slider.slider({
          max: this.panelRange,
          create: function(e, ui){
            self.handle = $(self.slider.find('a.ui-slider-handle'));
            // hover effect on scrollbar
            self.handle.hover(
              function(){ $(this).stop().fadeTo(self.options.fadeDur, 0.85); },
              function(){ $(this).stop().fadeTo(self.options.fadeDur, 0.7); }
            );
          },
          start: function(e, ui){
//            self.popup.fadeTo(self.options.fadeDur, 0);
            self.teamFade(self.popup, self.options.fadeDur, 0);
          },
          slide: function(e, ui){
            self.panel.css('left',-ui.value);
/*
          },
          stop: function(e, ui){
            console.log(ui.value);
*/
          }
        });
      }
      
    };

    // Create shortcut for internal use
    var $tp = $.teamPhoto;
    $tp.fn = $tp.prototype = {};
    $tp.fn.extend = $tp.extend = $.extend;

    $tp.fn.extend({
      /**
       * Handles selection of a team member.
       *
       * @name selectPerson
       * @type undefined
       */
      selectPerson: function(e) {
        var o = e.data.obj; //the instantiated $.teamPhoto object
        var whichPerson = e.data.order;
        var p = $(this).parent().data('positions');
        
        // animate panel
        o.panel.animate({
            left: p.panel
          },
          {
            duration: o.options.animDur,
            easing: o.options.easing
          });
        // animate popup
        o.loadInfo(whichPerson);
        if (o.specialFade) {
          o.popup.show().animate({
              left: p.popup
            },
            {
              duration: o.options.animDur,
              easing: o.options.easing,
              queue: false
            });
        } else {
          o.popup.animate({
              left: p.popup
            },
            {
              duration: o.options.animDur,
              easing: o.options.easing,
              queue: false
            }).animate({
                opacity: 1
              },
              {
                duration: o.options.fadeDur,
                easing: o.options.easing,
                queue: false
              });
        }
        // animate pointer
        o.pointer.animate({
            left: p.pointer
          },
          {
            duration: o.options.animDur,
            easing: o.options.easing
          });
        // animate handle
        // since this is a programmatic move, update UI value manually
        $(o.handle).animate({
            left: p.handle.toString() + '%'
          },
          {
            duration: o.options.animDur,
            easing: o.options.easing,
            complete: function(){ $(this).slider('value', Math.round(p.handle * o.panelRange / 100)); }
          });
        
        e.preventDefault();
      },

      /**
       * Swaps in new user's biographical info.
       *
       * @name loadInfo
       * @type undefined
       */
      loadInfo: function(person) {
        var info = this.bios[person];
        this.bioName.html(info.fullname);
        this.bioPosition.html(info.position);
        this.bioLocation.html(info.location);
        this.bioImg.attr({ src: info.img_src, alt: info.fullname });
        this.bioContent.html(info.biography['#cdata-section']);
      },

      /**
       * Forks fade animations for IE and non-IE, since IE doesn't handle opacity changes well (esp with css3PIE).
       *
       * @name teamFade
       * @type undefined
       */
      teamFade: function(el, duration, opacity) {
        if (this.specialFade) {
          if (!opacity) $(el).hide();
            else $(el).show();
        } else {
          $(el).fadeTo(duration, opacity);
        }
      }

    });

  })(jQuery);

  if ($('#team').length) $('#team').teamPhoto();


	//===============================================
	//	CHAT WINDOW
	//  Manages custom chat interactions
	//===============================================
  (function($){
    $.fn.chatWindow = function(options) {
      return this.each(function() {
        new $cw(this, options);
      });
    };
    
    var defaults = {
      dur: 400,
      topVisible: 0,
      topHidden: -10000
    };
    
    /**
     * The chatWindow object.
     *
     * @constructor
     * @name $.chatWindow
     * @param Object e The element to create the chatWindow for.
     * @param Hash o A set of key/value pairs to set as configuration properties.
     */
    $.chatWindow = function(e, o) {
      this.options            = $.extend({}, defaults, o || {});

      // elements
      var self                = this;
      this.win                = $(e);
      this.threadArea         = $('#lp_thread');
      this.typeArea           = $('#lp_type');
      this.btnClose           = $('#btn_close_chat');
      this.btnStart           = $('.openChatWin');
      this.btnEnd             = $('#btn_end_chat');
      this.agentTyping        = $('#lp_agent_typing');
      this.agentNameCont      = $('#lp_agent_name');
      this.btnEmail           = $('#btn_email_transcript');
      this.emailOverlay       = $('#lp_email_transcript');
      this.emailForm          = $('#lp_form_email');
      this.emailAddress       = $('#lp_email');
      this.emailSend          = $('#lp_email_send');
      this.emailCancel        = $('#lp_email_cancel');
      this.emailSuccess       = $('#lp_success');
      this.emailSuccessAddr   = $('#lp_success_email');
      this.btnPopup           = $('#btn_launch_popup');
      this.instant            = $('#hd_instant');
      
      // flags, measurements
      this.inPopup            = this.win.closest('#body_popup').length;
      
      // attach behaviors
      if (!this.inPopup) {
        this.btnClose.bind('click', { obj: self }, self.hideWin);
        this.btnPopup.bind('click', { obj: self }, self.launchPopup);
        this.btnStart.each(function(){
          $(this).bind('click', { obj: self }, self.requestChat);
        });
      }
      this.btnEnd.bind('click', { obj: self }, function(){ self.endChat(); });
      this.typeArea.bind('keypress', { obj: self }, self.sendText);
      this.btnEmail.bind('click', { obj: self }, self.openEmailTranscript);
      this.emailCancel.bind('click', { obj: self }, self.closeEmailTranscript);
      this.emailSend.bind('click', { obj: self }, function(){ self.emailForm.submit(); });
      
      // email form validation
      this.emailForm.validate({
        messages: {
          email: {
            email: "Please enter a valid email address."
          }
        },
        debug:true,
        submitHandler: function(f) {
          self.emailTranscript();
        }
      });
      
      // load session
      this.setup();

    };

    // Create shortcut for internal use
    var $cw = $.chatWindow;
    $cw.fn = $cw.prototype = {};
    $cw.fn.extend = $cw.extend = $.extend;

    $cw.fn.extend({
      /**
       * Sets up a chat session.
       *
       * @name setup
       * @type undefined
       */
      setup: function() {
        // attach object to chat win so we have access to it on LP script load
        this.win.data('cw', this);

        // if user closes popup, chat persists in main window; make sure to end it
        if (this.inPopup) {
          var self = window.opener._cw;
          var _endChat = function(){ self.endChat(true); };
          if (window.attachEvent) window.attachEvent('onunload', _endChat);
            else window.addEventListener('unload', _endChat, false);
            
          // update agent name
          this.agentNameCont.html($.cookie('chatagentname'));
        }
      },

      /**
       * Matches current chat state against an array of possible states.
       *
       * @name inChatState
       * @type undefined
       */
      inChatState: function(lpcObj, states) {
        var s = states || [];
        var current = lpcObj.getState().id;
        for (var i=0; i<s.length; i++) {
          if (s[i]==current) return true;
        }
        return false;
      },

      /**
       * Shows the chat window and loads the application.
       *
       * @name showWin
       * @type undefined
       */
      showWin: function() {
        this.win.css({ top: this.options.topVisible });
        this.btnStart.css({ top: this.options.topHidden });
      },

      /**
       * Hides the chat window, and ends the chat session if it still exists.
       *
       * @name hideWin
       * @type undefined
       */
      hideWin: function(e) {
        var o = e.data.obj; //the instantiated $.chatWindow object
        
        // define a callback
        var st = null;
        var _hideWin = function(){
          o.win.css({ top: o.options.topHidden });
          o.btnStart.css({ top: o.options.topVisible });
          o.threadArea.empty();
          o.typeArea.val('');
          o.agentTyping.css({ visibility: 'hidden' });
          o.emailAddress.empty();
          o.emailOverlay.removeClass('visible');
          if (st) {
            window.clearTimeout(st);
            st = null;
          }
        }

        if (o.inChatState(o.lpc, [1,2,4,7])) {
          // if session active: end chat, notify, delay window hide
          o.endChat();
          var st = window.setTimeout(function(){ _hideWin(); }, 3000);
        } else {
          // else: window hide
          _hideWin();
        }
        
        e.preventDefault();
      },

      /**
       * Ends the chat session.
       *
       * @name endChat
       * @type undefined
       */
      endChat: function(resetMainWin) {
        var rmw = resetMainWin || false;

        // define reset callback
        var st;
        var self = this;
        var _resetWin = function(){
          self.win.css({ top: self.options.topHidden });
          self.btnStart.css({ top: self.options.topVisible });
          self.threadArea.empty();
          self.typeArea.val('');
          self.agentTyping.css({ visibility: 'hidden' });
          self.emailAddress.empty();
          self.emailOverlay.removeClass('visible');
          self.checkAvailability();
          window.clearTimeout(st);
        }

        // notify if chat session not active
        if (!this.inChatState(this.lpc, [1,2,4,7])) {
          this.addChatText(null, 'Chat session is not active.', 'system');
          
          // popup closing; before we exit, reset main win
          if (rmw) st = window.setTimeout(function(){ _resetWin(); }, 3000);

          return false;
        }
        
        // else, end session and alert user
        this.lpc.endChat();
        this.addChatText(null, 'Ending chat session...', 'system');
        
        // if in popup, close window
        // if in main win, reset screen
        if (this.inPopup) {
          st = window.setTimeout(function(){ window.close(); }, 3000);
        } else {
          st = window.setTimeout(function(){ _resetWin(); }, 3000);
        }
      },

      /**
       * Checks if any operators are available.
       *
       * @name checkAvailability
       * @type undefined
       */
      checkAvailability: function() {
        this.lpc.chatAvailability();
      },

      /**
       * Request chat from available operator.
       *
       * @name requestChat
       * @type undefined
       */
      requestChat: function(e) {
        var o = e.data.obj; //the instantiated $.chatWindow object
        o.showWin();
        o.lpc.requestChat();
        e.preventDefault();
      },

      /**
       * Adds chat text to the thread.
       *
       * @name addChatText
       * @type undefined
       */
      addChatText: function(by, text, klass) {
        var who = (by != null) ? '<span class="who">' + by + ': </span>' : '';
        var str = who + text.replace(/\n/gi, '<br />');
        this.threadArea.append($('<div class="' + klass + '">' + str + '</div>')).scrollTop(50000);
      },

      /**
       * Adds an error message to the thread.
       *
       * @name addChatError
       * @type undefined
       */
      addChatError: function(text, isError) {
        var e = isError || false;
        var prefix = e ? '<strong>ERROR:</strong> ' : '';
        this.threadArea.append($('<div class="error">' + prefix + text + '</div>')).scrollTop(50000);
      },

      /**
       * Sends chat text.
       *
       * @name sendText
       * @type undefined
       */
      sendText: function(e) {
        // only alter behavior if ENTER key was pressed
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code != 13) return true;
        
        var o = e.data.obj; //the instantiated $.chatWindow object
        var t = $(this).val();
        if (t != ''){
          o.lpc.addLine(t.replace(/\n/gi, ' *** ')); // textarea line breaks don't get sent; replace here with some other identifiable string for agent
          o.addChatText(o.lpc.getVisitorName(), t, 'user');
          o.typeArea.val('');
        }
        e.preventDefault();
        return true;
      },

      /**
       * Opens dialog for emailing the chat transcript.
       *
       * @name openEmailTranscript
       * @type undefined
       */
      openEmailTranscript: function(e) {
        var o = e.data.obj; //the instantiated $.chatWindow object
        if (o.emailOverlay.hasClass('visible')) return false;
        o.emailOverlay.addClass('visible');
        o.emailAddress.focus();
        e.preventDefault();
      },

      /**
       * Dismisses dialog for emailing the chat transcript.
       *
       * @name closeEmailTranscript
       * @type undefined
       */
      closeEmailTranscript: function(e) {
        var o = e.data.obj; //the instantiated $.chatWindow object
        o.emailOverlay.removeClass('visible');
        o.emailAddress.val('');
        e.preventDefault();
      },

      /**
       * Emails the chat transcript.
       *
       * @name emailTranscript
       * @type undefined
       */
      emailTranscript: function() {
        // email
        this.lpc.requestTranscriptEmail(this.emailAddress.val());
        // show success msg
        this.emailForm.hide();
        this.emailSuccessAddr.html(this.emailAddress.val());
        this.emailSuccess.show();
        // hide and reset
        var self = this;
        var _reset = function(){
          self.emailCancel.triggerHandler('click');
          self.emailSuccess.hide();
          self.emailSuccessAddr.html('your email address');
          self.emailForm.show();
          window.clearTimeout(st);
        };
        var st = window.setTimeout(function(){ _reset(); }, 3000);
      },

      /**
       * Handler for checking for available operators.
       *
       * @name onChatAvailable
       * @type undefined
       */
      onChatAvailable: function(availObj) {
        if (availObj.availability == true) {
          if (!_cw.inPopup) {
            _cw.btnStart.css({ top: _cw.options.topVisible });
          } else {
            // resume session started in parent window
            _cw.lpc.resumeChat($.cookie('chatsessionkey'));
          }
        } else {
          if (_cw.instant.length) {
            _cw.instant.append($('<img src="/img/chat_scribble.png" />'));
          }
        }
      },

      /**
       * Handler for when a chat session is initiated (different from onStart, which is when an agent accepts).
       *
       * @name onChatInit
       * @type undefined
       */
      onChatInit: function() {
        if (!_cw.inPopup) {
          // save session key in case user launches popup
          $.cookie('chatsessionkey', _cw.lpc.sessionkey);
        }
      },

      /**
       * Handler for when an agent accepts a chat request.
       *
       * @name onChatStart
       * @type undefined
       */
      onChatStart: function() {
        if (!_cw.inPopup) {
          // save agent name
          var nm = _cw.lpc.getAgentName();
          $.cookie('chatagentname', nm);
          _cw.agentNameCont.html(nm);
        }
      },

      /**
       * Handler for when a chat session is terminated by the server.
       *
       * @name onChatStop
       * @type undefined
       */
      onChatStop: function(reasonID, reasonText) {
        _cw.addChatError(reasonText);
      },

      /**
       * Handler for sending a new line.
       *
       * @name onChatLine
       * @type undefined
       */
      onChatLine: function(line) {
        switch (line.type) {
          case '0': // user
            _cw.addChatText(line.by, line.text, 'user');
            break;
          case '1': // operator
          case '3': // url
          case '4': // html
            _cw.addChatText(line.by, line.text, 'operator');
            break;
          default: // everything else
            _cw.addChatText(null, line.text, 'system');
        }
      },

      /**
       * Handler for checking if an agent is typing.
       *
       * @name onChatAgentTyping
       * @type undefined
       */
      onChatAgentTyping: function(isTyping) {
        _cw.agentTyping.css({ visibility: (isTyping ? 'visible' : 'hidden') });
      },

      /**
       * Handler for chat errors.
       *
       * @name onChatError
       * @type undefined
       */
      onChatError: function(errObj) {
        _cw.addChatError(errObj.text, true);
      },

      /**
       * Launches the current chat in a new window.
       *
       * @name launchPopup
       * @type undefined
       */
      launchPopup: function(e) {
        var o = e.data.obj; //the instantiated $.chatWindow object
        var features = "width=587,height=513,resizable=yes,status=yes";
        var windowObjectReference = window.open($(this).attr('href'), 'rms_popup', features);
        o.win.css({ top: o.options.topHidden });
        e.preventDefault();
      }

    });

  })(jQuery);
  
  if ($('#chat_win').length) {
    // instantiate
    $('#chat_win').chatWindow();
    _cw = $('#chat_win').data('cw');

    // config
    var lpc;
    lpChatConfig = {
      apiKey : '280e4c40d2524aee8895e299efc4359c', // 66a2b5d32
      lpServer : 'dev.liveperson.net',
      lpNumber : 'P89578626', // small business test account
      sessVar : 'SV!',
      skillUDE : 'skill',
      onLoad : function() {
        // init session
        _cw.lpc = new lpChat();
        // check operator availability
        _cw.checkAvailability();
      },
      onInit : _cw.onChatInit,
      onStart : _cw.onChatStart,
      onLine : _cw.onChatLine,
      onError : _cw.onChatError,
      onAvailability : _cw.onChatAvailable,
      onStop : _cw.onChatStop,
      onAgentTyping : _cw.onChatAgentTyping
    };
    lpChatConfig.lpAddScript = function(src, ignore) {var c = lpChatConfig;if(typeof(c.lpProtocol)=='undefined'){c.lpProtocol = (document.location.toString().indexOf("https:")==0) ? "https" : "http";}if (typeof(src) == 'undefined' || typeof(src) == 'object') {src = c.lpChatSrc ? c.lpChatSrc : '/hcp/html/lpChatAPI.js';};if (src.indexOf('http') != 0) {src = c.lpProtocol + "://" + c.lpServer + src + '?site=' + c.lpNumber;} else {if (src.indexOf('site=') < 0) {if (src.indexOf('?') < 0)src = src + '?'; else src = src + '&';src = src + 'site=' + c.lpNumber;}};var s = document.createElement('script');s.setAttribute('type', 'text/javascript');s.setAttribute('charset', 'iso-8859-1');s.setAttribute('src', src);document.getElementsByTagName('head').item(0).appendChild(s);}
    if (window.attachEvent) window.attachEvent('onload', lpChatConfig.lpAddScript);
      else window.addEventListener('load', lpChatConfig.lpAddScript, false);
  }
  

	//===============================================
	//	RISK MAP
	//  Manages interactions related to Risk map
	//===============================================
  (function($){
    $.fn.riskMap = function(infobar, options) {
      return this.each(function() {
        new $rm(this, infobar, options);
      });
    };
    
    var defaults = {
      mapW: 940,
      mapH: 500,
      durOver: 150,
      durOut: 300,
      durPanels: 400,
      attr: {
        fill: "#88d0ee",
        stroke: "#ffffff",
        "stroke-width": 0.3,
        "stroke-linejoin": "round"
      },
      mouseoverAttr: {
        fill: "#76b5cf"
      },
      mouseoutAttr: {
        fill: "#88d0ee"
      },
      mouseoverAttrPeril: {
        fill: "#2982a9"
      },
      mouseoutAttrPeril: {
        fill: "#339ed3"
      },
      sel: {
        fill: "#3572b6"
      }
    };
    
    /**
     * The riskMap object.
     *
     * @constructor
     * @name $.riskMap
     * @param Object e The element to create the riskMap for.
     * @param String infobar The information bar associated with the map.
     * @param Hash o A set of key/value pairs to set as configuration properties.
     */
    $.riskMap = function(e, infobar, o) {
      this.options            = $.extend({}, defaults, o || {});

      // elements
      var self                = this;
      this.container          = $(e);
      
      this.infobar            = $(infobar);
      this.infoDisplay        = {
        flag:           $('#map_flag'),
        cname:          $('#map_country_name'),
        exposure:       $('#map_exposure'),
        exposureRank:   $('#map_exposure_rank'),
        population:     $('#map_population'),
        populationRank: $('#map_population_rank'),
        lifeexp:        $('#map_lifeexp'),
        lifeexpRank:    $('#map_lifeexp_rank'),
        landmass:       $('#map_landmass'),
        landmassRank:   $('#map_landmass_rank')
      };
      this.panels             = $('#mapinfo_panels');
      this.backToModels       = $('#mapinfo_back_to_models');
      this.modelLinks         = $('#model_list').find('a');
      this.modelLinkAll       = $('#model_all');
      this.modelInfo          = $('#model_info');
      this.modelDescHd        = $('#model_desc_hd');
      this.modelDescBody      = $('#model_desc_body');
      
      // data; dynamically created elements
      if (typeof countryData == 'undefined') return;
      this.countryData        = countryData; // data about each country, including SVG coords
      this.countries          = {}; // will be populated with countries in setup()
      this.active             = null;
      
      this.perils             = {
        "all" :           { hd:"All Models", copy:"RMS models risk in over 100 countries, allowing stakeholders to analyze the probability of loss in regions with the highest exposure. Our models are built using detailed data reflecting highly localized variations in hazard, and databases capturing property and human exposures. They are continually updated with the latest scientific research and data." },
        "earthquakes" :   { hd:"Earthquakes", copy:"Along the Pacific Ocean's \"Ring of Fire,\" volcanoes rise and earthquakes strike with such intensity they ring the Earth like a bell. Of the 10 most severe earthquakes since 1900, 9 have struck here. But earthquakes don't kill, buildings do. Earthquake mitigation can have a significant impact on saving lives and reducing damage." },
        "cyclones" :      { hd:"Tropical Cyclones", copy:"The difference between hurricanes, typhoons, and cyclones? Location. All are <strong>tropical cyclones</strong> with winds 74 mph or greater. But, while <strong>hurricanes</strong> make landfall in the Americas, <strong>typhoons</strong> strike China and Japan, and <strong>severe tropical cyclones</strong> hit Australia. Among all catastrophe events worldwide, U.S. hurricanes generate the largest insured loss." },
        "scs" :           { hd:"Severe Convective Storms", copy:"Severe convective storm risk from damaging thunderstorms, hailstorms, tornadoes, and straight-line winds can occur anytime, and nearly anywhere. In the U.S., the breadth and high frequency of such events produces insured losses on par with hurricanes and over three times higher than earthquakes." },
        "windstorms" :    { hd:"Windstorms", copy:"In Northern Europe, extra-tropical systems known as windstorms generate hurricane-force winds, causing losses that can accumulate to extraordinary levels in any given year. Strongest in the winter months, these frequent, swift-moving and broad-reaching systems can cluster together in space and time, and gain strength as they move over land." },
        "winterstorms" :  { hd:"Winter Storms", copy:"Winter storms are extra-tropical systems that bring damaging snow, ice, freezing temperatures, and hurricane-force winds to the U.S. and Canada. Alberta Clippers, Nor'easters, and other strong systems are a key component of catastrophic risk in the Pacific Northwest, central and eastern Canada, the Great Lakes region, and the northeast U.S." },
        "fire" :          { hd:"Fire", copy:"Catastrophic fire risk is varied and widespread. Lightning strikes or human carelessness create conflagrations that cross the wildland-urban interface. Electrical fire, arson, and earthquakes threaten cities. In the 20th century, fires following the 1906 San Francisco and 1923 Tokyo earthquakes generated the greatest property loss, second only to war." },
        "stormsurge" :    { hd:"Storm Surge", copy:"Strong winds create storm surge events where waves rise to dangerous levels, battering offshore operations and drowning low-lying coastal regions. Sea defense failures can compound damage, as Hurricane Katrina illustrated. Despite measures to protect exposed coastlines, storm surge risk escalates as coastal regions are increasingly developed." },
        "floods" :        { hd:"Floods", copy:"From localized flash floods to major river inundations, inland flooding can damage properties and endanger populations. In Europe, flood risk continues to rise due to accelerated development in river floodplains. In other regions like China, typhoons can deluge the continent, triggering deadly landslides and causing rivers to swell to record heights." },
        "terrorism" :     { hd:"Terrorism", copy:"The terrorism landscape is dynamic and complex. By using game theory to understand the motivations of terrorist organizations, and simulating the impacts of chemical, biological, radiological, and nuclear (CBRN) attacks, models can replicate target selection and potential loss, and assess the efficacy of counter-terrorism measures." },
        "disease" :       { hd:"Infectious Disease", copy:"Infectious diseases are the leading cause of death worldwide. Influenza pandemics pose a major threat in today's highly mobile society, as the 2009 H1N1 pandemic demonstrated. By modeling the dynamics of viral infectiousness and spread, and the impacts of vaccination and mitigation, this threat can be anticipated and understood." }
      };
      this.activePeril        = 'all';
      
      // other vars
      this.flagPath           = '/img/flags/70/';
      this.panelH             = this.panels.find('.panel').eq(0).outerHeight();
      
      // non-map behaviors
      this.backToModels.click(function(e){
        self.showPanel(0);
        e.preventDefault();
      });
      this.modelLinks.click({ obj: self }, self.filterPeril);
      
      // map setup
      this.setup();
    };

    // Create shortcut for internal use
    var $rm = $.riskMap;
    $rm.fn = $rm.prototype = {};
    $rm.fn.extend = $rm.extend = $.extend;

    $rm.fn.extend({
      /**
       * Sets up the map.
       *
       * @name setup
       * @type undefined
       */
      setup: function() {
        // define Raphael object
        this.r = Raphael(this.container.attr('id'), this.options.mapW, this.options.mapH);
        this.r.rect(0, 0, this.options.mapW, this.options.mapH).attr({ fill: '#fff', 'stroke-width': 0 });
        
        // organize peril sets
        for (var p in this.perils) {
          this.perils[p].set = this.r.set();
        }

        // build map and attach behaviors
        var country;
        for (var c in this.countryData) {
          country = this.r.path(this.countryData[c].svg).attr(this.options.attr);
          $(country.node).data('cc', c);
          this.applyHoverStates(country);
          this.countries[c] = country;
          
          // add to peril sets
          for (var i=0; i<this.countryData[c].perils.length; i++) {
            this.perils[this.countryData[c].perils[i]].set.push(country);
          }
        }
        
        // All Models = default
        this.modelLinkAll.triggerHandler('click');
      },

      /**
       * Applies basic animations to country objects.
       *
       * @name applyHoverStates
       * @type undefined
       */
      applyHoverStates: function(raphaelObj, activePeril) {
        var self = this;
        var cc = $(raphaelObj.node).data('cc');
        var ap = activePeril || false;
        $(raphaelObj.node).unbind('hover').hover(
          function(){
            if (self.active == cc) return;
            var attr = ap ? self.options.mouseoverAttrPeril : self.options.mouseoverAttr;
            this.raphael.animate(attr, self.options.durOver);
          },
          function(){
            if (self.active == cc) return;
            var attr = ap ? self.options.mouseoutAttrPeril : self.options.mouseoutAttr;
            this.raphael.animate(attr, self.options.durOut);
          }
        ).unbind('click').click(function(e){
          if (self.active == cc) return;
          self.selectCountry(cc);
        });
      },

      /**
       * Responds to user selecting a country.
       *
       * @name selectCountry
       * @type undefined
       */
      selectCountry: function(countryCode) {
        // update active country
        var oldCC = this.active;
        this.active = countryCode;
        
        // update data in infobar and show country panel
        this.infoDisplay.flag.attr('src', this.flagPath + this.countryData[countryCode].flag);
        this.infoDisplay.cname.html(this.countryData[countryCode].name);
        this.infoDisplay.exposure.html(this.countryData[countryCode].facts.exposure[0]);
        this.infoDisplay.exposureRank.html(this.countryData[countryCode].facts.exposure[1]);
        this.infoDisplay.population.html(this.countryData[countryCode].facts.population[0]);
        this.infoDisplay.populationRank.html(this.countryData[countryCode].facts.population[1]);
        this.infoDisplay.lifeexp.html(this.countryData[countryCode].facts.lifeexp[0]);
        this.infoDisplay.lifeexpRank.html(this.countryData[countryCode].facts.lifeexp[1]);
        this.infoDisplay.landmass.html(this.countryData[countryCode].facts.landmass[0]);
        this.infoDisplay.landmassRank.html(this.countryData[countryCode].facts.landmass[1]);

        this.showPanel(1);
        
        // fade previously active country, if any
        if (oldCC) $(this.countries[oldCC].node).triggerHandler('mouseleave');
        
        // change fill color of newly selected country
        this.countries[countryCode].attr(this.options.sel);
      },

      /**
       * Shows a particular panel in the infobar.
       *
       * @name showPanel
       * @type undefined
       */
      showPanel: function(panel) {
        var p = panel || 0;
        this.panels.animate({
          top: -(p * this.panelH)
        }, this.options.durPanels);
        
        this.backToModels.animate({
          top: (p ? -33 : 0)
        }, this.options.durPanels);
        
        // if switching to country panel, no peril sets should be highlighted
        if (p) {
          var o = this;
          $.each(this.perils[this.activePeril].set, function(){
            if ($(this.node).data('cc') != o.active) this.animate(o.options.mouseoutAttr, o.options.durOver);
            o.applyHoverStates(this);
          });

        // else if returning to default panel, no country should be selected
        // re-highlight active peril set
        } else {
          var active = this.active;
          this.active = null;
          $('#model_' + this.activePeril).triggerHandler('click');
          $(this.countries[active].node).triggerHandler('mouseleave');
        }
      },

      /**
       * Updates panel and map based on selected peril.
       *
       * @name filterPeril
       * @type undefined
       */
      filterPeril: function(e) {
        var o = e.data.obj; //the instantiated $.riskMap object
        var peril = $(this).data('peril');

        // update infobar
        o.modelInfo.fadeOut(o.options.durOver, function(){
          o.modelDescHd.html(o.perils[peril].hd);
          o.modelDescBody.html(o.perils[peril].copy);
          $(this).fadeIn(o.options.durOut);
        });

        // update map
/*
        $.each(o.perils[o.activePeril].set, function(){
          this.attr(o.options.mouseoutAttr);
          o.applyHoverStates(this);
        });
        $.each(o.perils[peril].set, function(){
          this.animate(o.options.mouseoutAttrPeril, o.options.durOver);
          o.applyHoverStates(this, true);
        });
*/
        var fadeUp = function(){
          var obj = o;
          var p = peril;
          $.each(obj.perils[p].set, function(){
            this.animate(obj.options.mouseoutAttrPeril, obj.options.durOver);
            obj.applyHoverStates(this, true);
          });
        };
        if (peril != 'all') {
          $.each(o.perils[o.activePeril].set, function(){
            var obj = o;
            var p = peril;
            this.animate(o.options.mouseoutAttr, o.options.durOver, fadeUp);
            o.applyHoverStates(this);
          });
        } else {
          fadeUp();
        }

        o.activePeril = peril;
      }

    });

  })(jQuery);
  
  if ($('#svgmap').length) $('#svgmap').riskMap('#mapinfo');
  

	//===============================================
	//	VOID LINKS (HREF="#")
	//===============================================
	$(function(){
		$('body').click(function(e){
			var clicked = $(e.target);
			if ((clicked.get(0).tagName.toLowerCase() != 'a') && (clicked.parents('a').length)) clicked = clicked.parents('a').get(0);
			if ((typeof clicked) != 'undefined' && $(clicked).attr('href') == '#') e.preventDefault();
		});
	});

	//===============================================
	//	EXTERNAL LINKS
	//===============================================
	$(function(){
		$('a[rel="external"], a.external').each(function() {
			$(this).attr({
			  'class': $(this).attr('class') + ' external',
				'target': 'rms'
			}); 
		});
	});

  //===============================================
  //	CLIENT LOGIN
  //===============================================
  $(function(){
  	$('<div id="loginOverlay"></div>').prependTo($('#body')).click(function(e){
  	  $('#btnClientLogin').triggerHandler('click');
  	});
  	$('#btnClientLogin').click(function(e){
  	  if ($('#login').hasClass('open')) {
    	  $('#loginOverlay').animate({opacity:0}, 150, function(){ $(this).hide(); });
    	  $('#login').removeClass('open');
  	  } else {
    	  $('#loginOverlay').show().animate({opacity:0.72}, 150);
    	  $('#login').addClass('open');
    	  $('#form_login input[type=text]').eq(0).focus();
  	  }
  	});
  });

/*
  //===============================================
  //  INPUT FIELD HINTS
  //  EZPZ Hint v1.1.1; Copyright (c) 2009 Mike Enriquez, http://theezpzway.com; Released under the MIT License
  //===============================================
  (function($){
    $.fn.ezpz_hint = function(options){
      var defaults = {
        hintClass: 'ezpz-hint',
        hintName: 'ezpz_hint_dummy_input'
      };
      var settings = $.extend(defaults, options);
      
      return this.each(function(){
        var hint;
        var dummy_input;
        
        // grab the input's title attribute
        text = $(this).attr('title');
        
        // create a dummy input and place it before the input
        $('<input type="text" name="temp" value="" />').insertBefore($(this));
        
        // set the dummy input's attributes
        hint = $(this).prev('input:first');
        hint.attr('class', $(this).attr('class'));
        hint.attr('size', $(this).attr('size'));
        hint.attr('name', settings.hintName);
        hint.attr('autocomplete', 'off');
        hint.attr('tabIndex', $(this).attr('tabIndex'));
        hint.addClass(settings.hintClass);
        hint.val(text);
        
        // hide the input
        $(this).hide();
        
        // don't allow autocomplete (sorry, no remember password)
        $(this).attr('autocomplete', 'off');
        
        // bind focus event on the dummy input to swap with the real input
        hint.focus(function(){
          dummy_input = $(this);
          $(this).next('input:first').show();
          $(this).next('input:first').focus();
          $(this).next('input:first').unbind('blur').blur(function(){
            if ($(this).val() == '') {
              $(this).hide();
              dummy_input.show();
            }
          });
          $(this).hide();
        });
        
        // swap if there is a default value
        if ($(this).val() != ''){
          hint.focus();
        };
        
        // remove the dummy inputs so that they don't get submitted
        $('form').submit(function(){
          $('.' + settings.hintName).remove();
        });
      });
      
    };
    // attach to relevant inputs
    $('input.ffHint').ezpz_hint();
  })(jQuery);


  //===============================================
  //  LOGIN INPUT FIELD HINTS
  //  EZPZ Hint disables autocomplete - this is an alternative for forms with password fields
  //===============================================
  (function($){
    $.fn.addHint = function(options){
      var defaults = {
        hintClass: 'fHint',
        fudgeDims: { //text fields seem to add extra padding
          top: 2,
          left: 1
        }
      };
      var settings = $.extend(defaults, options);
      
      return this.each(function(){
        // create a dummy input overlay and place it after the input
        var hint = $('<div class="fHint"></div>').insertAfter($(this));
        
        // establish relationship between elements
        hint.data('field', $(this));
        $(this).data('overlay', hint);
        
        // grab the input's title attribute
        var text = $(this).attr('title');
        
        //IE8 chokes on border widths
        //see http://code.google.com/p/jquery-megamenu/issues/detail?id=3
        var bTop  = ($(this).css('border-top-width')=='medium') ? 0 : $(this).css('border-top-width');
        var bLt   = ($(this).css('border-left-width')=='medium') ? 0 : $(this).css('border-left-width');
        
        // set the overlay's attributes based on related input field
        hint.html(text);
        hint.css({
          'width':        $(this).css('width'),
          'height':       $(this).css('height'),
          'padding-top':  $(this).css('padding-top'),
          'padding-left': $(this).css('padding-left'),
          'top':          parseInt($(this).css('margin-top')) + parseInt(bTop) + parseInt($(this).parent().css('padding-top')) + settings.fudgeDims.top,
          'left':         parseInt($(this).css('margin-left')) + parseInt(bLt) + parseInt($(this).parent().css('padding-left')) + settings.fudgeDims.left,
          'font-size':    $(this).css('font-size')
        });
        
        // bind click on the overlay, focus/blur on field
        hint.click(function(){
          $(this).hide();
          $(this).data('field').focus();
        });
        $(this).bind('focus', function(){
          $(this).data('overlay').hide();
        }).bind('blur', function(){
          if (!$(this).val()) $(this).data('overlay').show();
        });
        
        // on page load, show/hide overlay based on data in field
        $(this).triggerHandler('blur');
      });
      
    };
    // attach to relevant inputs
    $('input.addHint').addHint();
  })(jQuery);
*/

  //===============================================
  //  Pre-filter Job Listings on Geolocation
  //===============================================
/*
  $(function(){
    // get regions as set from backend
    geoloc_region = $('#job_listings #geoloc_regions').html();
    if (geoloc_region) {
      
      // initialize message
      msg = '<div>Showing results for:</div>';
      
      // parse list (can be multiple values)
      regions = geoloc_region.split('|');
      
      for (x in regions) {
      
        // hide all listings, then iterate and selectively show
    	  $('#job_listings article').hide().each(function() {
          thisRegion = $(this).find('.region').html();
          if (thisRegion == regions[x]) {
            $(this).show();
            none = 0;
          }
        });
        
        // build string for messaging
        if (x>0) msg += ' &amp; ';
        msg += regions[x];

      }
      
      // hide all category headers, then iterate and selectively show
      $('#job_listings h3').hide().each(function() {
        header = $(this);
        $(this).nextUntil(':not(article)').each(function() {
          if ($(this).is(':visible')) {
            $(header).show();
            return false;
          }
        });
      });
      
      $('#job_search #message').html(msg);
      
    }
    $('#job_listings').css('visibility','visible');
    
  });
*/
  //===============================================
  //  Show/Hide Job Listings [with region, SUPERSEDED]
  //===============================================
/*
  $(function(){
  	$('#form_jvSearch select').change(function() {
  	  
  	  // initialize
  	  none = 1;
  	  $('#none_found').hide();
  	  $('#none_found span').html('');
  	  
  	  // get user values
      region = $('#jvRegion').val();
      category = $('#jvCategory').val();
      
  	  // hide all listings, then iterate and selectively show
  	  $('#job_listings article').hide().each(function() {
        thisRegion = $(this).find('.region').html();
        thisCategory = $(this).prevAll('h3').find('.category').html();
        if ((!region || (thisRegion == region)) && (!category || (thisCategory == category))) {
          $(this).show();
          none = 0;
        }
      });
      
      // hide all category headers, then iterate and selectively show
      $('#job_listings h3').hide().each(function() {
        header = $(this);
        $(this).nextUntil(':not(article)').each(function() {
          if ($(this).is(':visible')) {
            $(header).show();
            return false;
          }
        });
      });
      
      // if none found, show message
      if (none) {
        if (region)
          $('#none_found .region').html(' in '+region);
        if (category)
          $('#none_found .category').html(' for '+category);
        $('#none_found').show();
      }
      
      jobListingsDisplay();
      
  	});
  	
  	// show all
  	$('#job_listings .show_all').live('click', function() {
  	  $(this).hide();
  	  $(this).nextUntil(':not(article)').filter('.hide').hide().removeClass('hide').fadeIn('slow');
  	});
  });
*/
  //===============================================
  //  Job Listings
  //===============================================
  
  $(function(){
  	$('#form_jvSearch select').change(function() {      
      jobListingsFilter();
  	});
  	
  	// show all
  	$('#job_listings .show_all').live('click', function() {
  	  $(this).hide();
  	  $(this).nextUntil(':not(article)').filter('.hide').hide().removeClass('hide').fadeIn('slow');
  	});
  });
  
  // on page load...
  if ($('#form_jvSearch select').length) {
    if (sessionStorage.jobCategory) {
      $('#jvCategory').val(sessionStorage.jobCategory);
      jobListingsFilter();
    } else {
      jobListingsTruncation();
    }
  }


  //===============================================
  //  Sidebar rotation
  //===============================================

  // TODO: uncomment create fn for production
  $('#quoteTabs').tabs({
    fx: { opacity:'toggle', duration:400 }// ,
    //     create: function(e, ui) {
    //       $(e.target).tabs('rotate', 5000);
    //     }
  });


  //===============================================
  //  Other tabs
  //===============================================

  $('#riskTabs').tabs({
    //fx: { opacity:'toggle', duration:400 }
    selected: 1,
    create: function(e, ui) {
      $('#catastropheCont').tabs({
        selected: 0
      });
      $('.vidCont').tabs({
        selected: 0,
        create: function(e, ui) {
          var nav = $(e.target).find('ul.nav');
          if (!$(nav).children().length) {
            $(e.target).next('h4').addClass('noMedia');
            $(e.target).remove();
          } else if ($(nav).children().length == 1) {
            $(nav).remove();
          }
        }
      });
    }
  });
  
  $('#legalTabs').tabs({
    fx: { opacity:'toggle', duration:400 }
  });
  
  $('#passionCont').tabs({
    fx: { opacity:'toggle', duration:400 },
    create: function(e, ui) {
      $(e.target).tabs('rotate', 5000);
    }
  });
  
  //===============================================
  //  Form field behaviors
  //===============================================

  // Handle prefilled notes
  $('.prefilled').click(function() {
    return this.value === this.defaultValue ? $(this).val('') : null;
  });
  $('.prefilled').blur(function() {
    return this.value === '' ? $(this).val(this.defaultValue) : null;
  });

  //===============================================
  //  Handling for jobvite apply
  //===============================================

  $('iframe#jobvite').load(function() {
    //$('iframe#jobvite').height('500px');
    $.scrollTo('0');
  });
  
  //===============================================
  //  Contact page: map interactions
  //===============================================

  // class specifies both source and target  
  // handles multiple locations (for clocks) as: city1 city2 [city names cannot include spaces or special chars]
  
  $('#contact #offices a, #contact #markers a, #contact #clocks a').each(function(){
    $(this).hover(
      function() {
        loc = $(this).attr('class');  // get the location string
        locArray = loc.split(' ');    // convert to array
        jQuery.each(locArray, function() {  // for each location set highlights
          if ($('.'+this).length) {
            $('.'+this).addClass('highlight').prevAll('h5:first').addClass('highlight');
            $('#markers a.'+this+':not(.selected)').tipsy("show");
            clock = $('.'+this).find('canvas'); // find clock based on last (any) location
          }
        });
        clock.attr('class', function(i,klass) {
          return klass.replace('normal','highlight').replace('noSeconds',''); // change skin and enable second hand as highlight for clock
        });
        CoolClock.findAndCreateClocks(); // update clocks
      },
      function(){
        loc = $(this).attr('class');  // get the location string
        locArray = loc.split(' ');    // convert to array
        jQuery.each(locArray, function() {  // for each location remove highlights
          if ($('.'+this).length) {
            $('.'+this).removeClass('highlight').prevAll('h5:first').removeClass('highlight');
            $('#markers a.'+this+':not(.selected)').tipsy("hide"); // remove tool tip
            clock = $('.'+this).find('canvas'); // find clock based on last (any) location [omit class=highlight]
          }
        });
        clock.attr('class', function(i,klass) {
          if ($(this).attr('class').indexOf('selected') == -1)
            return klass.replace('highlight','normal').replace('::',':noSeconds:'); // change skin and disable second hand
        });
        CoolClock.findAndCreateClocks(); // update clocks
      }
    );
  });
  
  $('#contact #offices a, #contact #markers a').each(function(){
    $(this).click(function() {
        if ($(this).attr('class').indexOf('selected') == -1) {
    
          str = $(this).attr('class');  // get the class string
          loc = str.split(' ')[0];      // parse for location (first class)
        
          // reset selected state
          $('.selected').removeClass('selected');
          jQuery.each($('#markers a'), function() {
            if (!$(this).hasClass(loc)) {
              $(this).tipsy("hide");
            }
          });
          $('canvas').attr('class', function(i,klass) {
            return klass.replace('selected','normal').replace('::',':noSeconds:'); // change skin and disable second hand
          });
          // set selected state
          $('.'+loc).addClass('selected').prevAll('h5:first').addClass('selected');
          //$('#markers a.'+loc).tipsy("show"); // have to hover in order to click so this isn't necessary
          $('.'+loc).find('canvas').attr('class', function(i,klass) {
            return klass.replace(/(normal|highlight)/,'selected').replace('noSeconds',''); // change skin and enable second hand as highlight for clock
          });
          CoolClock.findAndCreateClocks(); // update clocks
      
          // get content
          hd = $('.office a.'+loc).prev().html();
          details = $('.office a.'+loc).html();
          mapviewer = $('#mapviewers .'+loc).html();
          // fade out previous content
          $('#popup .details, #popup .mapviewer').fadeTo(400, 0.0, 'easeOutExpo', function() {
            if ($(this).attr('class') == 'mapviewer') {
              $('#popup .details').html('<div class="hd">'+hd+'</div>' + details);  // get/set details
              $('#popup .mapviewer').html(mapviewer);   // get/set map
            }
          });
          $('#popup .details, #popup .mapviewer').fadeTo(400, 1.0, 'easeOutExpo'); // fade in new content
           // set close button
          $('#popup .close').click(function() {
              $('#popup').fadeTo(1000, 0.0, 'easeOutExpo');
              // reset selected state
              $('.selected').removeClass('selected');
              jQuery.each($('#markers a'), function() {
                $(this).tipsy("hide")
              });
              $('canvas').attr('class', function(i,klass) {
                return klass.replace('selected','normal').replace('::',':noSeconds:'); // change skin and disable second hand
              });
              CoolClock.findAndCreateClocks(); // update clocks
            }
          );
          $('#popup').fadeTo(1000, 1.0, 'easeOutExpo');
        
        }
      
      }
    );
  });
  
  // map marker tool tips
  if ($('#markers a').length) {
    $('#map #markers a').tipsy({
        delayIn: 0,      // delay before showing tooltip (ms)
        delayOut: 0,     // delay before hiding tooltip (ms)
        fade: true,      // fade tooltips in/out?
        fallback: '',    // fallback text to use when no tooltip text
        gravity: 'e',    // gravity
        html: false,     // is tooltip content HTML?
        live: false,     // use live event support?
        offset: 2,       // pixel offset of tooltip from element
        opacity: 0.8,    // opacity of tooltip
        title: 'title',  // attribute/callback containing tooltip text
        trigger: 'manual'// how tooltip is triggered - hover | focus | manual
    });
  }
  
  //===============================================
  //  Craft page: index handling
  //===============================================
  
  if ($('#craft').length) {
    
    if ($('aside .group').length > 1) {
      $('aside .btn').show();
      $('aside .group:first-child').addClass('visible');  // set default condition
      $('aside .btn').click(function() {
        vis = $(this).parent().children('.group.visible');
        vis.fadeTo(1000, 0).removeClass('visible');
        if (vis.next('.group').length) {
          next = vis.next('.group');
        } else {
          next = $('aside .group:first-child');
        }
        next.fadeTo(500, 1.0).addClass('visible');
      });
    }

  }

  //===============================================
  //  Height handling for pages with fixed footer
  //===============================================

  if ($('footer').css('position') == 'fixed') {

    // find object to size
    obj = $('#content').children('div:first-child');
    
    // set initial height
    setHeight(obj);

    // change height on window resize
    var resizeTimer;
    $(window).resize(function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(setHeight(obj), 100);
    });

  }
  
  //===============================================
  //  Form validation
  //===============================================

  if ($('#contact_form').length) {

    var validator = $("#contact_form").validate({
      messages: {
        email: {
          email: "Please enter a valid email address."
        }
      },
      debug:false
    });

  }

  if ($('#jvform').length) {
    
    // default value isn't a valid entry
    jQuery.validator.addMethod("defaultInvalid", function(value, element) {
      return value != element.defaultValue;
    }, "");
    
    var validator = $("#jvform").validate({
// TBD
//      invalidHandler: function(form, validator) {
//        $(window.parent.document).scrollTo('0');
//      },
      messages: {
        jvresume: "This field is required.",
        email: {
          email: "Please enter a valid email address."
        }
      },
      debug:false
    });

  }
  
  //===============================================
  //  Leadership Bios
  //===============================================
  
  (function($){
    $.fn.leaderBio = function(options) {
      return this.each(function() {
        new $lb(this, options);
      });
    };

    var defaults = {
      bioHt:      140
    };

    /**
     * The leaderBio object.
     *
     * @constructor
     * @name $.leaderBio
     * @param Object e The element to create the leaderBio for.
     * @param Hash o A set of key/value pairs to set as configuration properties.
     */
    $.leaderBio = function(e, o) {
      this.options            = $.extend({}, defaults, o || {});

      // elements
      var self                = this;
      this.container          = $(e);
      
      // attach behavior
      this.container.find('dl').each(function() {
        $(this).click(function() {

          self.setBioSelected($(this));

          if (!$('#bio').height()) {
            // first click; no bio displayed yet

            self.setBioDetails($(this));
            self.setBioIndicator($(this));

            // position display
            $(this).parent().after($('#bio'));

            // enable display
            $('#bio').animate({
              opacity: 1.0,
              height: self.options.bioHt
            }, 500, function() {
              $(this).removeClass('default');
            });

          } else if ($(this).parent().next().attr('id') == 'bio') {
            // exists in correct position
            
            obj = $(this);
            $('#bio').addClass('default');

            self.setBioIndicator($(this),true);

            // fade out old content
            $('#bio img, #bio .name, #bio .loc, #bio .body').animate({
              opacity: 0
            }, 400, function() {
              if ($(this).attr('class') == 'body') {
                 // get/set values
                self.setBioDetails(obj);
                $('#bio').removeClass('default');
              }
            });

            // fade in new content
            $('#bio img, #bio .name, #bio .loc, #bio .body').animate({
              opacity: 1.0
            }, 600, 'easeOutCubic');

          } else {
            // exists in another position
            
            self.setBioIndicator($(this));

            // clone display
            $('#bio').find('.nav').hide();
            $('#bio').addClass('original').clone().removeClass('original').addClass('default').attr('style','').insertAfter($(this).parent());
            
            // fadeout and remove old display
            $('#bio.original').animate({
              opacity: 0,
              height: '0'
            }, 500, function() {
              $(this).remove();
            });

            self.setBioDetails($(this));

            // fade in new display
            $('#bio.default').animate({
              opacity: 1.0,
              height: self.options.bioHt
            }, 500, function() {
              $(this).removeClass('default');
            });

          }
        });
      });

      // bio paging nav
      $('#bio .nav a').live('click', function() {
        if (!$(this).hasClass('disable')) {
          $('#bio .nav a').addClass('disable'); // disable clicking while animating
          obj = $(this);
          body = obj.parent().prev().children('.body');
          w = $('#about #bio .bodyOuter').width();
          if (obj.is(':first-child')) {
            d = '+='+w+'px';
          } else {
            d = '-='+w+'px';
          }
          body.animate({
              left: d
            }, 500, function() {
              $('#bio .nav a').removeClass('disable'); // reset links
              // disable nav element for first/last              
              if ((body.css('left') == '0px') || (body.css('left') == -body.width()+w+'px')) {
                obj.addClass('disable');
              }
            });
        }
      });
      
    }
      
    // Create shortcut for internal use
    var $lb = $.leaderBio;
    $lb.fn = $lb.prototype = {};
    $lb.fn.extend = $lb.extend = $.extend;

    $lb.fn.extend({

      setBioSelected: function(obj) {
        $('dl').children('.img1').children().hide().end().children(':first-child').show();
        obj.children('.img1').children().hide().end().children(':last-child').show();
      },

      setBioIndicator: function(obj, animate) {
        d = $('dl').outerWidth(true);
        if (animate) {
          if (obj.is(':first-child')) {
            $('.biotop').animate({
              left: '-'+d*2+'px'
            }, 500);
          } else if (obj.is(':last-child')) {
            $('.biotop').animate({
              left: '0'
            }, 500);
          } else {
            $('.biotop').animate({
              left: '-'+d+'px'
            }, 500);
          }
        } else {
          if (obj.is(':first-child')) {
            $('.biotop').css('left','-'+d*2+'px');
          } else if (obj.is(':last-child')) {
            $('.biotop').css('left','0');
          } else {
            $('.biotop').css('left','-'+d+'px');
          }
        }  
      },

      setBioDetails: function(obj) {
        $('#bio.default').find('.image').html(obj.children('.img2').html());
        $('#bio.default').find('.name').html(obj.children('dt').html());
        $('#bio.default').find('.loc').html(obj.children('.loc').html());
        $('#bio.default').find('.body').html(obj.children('.bio').html());
        this.handleBioPages();
      },

      handleBioPages: function() {
        p = $('#bio.default').find('section').length;         // get number of bio 'pages' (<sections>)
        $('#bio.default').find('.body').attr('style','');                   // revert width to default
        if (p>1) {
          w = $('#bio.default').find('.body').width() * p;                  // get width according to num of pages
          $('#bio.default').find('.body').width(w);                         // set width
          $('#bio.default').find('.nav a:first-child').addClass('disable'); // set prev to disabled
          $('#bio.default').find('.nav').show();
        } else {
          $('#bio.default').find('.nav').hide();
        }
      }
    
    });
      
  })(jQuery);

  if ($('#about dl').length) $('#about').leaderBio();
  
});


/**
 * Declare a global timer for enabling a sort of "onResizeEnd" event.
 */
var _resizeTimer = null;


/**
 * Fn for scrolling to top of page.
 */
/*
function scrollToTop() {
  window.scroll(0,0);
}
*/

/**
 * Wrapper for setting fade durations.
 * PNGs get a black halo when faded in IE, so IE-specific js returns zero.
 */
function fadeDuration(dur) {
  return dur;
}

/**
 * Handle job category filter
 * max = 4
 */
function jobListingsFilter() {
  
   // initialize
   none = 1;
   $('#none_found').hide();
   $('#none_found span').html('');
   $('#job_listings article').removeClass('hide');
   $('.show_all').not('#show_all .show_all').remove(); // remove previously inserted links, but not the source
 
   // get user value
   category = $('#jvCategory').val();
   // set session var
   sessionStorage.setItem('jobCategory',category);
 
   // hide all listings, then iterate and selectively show
   $('#job_listings article').hide().each(function() {
     thisCategory = $(this).prevAll('h3').eq(0).find('.category').text();
     if (!category || (thisCategory == category)) {
       $(this).show();
       none = 0;
     }
   });
 
   // hide all category headers, then iterate and selectively show
   $('#job_listings h3').hide().removeClass('first').each(function() {
     header = $(this);
     $(this).nextUntil(':not(article)').each(function() {
       if ($(this).is(':visible')) {
         $(header).addClass('first').show();
         return false;
       }
     });
   });
   
   // if none found, show message
   if (none) {
     $('#none_found .category').html(' for '+category);
     $('#none_found').show();
   }

   if (!category)
    $('#job_listings h3').removeClass('first')
     jobListingsTruncation();

}

/**
 * Handle long job listings list
 * max = 4
 */
function jobListingsTruncation() {
  $('#job_listings h3:visible').each(function() {
    if ($(this).nextUntil(':not(article)').filter(':visible').length > 4) {
      $(this).nextUntil(':not(article)').filter(':visible:gt(3)').addClass('hide');
      $(this).nextUntil(':not(article)').filter(':visible:eq(3)').after($('#show_all').html());
    }
  });
}

/**
 * Handle dynamic height for pages with fixed footer
 */
function setHeight(obj) {
    obj.height($(window).height() - $('header').height() - $('footer').height());
}
