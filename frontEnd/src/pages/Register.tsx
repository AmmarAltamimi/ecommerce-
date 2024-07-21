
import Input from '@components/forms/Input';
import {useRegister} from '@hooks';


function Register() {
  const {emailAvailabilityStatus , register , handleSubmit , errors,submitForm,emailOnBlurHandler,error,loading} = useRegister()


return (
    <>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-red-600">Error!</h3>
    <p className="py-4 text-red-600">There is {error}</p>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn bg-red-600 hover:bg-red-700 text-white">Close</button>
      </form>
    </div>
  </div>
</dialog>



    <form className='flex justify-center mt-10 mb-10 w-[100%]' onSubmit={handleSubmit(submitForm)}>
        <div className='sm:w-[40%]'>

            <Input type="text" placeholder='First Name' name='firstName' register={register} errorMessage={errors.firstName?.message} pathIcon={<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />} />
            <Input type="text" placeholder='Last Name' name='lastName' register={register} errorMessage={errors.lastName?.message} pathIcon={<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />} />
            <Input type="text" placeholder='Email' name='email' register={register}  errorMessage={errors.email?.message ? errors.email?.message:emailAvailabilityStatus === "notAvailable" ? "This email is already in use." : emailAvailabilityStatus === "failed" ? "Error from the server." :""} emailOnBlurHandler={emailOnBlurHandler} success ={emailAvailabilityStatus === "available" ? "This email is available for use." : ""} formText={emailAvailabilityStatus === "checking" ?  "We're currently checking the availability of this email address. Please wait a moment." : ""} disabled={emailAvailabilityStatus === "checking"} pathIcon={<><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /> <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></>} />
            <Input type="password" placeholder='Password' name='password' register={register} errorMessage={errors.password?.message} pathIcon={<path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />} />
            <Input type="password" placeholder='Confirm Password' name='confirmPassword' register={register} errorMessage={errors.confirmPassword?.message} pathIcon={<path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />} />


            <div>
                <button type="submit" className="mt-6 w-[150px] block ml-auto px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    {loading==="pending" ?  (<div className="flex items-center justify-center gap-1"><span className="loading loading-spinner loading-md "></span> loading</div>) : "Sign Up"}  
                    </button>
            </div>
        </div>
        
    </form>


   </>
)
}

export default Register
