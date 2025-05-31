export const LOGO = "/logo.png";
export const NAME = "ImJustCri";
export const SHORT_DESCRIPTION = "Italian IT Student and Developer";
const IMG_PATH_START = "/projects_photos/"

const PROJECT_PICTURES = [
    "cmi.png",
    "bancaonline.png",
    "deliveryapp.png",
    "studyswap.png",
];

export const PROJECTS = [
    {
        projectHref: "capacitameritoinclusione",
        title: "Capacità Merito Inclusione",
        body: "Website made and mantained using WordPress",
        imagePath: IMG_PATH_START + PROJECT_PICTURES[0],
        chip_label: 'WordPress',
        chip_style: 'background: #3858E9',
    },
    {
        projectHref: "bancaonline",
        title: "BancaOnline",
        body: "A bank dashboard made in Astro for a school project",
        imagePath: IMG_PATH_START + PROJECT_PICTURES[1],
        chip_label: 'Astro',
        chip_style: 'background: #FF5B03',
    },
    {
        projectHref: "deliveryappui",
        title: "Delivery App UI",
        body: "UI Concept made on Figma",
        imagePath: IMG_PATH_START + PROJECT_PICTURES[2],
        chip_label: 'Figma',
        chip_style: 'background: #dd4848',
    },
    {
        projectHref: "studyswap",
        title: "StudySwap",
        body: "Mobile App for students (WIP)",
        imagePath: IMG_PATH_START + PROJECT_PICTURES[3],
        chip_label: 'Flutter',
        chip_style: 'background: #48589D',
    },
];