const HeaderComp = ({ url }) => {
  const pathName = url.pathname;
  const menuList = [
    { url: "/porto-astro", label: "Home" },
    { url: "/porto-astro/about", label: "About" },
    { url: "/porto-astro/project", label: "Project" },
    { url: "/porto-astro/contact", label: "Contact" },
  ];
  return (
    <div className="header-wrapper">
      <div className="brand-wrapper">R A S</div>

      <div className="menu-wrapper">
        {menuList.map((menu, i) => {
          return (
            <a
              key={i}
              href={menu.url}
              className={`${
                pathName === menu.url ? "menu-nav-active" : "menu-nav"
              }`}
            >
              {menu.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderComp;
