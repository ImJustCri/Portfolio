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
        href: "https://capacitameritoinclusione.it",
        title: "Capacità Merito Inclusione",
        body: "Website made and mantained using WordPress",
        imagePath: PROJECT_PICTURES[0],
        chip_label: 'WordPress',
        chip_style: 'background: #3858E9',
    },
    {
        href: "https://github.com/ImJustCri/bancaonline",
        title: "BancaOnline",
        body: "A bank dashboard made in Astro for a school project",
        imagePath: PROJECT_PICTURES[1],
        chip_label: 'Astro',
        chip_style: 'background: #FF5B03',
    },
    {
        href: "https://www.figma.com/proto/M03SsYJp4BAGZaz7NfkDnj/Food-Delivery-App?page-id=1%3A3&node-id=69-379&node-type=frame&viewport=-2164%2C252%2C0.48&t=xoJHMcWoDkufL81V-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=69%3A379",
        title: "Delivery App UI",
        body: "UI Concept made on Figma",
        imagePath: PROJECT_PICTURES[2],
        chip_label: 'WordPress',
        chip_style: 'background: #3858E9',
    },
];