import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contaxts/AuthProvider';
import './Login.css'

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const { signIn, createWithGmail } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const handleLogin = data => {
        console.log(data)
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error.message)
                setLoginError(error.message)
            })
    }

    const handleGoogle = () => {
        const provider = new GoogleAuthProvider();
        createWithGmail(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }


    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-7  categorie'>
                <h2 className='text-2xl text-center font-bold'>Please Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" {...register("email", { required: "Email is required" })} className="input input-bordered rounded-xl w-full max-w-xs" />
                        {errors.email && <p className='text-red-500 pt-3'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Passoword</span>
                        </label>
                        <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password should be 6 character of longer" } })} className="input input-bordered rounded-xl w-full max-w-xs" />
                        {errors.password && <p className='text-red-500 pt-3'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text pt-3">Forget Passoword?</span>
                        </label>
                        <div className='py-3'>
                            {loginError && <p className='text-red-500'>{loginError}</p>}
                        </div>
                    </div>
                    <input className='btn bg-teal-500 rounded-xl border-0 w-full text-white font-bold' value='Login' type="submit" />
                </form>
                <p className='pt-4'>New to Urban Interior? <Link className='text-teal-500' to='/register'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogle} className='btn btn-outline w-full rounded-xl'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;