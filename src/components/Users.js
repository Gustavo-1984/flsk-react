import React, {useState, useEffect} from 'react';

const API = process.env.REACT_APP_API

const Users = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const[users, setUsers] = useState ([])

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const res = await fetch(`${API}/users`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( {
                name,
                email,
                password
            })
        })
        const data = await res.json()
        console.log(data)
    }

    const getUsers = async () =>{
        const res = await fetch(`${API}/users`)
        const data = await res.json()
        setUsers(data)
        console.log(data)
    }

    useEffect(() =>{
        getUsers()
    }, [])

    const deleteUser = (id) =>{
        console.log(id)
    }
    return ( 
        <div className="row">
            <div className="col-md-4">
                <form onSubmit={handleSubmit} className="card card-body">
                    <div className="form-group">
                        <input 
                            type="text"
                            onChange={ e => setName(e.target.value)}
                            value={name}
                            className="form-control"
                            placeholder="Name"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="email"
                            onChange={ e => setEmail(e.target.value)}
                            value={email}
                            className="form-control"
                            placeholder="Email"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="password"
                            onChange={ e => setPassword(e.target.value)}
                            value={password}
                            className="form-control"
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                        Create
                    </button>
                </form>
            </div>
            <div className="col-md-6">
               <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user =>(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>
                            <button className="btn btn-secondary btn-sm btn-block">Edit</button>
                            <button 
                            className="btn btn-danger btn-sm btn-block"
                            onClick={() => deleteUser(user.id)}
                            >Delete</button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
               </table>
            </div>
        </div>
     );
}
 
export default Users;