(function() {
  'use strict';

  var EventBus = _.extend({}, Backbone.Events);

  const customStringify = function (v) {
    const cache = new Set();
    return JSON.stringify(v, function (_key, value) {
      if (typeof value === 'object' && value !== null) {
        if (cache.has(value)) {
          // Circular reference found
          try {
            // If this value does not reference a parent it can be deduped
           return JSON.parse(JSON.stringify(value, null, '    '));
          }
          catch (err) {
            // discard key if value cannot be deduped
           return;
          }
        }
        // Store value in our set
        cache.add(value);
      }
      return value;
    }, '    ');
  };

  var WindowView = Backbone.View.extend({
    el: window,
    events: {
      'resize': 'onResize'
    },
    onResize: function() {
      EventBus.trigger('resize:window');
    }
  });

  var AppView = Backbone.View.extend({
    el: 'body',
    events: {
      'change #input': 'onInputChange',
      'keyup #input': 'onInputChange',
      'keypress #input': 'onInputChange',
      'paste #input': 'onInputChange',
      'change #input': 'onInputChange',
      'change #range': 'onRangeChange',
      'change #next': 'onNextChange',
      'change #cst': 'onCSTChange',
      'change #incremental': 'incremental',
      'change #raw': 'onRawChange',
      'change #loc': 'onLocChange',
      'change #jsx': 'onJsxChange',
      'change #directives': 'onDirectivesChange',
      'change #attachComment': 'onAttachComment',
      'change #webCompat': 'onwebCompat',
      'change #lexical': 'onlexical',
      'change #module': 'onModuleChange',
    },

    _options: { },
    _timerId: null,
    _method: 'parse',

    initialize: function(attributes, options) {
      _.bindAll.apply(_, [this].concat(_.functions(this)));

      this.$input = this.$el.find('#input');
      this.$output = this.$el.find('#output');
      this.$range = this.$el.find('#range');
      this.$next = this.$el.find('#next');
      this.$cst = this.$el.find('#cst');
      this.$raw = this.$el.find('#raw');
      this.$module = this.$el.find('#module');
      this.$loc = this.$el.find('#loc');
      this.$url = this.$el.find('#url');
      this.$jsx = this.$el.find('#jsx');
      this.$directives = this.$el.find('#directives');
      this.$attachComment = this.$el.find('#attachComment');
      this.$webCompat = this.$el.find('#webCompat');
      this.$lexical = this.$el.find('#lexical');


      EventBus.on('resize:window', this.onWindowResize);
      this.onWindowResize();
      this.onRangeChange();
      this.onLocChange();
      this.onNextChange();
      this.onCSTChange();
      this.onRawChange();
      this.onModuleChange();
      this.onDirectivesChange();
      this.onAttachComment();
      this.onlexical();
      this.onJsxChange();
      this.parseURL();
      this.parse();
      this.$input.focus();
    },

    render: function() {
      return this;
    },

    onInputChange: function(event) {
      this.parse();
    },
    onRangeChange: function(event) {
      this._options.ranges = this.$range.prop('checked');
      this.parse();
    },
    onNextChange: function(event) {
      this._options.incremental = this.$next.prop('checked');
      this.parse();
    },
    onCSTChange: function(event) {
      this._options.cst = this.$cst.prop('checked');
      this.parse();
    },
    onRawChange: function(event) {
      this._options.raw = this.$raw.prop('checked');
      this.parse();
    },
    onJsxChange: function(event) {
      this._options.jsx = this.$jsx.prop('checked');
      this.parse();
    },
    onDirectivesChange: function(event) {
      this._options.directives = this.$directives.prop('checked');
      this.parse();
    },
    onAttachComment: function(event) {
      this._options.attachComment = this.$attachComment.prop('checked');
      this.parse();
    },
    onwebCompat: function(event) {
      this._options.webCompat = this.$webCompat.prop('checked');
      this.parse();
    },
    onlexical: function(event) {
      this._options.lexical = this.$lexical.prop('checked');
      this.parse();
    },
    onModuleChange: function(event) {
      this._options.module = this.$module.prop('checked');
      this.parse();
    },
    onLocChange: function(event) {
      this._options.loc = this.$loc.prop('checked');
      this.parse();
    },
    parse: function() {
      if (this._timerId) {
        clearTimeout(this._timerId);
      }
      this._timerId = setTimeout(this._parse, 150);
    },
    _parse: function() {
      var result;
      try {
        result = kataw.parseScript(this.$input.val(), { jsx: false});
        result = kataw.lint(result);
        result = customStringify(result, null, '    ');
      } catch (e) {
        result = e.message || e;
      }

      this.$output.val(result);
      this.updateURL();
      this._timerId = null;
    },

    updateURL: function() {
      var params = {
        code: this.$input.val(),
        method: this._method,
        range: this._options.ranges,
        loc: this._options.loc,
        next: this._options.incremental,
        cst: this._options.cst,
        module: this._options.module,
        raw: this._options.raw,
        jsx: this._options.jsx,
        directives: this._options.directives,
        attachComment: this._options.attachComment,
        webCompat: this._options.webCompat,
        lexical: this._options.lexical
      };
      var href = location.href.replace(/[?#].*$/, '');
      var url = href + '?' + Util.buildParams(params);
      this.$url.val(url);
    },
    parseURL: function() {
      var params = Util.parseParams(location.search.substring(1));
      if (params.range === 'true') {
        this.$range.prop('checked', true).change();
      }
      if (params.loc === 'true') {
        this.$loc.prop('checked', true).change();
      }
      if (params.raw === 'true') {
        this.$raw.prop('checked', true).change();
      }
      if (params.next === 'true') {
        this.$next.prop('checked', true).change();
      }
      if (params.cst === 'true') {
        this.$cst.prop('checked', true).change();
      }
      if (params.module === 'true') {
        this.$module.prop('checked', true).change();
      }

      if (params.directives === 'true') {
        this.$directives.prop('checked', true).change();
      }
      if (params.attachComment === 'true') {
        this.$attachComment.prop('checked', true).change();
      }

      if (params.webCompat === 'true') {
        this.$webCompat.prop('checked', true).change();
      }
      if (params.lexical === 'true') {
        this.lexical.prop('checked', true).change();
      }

      if (params.jsx === 'true') {
        this.$jsx.prop('checked', true).change();
      }

      if (params.method) {

      }
      if (params.code) {
        this.$input.val(params.code).change();
      }
    },

    onWindowResize: function() {
      var height = Math.max(200, $(window).height() - 320);
      this.$input.height(height);
      this.$output.height(height);
    }
  });


  var Util = {
    parseParams: function(query) {
      return query.split('&').reduce(function(params, param) {
        var pairs = param.split('=').map(decodeURIComponent);
        params[pairs[0]] = pairs[1];
        return params;
      }, {});
    },
    buildParams: function(params) {
      return Object.keys(params).reduce(function(items, key) {
        items.push([key, params[key]].map(encodeURIComponent).join('='));
        return items;
      }, []).join('&');
    }
  };


  $(function() {
    new WindowView();
    new AppView();
  });

}());
