import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ApplicationForm from "./ApplicationForm"
 


const ApplicationFormDialog = () => {
    return(
        <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full mt-10">Apply For Adoption</Button>
      </DialogTrigger>
      <DialogContent className="w-[900px]">
        <ApplicationForm />
      </DialogContent>
    </Dialog>
    )
}


export default ApplicationFormDialog;