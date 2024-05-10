import {z} from "zod";

//you can use the term either identifier, username and email
export const acceptMessageSchema = z.object({
    acceptMessages: z.string()
})