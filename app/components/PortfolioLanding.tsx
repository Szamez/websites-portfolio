"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Language = "pl" | "en";

type Copy = {
  nav: {
    about: string;
    portfolio: string;
    offer: string;
    process: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    trust: string[];
    previewTitle: string;
    previewLabel: string;
    previewStats: { value: string; label: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    text: string;
    highlights: string[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    intro: string;
    button: string;
    projects: {
      title: string;
      description: string;
      category: string;
      link: string;
      image: string;
    }[];
  };
  offer: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  process: {
    eyebrow: string;
    title: string;
    steps: { title: string; text: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    note: string;
    button: string;
    emailLabel: string;
  };
  footer: {
    note: string;
    backTop: string;
  };
};

const email = "mateusz.maciejewski.web@int.pl";
const mailtoHref = `mailto:${email}`;

const copy: Record<Language, Copy> = {
  pl: {
    nav: {
      about: "O mnie",
      portfolio: "Realizacje",
      offer: "Oferta",
      process: "Proces",
      contact: "Kontakt",
    },
    hero: {
      eyebrow: "Portfolio web designera",
      title: "Nowoczesne strony internetowe dla firm",
      subtitle:
        "Tworzę estetyczne, szybkie i responsywne strony, które pomagają firmom wyglądać profesjonalnie online.",
      primaryCta: "Zobacz realizacje",
      secondaryCta: "Skontaktuj się",
      trust: [
        "Dla małych firm",
        "Responsywne projekty",
        "Pomoc techniczna po starcie",
      ],
      previewTitle: "Przejrzysta strona firmowa",
      previewLabel: "projekt startowy",
      previewStats: [
        { value: "3", label: "gotowe przykłady" },
        { value: "PL/EN", label: "dwujęzycznie" },
        { value: "100%", label: "mobile ready" },
      ],
    },
    about: {
      eyebrow: "O mnie",
      title: "Pomagam małym biznesom dobrze wyglądać w internecie.",
      text:
        "Jestem początkującym web designerem i developerem. Projektuję proste, estetyczne strony, które jasno pokazują ofertę firmy, budują zaufanie i ułatwiają klientom kontakt.",
      highlights: [
        "Czytelny układ treści",
        "Dbałość o wygląd na telefonie",
        "Spokojna, partnerska współpraca",
      ],
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Przykładowe realizacje",
      intro:
        "Każda karta prowadzi do działającej strony przykładowej, dzięki czemu możesz od razu zobaczyć styl, układ i sposób prezentacji oferty.",
      button: "Zobacz stronę",
      projects: [
        {
          title: "Strona dla barbera",
          description:
            "Nowoczesna strona wizytówka dla salonu barberskiego z ofertą, cennikiem i sekcją kontaktową.",
          category: "Branża beauty",
          link: "https://barber-landing-page-tawny.vercel.app/",
          image: "/hero-barber.png",
        },
        {
          title: "Strona dla restauracji",
          description:
            "Elegancka strona dla restauracji z menu, galerią, opiniami i zachętą do rezerwacji stolika.",
          category: "Gastronomia",
          link: "https://restaurant-landing-page-pi.vercel.app/",
          image: "/lumiere-hero.png",
        },
        {
          title: "Strona dla studia tatuażu",
          description:
            "Ciemna, artystyczna strona portfolio dla studia tatuażu z galerią, opisem artystów i informacjami kontaktowymi.",
          category: "Portfolio artystyczne",
          link: "https://tattoo-studio-landing-page.vercel.app/",
          image: "/noir-ink-hero.png",
        },
      ],
    },
    offer: {
      eyebrow: "Oferta",
      title: "Co mogę dla Ciebie przygotować",
      items: [
        "Responsywne strony internetowe",
        "Strony wizytówki dla firm",
        "Galerie i portfolio",
        "Formularze kontaktowe",
        "Pomoc z domeną",
        "Podstawowa opieka techniczna",
      ],
    },
    process: {
      eyebrow: "Proces",
      title: "Prosta droga od pomysłu do publikacji",
      steps: [
        {
          title: "Rozmowa",
          text: "Poznaję Twoją firmę, klientów i cel strony, żeby ustalić najważniejsze treści.",
        },
        {
          title: "Projekt",
          text: "Przygotowuję nowoczesny układ strony dopasowany do charakteru biznesu.",
        },
        {
          title: "Wdrożenie",
          text: "Buduję responsywną stronę i dbam o to, żeby dobrze działała na telefonie i komputerze.",
        },
        {
          title: "Poprawki",
          text: "Wprowadzam ustalone korekty, dopracowuję szczegóły i pomagam przy starcie.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Napisz do mnie, jeśli chcesz stworzyć stronę dla swojej firmy.",
      text:
        "Tworzę proste, estetyczne strony internetowe dla małych biznesów, które potrzebują profesjonalnej obecności online bez zbędnego skomplikowania.",
      note:
        "Mogę również pomóc w zakupie i podpięciu domeny, na przykład nazwafirmy.pl, oraz w późniejszej opiece technicznej nad stroną.",
      button: "Wyślij wiadomość",
      emailLabel: "Email",
    },
    footer: {
      note: "Nowoczesne strony internetowe dla małych firm.",
      backTop: "Do góry",
    },
  },
  en: {
    nav: {
      about: "About",
      portfolio: "Work",
      offer: "Offer",
      process: "Process",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Web designer portfolio",
      title: "Modern websites for small businesses",
      subtitle:
        "I create aesthetic, fast and responsive websites that help businesses look professional online.",
      primaryCta: "See projects",
      secondaryCta: "Contact me",
      trust: [
        "For small businesses",
        "Responsive layouts",
        "Technical support after launch",
      ],
      previewTitle: "Clear business website",
      previewLabel: "starter project",
      previewStats: [
        { value: "3", label: "live examples" },
        { value: "PL/EN", label: "bilingual" },
        { value: "100%", label: "mobile ready" },
      ],
    },
    about: {
      eyebrow: "About",
      title: "I help small businesses look polished online.",
      text:
        "I am a beginner web designer and developer. I design simple, aesthetic websites that present a company's offer clearly, build trust and make it easy for customers to get in touch.",
      highlights: [
        "Clear content structure",
        "Careful mobile experience",
        "Calm, collaborative process",
      ],
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Example website projects",
      intro:
        "Each card links to a working sample website, so you can quickly check the style, layout and way the offer is presented.",
      button: "View website",
      projects: [
        {
          title: "Website for a barber",
          description:
            "A modern business card website for a barber shop with services, pricing and a contact section.",
          category: "Beauty services",
          link: "https://barber-landing-page-tawny.vercel.app/",
          image: "/hero-barber.png",
        },
        {
          title: "Website for a restaurant",
          description:
            "An elegant restaurant website with a menu, gallery, reviews and a clear invitation to reserve a table.",
          category: "Restaurant",
          link: "https://restaurant-landing-page-pi.vercel.app/",
          image: "/lumiere-hero.png",
        },
        {
          title: "Website for a tattoo studio",
          description:
            "A dark, artistic portfolio website for a tattoo studio with a gallery, artist profiles and contact details.",
          category: "Creative portfolio",
          link: "https://tattoo-studio-landing-page.vercel.app/",
          image: "/noir-ink-hero.png",
        },
      ],
    },
    offer: {
      eyebrow: "Offer",
      title: "What I can prepare for you",
      items: [
        "Responsive websites",
        "Business card websites",
        "Galleries and portfolios",
        "Contact forms",
        "Domain support",
        "Basic technical care",
      ],
    },
    process: {
      eyebrow: "Process",
      title: "A simple path from idea to launch",
      steps: [
        {
          title: "Conversation",
          text: "I learn about your business, customers and website goal so we can choose the key content.",
        },
        {
          title: "Design",
          text: "I prepare a modern page layout matched to the character of your business.",
        },
        {
          title: "Implementation",
          text: "I build the responsive website and make sure it works well on phones and desktops.",
        },
        {
          title: "Revisions",
          text: "I add agreed changes, polish the details and help with the launch.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Message me if you want to create a website for your business.",
      text:
        "I create simple, aesthetic websites for small businesses that need a professional online presence without unnecessary complexity.",
      note:
        "I can also help with buying and connecting a domain, for example yourcompany.pl, and with later technical care for the website.",
      button: "Send email",
      emailLabel: "Email",
    },
    footer: {
      note: "Modern websites for small businesses.",
      backTop: "Back to top",
    },
  },
};

export function PortfolioLanding() {
  const [language, setLanguage] = useState<Language>("pl");
  const t = copy[language];
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#f7f3ec] text-[#171411]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f3ec]/85 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Portfolio">
            <span className="grid size-10 place-items-center rounded-2xl bg-[#171411] text-sm font-semibold text-white shadow-lg shadow-black/10">
              MM
            </span>
            <span className="hidden text-sm font-semibold leading-tight text-[#171411] sm:block">
              Mateusz Maciejewski
              <span className="block text-xs font-medium text-[#71675c]">
                Web design / development
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-[#554c43] lg:flex">
            <a className="transition hover:text-[#171411]" href="#about">
              {t.nav.about}
            </a>
            <a className="transition hover:text-[#171411]" href="#portfolio">
              {t.nav.portfolio}
            </a>
            <a className="transition hover:text-[#171411]" href="#offer">
              {t.nav.offer}
            </a>
            <a className="transition hover:text-[#171411]" href="#process">
              {t.nav.process}
            </a>
            <a className="transition hover:text-[#171411]" href="#contact">
              {t.nav.contact}
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-2 rounded-full border border-black/10 bg-white/75 p-1 shadow-sm">
            {(["pl", "en"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLanguage(item)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition sm:text-sm ${
                  language === item
                    ? "bg-[#171411] text-white shadow-sm"
                    : "text-[#71675c] hover:text-[#171411]"
                }`}
                aria-pressed={language === item}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <section id="top" className="relative">
        <div className="absolute inset-x-0 top-0 -z-0 h-[620px] bg-[radial-gradient(circle_at_20%_10%,rgba(255,180,102,0.28),transparent_34%),radial-gradient(circle_at_80%_15%,rgba(82,113,255,0.16),transparent_30%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:grid-cols-[1.03fr_0.97fr] lg:px-8 lg:pb-28 lg:pt-24">
          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-5 inline-flex w-fit items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-[#75582d] shadow-sm">
              {t.hero.eyebrow}
            </p>
            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.03] tracking-normal text-[#171411] sm:text-6xl lg:text-7xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-[#62584d] sm:text-xl">
              {t.hero.subtitle}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#portfolio"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#171411] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-black/15 transition hover:-translate-y-0.5 hover:bg-[#2b251f] sm:w-auto"
              >
                {t.hero.primaryCta}
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-[#171411] shadow-sm transition hover:-translate-y-0.5 hover:border-[#d19b48] sm:w-auto"
              >
                {t.hero.secondaryCta}
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              {t.hero.trust.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium text-[#554c43]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[500px] min-w-0 lg:min-h-[620px]">
            <div className="absolute left-0 top-8 h-40 w-40 rounded-[2rem] bg-[#ffe1af] opacity-80 blur-2xl" />
            <div className="absolute bottom-14 right-0 h-48 w-48 rounded-[2rem] bg-[#cfd8ff] opacity-80 blur-2xl" />
            <div className="relative ml-auto flex w-full max-w-[calc(100vw-2.5rem)] flex-col gap-5 rounded-[2rem] border border-white/80 bg-white/75 p-4 shadow-2xl shadow-[#816c53]/18 backdrop-blur sm:max-w-xl sm:p-5">
              <div className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-[#171411]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="size-3 rounded-full bg-[#ff7b69]" />
                    <span className="size-3 rounded-full bg-[#ffd36b]" />
                    <span className="size-3 rounded-full bg-[#64d19a]" />
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
                    live preview
                  </span>
                </div>
                <div className="grid gap-4 p-5 sm:p-6">
                  <div className="grid gap-3 rounded-3xl bg-gradient-to-br from-[#fff6e8] via-white to-[#dce4ff] p-5">
                    <span className="w-fit rounded-full bg-[#171411] px-3 py-1 text-xs font-semibold text-white">
                      {t.hero.previewLabel}
                    </span>
                    <h2 className="max-w-sm text-3xl font-semibold leading-tight text-[#171411]">
                      {t.hero.previewTitle}
                    </h2>
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      <span className="h-16 rounded-2xl bg-white/80 shadow-sm" />
                      <span className="h-16 rounded-2xl bg-white/65 shadow-sm" />
                      <span className="h-16 rounded-2xl bg-white/80 shadow-sm" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-3xl bg-white/10 p-4">
                      <div className="mb-3 h-2 w-20 rounded-full bg-white/25" />
                      <div className="h-24 rounded-2xl bg-gradient-to-br from-[#ffcf8c] to-[#f27f5d]" />
                    </div>
                    <div className="grid gap-3 rounded-3xl bg-white/10 p-4">
                      <span className="h-3 w-24 rounded-full bg-white/25" />
                      <span className="h-3 w-full rounded-full bg-white/15" />
                      <span className="h-3 w-4/5 rounded-full bg-white/15" />
                      <span className="mt-3 h-10 rounded-full bg-white text-[#171411]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {t.hero.previewStats.map((stat) => (
                  <div
                    key={`${stat.value}-${stat.label}`}
                    className="rounded-3xl border border-black/5 bg-white px-4 py-5 shadow-sm"
                  >
                    <p className="text-2xl font-semibold text-[#171411]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm leading-5 text-[#71675c]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
          <div className="rounded-[2rem] border border-black/8 bg-[#fbf8f2] p-6 shadow-xl shadow-black/5 sm:p-8">
            <p className="text-lg leading-8 text-[#554c43]">{t.about.text}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {t.about.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-black/8 bg-white p-4 text-sm font-semibold leading-6 text-[#171411]"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-[#f7f3ec] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow={t.portfolio.eyebrow}
              title={t.portfolio.title}
              intro={t.portfolio.intro}
            />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.portfolio.projects.map((project) => (
              <article
                key={project.link}
                className="group flex min-h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/8 bg-white shadow-xl shadow-[#8a735a]/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#8a735a]/15"
              >
                <div className="relative h-60 overflow-hidden rounded-t-[1.75rem] bg-[#171411]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20" />
                  <div className="relative flex h-full flex-col justify-end p-6 text-white">
                    <span className="mb-4 w-fit rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-semibold leading-tight text-white drop-shadow-sm">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex-1 text-sm leading-7 text-[#62584d]">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[#171411] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2b251f]"
                  >
                    {t.portfolio.button}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="offer" className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionHeading eyebrow={t.offer.eyebrow} title={t.offer.title} />
          <div className="grid gap-4 sm:grid-cols-2">
            {t.offer.items.map((item, index) => (
              <div
                key={item}
                className="rounded-3xl border border-black/8 bg-[#fbf8f2] p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5"
              >
                <span className="mb-5 grid size-11 place-items-center rounded-2xl bg-[#171411] text-sm font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold leading-7 text-[#171411]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#f7f3ec] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} />
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {t.process.steps.map((step, index) => (
              <article
                key={step.title}
                className="relative rounded-3xl border border-black/8 bg-white p-6 shadow-lg shadow-[#8a735a]/8"
              >
                <span className="mb-8 inline-flex size-12 items-center justify-center rounded-2xl bg-[#ffe0a7] text-sm font-bold text-[#171411]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold text-[#171411]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#62584d]">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#171411] text-white shadow-2xl shadow-black/20">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.12fr_0.88fr] lg:p-10">
            <div className="rounded-[1.5rem] bg-white/[0.06] p-6 sm:p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#ffd28a]">
                {t.contact.eyebrow}
              </p>
              <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-5xl">
                {t.contact.title}
              </h2>
              <p className="mt-6 text-base leading-8 text-white/72">
                {t.contact.text}
              </p>
              <p className="mt-4 text-base leading-8 text-white/72">
                {t.contact.note}
              </p>
            </div>
            <div className="flex flex-col justify-between rounded-[1.5rem] bg-white p-6 text-[#171411] sm:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8a5b16]">
                  {t.contact.emailLabel}
                </p>
                <a
                  href={mailtoHref}
                  className="mt-4 block break-words text-2xl font-semibold leading-tight text-[#171411] transition hover:text-[#8a5b16]"
                >
                  {email}
                </a>
              </div>
              <a
                href={mailtoHref}
                className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-[#d99b39] px-6 py-3 text-sm font-bold text-[#171411] shadow-lg shadow-[#d99b39]/25 transition hover:-translate-y-0.5 hover:bg-[#e7ad53]"
              >
                {t.contact.button}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/8 bg-[#f7f3ec] px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#62584d] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Mateusz Maciejewski. {t.footer.note}
          </p>
          <a className="font-semibold text-[#171411] transition hover:text-[#8a5b16]" href="#top">
            {t.footer.backTop}
          </a>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#9b6a1b]">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold leading-tight text-[#171411] sm:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#62584d]">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
