import { TbBrandTypescript } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { FaReact, FaJava, FaJira, FaSquareGithub } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
//import { VscCopilot } from "react-icons/vsc";
import { TiHtml5 } from "react-icons/ti";
import { FaGitSquare } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { IconType } from "react-icons/lib";

interface IconProps {
  className?: string;
  primaryColor: string;
  secondaryColor: string;
  intervalDuration: number;
}
interface ModalProps {
  linkURL: string;
  contentHeading: string;
  content: string[];
}

export interface SkillIconData {
  title: string;
  Icon: IconType;
  iconProps: IconProps;
  modalProps: ModalProps;
}

export const skillsIconsData: SkillIconData[] = [
  {
    title: "TypeScript",
    Icon: TbBrandTypescript,
    iconProps: {
      primaryColor: "#3178c6",
      secondaryColor: "#00273f",
      intervalDuration: 12000,
    },
    modalProps: {
      linkURL: "https://www.typescriptlang.org/docs/",
      contentHeading:
        "TypeScript is a widely adopted, open-source language offering several key advantages and features at a high level:",
      content: [
        "Typed Superset of JavaScript: TypeScript extends JavaScript by adding static types, creating a more robust language that is still fully compatible with existing JS ecosystems and codebases.",
        "Early Error Detection: Type checks happen at compile time before the code executes, allowing developers to catch many common errors and bugs during development rather than at runtime in a user's browser.",
        "Scalability for Large Projects: Features like interfaces and generics provide the necessary structure and guardrails to effectively manage and maintain large, complex, enterprise-level applications.",
        "Enhanced Developer Experience (DX): The rich type information significantly improves modern IDE capabilities, enabling better intelligent code completion, navigation, and debugging.",
      ],
    },
  },
  {
    title: "HTML",
    Icon: TiHtml5,
    iconProps: {
      primaryColor: "#e34c26",
      secondaryColor: "#f06529",
      intervalDuration: 8000,
    },
    modalProps: {
      linkURL: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      contentHeading:
        "HTML (HyperText Markup Language) is the foundational technology used to structure content on the web. Here are four essential aspects of HTML at a high level:",
      content: [
        "Markup Language for Structure: HTML uses a system of tags and attributes to define the structure of a webpage, organizing content into headings, paragraphs, lists, links, and images.",
        "The Foundation of the Web: It provides the core instructions that all web browsers read and interpret to render visual and interactive content for users to consume.",
        "Semantic Meaning: Modern HTML emphasizes 'semantic' tags (e.g., <header>, <article>, <footer>) that describe the meaning of the content, which improves accessibility for screen readers and aids Search Engine Optimization (SEO).",
        "Platform Agnostic: HTML works universally across all web browsers and device types (desktops, tablets, mobile phones) as the standard, common language for defining document structure.",
      ],
    },
  },
  {
    title: "React",
    Icon: FaReact,
    iconProps: {
      primaryColor: "#0081a3",
      secondaryColor: "#00d8ff",
      intervalDuration: 17000,
    },
    modalProps: {
      linkURL: "https://react.dev/",
      contentHeading:
        "React is a widely adopted, open-source JavaScript library developed by Facebook for building user interfaces (UIs) efficiently. Here are four essential aspects of React at a high level:",
      content: [
        "Component-Based Architecture: React applications are built using self-contained, reusable building blocks called 'components', which manage their own state and rendering logic.",
        "Declarative Views: Developers describe what the UI should look like for a given state, and React handles efficiently updating the necessary components when data changes, simplifying UI management.",
        "The Virtual DOM: React uses an in-memory representation of the actual DOM (Document Object Model), comparing changes and updating the real browser DOM only where necessary. This diffing process optimizes performance significantly.",
        "'Learn Once, Write Anywhere': While it is a library for the web, React's core patterns and logic can be applied to build native mobile apps using React Native, or even desktop applications.",
      ],
    },
  },
  {
    title: "GitHub",
    Icon: FaSquareGithub,
    iconProps: {
      primaryColor: "#000000",
      secondaryColor: "#6e5494",
      intervalDuration: 5000,
    },
    modalProps: {
      linkURL: "https://docs.github.com/en",
      contentHeading:
        "GitHub is a web-based platform that uses the Git version control system to help developers store, manage, and collaborate on code projects effectively.",
      content: [
        "Cloud-Based Version Control: GitHub hosts code repositories in the cloud, utilizing Git to track changes, manage different versions of files, and allow developers to easily revert to previous states if needed.",
        "Streamlined Collaboration: The platform facilitates teamwork through features like branching, pull requests, and code reviews, enabling multiple developers to work on a project simultaneously without overwriting each other's work.",
        "Project Management and Automation: Beyond code hosting, GitHub provides integrated tools such as issue tracking, project boards (Kanban style), and GitHub Actions to automate workflows like testing and deployment.",
        "Vibrant Open-Source Community: GitHub is the largest host of source code in the world, serving as a social platform where millions of developers share projects, contribute to open-source software, and showcase their work as a public portfolio",
      ],
    },
  },
  {
    title: "Java",
    Icon: FaJava,
    iconProps: {
      primaryColor: "#007396",
      secondaryColor: "#ED8B00",
      intervalDuration: 20000,
    },
    modalProps: {
      linkURL: "https://docs.oracle.com/en/java/",
      contentHeading:
        "Java is a high-level, class-based, object-oriented programming language designed with the core philosophy of 'Write Once, Run Anywhere' (WORA).",
      content: [
        "Platform Independence (WORA): Java achieves platform independence through the Java Virtual Machine (JVM). Source code is compiled into an intermediate bytecode, which can then be executed by any system that has a compatible JVM installed, regardless of the underlying operating system or hardware.",
        "Object-Oriented (OOP) Design: Everything in Java is treated as an object, and the language is built around core OOP principles like encapsulation, inheritance, polymorphism, and abstraction. This structure promotes modular, reusable, and maintainable code.",
        "Robustness and Security: Java is a strongly typed language with automatic memory management via garbage collection and built-in exception handling. This eliminates common errors like pointer manipulation, making programs more reliable and secure by design.",
        "Vast Ecosystem and Enterprise Focus: Java has a rich API, extensive standard libraries, and powerful frameworks (like Spring) that make it the dominant language for enterprise-level applications, Android development, big data technologies, and cloud computing solutions.",
      ],
    },
  },
  {
    title: "GraphQL",
    Icon: GrGraphQl,
    iconProps: {
      primaryColor: "#e535ab",
      secondaryColor: "#FFFFFF",
      intervalDuration: 7000,
    },
    modalProps: {
      linkURL: "https://graphql.org/learn/",
      contentHeading:
        "GraphQL is a modern query language for APIs and a server-side runtime that provides a highly efficient and flexible alternative to traditional REST architectures. ",
      content: [
        "Client-Specified Data Fetching: Clients request exactly the data they need in a single query, eliminating common REST problems like 'over-fetching' (receiving too much data) and 'under-fetching' (needing multiple requests to gather related data).",
        "Strongly-Typed Schema: A GraphQL service is defined by a strict type system (the schema) that creates a clear contract between the client and server. This provides built-in documentation, validates queries before execution, and ensures predictable results.",
        "Single, Unified Endpoint: Unlike REST, which often requires multiple endpoints for different resources, GraphQL typically uses a single /graphql endpoint to handle all data operations (queries for reading, mutations for writing, and subscriptions for real-time updates).",
        "Data Source Agnostic: GraphQL is a layer for your API, not tied to a specific database or programming language. It can aggregate data from various backend sources, including existing databases and even legacy REST APIs, into one seamless interface.",
      ],
    },
  },
  {
    title: "CSS",
    Icon: DiCss3,
    iconProps: {
      primaryColor: "#264de4",
      secondaryColor: "#663399",
      intervalDuration: 13000,
    },
    modalProps: {
      linkURL: "https://developer.mozilla.org/en-US/docs/Web/CSS/",
      contentHeading:
        "CSS (Cascading Style Sheets) is the core language used to define the presentation and visual styling of web content, while SCSS (Sassy CSS) is a popular preprocessor that extends CSS with powerful features.",
      content: [
        "Styling the Web: CSS is the foundational language used by browsers to control the look of HTML elements—handling everything from colors and fonts to complex layouts and animations.",
        "Cascading and Specificity: The 'C' in CSS refers to its cascading nature; styles flow and inherit properties, and specific rules dictate which styles win when conflicts arise, giving developers precise control over the final presentation.",
        "SCSS for Efficiency and Scalability: SCSS is a superset syntax that introduces programmatic features like variables, nesting, mixins (reusable style blocks), and functions. These features make complex style sheets easier to organize, manage, and scale in large projects.",
        "The Preprocessor Workflow: Browsers cannot natively read SCSS. Developers write in SCSS for efficiency, but this code must be 'compiled' or 'transpiled' by a preprocessor tool into standard, valid CSS before a web browser can apply the styles.",
      ],
    },
  },
  {
    title: "Springboot",
    Icon: BiLogoSpringBoot,
    iconProps: {
      primaryColor: "#6db33f",
      secondaryColor: "#FFFFFF",
      intervalDuration: 10000,
    },
    modalProps: {
      linkURL: "https://docs.spring.io/spring-boot/documentation.html",
      contentHeading:
        "Spring Boot is an extension of the Java Spring framework that drastically simplifies the process of creating production-grade, stand-alone applications and microservices with minimal configuration.",
      content: [
        "Auto-Configuration: Spring Boot automatically configures the Spring Framework and third-party libraries based on the dependencies present in your project. This 'convention over configuration' approach eliminates much of the manual boilerplate code and XML configuration previously required.",
        "Starter Dependencies: It provides opinionated 'starter' dependencies (e.g., spring-boot-starter-web) that bundle all necessary libraries and automatically manage versions for common use cases like web development, data access, or security.",
        "Embedded Web Servers: Spring Boot applications can run as stand-alone executable JAR files because they embed web servers like Tomcat, Jetty, or Undertow directly within the application package. This removes the need for deploying to an external application server.",
        "Production-Ready Features: The framework includes built-in 'Actuator' modules that provide essential production-grade features out of the box, such as health checks, metrics, and monitoring endpoints, simplifying application management in live environments.",
      ],
    },
  },
  {
    title: "Git",
    Icon: FaGitSquare,
    iconProps: {
      primaryColor: "F1502F",
      secondaryColor: "#3d2d00",
      intervalDuration: 17000,
    },
    modalProps: {
      linkURL: "https://git-scm.com/docs",
      contentHeading:
        "Git is a widely adopted, distributed version control system (DVCS) that tracks changes in source code during software development, focusing on speed, data integrity, and support for non-linear workflows",
      content: [
        "Distributed Version Control: Unlike centralized systems, every developer gets a complete copy (a local repository) of the entire codebase history. This allows for offline work, faster operations, and greater resilience if the central server fails.",
        "Snapshots, Not Differences: Git manages data by taking snapshots of the entire project every time you commit changes, efficiently storing a reference to that snapshot rather than just storing the differences (diffs) between files like older systems did.",
        "Robust Branching and Merging: Git makes branching operations extremely lightweight and fast, encouraging developers to create separate branches for every new feature or bug fix. This isolation prevents unstable code from affecting the main codebase and allows for seamless merging back in when the work is complete.",
        "Core of Modern Collaboration: While Git is the underlying tool, platforms like GitHub, GitLab, and Bitbucket utilize Git principles (pull requests, branching workflows) to enable efficient, organized collaboration among development teams worldwide",
      ],
    },
  },
  {
    title: "Jira",
    Icon: FaJira,
    iconProps: {
      primaryColor: "#2684ff",
      secondaryColor: "#253858",
      intervalDuration: 20000,
    },
    modalProps: {
      linkURL: "https://confluence.atlassian.com/jira",
      contentHeading:
        "Jira is a powerful, proprietary issue and project tracking software developed by Atlassian, widely used by agile software development teams to manage their workflows and track progress.",
      content: [
        "Customizable Issue Tracking: Jira is fundamentally a system for tracking 'issues' (tasks, bugs, stories, epics, etc.). Its highly customizable nature allows teams to define specific issue types, statuses, and workflows that perfectly match their unique development process.",
        "Built for Agile Methodologies: It provides robust, native support for popular agile frameworks like Scrum and Kanban. Teams can utilize customizable boards, backlogs, sprint planning tools, and detailed reports to manage iterative development cycles efficiently.",
        "Workflow Automation: Jira allows administrators to define complex, automated workflows that govern how issues transition from one status to the next (e.g., from 'To Do' to 'In Progress' to 'Done'), ensuring consistent processes and providing clear visibility into project status.",
        "Integration and Scalability: As a core Atlassian product, Jira integrates seamlessly with development tools like Confluence (documentation), Bitbucket (Git hosting), and numerous third-party apps, making it a scalable command center for large, distributed enterprise teams.",
      ],
    },
  },
];

// const copilotSkillIconData: SkillIconData = {
//   title: "Github CoPilot",
//   Icon: VscCopilot,
//   iconProps: {
//     primaryColor: " #104C35",
//     secondaryColor: "#BFFFD1",
//     intervalDuration: 29000,
//   },
//   modalProps: {
//     linkURL: "",
//     contentHeading:
//       "GitHub Copilot is an AI pair programmer developed by GitHub and OpenAI that leverages machine learning to provide real-time code suggestions and auto-completions directly within a developer's integrated development environment (IDE).",
//     content: [
//       "AI Pair Programming: Copilot acts as an AI assistant, analyzing context from comments and code to suggest entire lines or full functions in real time, significantly boosting coding speed and reducing manual typing.",
//       "Context-Aware Suggestions: The AI model is trained on a massive amount of public code repositories. This extensive training allows it to understand project context and coding styles to offer highly relevant and accurate suggestions in numerous programming languages.",
//       "Integration into the Workflow: Copilot runs seamlessly as an extension within popular IDEs like VS Code, Visual Studio, JetBrains IDEs, and Neovim, integrating directly into a developer's existing environment without requiring context switching.",
//       "Generative Coding and Learning Aid: It not only completes code but can generate boilerplates and translate comments into code logic. It serves as a real-time educational tool, helping developers learn new libraries, syntax, and coding patterns efficiently.",
//     ],
//   },
// };
