export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "RHINESTONE PROJECT",
    description: "Corre hacia la grandeza con nosotros.",
    navItems: [
        {
            label: "STORE",
            href: "/store",
        },
        {
            label: "BLOG",
            href: "/blog",
        },
        {
            label: "ABOUT",
            href: "/about",
        },
    ],
    navMenuItems: [
        {
            label: "Store",
            href: "/store",
        },
        {
            label: "Blog",
            href: "/blog",
        },
        {
            label: "About",
            href: "/about",
        },
    ],
    links: {
        github: "https://github.com/nextui-org/nextui",
    },
};
