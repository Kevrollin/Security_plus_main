
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Mail } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  consent: z.boolean().refine(val => val === true, {
    message: "You must agree to receive newsletter emails",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function NewsletterSubscription() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: user?.email || "",
      consent: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    try {
      const { error } = await supabase.from("newsletter_subscribers").insert({
        email: data.email,
        consent_given: data.consent,
        user_id: user?.id,
      });

      if (error) {
        // If error code is for duplicate entry, show friendly message
        if (error.code === '23505') {
          toast({
            title: "Already subscribed",
            description: "This email is already subscribed to our newsletter.",
          });
          return;
        }
        throw error;
      }

      toast({
        title: "Thank you for subscribing!",
        description: "You'll now receive the latest cybersecurity insights and tips directly to your inbox.",
      });

      // Reset form
      form.reset({
        email: "",
        consent: false,
      });
    } catch (error: any) {
      toast({
        title: "Subscription failed",
        description: error.message || "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full p-6 rounded-xl bg-card border border-border">
      <div className="flex items-center gap-3 mb-4">
        <Mail className="h-5 w-5 text-primary" />
        <h3 className="text-xl font-bold">Stay Protected</h3>
      </div>
      
      <p className="text-muted-foreground mb-6">
        Subscribe to receive the latest cybersecurity tips, threat alerts, and exclusive content directly to your inbox.
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormDescription>
                    I agree to receive email updates about cybersecurity insights, tips, and exclusive content. 
                    We respect your privacy and will never share your information with third parties.
                  </FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Subscribing..." : "Subscribe to Newsletter"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
