import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer";
import CustomCursor from "../CustomCursor/CustomCursor";

interface WebsiteLayoutProps {
  children: React.ReactNode;
}

const WebsiteLayout: React.FC<WebsiteLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col cursor-none">
      <CustomCursor />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
