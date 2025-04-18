import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import HistoryCard from "./HistoryCard";
import { useEffect, useState } from "react";

const Account = () => {
  const [status, setStatus] = useState<PetAdoptionApplicationStatus[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('/api/application-status');
        const data = await response.json();
        setStatus(data);
      } catch (error) {
        console.error('Error fetching Status', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStatus();
  }, []);

  if (loading) return <div>Loading History ...</div>;

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
              {
                status?.map(item => (
                  <HistoryCard key={item.applicationId} type="history" data={item} />
                ))
              }
            </div>
          </TabsContent>
          <TabsContent value="Application Status">
            <div className="flex mt-20 space-x-10 space-y-10 flex-wrap">
              {
                status?.map(item => (
                  <HistoryCard key={item.applicationId} type="status" data={item} />
                ))
              }
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Account;
