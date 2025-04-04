"use client";
import { motion } from "framer-motion";
import { FaCode, FaGamepad, FaPalette, FaPencilRuler, FaBullhorn } from 'react-icons/fa';

const Services = () => {
  const servicesData = [
    {
      title: "Web Development",
      description: "Custom web solutions using cutting-edge technologies like Next.js, React, and Node.js. We build scalable, performant applications that drive business growth.",
      icon: <FaCode className="w-8 h-8" />,
      color: "bg-gradient-to-br from-pink to-violet-600",
    },
    {
      title: "Game Design",
      description: "Immersive gaming experiences using Unity and modern game development practices. From concept to deployment, we create engaging games that captivate players.",
      icon: <FaGamepad className="w-8 h-8" />,
      color: "bg-gradient-to-br from-blue-500 to-cyan-400",
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality. We create intuitive interfaces that enhance user engagement and satisfaction.",
      icon: <FaPalette className="w-8 h-8" />,
      color: "bg-gradient-to-br from-green-400 to-emerald-500",
    },
    {
      title: "Graphic Design",
      description: "Creative visual solutions that communicate your brand's message effectively. From logos to marketing materials, we deliver designs that make an impact.",
      icon: <FaPencilRuler className="w-8 h-8" />,
      color: "bg-gradient-to-br from-orange-400 to-red-500",
    },
    {
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns that drive growth. We leverage data-driven insights to maximize your online presence and ROI.",
      icon: <FaBullhorn className="w-8 h-8" />,
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
    }
  ];

  return (
    <section className="w-full px-4 py-24 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink to-violet-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern digital landscape
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card border border-border p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${service.color}`} />
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${service.color} text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-pink to-violet-600" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;