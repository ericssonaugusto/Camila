import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Mail,
  MessageCircle,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Clock,
  ShieldCheck,
  Scale,
  Users,
  Briefcase,
  Landmark
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_NUMBER = "5545999689178";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-16 md:py-24 px-6 md:px-12 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left hover:text-burgundy transition-colors"
      >
        <span className="text-lg font-medium pr-8">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="py-4 text-zinc-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Top Bar */}
      <div className="bg-zinc-900 text-white py-2 px-6 md:px-12 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium tracking-wider uppercase">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-burgundy" /> Foz do Iguaçu - PR
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-3 h-3 text-burgundy" /> (45) 99968-9178
            </span>
          </div>
          <div className="flex gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-burgundy transition-colors">
              Atendimento Online
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 px-6 md:px-12 py-4">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl md:text-2xl font-serif font-bold tracking-tight text-zinc-900">
            Camila Schuller <span className="text-burgundy">Lopes</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-zinc-600">
            <a href="#sobre" className="hover:text-burgundy transition-colors">Sobre mim</a>
            <a href="#atuacao" className="hover:text-burgundy transition-colors">Áreas de Atuação</a>
            <a href="#contato" className="hover:text-burgundy transition-colors">Contato</a>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-burgundy hover:bg-burgundy-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 shadow-lg shadow-burgundy/20"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000"
            alt="Escritório de Advocacia"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-zinc-900/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Receba o que é seu por direito — com <span className="text-burgundy">segurança</span> e orientação clara
            </h1>
            <p className="text-xl md:text-2xl text-zinc-200 mb-10 leading-relaxed font-light">
              Você não precisa enfrentar problemas trabalhistas ou dificuldades com aposentadoria sozinho.
              Se algo parece errado, pode ser porque está mesmo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-burgundy hover:bg-burgundy-dark text-white px-8 py-4 rounded-lg text-lg font-bold transition-all flex items-center justify-center gap-3 group"
              >
                QUERO ENTENDER MEU CASO AGORA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <Section id="sobre">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1 md:col-span-4 lg:col-span-5 relative flex justify-center">
            <img
              src="/camila.jpg"
              alt="Camila Schuller Lopes"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg object-cover aspect-[5/9] rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-top"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 md:order-2 md:col-span-8 lg:col-span-7">
            <span className="text-burgundy font-bold tracking-widest uppercase text-sm mb-4 block">Solução e Confiança</span>
            <h2 className="text-4xl font-serif font-bold mb-6">Existe solução — e você pode começar agora</h2>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Me chamo <strong className="text-zinc-900">Camila Schuller Lopes</strong>.
              Atuo há 6 anos em Foz do Iguaçu e também com atendimento online, ajudando pessoas que:
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Foram prejudicadas no trabalho",
                "Têm dificuldades para se aposentar",
                "Precisam revisar valores de salário, pensão ou benefícios",
                "Querem entender se vale a pena entrar com ação"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-burgundy flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-zinc-50 p-6 rounded-xl border-l-4 border-burgundy mb-8">
              <p className="text-zinc-700 italic">
                "Aqui você recebe explicação clara, sem juridiquês. Você entende exatamente sua situação antes de qualquer decisão."
              </p>
            </div>
            <p className="text-zinc-600 mb-8">
              Em causas trabalhistas e previdenciárias, atuo com honorários de êxito — você paga ao final do processo.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-burgundy font-bold text-lg hover:underline"
            >
              Falar com Camila agora <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </Section>

      {/* Methodology Section */}
      <Section id="atuacao" className="bg-zinc-900 text-white">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Áreas de Atuação</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Especialistas na defesa dos seus direitos com foco e estratégia.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <Briefcase className="w-10 h-10" />,
              title: "Direito do Trabalho",
              foco: "Defesa de direitos e relações de emprego.",
              resumo: "Assessoria completa para empregados e empresas, atuando com ética e técnica na garantia dos direitos trabalhistas e na prevenção de riscos jurídicos.",
              destaques: [
                "Reclamações Trabalhistas e Vínculo",
                "Verbas Rescisórias e Horas Extras",
                "Indenizações por Acidentes",
                "Combate ao Assédio no Trabalho",
                "Consultoria preventiva e acordos"
              ]
            },
            {
              icon: <Scale className="w-10 h-10" />,
              title: "Direito Civil e Consumidor",
              foco: "Soluções para conflitos do cotidiano.",
              resumo: "Representação jurídica estratégica em relações civis e contratuais, buscando soluções rápidas e eficazes para proteger seu patrimônio e interesses.",
              destaques: [
                "Indenizações por Danos",
                "Cobranças e Execuções de Dívidas",
                "Ações de Despejo e Locação",
                "Defesa do Consumidor",
                "Conflitos entre Particulares"
              ]
            },
            {
              icon: <Landmark className="w-10 h-10" />,
              title: "Direito Previdenciário",
              foco: "Planejamento e obtenção de benefícios.",
              resumo: "Defesa de trabalhadores rurais e urbanos. Atuamos desde o planejamento da aposentadoria até a reversão de benefícios negados pelo INSS.",
              destaques: [
                "Aposentadoria Híbrida e Especial",
                "Planejamento Previdenciário",
                "Auxílio-Doença, Invalidez e BPC",
                "Pensão por Morte e Salário-Maternidade",
                "Revisão e Correção de Valores"
              ]
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 hover:border-burgundy transition-all flex flex-col h-full"
            >
              <div className="text-burgundy mb-6">{card.icon}</div>
              <h3 className="text-2xl font-serif font-bold mb-2">{card.title}</h3>
              <p className="text-burgundy font-medium text-sm mb-4">{card.foco}</p>
              <p className="text-zinc-400 leading-relaxed mb-6">{card.resumo}</p>

              <div className="mt-auto">
                <hr className="border-zinc-700 mb-6" />
                <ul className="space-y-3">
                  {card.destaques.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-zinc-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contato" className="bg-zinc-50">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-8">Atendimento em Foz do Iguaçu e Online</h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-white p-4 rounded-xl shadow-sm text-burgundy">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Endereço</h4>
                  <p className="text-zinc-600">
                    Rua Belarmino de Mendonça 107, sala 304<br />
                    Edifício Foz do Iguaçu – Centro<br />
                    Foz do Iguaçu – PR
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-white p-4 rounded-xl shadow-sm text-burgundy">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">WhatsApp</h4>
                  <p className="text-zinc-600">(45) 99968-9178</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-white p-4 rounded-xl shadow-sm text-burgundy">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Modalidade</h4>
                  <p className="text-zinc-600">Atendimento presencial e online para todo o Brasil.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-2 rounded-3xl shadow-xl border border-zinc-100 min-h-[400px]">
            <iframe
              src="https://maps.google.com/maps?q=Rua%20Belarmino%20de%20Mendon%C3%A7a%20107%2C%20Foz%20do%20Igua%C3%A7u%20-%20PR&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-2xl"
              title="Localização do Escritório"
            ></iframe>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Perguntas Frequentes</h2>
          <div className="space-y-2">
            <FAQItem
              question="Preciso pagar para entrar com processo trabalhista ou previdenciário?"
              answer="Em muitas situações, atuo com honorários de êxito, ou seja, você paga ao final do processo, apenas se houver ganho de causa ou recebimento de valores."
            />
            <FAQItem
              question="Atende somente em Foz do Iguaçu?"
              answer="Não. O atendimento pode ser presencial em nosso escritório em Foz do Iguaçu ou totalmente online, atendendo clientes em qualquer lugar do país com a mesma segurança e proximidade."
            />
            <FAQItem
              question="E se eu não souber se realmente tenho direito?"
              answer="Justamente por isso é importante analisar seu caso. Muitas pessoas descobrem que tinham valores a receber e não sabiam. Nossa análise inicial serve para esclarecer exatamente essa dúvida."
            />
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 border-b border-zinc-800 pb-12 mb-12">
          <div>
            <div className="text-2xl font-serif font-bold mb-6">
              Camila Schuller <span className="text-burgundy">Lopes</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Advocacia especializada com foco em resultados e atendimento humanizado.
              Protegendo seus direitos trabalhistas e previdenciários.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Links Rápidos</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#atuacao" className="hover:text-white transition-colors">Áreas de Atuação</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Contato Direto</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-burgundy" /> (45) 99968-9178
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-burgundy" /> camilaschullerl@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-burgundy" /> Foz do Iguaçu - PR
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-zinc-500 text-xs">
          <p>© {new Date().getFullYear()} Camila Schuller Lopes Advocacia. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0">Desenvolvido com foco em resultados jurídicos.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Fale no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap font-bold">
          Fale Conosco
        </span>
      </a>
    </div>
  );
}
