/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Video, 
  Users, 
  TrendingUp, 
  Zap, 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Instagram,
  Target,
  BarChart3,
  Layers
} from 'lucide-react';

// --- Types ---

interface CaseStudy {
  id: string;
  title: string;
  role: string;
  period: string;
  context: string;
  myRole: string;
  whatIDid: string[];
  results: string[];
  color: string;
  folderLink?: string;
  videos?: string[];
  amazonStreams?: string[];
}

// --- Data ---

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'maree',
    title: 'MAREE',
    role: 'Lead Creative Producer',
    period: 'окт 2023 — сент 2024',
    context: 'Maree — косметический бренд, ориентированный на рынок США. Основная воронка: таргетированная реклама в Facebook/Instagram → лендинг → покупка на Amazon. Моя задача — выстроить стабильный поток ROAS-позитивных креативов и масштабировать производство.',
    myRole: 'Лидировала креативный продакшен полного цикла: от сценария до финального крео. В моей команде — 2 ассистента, 2 дизайнера статики, motion-дизайнер. Параллельно работала с командой из 5 байеров и запускала внутренний influence-отдел с нуля.',
    whatIDid: [
      'Писала сценарии для UGC-видео — 15 оригинальных роликов в месяц.',
      'Каждый месяц формировала и тестировала 10 новых гипотез, анализировала результаты.',
      'Выстроила процессы так, что объём производства вырос в 2 раза — с ~100 до 200+ креативов в месяц.',
    ],
    results: [
      'Стабильный ежемесячный KPI на протяжении всего года.',
      '4 креатива категории A — ROAS целевой, spend $1500+',
      '15 креативов категории B — spend $500+',
      '25 креативов категории C — spend $100+',
      'Объём продакшена вырос в 2 раза.'
    ],
    color: 'bg-emerald-50',
    folderLink: 'https://drive.google.com/drive/folders/1n3eMOc5t0xtM-n_Kjj4Fh7VRYNL9lWzD?usp=share_link',
    videos: [
      'https://vimeo.com/1178715295',
      'https://vimeo.com/1178715754',
      'https://vimeo.com/1178716877'
    ]
  },
  {
    id: 'influence',
    title: 'MAREE',
    role: 'Lead Influence Manager',
    period: 'окт 2023 — сент 2024',
    context: 'Maree — косметический бренд, ориентированный на рынок США. Задача — запустить influence-направление с нуля и выстроить стабильный процесс: от отбора блогеров до аналитики результатов.',
    myRole: 'Единственный человек, отвечавший за influence-направление. Выстраивала процесс с нуля: отбор кандидатов, согласование интеграций, договорная работа, логистика и аналитика.',
    whatIDid: [
      'Оценивала релевантность каждого кандидата и согласовывала интеграции.',
      'Контролировала подписание договоров с блогерами и подрядными агентствами.',
      'Организовывала отправку продукта и собирала статистику по каждой кампании.',
      'В пиковые месяцы — до 100 интеграций одновременно с платными и аффилиатными блогерами.'
    ],
    results: [
      '1000+ продаж с influence-канала.',
      'Influence-направление выстроено с нуля до стабильно работающего процесса.',
      'До 100 активных интеграций в месяц в пиковые периоды.'
    ],
    color: 'bg-emerald-50',
    videos: [
      'https://vimeo.com/1188974687',
      'https://vimeo.com/1188975126',
      'https://vimeo.com/1188976238'
    ]
  },
  {
    id: 'amazon-live',
    title: 'MAREE',
    role: 'Lead Influence Manager · Amazon Live',
    period: 'окт 2023 — сент 2024',
    context: 'Запуск Amazon Live — формата live-стримов с блогерами напрямую на площадке Amazon. Новый канал продаж для бренда Maree на рынке США.',
    myRole: 'Организовывала и продюсировала всё направление Amazon Live: координация с инфлюенс-менеджерами, подбор блогеров, согласование и контроль выхода стримов.',
    whatIDid: [
      'Подбирала блогеров под формат Amazon Live совместно с инфлюенс-менеджерами.',
      'Согласовывала интеграции и контролировала выход стримов.',
      'В пиковые месяцы — до 20 стримов в месяц.'
    ],
    results: [
      '100+ продаж ежемесячно с Amazon Live-канала.',
      'До 20 стримов в месяц в пиковые периоды.',
      'Новый канал продаж запущен с нуля до стабильных результатов.'
    ],
    color: 'bg-emerald-50',
    amazonStreams: [
      'https://www.amazon.com/live/broadcast/5bf3345b-cfac-45e6-bb0c-0b39e4f00147?ref=cm_sw_al_sgEidoh0zj5Uz__',
      'https://www.amazon.com/live/broadcast/08567152-4cd1-43fe-b8cf-436a228c0360?ref=cm_sw_al_kqN7eHU97kc6m__',
      'https://www.amazon.com/live/broadcast/7eb8db18-8813-4b3f-aa63-75475d510bbd?ref=cm_sw_al_rgLPqdCPS8stj__'
    ]
  },
  {
    id: 'style-dna',
    title: 'STYLE DNA',
    role: 'Lead UGC Producer',
    period: 'проектная работа',
    context: 'Style DNA — мобильное приложение. Задача: привлечение установок через таргетированную рекламу в Facebook, Instagram и Pinterest. Работала в небольшой команде: я, моушн-дизайнер и 3 байера — и закрывала весь UGC-процесс в одиночку.',
    myRole: 'Единственный UGC-продюсер на проекте. Полный цикл — от поиска креаторов до финального согласования с заказчиком.',
    whatIDid: [
      'Подбирала креаторов на Fiverr и Insense.',
      'Писала сценарии, согласовывала образы и референсы.',
      'Отбирала удачные кадры, ставила ТЗ моушн-дизайнеру.',
      'Участвовала в брейнштормах, формировала гипотезы, анализировала статистику.',
      'Помогала SMM-команде в создании трендовых роликов для официального аккаунта.',
      'В месяц отдавала 15+ UGC-роликов в тест.'
    ],
    results: [
      'Полностью закрыла UGC-направление в одиночку — без продюсерской команды.',
      'Лучший ролик: CTR 1,50% / 1 299 установок приложения.'
    ],
    color: 'bg-indigo-50',
    folderLink: 'https://drive.google.com/drive/folders/1aiF0juhclPkBJNVq0I4iv4jDG6-7Qdcx?usp=share_link',
    videos: [
      'https://vimeo.com/1178718615',
      'https://vimeo.com/1178719706',
      'https://vimeo.com/1178720234'
    ]
  },
  {
    id: 'reliz',
    title: 'RELIZ',
    role: 'Creative Producer',
    period: 'ноябрь 2022 — август 2023',
    context: 'RELIZ — агентство performance-маркетинга. Работала с крупными российскими брендами (Lamoda, ЦИАН, Яндекс Маркет, Yappy) и зарубежными клиентами, мобильными играми (King\'s Throne) и внутренними продуктами (Slowdive, Nandy).',
    myRole: 'Креативный продюсер полного цикла: концепция → сценарий → раскадровка → финальный крео. В команде — 3 дизайнера статики, 3 моушн-дизайнера, 6 байеров. Ежедневно закрывала 5-7 задач разной сложности.',
    whatIDid: [
      'Основной фокус — анимационные форматы: 2D, 3D моушн, статика.',
      'Продюсировала живые UGC-съёмки для Yappy.',
      'Разрабатывала playable ads — интерактивные форматы для мобильных игр.',
      'Для внутренних продуктов (Slowdive, Nandy) писала сценарии и вела продакшен от идеи до выхода.',
      'Внедряла AI-инструменты: генерация изображений, AI-озвучка, анимация — ускорило цикл производства.'
    ],
    results: [
      'Стабильное закрытие 5-7 задач в день в многоклиентском режиме.',
      'Внедрение AI-инструментов в продакшен-процесс команды.',
      'Опыт в playable ads — понимание и механики, и креатива.'
    ],
    color: 'bg-orange-50',
    folderLink: 'https://drive.google.com/drive/folders/1nAmUfxw8z543CA4rDZ8C1xGBtRfNGTx5?usp=share_link',
    videos: [
      'https://vimeo.com/860963264',
      'https://vimeo.com/1178776818',
      'https://vimeo.com/792918757'
    ]
  },
  {
    id: 'borscht',
    title: 'BORSCHT',
    role: 'Creative Producer',
    period: 'сент 2020 — июнь 2022',
    context: 'Borscht — агентство мобильного маркетинга. Вела производство видеокреативов для performance-кампаний: живые съёмки и анимация для брендов разного масштаба (бюджеты до 10 млн руб).',
    myRole: 'Продюсер полного цикла: от концепции и сценария до финального монтажа. Одновременно вела до 3 клиентов в неделю. В команде — 2 дизайнера, 2 моушн-дизайнера, оператор и база фрилансеров ~10 человек.',
    whatIDid: [
      'Живые съёмки — TikTok-ролики, UGC, крупные продакшены. Составляла сметы и управляла бюджетом.',
      'Анимация — 2D, 3D, стоп-моушен. Писала ТЗ для моушн-команды, контролировала качество.',
      'Всего — до 50 оригинальных роликов в месяц.'
    ],
    results: [
      '80% клиентов стабильно возвращались за новыми роликами.',
      'Собрала собственную базу актёров для быстрого кастинга.',
      'Агентство вышло на новых клиентов и усилило экспертизу в съёмочных форматах.'
    ],
    color: 'bg-rose-50',
    folderLink: 'https://drive.google.com/drive/folders/1PQdoTE7g6kFFVpb8e0HE6RWc_uX3rbac?usp=share_link',
    videos: [
      'https://vimeo.com/696457825',
      'https://vimeo.com/696447313',
      'https://vimeo.com/696471275'
    ]
  }
];

const BRANDS = [
  'VK', 'Яндекс Маркет', 'Lamoda', 'Maree', 'ЦИАН', 'Yappy', 'Slowdive', 'Nandy', 'Style DNA', 'Flowwow', 'Avgust'
];

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <span className="font-sans font-bold text-xl tracking-tight">ALINA BULATOVA</span>
      <div className="hidden md:flex gap-8">
        <a href="#cases" className="text-sm font-medium hover:text-emerald-600 transition-colors">Кейсы</a>
        <a href="#about" className="text-sm font-medium hover:text-emerald-600 transition-colors">Обо мне</a>
        <a href="#contact" className="text-sm font-medium hover:text-emerald-600 transition-colors">Контакты</a>
      </div>
      <a 
        href="https://t.me/alinyshek" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-emerald-600 transition-all"
      >
        Написать мне
      </a>
    </div>
  </nav>
);

const CaseCard: React.FC<{ study: CaseStudy; index: number }> = ({ study, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`p-8 md:p-12 rounded-3xl ${study.color} mb-12 last:mb-0 border border-black/5`}
  >
    <div className="flex flex-col lg:flex-row gap-12">
      <div className="lg:w-1/3">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-black/40">Кейс</span>
          <div className="h-px flex-1 bg-black/10" />
        </div>
        <h3 className="text-4xl font-bold mb-2">{study.title}</h3>
        <p className="text-emerald-600 font-semibold mb-6">{study.role}</p>
        <div className="flex items-center gap-2 text-sm text-black/50 mb-8">
          <TrendingUp size={16} />
          <span>{study.period}</span>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-3 flex items-center gap-2">
              <Target size={14} /> Контекст
            </h4>
            <p className="text-sm leading-relaxed text-black/70">{study.context}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-3 flex items-center gap-2">
              <Users size={14} /> Моя роль
            </h4>
            <p className="text-sm leading-relaxed text-black/70">{study.myRole}</p>
          </div>
        </div>
      </div>

      <div className="lg:w-2/3 flex flex-col gap-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/50 p-6 rounded-2xl border border-black/5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-4 flex items-center gap-2">
              <Layers size={14} /> Что делала
            </h4>
            <ul className="space-y-3">
              {study.whatIDid.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-black/80">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/50 p-6 rounded-2xl border border-black/5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-4 flex items-center gap-2">
              <BarChart3 size={14} /> Результаты
            </h4>
            <ul className="space-y-3">
              {study.results.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed font-medium text-black/90">
                  <Zap size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {study.videos && (
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 flex items-center gap-2">
              <Video size={14} /> Избранные видео
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {study.videos.map((videoUrl, i) => {
                const videoId = videoUrl.split('/').pop();
                return (
                  <div key={i} className="aspect-[9/16] rounded-2xl overflow-hidden bg-black/5 border border-black/5 shadow-sm">
                    <iframe
                      src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                      title={`${study.title} Video ${i + 1}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {study.amazonStreams && (
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 flex items-center gap-2">
              <Video size={14} /> Amazon Live Streams
            </h4>
            <div className="flex flex-wrap gap-3">
              {study.amazonStreams.map((url, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400/20 border border-amber-300/40 text-sm font-bold text-amber-800 hover:bg-amber-400/40 transition-all"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  Stream {i + 1}
                  <ArrowRight size={14} />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-3/5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Lead Creative Producer
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
              Создаю креативы, которые <span className="text-emerald-500 italic">масштабируют</span> бизнес.
            </h1>
            <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-10 max-w-2xl">
              7+ лет опыта в видео, UGC, анимации и playable ads. Веду полный цикл продакшена — от концепции до финального крео. Лидировала команды до 6 человек, управляла бюджетами съёмок, выстраивала процессы с нуля.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#cases" className="bg-black text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-emerald-600 transition-all group">
                Смотреть кейсы <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-black/10 text-sm font-medium">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/40/40`} 
                      className="w-8 h-8 rounded-full border-2 border-white"
                      alt="Client"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <span>200+ креативов в месяц</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:w-2/5 relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden bg-zinc-100 relative z-10 border border-black/5">
              <img 
                src="https://drive.google.com/thumbnail?id=15wbAbJIjwjevcPndLhVbr0LXUcnj_PyD&sz=w1000" 
                alt="Alina Bulatova" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-100 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Brands Ticker */}
      <section className="py-12 border-y border-black/5 overflow-hidden bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30 text-center">Работала с брендами</p>
        </div>
        <div className="flex whitespace-nowrap gap-12 animate-marquee">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span key={i} className="text-2xl md:text-3xl font-bold text-black/20 hover:text-black/40 transition-colors cursor-default">
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* About Summary */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Умею придумывать и доводить до результата.</h2>
              <p className="text-lg text-black/60 leading-relaxed mb-6">
                Работала с VK, Яндекс Маркет, Lamoda, Maree, мобильными приложениями и играми. Удвоила объём продакшена в Maree — 200+ креативов в месяц при стабильном ROAS-позитивном KPI.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-zinc-50 border border-black/5">
                  <div className="text-3xl font-bold text-emerald-500 mb-1">7+ лет</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-black/40">Опыта в продакшене</div>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-50 border border-black/5">
                  <div className="text-3xl font-bold text-emerald-500 mb-1">200+</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-black/40">Крео в месяц</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: <Video size={20} />, title: 'Video Production', desc: 'Полный цикл от идеи до монтажа' },
                { icon: <Users size={20} />, title: 'UGC & Influence', desc: 'Работа с креаторами и лидерами мнений' },
                { icon: <Zap size={20} />, title: 'Playable Ads', desc: 'Интерактивные форматы для игр' },
                { icon: <TrendingUp size={20} />, title: 'Performance Focus', desc: 'Ориентация на ROAS и KPI' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 rounded-2xl border border-black/5 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-emerald-500 border border-black/5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-black/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-5xl font-bold mb-4 tracking-tight">Избранные кейсы</h2>
              <p className="text-black/50 max-w-md">Примеры проектов, где я выстраивала процессы и достигала целевых показателей.</p>
            </div>
          </div>

          <div className="space-y-12">
            {CASE_STUDIES.map((study, index) => (
              <CaseCard key={study.id} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Experience Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 text-[10px] font-bold uppercase tracking-widest text-black/40 mb-16">
            ✦ ДОПОЛНИТЕЛЬНЫЙ ОПЫТ (НАВЕДИ, ЧТОБЫ УВИДЕТЬ)
          </div>

          <div className="space-y-4">
            {[
              { text: "СОЗДАЛА UGC-ПЛАТФОРМУ ДЛЯ КРЕАТОРОВ ПО ВСЕМУ СНГ", highlight: "UGC-ПЛАТФОРМУ", link: "https://ugccreator.ru/" },
              { text: "РАЗРАБАТЫВАЮ МИНИ-ИГРЫ ДЛЯ МЕССЕНДЖЕРОВ (VIBE CODING)", highlight: "VIBE CODING" },
              { text: "РАБОТАЛА В НЕЗАВИСИМОЙ КРЕАТИВНОЙ КОМАНДЕ ПОД РУКОВОДСТВОМ СОНЧИ УТОЧКИНОЙ", highlight: "СОНЧИ УТОЧКИНОЙ", link: "https://t.me/x_sonchy" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileHover={{ opacity: 1, x: 20 }}
                className="group flex items-center gap-8 py-8 border-b border-black/5 cursor-default transition-all duration-500"
              >
                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                  <div className="w-6 h-6 bg-[#CCFF00] rotate-45 group-hover:scale-150 transition-transform duration-500" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
                </div>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none uppercase">
                  {item.text.split(item.highlight).map((part, index, array) => (
                    <React.Fragment key={index}>
                      {part}
                      {index < array.length - 1 && (
                        <span className="relative inline-block">
                          {item.link ? (
                            <a 
                              href={item.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-emerald-500 transition-colors duration-300"
                            >
                              {item.highlight}
                            </a>
                          ) : (
                            item.highlight
                          )}
                          <div className="absolute -bottom-2 left-0 w-full h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Готовы запустить <br /> <span className="text-emerald-400">лучший</span> креатив?</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Если вам нужен продюсер, который понимает и творческую, и цифровую сторону маркетинга — давайте обсудим ваш проект.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://t.me/alinyshek" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-emerald-500 text-black px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-all flex items-center justify-center gap-3"
            >
              Написать в Telegram <ArrowRight size={20} />
            </a>
            <a 
              href="mailto:bulatova.alinaa@gmail.com" 
              className="w-full md:w-auto bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3"
            >
              <Mail size={20} /> Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-black/5 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="font-bold text-lg mb-2">ALINA BULATOVA</div>
            <p className="text-sm text-black/40">© 2024 Lead Creative Producer. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/alina-bulatova-007343242/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-100 hover:bg-emerald-100 hover:text-emerald-600 transition-all"><Linkedin size={20} /></a>
            <a href="https://www.instagram.com/alinyshek_/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-100 hover:bg-emerald-100 hover:text-emerald-600 transition-all"><Instagram size={20} /></a>
            <a href="https://t.me/alinyshek" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-100 hover:bg-emerald-100 hover:text-emerald-600 transition-all flex items-center gap-2 px-5">
              <span className="text-sm font-bold">TG</span>
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
