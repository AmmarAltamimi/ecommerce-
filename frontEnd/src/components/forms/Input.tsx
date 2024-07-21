
import { Path, FieldValues, UseFormRegister } from "react-hook-form";

type InputProps<TFieldValue extends FieldValues> = {
    type: string;
    placeholder: string;
    name: Path<TFieldValue>;
    register: UseFormRegister<TFieldValue>;
    emailOnBlurHandler?:(e: React.FocusEvent<HTMLInputElement>)=>void;
    errorMessage?: string ;
    success?:string;
    formText?:string;
    disabled?:boolean;
    pathIcon : React.ReactNode
  };
  

const Input  = <TFieldValue extends FieldValues>({type, placeholder,name,register,emailOnBlurHandler,errorMessage,success,formText,disabled,pathIcon}: InputProps<TFieldValue>) => {

function blurHandler (e: React.FocusEvent<HTMLInputElement>){

    if(emailOnBlurHandler){
        emailOnBlurHandler(e);
        register(name).onBlur(e);
    }else{
        register(name).onBlur(e);
    }
}

  return (
 
    <>
  <label className={`w-full input input-bordered flex items-center mt-8 gap-2 ${errorMessage ?"input-error	":success?"input-success":""}`}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
   {pathIcon}
  </svg>
  <input type={type} className="grow w-full" placeholder={placeholder}  {...register(name) }  onBlur={blurHandler} disabled={disabled} />
 </label>
 {errorMessage && <span className="block mt-1 text-red-500">{errorMessage}</span>}
 {success && <span className="block mt-1 text-green-600">{success}</span>}
 {formText && <span className="block mt-1 ">{formText}</span>}
    </>

  )
}

export default Input
