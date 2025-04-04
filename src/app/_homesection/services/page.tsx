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
      size: "lg:col-span-2 lg:row-span-1", // Wide card
    },
    {
      title: "Game Design",
      description: "Immersive gaming experiences using Unity and modern game development practices. From concept to deployment, we create engaging games that captivate players.",
      icon: <FaGamepad className="w-8 h-8" />,
      color: "bg-gradient-to-br from-blue-500 to-cyan-400",
      size: "lg:row-span-2", // Tall card
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality. We create intuitive interfaces that enhance user engagement and satisfaction.",
      icon: <FaPalette className="w-8 h-8" />,
      color: "bg-gradient-to-br from-green-400 to-emerald-500",
      size: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Graphic Design",
      description: "Creative visual solutions that communicate your brand's message effectively. From logos to marketing materials, we deliver designs that make an impact.",
      icon: <FaPencilRuler className="w-8 h-8" />,
      color: "bg-gradient-to-br from-orange-400 to-red-500",
      size: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns that drive growth. We leverage data-driven insights to maximize your online presence and ROI.",
      icon: <FaBullhorn className="w-8 h-8" />,
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
      size: "lg:col-span-2 lg:row-span-1", // Wide card
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl bg-card border border-border p-8 hover:shadow-lg transition-all duration-300 ${service.size}`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${service.color}`} />
              <div className="relative z-10 h-full flex flex-col">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color} text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground flex-grow">{service.description}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium bg-gradient-to-r from-pink to-violet-600 bg-clip-text text-transparent">
                    Learn more →
                  </span>
                </div>
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