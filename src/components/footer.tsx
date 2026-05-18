import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";



function Footer () {
    return (
        <footer className="p-4 bg-amber-500 -z-1000 w-screen h-screen  text-sm text-black-500">

            <div className="h-full justify-center items-center text-white">
                
                <div className="flex flex-col justify-center items-center w-full">
                    <div className = "text-center w-full">
                <h1 className = " font-black text-5xl mb-10 mt-10">Stay in the loop.</h1>
                <p className = " text-xl mb-10 ">Drop your email and we'll let you know about any upcoming events and exhibits.</p>
                </div>

                <div className="flex relative z-100 w-100">
                    <Input className = " w-full placeholder:text-white placeholder:opacity-35 border-white" placeholder = "e.g johdoe@exmaple.com"></Input>
                    <div className="">
                    <Button  variant = "styled" className = "absolute bg-amber-500 border border-white right-0 top-0 h-full">Submit</ Button>
                    </div>

                </div>

                </div>
                <div className="w-full justify-center mt-30 items-center flex">
            <p className="">&copy; 2026 Studio Unpleasant. All rights reserved.</p>
            </div>
            </div>

            
        </footer>
    );
}

export default Footer;