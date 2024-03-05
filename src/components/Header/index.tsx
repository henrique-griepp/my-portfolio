import { ModeToggle } from "../mode-toggle.tsx" 


export function Header () {
    return(
        <nav className="p-2 container max-w-4xl absolute right-0 left-0 flex justify-end ">
            <ModeToggle />
        </nav> 
    )
        
    
}