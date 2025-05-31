export const frameworks: Record<string, Record<string, string>> = {
    Frontend: {
        HTML5: "html5.svg",
        TypeScript: "typescript.svg",
        "React.js": "react.svg",
        "Next.js": "nextjs.svg",
        Angular: "angular.svg",
        "Vue.js": "vuejs.svg",
        "Tailwind CSS": "tailwindcss.svg",
        "Sass / SCSS": "sass.svg",
        Bootstrap: "bootstrap.svg",
    },
    Backend: {
        "Node.js": "nodejs.svg",
        "Express.js": "express.svg",
        Python: "python.svg",
        Java: "java.svg",
        "C#": "csharp.svg",
        Go: "go.svg",
        Rust: "rust.svg",
        Django: "django.svg",
        "C++": "cplusplus.svg",
        Flask: "flask.svg",
        "Ruby on Rails": "rails.svg",
        "Spring Boot": "spring.svg",
        ".NET Core": "dot-net.svg",
        FastAPI: "fastapi.svg",
        GraphQL: "graphql.svg",
        WebSockets: "websockets.svg",
    },
    Databases: {
        PostgreSQL: "postgresql.svg",
        MySQL: "mysql.svg",
        MongoDB: "mongodb.svg",
        Redis: "redis.svg",
        ElasticSearch: "elasticsearch.svg",
    },
    "Cloud / DevOps": {
        AWS: "aws.svg",
        Azure: "azure.svg",
        "Google Cloud": "googlecloud.svg",
        Docker: "docker.svg",
        Kubernetes: "kubernetes.svg",
        Terraform: "terraform.svg",
        "GitHub Actions": "githubactions.svg",
        "CI/CD pipelines": "circleci.svg",
    },
    "Tools / Platforms": {
        Git: "git.svg",
        GitHub: "github.svg",
        GitLab: "gitlab.svg",
        Bitbucket: "bitbucket.svg",
        Webpack: "webpack.svg",
        Vite: "vite.svg",
        ESLint: "eslint.svg",
        "VS Code": "vscode.svg",
        "Vim / NeoVim": "vim.svg",
    },
    "Testing / QA": {
        Jest: "jest.svg",
        Mocha: "mocha.svg",
        Cypress: "cypressio.svg",
        Selenium: "selenium.svg",
        Playwright: "playwright.svg",
    },
};

export interface Project {
    title: string;
    description: string;
    images: string[];
    skills: string[];
    demo?: string;
    github?: string;
}

export const projects: Record<string, Project> = {
    "Enterprise Energy Management System": {
        title: "Enterprise Energy Management System",
        description: `An Energy Management System (EMS) for a client managing sustainable energy infrastructure. This system ingested high-volume IoT data into AWS, processed it in Kubernetes (EKS), and exposed real-time dashboards and control panels via a secure, cloud-hosted web application. The EMS supported over 200 live systems, enabling real-time monitoring, maintenance, configuration. Key features included live data streaming via Server-Sent Events (SSE), virtual terminals over VPN, dynamic visual dashboards, and seamless integration with Redis, PostgreSQL, S3, and AWS Lambda.`,
        images: [
            "projects/ems1.png",
            "projects/ems2.png",
            "projects/ems3.png",
            "projects/ems4.png",
        ],
        skills: ["AWS", "Kubernetes", "PostgreSQL", "Redis", "React.js"],
        demo: "https://ems.kirongonidis.com",
        github: "https://github.com/kgonidisorg/ems",
    },
    "Next Generation Positioning System": {
        title: "Next Generation Positioning System",
        description: `A dynamic, map-friendly analytics dashboard for NGPS (Next-Gen Positioning System) using Next.js and SCSS.
The overlay integrates seamlessly atop a Google Maps component, providing real-time visualizations of train sensor data.
I architected the SCSS module structure with partials for variables, mixins, and component styles, enabling consistent theming and rapid iteration.
The dashboard is fully responsive and supports easy customization via CSS Modules.`,
        images: [
            "projects/ngps1.png",
            "projects/ngps2.png",
            "projects/ngps3.png",
            "projects/ngps4.png",
        ],
        skills: ["Next.js", "React.js", "Python", "Azure", "PostgreSQL"],
        demo: "https://ngps.kirongonidis.com",
        github: "https://github.com/kgonidisorg/ngps",
    },
    "Social Media Scheduler": {
        title: "Social Media Scheduler",
        description: `A full-stack social media scheduling platform that allows users to create, manage, and schedule posts across multiple social networks.
The platform features a modern, responsive UI built with React.js and Tailwind CSS, providing an intuitive user experience.
Users can connect their social media accounts, create posts with rich media support, and schedule them for future publication.
The backend is powered by Node.js and Express.js, with a PostgreSQL database for data storage. The application uses JWT for secure user authentication and authorization.
The platform supports real-time updates using WebSockets, allowing users to see scheduled posts and notifications instantly.
This solution streamlines social media management, increases user engagement, and provides a scalable architecture for future feature expansion.`,
        images: [
            "projects/social1.png",
            "projects/social2.png",
            "projects/social3.png",
            "projects/social4.png",
        ],
        skills: [
            "React.js",
            "Node.js",
            "PostgreSQL",
            "WebSockets",
            "Tailwind CSS",
        ],
        demo: "https://ssync.kirongonidis.com",
        github: "https://github.com/kgonidisorg/social-sync",
    },
    "Ecommerce Platform": {
        title: "Ecommerce Platform",
        description: `A fully responsive, modern e-commerce storefront a global retailer:

Designed a clean, accessible UI with a sticky header, global search, cart/wishlist icons, and top-bar contact info.

Developed a secure checkout flow with Stripe/Shopify/Magento integration for seamless payments.

Added user authentication and account management with JWT-backed APIs for order history and profile updates.

Deployed on AWS.

This solution increased conversion rates, streamlined the purchase funnel, and delivered a scalable platform for future growth.`,
        images: [
            "projects/shop1.png",
            "projects/shop2.png",
            "projects/shop3.png",
            "projects/shop4.png",
        ],
        skills: ["Stripe", "React.js", "Node.js", "AWS", "PostgreSQL"],
    },
};

const topSkills = [
    // 🌐 Core Frontend
    "HTML5",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",

    // ⚙️ Core Backend
    "Node.js",
    "Express.js",
    "Python",
    "FastAPI",
    "Django",

    // 🗄️ Databases
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Redis",

    // ☁️ DevOps / Cloud
    "Docker",
    "GitHub Actions",
    "CI/CD pipelines",
    "AWS",

    // 🛠 Tools / Productivity
    "Git",
    "GitHub",
    "VS Code",

    // ✅ Testing / Quality
    "Jest",
    "Cypress",

    // 👇 Nice-to-haves / Secondary Frameworks
    "Vue.js",
    "Angular",
    "Sass / SCSS",
    "Bootstrap",
    "GraphQL",
    "Kubernetes",
    "Terraform",
    "Azure",
    "Google Cloud",
    "Java",
    "Flask",
    "Spring Boot",
    ".NET Core",
    "Ruby on Rails",
    "C#",
    "Go",
    "Rust",
    "C++",
    "ElasticSearch",
    "GitLab",
    "Bitbucket",
    "Webpack",
    "Vite",
    "ESLint",
    "Vim / NeoVim",
    "Mocha",
    "Playwright",
    "Selenium",
];

export const SortedSkills = topSkills.flatMap((skill) => {
    const group = Object.entries(frameworks).find(([, skills]) =>
        skills[skill]
            ? true
            : Object.keys(skills).some(
                  (k) => k.toLowerCase() === skill.toLowerCase()
              )
    );
    return group
        ? {
              title: skill,
              icon: frameworks[group[0]][skill],
              group: group[0],
          }
        : [];
});
