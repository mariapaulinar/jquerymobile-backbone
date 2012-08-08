window.MenuView = Backbone.View.extend({

    initialize: function() {
      this.template = _.template(tpl.get('menu'));
    },

    render:function (eventName) {
        this.$el.html(this.template);
        return this.el;
    }
});