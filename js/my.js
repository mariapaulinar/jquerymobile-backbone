//Modelos

/*Usuario = Backbone.Model.extend({
    initialize: function(){
      console.log("Inicializado Usuario.");
    },

    defaults: {
      usuario: "",
      contrasena: ""
    }

});*/


//Router

var AppRouter = Backbone.Router.extend({

    routes:{
        "#menu":"menu",
        "#login":"login"
    },

    initialize: function () {
        // Handle back button throughout the application
        $('.back').live('click', function(event) {
            window.history.back();
            return false;
        });
        this.firstPage = true;
    },

    menu: function () {
        this.changePage(new MenuView());
    },

    login: function () {
        this.changePage(new LoginView());
    },

    changePage: function (page) {
        $(page.el).attr('data-role', 'page');
        page.render();
        $('body').append($(page.el));
        var transition = $.mobile.defaultPageTransition;
        // We don't want to slide the first page
        if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }
        $.mobile.changePage($(page.el), {changeHash:false, transition: transition});
    }
});

$(document).ready(function () {
    Backbone.View.prototype.close = function () {
      console.log('Closing view ' + this);
      if (this.beforeClose) {
          this.beforeClose();
      }
      this.remove();
      this.unbind();
    };
    tpl.loadTemplates(['login', 'menu'], function () {
        app = new AppRouter();
        //Backbone.history.start();
    });
});