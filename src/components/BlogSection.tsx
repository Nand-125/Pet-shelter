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
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <div>
      <div className="flex mt-30 ml-20 justify-between items-center mr-20">
        <div className="flex flex-col justify-start space-y-6">
          <p className="text-orange-400 font-semibold border-l-2 border-orange-500 pl-2 text-sm mb-2">
            Our News
          </p>
          <h1 className="text-4xl font-bold leading-tight">Blogs & Articles</h1>
          <p className="w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            dignissimos quis doloribus qui consequuntur fuga ipsum magnam
            consequatur eligendi! Ut.
          </p>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2">
          See More <FontAwesomeIcon icon={faPaw} />
        </button>

      </div>
      <div className="justify-between flex space-x-10 mt-20 ml-20 mr-20">
       <BlogCard />
       <BlogCard />
       <BlogCard />
      </div>
    </div>
  );
};

export default BlogSection;
