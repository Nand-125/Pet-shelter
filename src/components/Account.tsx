import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import HistoryCard from "./HistoryCard";

const Account = () => {
  return (
    <section className="flex flex gap-12 sm:gap-32 xl:flex-row xl:gap-8 mt-20">
      <div className="px-4 flex-1">
        <h1 className="font-extrabold text-black text-3xl">Your Account</h1>
        <p className="text-xl text-gray-500 my-5">Adoption Overview</p>

        <hr className="border-t border-gray-300 my-2" />
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="Adoption History">Adoption History</TabsTrigger>
            <TabsTrigger value="Application Status">
              Application Status
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Adoption History">
            <div className="flex mt-20 space-x-10 space-y-10 flex-wrap">
              <HistoryCard type="history" />
              <HistoryCard type="history" />
              <HistoryCard type="history" />
              <HistoryCard type="history" />
              <HistoryCard type="history" />
              <HistoryCard type="history" />
              <HistoryCard type="history" />
              <HistoryCard type="history" />
              <HistoryCard type="history" />
            </div>
          </TabsContent>
          <TabsContent value="Application Status">
            <div className="flex mt-20 space-x-10 space-y-10 flex-wrap">
              <HistoryCard type="status" />
              <HistoryCard type="status" />
              <HistoryCard type="status" />
              <HistoryCard type="status" />
              <HistoryCard type="status" />
              <HistoryCard type="status" />
              <HistoryCard type="status" />
              <HistoryCard type="status" />
              <HistoryCard type="status" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Account;
