export const LOGO = "/Portfolio/logo.png";
export const NAME = "ImJustCri";
export const SHORT_DESCRIPTION = "Italian IT Student and Developer";

const PROJECT_PICTURES = [
    "/Portfolio/projects_photos/cmi.png",
    "/Portfolio/projects_photos/bancaonline.png",
    "/Portfolio/projects_photos/deliveryapp.png",
];

export const PROJECTS = [
    {
        projectHref: "capacitameritoinclusione",
        title: "Capacità Merito Inclusione",
        body: "Website made and mantained using WordPress",
        imagePath: PROJECT_PICTURES[0],
        chip_label: 'WordPress',
        chip_style: 'background: #3858E9',
    },
    {
        projectHref: "bancaonline",
        title: "BancaOnline",
        body: "A bank dashboard made in Astro for a school project",
        imagePath: PROJECT_PICTURES[1],
        chip_label: 'Astro',
        chip_style: 'background: #FF5B03',
    },
    {
        projectHref: "deliveryappui",
        title: "Delivery App UI",
        body: "UI Concept made on Figma",
        imagePath: PROJECT_PICTURES[2],
        chip_label: 'Figma',
        chip_style: 'background: #dd4848',
    },
];