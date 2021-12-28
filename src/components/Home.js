import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
const Home = () => {

    const contacts = useSelector((state) => state.contactReducer)

    const dispatch = useDispatch();
    const deleteContact = (id) => {
        dispatch({ type: "DELETE_CONTACT", payload: id })
        toast.success("Contact deleted successfully!!")
    }

    return (
        <div className="container">
            <div className="row d-flex flex-column">
                <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
                    Add Contact
                </Link>
                <div className="col-md-10 mx-auto my-4">
                    <table className="table table-hover">
                        <thead className="table-header bg-dark text-white">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.length > 0 ? (
                                contacts.map((contact, id) => (
                                    <tr key={id}>
                                        <td>{id + 1}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.num}</td>
                                        <td>
                                            <Link
                                                to={`/edit/${contact.id}`}
                                                className="btn btn-sm btn-primary mr-1"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={() => deleteContact(contact.id)}
                                                className="btn btn-sm btn-danger"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <th>No contacts found</th>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home
