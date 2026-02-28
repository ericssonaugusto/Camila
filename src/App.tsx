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
  Users
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
            <a href="#sobre" className="hover:text-burgundy transition-colors">Sobre</a>
            <a href="#atuacao" className="hover:text-burgundy transition-colors">Atuação</a>
            <a href="#depoimentos" className="hover:text-burgundy transition-colors">Depoimentos</a>
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

      {/* Pain Points Section */}
      <Section className="bg-zinc-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Você está passando por isso?</h2>
          <div className="w-20 h-1 bg-burgundy mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl text-zinc-600 italic mb-8">Talvez você esteja pensando:</p>
            {[
              "“Será que eu tenho direito e não estou sabendo?”",
              "“Acho que a empresa me passou pra trás.”",
              "“Meu acerto veio muito baixo.”",
              "“Estou com medo de não conseguir me aposentar.”",
              "“O INSS negou meu pedido.”"
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-zinc-100"
              >
                <div className="mt-1 text-burgundy">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <p className="text-lg font-medium text-zinc-800">{text}</p>
              </motion.div>
            ))}
            <p className="text-zinc-600 mt-8 leading-relaxed">
              Você tentou resolver sozinho. Tentou entender pela internet. Talvez buscou medidas administrativas.
              E mesmo assim… continua se sentindo injustiçado e inseguro.
              <br /><br />
              <strong className="text-zinc-900">Isso não é exagero. É preocupação com o seu futuro.</strong>
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
              alt="Trabalhador preocupado"
              className="rounded-2xl shadow-2xl object-cover aspect-video"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-burgundy text-white p-8 rounded-2xl hidden lg:block max-w-xs shadow-xl">
              <p className="text-lg font-medium">Não deixe o tempo passar. O seu direito tem prazo.</p>
            </div>
          </div>
        </div>
      </Section>

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
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Como trabalhamos por você</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Transparência e firmeza em cada etapa do seu processo.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <Scale className="w-10 h-10" />,
              title: "Explicação Clara",
              desc: "Você não sai da consulta com mais dúvidas. Eu analiso seus documentos, explico o que realmente está acontecendo e mostro quais são suas chances. Sem promessas irreais. Sem enrolação."
            },
            {
              icon: <Clock className="w-10 h-10" />,
              title: "Acompanhamento Próximo",
              desc: "Processos geram ansiedade. Por isso, você tem acompanhamento próximo e atualização clara do que está acontecendo. Você nunca fica no escuro."
            },
            {
              icon: <ShieldCheck className="w-10 h-10" />,
              title: "Firmeza na Defesa",
              desc: "Buscar seus direitos não é “arrumar briga”. É proteger sua dignidade e sua segurança financeira. Se houve erro ou injustiça, existe caminho legal para resolver."
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-zinc-800/50 p-10 rounded-2xl border border-zinc-700 hover:border-burgundy transition-all"
            >
              <div className="text-burgundy mb-6">{card.icon}</div>
              <h3 className="text-2xl font-serif font-bold mb-4">{card.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="depoimentos" className="bg-pattern">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">O que alguns clientes dizem</h2>
          <div className="w-20 h-1 bg-burgundy mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "“Eu achava que não tinha mais jeito, mas descobri que tinha direito sim.”",
            "“Ela me explicou tudo de um jeito que finalmente entendi.”",
            "“Me senti seguro do começo ao fim do processo.”",
            "“Eu tinha medo de entrar com ação e perder. Hoje vejo que foi a melhor decisão.”"
          ].map((quote, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex flex-col justify-between">
              <p className="text-zinc-700 italic mb-6 leading-relaxed">{quote}</p>
              <div className="flex gap-1 text-burgundy">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
            </div>
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

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-zinc-100 text-center flex flex-col justify-center">
            <h3 className="text-2xl font-serif font-bold mb-6">Não espere o problema aumentar</h3>
            <p className="text-zinc-600 mb-10 leading-relaxed">
              Quanto antes você entende sua situação, mais segurança você tem para decidir.
              Clique abaixo e descubra se você tem valores a receber ou direito a revisar seu benefício.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-burgundy hover:bg-burgundy-dark text-white px-8 py-5 rounded-xl text-xl font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-burgundy/30"
            >
              QUERO ANALISAR MEU CASO PELO WHATSAPP
              <MessageCircle className="w-6 h-6" />
            </a>
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
