import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    }, [user || gUser, navigate, from])
    if (loading || gLoading) {
        return <Loading></Loading>
    }
    let elementError
    if (error || gError) {
        elementError = <p className='text-red-500 text-sm'>{error?.message}</p>
    }
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
        reset()
    }
    return (

        <div class="flex h-screen justify-center items-center">
            <div class="card  w-96  shadow-2xl bg-base-100">
                <div class="card-body">
                    <h2 className='text-center text-3xl text-primary'>Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Enter email address"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required"
                                    },
                                    pattern: {
                                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                        message: "Please Provide valid Email"
                                    }
                                })}
                            />
                            <label className='label'>
                                {errors?.email?.type === "required" && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                                {errors?.email?.type === "pattern" && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder="Enter Password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Password  must be minimum 6 characters"
                                    }
                                })}
                            />
                            <label className='label'>
                                {errors?.password?.type === "required" && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                                {errors?.password?.type === "minLength" && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Login</button>
                            <p><small>Do you have an account?</small> <Link to="/signup" className="text-primary">Create an account</Link></p>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue with google</button>
                </div>
            </div>
        </div>

    );
};

export default Login;