import React, { useState, useEffect } from 'react';
import { createTodos } from '../api';
import { readTodos } from '../functions';
const Todo = () => {
    const [todo,setTodo] = useState({
        title:'',
        content:'',
    });
    const [todos,setTodos] = useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            const result = await readTodos();
            setTodos(result);
        }
       fetchData();
    }, []);

    const onSubmitHandler = async (e) =>{
        e.preventDefault();

        const result = await createTodos(todo);
        console.log(result);
    }

    return(
        <div>
            <div>
            <form action="" onSubmit={(e)=>onSubmitHandler(e)}>
            <label htmlFor="Title">Title</label>
            <input type="text" 
            onChange={(e)=>{setTodo({...todo, title:e.target.value})}}
            />
            <label htmlFor="Content">Content</label>
            <input type="text"  
            onChange={(e)=>{setTodo({...todo, content:e.target.value})}}
            />
            <button>Submit</button>
            </form>
            </div>

            {
                !todos ? 
                (
                    {todos.map((todoss)=>(
                        return <div> 
                        <p>{todoss.title}</p> 
                        <p>{todoss.content}</p>  
                        </div>
                        ))}
                )
                :
                (
                    <></>
                )
            }

            <div className="collections">

            </div>
        </div>
     );
}
export default Todo;