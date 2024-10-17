import { motion } from 'framer-motion';

const Header = () => (
  <motion.header
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1>My Portfolio</h1>
  </motion.header>
);

export default Header;