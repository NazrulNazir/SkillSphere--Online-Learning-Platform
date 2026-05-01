'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link'
import React from 'react'

const LogInPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());
        // console.log('Login User Data..', userData);

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            rememberMe: true,
            callbackURL: "/",
        });

        // console.log('get form data', {data, error});
        if(data){
            alert('Signin Sussessfully..');
        }
        if(error){
            alert(error.message);
        }

    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-[80vh]">
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={onSubmit}>
                            <h1 className='text-4xl font-bold text-center text-primary'>Login</h1>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-primary mt-4">Login</button>
                                <p> Don’t have an account? <Link className='text-primary font-bold underline' href={'/register'}>Register</Link></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogInPage
