import { useForm } from 'react-hook-form';
import axios from 'axios';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

const CreateToDo = () => {
    const {register, handleSubmit} = useForm();

    const createTask = (data) => {
        axios({
            method : 'POST',
            url : 'https://todos-academlo.herokuapp.com/api/todo',
            data :{
                task: data.task,
                isCompleted: false, 
                student: data.student
            }
            }).then(reload())
    }

    const reload = () => {
        window.location.reload()
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit(createTask)}  className="formStyle">
                <label>
                    Task:
                    <input
                      name="task"
                      ref={register}
                      placeholder="Introduce the Task"
                    />
                </label>
                <label>
                    Student:
                    <input
                      name="student"
                      ref={register}
                      placeholder="Write who should Do"
                    />
                </label>
                <button type = "submit" className = "btn btn-secondary">Create</button>
            </form>
        </div>
    )
}
export default CreateToDo;