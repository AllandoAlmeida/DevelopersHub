import { z } from "zod";

export const createAccountSchema = z
  .object({
    name: z
    .string()
    .nonempty("Informar seu nome."),
    email: z
      .string()
      .nonempty("O e-mail é obrigatório.")
      .email("Digite um email válido."),
    password: z
      .string()
      .nonempty("A senha é obrigatório")
      .min("A senha precisa conter pelo menos 6 caracteres.")
      .regex(/(?=.*?[A-Z])/, "É necessario pelo menos uma letra maiúscula.")
      .regex(/(?=.*?[a-z])/, "É necessario pelo menos uma letra minúscula.")
      .regex(/(?=.*?[0-9])/, "É necessario pelo menos um número")
      .regex(/(?=.*?[#?!@$%^&*-])/, "É necessario pelo um caractere especial."),

    confirm: z.string().nonempty("É obrigatório a confirmação da senha."),
    bio: z.string().nonempty('o Campo "Bio" é obrigatório'),
    contact: z
      .string()
      .nonempty("informe alguma rede social ou telefone de contato"),
    course_module: z.string().nonempty("É obrigatório informar um dos módulos"),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "As senhas nao correspondem",
    path: ["confirm"],
  });
