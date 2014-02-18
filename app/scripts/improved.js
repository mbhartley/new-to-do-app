var Todo = Backbone.Model.extend();

var TodoView = Backbone.View.extend ({
  //tagName is div by default
  //because we are creating a completely new div, there is no connection
  //  to an already existing class name in html
  className: 'task',      
  renderTemplate:_.template($('.task-template').text()),
  //add a click event on the complete button
  events: {
    'click.task-complete-button': 'strikeThrough',
    'click.task-remove-button': 'removeTask'
  }, 

  initialize: function(){
  //Mason had the prepend method happening here, but why?
    this.render();
  //listen to this.model, if changes, repeat render method
    this.listenTo(this.model, 'change', this.render);
  },  

  render: function(){
    //grab this.model.attributes & pass them into renderTemplate & i don't quite
    //  understand 'this.$el.html' and how it functions
    this.$el.html(this.renderTemplate(this.model.attributes)) 
    $('.created-tasks').prepend(this.el);                     
  },

  strikeThrough: function(){
    //Mason's way: this.model.set('completed', !this.model.get('completed'))
    //I don't know how to get my way to toggle
    $('.created-tasks').on('click', '.task-complete-button', function(){
    $(this).siblings('.description').addClass('strikethrough');
    })
  },                                                         
   
   //removeTask : function(){
   //  this.remove(); 

   //}                                                             
})

//representation of user-defined data
var fakeModel = {
  description: 'take out garbage',
  completed: false,
  id: _.uniqueId('id')
}
//run the fakeModel object through a bare bones constructor var Todo = Backbone.Model.extend()
//  so that it will inherit all the functionality of Backbone.Model, as if it were actual input
//  entered by a user into the model in a real life scenario
var view = new TodoView ({model: new Todo (fakeModel)})