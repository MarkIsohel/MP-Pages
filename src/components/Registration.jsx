import React from 'react'
import { useFormik } from 'formik'
import { registrationSchema } from '../schemas';

function Registration() {

    const onSubmit = async (values, actions) => {
        console.log(values);
        console.log(actions);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
    };

    const { values, handleBlur, isSubmitting, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            firstName: "",
            middleName: "",
            lastName: "",
            birthDay: "",
            age: "",
            section: "Rizal",
            groupType: "Facial Group",
            gradeLevel: "Grade 7",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: registrationSchema,
        onSubmit,

    });
    console.log(errors);
    return (

        <>
            <div className="mx-auto my-16 w-2/3 ">

                <div className="bg-white rounded-3xl min-w-full shadow-[#808080] shadow-xl  ">



                    <div className="grid grid-cols-12 bg-[#b87928] py-8 -mt-2  rounded-t-3xl shadow-md shadow-yellow-800/30">
                        <div className="bg-black/30 rounded-full pb-2 mx-6 shadow-lg shadow-yellow-700 w-1/2">{'\u00A0'}
                            <div className="bg-lime-200 rounded-full mx-1  pt-4 -mt-7 ">{'\u00A0'}</div>
                        </div>

                        <div className="bg-black/30 rounded-full pb-2 mx-6 shadow-lg shadow-yellow-700 w-1/2">{'\u00A0'}
                            <div className="bg-lime-200 rounded-full mx-1  pt-4 -mt-7 ">{'\u00A0'}</div>
                        </div>

                        <div className="bg-black/30 rounded-full pb-2 mx-6 shadow-lg shadow-yellow-700 w-1/2">{'\u00A0'}
                            <div className="bg-lime-200 rounded-full mx-1  pt-4 -mt-7 ">{'\u00A0'}</div>
                        </div>

                        <div className="bg-black/30 rounded-full pb-2 mx-6 shadow-lg shadow-yellow-700 w-1/2">{'\u00A0'}
                            <div className="bg-lime-200 rounded-full mx-1  pt-4 -mt-7 ">{'\u00A0'}</div>
                        </div>

                        <div className="bg-black/30 rounded-full pb-2 mx-6 shadow-lg shadow-yellow-700 w-1/2">{'\u00A0'}
                            <div className="bg-lime-200 rounded-full mx-1  pt-4 -mt-7 ">{'\u00A0'}</div>
                        </div>

                        <div className="bg-black/30 rounded-full pb-2 mx-6 shadow-lg shadow-yellow-700 w-1/2">{'\u00A0'}
                            <div className="bg-lime-200 rounded-full mx-1  pt-4 -mt-7 ">{'\u00A0'}</div>
                        </div>
                        <div className="bg-black/30 rounded-full pb-2 mx-6 shadow-lg shadow-yellow-700 w-1/2">{'\u00A0'}
                            <div className="bg-lime-200 rounded-full mx-1  pt-4 -mt-7 ">{'\u00A0'}</div>
                        </div>

                        <div className="bg-black/30 rounded-full pb-2 mx-6 shadow-lg shadow-yellow-700 w-1/2">{'\u00A0'}
                            <div className="bg-lime-200 rounded-full mx-1  pt-4 -mt-7 ">{'\u00A0'}</div>
                        </div>

                        <div className="bg-black/30 rounded-full pb-2 mx-6 shadow-lg shadow-yellow-700 w-1/2">{'\u00A0'}
                            <div className="bg-lime-200 rounded-full mx-1  pt-4 -mt-7 ">{'\u00A0'}</div>
                        </div>

                        <div className="bg-black/30 rounded-full pb-2 mx-6 shadow-lg shadow-yellow-700 w-1/2">{'\u00A0'}
                            <div className="bg-lime-200 rounded-full mx-1  pt-4 -mt-7 ">{'\u00A0'}</div>
                        </div>

                        <div className="bg-black/30 rounded-full pb-2 mx-6 shadow-lg shadow-yellow-700 w-1/2">{'\u00A0'}
                            <div className="bg-lime-200 rounded-full mx-1  pt-4 -mt-7 ">{'\u00A0'}</div>
                        </div>

                        <div className="bg-black/30 rounded-full pb-2 mx-6 shadow-lg shadow-yellow-700 w-1/2">{'\u00A0'}
                            <div className="bg-lime-200 rounded-full mx-1  pt-4 -mt-7 ">{'\u00A0'}</div>
                        </div>
                    </div>

                    <div className="w-full border-b-2 border-gray-300 py-2 text-2xl text-black grid place-items-center font-poppins">
                        <h1>&#40; Register an account &#41;</h1>
                    </div>

                    <form onSubmit={handleSubmit} action="">
                        <main className='p-16 min-w-fit'>
                            <div className='flex justify-between '>
                                {/*FirstName Input*/}
                                <div>
                                    <label htmlFor="firstName" className=' inline-block pb-2 ml-[9px] mr-2'>First Name: </label>
                                    <input name='firstName' type="text " placeholder='Enter First Name ' autoComplete="new-password"
                                        className={`p-2 border-2 rounded-md border-gray-500 focus:outline-teal-500 relative focus:ring-teal-500 w-52 shadow-md shadow-[#808080] ${errors.firstName && touched.firstName ? "shadow-red-500 shadow-md  border-red-500 focus:border-red-500 border-2 border-solid" : ""}`}

                                        value={values.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.firstName && touched.firstName && <p className="text-red-500 absolute ml-[100px] flex-w">{errors.firstName}</p>}
                                </div>


                                {/*MiddleName Input*/}
                                <div className='ml-2'>
                                    <label htmlFor="middleName" className='inline-block pb-2 mr-2'>Middle Name: </label>
                                    <input name='middleName' type="text " placeholder='Enter middle Name' autoComplete="new-password"
                                        className={`p-2 border-2  rounded-md relative border-gray-500 focus:outline-teal-500 focus:ring-teal-500  w-52 shadow-md shadow-[#808080] ${errors.middleName && touched.middleName ? " shadow-red-500 shadow-md border-red-500 focus:border-red-500 border-2 border-solid" : ""}`}
                                        value={values.middleName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.middleName && touched.middleName && <p className="text-red-500  absolute ml-28 ">{errors.middleName}</p>}
                                </div>

                                {/*LastName Input*/}
                                <div className='ml-2'>
                                    <label htmlFor="lastName" className='inline-block pb-2 mr-2'> Last Name: </label>
                                    <input name='lastName' type="text " placeholder='Enter last Name' autoComplete="new-password"
                                        className={`p-2 border-2 relative rounded-md border-gray-500 focus:outline-teal-500 focus:ring-teal-500 w-52 shadow-md shadow-[#808080] ${errors.lastName && touched.lastName ? " shadow-red-500 shadow-md border-red-500 focus:border-red-500 border-2 border-solid" : ""} `}
                                        value={values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.lastName && touched.lastName && <p className="text-red-500  absolute ml-[90px] ">{errors.lastName}</p>}
                                </div>
                            </div>

                            <div className='flex mt-8'>
                                {/*BirthDay Input*/}
                                <div className=''>
                                    <label htmlFor="birthDay" className='inline-block pb-2 mr-2 ml-[22px]'>Birth Day: </label>
                                    <input name='birthDay' type="date" autoComplete="new-password"
                                        className="p-2 border-2  focus:border-none rounded-md border-gray-500 focus:outline-teal-500 focus:ring-teal-500 shadow-md shadow-[#808080]"
                                        value={values.birthDay}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>

                                {/*Age Input*/}
                                <div>
                                    <label htmlFor="age" className='inline-block pb-2 ml-[232px] mr-2'>Age: </label>
                                    <input type="number" name="age" min="1" max="25" placeholder='Enter Age' autoComplete="new-password"
                                        className={`p-2 border-2 w-36 rounded-md focus:border-none border-gray-500 focus:outline-teal-500 focus:ring-teal-500  shadow-md relative shadow-[#808080] ${errors.age && touched.age ? " shadow-red-500 shadow-md border-red-500 focus:border-red-500 border-2 border-solid" : ""}`}
                                        value={values.age}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.age && touched.age && <p className="text-red-500  absolute ml-[275px] ">{errors.age}</p>}
                                </div>

                                {/*Sex Input*/}
                                <div className=''>
                                    <label htmlFor="sex" className='inline-block p-2 ml-[230px] '>Sex: </label>
                                    <input name='sex' type='radio' className="p-2" value='male' checked={values.sex === 'male'} onChange={handleChange} /> Male
                                    <input name='sex' type='radio' className="p-2 ml-4" value='female' checked={values.sex === 'female'} onChange={handleChange} /> Female
                                    {touched.sex || errors.sex && <p className="text-red-500 absolute ml-[280px]">{errors.sex}</p>}
                                </div>

                            </div>

                            <div className='mt-8 flex'>
                                {/*GradeLevel Input*/}
                                <div>
                                    <label htmlFor="gradeLevel" className='inline-block pb-2 ml-[2px] mr-2'>Grade Level: </label>
                                    <select
                                        value={values.gradeLevel}
                                        onChange={handleChange}
                                        name="gradeLevel" id="gradeLevel" className='p-2 border-2 w-36  focus:border-none rounded-md border-gray-500 focus:outline-teal-500 focus:ring-teal-500 shadow-md shadow-[#808080]'>
                                        <option>Grade 7</option>



                                    </select>
                                </div>

                                {/*Section Input*/}
                                <div>
                                    <label htmlFor="section" className='ml-[224px] mr-2'>Section:</label>
                                    <select
                                        value={values.section}
                                        onChange={handleChange}
                                        name='section'
                                        className='p-2 border-2 w-36 focus:border-none rounded-md border-gray-500 focus:outline-teal-500 focus:ring-teal-500 shadow-md shadow-[#808080] '>
                                        <option>Rizal</option>
                                        <option>Bonifacio</option>
                                        <option>Mabini</option>
                                        <option>Aguinaldo</option>
                                        <option>Jacinto</option>
                                        <option>Luna</option>
                                        <option>Del Pilar</option>
                                        <option>Silang</option>
                                    </select>
                                </div>

                                {/*Group Type Input*/}
                                <div >
                                    <label htmlFor="groupType" className='ml-[179px] mr-2  '>Group Type: </label>
                                    <select
                                        value={values.groupType}
                                        onChange={handleChange}
                                        name='groupType'
                                        className='p-2 border-2 w-36 rounded-md focus:border-none border-gray-500 focus:outline-teal-500 focus:ring-teal-500  shadow-md shadow-[#808080]'>
                                        <option>Facial Group</option>
                                        <option>Non Facial Group</option>

                                    </select>

                                </div>


                            </div>

                            <div className='mt-8'>
                                <div>
                                    {/*Email Input*/}
                                    <div>
                                        <label htmlFor="email" className='inline-block pb-2 ml-[47px] mr-2 '>Email: </label>
                                        <input name='email' type="email " autoComplete='off' placeholder='lastname.firstname@school.edu.ph'
                                            className={`p-2 border-2 w-1/3 rounded-md border-gray-500 focus:outline-teal-500 focus:ring-teal-500 shadow-md shadow-[#808080] ${errors.email && touched.email ? " shadow-red-500 shadow-md border-red-500 focus:border-red-500 border-2 border-solid" : ""}`}
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        {errors.email && touched.email && <p className="text-red-500  absolute ml-[103px] ">{errors.email}
                                        </p>}
                                    </div>

                                </div>



                            </div>

                            <div>
                                <div className='flex mt-8'>
                                    {/*Password Input*/}
                                    <div>
                                        <label htmlFor="password" className='inline-block pb-2 mr-2 ml-[19px]'>Password: </label>
                                        <input name='password' type="password" autoComplete="new-password" placeholder='Enter Password'
                                            className={`p-2 border-2  rounded-md border-gray-500 focus:outline-teal-500 focus:ring-teal-500 focus:border-none shadow-md relative shadow-[#808080] ${errors.password && touched.password ? " shadow-red-500 shadow-md border-red-500 focus:border-red-500 border-2 border-solid" : ""}`}
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.password && touched.password && <p className="text-red-500  absolute ml-[103px] ">{errors.password}
                                        </p>}
                                    </div>

                                    {/*Confirm  Password Input*/}
                                    <div className=''>
                                        <label htmlFor="confirmPassword" className='inline-block ml-[91px] mr-2 pb-2'>Confirm Password: </label>
                                        <input name='confirmPassword' type="password" autoComplete="new-password" placeholder='Confirm Enter Password'
                                            className={`p-2 border-2  rounded-md border-gray-500 focus:outline-teal-500 focus:ring-teal-500 focus:border-none  shadow-md shadow-[#808080] ${errors.confirmPassword && touched.confirmPassword ? " shadow-red-500 shadow-md border-red-500 focus:border-red-500 border-2 border-solid" : ""}`}
                                            value={values.confirmPassword}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.confirmPassword && touched.confirmPassword && <p className="text-red-500  absolute ml-[235px] ">{errors.confirmPassword}
                                        </p>}
                                    </div>

                                </div>
                                <div className=' flex justify-end text-center w-full mt-16 '>
                                    <button type="submit" disabled={isSubmitting} className="bg-green-500 hover:bg-green-700 shadow-lg shadow-[#808080] hover:shadow-green-500 text-white font-bold py-3 px-12  rounded-full">
                                        <span className="text-xl  font-bold">Register </span>
                                    </button>
                                </div>

                            </div>
                        </main>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Registration