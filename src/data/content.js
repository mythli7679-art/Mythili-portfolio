import {
    BRANCH,
    createTimelineBadge,
    createTimelineSlide,
    ITEM_SIZE,
    NODE_TYPES,
} from "../utils/timelineContent";

const defaultNavigationLinks = [
    { name: "Home", to: "hero", enabled: true },
    { name: "About", to: "about", enabled: true },
    { name: "Education", to: "education", enabled: true },
    { name: "Skills", to: "skills", enabled: true },
    { name: "Projects", to: "projects", enabled: true },
    { name: "Timeline", to: "timeline", enabled: true },
    { name: "Certificates", to: "certificates", enabled: true },
    { name: "Contact", to: "contact", enabled: true },
];

const defaultHackathonsContent = {
    enabled: false,
    titlePrefix: "Featured",
    titleHighlight: "Hackathons",
    initialCount: 6,
    loadCount: 3,
    loadMoreText: "Load More Hackathons",
    endText: "End of records",
    labels: {
        members: "Members",
        coreInsight: "Core Insight",
        liveDemo: "Live Demo",
        viewCode: "View Code",
        certificate: "Certificate",
        gallery: "Event Gallery",
        details: "See Details",
        code: "Code",
    },
    items: [],
};

const defaultEducationContent = {
    enabled: true,
    titlePrefix: "My Education",
    titleHighlight: "Path",
    items: [
        {
            id: 1,
            year: "2022 - 2026",
            degree: "B.E. Computer Science and Engineering",
            institution: "M.P. Nachimuthu M. Jaganathan Engineering College, Chennimalai",
            description: "Graduated with a focus on software development, AI systems, and real-world project building.",
        },
    ],
};

const timelineCategoryStyles = {
    Achievement: {
        accent: "#f59e0b",
        accentSoft: "rgba(245, 158, 11, 0.18)",
        background: "#111827",
        backgroundEnd: "#312e81",
    },
    Internship: {
        accent: "#22d3ee",
        accentSoft: "rgba(34, 211, 238, 0.18)",
        background: "#0f172a",
        backgroundEnd: "#164e63",
    },
    Presentation: {
        accent: "#a78bfa",
        accentSoft: "rgba(167, 139, 250, 0.18)",
        background: "#111827",
        backgroundEnd: "#312e81",
    },
    Certification: {
        accent: "#38bdf8",
        accentSoft: "rgba(56, 189, 248, 0.18)",
        background: "#0f172a",
        backgroundEnd: "#1e293b",
    },
    Education: {
        accent: "#38bdf8",
        accentSoft: "rgba(56, 189, 248, 0.18)",
        background: "#0f172a",
        backgroundEnd: "#1e293b",
    },
};

const timelineYear = (year) => ({
    type: NODE_TYPES.CHECKPOINT,
    title: String(year),
    size: ITEM_SIZE.LARGE,
    shouldDrawLine: false,
    alignment: BRANCH.LEFT,
});

const timelineMilestone = ({
    category,
    title,
    issuer,
    description,
}) => {
    const style = timelineCategoryStyles[category] || timelineCategoryStyles.Achievement;
    const subtitle = [issuer, description].filter(Boolean).join(" - ");

    return {
        type: NODE_TYPES.CHECKPOINT,
        title,
        subtitle,
        size: ITEM_SIZE.SMALL,
        image: createTimelineBadge({
            label: category,
            accent: style.accent,
            background: style.background,
        }),
        slideImage: createTimelineSlide({
            eyebrow: category,
            title,
            subtitle,
            accent: style.accent,
            accentSoft: style.accentSoft,
            backgroundStart: style.background,
            backgroundEnd: style.backgroundEnd,
        }),
        shouldDrawLine: true,
        alignment: BRANCH.LEFT,
    };
};

const defaultTimelineContent = {
    enabled: true,
    eyebrow: "Milestones",
    title: "Timeline",
    subtitle: "Key achievements, internship, paper presentations, and education milestones.",
    items: [
        timelineYear("2026"),
        timelineMilestone({
            category: "Internship",
            title: "Software Development Intern at CMTI, Bengaluru",
            issuer: "Central Manufacturing Technology Institute (CMTI)",
            description: "Jan 2026 to May 2026. Developed a centralized Laboratory Asset and Inventory Management System for high-value assets and real-time stock tracking across departments.",
        }),
        timelineMilestone({
            category: "Presentation",
            title: "Paper Presentation on Artificial Intelligence Evolution",
            issuer: "Vellore Institute of Technology (VIT), Erode",
            description: "Presented a research paper on the evolution and impact of Artificial Intelligence at a national-level technical symposium.",
        }),
        timelineMilestone({
            category: "Presentation",
            title: "Paper Presentation on Super Computer",
            issuer: "Nandha College of Technology, Erode",
            description: "Delivered a technical paper on Super Computer architecture and applications at a national-level technical event.",
        }),
        timelineMilestone({
            category: "Certification",
            title: "Generative AI Certification (In Progress)",
            issuer: "Online Certification Program",
            description: "Currently completing a professional certification in Generative AI covering LLMs, prompt engineering, and AI application development.",
        }),
        timelineYear("2022"),
        timelineMilestone({
            category: "Education",
            title: "B.E. Computer Science and Engineering",
            issuer: "M.P. Nachimuthu M. Jaganathan Engineering College, Chennimalai",
            description: "2022 to 2026. Graduated with focus on software development, AI, database systems, and full-stack application building.",
        }),
    ],
};

export const defaultSiteContent = {
    site: {
        brandName: "MYTHILI",
    },
    navigation: {
        links: defaultNavigationLinks,
    },
    hero: {
        enabled: true,
        name: "P MYTHILI",
        loaderName: "MYTHILI",
        role: "Software Developer",
        typedRoles: ["AI Enthusiast", "Flutter Developer", "Full Stack Developer"],
        subheading: "B.E. CSE graduate with CMTI internship experience, passionate about AI, Generative AI, and building real-world software solutions.",
        primaryCtaText: "View My Work",
        primaryCtaTarget: "projects",
        secondaryCtaText: "Contact Me",
        secondaryCtaTarget: "contact",
        resumeCtaText: "View Resume",
        resumeLink: "#",
        socialLinks: [
            { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/mythili-ponnusamy/" },
            { label: "GitHub", icon: "github", url: "https://github.com/mythili293" },
        ],
    },
    about: {
        enabled: true,
        titlePrefix: "About",
        titleHighlight: "Me",
        paragraphs: [
            "I am a recent B.E. Computer Science and Engineering graduate with hands-on experience in software development, inventory management systems, and AI-integrated web applications. I completed an industrial internship at CMTI, Bengaluru, where I developed production-grade laboratory management software used across multiple departments.",
            "I am deeply passionate about Artificial Intelligence, Generative AI, and Full Stack Development. I enjoy turning complex real-world problems into elegant, practical solutions — whether building a computer vision safety system or a smart AI-powered construction ecosystem.",
        ],
        profileImage: "/profileimage.jpeg",
        profileAlt: "P Mythili - Software Developer",
    },
    skills: {
        enabled: true,
        titlePrefix: "Technical",
        titleHighlight: "Toolkit.",
        categories: [
            {
                category: "Languages",
                skills: ["Python", "SQL (PostgreSQL, MySQL)", "Dart", "JavaScript"],
            },
            {
                category: "Frontend & Mobile",
                skills: ["Flutter", "HTML5 & CSS3", "Next.js", "JavaScript (ES6+)"],
            },
            {
                category: "Backend & Cloud",
                skills: ["Supabase", "PostgreSQL", "Vercel", "RESTful APIs"],
            },
            {
                category: "Tools & Platforms",
                skills: ["Git & GitHub", "VS Code"],
            },
            {
                category: "Core CS Subjects",
                skills: ["OOPs", "DBMS", "Data Structures", "Software Engineering"],
            },
            {
                category: "Emerging Tech",
                skills: ["Artificial Intelligence", "Generative AI (Learning)", "Computer Vision", "Deep Learning"],
            },
        ],
    },
    projects: {
        enabled: true,
        titlePrefix: "Projects",
        titleHighlight: "My Works",
        description: "A selection of software projects spanning AI integration, mobile development, computer vision, and full-stack web applications built during internship and academic study.",
        initialCount: 3,
        loadCount: 3,
        loadMoreText: "Load More Projects",
        endText: "You have reached the end of the list.",
        labels: {
            github: "Code",
            demo: "Live Demo",
        },
        items: [
            {
                id: 1,
                title: "Lab Asset & Inventory Management System",
                description: "Developed at CMTI, Bengaluru — a centralized system for tracking high-value laboratory assets, real-time stock levels, secure issue-return workflows, role-based dashboards, and comprehensive audit reports across multiple departments.",
                tech: ["Flutter", "Dart", "Supabase", "PostgreSQL"],
                github: "",
                demo: "",
                image: "/lab-inventory-system.png",
            },
            {
                id: 2,
                title: "BuildNest — AI Smart Construction Ecosystem",
                description: "An AI-powered web platform aggregating construction material vendors, rental owners, engineers, and clients. Features an AI cost estimation engine for dynamic budget recommendations, secured role-specific dashboards, and real-time inquiry management channels.",
                tech: ["Next.js", "Supabase", "AI Integration", "Vercel"],
                github: "",
                demo: "",
                image: "/buildnest-construction.png",
            },
            {
                id: 3,
                title: "Real-Time Fire and Smoke Detector System",
                description: "An automated real-time safety surveillance system trained to identify fire and smoke hazards within streaming video feeds. Applies Computer Vision to minimize FPS processing latency while maintaining accuracy, with instant alert mechanics for rapid hazard notification.",
                tech: ["Python", "OpenCV", "Computer Vision", "Deep Learning"],
                github: "",
                demo: "",
                image: "/fire-smoke-detector.png",
            },
        ],
    },
    hackathons: defaultHackathonsContent,
    education: defaultEducationContent,
    timeline: defaultTimelineContent,
    certificates: {
        enabled: true,
        titlePrefix: "Professional",
        titleHighlight: "Certifications",
        initialCount: 3,
        loadCount: 3,
        loadMoreText: "Load More Certificates",
        endText: "You have reached the end of the list.",
        labels: {
            issuedPrefix: "Issued:",
            viewButton: "View Certificate",
            closeHint: "Press ESC or click outside to close.",
        },
        items: [
            {
                id: 1,
                title: "Industrial Internship Completion Certificate",
                issuer: "Central Manufacturing Technology Institute (CMTI), Bengaluru",
                date: "May 2026",
                description: "Completed a 5-month Software Development Internship at CMTI, a national-level R&D institution under the Ministry of Heavy Industries. Developed a full-stack Laboratory Asset and Inventory Management System.",
                priority: "High (Reputed National Institution)",
                link: "",
            },
            {
                id: 2,
                title: "Paper Presentation — Artificial Intelligence Evolution",
                issuer: "Vellore Institute of Technology (VIT), Erode",
                date: "2026",
                description: "Presented a research paper on the evolution and real-world impact of Artificial Intelligence at a national-level technical symposium hosted by VIT.",
                priority: "High (Premier Institution)",
                link: "",
            },
            {
                id: 3,
                title: "Paper Presentation — Super Computer",
                issuer: "Nandha College of Technology, Erode",
                date: "2026",
                description: "Delivered a technical paper on Super Computer architecture, processing capabilities, and real-world applications at a national-level technical event.",
                priority: "Medium",
                link: "",
            },
            {
                id: 4,
                title: "Generative AI Certification",
                issuer: "Online Certification Program",
                date: "In Progress",
                description: "Currently completing a professional certification in Generative AI, covering foundation models, large language models (LLMs), prompt engineering, and AI-powered application development.",
                priority: "High (Emerging Tech)",
                link: "",
            },
        ],
    },
    contact: {
        enabled: true,
        titlePrefix: "Get In",
        titleHighlight: "Touch",
        introTitle: "Let's Connect",
        introText: "I am open to full-time opportunities, internships, and collaborative projects. If you have a project in mind or just want to say hi, feel free to reach out!",
        email: "mythli7679@gmail.com",
        phone: "+91 8056818192",
        address: "Tiruppur, Tamil Nadu, 638 103",
        socialLinks: [
            { label: "GitHub", icon: "github", url: "https://github.com/mythili293" },
            { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/mythili-ponnusamy/" },
        ],
        formspreeId: "",
        formAction: "https://formspree.io/f/",
        googleScriptUrl: "",
        labels: {
            name: "Name",
            email: "Email",
            message: "Message",
            submitIdle: "Send Message",
            submitLoading: "Sending...",
            submitSuccess: "Message Sent!",
        },
        placeholders: {
            name: "Enter Your Name",
            email: "Enter Your Email",
            message: "Enter your message here...",
        },
    },
    footer: {
        enabled: true,
        creditText: "Designed & Built by",
    },
};

export const heroData = defaultSiteContent.hero;
export const projectsData = defaultSiteContent.projects.items;
export const skillsData = defaultSiteContent.skills.categories;
export const educationData = defaultSiteContent.education.items;
export const contactData = {
    email: defaultSiteContent.contact.email,
    phone: defaultSiteContent.contact.phone,
    address: defaultSiteContent.contact.address,
    social: {
        github: defaultSiteContent.contact.socialLinks[0]?.url || "",
        linkedin: defaultSiteContent.contact.socialLinks[1]?.url || "",
    },
};
export const certificatesData = defaultSiteContent.certificates.items;
export const hackathonData = defaultSiteContent.hackathons.items;
export const timelineData = defaultSiteContent.timeline.items;

