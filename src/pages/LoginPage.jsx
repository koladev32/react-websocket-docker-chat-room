import React from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'

const LoginPage = () => {

    const navigate = useNavigate();
    const [username, setUsername] = React.useState('');

    function handleSubmit() {
        if(username) {
            navigate(`/chat/${username}`);
        }
    }

  return (
      <Layout>
        <form className='w-full max-w-sm flex flex-col space-y-6'>
            <div className='flex flex-col items-center mb-6 space-y-6'>
                <label
                    className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                    htmlFor='username'
                >
                    Type the username you'll use in the chat
                </label>
                <input
                    className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                    id="username"
                    type="text"
                    placeholder='Your name or nickname'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className='md:flex md:items-center'>
                <div className='md:w-1/3'></div>
                <div className='md:w-2/3'></div>
                <button
                    className='self-center shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
                    type='button'
                    onClick={handleSubmit}
                >
                    Log in the Chat
                </button>
            </div>
        </form>
      </Layout>
  )
}


export default LoginPage
