

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" border-t border-border py-8 bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg">
      <div className="container mx-auto px-4 ">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Saikat Bahadur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;