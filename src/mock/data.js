import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '中野人事法務事務所', // e.g: 'Name | Developer'
  lang: 'jp', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'ようこそ',
  name: '中野人事法務事務所',
  subtitle: '中小ベンチャー企業の社外人事＆法務',
  cta: '詳しくはこちら',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '中野人事法務事務所は、人事面では、企業理念の策定・浸透、評価・賃金制度の構築、採用面接の同席コンサルティング、マネジャーや一般社員向けの各種研修、雇用契約書や就業規則の作成、社会保険の各種手続き、給与システムの導入その他人事業務に関するご相談を 承っています。',
  paragraphTwo: 'また、法務面では、株式会社や有限会社の設立、取引先との契約書の作成やチェック、内容証明郵便の作成、日常的な企業法務に関するご相談を承っています。',
  paragraphThree: '',
  resume: 'https://buzip.net/tokyo/nakano-jinji/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'jinji.jpg',
    title: '人事顧問',
    info: 'あなたを強力にサポートする社外人事ブレーン',
    info2: `人事に関すること以外にも得意なことがありますので、 私ができることであれば何でもやります、というスタンスです。
    依頼業務の中には私が経験したことのないものもあります。 そのような場合でも、大半は正直にその旨を伝えた上で、 業務を承って仕事を行うケースが多いです。
    社長様や人事ご担当者様のよきブレーンとして、 お役に立ちたいという願いを胸に、 スピーディーかつ丁寧な仕事をするよう、心がけております。
    ご興味･ご関心のある方は、ぜひお問い合わせください！`,
    url: 'http://www.nakano-sr.com/question.htm',
  },
  {
    id: nanoid(),
    img: 'houmu.jpg',
    title: '雇用契約書の作成',
    info: '雇用契約のリスクマネジメント、できていますか',
    info2: `当事務所では、雇用時の「雇用契約書」、雇用中の「就業規則」、退職時の「退職に当たっての合意書」の3点セットで、雇用に伴う企業側のリスクを軽減させる 取り組みを行っています。
    トラブルが起こってからでは遅いです。今のうちに守りを固めてはいかがでしょうか？`,
    url: 'http://www.nakano-sr.com/question.htm',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'お電話：03-6914-8848（営業時間 9～17時 土日祝休み）',
  btn: 'メールでのお問い合わせ',
  email: 'info@nakano-sr.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/sugawitter',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
