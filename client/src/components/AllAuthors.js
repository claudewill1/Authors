import axios from "axios";
import React from 'react';
import { useNavigate } from "react-router-dom";

const AllAuthors = (props)=>{
    const {authors,setAuthors} = props;
    const navigate = useNavigate();
    const handleDelete = (delId)=> {
        axios.delete(`http://localhost:8000/api/authors/${delId}`)
            .then((res)=>{
                const filteredAuthors = authors.filter((author)=>{
                    return author._id !== delId;
                })

                setAuthors(filteredAuthors);
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    return (
        <div>
            <h3 style={{color:"purple"}}>We have quotes by:</h3>
            <table style={{width:"60%"}} className="table table-dark table-striped">
                <thead>
                    <th>Author</th>
                    <th>Actions Available</th>
                </thead>
                {authors.map((author,i)=>{
                    return (
                        <tbody key={i}>
                            <tr>
                                <td>{author.name}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={(e)=>navigate(`/${author._id}/edit`)}>Edit</button>
                                    <button className="btn btn-danger text-light" onClick={(e)=>handleDelete(author._id)}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })

                }
            </table>
        </div>
    )
}

export default AllAuthors;