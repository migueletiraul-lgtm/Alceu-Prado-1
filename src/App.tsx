import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  Trophy,
  Target,
  Dumbbell,
  CheckCircle2,
  ChevronRight,
  Activity,
  X,
  MapPin,
  Camera,
  Video,
  Mail,
  Zap,
  Star,
  Check,
} from "lucide-react";

// Apple's custom spring-like ease for hyper-smooth interactions
const appleEase = [0.16, 1, 0.3, 1];

// Gradual scroll reveal component (Entrada gradual controlada por rolagem)
const ScrollReveal = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.5 1"],
  });

  // Maps scroll progress to opacity and y-offset for a buttery smooth reveal
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <motion.div ref={ref} style={{ opacity, y, scale }} className={className}>
      {children}
    </motion.div>
  );
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.4,
      ease: appleEase,
    },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.4,
      ease: appleEase,
    },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.4,
      ease: appleEase,
    },
  },
};

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { scrollY } = useScroll();

  // Parallax effects for Hero section
  const heroY = useTransform(scrollY, [0, 800], [0, 250]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const imageScale = useTransform(scrollY, [0, 800], [1, 1.1]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F7] font-sans selection:bg-[#CF5C1F]/30 selection:text-[#CF5C1F] overflow-x-hidden">
      {/* Navbar Premium & Minimalista */}
      <nav className="absolute top-0 w-full z-50 px-8 md:px-12 lg:px-24 py-8 md:py-10 flex justify-center items-center mix-blend-difference pointer-events-none">
        <div className="font-serif text-xl md:text-2xl tracking-[0.25em] uppercase font-light text-white">
          Alceu <span className="font-bold text-[#CF5C1F]">Prado</span>
        </div>
      </nav>

      {/* DIV 1: O GANCHO & A PROMESSA (HERO) */}
      <main className="relative w-full min-h-[90vh] md:min-h-screen flex flex-col md:flex-row border-b border-white/5 bg-[#0A0A0A] overflow-hidden">
        {/* Coluna Esquerda: Copywriting (55%) */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="w-full md:w-[55%] flex flex-col justify-center pt-32 md:pt-0 pb-16 md:pb-0 px-8 md:pl-12 lg:pl-24 md:pr-8 relative z-20"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="max-w-2xl mt-8 md:mt-0"
          >
            <motion.h1
              variants={fadeInUp}
              className="font-serif font-medium leading-[1] text-[3rem] md:text-[3.8rem] lg:text-[4.5rem] xl:text-[5rem] tracking-tighter mb-6"
            >
              <span className="block text-white">Consultoria</span>
              <span className="block text-white">Online de Alta</span>
              <span className="block text-[#CF5C1F] italic pr-4">
                Performance
              </span>
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="space-y-6 max-w-xl mb-12"
            >
              <p className="text-xl md:text-2xl lg:text-[1.7rem] font-serif text-[#F5F5F7] leading-[1.4] font-light tracking-tight">
                Você treina, se alimenta, mas o espelho não reflete o seu
                esforço. <br className="hidden md:block" />
                <span className="text-[#CF5C1F] italic font-medium">
                  A mediocridade é o preço de métodos copiados e colados.
                </span>
              </p>
              <div className="border-l-2 border-[#CF5C1F]/40 pl-5 ml-1">
                <p className="text-[14px] md:text-[15px] text-[#A1A1A6] font-sans font-light leading-[1.7]">
                  Com mais de{" "}
                  <strong className="text-[#F5F5F7] font-medium">
                    10 anos de experiência
                  </strong>
                  , minha consultoria online entrega acompanhamento individual e personalizado para alunos no Brasil e EUA, quebrando barreiras geográficas para transformar seu físico.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <a
                href="https://api.whatsapp.com/send?phone=5516996241874&text=Ol%C3%A1%20Alceu%20!%20%0AComo%20funciona%20a%20consultoria%20%3F%20"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full sm:w-auto bg-[#CF5C1F] hover:bg-[#E66622] rounded-full text-white px-10 py-5 text-[11px] tracking-[0.25em] uppercase font-bold transition-all duration-500 flex items-center justify-center gap-4 group shadow-[0_0_20px_rgba(207,92,31,0.2)] hover:shadow-[0_0_30px_rgba(207,92,31,0.4)] hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-4">
                  Quero Minha Consultoria
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
                </span>
                {/* Efeito de brilho ao passar o mouse */}
                <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out z-0"></div>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Coluna Direita: Imagem do Cliente (45%) */}
        <div className="w-full md:w-[45%] relative z-10 flex items-end justify-center pt-10 md:pt-20 md:h-screen min-h-[50vh]">
          {/* Subtle background glow / blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent z-10 hidden md:block pointer-events-none"></div>

          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://i.imgur.com/LaXJd6m.png"
            alt="Alceu Prado"
            className="relative z-20 w-full max-w-[500px] md:max-w-[700px] h-full object-contain object-bottom grayscale-[15%] contrast-[1.1] brightness-[0.95]"
            style={{
              scale: imageScale,
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 90% at 50% 50%, black 50%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 80% 90% at 50% 50%, black 50%, transparent 100%)",
            }}
          />

          {/* Overlay Gradient at the bottom to blend image seamlessly */}
          <div className="absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-30 pointer-events-none"></div>

          {/* Badge Flutuante (Card Chamativo) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: appleEase }}
            className="absolute bottom-8 lg:bottom-16 right-4 md:right-12 bg-[#080808]/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl z-40 flex items-center gap-4 max-w-[240px] cursor-pointer group hover:border-[#CF5C1F]/30 hover:-translate-y-1 transition-all duration-500"
          >
            <div className="bg-[#111111] border border-white/5 p-3 rounded-full flex-shrink-0 group-hover:border-[#CF5C1F]/30 transition-colors duration-500">
              <Trophy className="w-5 h-5 text-[#CF5C1F]" />
            </div>
            <div>
              <h4 className="text-[#F5F5F7] font-serif font-medium text-[14px] leading-none mb-1.5">
                Alceu Prado
              </h4>
              <p className="text-[8px] uppercase tracking-[0.2em] text-[#CF5C1F] font-bold">
                Atleta Profissional
              </p>
              <p className="text-[10px] text-[#86868B] mt-1.5 leading-snug">
                Atleta IFBB / Especialista em Reabilitação
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      {/* DIV 2: QUEM É ELE? (Autoridade & Storytelling) */}
      <section className="relative w-full py-24 md:py-32 px-8 lg:px-24 bg-[#050505] border-b border-white/5 flex justify-center">
        <div className="max-w-5xl w-full flex flex-col items-center gap-16 lg:gap-20">
          {/* Header e Texto */}
          <ScrollReveal className="flex flex-col items-center text-center w-full">
            <div className="w-full flex flex-col items-center">
              <h2 className="text-[11px] md:text-[13px] tracking-[0.4em] uppercase text-[#CF5C1F] font-bold mb-5">
                A Pele no Jogo
              </h2>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5F5F7] mb-8 font-light">
                Quem é{" "}
                <span className="italic font-medium text-white">
                  Alceu Prado?
                </span>
              </h3>

              <div className="space-y-8 max-w-3xl flex flex-col items-center text-center">
                <p className="text-xl md:text-2xl font-serif text-[#86868B] leading-[1.6] md:leading-[1.7] font-light">
                  <span className="text-white italic font-medium">
                    Não sou um teórico de redes sociais.
                  </span>{" "}
                  Sou um atleta IFBB que pisa nos palcos, com mais de 10 anos de experiência, e vive a disciplina que exige dos alunos.
                </p>
                <div className="text-[#86868B] font-sans font-light leading-[1.8] text-[15px] md:text-[16px] w-full border-t border-[#CF5C1F]/20 pt-8 mt-2 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-xs border-b border-white/5 pb-2">Background Acadêmico</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#CF5C1F] shrink-0" /> Graduado em Bacharelado e Licenciatura em Ed. Física (UNIFRAN)</li>
                      <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#CF5C1F] shrink-0" /> Pós-graduado em Reabilitação, Lesões e Doenças Musculoesqueléticas (UNESA)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-xs border-b border-white/5 pb-2">Títulos (Men's Physique)</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3"><Trophy className="w-5 h-5 text-[#CF5C1F] shrink-0" /> Top 1 Estreantes Paulista IFBB Internacional</li>
                      <li className="flex gap-3"><Trophy className="w-5 h-5 text-[#CF5C1F] shrink-0" /> 2x Top 1 Muscle Contest RP</li>
                      <li className="flex gap-3"><Trophy className="w-5 h-5 text-[#CF5C1F] shrink-0" /> Top 4 Campeão Paulista IFBB / Top 6 Brasileiro IFBB</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Grid de Imagens Embaixo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-4"
          >
            {[
              "https://i.imgur.com/7t1MSun.png",
              "https://i.imgur.com/kdFB3u8.png",
              "https://i.imgur.com/7s7mLBg.png",
            ].map((imgUrl, idx) => (
              <div
                key={idx}
                className="w-full h-[400px] lg:h-[500px] rounded-2xl bg-[#0A0A0A]/50 border border-white/5 relative overflow-hidden group cursor-pointer hover:border-[#CF5C1F]/40 hover:shadow-[0_0_30px_rgba(207,92,31,0.15)] transition-all duration-500"
                onClick={() => setSelectedImage(imgUrl)}
              >
                <img
                  src={imgUrl}
                  alt={`Atleta Alceu Prado ${idx + 1}`}
                  className="w-full h-full object-cover grayscale-[20%] contrast-[1.1] brightness-[0.9] group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-black/30 backdrop-blur-sm border border-white/10 text-white/80 px-4 py-2 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold">
                    Ver Foto
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DIV 3: QUAL O DIFERENCIAL? (A Solução / O Método) */}
      {/* UX: Reduzir a carga cognitiva. 3 pilares claros (Gestalt: Proximity & Similarity). */}
      <ScrollReveal className="relative w-full py-24 md:py-32 px-8 lg:px-24 bg-[#0A0A0A] border-b border-white/5">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-20 flex flex-col items-center">
            <h2 className="text-[11px] md:text-[13px] tracking-[0.4em] uppercase text-[#CF5C1F] font-bold mb-5">
              O Diferencial
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5F5F7] mb-8 font-light">
              Por que{" "}
              <span className="italic font-medium text-white">99% falham?</span>
            </h3>
            <div className="border-l-2 border-[#CF5C1F]/40 pl-6 pr-2 py-1">
              <p className="text-lg md:text-xl text-[#86868B] font-light max-w-2xl text-left leading-[1.8]">
                Porque seguem planilhas genéricas.{" "}
                <br className="hidden md:block" />
                <span className="text-[#CF5C1F] italic font-medium">
                  Aqui, aplicamos engenharia física.
                </span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "Treino Cirúrgico",
                desc: "Arquitetura de treino 100% desenhada para sua biomecânica e objetivo anatômico.",
              },
              {
                icon: <Activity className="w-6 h-6" />,
                title: "Nutrição Tática",
                desc: "Cálculo exato de macronutrientes. Sem dietas da moda, apenas fisiologia aplicada.",
              },
              {
                icon: <Dumbbell className="w-6 h-6" />,
                title: "Acompanhamento",
                desc: "Feedback de execução, ajustes de carga semanais e quebra de platôs programada.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative bg-[#080808] border border-white/5 rounded-2xl p-8 hover:-translate-y-1 hover:bg-[#0A0A0A] hover:border-[#CF5C1F]/20 hover:shadow-[0_10px_40px_-15px_rgba(207,92,31,0.1)] transition-all duration-500 overflow-hidden cursor-pointer flex flex-col h-full"
              >
                {/* Ícone */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#111111] border border-white/5 flex items-center justify-center text-[#CF5C1F] mb-6 group-hover:scale-105 group-hover:bg-[#151515] group-hover:border-[#CF5C1F]/20 transition-all duration-500">
                  {item.icon}
                </div>

                <h4 className="relative z-10 font-serif text-xl md:text-2xl text-[#F5F5F7] mb-3 group-hover:text-white transition-colors duration-500 tracking-wide">
                  {item.title}
                </h4>
                <p className="relative z-10 text-[#86868B] text-[14px] md:text-[15px] font-light leading-[1.7] group-hover:text-[#A1A1A6] transition-colors duration-500">
                  {item.desc}
                </p>

                {/* Linha Decorativa Inferior */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-transparent via-[#CF5C1F] to-transparent group-hover:w-[70%] transition-all duration-700 ease-out"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </ScrollReveal>

      {/* DIV 4: É CONFIÁVEL? (Prova Social & Estatísticas) */}
      {/* UX: Gatilho de Autoridade. Elementos de confiança visuais rápidos. */}
      <ScrollReveal className="relative w-full py-24 md:py-32 px-8 lg:px-24 bg-[#050505] border-b border-white/5">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-12"
        >
          <motion.div variants={fadeInLeft} className="w-full lg:w-[45%]">
            <h2 className="text-[11px] md:text-[13px] tracking-[0.4em] uppercase text-[#CF5C1F] font-bold mb-5">
              É Confiável?
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5F5F7] leading-[1.1] mb-8 font-light">
              Números que não <br />
              <span className="italic font-medium text-white">
                aceitam opiniões.
              </span>
            </h3>

            <p className="text-lg md:text-xl text-[#86868B] font-light leading-[1.7] mb-10 max-w-lg">
              Resultados forjados através de anos de prática no esporte de alta
              performance, transferidos de forma direta para sua rotina.
            </p>

            <div className="flex items-center gap-5 bg-[#080808]/80 backdrop-blur-md border border-white/5 rounded-2xl p-5 w-max group hover:border-[#CF5C1F]/30 hover:shadow-[0_10px_30px_-10px_rgba(207,92,31,0.15)] transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center text-[#CF5C1F] shadow-inner group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#86868B] font-bold mb-1">
                  Profissional Registrado
                </p>
                <p className="text-[#F5F5F7] font-mono text-sm md:text-base tracking-[0.15em] font-medium group-hover:text-white transition-colors">
                  CREF 120774-G/SP
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            className="w-full lg:w-[50%] flex flex-col gap-4 md:gap-5"
          >
            <div className="relative overflow-hidden bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-4 md:gap-6 group hover:-translate-y-1 hover:border-[#CF5C1F]/30 hover:shadow-[0_15px_40px_-15px_rgba(207,92,31,0.15)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-[#CF5C1F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full bg-gradient-to-br from-[#151515] to-[#0A0A0A] border border-white/10 flex items-center justify-center text-[#CF5C1F] shadow-lg group-hover:scale-105 group-hover:rotate-6 transition-all duration-500">
                <Dumbbell className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="relative z-10">
                <h4 className="font-serif text-3xl md:text-4xl text-[#F5F5F7] mb-1 tracking-tight group-hover:text-white transition-colors duration-500 flex items-baseline justify-center sm:justify-start gap-1">
                  10
                  <span className="text-[#CF5C1F] group-hover:text-[#F5F5F7] transition-colors duration-500">
                    +
                  </span>
                </h4>
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#86868B] font-bold">
                  Anos de Experiência
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-4 md:gap-6 group hover:-translate-y-1 hover:border-[#CF5C1F]/30 hover:shadow-[0_15px_40px_-15px_rgba(207,92,31,0.15)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-[#CF5C1F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full bg-gradient-to-br from-[#151515] to-[#0A0A0A] border border-white/10 flex items-center justify-center text-[#CF5C1F] shadow-lg group-hover:scale-105 group-hover:-rotate-6 transition-all duration-500">
                <MapPin className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="relative z-10">
                <h4 className="font-serif text-2xl md:text-3xl text-[#F5F5F7] mb-1 tracking-tight group-hover:text-white transition-colors duration-500 flex items-baseline justify-center sm:justify-start gap-1">
                  Global
                </h4>
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#86868B] font-bold">
                  Alunos no Brasil e EUA
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-4 md:gap-6 group hover:-translate-y-1 hover:border-[#CF5C1F]/30 hover:shadow-[0_15px_40px_-15px_rgba(207,92,31,0.15)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-[#CF5C1F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full bg-gradient-to-br from-[#151515] to-[#0A0A0A] border border-white/10 flex items-center justify-center text-[#CF5C1F] shadow-lg group-hover:scale-105 group-hover:rotate-12 transition-all duration-500">
                <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="relative z-10">
                <h4 className="font-serif text-2xl md:text-3xl text-[#F5F5F7] mb-1 group-hover:text-white transition-colors">
                  Centenas de Resultados
                </h4>
                <p className="text-[#86868B] text-[13px] md:text-[14px] font-light leading-[1.6]">
                  Físicos construídos através de uma metodologia testada em
                  atletas e adaptada para você.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </ScrollReveal>

      {/* DIV 4.5: RESULTADOS (Antes e Depois) */}
      <ScrollReveal className="relative w-full py-24 md:py-32 px-8 lg:px-24 bg-[#0A0A0A] border-b border-white/5">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-[11px] md:text-[13px] tracking-[0.4em] uppercase text-[#CF5C1F] font-bold mb-5">
              Transformações Reais
            </h2>
            <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#F5F5F7] leading-[1.2] font-light">
              Resultados de <span className="italic font-medium text-white">alguns alunos</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
            {[
              "https://i.imgur.com/1qAgL0X.png",
              "https://i.imgur.com/QXrSXd1.png",
              "https://i.imgur.com/J92bb2C.png",
              "https://i.imgur.com/JVDhO5G.png"
            ].map((imgUrl, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-[#111111] border border-white/10 cursor-pointer shadow-lg"
                onClick={() => setSelectedImage(imgUrl)}
              >
                <div className="absolute inset-0 w-full h-full">
                  {/* Fundo desfocado para preencher o card mantendo a estética */}
                  <img 
                    src={imgUrl} 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 group-hover:opacity-50 transition-opacity duration-700 scale-110"
                  />
                  {/* Imagem principal perfeitamente enquadrada */}
                  <img 
                    src={imgUrl} 
                    alt={`Transformação ${i + 1}`} 
                    className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Hover overlay icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white shadow-xl transform scale-90 group-hover:scale-100 transition-all duration-500">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </ScrollReveal>

      {/* DIV 5: O PRÓXIMO PASSO (Link-in-bio Style CTAs) */}
      <ScrollReveal className="relative w-full py-24 md:py-32 px-8 bg-[#050505] flex flex-col items-center border-b border-white/5 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#CF5C1F]/50 to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] max-w-2xl h-32 bg-[#CF5C1F]/10 blur-[100px] pointer-events-none"></div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl w-full relative z-10 flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-[11px] md:text-[13px] tracking-[0.4em] uppercase text-[#CF5C1F] font-bold mb-5">
              O Próximo Passo
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5F5F7] leading-[1.1] mb-6 font-light">
              Escolha seu{" "}
              <span className="italic font-medium text-white">Caminho</span>
            </h3>
            <p className="text-lg text-[#86868B] font-light max-w-xl mx-auto">
              Selecione o programa ideal para o seu nível de comprometimento. As
              vagas são limitadas para manter a qualidade do acompanhamento.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Secondary CTA - Consultoria */}
            <motion.div
              variants={fadeInUp}
              className="relative bg-[#080808]/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:border-[#CF5C1F]/40 hover:shadow-[0_20px_40px_-20px_rgba(207,92,31,0.2)] group overflow-hidden"
            >
              {/* Subtle highlight on hover */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-[#CF5C1F]/50 transition-all duration-500"></div>

              <div className="mb-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1A1A1A] to-[#050505] border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:text-[#CF5C1F] group-hover:border-[#CF5C1F]/30 transition-all duration-500 shadow-inner">
                  <Target className="w-6 h-6" />
                </div>
                <span className="block text-[11px] tracking-[0.2em] uppercase font-bold text-[#86868B] group-hover:text-[#A1A1A6] transition-colors duration-500 mb-2">
                  Plano Base
                </span>
                <h4 className="text-3xl font-serif text-[#F5F5F7] mb-3">
                  Consultoria Online
                </h4>
                <p className="text-[#86868B] text-sm font-light leading-[1.6]">
                  Acompanhamento de treino e dieta 100% individual e personalizado para maximizar seus resultados.
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {[
                  "Treino periodizado mensalmente",
                  "Protocolo de dieta adaptável",
                  "Cardio e suplementação",
                  "Contato direto no WhatsApp",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-white/5 border border-white/5 flex items-center justify-center group-hover/item:bg-[#CF5C1F]/10 group-hover/item:border-[#CF5C1F]/30 transition-colors">
                      <Check className="w-3 h-3 text-white/50 group-hover/item:text-[#CF5C1F] transition-colors" />
                    </div>
                    <span className="text-[#A1A1A6] text-sm font-light group-hover/item:text-[#F5F5F7] transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://api.whatsapp.com/send?phone=5516996241874&text=Ol%C3%A1%20Alceu%20!%20%0AComo%20funciona%20a%20consultoria%20%3F%20"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#111111] hover:bg-white text-white hover:text-black border border-white/10 hover:border-white py-5 rounded-full flex justify-center items-center gap-2 transition-all duration-300 font-medium text-[15px] tracking-wide group/btn"
              >
                Quero este plano
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Primary CTA - Mentoria */}
            <motion.div
              variants={fadeInUp}
              className="relative bg-gradient-to-b from-[#111111] to-[#080808] border border-[#CF5C1F]/30 rounded-2xl p-8 md:p-10 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:border-[#CF5C1F]/60 shadow-[0_10px_40px_-15px_rgba(207,92,31,0.2)] hover:shadow-[0_20px_50px_-15px_rgba(207,92,31,0.4)] group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#CF5C1F] to-transparent"></div>
              <div className="absolute top-0 right-0 p-6 z-20">
                <div className="bg-[#CF5C1F] text-white text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-bold px-4 py-2 rounded-full flex items-center gap-1.5 shadow-[0_5px_15px_rgba(207,92,31,0.4)] border border-[#CF5C1F]">
                  <Star className="w-3 h-3 md:w-3.5 md:h-3.5 fill-white text-white" />
                  <span className="mt-0.5">Mais Escolhido</span>
                </div>
              </div>

              <div className="mb-8 relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2A1508] to-[#0A0A0A] border border-[#CF5C1F]/40 flex items-center justify-center text-[#CF5C1F] mb-6 group-hover:scale-110 group-hover:border-[#CF5C1F] group-hover:shadow-[0_0_20px_rgba(207,92,31,0.4)] transition-all duration-500">
                  <Trophy className="w-6 h-6" />
                </div>
                <span className="block text-[12px] tracking-[0.25em] uppercase font-bold text-[#CF5C1F] mb-2 group-hover:text-[#E66622] transition-colors duration-500">
                  Elite
                </span>
                <h4 className="text-3xl md:text-4xl font-serif text-white mb-3">
                  Consultoria Elite
                </h4>
                <p className="text-[#A1A1A6] text-sm md:text-base font-light leading-[1.6] group-hover:text-[#F5F5F7] transition-colors duration-500">
                  Acompanhamento avançado com feedback constante, ajustes precisos, e contato direto via WhatsApp. Para quem
                  busca a máxima performance sem limitações geográficas.
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow relative z-10">
                {[
                  "Tudo do plano base",
                  "Contato direto no WhatsApp",
                  "Ajustes semanais na dieta",
                  "Análise de vídeos de execução",
                  "Estratégias avançadas (finalização)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#CF5C1F]/10 border border-[#CF5C1F]/30 flex items-center justify-center group-hover/item:bg-[#CF5C1F] group-hover/item:border-[#CF5C1F] group-hover/item:shadow-[0_0_10px_rgba(207,92,31,0.4)] transition-all duration-300">
                      <Check className="w-3 h-3 text-[#CF5C1F] group-hover/item:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-[#F5F5F7] text-sm font-light group-hover/item:text-white group-hover/item:translate-x-1 transition-all duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://api.whatsapp.com/send?phone=5516996241874&text=Ol%C3%A1%20Alceu%20!%20%0AComo%20funciona%20a%20consultoria%20%3F%20"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 w-full bg-[#CF5C1F] hover:bg-[#E66622] text-white py-5 rounded-full flex justify-center items-center gap-2 transition-all duration-300 font-medium text-[15px] tracking-wide shadow-[0_0_20px_rgba(207,92,31,0.3)] hover:shadow-[0_0_30px_rgba(207,92,31,0.5)] group/btn"
              >
                Garantir minha vaga
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </ScrollReveal>

      {/* FOOTER */}
      <footer className="w-full relative overflow-hidden bg-[#030303] py-24 px-8 lg:px-24 border-t border-white/5 flex justify-center">
        {/* Decorator */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#CF5C1F]/20 to-transparent"></div>
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[60%] max-w-lg h-52 bg-[#CF5C1F]/5 blur-[120px] pointer-events-none"></div>

        <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-16 relative z-10">
          {/* Left Side: Brand & Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <div>
              <h4 className="font-serif text-3xl md:text-4xl text-[#F5F5F7] tracking-wide mb-2">
                Alceu <span className="italic text-[#CF5C1F]">Prado</span>
              </h4>
              <div className="flex items-center justify-center md:justify-start gap-2 text-[#86868B] font-light text-sm">
                <MapPin className="w-4 h-4 text-[#CF5C1F]" />
                <span>Atendimento Global (Brasil e EUA)</span>
              </div>
            </div>

            <p className="text-[#A1A1A6] text-sm font-light max-w-[280px] leading-relaxed">
              Treinador de Elite & Atleta Profissional (CREF 120774-G/SP).
              Transformando físicos através de ciência e prática.
            </p>
          </div>

          {/* Right Side: Social CTAs */}
          <div className="flex flex-col items-center md:items-end gap-8">
            <div className="text-center md:text-right">
              <span className="block text-[11px] tracking-[0.3em] uppercase font-bold text-[#CF5C1F] mb-4">
                Fale Diretamente Comigo
              </span>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="https://www.instagram.com/alceupradosj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-[#0A0A0A] hover:bg-[#111111] border border-white/10 hover:border-[#CF5C1F]/50 px-6 py-3.5 rounded-full transition-all duration-500 hover:shadow-[0_0_20px_rgba(207,92,31,0.2)] hover:-translate-y-1"
                >
                  <svg
                    className="w-5 h-5 text-[#86868B] group-hover:text-white transition-colors duration-500 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <span className="text-sm font-medium text-[#A1A1A6] group-hover:text-white transition-colors duration-500">
                    Instagram
                  </span>
                </a>

                <a
                  href="https://api.whatsapp.com/send?phone=5516996241874&text=Ol%C3%A1%20Alceu%20!%20%0AComo%20funciona%20a%20consultoria%20%3F%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-[#CF5C1F]/10 hover:bg-[#CF5C1F] border border-[#CF5C1F]/30 hover:border-[#CF5C1F] px-6 py-3.5 rounded-full transition-all duration-500 hover:shadow-[0_0_20px_rgba(207,92,31,0.4)] hover:-translate-y-1"
                >
                  <svg
                    className="w-5 h-5 text-[#CF5C1F] group-hover:text-white transition-colors duration-500 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                  <span className="text-sm font-medium text-[#CF5C1F] group-hover:text-white transition-colors duration-500">
                    WhatsApp
                  </span>
                </a>
              </div>
            </div>

            <p className="text-[10px] uppercase tracking-[0.2em] text-[#555555] text-center md:text-right">
              © {new Date().getFullYear()} Alceu Prado.
              <br className="md:hidden" /> Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors bg-black/50 hover:bg-black/80 rounded-full p-2 border border-white/10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/5"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
