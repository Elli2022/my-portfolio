const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>© {year} Eleonora Nocentini Sköldebrink</p>
    </footer>
  );
};

export default Footer;
