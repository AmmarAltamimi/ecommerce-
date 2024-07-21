import Input from '@components/forms/Input';
import {useSignin} from '@hooks';
import { useEffect } from 'react';

import { Toaster } from 'sonner'


function SignIn() {
const  {register,handleSubmit,errors,submitForm,error,loading} = useSignin();
 



  return (
    <>           
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-red-600">Error!</h3>
    <p className="py-4 text-red-500">There is {error}</p> {/* Changed text-red-600 to text-red-500 */}
    <div className="modal-action">
      <form method="dialog">
        <button className="btn bg-red-600 hover:bg-red-700 text-white">Close</button>
      </form>
    </div>
  </div>
</dialog>





      <Toaster className='mt-14' position="top-center"  expand={false} richColors />

          
  
   <form className='flex justify-center mt-16 mb-10'  onSubmit={handleSubmit(submitForm)}>
    <div className='sm:w-[40%]'>

    <Input type="text" placeholder='Email' name='email' register={register} errorMessage={errors.email?.message} pathIcon={<><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /> <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></>}/>
  
    <Input type="password" placeholder='Password' name='password' register={register} errorMessage={errors.password?.message} pathIcon={ <path fillRule="evenodd"d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />}/>
    <div>
                <button type="submit" className="mt-6 w-[150px] block ml-auto px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    {loading==="pending" ?  (<div className="flex items-center justify-center gap-1"><span className="loading loading-spinner loading-md "></span> loading</div>) : "Sign In  "}  
                    </button>
            </div>
{error==="Cannot find user" && (<div className='block mt-1 text-red-500'>The username you entered not found , please check and try again</div>) }
{error==="Incorrect password" && (<div className='mt-1 text-red-500'>Incorrect password, please check and try again</div>) }
    </div>
        </form> 
        </>
  )
}

export default SignIn
