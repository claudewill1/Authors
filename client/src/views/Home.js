import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AllAuthors from '../components/AllAuthors'

const Home = () => {
    const [authors,setAuthors]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then((res)=>{
                setAuthors(res.data);
            })
            .catch((err)=>{
                console.log(err);

            })
    },[]);
    const allAuthorsSorted = [...authors].sort((a,b)=>(a.name<b.name?-1:1));

    return (
        <div style={{justifyContent:'center',alignContent:'center',marginLeft:'25%'}} className='w-75'>
            <Link to={'/create'}>Add an author</Link>
            <AllAuthors authors={allAuthorsSorted} setAuthors={setAuthors}/>
        </div>
    )
}

export default Home;