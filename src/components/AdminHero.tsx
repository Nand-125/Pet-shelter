
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "./Header";
import { Bebas_Neue } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import AdminHeader from "./AdminHeader";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const AdminHero = () => {
  return (
    <div className="min-h-[600px] w-full bg-[url(https://images.pexels.com/photos/28860758/pexels-photo-28860758/free-photo-of-cozy-interior-with-bernese-mountain-dog-and-modern-decor.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-center bg-no-repeat">
      <AdminHeader/>
      <div className="w-[300px] font-extrabold text-white text-5xl ml-20 leading-15 mt-30">
        <h1 className={bebas.className}>BEST FRIEND FOR YOUR BEST TIME</h1>
      </div>
      <div className="text-white ml-20 mt-5 w-[500px]">
        <p>
          Pet adoption gives animals a second chance and brings joy to their new
          families. It helps reduce homelessness and overbreeding, while offering
          loyal companionship. Whether it’s a playful pup or a gentle cat, there’s a
          perfect pet for everyone.
        </p>

      </div>
      <ul className="flex flex-row items-center gap-8 mr-10 mt-5 ml-20 ">
  <li>
    <Button className="bg-white text-black hover:bg-gray-200 p-6"><FontAwesomeIcon icon={faPaw} />Adopt Now</Button>
    
  </li>
</ul>

    </div>
  );
};

export default AdminHero;
