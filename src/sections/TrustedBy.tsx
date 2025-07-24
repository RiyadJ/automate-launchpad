import { motion } from 'framer-motion';

const TrustedBy = () => {
  // Placeholder company logos - in real implementation, these would be actual client logos
  const companies = [
    { name: 'TechCorp', logo: '🏢' },
    { name: 'InnovateLab', logo: '🧪' },
    { name: 'GrowthCo', logo: '📈' },
    { name: 'AutoFlow', logo: '⚡' },
    { name: 'DataSync', logo: '🔗' },
    { name: 'StreamlineHQ', logo: '🌊' },
  ];

  return (
    <section className="py-16 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground text-lg mb-8">
            Trusted by growing businesses to automate their operations
          </p>
        </motion.div>

        {/* Company Logos Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-6 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-all cursor-pointer"
            >
              <div className="text-4xl mb-2">{company.logo}</div>
              <span className="text-sm text-muted-foreground font-medium">{company.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center"
        >
          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Businesses Automated</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-secondary mb-2">10K+</div>
            <div className="text-muted-foreground">Hours Saved Monthly</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-success mb-2">95%</div>
            <div className="text-muted-foreground">Error Reduction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;