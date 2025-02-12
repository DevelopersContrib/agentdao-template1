import { Feature } from "@/types/feature";
import Link from "next/link";

const defaultIcon = "/images/icon/agentdao-common-icon.png";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/BitAgent.svg",
    image: "",
    title: "BitAgent",
    description: "Vigilant in monitoring agent activity for anomalies.",
    links: [],
  },
  {
    id: 2,
    icon: "/images/icon/StoryAgent.svg",
    image: "",
    title: "StoryAgents",
    description:
      "Sharing their creation stories, from niche domains to legal chains.",
    links: [],
  },
  {
    id: 4,
    icon: "/images/icon/HashAgent.svg",
    image: "",
    title: "HashAgent",
    description:
      "Crafting meta hashes, finding, storing, indexing, analyzing, and optimizing for SEO.",
    links: [],
  },
  {
    id: 5,
    icon: "/images/icon/SocialAgent.svg",
    image: "",
    title: "SocialAgent",
    description:
      "Gathering social insights, orchestrating social handle takeovers, and publishing to accounts.",
    links: [],
  },
  {
    id: 6,
    icon: "/images/icon/CodeAgent.svg",
    image: "",
    title: "CodeAgent",
    description:
      "Proficient in pulling from Git repositories and publishing to five code creation systems.",
    links: [],
  },
  {
    id: 7,
    icon: "/images/icon/PersonnelAgent.svg",
    image: "",
    title: "PersonnelAgent",
    description:
      "Understanding human needs based on identity and engagement skills.",
    links: [],
  },
  {
    id: 8,
    icon: "/images/icon/ContentAgent.svg",
    image: "",
    title: "ContentAgent",
    description: "Masters of creating meta, articles, and more.",
    links: [],
  },
  {
    id: 9,
    icon: "/images/icon/AdvoAgent.svg",
    image: "",
    title: "AdvoAgent",
    description:
      "Experts in PPC, securing exact match keywords, and strategic buying.",
    links: [],
  },
  {
    id: 10,
    icon: "/images/icon/GovAgent.svg",
    image: "",
    title: "GovAgent",
    description:
      "Efficiently handling efiling, abot, utility, and equity enforcement.",
    links: [],
  },
  {
    id: 11,
    icon: "/images/icon/NetworkAgent.svg",
    image: "",
    title: "NetworkAgent",
    description:
      "The go-to for sales strategies and networking using Contrib Network and VNOC.",
    links: [],
  },
  {
    id: 12,
    icon: "/images/icon/UtilityAgent.svg",
    image: "",
    title: "UtilityAgent",
    description: "Experts in sourcing agents and output needs.",
    links: [],
  },
  {
    id: 13,
    icon: "/images/icon/LinkAgent.svg",
    image: "",
    title: "LinkAgent",
    description:
      "Masters of API management, hash optimization, and URL perfection.",
    links: [],
  },
  {
    id: 14,
    icon: "/images/icon/CapitalAgent.svg",
    image: "",
    title: "CapitalAgent",
    description:
      "Creating wallets, Dex accounts, multi-signatures, and managing eservices payouts.",
    links: [],
  },
  {
    id: 15,
    icon: "/images/icon/SecurityAgent.svg",
    image: "",
    title: "SecurityAgent",
    description: "Keeping a vigilant eye on anomalies and suspicious activity.",
    links: [],
  },
  {
    id: 16,
    icon: "/images/icon/LiveAgent.svg",
    image: "",
    title: "LiveAgent",
    description: "Ready to engage and assist when needed.",
    links: [],
  },
  {
    id: 17,
    icon: "/images/icon/SupportAgent.svg",
    image: "",
    title: "SupportAgent",
    description: "SupportAgent.",
    links: [],
  },
  {
    id: 18,
    icon: "/images/icon/StatsAgent.svg",
    image: "",
    title: "StatsAgent",
    description: "Crunching the numbers for in-depth analytics.",
    links: [],
  },
  {
    id: 19,
    icon: "/images/icon/PortfolioAgent.svg",
    image: "",
    title: "PortfolioAgent",
    description:
      "Leveraging new assets for portfolio leverage and resource extraction and synergy using DomainDirectory and VNOC.",
    links: [],
  },
  {
    id: 20,
    icon: "/images/icon/PitchAgent.svg",
    image: "",
    title: "PitchAgent",
    description: "Crafting engaging sales and story documents.",
    links: [],
  },
  {
    id: 21,
    icon: "/images/icon/TestAgent.svg",
    image: "",
    title: "TestAgent",
    description:
      "Ensuring all systems work flawlessly and finding any missing agent deliverables.",
    links: [],
  },
  {
    id: 22,
    icon: "/images/icon/GrowAgent.svg",
    image: "",
    title: "GrowAgent",
    description:
      "Focused on macro analysis to accelerate asset growth with limited resources.",
    links: [],
  },
  {
    id: 23,
    icon: "/images/icon/FundAgent.svg",
    image: "",
    title: "FundAgent",
    description:
      "Exploring DeFi, Dex, Gnosis multi-signature, and compound bonding curve for eshares via Ifund.",
    links: [],
  },
  {
    id: 24,
    icon: "/images/icon/ReferAgent.svg",
    image: "",
    title: "ReferAgent",
    description: "Powered by referrals.com, gathering the first 10 customers.",
    links: [],
  },
  {
    id: 25,
    icon: "/images/icon/PartnerAgent.svg",
    image: "",
    title: "PartnerAgent",
    description: "Investigating partner strategies to engage and align with.",
    links: [],
  },
  {
    id: 26,
    icon: "/images/icon/AttackAgent.svg",
    image: "",
    title: "AttackAgent",
    description:
      "Specializes in cybersecurity, protecting networks from unauthorized access and cyber threats.",
    links: [],
  },
  {
    id: 27,
    icon: "/images/icon/BankAgent.svg",
    image: "",
    title: "BankAgent",
    description:
      "Provides secure and efficient banking services, including transaction processing and fraud detection.",
    links: [],
  },
  {
    id: 28,
    icon: "/images/icon/BillAgent.svg",
    image: "",
    title: "BillAgent",
    description:
      "Automates and manages billing processes, ensuring accuracy and efficiency in financial transactions.",
    links: [],
  },
  {
    id: 29,
    icon: "/images/icon/CareAgent.svg",
    image: "",
    title: "CareAgent",
    description:
      "Delivers personalized healthcare services, utilizing AI to tailor care plans and monitor patient health.",
    links: [],
  },
  {
    id: 30,
    icon: "/images/icon/DealAgent.svg",
    image: "",
    title: "DealAgent",
    description:
      "Automates deal-making processes, from negotiation to closure, ensuring optimal terms and efficiency.",
    links: [],
  },
  {
    id: 31,
    icon: "/images/icon/EquityAgent.svg",
    image: "",
    title: "EquityAgent",
    description:
      "Analyzes and manages equity investments, providing market insights and financial advice to maximize returns.",
    links: [],
  },
  {
    id: 32,
    icon: "/images/icon/GamingAgent.svg",
    image: "",
    title: "GamingAgent",
    description:
      "Enhances gaming experiences by integrating advanced AI to provide personalized gaming suggestions and optimizations.",
    links: [],
  },
  {
    id: 33,
    icon: "/images/icon/GridAgent.svg",
    image: "",
    title: "GridAgent",
    description:
      "Optimizes power grid operations through real-time analytics and smart distribution strategies.",
    links: [],
  },
  {
    id: 34,
    icon: "/images/icon/IpAgent.svg",
    image: "",
    title: "IpAgent",
    description:
      "Manages and protects intellectual property rights, supporting innovation and compliance.",
    links: [],
  },
  {
    id: 35,
    icon: "/images/icon/MobileAgent.svg",
    image: "",
    title: "MobileAgent",
    description:
      "Focuses on mobile optimizations and solutions, ensuring seamless mobile experiences across various platforms.",
    links: [],
  },
  {
    id: 36,
    icon: "/images/icon/PollAgent.svg",
    image: "",
    title: "PollAgent",
    description:
      "Conducts and analyzes polls and surveys, providing insights into public opinion and market trends.",
    links: [],
  },
  {
    id: 37,
    icon: "/images/icon/ScienceAgent.svg",
    image: "",
    title: "ScienceAgent",
    description:
      "Facilitates scientific research by providing tools for data analysis, experiment tracking, and resource management.",
    links: [],
  },
  {
    id: 38,
    icon: "/images/icon/SupplyAgent.svg",
    image: "",
    title: "SupplyAgent",
    description:
      "Manages supply chain logistics, employing advanced algorithms to streamline operations and reduce costs.",
    links: [],
  },
  {
    id: 39,
    icon: "/images/icon/VoiceAgent.svg",
    image: "",
    title: "VoiceAgent",
    description:
      "Offers voice recognition and processing capabilities to enhance user interaction with devices through natural language.",
    links: [],
  },
  {
    id: 40,
    icon: "/images/icon/logo-agentchallenge.png",
    image: "",
    title: "AgentChallenge",
    description: "Creates challenges for AI agents.",
    links: [],
  },
  {
    id: 41,
    icon: "/images/icon/logo-agentnews.png",
    image: "",
    title: "AgentNews",
    description: "Builds news sites using AI agents.",
    links: [],
  },
  {
    id: 42,
    icon: "/images/icon/logo-agentmanager.png",
    image: "",
    title: "AgentManager",
    description: "Manages agents for your domain.",
    links: [],
  },
  {
    id: 44,
    icon: "/images/icon/FinanceAgent.svg",
    image: "",
    title: "FinanceAgent",
    description: "Automates financial analysis and investment strategies.",
    links: [],
  },
  {
    id: 45,
    icon: defaultIcon,
    image: "",
    title: "CryptoAgent",
    description: "Manages cryptocurrency investments and trading.",
    links: [],
  },
  {
    id: 46,
    icon: defaultIcon,
    image: "",
    title: "Abot",
    description:
      "Offers AI-powered automation tools to streamline business processes.",
    links: [],
  },
  {
    id: 47,
    icon: defaultIcon,
    image: "",
    title: "AccountBot",
    description:
      "Streamlines financial management by automating bookkeeping, reporting, and account reconciliation.",
    links: [],
  },
  {
    id: 48,
    icon: defaultIcon,
    image: "",
    title: "BotChallenge",
    description:
      "Hosts competitions and challenges for AI and robotics enthusiasts.",
    links: [],
  },
  {
    id: 49,
    icon: defaultIcon,
    image: "",
    title: "BusinessBot",
    description:
      "Automates business processes, enabling companies to operate more efficiently.",
    links: [],
  },
  {
    id: 50,
    icon: defaultIcon,
    image: "",
    title: "CampusBot",
    description:
      "Offers AI-driven tools for student engagement, campus management, and academic support.",
    links: [],
  },
  {
    id: 51,
    icon: defaultIcon,
    image: "",
    title: "CarbonAgents",
    description:
      "Supports sustainability efforts by providing tools and resources for carbon footprint management.",
    links: [],
  },
  {
    id: 52,
    icon: defaultIcon,
    image: "",
    title: "CarbonBots",
    description:
      "Empowers businesses to manage and reduce their carbon footprint with AI-driven tools.",
    links: [],
  },
  {
    id: 53,
    icon: defaultIcon,
    image: "",
    title: "CasinoBot",
    description:
      "Provides AI-powered solutions for the gaming and casino industry.",
    links: [],
  },
  {
    id: 54,
    icon: defaultIcon,
    image: "",
    title: "ChallengeAgent",
    description:
      "Facilitates innovation by connecting organizations with problem solvers.",
    links: [],
  },
  {
    id: 55,
    icon: defaultIcon,
    image: "",
    title: "CorpBot",
    description:
      "Streamlines corporate operations with AI-driven solutions for workflow automation and document management.",
    links: [],
  },
  {
    id: 56,
    icon: defaultIcon,
    image: "",
    title: "CourtAgent",
    description:
      "Simplifies legal processes by providing AI-assisted tools for case management.",
    links: [],
  },
  {
    id: 57,
    icon: defaultIcon,
    image: "",
    title: "CruiseAgent",
    description: "Connects travelers with personalized cruise experiences.",
    links: [],
  },
  {
    id: 59,
    icon: defaultIcon,
    image: "",
    title: "CyberBots",
    description: "Offers advanced cybersecurity solutions powered by AI.",
    links: [],
  },
  {
    id: 60,
    icon: defaultIcon,
    image: "",
    title: "DebtAgent",
    description: "Provides debt management solutions.",
    links: [],
  },
  {
    id: 61,
    icon: defaultIcon,
    image: "",
    title: "DesignBots",
    description:
      "Automates the design process, offering AI-powered tools for graphic design.",
    links: [],
  },
  {
    id: 62,
    icon: defaultIcon,
    image: "",
    title: "DockerAgent",
    description:
      "Specializes in containerization services, helping businesses deploy and manage applications.",
    links: [],
  },
  {
    id: 63,
    icon: defaultIcon,
    image: "",
    title: "EduAgent",
    description:
      "Connects students with educational resources and opportunities.",
    links: [],
  },
  {
    id: 64,
    icon: defaultIcon,
    image: "",
    title: "EnergyBots",
    description: "Offers AI-driven energy management solutions.",
    links: [],
  },
  {
    id: 65,
    icon: defaultIcon,
    image: "",
    title: "FantasyBot",
    description:
      "Enhances fantasy sports experiences with AI-powered tools for team management.",
    links: [],
  },
  {
    id: 66,
    icon: defaultIcon,
    image: "",
    title: "GrantAgent",
    description: "Connects organizations with grant opportunities.",
    links: [],
  },
  {
    id: 67,
    icon: defaultIcon,
    image: "",
    title: "HealthAgent",
    description:
      "Revolutionizes healthcare by connecting users with AI-driven tools for personalized health management.",
    links: [],
  },
  {
    id: 68,
    icon: defaultIcon,
    image: "",
    title: "HealthAgents",
    description: "Connects users with personalized healthcare services.",
    links: [],
  },
  {
    id: 69,
    icon: defaultIcon,
    image: "",
    title: "HistoryBot",
    description: "Provides educational tools and resources focused on history.",
    links: [],
  },
  {
    id: 70,
    icon: defaultIcon,
    image: "",
    title: "HomeBot",
    description: "Offers smart home automation solutions.",
    links: [],
  },
  {
    id: 71,
    icon: defaultIcon,
    image: "",
    title: "IBot",
    description:
      "Provides AI-powered solutions for personal and business productivity.",
    links: [],
  },
  {
    id: 72,
    icon: defaultIcon,
    image: "",
    title: "IPAgent",
    description: "Specializes in intellectual property management.",
    links: [],
  },
  {
    id: 73,
    icon: defaultIcon,
    image: "",
    title: "JavaBot",
    description: "Offers Java development services.",
    links: [],
  },
  {
    id: 74,
    icon: defaultIcon,
    image: "",
    title: "LawyerBot",
    description:
      "Simplifies legal services by offering AI-driven tools for document preparation.",
    links: [],
  },
  {
    id: 75,
    icon: defaultIcon,
    image: "",
    title: "LeaseAgent",
    description: "Provides tools for managing lease agreements.",
    links: [],
  },
  {
    id: 76,
    icon: defaultIcon,
    image: "",
    title: "LiveAgents",
    description: "Connects businesses with live customer service agents.",
    links: [],
  },
  {
    id: 77,
    icon: defaultIcon,
    image: "",
    title: "LoanBots",
    description: "Automates loan processing with AI-powered tools.",
    links: [],
  },
  {
    id: 78,
    icon: defaultIcon,
    image: "",
    title: "MarketBot",
    description: "Provides AI-driven marketing solutions.",
    links: [],
  },
  {
    id: 79,
    icon: defaultIcon,
    image: "",
    title: "MediaBot",
    description:
      "Automates media production and distribution with AI-powered tools.",
    links: [],
  },
  {
    id: 80,
    icon: defaultIcon,
    image: "",
    title: "MedicalAgent",
    description: "Connects users with healthcare services.",
    links: [],
  },
  {
    id: 81,
    icon: defaultIcon,
    image: "",
    title: "NodeAgent",
    description: "Specializes in node management and deployment services.",
    links: [],
  },
  {
    id: 82,
    icon: defaultIcon,
    image: "",
    title: "NutriAgent",
    description: "Provides personalized nutrition and wellness advice.",
    links: [],
  },
  {
    id: 83,
    icon: defaultIcon,
    image: "",
    title: "OceanBot",
    description: "Offers ocean exploration and conservation tools.",
    links: [],
  },
  {
    id: 84,
    icon: defaultIcon,
    image: "",
    title: "PartyAgent",
    description: "Offers event planning and management services.",
    links: [],
  },
  {
    id: 85,
    icon: defaultIcon,
    image: "",
    title: "PartyBot",
    description: "Automates party planning with AI-powered tools.",
    links: [],
  },
  {
    id: 86,
    icon: defaultIcon,
    image: "",
    title: "PeaceBot",
    description: "Promotes global peace initiatives with AI-driven tools.",
    links: [],
  },
  {
    id: 87,
    icon: defaultIcon,
    image: "",
    title: "PictureBot",
    description: "Automates image editing and management.",
    links: [],
  },
  {
    id: 88,
    icon: defaultIcon,
    image: "",
    title: "PlayAgents",
    description: "Connects gamers with opportunities in the gaming industry.",
    links: [],
  },
  {
    id: 89,
    icon: defaultIcon,
    image: "",
    title: "PoliticalAgent",
    description:
      "Offers campaign management solutions for political strategies.",
    links: [],
  },
  {
    id: 90,
    icon: defaultIcon,
    image: "",
    title: "PollutionBot",
    description:
      "Monitors and reports on environmental pollution with AI-powered tools.",
    links: [],
  },
  {
    id: 91,
    icon: defaultIcon,
    image: "",
    title: "PornAgent",
    description:
      "Provides a secure and personalized platform for adult content.",
    links: [],
  },
  {
    id: 92,
    icon: defaultIcon,
    image: "",
    title: "PRAgent",
    description: "Offers public relations services with AI-driven tools.",
    links: [],
  },
  {
    id: 93,
    icon: defaultIcon,
    image: "",
    title: "ProductBot",
    description: "Automates product management with AI-powered tools.",
    links: [],
  },
  {
    id: 94,
    icon: defaultIcon,
    image: "",
    title: "ProfileAgent",
    description:
      "Helps individuals and businesses manage their online profiles.",
    links: [],
  },
  {
    id: 95,
    icon: defaultIcon,
    image: "",
    title: "ProfileBot",
    description: "Automates profile management across platforms.",
    links: [],
  },
  {
    id: 96,
    icon: defaultIcon,
    image: "",
    title: "PropertyBot",
    description:
      "Offers real estate management solutions with AI-driven tools.",
    links: [],
  },
  {
    id: 97,
    icon: defaultIcon,
    image: "",
    title: "PurchaseAgent",
    description: "Automates the purchasing process.",
    links: [],
  },
  {
    id: 98,
    icon: defaultIcon,
    image: "",
    title: "RealtorAgent",
    description: "Connects real estate agents with clients.",
    links: [],
  },
  {
    id: 99,
    icon: defaultIcon,
    image: "",
    title: "RealtyBot",
    description: "Automates real estate transactions.",
    links: [],
  },
  {
    id: 100,
    icon: defaultIcon,
    image: "",
    title: "SchoolBot",
    description: "Offers AI-driven solutions for educational institutions.",
    links: [],
  },
  {
    id: 101,
    icon: defaultIcon,
    image: "",
    title: "SecurityBot",
    description: "Specializes in cybersecurity automation.",
    links: [],
  },
  {
    id: 102,
    icon: defaultIcon,
    image: "",
    title: "SeedAgent",
    description: "Helps startups secure seed funding.",
    links: [],
  },
  {
    id: 103,
    icon: defaultIcon,
    image: "",
    title: "ServerAgents",
    description: "Offers server management and optimization services.",
    links: [],
  },
  {
    id: 104,
    icon: defaultIcon,
    image: "",
    title: "ServiceAgents",
    description: "Connects businesses with service providers.",
    links: [],
  },
  {
    id: 105,
    icon: defaultIcon,
    image: "",
    title: "ServiceBot",
    description: "Automates customer service with AI-powered tools.",
    links: [],
  },
  {
    id: 106,
    icon: defaultIcon,
    image: "",
    title: "SexBots",
    description: "Offers AI-driven companionship solutions.",
    links: [],
  },
  {
    id: 107,
    icon: defaultIcon,
    image: "",
    title: "SoftwareBot",
    description: "Automates software development processes.",
    links: [],
  },
  {
    id: 108,
    icon: defaultIcon,
    image: "",
    title: "SportsBot",
    description: "Provides AI-powered sports analytics.",
    links: [],
  },
  {
    id: 109,
    icon: defaultIcon,
    image: "",
    title: "StoreBot",
    description: "Automates e-commerce operations with AI-driven tools.",
    links: [],
  },
  {
    id: 110,
    icon: defaultIcon,
    image: "",
    title: "StreamAgent",
    description: "Enhances live streaming experiences with AI-driven tools.",
    links: [],
  },
  {
    id: 111,
    icon: defaultIcon,
    image: "",
    title: "StudentAgent",
    description: "Connects students with educational opportunities.",
    links: [],
  },
  {
    id: 112,
    icon: defaultIcon,
    image: "",
    title: "StyleBot",
    description: "Offers personalized fashion advice and styling services.",
    links: [],
  },
  {
    id: 113,
    icon: defaultIcon,
    image: "",
    title: "TalkBot",
    description: "Offers AI-powered conversational agents.",
    links: [],
  },
  {
    id: 114,
    icon: defaultIcon,
    image: "",
    title: "TechBot",
    description: "Automates IT support and management with AI-driven tools.",
    links: [],
  },
  {
    id: 115,
    icon: defaultIcon,
    image: "",
    title: "TicketBot",
    description: "Automates ticket sales and management.",
    links: [],
  },
  {
    id: 116,
    icon: defaultIcon,
    image: "",
    title: "TitleBot",
    description: "Simplifies title management in real estate transactions.",
    links: [],
  },
  {
    id: 117,
    icon: defaultIcon,
    image: "",
    title: "TourBot",
    description: "Offers virtual tour solutions for real estate and travel.",
    links: [],
  },
  {
    id: 118,
    icon: defaultIcon,
    image: "",
    title: "TradeBots",
    description: "Automates trading strategies with AI-powered tools.",
    links: [],
  },
  {
    id: 119,
    icon: defaultIcon,
    image: "",
    title: "TradingBot",
    description: "Delivers automated trading solutions with AI-driven tools.",
    links: [],
  },
  {
    id: 120,
    icon: defaultIcon,
    image: "",
    title: "VBot",
    description: "Offers versatile AI-powered virtual assistants.",
    links: [],
  },
  {
    id: 121,
    icon: defaultIcon,
    image: "",
    title: "VendorBot",
    description: "Streamlines vendor management with AI-driven tools.",
    links: [],
  },
  {
    id: 122,
    icon: defaultIcon,
    image: "",
    title: "VentureBot",
    description:
      "Provides AI-powered tools for venture capital and startup management.",
    links: [],
  },
  {
    id: 123,
    icon: defaultIcon,
    image: "",
    title: "VetBot",
    description: "Offers veterinary services and pet care advice.",
    links: [],
  },
  {
    id: 124,
    icon: defaultIcon,
    image: "",
    title: "VirtualBot",
    description: "Creates virtual assistants and AI-driven solutions.",
    links: [],
  },
  {
    id: 125,
    icon: defaultIcon,
    image: "",
    title: "WellnessAgent",
    description:
      "Promotes health and wellness by offering personalized wellness plans and telehealth services.",
    links: [],
  },
];

// Sort the featuresData array alphabetically by title
featuresData.sort((a, b) => a.title.localeCompare(b.title));

export default featuresData;
