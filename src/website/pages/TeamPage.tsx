import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WebsiteLayout from "../components/Layout/WebsiteLayout";
import { MinimalBreadcrumb } from "../components/Breadcrumb/BreadcrumbVariations";
import { Badge } from "../components/Badge";
import { X, Linkedin } from "lucide-react";
import { TeamTexts } from "../particles/DataLists";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  expertise: string[];
  email: string;
  linkedin?: string;
}

const TeamPage: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Build teamMembers from TeamTexts, omitting linkedin/github for now
const teamMembers: TeamMember[] = Object.values(TeamTexts).map((card: any, idx) => ({
  id: idx + 1,
  name: card.Name,
  role: card.Position,
  department: card.Position.includes("Professor")
    ? "Research"
    : card.Position.includes("Director")    
    ? "Research Director"
    : "Platform Development",
  image: card.Image,
  bio: card.Description,
  expertise: Array.isArray(card.Expertise) ? card.Expertise : [],
  email: typeof card.Email === "string" ? card.Email : "",
  linkedin: typeof card.Linkedin === "string" ? card.Linkedin : "",
}));
  const departments = [
    "All Teams",
    "Remote Sensing & GIS",
    "Data Science & Analytics",
    "Water Resources",
    "Climate & Drought",
    "Platform Development",
    "Agricultural Sciences",
  ];

  const [activeFilter, setActiveFilter] = useState("All Teams");

  const filteredMembers =
    activeFilter === "All Teams"
      ? teamMembers
      : teamMembers.filter((member) => member.department === activeFilter);

  return (
    <WebsiteLayout>
      {/* Breadcrumb */}
      <MinimalBreadcrumb
        title="Meet Our Team"
        subtitle="The scientists, engineers, and researchers driving innovation in Earth observation for Africa."
        items={[
          { label: "Home", path: "/" },
          { label: "Team", path: "/team" },
        ]}
      />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="light">OUR TEAM</Badge>
                 <motion.h2
                                          className="text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-bold text-green2 leading-[1.1] mb-0"
                                          initial={{ opacity: 0, y: 30 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: true }}
                                          transition={{ duration: 0.6, delay: 0.2 }}
                                      >
                                         
                Experts in Earth Observation & Geospatial Science
                                      </motion.h2>
         
              <p className="text-gray-600 text-lg leading-relaxed">
                Our multidisciplinary team combines expertise in remote sensing, data science,
                hydrology, and software engineering to deliver cutting-edge Earth observation
                solutions for African agriculture and environmental monitoring.
              </p>
            </motion.div>
          </div>

          {/* Department Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveFilter(dept)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === dept
                    ? "bg-darkgreen text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {dept}
              </button>
            ))}
          </motion.div>

          {/* Team Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedMember(member)}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-square">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-darkgreen/80 via-darkgreen/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                        <span className="text-white text-sm font-medium">View Profile</span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-green2 mb-1 group-hover:text-green2 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-green2 font-medium text-sm mb-2">{member.role}</p>
                      <p className="text-gray-500 text-xs">{member.department}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-6 right-6 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>

                <div className="grid md:grid-cols-5 gap-0">
                  {/* Left Side - Image */}
                  <div className="md:col-span-2 relative">
                    <div className="h-full min-h-[400px] md:min-h-[600px] relative overflow-hidden">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-darkgreen/60 via-transparent to-transparent"></div>
                    </div>
                  </div>

                  {/* Right Side - Info */}
                  <div className="md:col-span-3 p-8 lg:p-12">
                    <Badge variant="light">{selectedMember.department}</Badge>

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4 mb-2">
                      {selectedMember.name}
                    </h2>
                    <p className="text-green2 text-lg font-semibold mb-6">
                      {selectedMember.role}
                    </p>

                    {/* Bio */}
                    <div className="mb-8">
                      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                        Biography
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{selectedMember.bio}</p>
                    </div>

                    {/* Expertise */}
                    {selectedMember.expertise && selectedMember.expertise.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Expertise</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedMember.expertise.map((skill, idx) => (
                            <span key={idx} className="px-4 py-2 bg-greenlight/30 text-green2 text-sm font-medium rounded-full border border-darkgreen/20">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* LinkedIn */}
                    {selectedMember.linkedin && (
                      <div className="mb-4">
                        <a
                          href={selectedMember.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-green2 border-2 border-darkgreen rounded-full hover:bg-darkgreen hover:text-white transition-all duration-300 hover:scale-105 text-sm font-medium"
                        >
                          <Linkedin className="w-4 h-4" />
                          LinkedIn
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </WebsiteLayout>
  );
};

export default TeamPage;
