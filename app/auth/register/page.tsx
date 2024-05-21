"use client";
import { useState } from "react";
import { Mail } from "lucide-react";
import { Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { RegisterUser } from "@/services/users/register";
type Formvalue = {
  email: string;
  password: string;
};

const formSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(20, { message: "Password cannot exceed 20 characters" })
      .regex(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'?/>.<,])(?=.*[^\s]).{8,20}$/,
        {
          message:
            "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character",
        }
      ),
    confirmpassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(20, { message: "Password cannot exceed 20 characters" }),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords don't match",
    path: ["confirmpassword"],
  });
function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: Formvalue) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    await RegisterUser(
      data,
      () => {
        toast({
          title: "Account Created !",
          description: "Please see your email to verify your account !",
          variant: "default",
        });
        setIsLoading(false);
      },
      (error) => {
        toast({
          title: "Email Already Exist!",
          description: "Email already in use try again !",
          variant: "destructive",
        });
        setIsLoading(false);
      }
    );
  };
  return (
    <section className="min-h-screen h-full flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8  max-w-md  lg:w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="max-w-xl"
                    placeholder="Email Address"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Enter your current email address
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="password" {...field} />
                </FormControl>
                <FormDescription>Enter your Password</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmpassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm your password</FormLabel>
                <FormControl>
                  <Input placeholder="password" {...field} />
                </FormControl>
                <FormDescription>Confirm Password</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {isLoading ? (
            <Button className="" disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button type="submit">Register</Button>
          )}
        </form>
      </Form>
    </section>
  );
}

export default Register;
