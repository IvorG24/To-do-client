import React from "react";
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
import { login } from "@/services/users/register";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
type Formvalue = {
  email: string;
  password: string;
};

const formSchema = z.object({
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
});
const LoginForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: Formvalue) => {
    setIsLoading(true);
    login(
      {
        email: values.email,
        password: values.password,
      },
      () => {
        setIsLoading(false);
        router.push("/dashboard");
      },
      (error) => {
        setIsLoading(false);
        toast({
          title: "Uh oh! Something went wrong.",
          description: error,
          variant: "destructive",
        });
      }
    );
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-xl w-full"
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
          {isLoading ? (
            <Button className="w-full" disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button className="w-full" type="submit">
              <Mail className="mr-2 h-4 w-4" /> Login with Email
            </Button>
          )}
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
