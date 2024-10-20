"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircle } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  resume: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Currículo é obrigatório")
    .transform((files) => files[0])
    .refine(
      (file) =>
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type),
      "Arquivo deve ser PDF, DOC ou DOCX"
    ),
});

type FormValues = z.infer<typeof formSchema>;

export default function WorkContact() {
  const [submitError, setSubmitError] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setSubmitError("");
    // Here you would typically send the form data to your server
    console.log("Form submitted:", data);
    // Reset form after submission
    form.reset();
    alert("Obrigado pela sua candidatura!");
  };

  return (
    <div>
      <div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <Image
              src="/contact.jpg"
              alt="logotipo essencial enfermagem"
              width={1000}
              height={1000}
              className="w-full h-full object-cover aspect-square "
            />
          </div>

          <div className="flex-1 flex flex-col justify-between aspect-square p-12">
            <div className="flex flex-col gap-4">
              <span className="title-section">Trabalhe Conosco</span>
              <h2>Junte-se à nossa equipe!</h2>
              <p>
                 Envie seu currículo agora e faça parte
                da nossa história de sucesso.
              </p>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="seu.email@exemplo.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="resume"
                  render={({ field: { onChange, value, ...field } }) => (
                    <FormItem>
                      <FormLabel>Currículo</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          onChange={(e) => onChange(e.target.files)}
                          accept=".pdf,.doc,.docx"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {submitError && (
                  <div className="flex items-center space-x-2 text-yellow-300">
                    <AlertCircle size={16} />
                    <span className="text-sm">{submitError}</span>
                  </div>
                )}
                <Button
                  type="submit"
                  className="w-full bg-blue-500  hover:bg-blue-100"
                >
                  Enviar Candidatura
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
