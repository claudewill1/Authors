import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

const New = (props) => {
    const navigate = useNavigate();
    
    const [errors,setErrors] = useState([]);

    const addAuthor = (author) => {
        axios.post(`http://localhost:8000/api/authors/create`,author)
            .then((res)=>{
                console.log(res);
                navigate('/')
            })
            .catch((err)=>{
                const errorResponse = err.response.data.errors;
                const errArr = [];
                for(const key of Object.keys(errorResponse)){
                    errArr.push(errorResponse[key].message)
                }
                setErrors(errArr);
            });
    };

    return (
        <div className='container text-center'>
            <div className='container text-left'>
                <Link to='/'>Home</Link>
            </div>
            <h5>Add a new Author:</h5>
            {errors.map((error,index)=>{
                return <p className='text-danger' key={index}>{error}</p>
            })}
            <AuthorForm onSubmitProp={addAuthor} initialName=""/>
        </div>
    )

}

export default New;