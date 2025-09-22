import {Button} from "@repo/ui/button";
import {Input} from "@repo/ui/input";
import Link from "next/link";

export function AuthPage({isSignin}: {isSignin: boolean}) {
    return <div className="w-screen h-screen justify-center items-center flex ">

        <div className="p-2 m-2 bg-gray-600 rounded-lg flex flex-col gap-2">
            <Input  placeholder="Email" type="text"/>
            <Input placeholder="Password" type="password"/>
            <Button children={isSignin ? "Sign In" : "Sign Up"}  className="bg-black p-2 rounded-lg"/>
            <Link href={"/"}><p className="text-xs">Home page</p></Link>
        </div>
    </div>
}