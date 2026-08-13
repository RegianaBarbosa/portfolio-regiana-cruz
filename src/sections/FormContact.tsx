import React, { useState } from "react";
import {
  Instagram,
  Linkedin,
  Github,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

interface FormContactProps {
  id: string;
}

export const FormContact: React.FC<FormContactProps> = ({ id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Conecta com a sua API Node.js/Express
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

      const response = await fetch(`${apiUrl}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        throw new Error(
          data.error || "Erro ao enviar mensagem. Tente novamente.",
        );
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(
        err.message || "Ocorreu um erro ao enviar. Tente novamente mais tarde.",
      );
    }
  };

  return (
    <section
      id={id}
      className="w-full bg-brand-roxo text-neutral-white py-8 md:pt-28 px-6 md:px-16 lg:px-32"
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-center mx-auto">
        {/* LADO ESQUERDO: TEXTO E REDES SOCIAIS */}
        <div className="max-w-2xl lg:col-span-5 flex flex-col space-y-6">
          {/* Tag Badge com Seta Turquesa */}
          <div className="flex items-center gap-2 text-brand-turquesa text-body-md font-semibold">
            <span className="text-xl leading-none">→</span>
            <span>Entre em contato</span>
          </div>

          {/* Título com Inovação em Turquesa */}
          <h2 className="text-h2 md:text-h1 font-bold leading-tight tracking-tight">
            Vamos criar a próxima{" "}
            <span className="text-brand-turquesa">inovação</span> juntos?
          </h2>

          {/* Subtítulo / Descrição */}
          <p className="text-body-lg text-neutral-white/80 leading-relaxed pt-2">
            Transformo desafios de negócio em experiências digitais centradas no
            usuário e orientadas a resultado. Do <span className="italic">discovery</span> à implementação.
          </p>

          {/* Ícones de Redes Sociais */}
          <div className="flex items-center gap-4 pt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-neutral-white flex items-center justify-center text-neutral-white hover:border-brand-turquesa hover:text-brand-turquesa hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com/in/regianacruz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-neutral-white flex items-center justify-center text-neutral-white hover:border-brand-turquesa hover:text-brand-turquesa hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/RegianaBarbosa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-neutral-white flex items-center justify-center text-neutral-white hover:border-brand-turquesa hover:text-brand-turquesa hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* LADO DIREITO: FORMULÁRIO */}
        <div className="max-w-2xl lg:col-span-7 w-full">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            {/* LINHA DE INPUTS: NOME E E-MAIL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Seu Nome */}
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="name"
                  className="text-body-sm text-neutral-white"
                >
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ana Lima"
                  className="w-full bg-[#3f109c]/60 border border-white/10 rounded-xl px-4 py-3.5 text-neutral-white placeholder:text-neutral-white/40 hover:bg-neutral-white-opacity-10 focus:outline-none focus:border-brand-violeta focus:ring-1 focus:ring-brand-violeta transition-all"
                />
              </div>

              {/* E-mail */}
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="email"
                  className="text-body-sm text-neutral-white"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@mail.com"
                  className="w-full bg-[#3f109c]/60 border border-white/10 rounded-xl px-4 py-3.5 text-neutral-white placeholder:text-neutral-white/40 hover:bg-neutral-white-opacity-10 focus:outline-none focus:border-brand-violeta focus:ring-1 focus:ring-brand-violeta transition-all"
                />
              </div>
            </div>

            {/* Mensagem */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="message"
                className="text-body-sm text-neutral-white"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Fale sobre seu projeto, objetivo, cronograma e estilo..."
                className="w-full bg-[#3f109c]/60 border border-white/10 rounded-xl p-4 text-neutral-white placeholder:text-neutral-white/40 hover:bg-neutral-white-opacity-10 focus:outline-none focus:border-brand-violeta focus:ring-1 focus:ring-brand-violeta transition-all resize-none"
              />
            </div>

            {/* FEEDBACKS DE ENVIO */}
            {status === "success" && (
              <div className="flex items-center gap-3 bg-feedback-success/20 border border-feedback-success text-neutral-white p-4 rounded-xl text-body-sm">
                <CheckCircle2 className="w-5 h-5 text-feedback-success shrink-0" />
                <span>
                  Mensagem enviada com sucesso! Uma confirmação foi enviada para
                  o seu e-mail.
                </span>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-3 bg-feedback-error/20 border border-feedback-error text-neutral-white p-4 rounded-xl text-body-sm">
                <AlertCircle className="w-5 h-5 text-feedback-error shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Botão Enviar Mensagem */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-brand-turquesa hover:bg-brand-turquesa-medio text-brand-roxo font-bold py-4 px-8 rounded-button flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-brand-turquesa/20 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 cursor-pointer text-body-md"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <span>Enviar mensagem</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
            <div className="w-full flex justify-center italic text-body-sm"><p>Respondo em até 24 horas</p></div>
          </form>
        </div>
      </div>
      {/* Direitos Autorais */}
      <div className="text-center text-neutral-white-opacity-25 text-body-md pt-24">
        Regiana Cruz © 2025 Todos os direitos reservados.
      </div>
    </section>
  );
};
