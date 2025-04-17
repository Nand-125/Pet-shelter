"use client";

import React from "react";
// import PetCover from "@/components/PetCover";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Dialog,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  faPaw,
  faArrowRight,
  faBirthdayCake,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import PetDetails from "./PetDetails";
import PetHealthRecords from "./PetHealthRecords";
import { Button } from "./ui/button";
import ApplicationFormDialog from "./ApplicationFormDialog";

interface Props extends Pet {
  userId: string;
}
const BlogComponent = () => {
  return (
  
    <section className="flex flex gap-12 sm:gap-32 xl:flex-row xl:gap-8 mt-20">
      <div className="px-4 flex-1">
        <h1 className="font-extrabold text-black text-3xl mb-10 text-orange-500">Blogs & Articles</h1>
        <h1 className="font-extrabold text-black text-xl">🐾 The Ultimate Guide to Pet Grooming: Keep Your Furry Friend Looking and Feeling Their Best</h1>
        <p className="text-sm text-gray-500 mt-[-2px]">Admin</p>
        
        <hr className="border-t border-gray-300 my-2" />
        <div className="w-[100px], text-justify whitespace-pre-line text-gray-800 leading-relaxed tracking-wide">
            <p>Pets are more than just animals — they’re part of the family. And just like any family member, they deserve love, attention, and care. One key part of pet wellness that often gets overlooked is grooming. Whether you're a proud pet parent to a shaggy sheepdog or a sleek Siamese, grooming isn't just about keeping your pet looking good — it’s essential for their overall health and happiness.

Why Pet Grooming Matters
Proper grooming goes beyond brushing fur and trimming nails. It helps prevent health issues such as:

Skin infections

Matting and tangles

Fleas and ticks

Overgrown nails causing joint pain

Dental disease

Regular grooming also provides a chance to check for lumps, injuries, or skin issues you might not otherwise notice.

Grooming Basics for Every Pet Parent
Here’s a breakdown of essential grooming tasks for your furry companion:

1. Brushing
Regular brushing helps remove dead hair, dirt, and dandruff. It also distributes natural oils, making your pet’s coat shiny and healthy.

Dogs: Long-haired breeds may need daily brushing, while short-haired dogs can go a few days.

Cats: Even though cats groom themselves, regular brushing reduces hairballs and shedding.

2. Bathing
Bathing keeps your pet clean and smelling fresh — but don't overdo it!

Dogs: Every 4–6 weeks is usually enough, depending on their lifestyle.

Cats: Only bathe if they’re especially dirty or if recommended by a vet.

Always use pet-safe shampoo — human products can irritate their skin.

3. Nail Trimming
Overgrown nails can lead to discomfort and even posture issues. Trim nails every 3–4 weeks or as needed. If you're nervous about it, ask a groomer or vet for help.

4. Ear Cleaning
Dirty ears can lead to infections. Use a vet-approved ear cleaner and cotton balls (never Q-tips) to gently clean once a month or as needed.

5. Teeth Brushing
Dental care is often neglected but incredibly important. Brush your pet’s teeth 2–3 times a week using pet toothpaste.

6. Haircuts (for long-haired pets)
Certain breeds like poodles, shih tzus, and persian cats need regular haircuts. Depending on the breed, aim for a trim every 6–8 weeks.

DIY Grooming vs. Professional Groomers
While some pet parents prefer to groom at home, professional groomers offer services like:

Breed-specific haircuts

Anal gland expression

De-shedding treatments

Specialty shampoos for sensitive skin

Professional grooming is especially helpful for anxious pets or breeds with complex grooming needs.

Tips for Stress-Free Grooming
Start young to get your pet used to the process.

Reward them with treats and praise.

Take breaks if your pet becomes too anxious.

Use the right tools — invest in quality brushes, clippers, and pet-safe products.

Conclusion: A Happy Pet is a Groomed Pet 🐶🐱
Pet grooming is about more than good looks — it’s a commitment to your pet’s well-being. With regular care, you’ll not only have a clean and cuddly companion but also help your pet live a longer, healthier life.

So go ahead, grab that brush, turn on some calming music, and give your pet a spa day they’ll wag or purr about!

</p>
        </div>

       

      </div>

      <Image
        src="https://images.pexels.com/photos/6131007/pexels-photo-6131007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Blog Page"
        width={350}
        height={200}
        className="flex-1"
      />

    </section>
  );
};

export default BlogComponent;
