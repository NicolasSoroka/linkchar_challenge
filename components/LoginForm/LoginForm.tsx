"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Eye, EyeOff } from "lucide-react";

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
import { useState } from "react";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

export function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 text-white"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white text-xs">Email</FormLabel>
              <FormControl className="w-80 h-10 px-4 py-3 bg-[#202020] border-none rounded-md">
                <Input className="text-[#CACACA] text-xs" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white text-xs">Contraseña</FormLabel>
              <FormControl className="w-80 h-10 px-4 py-3 bg-[#202020] border-none rounded-md">
                <div className="flex items-center justify-between">
                  <Input
                    type={isPasswordShown ? "text" : "password"}
                    className="text-[#CACACA] text-xs bg-[#202020] border-none focus-visible:border-none p-0"
                    {...field}
                  />
                  <i
                    onClick={togglePasswordVisiblity}
                    className="cursor-pointer scale-75"
                  >
                    {isPasswordShown ? <Eye /> : <EyeOff />}
                  </i>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="linkchar"
          className="w-80 !mt-8 text-sm text-white font-normal"
        >
          Iniciar Sesion
        </Button>
      </form>
    </Form>
  );
}
