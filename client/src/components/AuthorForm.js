import React, {useState} from 'react';
import { Link } from 'react-router-dom';
const AuthorForm = (props) => {
    const {initialName, onSubmitProp} = props;
    const [name,setName] = useState(initialName);

    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({
            name
        })
    }
    return (
        <div className='col-5 mx-auto mt-5'>
            <form className='mt-3' onSubmit={submitHandler}>
                <div className='form-group'>
                    <label htmlFor='name'>Author Name:</label>
                    <input className='form-control'
                        type="text" value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div className='text-center'>
                    <Link style={{backgroundColor:"lightgray"}} to='/' className='btn btn-default'>Cancel</Link>
                    <button className='btn btn-primary ml-3'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AuthorForm;