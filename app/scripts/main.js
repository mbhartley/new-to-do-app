$(document).ready(function(){

var taskTemplate = _.template($('.task-template').text());  //create a var to reference our template in html


$('.add-task').click(function(){						  //when i click on the add-task button	

  var description = ($('.enter-task').val());			  //the value in the input will be contained in the var description	
  
  var todo = {											  //var to contain user input (description), a unique id
  	description: description,							  //  for array removal later, and a done = false for 
  	done: false,										  //  task completed later
  	id: _.uniqueId()
  }

  var renderedTemplate = taskTemplate(todo);
  
  $('.created-tasks').prepend(renderedTemplate);
})

})
