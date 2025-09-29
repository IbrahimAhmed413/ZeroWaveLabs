import { Calendar, Briefcase, Copy, Users, Star } from "lucide-react";

export const HeaderData = [
  // { name: "Our Expertise", link: "Ourexp" },
  { name: "Projects", link: "/projects" },
  { name: "About Us", link: "/aboutUs" },
];

export const navItems = [
  {
    name: "Services",
    dropdown: [
      { name: "UI/UX Design", link: "UI/UX_page" },
      { name: "Mobile App Development", link: "MAD_page" },
      { name: "Web App Development", link: "WEB_page" },
      { name: "Artificial Intelligence (AI)", link: "AI_page" },
      { name: "Data Analytics and Data Science", link: "DA_page" },
      { name: "Cloud and DevOps", link: "Cloud_page" },
      { name: "Google Workspace", link: "Google_page" },
      { name: "3D Modeling", link: "Google_page" },
      { name: "Digital Marketing", link: "Google_page" },
    ],
  },
  {
    name: "Free Resources",
    dropdown: [
      { name: "Python Tools", link: "/pythonToolsPage" },
      { name: "Web Templates", link: "codestack_page" },
      { name: "3D Models", link: "AI_page" },
    ],
  },
];

export const statsData = [
  {
    id: 1,
    icon: <Calendar size={24} />,
    number: "11+",
    label: "Years Of Experience",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    icon: <Briefcase size={24} />,
    number: "350+",
    label: "Products Delivered",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 3,
    icon: <Copy size={24} />,
    number: "50+",
    label: "NoCode Products Delivered",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 4,
    icon: <Users size={24} />,
    number: "90+",
    label: "Team Members",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 5,
    icon: <Star size={24} />,
    number: "200+",
    label: "Happy Customers",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
];
