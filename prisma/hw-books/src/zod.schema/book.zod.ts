import { z,TypeOf } from "zod";


export const userVaild = z.object({
  body:z.object({
      username:z.string({
          required_error: "username is required",
          invalid_type_error: "username must be a string",
  })
.min(3, { message: " Username Must be 3 or more characters long" }),



      password :z.number({
          required_error: "password is required",
          invalid_type_error: "password must be a Number",
  })
.min(5, { message: "Must be 5 or more characters long" }),
  }),
  });
export type nameMoivetypeschema = TypeOf<typeof userVaild>["body"];
