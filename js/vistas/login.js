window.LoginView = Backbone.View.extend({

    initialize: function() {
      this.template = _.template(tpl.get('login'));
    },

    render:function (eventName) {
        this.$el.html(this.template);
        return this.el;
    }
});