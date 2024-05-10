import {z} from "zod";

//you can use the term either identifier, username and email
export const signInSchema = z.object({
    identifier: z.string(),
    password: z.string()
})