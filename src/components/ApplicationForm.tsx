"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
    email: z.string().email({ message: "Valid email required" }),
    dob: z.date({
      required_error: "Date of birth is required",
      invalid_type_error: "Invalid date format"
    }),
    residenceType: z.enum(["apartment", "house", "condo", "other"], {
      required_error: "Please select a residence type",
    }),
    hasOtherPets: z.enum(["yes", "no"], {
      required_error: "Please select an option",
    }),
    adoptionReason: z.string()
      .min(10, "Reason must be at least 10 characters")
      .max(500, "Reason cannot exceed 500 characters"),
    previouslyAdopted: z.enum(["yes", "no"], {
      required_error: "Please select an option",
    }),
    primaryCaregiver: z.string()
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name cannot exceed 100 characters"),
    emergencyContact: z.string()
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number cannot exceed 15 digits")
      .regex(/^[0-9+\-() ]+$/, "Invalid phone number format"),
    age: z.string()
      .min(1, "Age is required")
      .regex(/^[0-9]+$/, "Age must be a number")
      .refine(val => parseInt(val) >= 18, "You must be at least 18 years old"),
    income: z.string()
      .min(1, "Income information is required")
      .regex(/^[0-9.,]+$/, "Invalid income format")
  });
  
  interface ApplicationFormProps {
    petId: number;
  }
  
  export function ApplicationForm({ petId }: ApplicationFormProps) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);
  
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        adoptionReason: "",
        primaryCaregiver: "",
        emergencyContact: "",
        age: "",
        income: ""
      }
    });
  
    async function onSubmit(values: z.infer<typeof formSchema>) {
      setServerError(null);
      setIsSubmitting(true);
      
      try {
        console.log('[FRONTEND] Form values:', values);
        
        const response = await fetch("/api/application", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...values,
            petId,
            dob: values.dob.toISOString(),
          }),
        });
      
        const data = await response.json();
        console.log('[FRONTEND] API response:', data);
      
        if (!response.ok) {
          if (response.status === 404) {
            toast.error("Registration required", {
              description: "Please complete your registration first",
              action: {
                label: "Register",
                onClick: () => router.push(`/register?email=${encodeURIComponent(values.email)}`)
              }
            });
            return;
          }
          throw new Error(data.error || "Application submission failed");
        }
      
        toast.success("Application submitted!", {
          description: "Your application has been received"
        });
      
        form.reset();
        
      } catch (error: any) {
        console.error('[FRONTEND] Submission error:', error);
        setServerError(error.message);
        toast.error("Submission failed", {
          description: error.message || "Please try again later"
        });
      } finally {
        setIsSubmitting(false);
      }
}
  
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {serverError && (
            <div className="p-4 mb-4 bg-red-100 border border-red-200 rounded-md">
              <p className="text-red-700 font-medium">Submission Error</p>
              <p className="text-red-600 text-sm">{serverError}</p>
            </div>
          )}

        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="your@email.com"
                  type="email"
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Date of Birth */}
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
                      variant="outline"
                      className={cn(
                        "pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                      disabled={isSubmitting}
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
              <FormLabel>Residence Type</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                disabled={isSubmitting}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select residence type" />
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

        {/* Pet Questions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="hasOtherPets"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Current Pets?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex gap-4"
                    disabled={isSubmitting}
                  >
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel>Yes</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel>No</FormLabel>
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
                <FormLabel>Previous Adoptions?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex gap-4"
                    disabled={isSubmitting}
                  >
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel>Yes</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel>No</FormLabel>
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
              <FormLabel>Adoption Motivation</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Why do you want to adopt this pet?"
                  className="min-h-[120px]"
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Caregiver and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="primaryCaregiver"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Primary Caregiver</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Full name"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="emergencyContact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Emergency Contact</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Phone number"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Age and Income */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Age</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter age"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="income"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Annual Income ($)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter amount"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            'Submit Application'
          )}
        </Button>
      </form>
    </Form>
  );
}
export default ApplicationForm;