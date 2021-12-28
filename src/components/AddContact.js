import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddContact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [num, setNum] = useState("");

    const contacts = useSelector((state) => state.contactReducer)
    const dispatch = useDispatch();
    // console.log(contacts);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();


        const checkEmail = contacts.find(contact =>
            contact.email === email && email
        );

        const checkNum = contacts.find(contact =>
            contact.num === parseInt(num) && num
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
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            num
        };

        dispatch({ type: "ADD_CONTACT", payload: data })
        toast.success("Student added successfully!!")
        
        history.push("/");

    }

    return (
        <div className='container'>
            <h1 className='display-3 my-5 text-center'>Add Contact</h1>
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
                            <input type="submit" className="btn btn-block btn-dark" value="Add Student" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default AddContact
