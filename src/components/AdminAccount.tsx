import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import HistoryCard from "./HistoryCard";

const AdminAccount = () => {
  return (
    <section className="flex flex gap-12 sm:gap-32 xl:flex-row xl:gap-8 mt-20">
      <div className="px-4 flex-1">
        <h1 className="font-extrabold text-black text-3xl">Your Account</h1>
        <p className="text-xl text-gray-500 my-5">Adoption Overview</p>

        <hr className="border-t border-gray-300 my-2" />
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="Adoption History">Application History</TabsTrigger>
            <TabsTrigger value="Application Requests">
              Application Requests
            </TabsTrigger>
            <TabsTrigger value="Add new pet">
              Add new pet
            </TabsTrigger>
            <TabsTrigger value="Create blog">
             Create Blog
            </TabsTrigger>

          </TabsList>
          <TabsContent value="Application History">
            <div className="flex mt-20 space-x-10 space-y-10 flex-wrap">
              <HistoryCard type="history" />
             
            </div>
          </TabsContent>
          <TabsContent value="Application requests">
            <div className="flex mt-20 space-x-10 space-y-10 flex-wrap">
              <HistoryCard type="requests"/>
              
            </div>
          </TabsContent>
          <TabsContent value="Add new pet">
            <div className="flex mt-20 space-x-10 space-y-10 flex-wrap">
              <HistoryCard type="pet" />
             
            </div>
          </TabsContent>
          <TabsContent value="Create blog ">
            <div className="flex mt-20 space-x-10 space-y-10 flex-wrap">
              <HistoryCard type="blog" />
              
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AdminAccount;
