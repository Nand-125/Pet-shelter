"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ApplicationForm from "./ApplicationForm";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ApplicationFormDialogProps {
  petId: number;
}

const ApplicationFormDialog = ({ petId }: ApplicationFormDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full mt-10">Edit Pet Details</Button>
       
      </DialogTrigger>
      <DialogContent className="w-[900px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            <VisuallyHidden>Adoption Application</VisuallyHidden>
          </DialogTitle>
        </DialogHeader>
        <ApplicationForm petId={petId} />
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationFormDialog;