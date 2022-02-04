import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router';


const Edit = (props) => {

    const {_id} = useParams();
    const [errors, setErrors] = useState({})
    const history = useHistory();
    

    const [form, setForm] = useState({
        name: "",
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/author/${_id}`)
            .then(res=>{
                console.log(res.data.results);
                setForm(res.data.results);
            })
            .catch(err=>console.log(err))
    },[_id])

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.patch(`http://localhost:8000/api/authors/${_id}/update`, form)
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
            <h1>Edit This Author!</h1>
            <form className="mt-5 w-50 mx-auto" onSubmit={onSubmitHandler}>
                <div className="form-group mb-2" >
                    <h3>Title</h3>
                    <input type="text" name="name" className='form-control' placeholder='Name' value={form.name} onChange={onChangeHandler}/>
                    <span className='alert-danger'>{errors.name && errors.name.message}</span>
                </div>
                <input type="submit" className='btn btn-success'/>
            </form>
        </div>
    )
}

export default Edit;