/**
 * Configuração do site — Dra. Cynthia Netto de Barros
 * Conteúdo em conformidade com Res. CFM 2.336/2023 e LGPD (Lei 13.709/2018)
 */

// ─── Contato ───────────────────────────────────────────────────────────────

export const WHATSAPP_PHONE = "5531984184586";
export const WHATSAPP_DISPLAY = "(31) 98418-4586";
export const EMAIL = "mamasemfoco@gmail.com";
export const INSTAGRAM = "@dracynthianetto";
export const INSTAGRAM_URL = "https://www.instagram.com/dracynthianetto";

export const WHATSAPP_MESSAGE =
  "Olá, Dra. Cynthia. Estou entrando em contato pelo site e gostaria de agendar uma consulta.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const PRIVACY_EMAIL = EMAIL;
export const DPO_EMAIL = EMAIL;

export const VELTRO_DIGITAL_NAME = "Veltro Digital";
export const VELTRO_DIGITAL_URL = "https://www.veltrodigital.com.br";

// ─── Profissional ──────────────────────────────────────────────────────────

export const CLINIC_NAME = "Consultório Dra. Cynthia Netto";
export const DOCTOR_NAME = "Dra. Cynthia Netto de Barros";
export const DOCTOR_NAME_SHORT = "Dra. Cynthia Netto";
export const CRM = "CRM/MG 29435";
export const RQES = [
  { number: "28999", specialty: "Ginecologia e Obstetrícia" },
  { number: "18870", specialty: "Mastologia" },
] as const;

/** Formato exigido pela Res. CFM 2.336/2023 */
export const PROFESSIONAL_IDENTIFICATION = `MÉDICA · ${DOCTOR_NAME} · ${CRM}`;

export const DOCTOR_TAGLINE =
  "Ginecologia · Mastologia · Saúde Íntima Feminina · Cirurgia Videolaparoscópica";

export const CITY = "Belo Horizonte";
export const STATE = "MG";
export const NEIGHBORHOOD = "Santa Efigênia";

export const ADDRESS_STREET = "Rua Ceará, 195 – 7º andar, Conj. 708";
export const ADDRESS_NEIGHBORHOOD = "Santa Efigênia";
export const ADDRESS_CITY = `${CITY} — ${STATE}`;
export const ADDRESS_CEP = "30150-310";
export const ADDRESS_FULL = `${ADDRESS_STREET}, ${ADDRESS_NEIGHBORHOOD}, ${ADDRESS_CITY}, CEP ${ADDRESS_CEP}`;

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua+Ceará+195+Santa+Efigênia+Belo+Horizonte+MG";

export const BIO_PARAGRAPHS = [
  `${DOCTOR_NAME} é MÉDICA ginecologista, mastologista e cirurgiã, com atuação em endometriose (cirurgia videolaparoscópica), menopausa, rejuvenescimento íntimo, cânceres ginecológicos e câncer de mama — incluindo cirurgias mamárias estéticas e reconstrutoras. Aborda a saúde feminina de forma integrada.`,
  `Formada pela Faculdade de Medicina da UFMG em 1995, com residências em Ginecologia, Cirurgia Geral e Mastologia. Especialização em Cirurgia Videolaparoscópica, Cirurgia a Laser e Cosmiatria em instituições de Belo Horizonte, São Paulo, Estados Unidos e Europa. Aperfeiçoamento em Mastologia no Istituto Europeo di Oncologia, em Milão (Itália), com foco em Oncoplástica e Cirurgia Reconstrutora.`,
  `Com mais de duas décadas de experiência clínica, acolhe cada paciente com escuta ativa, ciência atualizada e abordagem humanizada — para que você se sinta bem, por dentro e por fora.`,
] as const;

export const STAT_YEARS = "25+";
export const STAT_SPECIALTIES = "10";
export const STAT_RQES = "2";

// ─── Sinais de alerta ──────────────────────────────────────────────────────

export const WARNING_SIGNS = [
  {
    title: "Cólica intensa ou incapacitante",
    description:
      "Dor pélvica frequente ou que interfere na rotina pode indicar endometriose, adenomiose ou miomatose — merece avaliação médica.",
  },
  {
    title: "Ressecamento vaginal e desconforto",
    description:
      "Sintomas comuns na menopausa que podem ser abordados com terapias modernas, mediante avaliação individualizada.",
  },
  {
    title: "Incontinência urinária",
    description:
      "Perda de urina ao tossir, rir ou fazer esforço não é normal. Existem opções de tratamento, como laser e cirurgia minimamente invasiva.",
  },
  {
    title: "Alterações hormonais",
    description:
      "Queda de libido, alterações de humor, insônia ou ganho de peso podem estar relacionados a desequilíbrios hormonais.",
  },
  {
    title: "Infecções genitais e HPV",
    description:
      "Colposcopia, biópsias e identificação do HPV e de outras ISTs fazem parte do acompanhamento ginecológico preventivo.",
  },
  {
    title: "Sangramentos irregulares",
    description:
      "Fluxo intenso, escapes frequentes ou sangramentos na menopausa devem ser investigados por uma ginecologista.",
  },
] as const;

// ─── Especialidades ────────────────────────────────────────────────────────

export type Specialty = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  /** ID do modelo BioDigital Human (anatomia 3D interativa) */
  biodigitalViewId: string;
  /** Vídeo educativo complementar (YouTube embed) */
  videoUrl?: string;
  color3d: string;
  icon: string;
};

export const SPECIALTIES: Specialty[] = [
  {
    id: "incontinencia",
    title: "Incontinência Urinária",
    shortDescription: "Avaliação e opções terapêuticas para perda urinária.",
    fullDescription:
      "A incontinência urinária de esforço e a urgência miccional são condições comuns, especialmente após gestações e na menopausa. Após avaliação clínica detalhada, podem ser indicadas opções como fisioterapia pélvica, laserterapia vaginal ou procedimentos cirúrgicos minimamente invasivos, conforme cada caso.",
    image: "/images/specialty-incontinencia.webp",
    biodigitalViewId: "production/femaleAdult/female_region_pelvis_10",
    videoUrl: "https://www.youtube.com/embed/dNp8-U8Y_gc",
    color3d: "#e8b4b8",
    icon: "droplets",
  },
  {
    id: "menopausa",
    title: "Menopausa",
    shortDescription: "Acompanhamento hormonal e qualidade de vida na maturidade.",
    fullDescription:
      "A menopausa traz mudanças hormonais que podem afetar o bem-estar físico e emocional. Com avaliação detalhada, são indicadas terapias hormonais individualizadas para controle de sintomas como ondas de calor, insônia, ressecamento vaginal e alterações de humor — sempre com acompanhamento médico regular.",
    image: "/images/specialty-menopausa.webp",
    biodigitalViewId: "production/femaleAdult/female_reproductive_cross_section_sagittal",
    videoUrl: "https://www.youtube.com/embed/qVBqxKqVZ8E",
    color3d: "#c97b84",
    icon: "heart-pulse",
  },
  {
    id: "hpv",
    title: "HPV, Biópsias e Colposcopia",
    shortDescription: "Rastreamento e acompanhamento de lesões cervicais.",
    fullDescription:
      "A colposcopia é um exame que permite visualizar o colo do útero com aumento, identificando lesões causadas pelo HPV ou outras condições. Biópsias direcionadas auxiliam no diagnóstico precoce. A vacinação contra o HPV é um importante fator de prevenção do câncer de colo uterino, complementar ao rastreamento periódico.",
    image: "/images/specialty-hpv.webp",
    biodigitalViewId: "production/femaleAdult/female_reproductive_cross_section_sagittal",
    videoUrl: "https://www.youtube.com/embed/lcLW5N_vYBM",
    color3d: "#7c9cbf",
    icon: "microscope",
  },
  {
    id: "oncologico",
    title: "Tratamento Oncológico",
    shortDescription: "Acompanhamento em cânceres ginecológicos e de mama.",
    fullDescription:
      "Atuação em cânceres ginecológicos e de mama, com experiência em cirurgia oncológica e reconstrutora. O acompanhamento abrange desde o diagnóstico até a reabilitação estética e funcional, em equipe multidisciplinar quando necessário.",
    image: "/images/specialty-oncologico.webp",
    biodigitalViewId: "production/femaleAdult/breast_cross_section",
    videoUrl: "https://www.youtube.com/embed/dNp8-U8Y_gc",
    color3d: "#9b7cb8",
    icon: "shield-plus",
  },
  {
    id: "rejuvenescimento",
    title: "Rejuvenescimento Íntimo",
    shortDescription: "Laserterapia vaginal para saúde íntima feminina.",
    fullDescription:
      "Procedimento realizado em consultório, com avaliação individualizada prévia. Utiliza plataforma de laser de CO2 fracionado, Erbium e YAG. São realizadas, inicialmente, 3 sessões com intervalo de 28 a 38 dias. Indicado para síndrome geniturinária da menopausa, flacidez vaginal, lubrificação e outras condições — conforme indicação médica.",
    image: "/images/specialty-rejuvenescimento.webp",
    biodigitalViewId: "production/femaleAdult/uterus_vagina_coronal_cross_section",
    videoUrl: "https://www.youtube.com/embed/dNp8-U8Y_gc",
    color3d: "#d4a5a9",
    icon: "sparkles",
  },
  {
    id: "diu",
    title: "DIU Hormonal e Não Hormonal",
    shortDescription: "Contracepção adaptada à sua fase de vida.",
    fullDescription:
      "DIUs hormonais ou sem hormônios, implantes hormonais e contraceptivos orais são opções de contracepção que serão adaptadas ao seu estilo de vida e fase da vida, após consulta e avaliação individualizada.",
    image: "/images/specialty-diu.webp",
    biodigitalViewId: "production/femaleAdult/female_reproductive_cross_section_sagittal",
    videoUrl: "https://www.youtube.com/embed/dNp8-U8Y_gc",
    color3d: "#6b9e8f",
    icon: "circle-dot",
  },
  {
    id: "videolaparoscopia",
    title: "Cirurgias Videolaparoscópicas",
    shortDescription: "Endometriose e cirurgias ginecológicas minimamente invasivas.",
    fullDescription:
      "Em alguns casos de endometriose, o tratamento clínico com progesteronas de última geração pode ser indicado. Quando a cirurgia é necessária, são utilizadas técnicas minimamente invasivas por videolaparoscopia, com recuperação mais rápida.",
    image: "/images/specialty-videolaparoscopia.webp",
    biodigitalViewId: "production/femaleAdult/female_reproductive_cross_section_sagittal",
    videoUrl: "https://www.youtube.com/embed/8viFSWE_t9Q",
    color3d: "#5a8fa8",
    icon: "scan",
  },
  {
    id: "cirurgias-intimas",
    title: "Cirurgias Íntimas",
    shortDescription: "Procedimentos estéticos e funcionais da região íntima.",
    fullDescription:
      "Cirurgias como ninfoplastia podem ser indicadas para mulheres que se sentem desconfortáveis com a estética ou função da região íntima. O procedimento é realizado com técnicas refinadas, após avaliação individualizada e esclarecimento sobre indicações, riscos e cuidados pós-operatórios.",
    image: "/images/specialty-cirurgias-intimas.webp",
    biodigitalViewId: "production/femaleAdult/female_reproductive_cross_section_sagittal",
    videoUrl: "https://www.youtube.com/embed/dNp8-U8Y_gc",
    color3d: "#b88c9e",
    icon: "scissors",
  },
  {
    id: "implantes",
    title: "Implantes Hormonais (Implanon)",
    shortDescription: "Contracepção de longa duração com implante subdérmico.",
    fullDescription:
      "O implante hormonal subdérmico (Implanon) é uma opção de contracepção de longa duração. Após consulta e avaliação das contraindicações, o procedimento de inserção é realizado em consultório.",
    image: "/images/specialty-implantes.webp",
    biodigitalViewId: "production/femaleAdult/female_reproductive_cross_section_sagittal",
    videoUrl: "https://www.youtube.com/embed/dNp8-U8Y_gc",
    color3d: "#8cb8a8",
    icon: "pill",
  },
  {
    id: "cosmiatria",
    title: "Cosmiatria Feminina",
    shortDescription: "Procedimentos estéticos ginecológicos em consultório.",
    fullDescription:
      "Procedimentos estéticos ginecológicos realizados em consultório, como clareamento genital, preenchimentos e toxina botulínica, mediante avaliação individualizada. Conteúdo informativo — cada caso requer consulta presencial para indicação adequada.",
    image: "/images/specialty-cosmiatria.webp",
    biodigitalViewId: "production/femaleAdult/female_region_pelvis_10",
    videoUrl: "https://www.youtube.com/embed/dNp8-U8Y_gc",
    color3d: "#c9a0b0",
    icon: "gem",
  },
];

// ─── FAQ ───────────────────────────────────────────────────────────────────

export const FAQ_ITEMS = [
  {
    question: "Como funciona o rejuvenescimento íntimo a laser?",
    answer:
      "Procedimento realizado em consultório, com avaliação individualizada prévia. Utiliza plataforma de laser de CO2 fracionado, Erbium e YAG. São realizadas, inicialmente, 3 sessões com intervalo de 28 a 38 dias. Pode ser indicado para síndrome geniturinária da menopausa, flacidez vaginal, lubrificação e outras condições — conforme indicação médica.",
  },
  {
    question: "A Dra. Cynthia realiza cirurgia de ninfoplastia?",
    answer:
      "Sim. A cirurgia pode ser indicada para mulheres que se sentem desconfortáveis com a estética ou função da região íntima. É realizada com técnicas refinadas, após avaliação individualizada e esclarecimento sobre indicações e cuidados.",
  },
  {
    question: "A menopausa pode ser tratada com hormônios?",
    answer:
      "Sim. Com avaliação detalhada, podem ser indicadas terapias hormonais individualizadas para controle de sintomas como ondas de calor, insônia, ressecamento vaginal e alterações de humor — sempre com acompanhamento médico.",
  },
  {
    question: "É possível tratar a endometriose sem cirurgia?",
    answer:
      "Sim, em alguns casos o tratamento clínico com progesteronas de última geração pode ser indicado. Quando a cirurgia é necessária, são utilizadas técnicas minimamente invasivas por videolaparoscopia.",
  },
  {
    question: "A Dra. também trata casos de câncer de mama?",
    answer:
      "Sim. A Dra. Cynthia é mastologista com experiência em cirurgia oncológica e reconstrutora, acompanhando desde o diagnóstico até a reabilitação estética e funcional.",
  },
] as const;

// ─── Como funciona a consulta ──────────────────────────────────────────────

export const CONSULTATION_STEPS = [
  {
    title: "Avaliação individualizada",
    description:
      "Cada mulher é única — o atendimento é personalizado, considerando sua fase da vida, sintomas, histórico e objetivos.",
  },
  {
    title: "Abordagem integral",
    description:
      "Mais do que tratar sintomas, buscamos compreender o contexto emocional, hormonal, íntimo e funcional para oferecer orientações completas.",
  },
  {
    title: "Tecnologia e cuidado humanizado",
    description:
      "Recursos modernos como laserterapia, videolaparoscopia e terapias hormonais, aliados a escuta ativa e empatia em cada atendimento.",
  },
  {
    title: "Esclarecimento e planejamento",
    description:
      "Durante a consulta, você recebe orientações detalhadas, com tempo e atenção para tirar todas as suas dúvidas.",
  },
] as const;

// ─── Conformidade ──────────────────────────────────────────────────────────

export const CONTENT_DISCLAIMER =
  "Os textos deste site têm caráter exclusivamente informativo e educativo. Não substituem consulta, avaliação ou atendimento médico individualizado. Cada paciente é única — entre em contato para agendar uma avaliação com a médica.";

export const LEGAL_FOOTER_NOTICE = `Publicidade profissional em conformidade com a Resolução CFM nº 2.336/2023. ${PROFESSIONAL_IDENTIFICATION}. RQE ${RQES.map((r) => r.number).join(" e ")} (${RQES.map((r) => r.specialty).join(" · ")}).`;

export const PRIVACY_POLICY_PATH = "/privacidade";
export const TERMS_PATH = "/termos";

// ─── SEO ───────────────────────────────────────────────────────────────────

export const SITE_URL = "https://dracynthianetto.com.br";

export const SITE_TITLE = `${DOCTOR_NAME_SHORT} — MÉDICA Ginecologista e Mastologista · ${CITY}`;

export const SITE_DESCRIPTION = `${DOCTOR_TAGLINE}. Atendimento com ${DOCTOR_NAME}, ${CRM}, em ${CITY}. Agende sua consulta.`;

export const OG_DESCRIPTION = `Ginecologista e mastologista em ${CITY}. ${CRM}. Saúde íntima feminina, menopausa, endometriose e cirurgia videolaparoscópica.`;
