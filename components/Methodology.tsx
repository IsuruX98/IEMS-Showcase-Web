import { motion } from 'framer-motion';
import { CogIcon, CloudIcon, CpuChipIcon, SignalIcon } from '@heroicons/react/24/outline';

const methodologySteps = [
    {
        title: "Phase 1: Data Foundation & Multi-Source Acquisition",
        icon: SignalIcon,
        description: "Diverse data collection from IoT sensors (MQ-135, SDS011, DHT22), high-resolution satellite imagery (NEON Tree Benchmark dataset), urban audio recordings, and vehicle specification datasets. Rigorous preprocessing including noise filtering, image normalization, NDVI calculation, audio feature extraction (Mel-spectrograms), and comprehensive data cleaning.",
        color: "from-blue-500 to-blue-600"
    },
    {
        title: "Phase 2: Intelligent Core - AI Model Development",
        icon: CpuChipIcon,
        description: "Predictive analytics with LSTM networks for air quality and green coverage forecasting. U-Net CNNs for tree segmentation, CNN multi-label classifiers for noise sources. Ensemble ML models (Random Forest + XGBoost) for CO₂ prediction. TOPSIS MCDM algorithm and LLaMA 3.3 with RAG for personalized recommendations.",
        color: "from-green-500 to-green-600"
    },
    {
        title: "Phase 3: System Architecture & Integration",
        icon: CloudIcon,
        description: "Modular client-server architecture with Python Flask for AI serving, Node.js/Express.js for web services. React.js frontend with interactive dashboards, integrated maps (Mapbox, Leaflet.js), and data visualization (ApexCharts, Chart.js). MongoDB and Firebase for flexible data storage with RESTful API communication.",
        color: "from-purple-500 to-purple-600"
    },
    {
        title: "Phase 4: User Experience & Testing",
        icon: CogIcon,
        description: "Interactive dashboards for complex environmental data presentation (AQI heatmaps, vegetation maps, noise distributions). Real-time feedback systems with gamification elements. Comprehensive testing including unit tests, integration tests, usability evaluation (SUS surveys), and real-world validation under diverse conditions.",
        color: "from-orange-500 to-orange-600"
    }
];

const systemComponents = [
    {
        component: "EcoSensor AI - Air Quality Module",
        description: "IoT sensor network (MQ-135, SDS011, DHT22) for real-time air pollutant monitoring with hybrid ML models (RF, SVR, LSTM) and LLaMA 3.3 for health advisories",
        technologies: ["Arduino", "ESP32", "Python", "TensorFlow", "LLaMA 3.3"]
    },
    {
        component: "Green Vision AI - Vegetation Analysis",
        description: "Satellite imagery processing using U-Net CNNs for tree segmentation, NDVI calculations, and LSTM networks for green coverage forecasting",
        technologies: ["OpenCV", "U-Net", "LSTM", "NDVI", "Satellite Imagery"]
    },
    {
        component: "Noise Guard AI - Sound Monitoring",
        description: "IoT-based noise sensors with CNN models for multi-label sound classification and real-time noise mapping with predictive analytics",
        technologies: ["IoT Microphones", "CNNs", "Librosa", "Mel-spectrograms", "Real-time Processing"]
    },
    {
        component: "EcoGo - Vehicle CO₂ Management",
        description: "Ensemble ML models for CO₂ prediction, TOPSIS-based vehicle ranking, and LLaMA 3.3 with RAG for personalized eco-driving recommendations",
        technologies: ["XGBoost", "Random Forest", "TOPSIS", "LLaMA 3.3", "RAG"]
    },
    {
        component: "Integrated Backend System",
        description: "Modular architecture with Python Flask for AI serving, Node.js for web services, MongoDB for data storage, and RESTful APIs",
        technologies: ["Python Flask", "Node.js", "MongoDB", "Firebase", "REST APIs"]
    },
    {
        component: "Interactive Frontend Dashboard",
        description: "React.js-based responsive interface with real-time data visualization, interactive maps, and user engagement features including gamification",
        technologies: ["React.js", "React-Leaflet", "Mapbox", "Chart.js", "Tailwind CSS", "Axios"]
    }
];

export default function Methodology() {
    return (
        <section id="methodology" className="py-12 sm:py-16 md:py-20 bg-zinc-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Methodology
                        </h2>
                        <div className="w-20 h-0.5 bg-blue-500/50 mx-auto rounded-full"></div>
                    </div>

                    {/* System Architecture Overview */}
                    <div className="mb-16">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center">
                            Building IEMS Systematically
                        </h3>
                        <div className="bg-white/5 p-6 sm:p-8 rounded-lg border border-white/10 mb-8">
                            <p className="text-gray-300 text-lg leading-relaxed text-center">
                                The Intelligent EcoUrban Monitoring System (IEMS) was developed through a comprehensive, multi-stage methodology,
                                integrating advanced research with practical application to address complex urban environmental challenges.
                                Our approach ensures robust data handling, accurate AI modeling, seamless system integration, and a user-centric experience.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {methodologySteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${step.color} rounded-lg blur opacity-25`}></div>
                                    <div className="relative bg-white/5 p-6 rounded-lg border border-white/10 h-full">
                                        <div className="flex items-center mb-4">
                                            <step.icon className="h-8 w-8 text-white mr-3" />
                                            <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                                        </div>
                                        <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* System Components */}
                    <div className="mb-16">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center">
                            IEMS Component Architecture
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {systemComponents.map((component, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white/5 p-6 rounded-lg border border-white/10"
                                >
                                    <h4 className="text-lg font-semibold text-white mb-3">{component.component}</h4>
                                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{component.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {component.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Key Achievements */}
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center">
                            Methodology Achievements
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-white/5 p-6 sm:p-8 rounded-lg border border-white/10">
                                <h4 className="text-xl font-semibold text-white mb-4">Data Processing Excellence</h4>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                                        <span className="text-gray-300 text-sm">Multi-source data integration from IoT sensors, satellite imagery, and vehicle datasets</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                                        <span className="text-gray-300 text-sm">Advanced preprocessing with NDVI calculation and Mel-spectrogram extraction</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                                        <span className="text-gray-300 text-sm">LLM-powered text parsing for emission certificate data extraction</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/5 p-6 sm:p-8 rounded-lg border border-white/10">
                                <h4 className="text-xl font-semibold text-white mb-4">AI Model Innovation</h4>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></span>
                                        <span className="text-gray-300 text-sm">U-Net CNNs for precise pixel-wise tree segmentation from satellite imagery</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></span>
                                        <span className="text-gray-300 text-sm">Multi-label CNN classifiers for overlapping urban noise source identification</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></span>
                                        <span className="text-gray-300 text-sm">Ensemble ML models with TOPSIS decision-making for vehicle eco-efficiency</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></span>
                                        <span className="text-gray-300 text-sm">LLaMA 3.3 with RAG for context-aware environmental recommendations</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                            <h4 className="text-green-400 font-semibold mb-2">Systematic Impact</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                This systematic and iterative methodology has enabled the development of IEMS as a robust, scalable,
                                and impactful platform for intelligent eco-urban monitoring, ensuring high performance across diverse
                                environmental conditions and user scenarios.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 