import { motion } from 'framer-motion';

const ProjectCard = ({ title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
    className="p-4 border rounded-lg shadow-lg"
  >
    <h2>{title}</h2>
    <p>{description}</p>
  </motion.div>
);

export default ProjectCard;