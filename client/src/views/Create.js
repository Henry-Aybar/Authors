import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';


const Create = (props) => {

    const [errors, setErrors] = useState({})
    const history = useHistory();


    const [form, setForm] = useState({
        name: "",
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/api/authors/create", form)
            .then(res=>{
                console.log(res);
                history.push("/")
            })
            .catch(err=>{
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            })
    }

    return(
        <div>
            <h1>Add a Author to the List!</h1>
            <form className="mt-5 w-50 mx-auto" onSubmit={onSubmitHandler}>
                <div className="form-group mb-2" onChange={onChangeHandler}>
                    <h3>Name:</h3>
                    <input type="text" name="name" className='form-control' placeholder='Name' />
                    <span className='alert-danger'>{errors.name && errors.name.message}</span>
                </div>
                <input type="submit" className='btn btn-success'/>
            </form>
        </div>
    )
}

export default Create;