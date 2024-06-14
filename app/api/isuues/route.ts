import prisma from "@/prisma/cilent";
import { NextRequest, NextResponse } from "next/server";
import { title } from "process";
import {z} from "zod"


const createisuue=z.object({

    title:z.string().min(1).max(225),
    description:z.string().min(1),
//     name: z.string(),
//     email: z.string(),
//     password: z.string(),
//     password_confirmation: z.string(),
//     phone: z.string(),
//     address: z.string(),
//     city: z.string(),
//     state: z.string(),
//     country: z.string(),
//     zipcode: z.string(),
//     role: z.string(),
//     status: z.string(),
//     created_at: z.string(),
//     updated_at: z.string(),
//     deleted_at: z.string(),
})


export async function POST(request: NextRequest) {
    const body = await  request. json ();

    //data vaidation

    const datavalidtaion = createisuue.safeParse(body)

    if (! datavalidtaion.success) {
        return NextResponse.json({ errors: datavalidtaion.error.errors }, { status: 400 });
        
       

    
   }
    const newisuue= await prisma.issue.create({
        data:{
            title:body.title,decription:body.description
        }
    })

    return NextResponse.json(newisuue,{status:201});
}
