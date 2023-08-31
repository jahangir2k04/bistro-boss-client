import { Link, useNavigate } from 'react-router-dom';
import bgImg from '../../assets/others/authentication.png'
import loginImg from '../../assets/others/authentication1.png'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import SocialLogin from '../../layout/SocialLogin';


const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();


    const onSubmit = data => {
        createUser(data.email, data.password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            updateUserProfile(data.name, data.photo)
            .then(() => {
                const saveUser = {name: data.name, email: data.email}
                fetch('https://bistro-boss-server-tau-dusky.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                .then(res => res.json())
                .then(()=> {
                    reset();
                    navigate('/')
                })
            })
            .catch(() => {})
        })
        .catch(() => {})
    };

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("${bgImg}")` }}>
                <div className="hero-content flex-col lg:flex-row-reverse gap-12 shadow-2xl max-w-6xl">
                    <div className="w-1/2 text-center lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card w-1/2 max-w-sm">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>* Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URl</span>
                                </label>
                                <input type="text" name="photo" {...register("photo", { required: true })} placeholder="photo url" className="input input-bordered" />
                                {errors.photo && <span className='text-red-600'>* Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>* Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered"
                                    {...register("password", {
                                        required: true,
                                        minLength: 8,
                                        pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                                    })} />

                                {errors.password?.type === 'required' && <span className='text-red-600'>* Password is required</span>}

                                {errors.password?.type === 'minLength' && <span className='text-red-600'>* Password must be 8 digit</span>}

                                {errors.password?.type === 'pattern' && <span className='text-red-600'>* Password must have an uppercase letter, a special character and one number</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div className='text-center space-y-2'>
                            <p>
                                <small>Already Have An Account? </small>
                                <Link to="/login" className='font-bold'>Login</Link>
                            </p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;