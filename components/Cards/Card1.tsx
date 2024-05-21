import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"
import { HTMLAttributes } from "react"

interface Card1Props extends HTMLAttributes<HTMLElement>{
    title:string
    thumb:string
}

export const Card1 = ({title, thumb, ...rest}:Card1Props) =>{
    return(
        <Card>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non ipsa corrupti magnam, officia quos.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="relative w-full h-[200px]">

            <Image  src={thumb} alt="bg" objectFit="cover" fill/>
            </div>

            <p>Lorem ipsum dolor sit amet.</p>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
</Card>

    )
}