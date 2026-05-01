import Link from 'next/link'
import React from 'react'

const RegisterPage = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[80vh]">
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <h1 className='text-4xl font-bold text-center text-primary'>Register</h1>
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="Your Name" />

                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Your Email" />

                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-primary mt-4">Register</button>
                            <p className='text-md'>have an account? <Link className='text-primary font-bold underline' href={'/login'}>Login</Link></p>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
