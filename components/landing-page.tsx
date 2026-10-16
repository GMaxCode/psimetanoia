"use client";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  HeartHandshake,
  AtSign,
  MapPin,
  Menu,
  MessageCircle,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const name = process.env.NEXT_PUBLIC_CLIENT_NAME ?? "Psicaanalise Metanoia";
const city = process.env.NEXT_PUBLIC_CITY ?? "Ji-Paraná RO";
const phoneValue =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+55 69 9917-5555";
const whatsappMessage =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
  "Olá! Gostaria de saber mais sobre os atendimentos de psicanálise e como funciona o agendamento de uma sessão. Poderiam me passar mais informações, por favor?";
const whatsappHref = `https://wa.me/${phoneValue.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;
const email = process.env.NEXT_PUBLIC_EMAIL ?? "joaogomes317@gmail.com";
const instagram = process.env.NEXT_PUBLIC_INSTAGRAM ?? "psicanalise_metanoia";
const address =
  process.env.NEXT_PUBLIC_ADDRESS ??
  "Av Aracaju, 3368, Jorge Texeira, Ji-Paraná - RO";
const hours = process.env.NEXT_PUBLIC_HOURS ?? "";
const instagramHref = `https://instagram.com/${instagram.replace(/^@/, "")}/`;
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

const navigation = [
  ["Sobre", "#sobre"],
  ["Atendimentos", "#servicos"],
  ["Perguntas frequentes", "#faq"],
  ["Localização", "#localizacao"],
] as const;

const services = [
  {
    title: "Terapia individual",
    text: "Um espaço só seu para falar, se escutar e olhar para a própria história com cuidado.",
    icon: Sparkles,
  },
  {
    title: "Terapia de casal",
    text: "Um tempo de diálogo e reflexão para compreender os vínculos e encontrar novas possibilidades.",
    icon: HeartHandshake,
  },
  {
    title: "Terapia familiar",
    text: "Escuta e acolhimento para os diferentes pontos de vista que compõem uma família.",
    icon: UsersRound,
  },
] as const;

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      aria-label={`${name} — início`}
      className={`brand${light ? " brand--light" : ""}`}
      href="#inicio"
    >
      <span aria-hidden="true" className="brand__monogram">
        m.
      </span>
      <span className="brand__copy">
        <strong>{name}</strong>
        <small>PSICANÁLISE · {city}</small>
      </span>
    </a>
  );
}

function WhatsAppLink({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <a
      className={className}
      href={whatsappHref}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFloat, setShowFloat] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setShowFloat(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <nav
            aria-label="Navegação principal"
            className={`main-nav${menuOpen ? " main-nav--open" : ""}`}
            id="main-navigation"
          >
            {navigation.map(([label, href]) => (
              <a href={href} key={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <WhatsAppLink className="button button--dark header-cta">
            <MessageCircle aria-hidden="true" size={16} />
            <span>Falar no WhatsApp</span>
            <ArrowUpRight aria-hidden="true" size={14} />
          </WhatsAppLink>
          <button
            aria-controls="main-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="menu-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            type="button"
          >
            {menuOpen ? (
              <X aria-hidden="true" size={20} />
            ) : (
              <Menu aria-hidden="true" size={20} />
            )}
          </button>
        </div>
      </header>

      <main>
        <section aria-labelledby="hero-title" className="hero" id="inicio">
          <video
            aria-hidden="true"
            autoPlay={!reducedMotion}
            className="hero__video"
            loop={!reducedMotion}
            muted
            playsInline
            preload="metadata"
          >
            <source src="/videos/video2.mp4" type="video/mp4" />
          </video>
          <div aria-hidden="true" className="hero__shade" />

          <div className="hero__content">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="hero__copy"
              initial={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow eyebrow--light">
                <span className="status-dot" /> Um espaço para você
              </span>
              <h1 id="hero-title">
                Olhar para dentro
                <br />
                <em>também é seguir em frente.</em>
              </h1>
              <p>
                Tratamento confiável e de qualidade. Um espaço de escuta,
                acolhimento e reflexão para compreender suas emoções e construir
                uma relação mais consciente consigo mesmo.
              </p>
              <div className="hero__actions">
                <WhatsAppLink className="button button--cream">
                  <MessageCircle aria-hidden="true" size={17} />
                  Agende uma conversa
                  <ArrowUpRight aria-hidden="true" size={16} />
                </WhatsAppLink>
                <a className="text-link text-link--light" href="#sobre">
                  Conheça o espaço
                  <ArrowDown aria-hidden="true" size={15} />
                </a>
              </div>
            </motion.div>

            <motion.aside
              animate={{ opacity: 1, y: 0 }}
              className="hero-note"
              initial={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="hero-note__icon">
                <HeartHandshake aria-hidden="true" size={20} />
              </span>
              <span>
                <strong>Um encontro com você</strong>
                <small>Atendimento personalizado em {city}</small>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="hero-note__arrow"
                size={15}
              />
            </motion.aside>
          </div>

          <div aria-hidden="true" className="hero__footer">
            <span>ESCUTA · ACOLHIMENTO · REFLEXÃO</span>
            <span>DESLIZE PARA EXPLORAR ↓</span>
          </div>
        </section>

        <section className="intro section-pad">
          <div className="intro__label">
            <span className="eyebrow">Psicaanalise Metanoia</span>
            <span className="section-number">01 — UM ESPAÇO DE ESCUTA</span>
          </div>
          <div className="intro__body">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Cada história merece ser <em>escutada sem pressa.</em>
            </motion.h2>
            <div className="intro__aside">
              <p>
                A psicanálise pode ser um caminho de descoberta, de elaboração e
                de novas perguntas. Um lugar onde a sua palavra tem espaço.
              </p>
              <a className="text-link" href="#servicos">
                Veja como podemos caminhar juntos
                <ArrowRight aria-hidden="true" size={15} />
              </a>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="about-title"
          className="about section-pad"
          id="sobre"
        >
          <div className="section-heading">
            <span className="eyebrow">
              <span className="eyebrow__line" /> Sobre o espaço
            </span>
            <span className="section-number">02 / 05</span>
          </div>
          <div className="about__grid">
            <div className="about__statement">
              <h2 id="about-title">
                Um lugar para
                <br />
                <em>ser quem você é.</em>
              </h2>
              <p>
                A Psicaanalise Metanoia é um espaço de escuta, acolhimento e
                reflexão. Aqui, você pode explorar suas emoções, compreender
                seus conflitos e construir uma relação mais consciente consigo
                mesmo — no seu ritmo e a partir da sua própria história. Na
                análise, cada palavra, silêncio e pergunta pode abrir novos
                caminhos para compreender o que você sente e construir outras
                formas de estar consigo e com o mundo.
              </p>
              <span className="audience">
                <span aria-hidden="true">✓</span> Para todas as pessoas, em
                diferentes momentos da vida.
              </span>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="services-title"
          className="services section-pad"
          id="servicos"
        >
          <div className="section-heading">
            <span className="eyebrow eyebrow--light">
              <span className="eyebrow__line" /> Como podemos cuidar
            </span>
            <span className="section-number section-number--light">
              03 / 05
            </span>
          </div>
          <div className="services__heading">
            <h2 id="services-title">
              Atendimento
              <br />
              <em>personalizado.</em>
            </h2>
            <p>
              Cada processo é único. A escuta considera a sua história, suas
              necessidades e o momento que você está vivendo.
            </p>
          </div>
          <div className="service-cards">
            {services.map(({ title, text, icon: Icon }, index) => (
              <motion.article
                className="service-card"
                initial={{ opacity: 0, y: 14 }}
                key={title}
                transition={{ delay: index * 0.08 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="service-card__top">
                  <span className="service-card__icon">
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <span className="section-number section-number--light">
                    0{index + 1}
                  </span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <WhatsAppLink className="service-card__link">
                  Saiba mais <ArrowUpRight aria-hidden="true" size={14} />
                </WhatsAppLink>
              </motion.article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="faq-title"
          className="faq section-pad"
          id="faq"
        >
          <div className="section-heading">
            <span className="eyebrow">
              <span className="eyebrow__line" /> Tire suas dúvidas
            </span>
            <span className="section-number">04 / 05</span>
          </div>
          <div className="faq__heading">
            <h2 id="faq-title">
              Perguntas
              <br />
              <em>frequentes.</em>
            </h2>
            <p>
              Algumas respostas para ajudar você a dar o primeiro passo com
              tranquilidade.
            </p>
          </div>
          <div className="faq__list">
            <details className="faq__item">
              <summary>Como funciona a primeira sessão?</summary>
              <p>
                A primeira conversa é um momento de acolhimento. Você fala sobre
                o que o trouxe até aqui, no seu ritmo, e o analista explica como
                o trabalho acontece. Não é preciso chegar com tudo organizado:
                começar a falar já faz parte do processo.
              </p>
            </details>
            <details className="faq__item">
              <summary>
                Preciso ter um problema “grave” para procurar psicanálise?
              </summary>
              <p>
                Não. Muitas pessoas procuram análise por angústia, ansiedade,
                dificuldades nos relacionamentos, sensação de vazio ou
                simplesmente para se conhecer melhor. Não existe um motivo
                “certo” ou “grande o suficiente”.
              </p>
            </details>
            <details className="faq__item">
              <summary>Quanto tempo dura o tratamento?</summary>
              <p>
                Não há um prazo fixo. A duração varia de pessoa para pessoa e é
                conversada ao longo do processo. Cada atendimento dura [X
                minutos], com frequência de [X vez(es) por semana], combinada na
                primeira conversa.
              </p>
            </details>
            <details className="faq__item">
              <summary>O que eu conto nas sessões é sigiloso?</summary>
              <p>
                Sim. O sigilo é um princípio fundamental do trabalho clínico, e
                tudo o que é dito no consultório fica no consultório.
              </p>
            </details>
            <details className="faq__item">
              <summary>
                Qual a diferença entre psicanálise e psicoterapia?
              </summary>
              <p>
                A psicanálise dá atenção especial ao inconsciente, ou seja, ao
                que influencia nossas escolhas e sentimentos sem que a gente
                perceba. A fala livre é o principal instrumento: você diz o que
                vier à mente, sem precisar organizar ou julgar.
              </p>
            </details>
          </div>
        </section>

        <section
          aria-labelledby="location-title"
          className="location section-pad"
          id="localizacao"
        >
          <div className="location__card">
            <div className="location__content">
              <div className="section-heading">
                <span className="eyebrow eyebrow--light">
                  <span className="eyebrow__line" /> Onde estamos
                </span>
                <span className="section-number section-number--light">
                  05 / 05
                </span>
              </div>
              <h2 id="location-title">
                Um espaço de cuidado
                <br />
                <em>em {city}.</em>
              </h2>
              <div className="location__details">
                <div className="location__detail">
                  <MapPin aria-hidden="true" size={18} />
                  <span>
                    <strong>Endereço</strong>
                    <span>{address}</span>
                  </span>
                </div>
                <div className="location__detail">
                  <Clock3 aria-hidden="true" size={18} />
                  <span>
                    <strong>Horários</strong>
                    <span>
                      {hours || "Consulte os horários pelo WhatsApp."}
                    </span>
                  </span>
                </div>
              </div>
              <a
                className="button button--cream location__button"
                href={mapsHref}
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver no Google Maps <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            </div>
            <div aria-hidden="true" className="location__art">
              <div className="location__orbit location__orbit--one" />
              <div className="location__orbit location__orbit--two" />
              <span className="location__orb">
                <MapPin size={32} strokeWidth={1.2} />
              </span>
              <span className="location__coordinates">
                JI-PARANÁ · RONDÔNIA
              </span>
              <span className="location__art-caption">
                Um lugar para chegar
                <br />e se sentir acolhido.
              </span>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="contact-title"
          className="contact"
          id="contato"
        >
          <span aria-hidden="true" className="contact__ornament">
            m.
          </span>
          <span className="eyebrow">
            <span className="eyebrow__line" /> O primeiro passo
          </span>
          <h2 id="contact-title">
            Que tal começar
            <br />
            <em>por uma conversa?</em>
          </h2>
          <p>
            Entre em contato para saber mais sobre os atendimentos e tirar suas
            dúvidas. Estamos aqui para acolher você.
          </p>
          <WhatsAppLink className="button button--dark contact__button">
            <MessageCircle aria-hidden="true" size={18} />
            Conversar pelo WhatsApp
            <ArrowUpRight aria-hidden="true" size={16} />
          </WhatsAppLink>
          <div className="contact__alternatives">
            <a href={`mailto:${email}`}>{email}</a>
            <span aria-hidden="true">·</span>
            <a href={instagramHref} rel="noopener noreferrer" target="_blank">
              @{instagram.replace(/^@/, "")}{" "}
              <AtSign aria-hidden="true" size={14} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div>
            <Brand light />
            <p className="footer-description">
              Um espaço de escuta, acolhimento
              <br />e reflexão em {city}.
            </p>
          </div>
          <div className="footer-links">
            <span className="footer-label">Fale com a gente</span>
            <WhatsAppLink className="footer-link">
              WhatsApp <ArrowUpRight aria-hidden="true" size={14} />
            </WhatsAppLink>
            <a className="footer-link" href={`mailto:${email}`}>
              {email} <ArrowUpRight aria-hidden="true" size={14} />
            </a>
            <a
              className="footer-link"
              href={instagramHref}
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {name}. Todos os direitos reservados.
          </span>
          <a className="back-to-top" href="#inicio">
            Voltar ao topo <ArrowUpRight aria-hidden="true" size={14} />
          </a>
        </div>
      </footer>

      {showFloat && (
        <motion.a
          animate={{ opacity: 1, scale: 1 }}
          aria-label="Fale conosco pelo WhatsApp"
          className="whatsapp-float"
          href={whatsappHref}
          initial={{ opacity: 0, scale: 0.8 }}
          rel="noopener noreferrer"
          target="_blank"
          transition={{ duration: 0.2 }}
        >
          <MessageCircle aria-hidden="true" fill="currentColor" size={24} />
        </motion.a>
      )}
    </MotionConfig>
  );
}
