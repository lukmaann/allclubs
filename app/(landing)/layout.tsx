import LandingPageNavbar from "./_components/navbar";

interface LangingPageLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LangingPageLayoutProps) => {
  return (
    <div>
      <LandingPageNavbar />
      {children}
    </div>
  );
};

export default LandingLayout;
