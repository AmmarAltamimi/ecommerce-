import {useForm,SubmitHandler} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import {signInSchema,signInType} from '@validation/SignIn';
import { useSearchParams } from 'react-router-dom';
import {actAuthSignIn, resetLoadingAndError} from "@store/auth/authSlice"
import { useNavigate } from 'react-router-dom';
import { useAppDispatch,useAppSelector } from "@store/hook"
import { useEffect } from 'react';
import {  toast } from 'sonner'


function useSignin() {
const [searchParams,setSearchParams] = useSearchParams()
const navigate =  useNavigate()
const dispatch = useAppDispatch()
const {error,loading}=useAppSelector((state)=>state.auth)

    const {register,handleSubmit,reset,formState:{errors},} = useForm<signInType>({
        mode : 'onBlur',
        resolver:zodResolver(signInSchema),
      })
    
      const submitForm:SubmitHandler<signInType> = (data) => {
        dispatch(actAuthSignIn(data)).unwrap().then(()=> {navigate("/")}).catch((error)=> {error === "Network Error" ? document.getElementById('my_modal_1').showModal() : null});
        if(searchParams.get("message")){
          setSearchParams("");
        }
  
      }

      useEffect(()=>{

        if (searchParams.get("message") ==="login_required"){
          toast.info('You need to login to view this content')
    
        }
    
       if (searchParams.get("message") ==="account_created"){
          toast.success(' Your account successfully created, please login')
    
        }


        return ()=>{
            dispatch(resetLoadingAndError())
        }

    },[dispatch,searchParams])

      return {register,handleSubmit,errors,submitForm,searchParams,error,loading}

}

export default useSignin
