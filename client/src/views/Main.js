import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = (props) => {
    
    const [authors, setAuthors] = useState([]);

    useEffect(()=>{
      axios.get("http://localhost:8000/api/authors/findAll")
        .then(res=>{
          console.log(res.data.results);
          setAuthors(res.data.results);
        })
        .catch(err=>console.log(err))
    }, [])


    const onDeleteHandler = (_id, index) => {
        // console.log(_id)
        axios.delete(`http://localhost:8000/api/authors/${_id}/delete`)
            .then(res =>{
                console.log(res);

                const copyAuthors = [...authors];
                copyAuthors.splice(index, 1);
                setAuthors(copyAuthors);
            })
            .catch(err=>console.log(err))
    }

    return(
        <div className='w-75 mx-auto'>
            <h1>All Authors</h1>
            {
                authors.map((item,i)=>{
                    return(
                    <div className='d-flex'>
                        <h1 key={i} >{item.name} </h1>
                        <Link className='btn btn-info' to={`/authors/${item._id}/edit`}>Edit</Link> 
                        <button className='btn btn-danger' onClick={()=>onDeleteHandler(item._id, i)}>Delete</button> 
                    </div> 
                    )
                })
            }
        </div>
    )
}

export default Main;