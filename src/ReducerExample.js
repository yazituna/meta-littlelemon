import { useReducer } from 'react';

// <script src="https://gist.github.com/gcollazo/884a489a50aec7b53765405f40c6fbd1.js"></script>
// fetch("file:///home/yazituna/Desktop/meta-littlelemon/meta-littlelemon/src/data/samplecalendar.json").then((response) => response.json())
// fetch("/home/yazituna/Desktop/meta-littlelemon/meta-littlelemon/src/data/samplecalendar.json").then((response) => response.json())
// fetch("https://gist.github.com/gcollazo/884a489a50aec7b53765405f40c6fbd1.js).then((response) => response.json())


function createInitialState(username) {
  const initialTodos = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: username + "'s task #" + (i + 1)
    });
  }
  return {
    draft: '',
    todos: initialTodos,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'changed_draft': {
      return {
        draft: action.nextDraft,
        todos: state.todos,
      };
    };
    case 'added_todo': {
      return {
        draft: '',
        todos: [{
          id: state.todos.length,
          text: state.draft
        }, ...state.todos]
      }
    }
  }
  throw Error('Unknown action: ' + action.type);
}

export default function TodoList({ username }) {
  const [state, dispatch] = useReducer(
    reducer,
    username,
    createInitialState
  );
  return (
    <>
      <input
        value={state.draft}
        onChange={e => {
          dispatch({
            type: 'changed_draft',
            nextDraft: e.target.value
          })
        }}
      />
      <button onClick={() => {
        dispatch({ type: 'added_todo' });
      }}>Add</button>
      <ul>
        {state.todos.map(item => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
}
