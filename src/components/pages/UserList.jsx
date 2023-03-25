import React, {useState, useEffect} from 'react'
import axios from 'axios'
import env from 'react-dotenv'

const UserList = () => {
    const [users, setUsers] = useState([])
    const [trivias, setTrivias] = useState([])
    let API = env.REACT_APP_SKINFIRST_API

    const getUsers = async() =>{
        const response = await axios.get(API+"users")
        const dataUser = response.data
        setUsers(dataUser)
    }    

    const getTrivias = async() =>{
        const response = await axios.get(API+"trivias")
        const dataTrivias = response.data
        setTrivias(dataTrivias)
    }    

    useEffect(() => {
      getUsers();
      getTrivias();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    

  
    return (
    <div className='min-h-screen pt-40 px-40 pb-40'>
        <h1 className='font-bold text-[50px]'>LIST USER</h1>
        <table class="table border-gray-900 border-2 mt-10">
            <thead>
                <tr > 
                    <th className='border-gray-900 border-2'>No</th>
                    <th className='border-gray-900 border-2'>Username</th>
                    <th className='border-gray-900 border-2'>Email</th>
                    <th className='border-gray-900 border-2'>Password</th>
                </tr>
            </thead>
            {users.map((user,index)=>{
                return(
                    <tbody className='border-gray-900 border-2'>
                        <tr>
                            <td className='border-gray-900 border-2 px-4'>{index+1}</td>
                            <td className='border-gray-900 border-2 px-8'>{user.username}</td>
                            <td className='border-gray-900 border-2  px-8'>{user.email}</td>
                            <td className='border-gray-900 border-2  px-8'>{user.password}</td>
                        </tr>
                    </tbody>
                )
            })}
        </table>

        <h1 className='font-bold text-[50px] mt-40'>LIST TRIVIA</h1>
        <table class="table border-gray-900 border-2 mt-10">
            <thead>
                <tr > 
                    <th className='border-gray-900 border-2'>No</th>
                    <th className='border-gray-900 border-2'>Image</th>
                    <th className='border-gray-900 border-2'>Name</th>
                    <th className='border-gray-900 border-2'>Description</th>
                </tr>
            </thead>
            {trivias.map((trivia,index)=>{
                return(
                    <tbody className='border-gray-900 border-2'>
                        <tr>
                            <td className='border-gray-900 border-2 px-4'>{index+1}</td>
                            <td className='border-gray-900 border-2 px-8'>{trivia.image}</td>
                            <td className='border-gray-900 border-2  px-8'>{trivia.name}</td>
                            <td className='border-gray-900 border-2  px-8'>{trivia.description}</td>
                        </tr>
                    </tbody>
                )
            })}
        </table>
    </div>
  )
}

export default UserList