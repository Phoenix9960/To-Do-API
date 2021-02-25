import {useState, useEffect} from 'react';
import ToDoItem from './ToDoItem';
import axios from 'axios';

const ToDoContainer = () => {
    const [data, setData] = useState(null);
    const baseURL = 'https://todos-academlo.herokuapp.com/';

    const request = axios.create( {
        baseURL
    });

    useEffect(() => {
        request.get('/api/todos').then((toDo) => {
            console.log(toDo.data)
            setData(toDo.data)
        })
    }, [])

    return(
        <div>
            {data &&
            data.todos.map((toDo) => {
                return <ToDoItem key={toDo._id} id={toDo._id} task={toDo.task} isComplete={toDo.isCompleted} student={toDo.student} />
            })}
        </div>
    )
}
export default ToDoContainer;