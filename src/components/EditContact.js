import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditContact = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [num, setNum] = useState("");

    const { id } = useParams()
    const contacts = useSelector((state) => state.contactReducer)
    const currentContact = contacts.find(contact => contact.id === parseInt(id))


    useEffect(() => {
        if (currentContact) {

            setName(currentContact.name)
            setEmail(currentContact.email)
            setNum(currentContact.num)
        }
    }, [currentContact])

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();


        const checkEmail = contacts.find(contact =>
            contact.id !== parseInt(id) && contact.email === email && email
        );

        const checkNum = contacts.find(contact =>
            contact.id !== parseInt(id) && contact.num === parseInt(num) && num
        );

        if (!email || !num || !name) {
            return toast.warning("Please fill all the details")
        }

        if (checkEmail) {
            return toast.warning("Email already exists!")
        }
        if (checkNum) {
            return toast.warning("Phone number already exists!")
        }

        const data = {
            id: parseInt(id),
            name,
            email,
            num
        };

  

        dispatch({ type: "UPDATE_CONTACT", payload: data })
        toast.success("Student Updated successfully!!")
 
        history.push("/");

    }

    return (
        <div className='container'>
            {currentContact ? (
                <>
                    <h1 className='display-3 my-5 text-center'>Edit Contact {id}</h1>
                    <div className="row">
                        <div className="col-md-6 shadow mx-auto p-5">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} className="form-control" placeholder='Name' />
                                </div>
                                <div className="form-group">
                                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" placeholder='Email' />
                                </div>
                                <div className="form-group">
                                    <input type="number" value={num} onChange={(e) => { setNum(e.target.value) }} className="form-control" placeholder='Phone number' />
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btn btn-dark " value="Update Student" />
                                    <Link to="/" className='btn btn-danger ml-3'>Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            ) : (
                <h1 className='display-3 my-5 text-center'>
                    Student contact with id {id} not exists.
                </h1>
            )}
        </div>
    )
}

export default EditContact
