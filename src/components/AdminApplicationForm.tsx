// app/components/adoption-form.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const formSchema = z.object({
  dob: z.date({
    required_error: "Date of birth is required",
  }),
  residenceType: z.enum(["apartment", "house", "condo", "other"], {
    required_error: "Please select a residence type",
  }),
  hasOtherPets: z.enum(["yes", "no"], {
    required_error: "Please select an option",
  }),
  adoptionReason: z.string().min(10, {
    message: "Reason must be at least 10 characters",
  }),
  previouslyAdopted: z.enum(["yes", "no"], {
    required_error: "Please select an option",
  }),
  primaryCaregiver: z.string().min(1, {
    message: "Primary caregiver is required",
  }),
  emergencyContact: z.string().min(10, {
    message: "Please enter a valid phone number",
  }),
  age: z.string().min(1, {
    message: "Age is required",
  }),
  income: z.string().min(1, {
    message: "Income information is required",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

const AdminApplicationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      adoptionReason: "",
      primaryCaregiver: "",
      emergencyContact: "",
      age: "",
      income: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Application Submitted Successfully");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="your@email.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Date of Birth */}

        <div className="flex space-x-2">
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of Birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Residence Type */}
          <FormField
            control={form.control}
            name="residenceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type of Residence</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your residence type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Other Pets */}

        <div className="flex items-center space-x-2">
        <FormField
          control={form.control}
          name="hasOtherPets"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Do you have other pets at home?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col"
                >
                  <FormItem className="flex items-center space-x-3">
                    <FormControl>
                      <RadioGroupItem value="yes" />
                    </FormControl>
                    <FormLabel className="font-normal">Yes</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3">
                    <FormControl>
                      <RadioGroupItem value="no" />
                    </FormControl>
                    <FormLabel className="font-normal">No</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="previouslyAdopted"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Have you previously adopted a pet?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="yes" />
                    </FormControl>
                    <FormLabel className="font-normal">Yes</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="no" />
                    </FormControl>
                    <FormLabel className="font-normal">No</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>

        {/* Adoption Reason */}
        <FormField
          control={form.control}
          name="adoptionReason"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reason for Adoption</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us why you want to adopt..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Previously Adopted */}

        {/* Primary Caregiver */}
        <div className="flex items-center space-x-2">
        <FormField
          control={form.control}
          name="primaryCaregiver"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Who will be the primary caregiver?</FormLabel>
              <FormControl>
                <Input placeholder="Name of primary caregiver" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Emergency Contact */}
        <FormField
          control={form.control}
          name="emergencyContact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Emergency Contact Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="123-456-7890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        </div>

        {/* Age */}
        <div className="flex space-x-2">
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Age</FormLabel>
              <FormControl>
                <Input placeholder="Enter your age" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Income */}
        <FormField
          control={form.control}
          name="income"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Annual Income</FormLabel>
              <FormControl>
                <Input placeholder="Enter your annual income" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        </div>

        <Button className="w-full" type="submit">
          Submit Application
        </Button>
      </form>
    </Form>
  );
};

export default AdminApplicationForm;