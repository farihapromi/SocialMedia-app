import { z } from 'zod';
 export const signupValidation = z.object({
    username: z.string().min(2,{message:'Username must be greater or equal to 2 character'}),
    name:z.string().min(2,{message:'Too short.name must be greater than 2 character'}),
    email:z.string(),
    password:z.string().min(8,{message:'Password must contain at least 8 character'}),
 
});
