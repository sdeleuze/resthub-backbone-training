define(['backbone', 'hbs!templates/task'], function(Backbone, taskTemplate) {

  var TaskView = Backbone.View.extend({
    className: 'task',
    initialize: function() {
      this.model.on('change', this.render, this);
    },
    render: function() {
      this.$el.fadeOut(function() {
        this.$el.html(taskTemplate(this.model.toJSON())).fadeIn();
      }.bind(this));
      return this;
    }
  });

  return TaskView;
});
