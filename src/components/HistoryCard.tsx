import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import { DialogHeader, DialogFooter } from "./ui/dialog";
import { Input } from "./ui/input";

interface IHistoryCardProps {
    type: string;
    data: PetAdoptionApplicationStatus;
}

const HistoryCard = ({ type, data }: IHistoryCardProps) => {
    return (
        <Card className="flex w-[350px] flex-col items-start transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 mb-5">
            <div className="px-4 w-full">
                <h1 className="font-extrabold text-black text-xl">{data.petName}</h1>
                <p className={`text-lg ${data.status === "Approved" ? "text-green-500" : "text-red-500"} my-5`}>
                    {data.status}
                </p>
                {
                    type === "status" && (
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button>Meetup Details</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Meetup Details</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="name" className="text-right">Date:</Label>
                                        <p>{data.meetupDate || "TBD"}</p>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="username" className="text-right">Time:</Label>
                                        <p>{data.meetupStatus === "Scheduled" ? "8:30 AM" : "TBD"}</p>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="username" className="text-right">Location:</Label>
                                        <p>{data.meetupLocation || "Shelter"}</p>
                                    </div>
                                </div>
                                <DialogFooter className="ml-0">
                                    <Button type="submit">Withdraw</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    )
                }

                <hr className="border-t border-gray-300 my-2" />

                <div className="flex flex-col space-y-4 text-sm text-gray-700">
                    <div className="flex items-center space-x-1">
                        <p>
                            Meetup Status:
                            <span className="text-blue-500"> {data.meetupStatus}</span>
                        </p>
                    </div>
                    <div className="flex items-center space-x-1">
                        <p>
                            Meetup Date:
                            <span className="text-black-500"> {data.meetupDate}</span>
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default HistoryCard;
