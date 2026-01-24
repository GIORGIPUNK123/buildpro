export type Locale = 'en' | 'ka';

export const supportedLocales: {
  value: Locale;
  label: string;
  nativeName: string;
}[] = [
  { value: 'en', label: 'English', nativeName: 'English' },
  { value: 'ka', label: 'Georgian', nativeName: 'ქართული' },
];

export const fallbackLocale: Locale = 'en';

type NavLink = { label: string; href: string };
type TitleDescription = { title: string; description: string };

type SectionStat = { number: string; label: string };
type ProcessStep = { title: string; description: string; number: string };
type ProjectItem = { title: string; description: string; tags: string[] };
type TestimonialItem = {
  name: string;
  role: string;
  content: string;
  rating: number;
};
type FaqItem = { question: string; answer: string };
type CtaStat = { value: string; label: string };
type TechStackCopy = { title: string; highlight: string; subtitle: string };
type FooterLink = { label: string; href: string };

export type Messages = {
  header: { brand: string; nav: NavLink[]; cta: string };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stats: SectionStat[];
  };
  services: {
    title: string;
    highlight: string;
    subtitle: string;
    items: TitleDescription[];
  };
  whyChooseUs: {
    title: string;
    highlight: string;
    subtitle: string;
    items: TitleDescription[];
    ctaPrompt: string;
    ctaLabel: string;
  };
  process: {
    title: string;
    highlight: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  techStack: TechStackCopy;
  projects: {
    title: string;
    highlight: string;
    subtitle: string;
    items: ProjectItem[];
    visitLabel: string;
    codeLabel: string;
  };
  testimonials: {
    title: string;
    highlight: string;
    subtitle: string;
    items: TestimonialItem[];
  };
  cta: {
    badge: string;
    headingLine1: string;
    headingLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stats: CtaStat[];
  };
  faq: {
    title: string;
    highlight: string;
    subtitle: string;
    items: FaqItem[];
  };
  contact: {
    title: string;
    highlight: string;
    subtitle: string;
    getInTouch: string;
    emailLabel: string;
    emailValue: string;
    locationLabel: string;
    locationValue: string;
    responseLabel: string;
    responseValue: string;
    connectLabel: string;
    linkedin: string;
    emailCta: string;
    formTitle: string;
    fieldName: string;
    fieldEmail: string;
    fieldMessage: string;
    submitDisabled: string;
    disabledNote: string;
  };
  footer: {
    description: string;
    quickLinksTitle: string;
    contactTitle: string;
    linkedIn: string;
    madeWith: string;
    byline: string;
    quickLinks: FooterLink[];
  };
};

export const messages: Record<Locale, Messages> = {
  en: {
    header: {
      brand: 'BuildPro',
      nav: [
        { label: 'Home', href: '#home' },
        { label: 'Services', href: '#services' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
      ],
      cta: 'Get Started',
    },
    hero: {
      badge: 'Professional Web Solutions',
      titleLine1: 'Build Amazing',
      titleLine2: 'Websites That Convert',
      description:
        'We craft stunning, high-performance websites that elevate your brand and drive results. From concept to launch, we bring your vision to life.',
      primaryCta: 'Start Your Project',
      secondaryCta: 'View Our Work',
      stats: [
        { number: '50+', label: 'Projects' },
        { number: '30+', label: 'Happy Clients' },
        { number: '100%', label: 'Satisfaction' },
      ],
    },
    services: {
      title: 'What We',
      highlight: 'Offer',
      subtitle:
        'Comprehensive web solutions designed to elevate your online presence and drive business growth.',
      items: [
        {
          title: 'Custom Website Design',
          description:
            'Unique, pixel-perfect designs tailored to your brand identity and business goals.',
        },
        {
          title: 'Responsive Development',
          description:
            'Flawless performance across all devices - desktop, tablet, and mobile.',
        },
        {
          title: 'SEO Optimization',
          description:
            'Boost your visibility and rank higher in search results with our SEO expertise.',
        },
        {
          title: 'Clean Code',
          description:
            'Well-structured, maintainable code following industry best practices.',
        },
        {
          title: 'Lightning Fast',
          description:
            'Optimized performance for blazing fast load times and smooth interactions.',
        },
        {
          title: 'Security First',
          description:
            'Enterprise-grade security measures to protect your website and data.',
        },
      ],
    },
    whyChooseUs: {
      title: 'Why',
      highlight: 'Choose Us',
      subtitle:
        "We're not just another web development agency. Here's what makes us different.",
      items: [
        {
          title: 'Expert Team',
          description:
            'Our experienced developers and designers bring years of expertise to every project.',
        },
        {
          title: 'Results-Driven',
          description:
            'We focus on creating websites that convert visitors into customers and drive real business growth.',
        },
        {
          title: 'On-Time Delivery',
          description:
            'We respect your time and always deliver projects on schedule without compromising quality.',
        },
        {
          title: '24/7 Support',
          description:
            'Our dedicated support team is always available to help you with any questions or issues.',
        },
        {
          title: 'Scalable Solutions',
          description:
            'We build websites that grow with your business, ensuring long-term success and flexibility.',
        },
        {
          title: 'Client-Focused',
          description:
            'Your satisfaction is our priority. We work closely with you to ensure your vision comes to life.',
        },
      ],
      ctaPrompt: 'Ready to experience the difference?',
      ctaLabel: "Let's Get Started",
    },
    process: {
      title: 'Our',
      highlight: 'Process',
      subtitle:
        'A proven approach that delivers exceptional results every time.',
      steps: [
        {
          title: 'Discovery',
          description:
            'We start by understanding your business goals, target audience, and project requirements through detailed consultation.',
          number: '01',
        },
        {
          title: 'Design',
          description:
            'Our designers create stunning mockups and prototypes that align with your brand and vision.',
          number: '02',
        },
        {
          title: 'Development',
          description:
            'We bring designs to life with clean, efficient code and modern web technologies.',
          number: '03',
        },
        {
          title: 'Launch',
          description:
            'After thorough testing, we deploy your website and provide ongoing support and maintenance.',
          number: '04',
        },
      ],
    },
    techStack: {
      title: 'Technologies',
      highlight: 'We Use',
      subtitle:
        'Building with the latest and most powerful tools in the industry.',
    },
    projects: {
      title: 'Recent',
      highlight: 'Projects',
      subtitle:
        "Explore our latest work and see how we've helped businesses succeed online.",
      items: [
        {
          title: 'Portfolio Website',
          description:
            'An interactive portfolio featuring a unique terminal interface, showcasing projects and professional information.',
          tags: ['React', 'TypeScript', 'Terminal UI'],
        },
        {
          title: 'Landing Page',
          description:
            'Modern landing page design showcasing advanced CSS animations and responsive design principles.',
          tags: ['HTML', 'CSS', 'JavaScript'],
        },
        {
          title: 'Coming Soon',
          description:
            'An exciting new project currently in development. Stay tuned for updates!',
          tags: ['In Progress'],
        },
      ],
      visitLabel: 'Visit Site',
      codeLabel: 'View Code',
    },
    testimonials: {
      title: 'What Our',
      highlight: 'Clients Say',
      subtitle:
        "Don't just take our word for it - hear from some of our satisfied clients.",
      items: [
        {
          name: 'Sarah Johnson',
          role: 'CEO, TechStart Inc',
          content:
            'Working with BuildPro was an absolute pleasure. They delivered a stunning website that exceeded our expectations and helped increase our conversions by 150%.',
          rating: 5,
        },
        {
          name: 'Michael Chen',
          role: 'Founder, DesignHub',
          content:
            'The attention to detail and professionalism is unmatched. Our new website has received countless compliments from clients and partners alike.',
          rating: 5,
        },
        {
          name: 'Emily Rodriguez',
          role: 'Marketing Director, GrowthCo',
          content:
            'Not only did they build a beautiful website, but they also provided excellent support and guidance throughout the entire process. Highly recommended!',
          rating: 5,
        },
      ],
    },
    cta: {
      badge: 'Ready to Get Started?',
      headingLine1: "Let's Build Something",
      headingLine2: 'Amazing Together',
      description:
        'Transform your vision into reality with a stunning website that drives results. Get in touch today for a free consultation.',
      primaryCta: 'Start Your Project',
      secondaryCta: 'View Our Work',
      stats: [
        { value: '50+', label: 'Projects Completed' },
        { value: '30+', label: 'Happy Clients' },
        { value: '5+', label: 'Years Experience' },
        { value: '100%', label: 'Success Rate' },
      ],
    },
    faq: {
      title: 'Frequently Asked',
      highlight: 'Questions',
      subtitle:
        "Got questions? We've got answers. Find everything you need to know below.",
      items: [
        {
          question: 'How long does it take to build a website?',
          answer:
            'Project timelines vary based on complexity and requirements. A simple website typically takes 2-4 weeks, while more complex projects may take 6-12 weeks. We provide a detailed timeline during our initial consultation.',
        },
        {
          question: 'What is your development process?',
          answer:
            'We follow a structured 4-step process: Discovery (understanding your needs), Design (creating mockups), Development (building the site), and Launch (testing and deployment). We maintain clear communication throughout each phase.',
        },
        {
          question: 'Do you provide ongoing support after launch?',
          answer:
            "Yes! We offer various maintenance and support packages to ensure your website stays up-to-date, secure, and performing optimally. We're here to help you grow long-term.",
        },
        {
          question: 'Can you help with SEO and digital marketing?',
          answer:
            'Absolutely! All our websites are built with SEO best practices in mind. We can also provide guidance on digital marketing strategies to help you reach your target audience effectively.',
        },
        {
          question: 'What technologies do you use?',
          answer:
            'We use modern, industry-standard technologies including React, TypeScript, Tailwind CSS, and more. We choose the best tech stack based on your specific project requirements.',
        },
        {
          question: 'How much does a website cost?',
          answer:
            'Project costs vary based on scope, features, and complexity. We offer flexible pricing and packages to suit different budgets. Contact us for a free consultation and personalized quote.',
        },
      ],
    },
    contact: {
      title: "Let's",
      highlight: 'Work Together',
      subtitle:
        "Have a project in mind? Get in touch and let's create something amazing together.",
      getInTouch: 'Get In Touch',
      emailLabel: 'Email',
      emailValue: 'giorgirock@hotmail.com',
      locationLabel: 'Location',
      locationValue: 'Working Remotely',
      responseLabel: 'Response Time',
      responseValue: 'Within 24 hours',
      connectLabel: 'Connect With Us',
      linkedin: 'LinkedIn',
      emailCta: 'Email',
      formTitle: 'Send a Message',
      fieldName: 'Your Name',
      fieldEmail: 'Email Address',
      fieldMessage: 'Message',
      submitDisabled: 'Form Currently Disabled - Use Social Links',
      disabledNote: 'Please use LinkedIn or Email above to get in touch',
    },
    footer: {
      description:
        'Creating exceptional web experiences that drive results and exceed expectations.',
      quickLinksTitle: 'Quick Links',
      contactTitle: 'Contact',
      linkedIn: 'LinkedIn Profile',
      madeWith: 'Made with',
      byline: 'by BuildPro Team',
      quickLinks: [
        { label: 'Home', href: '#home' },
        { label: 'Services', href: '#services' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  },
  ka: {
    header: {
      brand: 'BuildPro',
      nav: [
        { label: 'მთავარი', href: '#home' },
        { label: 'სერვისები', href: '#services' },
        { label: 'პროექტები', href: '#projects' },
        { label: 'კონტაქტი', href: '#contact' },
      ],
      cta: 'დაიწყე',
    },
    hero: {
      badge: 'პროფესიონალური ვებ გადაწყვეტები',
      titleLine1: 'შექმენი საოცარი',
      titleLine2: 'ვებსაიტები, რომლებიც გარდაქმნის',
      description:
        'ვქმნით ლამაზ, მაღალპერფორმანსიან ვებსაიტებს, რომლებიც აძლიერებს ბრენდს და ზრდის შედეგებს.',
      primaryCta: 'დაიწყე პროექტი',
      secondaryCta: 'ნახე ჩვენი ნამუშევრები',
      stats: [
        { number: '50+', label: 'პროექტი' },
        { number: '30+', label: 'კმაყოფილი კლიენტი' },
        { number: '100%', label: 'დაკმაყოფილება' },
      ],
    },
    services: {
      title: 'რას',
      highlight: 'გთავაზობთ',
      subtitle:
        'ვქმნით ვებსაიტებს, რომლებიც თქვენს ბიზნესს ონლაინ ზრდაში ეხმარება.',
      items: [
        {
          title: 'ინდივიდუალური ვებ დიზაინი',
          description:
            'უნიკალური, პიქსელზე ზუსტი დიზაინები, მორგებული თქვენს ბრენდსა და მიზნებზე.',
        },
        {
          title: 'რესპონსიული განვითარება',
          description:
            'უპრობლემო მუშაობა ყველა მოწყობილობაზე — დესკტოპი, ტაბლეტი და მობილური.',
        },
        {
          title: 'SEO ოპტიმიზაცია',
          description:
            'გაზარდეთ თქვენი ხილვადობა და დაიკავეთ უფრო მაღალი პოზიცია საძიებო სისტემებში ჩვენი SEO ექსპერტიზის დახმარებით.',
        },
        {
          title: 'სუფთა კოდი',
          description:
            'კარგად სტრუქტურირებული, მარტივად სამართავი კოდი ინდუსტრიის საუკეთესო პრაქტიკებით.',
        },
        {
          title: 'სწრაფი შესრულება',
          description:
            'ოპტიმიზირებული წარმადობა ელვისებური ჩატვირთვის დროისა და შეუფერხებელი ურთიერთქმედებისთვის.',
        },
        {
          title: 'უსაფრთხოება პირველია',
          description:
            'კორპორაციული დონის უსაფრთხოების ზომები თქვენი საიტისა და მონაცემების დასაცავად.',
        },
      ],
    },
    whyChooseUs: {
      title: 'რატომ',
      highlight: 'ჩვენ',
      subtitle:
        'ჩვენ უბრალოდ მორიგი ვებ-გვერდების დამუშავების სააგენტო არ ვართ. აი, რა განგვასხვავებს ჩვენ.',
      items: [
        {
          title: 'ექსპერტების გუნდი',
          description:
            'ჩვენ უბრალოდ მორიგი ვებ-გვერდების დამუშავების სააგენტო არ ვართ. აი, რა განგვასხვავებს ჩვენ.',
        },
        {
          title: 'შედეგზე ორიენტირებული',
          description:
            'ვქმნით საიტებს, რომლებიც სტუმრებს კლიენტებად აქცევს და ზრდის რეალურ ბიზნეს შედეგებს.',
        },
        {
          title: 'დროის დაცვა',
          description:
            'ვსცემთ თქვენს დროს პატივს და ვაგზავნით პროექტებს დროზე ხარისხის დაკარგვის გარეშე.',
        },
        {
          title: '24/7 მხარდაჭერა',
          description:
            'ჩვენი მხარდაჭერის გუნდი ყოველთვის მზადაა დახმარებისთვის ნებისმიერი შეკითხვის შემთხვევაში.',
        },
        {
          title: 'მასშტაბირებადი გადაწყვეტილებები',
          description:
            'ჩვენ ვქმნით ვებსაიტებს, რომლებიც იზრდება თქვენს ბიზნესთან ერთად და უზრუნველყოფს გრძელვადიან წარმატებასა და მოქნილობას.',
        },
        {
          title: 'კლიენტზე ფოკუსი',
          description:
            'თქვენი კმაყოფილება ჩვენი პრიორიტეტია. ჩვენ მჭიდროდ ვთანამშრომლობთ თქვენთან, რათა დავრწმუნდეთ, რომ თქვენი ხედვა ხორციელდება.',
        },
      ],
      ctaPrompt: 'მზად ხართ სხვაობის გამოცდილებისთვის?',
      ctaLabel: 'დავიწყოთ',
    },
    process: {
      title: 'ჩვენი',
      highlight: 'პროცესი',
      subtitle:
        'დადასტურებული მიდგომა, რომელიც ყოველ ჯერზე განსაკუთრებულ შედეგებს იძლევა.',
      steps: [
        {
          title: 'აღმოჩენა',
          description:
            'ჩვენ ვიწყებთ თქვენი ბიზნეს მიზნების, სამიზნე აუდიტორიისა და პროექტის მოთხოვნების გაგებით დეტალური კონსულტაციის გზით.',
          number: '01',
        },
        {
          title: 'დიზაინი',
          description:
            'ჩვენი დიზაინერები ქმნიან განსაცვიფრებელ მაკეტებსა და პროტოტიპებს, რომლებიც შეესაბამება თქვენს ბრენდსა და ხედვას.',
          number: '02',
        },
        {
          title: 'განვითარება',
          description:
            'ჩვენ ვახორციელებთ დიზაინებს სუფთა, ეფექტური კოდითა და თანამედროვე ვებ ტექნოლოგიებით.',
          number: '03',
        },
        {
          title: 'გაშვება',
          description:
            'საფუძვლიანი ტესტირების შემდეგ, ჩვენ ვუშვებთ თქვენს ვებსაიტს და გთავაზობთ მიმდინარე მხარდაჭერასა და ტექნიკურ მომსახურებას.',
          number: '04',
        },
      ],
    },
    techStack: {
      title: 'ტექნოლოგიები',
      highlight: 'რომლებსაც ვიყენებთ',
      subtitle: 'ვაშენებთ ინდუსტრიის უახლესი და ყველაზე ძლიერი ინსტრუმენტებით.',
    },
    projects: {
      title: 'ბოლო',
      highlight: 'პროექტები',
      subtitle:
        'გაეცანით ჩვენს უახლეს ნამუშევრებს და ნახეთ, როგორ დავეხმარეთ ბიზნესებს წარმატებაში.',
      items: [
        {
          title: 'პორტფოლიოს ვებსაიტი',
          description:
            'ინტერაქტიული პორტფოლიო უნიკალური ტერმინალის ინტერფეისით, სადაც წარდგენილია პროექტები და ინფორმაცია.',
          tags: ['React', 'TypeScript', 'Terminal UI'],
        },
        {
          title: 'ლენდინგ გვერდი',
          description:
            'თანამედროვე ლენდინგ გვერდი მოწინავე CSS ანიმაციებით და რესპონსიული დიზაინით.',
          tags: ['HTML', 'CSS', 'JavaScript'],
        },
        {
          title: 'მალე',
          description:
            'მომდევნო საინტერესო პროექტი განვითარებაშია. დარჩით განახლებებისთვის!',
          tags: ['პროგრესში'],
        },
      ],
      visitLabel: 'ეწვიეთ საიტს',
      codeLabel: 'ნახეთ კოდი',
    },
    testimonials: {
      title: 'რას ამბობენ',
      highlight: 'კლიენტები',
      subtitle:
        'არ დაკმაყოფილდეთ მხოლოდ ჩვენს სიტყვებით — მოისმინეთ კმაყოფილი კლიენტებისგან.',
      items: [
        {
          name: 'Sarah Johnson',
          role: 'CEO, TechStart Inc',
          content:
            'BuildPro-სთან მუშაობა სრული სიამოვნება იყო. მათ შექმნეს საოცარი საიტი, რომელმაც გადააჭარბა მოლოდინს და კონვერსიები 150%-ით გაზარდა.',
          rating: 5,
        },
        {
          name: 'Michael Chen',
          role: 'Founder, DesignHub',
          content:
            'დეტალებზე ყურადღება და პროფესიონალიზმი შეუდარებელია. ახალმა საიტმა უამრავი પ્રશंસા მიიღო კლიენტებისა და პარტნიორებისგან.',
          rating: 5,
        },
        {
          name: 'Emily Rodriguez',
          role: 'Marketing Director, GrowthCo',
          content:
            'არამხოლოდ მშვენიერი საიტი ააგეს, არამედ შესანიშნავი მხარდაჭერა და რჩევებიც მოგვაწოდეს პროცესის განმავლობაში. ძალიან გირჩევთ!',
          rating: 5,
        },
      ],
    },
    cta: {
      badge: 'მზად ხარ დასაწყებად?',
      headingLine1: 'ავაშენოთ ერთად',
      headingLine2: 'რაღაც საოცარი',
      description:
        'გადაიყვანე შენი იდეა რეალობაში შთამბეჭდავი საიტით, რომელიც შედეგებს მოაქვს. მოგვწერე დღესვე უფასო კონსულტაციისთვის.',
      primaryCta: 'დაიწყე პროექტი',
      secondaryCta: 'ნახე ნამუშევრები',
      stats: [
        { value: '50+', label: 'დასრულებული პროექტი' },
        { value: '30+', label: 'კმაყოფილი კლიენტი' },
        { value: '5+', label: 'წლის გამოცდილება' },
        { value: '100%', label: 'წარმატების მაჩვენებელი' },
      ],
    },
    faq: {
      title: 'ხშირად დასმული',
      highlight: 'კითხვები',
      subtitle:
        'გაქვთ კითხვები? გვაქვს პასუხები. იპოვეთ ყველაფერი, რაც გჭირდებათ.',
      items: [
        {
          question: 'რამდენ ხანს გრძელდება ვებსაიტის შექმნა?',
          answer:
            'დრო განისაზღვრება სირთულითა და მოთხოვნებით. მარტივი საიტი ჩვეულებრივ 2-4 კვირა გრძელდება, ხოლო რთული 6-12 კვირა. საწყის კონსულტაციაზე დეტალურ გრაფიკს გაჩვენებთ.',
        },
        {
          question: 'რა არის თქვენი განვითარების პროცესი?',
          answer:
            'ვხელმძღვანელობთ ოთხი ეტაპით: აღმოჩენა (საჭიროების გაგება), დიზაინი (მაკეტების შექმნა), განვითარება (კოდის წერა) და გაშვება (ტესტირება და დეპლოი). ყოველ ეტაპზე გამჭვირვალე კომუნიკაცია გვაქვს.',
        },
        {
          question: 'გთავაზობთ თუ არა მხარდაჭერას გაშვების შემდეგ?',
          answer:
            'დიახ! გვაქვს სხვადასხვა მხარდაჭერის პაკეტები, რათა თქვენი საიტი მუდამ განახლებული, დაცული და პროდუქტიული იყოს. გეხმარებით გრძელვადიანად.',
        },
        {
          question: 'ეხმარებით SEO-სა და ციფრულ მარკეტინგში?',
          answer:
            'რა თქმა უნდა! ყველა საიტს ვაწყობთ SEO-ს საუკეთესო პრაქტიკებით. ასევე შეგვიძლია მოგცეთ რეკომენდაციები ციფრულ მარკეტინგზე, რომ სწორ აუდიტორიას მიაღწიოთ.',
        },
        {
          question: 'რა ტექნოლოგიებს იყენებთ?',
          answer:
            'ვიყენებთ თანამედროვე, ინდუსტრიის სტანდარტ ტექნოლოგიებს: React, TypeScript, Tailwind CSS და სხვა. კონკრეტულ პროექტზე საუკეთესო სტეკს ვარჩევთ.',
        },
        {
          question: 'რამდენი ღირს ვებსაიტი?',
          answer:
            'ფასი დამოკიდებულია მასშტაბზე, ფუნქციონალზე და სირთულეზე. გვაქვს მოქნილი შეთავაზებები სხვადასხვა ბიუჯეტისთვის. დაგვიკავშირდით უფასო კონსულტაციისა და პერსონალური წინადადებისთვის.',
        },
      ],
    },
    contact: {
      title: 'მოდით',
      highlight: 'ვიმუშაოთ ერთად',
      subtitle: 'გაქვთ იდეა? დაგვიკავშირდით და ერთად შევქმნათ რაღაც საოცარი.',
      getInTouch: 'დაგვიკავშირდით',
      emailLabel: 'იმეილი',
      emailValue: 'giorgirock@hotmail.com',
      locationLabel: 'ადგილმდებარეობა',
      locationValue: 'დისტანციურად',
      responseLabel: 'პასუხის დრო',
      responseValue: '24 საათის განმავლობაში',
      connectLabel: 'შემოგვიერთდით',
      linkedin: 'LinkedIn',
      emailCta: 'ელფოსტა',
      formTitle: 'გამოგვიგზავნე შეტყობინება',
      fieldName: 'თქვენი სახელი',
      fieldEmail: 'ელფოსტის მისამართი',
      fieldMessage: 'შეტყობინება',
      submitDisabled: 'ფორმა დროებით გამორთულია — გამოიყენეთ სოციალური ბმულები',
      disabledNote: 'დაგვიკავშირდით LinkedIn-ით ან ელფოსტით ზემოთ',
    },
    footer: {
      description:
        'შევქმენით განსაკუთრებული ვებ გამოცდილებები, რომლებიც შედეგს მოაქვს და მოლოდინს აჭარბებს.',
      quickLinksTitle: 'სწრაფი ბმულები',
      contactTitle: 'კონტაქტი',
      linkedIn: 'LinkedIn პროფილი',
      madeWith: 'შექმნილია სითბოთი',
      byline: 'BuildPro გუნდისგან',
      quickLinks: [
        { label: 'მთავარი', href: '#home' },
        { label: 'სერვისები', href: '#services' },
        { label: 'პროექტები', href: '#projects' },
        { label: 'კონტაქტი', href: '#contact' },
      ],
    },
  },
};
