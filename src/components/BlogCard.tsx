import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "./Header";
import { Bebas_Neue } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faArrowRight,
  faBirthdayCake,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BlogCard = () => {
  return (
    <Card className="w-full flex flex-col items-start transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 mb-1">
      <Image
        src="https://images.pexels.com/photos/11109404/pexels-photo-11109404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Adoption Service"
        width={350}
        height={200}
        className="rounded-lg w-full h-[200px] object-cover p-2"
      />

      <div className="flex flex-col space-y-4 px-4 w-full">
        <h1 className="text-2xl font-bold leading-tight">Lorem, ipsum dolor.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laborum molestiae rem totam aperiam nesciunt laudantium dolorum, ut officia unde.</p>
        <div className="mt-4">
          <Link href="/dashboard/blogs">
            <span className="text-sm font-extralight text-red-500 hover:underline">
              Read More <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
