//pre-loaded data created and loaded onto page//
var allTasks = [
  {
  	description: 'take out trash',
  	done: false,
  	id: _.uniqueId()
  },
  {
  	description: 'walk the dog',
  	done: false,
  	id: _.uniqueId()
  },
  {
  	description: 'drink the beer',
  	done: false,
  	id: _.uniqueId()
  }
]
//pre-loaded data ENDS//

$('.edit-task').bind("keypress", {}, keypressInBox);

function keypressInBox(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) { //Enter keycode                        
        e.preventDefault();

        $('.enterEditedTask').submit();
        
    }
};


$(document).ready(function(){

var taskTemplate = _.template($('.task-template').text());  //create a var to reference our template in html

_.each(allTasks, function(item){							              //prepend pre-loaded data here, b/c it must fall
    $('.created-tasks').prepend(taskTemplate(item))			    //  AFTER taskTemplate is defined		
  })
//remove a task from the todo list//
$('.created-tasks').on('click', '.task-remove-button', function(){
  //var parentId = $(this).parent().attr('id').split('-')[1];
  //  allTasks = _.reject(allTasks, function(item){ 
  //    return item.id == parentId;
  //  })
  $(this).parent().remove();
})
//show a task on the todo list as complete w/strikethrough effect//
$('.created-tasks').on('click', '.task-complete-button', function(){
  $(this).siblings('.description').addClass('strikethrough');
})
//add a new task to the todo list//
$('.add-task').click(function(){						                //when i click on the add-task button	

  var description = ($('.enter-task').val());			          //the value in the input will be contained in the var description	
  $('.enter-task').val("");                                 //clears the input value on the click event

  var todo = {											                        //var to contain user input (description), a unique id
  	description: description,							                  //  for array removal later, and a done = false for 
  	done: false,										                        //  task completed later
  	id: _.uniqueId()
  }

  var renderedTemplate = taskTemplate(todo);			          //stores the rendered template in a var to contain it
  														                              //  and make it easier to prepend in the next line
  $('.created-tasks').prepend(renderedTemplate);		        //AT LAST, prepend the user data into the DOM


//edit a task on the todo list//
$('.created-tasks').on('click', '.task-edit-button', function(){
  var changeTask = $("<form class='enterEditedTask'><input class='edit-task' type='text' id='txtName' value='"+description+"' autofocus/></form>");
  $(this).siblings('.description').replaceWith(changeTask);
})

console.log (allTasks.length);
})

})














