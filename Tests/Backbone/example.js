var Todo = Backbone.Model.extend({
  // Default todo attribute values
  defaults: {
	title: '',
    completed: false
  },
  initialize: function(){
    console.log('This model has been initialized.');
    this.on('change', function(){
        console.log('- Values for this model have changed.');
    });
} });

var myTodo = new Todo();
myTodo.set('title', 'The listener is triggered whenever an attribute value changes.');
console.log('Title has changed: ' + myTodo.get('title'));
myTodo.set('completed', true);
console.log('Completed has changed: ' + myTodo.get('completed'));

myTodo.set({
  title: 'Changing more than one attribute at the same time only triggers thelistener once.', 
  completed: true
});

var TodosView = Backbone.View.extend({
  tagName: 'ul', // required, but defaults to 'div' if not set
  className: 'container', // optional, you can assign multiple classes to this property like so: 'container homepage'
  id: 'todos', // optional
});

var todosView = new TodosView();
console.log('TODOS EL' + todosView.el); // logs <ul id="todos" class="container"></ul>



var todosView = new TodosView({el: $('#footer')});