const HeaderComp = ({ url }) => {
  const pathName = url.pathname;
  console.log('aaaa url',url)
  const menuList = [
    { url: "/", label: "Home" },
    { url: "/about", label: "About" },
    { url: "/contact", label: "Contact" },
  ];
  return (
    <div className="header-wrapper">
      <div className="font-bold">R A S</div>
      <div className="menu-wrapper">
        {menuList.map((menu, i) => {
          return (
            <a
              key={i}
              href={menu.url}
              className={`${pathName === menu.url ? "menu-nav-active" : "menu-nav"}`}
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
