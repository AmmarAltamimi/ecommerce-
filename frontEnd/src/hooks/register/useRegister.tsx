import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, signUpType } from '@validation/SignUp';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
type TState = "idle" | "checking" | "available" | "notAvailable" | "failed";
import {actAuthRegister, resetLoadingAndError} from "@store/auth/authSlice"
import { useAppDispatch,useAppSelector } from "@store/hook"

function useRegister() {
    const [emailAvailabilityStatus, setEmailAvailabilityStatus] = useState<TState>("idle");
    const [prevEmail, setPrevEmail] = useState<string | null>(null);
    const navigate =  useNavigate()
    const dispatch = useAppDispatch()
    const {error,loading}=useAppSelector((state)=>state.auth)

    const { register, handleSubmit, getFieldState, trigger, reset, formState: { errors }, } = useForm<signUpType>({
        mode: 'onBlur',
        resolver: zodResolver(signUpSchema),
    })

    const submitForm: SubmitHandler<signUpType> = (data) => {
        const { firstName, lastName, email, password } = data;
        dispatch(actAuthRegister({firstName,lastName,email,password})).unwrap().then(()=> navigate("/signIn?message=account_created")).catch(()=> document.getElementById('my_modal_1').showModal());
        reset();
    }

    useEffect(()=>{

        return ()=>{
            dispatch(resetLoadingAndError())
        }
    },[dispatch])

    const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
        await trigger("email");
        const value = e.target.value;
        const { isDirty, invalid } = getFieldState("email");

        if (isDirty && !invalid && prevEmail !== value) {

            setEmailAvailabilityStatus("checking");

            try {
                const response = await axios.get(`http://localhost:5005/users?email=${value}`);
                if (response.data.length  === 0) {
                    setEmailAvailabilityStatus("available");
                    setPrevEmail(value);

                } else {
                    setEmailAvailabilityStatus("notAvailable");

                }


            } catch (error) {
                setEmailAvailabilityStatus("failed");

            }

        }
        
        else if (isDirty && invalid && prevEmail) {
            setEmailAvailabilityStatus("idle");
            setPrevEmail(null);

        }

    }

return {emailAvailabilityStatus , register , handleSubmit , errors,submitForm,emailOnBlurHandler,error,loading}

}

export default useRegister
