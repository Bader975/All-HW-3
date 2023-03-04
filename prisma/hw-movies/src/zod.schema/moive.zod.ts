import { z,TypeOf } from "zod";

export const MoiveVaild = z.object({
    body:z.object({
         name:z.string({
            required_error: "Name is required",
            invalid_type_error: "Name must be a string",
    })
  .min(2, { message: "Must be 2 or more characters long" }),



  genre: z.enum(["Drama", "Action", "Comedy"], {
    required_error: "Genre is required",
    invalid_type_error: "Genre must be a string",
  }),

      rating :z.number({
            required_error: "number is required",
     
    })
  .min(1, { message: "Must be between 1-5" }) .max(5, { message: "Must be between 1-5" }),


      duration :z.number({
            required_error: "duration is required",
       
    })
  .min(0, { message: "Must be  more then 1 min long" }) .max(60, { message: "The Max of duration 60 mins" }),



 
}),
});


export type nameMoivetypeschema = TypeOf<typeof MoiveVaild>["body"];
