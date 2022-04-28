import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

const Edit = (props) => {
    const {id} = useParams();
    const [errors,setErrors] = useState([]);
    const [loaded,setLoaded] = useState(false);
    const [author,setAuthor]=useState({});
    const navigate = useNavigate();
    console.log(props)
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res)=>{
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch((error)=>{
                console.log(error);
        
            })
    },[id])

    const updateAuthor = (author) => {
        axios.put(`http://localhost:8000/api/authors/${id}/edit`,author)
            .then((res)=>{
                navigate('/');
            })
            .catch((errors)=>{
                const errorResponse =errors.response.data.errors;

                const errArr = [];
                for(const key of Object.keys(errorResponse)){
                    errArr.push(errorResponse[key].message)
                }
                setErrors(errArr);
            });
    }
    return (
        <div className='container text-center'>
            <div className='container text-left'>
                <h5>Edit Author</h5>
                {errors.map((error,index)=>{
                    return <p className='text-danger' key={index}>{error}</p>
                })}
                {loaded && (
                    <AuthorForm onSubmitProp={updateAuthor} initialName={author.name} />
                    
                )}
            </div>
        </div>
    )
}

export default Edit;