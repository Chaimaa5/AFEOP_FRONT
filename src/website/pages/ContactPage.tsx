import React from "react";
import Contact from "../components/HomeSections/Contact";
import { MinimalBreadcrumb } from "../components/Breadcrumb/BreadcrumbVariations";
import WebsiteLayout from "../components/Layout/WebsiteLayout";

const ContactPage: React.FC = () => {
  return (
    <WebsiteLayout>
      <div className="bg-neutral-light">
        <MinimalBreadcrumb
          items={[
            // { label: "Home", path: "/" },
            { label: "Contact" }
          ]}
          title="Get in Touch with AFEOP"
          subtitle="Have questions about our Earth observation platform? We're here to help you leverage satellite data for African agriculture and environmental monitoring."
          label="CONTACT US"
        />
        <Contact />
      </div>
    </WebsiteLayout>
  );
};

export default ContactPage;
