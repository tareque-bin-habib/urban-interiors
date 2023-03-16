import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contaxts/AuthProvider';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const { createUser } = useContext(AuthContext)

    const handleSignup = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl text-center font-bold'>Please Register</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: "name is required" })} className="input input-bordered rounded-xl w-full max-w-xs" />
                        {errors.name && <p className='text-red-500 pt-3'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email is required" })} className="input input-bordered rounded-xl w-full max-w-xs" />
                        {errors.email && <p className='text-red-500 pt-3'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs pb-5">
                        <label className="label">
                            <span className="label-text">Passoword</span>
                        </label>
                        <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password should be 6 character of longer" } })} className="input input-bordered rounded-xl w-full max-w-xs" />
                        {errors.password && <p className='text-red-500 pt-3'>{errors.password?.message}</p>}

                    </div>
                    <input className='btn bg-pink-500 rounded-xl border-0 w-full text-white font-bold' value='Signup' type="submit" />
                </form>
                <p className='pt-4'>Already have an account? <Link className='text-pink-500' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full rounded-xl'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Register;