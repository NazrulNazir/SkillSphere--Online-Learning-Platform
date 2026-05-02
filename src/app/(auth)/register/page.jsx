'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());
        // console.log("Form Data:", userData);


        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            image: userData.photo_URL,
            callbackURL: '/login'
        });
        // console.log('Signup Failed:', { data, error });
        if (data) {
            router.push("/login"); // ✅ manually redirect
        }

        if (error) {
            alert('Signup Failed: ' + error.message);
        }
        else if (data) {
            alert('Account create successfully. Please verify your account');
        }
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-[80vh]">
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <form action="" onSubmit={onSubmit}>
                            <h1 className='text-4xl font-bold text-center text-primary'>Register</h1>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Your Name" />

                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Your Email" />

                                <label className='label'>Photo URL</label>
                                <input className='input' type="text" name='photo_URL' placeholder='Enter Photo URL' />

                                <div>
                                    <label className="label mb-2">Password</label>
                                    <div className="relative w-full max-w-sm">
                                        <input
                                            name='password'
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter your password"
                                            className="input"
                                        />

                                        <span
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-7 text-lg top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>
                                </div>

                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-primary mt-4">Register</button>
                                <p className='text-md'>have an account? <Link className='text-primary font-bold underline' href={'/login'}>Login</Link></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
