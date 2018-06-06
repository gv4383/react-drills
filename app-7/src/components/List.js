import React from 'react';
import Todo from './Todo';

function List(props) {
  let newList = props.tasks.map((val, i, arr) => {
    return (
      <Todo key={ i } task={ val } />
    );
  });

  return (
    <div>
      { newList }
    </div>
  );
}

export default List;