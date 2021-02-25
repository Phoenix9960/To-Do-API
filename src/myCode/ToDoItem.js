import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const ToDoItem = ( {id, task, isComplete, student} ) => {

    const deleteTask = ()=> {
        axios({
            method : 'DELETE',
            url : 'https://todos-academlo.herokuapp.com/api/todo/'+id
            }).then(reload())
    }

    const updateTask = () => {
        axios({
            method : 'PUT',
            url : 'https://todos-academlo.herokuapp.com/api/todo/'+id,
            data :{
                task,
                isCompleted: !isComplete, 
                student
            }
            }).then(reload())
    }

    const reload = () => {
        window.location.reload()
    }

    return(
        <div className= "toDoStyle">
            <label> 
                <input type="checkbox" defaultChecked={isComplete} />
                {task} : {student}
            </label>
            <div className = "optionStyle">
                <button onClick={deleteTask} className = "btn btn-danger">Delete</button>
                <button onClick={updateTask} className = "btn btn-warning">Update</button>
            </div>
        </div>
    )
}
export default ToDoItem;