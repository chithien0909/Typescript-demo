import axios from 'axios';
import { response } from 'express';

const url = 'http://jsonplaceholder.typicode.com/todos/3';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
axios.get(url).then(response => {
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    id : ${id},
    title: ${title},
    completed: ${completed}
  `);
};
