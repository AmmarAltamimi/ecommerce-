import z from 'zod'

const signUpSchema=z.object({
    firstName:z.string().min(2,{message:'first Name  must be at least 2 characters long'}).max(50, { message: "Name must be at most 50 characters long" }).refine((value) => /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/.test(value), 'Invalid name format'),
    lastName:z.string().min(2,{message:'Last Name must be at least 2 characters long'}).max(50, { message: "Name must be at most 50 characters long" }).refine((value) => /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/.test(value), 'Invalid name format'),
    email:z.string().min(1,{message:'Email is required'}).email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters longs" }).regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, { message: "Password should contain at least 1 special character",}),
confirmPassword: z.string().min(1, { message: "Confirm Password is required" }),
  }).refine((input)=> input.password === input.confirmPassword,{
    message: "Password and Confirm Password does not match",
    path:["confirmPassword"]
  })

  type signUpType = z.infer<typeof signUpSchema>;



  export {signUpSchema , type signUpType}