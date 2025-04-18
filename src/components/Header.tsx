import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {

  return (
    <header className="my-5 w-full flex justify-between ">
    <div className="ml-50 flex justity-between gap-x-6 mt-5 text-black-500">
    
      <Link href="/dashboard">
        Home
      </Link>
      <Link href="/dashboard">
        About
      </Link>
      <Link href="/dashboard/account">
        Your Account
      </Link>
      <Link href="/dashboard/blogs">
        Blogs
      </Link>
      <Link href="/dashboard/pets">
        Pets
      </Link>
      <Link href="/admin">
        Admin
      </Link>
      </div>
  
    
      <ul className="flex flex-row items-center gap-8 mr-10 mt-5">
        <li>
            <Button>Logout</Button>
        </li>
      </ul>
      
    </header>
  );
};

export default Header;