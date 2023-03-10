import React from 'react'
import { useFormik } from 'formik'
import { loginSchema } from '../schemas';

const onSubmit = async (values, actions) => {
    console.log("Submitted");
    console.log(values)
    console.log(actions)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
}

function AdminLogin() {


    const { values, handleBlur, isSubmitting, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        //Page Validation Form
        validationSchema: loginSchema,
        onSubmit,
    });
    console.log(errors);

    return (
        <>
            <div className='flex max-w-[800px] mx-auto  bg-[#b87928] shadow-[#b87928] shadow-2xl   justify-center rounded-r-3xl rounded-l-3xl  '>
                <div className=' w-1/4'>

                </div>

                <div className='bg-white w-3/4 rounded-l-3xl rounded-r-3xl hover:shadow-black hover:shadow-xl pr-2'>
                    <div className=' text-center text-5xl font-bold'>
                        <div className=' mt-12'><p>Admin</p></div>
                        <div className='mt-4'><p>Account Login</p></div>
                        <div className='font-light text-2xl mt-4'><p>(Log-in to your account)</p></div>

                    </div>

                    <form onSubmit={handleSubmit} className='mt-6'>

                        { /* Email Input */}
                        <div className=' text-left flex px-12 mt-24 '>
                            <label className='ml-10 mr-2 text-2xl mt-1 font-semibold' htmlFor="email"> Email: </label>
                            <input className={`bg-[#e0e0e0] rounded-full w-full text-xl text-gray-700 px-3  py-2  ${errors.email && touched.email ? " border-red-500 focus:border-red-500 border-2 border-solid" : ""}`} type="email" name='email' placeholder='Lastname.Firstname@school.edu.ph' autoComplete='off'
                                /* Formik email validation Section  */

                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        {errors.email && touched.email && <p className="text-red-500 ml-44 flex-w">{errors.email}</p>}

                        { /* Password Input */}
                        <div className='text-left flex px-12 mt-8'>
                            <label htmlFor="password" className='mr-2 text-2xl mt-1 font-semibold'> Password: </label>
                            <input className={` bg-[#e0e0e0] rounded-full w-full text-xl text-gray-700 px-3  py-2 ${errors.password && touched.password ? " border-red-500 focus:border-red-500 border-2 border-solid" : ""} `} type="password" name='password' placeholder='Admin LRN' autoComplete='off' required
                                /* Formik password validation Section */

                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                        </div>
                        {errors.password && touched.password && <p className="text-red-500 ml-44 flex-w">{errors.password}</p>}


                        { /* Login Button */}
                        <div className=' mt-16 mb-8 text-center w-full '>
                            <button disabled={isSubmitting} type="submit" className="bg-green-500 hover:bg-green-700 shadow-lg hover:shadow-green-500 text-white font-bold py-3 px-12  rounded-full">
                                <span className="text-xl  font-bold">LOG-IN </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>)
}

export default AdminLogin