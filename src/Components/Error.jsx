import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-4xl font-bold mb-4">Video Unavailable</h1>
            <p className="text-lg text-gray-400 mb-6">
                Oops! This video is currently unavailable.
                Check out the home page for more movies!
            </p>

            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Link to="/" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all">
                    Back to Home
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default ErrorPage;
