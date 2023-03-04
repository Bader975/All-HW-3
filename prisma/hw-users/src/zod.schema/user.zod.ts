import { z,TypeOf } from "zod";

export const userVaild = z.object({
    body:z.object({
        username:z.string({
            required_error: "username is required",
            invalid_type_error: "username must be a string",
    })
  .min(5, { message: " Username Must be 5 or more characters long" }),



        password :z.number({
            required_error: "password is required",
            invalid_type_error: "password must be a Number",
    })
  .min(8, { message: "Must be 8 or more characters long" }),


        joiningYear :z.string({
            required_error: "joining Year is required",
            invalid_type_error: "joining Year must be a string",
    }),


        role :z.enum(["USER", "ADMIN"],{
            required_error: "role Year is required",
            invalid_type_error: "role Year must be a string",
    }),

        age :z.number({
            required_error: "Age is required",
            invalid_type_error: "Age must be a number",
    }),



}),
});






export type nameMoivetypeschema = TypeOf<typeof userVaild>["body"];
