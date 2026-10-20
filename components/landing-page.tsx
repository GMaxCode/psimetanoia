"use client";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  CreditCard,
  Globe2,
  HeartHandshake,
  AtSign,
  Menu,
  MessageCircle,
  Sparkles,
  X,
  Video,
} from "lucide-react";
import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

const name = process.env.NEXT_PUBLIC_CLIENT_NAME ?? "Psicanálise Metanoia";
const phoneValue =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+55 69 9917-5555";
const whatsappMessage =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
  "Olá! Vi a página e gostaria de entender como funcionam os atendimentos online para quem mora no exterior.";
const whatsappHref = `https://wa.me/${phoneValue.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;
const email = process.env.NEXT_PUBLIC_EMAIL ?? "joaogomes317@gmail.com";
const instagram = process.env.NEXT_PUBLIC_INSTAGRAM ?? "psicanalise_metanoia";
const therapistName = process.env.NEXT_PUBLIC_THERAPIST_NAME?.trim();
const professionalRegistration =
  process.env.NEXT_PUBLIC_PROFESSIONAL_REGISTRATION?.trim();
const instagramHref = `https://instagram.com/${instagram.replace(/^@/, "")}/`;

const navigation = [
  ["O que você sente", "#sobre"],
  ["Como funciona", "#como-funciona"],
  ["Quem acompanha", "#terapeuta"],
  ["Dúvidas", "#faq"],
] as const;

const challenges = [
  {
    number: "01",
    title: "O peso do isolamento",
    text: "A saudade de casa, a rotina fria e a distância física da sua rede de apoio.",
    icon: Globe2,
  },
  {
    number: "02",
    title: "A ansiedade silenciosa",
    text: "A pressão constante para dar certo e o medo de falhar longe de tudo.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "O cansaço invisível",
    text: "Guardar as dores para si para poupar quem ficou no Brasil.",
    icon: HeartHandshake,
  },
] as const;

const onlineSteps = [
  {
    title: "Sessões por vídeo",
    text: "Encontros individuais por Zoom ou Google Meet, conforme combinado com você.",
    icon: Video,
  },
  {
    title: "Flexibilidade de fuso",
    text: "Horários conversados para conciliar a sua rotina e o seu país de residência.",
    icon: Clock3,
  },
  {
    title: "Pagamento facilitado",
    text: "Opções de pagamento em reais, euros ou dólares, combinadas antes do início.",
    icon: CreditCard,
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
        M.
      </span>
      <span className="brand__copy">
        <strong>{name}</strong>
        <small>ATENDIMENTO ONLINE · BRASILEIROS NO EXTERIOR</small>
      </span>
    </a>
  );
}

function WhatsAppLink({
  children,
  className,
}: {
  children: ReactNode;
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
          <Image
            alt=""
            className="hero__image"
            fill
            priority
            sizes="100vw"
            src="/images/expatriado-janela.jpg"
          />
          <div aria-hidden="true" className="hero__shade" />

          <div className="hero__content">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="hero__copy"
              initial={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow eyebrow--light">
                <span className="status-dot" /> Para brasileiros que vivem fora
              </span>
              <h1 id="hero-title">
                Quem vê suas fotos no exterior não faz ideia da{" "}
                <em>solidão que você enfrenta quando a tela desliga.</em>
              </h1>
              <p>
                Viver em outro país exige muito do seu psicológico. Você não
                precisa engolir a ansiedade e o cansaço sozinho para não
                preocupar quem ficou no Brasil.
              </p>
              <div className="hero__actions">
                <WhatsAppLink className="button button--cream">
                  <MessageCircle aria-hidden="true" size={17} />
                  Quero agendar uma consulta online
                  <ArrowUpRight aria-hidden="true" size={16} />
                </WhatsAppLink>
                <a className="text-link text-link--light" href="#sobre">
                  Entenda o que você sente
                  <ArrowDown aria-hidden="true" size={15} />
                </a>
              </div>
              <span className="hero__note">
                Atendimento individual online, em português.
              </span>
            </motion.div>
          </div>

          <div aria-hidden="true" className="hero__footer">
            <span>ESCUTA · ACOLHIMENTO · REFLEXÃO</span>
            <span>UM ESPAÇO SEU, ONDE QUER QUE VOCÊ ESTEJA</span>
          </div>
        </section>

        <section
          aria-labelledby="story-title"
          className="expat-story section-pad"
          id="sobre"
        >
          <div className="section-heading">
            <span className="eyebrow">
              <span className="eyebrow__line" /> O choque de realidade de quem
              mora fora
            </span>
            <span className="section-number">01 / 04</span>
          </div>
          <div className="expat-story__grid">
            <div className="expat-story__copy">
              <h2 id="story-title">
                É isto que
                <br />
                <em>você está passando?</em>
              </h2>
              <p>
                Mudar de país é um projeto corajoso, mas os bastidores raramente
                são fáceis. Entre as fotos bonitas e a vida real, existe uma
                experiência que nem sempre dá para compartilhar. A vida perfeita
                que aparece nas redes é só uma parte da história.
              </p>
              <a className="text-link" href="#como-funciona">
                Você não precisa atravessar isso sem apoio
                <ArrowRight aria-hidden="true" size={15} />
              </a>
            </div>
            <figure className="expat-story__photo">
              <Image
                alt="Mulher observa a cidade pela janela de casa, em um momento de silêncio"
                fill
                sizes="(max-width: 700px) 90vw, 45vw"
                src="/images/expatriado-janela.jpg"
              />
              <figcaption>
                <span className="social-card">
                  <span className="social-card__dots" aria-hidden="true">
                    •••
                  </span>
                  <strong>“Vivendo meu melhor momento ✨”</strong>
                  <small>O que aparece na tela</small>
                </span>
                <span className="photo-caption">
                  E o que fica quando a tela desliga
                </span>
              </figcaption>
            </figure>
          </div>
          <div className="challenge-grid">
            {challenges.map(({ number, title, text, icon: Icon }) => (
              <motion.article
                className="challenge-card"
                initial={{ opacity: 0, y: 14 }}
                key={title}
                transition={{ delay: Number(number) * 0.07 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <span className="challenge-card__number">{number}</span>
                <Icon
                  aria-hidden="true"
                  className="challenge-card__icon"
                  size={22}
                />
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="language-title"
          className="native-language section-pad"
        >
          <div className="native-language__art" aria-hidden="true">
            <Image
              alt=""
              fill
              sizes="(max-width: 700px) 80vw, 38vw"
              src="/images/2.png"
            />
            <span className="native-language__stamp">
              A sua língua. A sua história.
            </span>
          </div>
          <div className="native-language__copy">
            <span className="eyebrow">
              <span className="eyebrow__line" /> Um lugar onde você não precisa
              traduzir o que sente
            </span>
            <h2 id="language-title">
              A sua saúde mental não pode ficar em <em>segundo plano.</em>
            </h2>
            <p>
              A terapia online encurta as distâncias e pode ajudar você a
              reencontrar seu ponto de equilíbrio. No consultório virtual, há
              espaço para falar na sua língua nativa — com as gírias, as nuances
              emocionais e a sua história, sem precisar de tradução.
            </p>
            <p>
              Um espaço de escuta e reflexão, sem julgamentos, para olhar com
              cuidado para o que a experiência de imigração desperta em você.
            </p>
            <WhatsAppLink className="text-link">
              Vamos conversar sobre o atendimento
              <ArrowRight aria-hidden="true" size={15} />
            </WhatsAppLink>
          </div>
        </section>

        <section
          aria-labelledby="therapist-title"
          className="therapist section-pad"
          id="terapeuta"
        >
          <div className="section-heading">
            <span className="eyebrow">
              <span className="eyebrow__line" /> Quem te acompanhará
            </span>
            <span className="section-number">02 / 04</span>
          </div>
          <div className="therapist__grid">
            <figure className="therapist__portrait">
              <Image
                alt="Imagem ilustrativa de uma profissional em um consultório acolhedor"
                fill
                sizes="(max-width: 700px) 90vw, 38vw"
                src="/images/terapeuta.jpg"
              />
              <figcaption>Imagem ilustrativa</figcaption>
            </figure>
            <div className="therapist__copy">
              <span className="eyebrow">Escuta com presença e respeito</span>
              <h2 id="therapist-title">
                Conheça sua
                <br />
                <em>terapeuta.</em>
              </h2>
              {therapistName ? (
                <p className="therapist__name">{therapistName}</p>
              ) : (
                <p className="therapist__role">
                  Psicanálise e Terapia Holística
                </p>
              )}
              <p>
                A proposta é acolher brasileiros que vivem fora do país com uma
                escuta ética e atenta aos desafios da imigração — como a
                ansiedade, a depressão, a saudade e a reconstrução da própria
                identidade. Cada encontro respeita a história e o tempo de quem
                chega.
              </p>
              {professionalRegistration && (
                <p className="therapist__registration">
                  Registro profissional: {professionalRegistration}
                </p>
              )}
              <WhatsAppLink className="button button--dark">
                <MessageCircle aria-hidden="true" size={16} />
                Fale com a terapeuta
                <ArrowUpRight aria-hidden="true" size={15} />
              </WhatsAppLink>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="online-title"
          className="online-care section-pad"
          id="como-funciona"
        >
          <div className="section-heading">
            <span className="eyebrow eyebrow--light">
              <span className="eyebrow__line" /> Simples, com flexibilidade e
              cuidado
            </span>
            <span className="section-number section-number--light">
              03 / 04
            </span>
          </div>
          <div className="online-care__heading">
            <h2 id="online-title">
              Como funciona
              <br />
              <em>o atendimento.</em>
            </h2>
            <p>
              Um espaço individual, online e em português, pensado para caber na
              vida que você está construindo.
            </p>
          </div>
          <div className="online-care__grid">
            {onlineSteps.map(({ title, text, icon: Icon }, index) => (
              <motion.article
                className="online-card"
                initial={{ opacity: 0, y: 14 }}
                key={title}
                transition={{ delay: index * 0.08 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="online-card__top">
                  <span className="online-card__icon">
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <span className="online-card__number">0{index + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
          <div className="online-care__illustration">
            <Image
              alt=""
              aria-hidden="true"
              height={220}
              src="/images/rota-global.svg"
              width={320}
            />
            <p>Um encontro de cuidado, mesmo a milhares de quilômetros.</p>
          </div>
        </section>

        <section
          aria-labelledby="faq-title"
          className="questions section-pad"
          id="faq"
        >
          <div className="section-heading">
            <span className="eyebrow">
              <span className="eyebrow__line" /> Antes de começar
            </span>
            <span className="section-number">04 / 04</span>
          </div>
          <div className="questions__heading">
            <h2 id="faq-title">
              Perguntas
              <br />
              <em>que podem surgir.</em>
            </h2>
            <p>
              Se a sua dúvida não estiver aqui, você pode perguntar pelo
              WhatsApp.
            </p>
          </div>
          <div className="faq__list">
            <details className="faq__item">
              <summary>Como acontecem as sessões online?</summary>
              <p>
                Os encontros são individuais, por videochamada, em uma
                plataforma combinada previamente, como Zoom ou Google Meet. Você
                pode conversar sobre o que precisa antes de agendar.
              </p>
            </details>
            <details className="faq__item">
              <summary>Como conciliamos a diferença de fuso horário?</summary>
              <p>
                Os horários são conversados para buscar uma opção compatível com
                a sua rotina e o fuso do país onde você mora.
              </p>
            </details>
            <details className="faq__item">
              <summary>Em qual moeda posso pagar?</summary>
              <p>
                As formas de pagamento e a moeda — reais, euros ou dólares — são
                combinadas diretamente antes do início dos atendimentos.
              </p>
            </details>
            <details className="faq__item">
              <summary>O que eu conto nas sessões é sigiloso?</summary>
              <p>
                O sigilo é parte fundamental do trabalho. Seus limites e as
                condições de confidencialidade são conversados no início,
                conforme as normas éticas e legais aplicáveis.
              </p>
            </details>
            <details className="faq__item">
              <summary>Preciso falar inglês ou outro idioma?</summary>
              <p>
                Não. O atendimento é em português, para que você possa se
                expressar na sua língua nativa.
              </p>
            </details>
          </div>
        </section>

        <section
          aria-labelledby="contact-title"
          className="final-cta"
          id="contato"
        >
          <span className="eyebrow">
            <span className="eyebrow__line" /> O primeiro passo
          </span>
          <h2 id="contact-title">
            Não passe por essa
            <br />
            <em>transição sozinho.</em>
          </h2>
          <p>
            O suporte que você precisa está a um clique de distância. Fale pelo
            WhatsApp para tirar dúvidas sobre o atendimento online.
          </p>
          <WhatsAppLink className="button button--dark final-cta__button">
            <MessageCircle aria-hidden="true" size={18} />
            Falar conosco no WhatsApp
            <ArrowUpRight aria-hidden="true" size={16} />
          </WhatsAppLink>
          <div className="contact__alternatives">
            <a href={`mailto:${email}`}>{email}</a>
            {instagram && (
              <>
                <span aria-hidden="true">·</span>
                <a
                  href={instagramHref}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  @{instagram.replace(/^@/, "")}{" "}
                  <AtSign aria-hidden="true" size={14} />
                </a>
              </>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div>
            <Brand light />
            <p className="footer-description">
              Um espaço de escuta, acolhimento
              <br />e reflexão para brasileiros no exterior.
            </p>
          </div>
          <div className="footer-links">
            <span className="footer-label">Informações profissionais</span>
            {therapistName && (
              <span className="footer-link">{therapistName}</span>
            )}
            {professionalRegistration && (
              <span className="footer-link">
                Registro: {professionalRegistration}
              </span>
            )}
            <a className="footer-link" href={`mailto:${email}`}>
              {email} <ArrowUpRight aria-hidden="true" size={14} />
            </a>
            <span className="footer-label footer-label--contact">
              Fale com a gente
            </span>
            <WhatsAppLink className="footer-link">
              WhatsApp <ArrowUpRight aria-hidden="true" size={14} />
            </WhatsAppLink>
            {instagram && (
              <a
                className="footer-link"
                href={instagramHref}
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram <ArrowUpRight aria-hidden="true" size={14} />
              </a>
            )}
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
