import React from 'react'
import { login } from './lib/action'

export default function LoginPage() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <form action={login} className='space-y-5 flex flex-col'>
                <input type="email" name='email' placeholder='Email' />
                <input type="password" name='password' placeholder='Password' />
                <button type='submit' className='bg-white border border-green-400 text-black'>Login</button>
            </form>
        </div>
    )
}
