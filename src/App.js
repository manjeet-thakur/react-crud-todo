import { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  const [inputList, setinputList] = useState();
  const [listValue, setlistValue] = useState([]);

  const storeValue = () => {
    setlistValue((oldValue) => {
      return [...oldValue, inputList]
    })
    setinputList('');
  };

  const itemEvent = (event) => {
    setinputList(event.target.value);
  };

  const deleteItems = (id) => {
    console.log("deleted");
    setlistValue((oldValue) => {
      return oldValue.filter((arrEle, index) => {
        return index !== id;
      })
    });

  };

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1> ToDo List </h1>
          <br />
          <input type="text" placeholder='Add a Item' value={inputList} onChange={itemEvent} />
          <button className='button_add' onClick={storeValue}> + </button>
          <ol>
            {listValue.map((values, index) => {
              return <TodoList key={index} id={index} value={values} onSelect={deleteItems} />
            })}
          </ol>
        </div>
      </div>
    </>

  );
}

export default App;
