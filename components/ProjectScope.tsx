import { motion } from 'framer-motion';
import { ChartBarIcon, ExclamationTriangleIcon, LightBulbIcon, FlagIcon } from '@heroicons/react/24/outline';

const literatureSurvey = [
    {
        title: "Urban Air Quality Monitoring (EcoSensor AI)",
        content: "Numerous studies have explored IoT-based sensor networks for real-time air pollutant detection (CO₂, PM2.5, NO₂, SO₂). Advancements in Machine Learning, including Random Forests, Support Vector Regression (SVR), and LSTM networks, have shown promise in predicting air quality trends from sensor data and meteorological factors. However, few systems seamlessly integrate these predictions with actionable, context-aware recommendations for citizens and policymakers."
    },
    {
        title: "Urban Green Space Analysis (Green Vision AI)",
        content: "Remote sensing and GIS have long been used to assess urban green spaces. Early work focused on single indices like NDVI. More recent studies integrate multiple vegetation indices (EVI, SAVI) and increasingly leverage Deep Learning (CNNs like U-Net) for precise vegetation segmentation and classification from high-resolution satellite imagery. Temporal analysis using LSTMs for forecasting green cover changes is an emerging area, crucial for proactive urban planning."
    },
    {
        title: "Urban Noise Monitoring & Classification (Noise Guard AI)",
        content: "Research has advanced from basic sound level metering to sophisticated IoT-based noise sensor networks. AI, particularly CNNs and Convolutional Recurrent Neural Networks (CRNNs), is increasingly used for classifying urban soundscapes, distinguishing sources like traffic, construction, and human activity. Multi-label sound classification, addressing co-occurring noise sources, is a key development. Real-time noise mapping and predictive modeling are vital for effective noise management."
    },
    {
        title: "Vehicle CO₂ Emission Reduction (EcoGo)",
        content: "Predicting vehicle CO₂ emissions has involved simulation models and, more recently, ML techniques (ensemble methods like Random Forest, XGBoost) based on vehicle specifications (engine size, fuel type, powertrain). Multi-Criteria Decision-Making (MCDM) approaches like TOPSIS are used for vehicle comparison. Eco-driving principles and LLM-powered personalized recommendations for driving behavior and route optimization are gaining traction to influence behavioral change."
    }
];

const researchGaps = [
    "Lack of Integrated Multi-Pollutant Monitoring: Most systems focus on a single environmental aspect. There&apos;s a need for a unified platform that correlates data from air quality, noise pollution, green space health, and transportation emissions.",
    "From Data to Actionable Intelligence: Many systems excel at data collection and prediction but fall short in translating complex data into easily understandable, actionable recommendations for diverse stakeholders.",
    "Limited Personalized & Context-Aware Guidance: Generic advice has limited impact. There&apos;s a gap in providing recommendations tailored to specific locations, times, individual vehicle characteristics, or user contexts.",
    "Real-Time Dynamic Adaptation: Urban environments are highly dynamic. Systems need to adapt their monitoring and recommendations in real-time based on changing conditions, rather than relying on static models.",
    "Comprehensive Green Space Forecasting: While green space mapping exists, robust, accessible tools for forecasting changes in urban vegetation health and coverage over time are not widely integrated.",
    "Behavioral Change Enablement for CO₂ Reduction: Beyond CO₂ prediction, there&apos;s a need for systems that actively engage users in reducing their carbon footprint through personalized vehicle choice and eco-driving tips."
];

const researchObjectives = [
    {
        title: "EcoSensor AI - Air Quality & Green Vision",
        description: "Develop scalable IoT sensor networks for real-time air quality monitoring (CO₂, PM2.5, etc.) with hybrid AI models (RF, SVR, LSTM) for prediction. Implement CNN-based tree segmentation from satellite imagery and LSTM forecasting for green coverage changes."
    },
    {
        title: "Noise Guard AI - Smart Noise Monitoring",
        description: "Deploy IoT sensors for continuous urban noise data collection and develop advanced CNN models for accurate multi-label classification of noise sources. Create interactive dashboards for real-time and predicted noise visualization."
    },
    {
        title: "EcoGo - Vehicle CO₂ Reduction",
        description: "Create precise ensemble ML models for CO₂ emission prediction based on vehicle attributes. Implement MCDM (TOPSIS) for vehicle eco-efficiency ranking and integrate LLM with RAG for personalized emission reduction recommendations."
    },
    {
        title: "Integrated IEMS Platform",
        description: "Build a modular backend system (Python/Flask, Node.js) and responsive frontend dashboard (React.js) for seamless data visualization and user interaction across all components. Ensure robust data handling, storage, and API communication."
    }
];

export default function ProjectScope() {
    return (
        <section id="project-scope" className="py-12 sm:py-16 md:py-20 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Project Scope
                        </h2>
                        <div className="w-20 h-0.5 bg-green-500/50 mx-auto rounded-full"></div>
                    </div>

                    {/* Literature Survey */}
                    <div className="mb-16">
                        <div className="flex items-center mb-8">
                            <ChartBarIcon className="h-8 w-8 text-blue-400 mr-4" />
                            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Literature Survey</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {literatureSurvey.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white/5 p-6 rounded-lg border border-white/10"
                                >
                                    <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">{item.content}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* References */}
                        <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                            <h4 className="text-blue-400 font-semibold mb-4">References</h4>
                            <div className="space-y-2 text-gray-300 text-sm">
                                <p>[1] United Nations, &quot;World Urbanization Prospects 2018,&quot; UN Department of Economic and Social Affairs, 2019.</p>
                                <p>[2] M. Tikkiwal, V. Katiyar, and D. Singh, &quot;IoT-Based Air Pollution Monitoring and Forecasting System Using Machine Learning,&quot; <em>Sensors</em>, vol. 20, no. 11, pp. 2982–2997, 2020.</p>
                                <p>[3] H. Wang, X. Liu, and R. Li, &quot;Air Pollution Forecasting Using Hybrid Deep Learning Models,&quot; <em>Atmospheric Pollution Research</em>, vol. 12, no. 3, pp. 43–51, 2021.</p>
                                <p>[4] H. Zhong, K. Chen, C. Liu, and M. Zhu, &quot;A Survey on Vehicle CO₂ Emission Prediction Models,&quot; <em>Environmental Modelling & Software</em>, vol. 154, p. 105413, 2022.</p>
                                <p>[5] N. Subramaniam and N. Yusof, &quot;Ensemble Learning Models for Transportation CO₂ Emission Prediction,&quot; <em>Journal of Cleaner Production</em>, vol. 278, pp. 123–131, 2021.</p>
                                <p>[6] T. Thao, P. Nguyen, and L. Tran, &quot;Environmental Sound Classification Using Deep Convolutional Neural Networks,&quot; <em>Applied Acoustics</em>, vol. 174, p. 107660, 2021.</p>
                                <p>[7] I. Senanayake, W. Welivitiya and P. Nadeeka, &quot;Urban green spaces analysis for development planning in Colombo, Sri Lanka, utilizing THEOS satellite imagery – A remote sensing and GIS approach,&quot; <em>Urban Forestry & Urban Greening</em>, vol. 12, no. 3, 2013.</p>
                                <p>[8] Y. Cheng, J. Ding and H. Liu, &quot;Analysis and Assessment of Urban Green Space,&quot; <em>Academic Journal of Environment & Earth Science</em>, vol. 4, no. 4, 2022.</p>
                            </div>
                        </div>
                    </div>

                    {/* Research Gap */}
                    <div className="mb-16">
                        <div className="flex items-center mb-8">
                            <ExclamationTriangleIcon className="h-8 w-8 text-orange-400 mr-4" />
                            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Research Gap</h3>
                        </div>
                        <div className="bg-white/5 p-6 sm:p-8 rounded-lg border border-white/10">
                            <p className="text-gray-300 mb-6 text-lg">
                                Following areas are the research gaps found in most of the recent environmental monitoring systems:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {researchGaps.map((gap, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start"
                                    >
                                        <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span className="text-gray-300">{gap}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Research Problem & Solution */}
                    <div className="mb-16">
                        <div className="flex items-center mb-8">
                            <LightBulbIcon className="h-8 w-8 text-yellow-400 mr-4" />
                            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Research Problem & Solution</h3>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-red-500/10 p-6 sm:p-8 rounded-lg border border-red-500/20">
                                <h4 className="text-xl font-bold text-red-400 mb-4">The Problem</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    Modern cities face an escalating and interconnected environmental crisis. Air and noise pollution diminish public health,
                                    degrading green spaces reduce ecological resilience, and transportation remains a major CO₂ contributor. Decision-makers
                                    lack integrated, real-time, and predictive tools to effectively manage these complex challenges. Citizens are often
                                    unaware or unequipped to make environmentally sound choices.
                                </p>
                            </div>
                            <div className="bg-green-500/10 p-6 sm:p-8 rounded-lg border border-green-500/20">
                                <h4 className="text-xl font-bold text-green-400 mb-4">Our Solution: IEMS - A Unified Intelligent System</h4>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    IEMS is an integrated platform designed to comprehensively monitor, analyze, predict, and provide actionable insights
                                    across key urban environmental domains through specialized, interconnected AI-driven components:
                                </p>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <span className="text-blue-400 font-semibold">EcoSensor AI:</span>
                                        <span className="text-gray-300"> Real-time air quality monitoring using IoT sensors (MQ-135, SDS011, DHT22) with hybrid ML models and LLM-generated health advisories</span>
                                    </div>
                                    <div>
                                        <span className="text-green-400 font-semibold">Green Vision AI:</span>
                                        <span className="text-gray-300"> Satellite-based urban vegetation analysis using U-Net CNNs for tree segmentation and LSTM networks for green coverage forecasting</span>
                                    </div>
                                    <div>
                                        <span className="text-purple-400 font-semibold">Noise Guard AI:</span>
                                        <span className="text-gray-300"> Smart noise monitoring with multi-label classification and predictive analytics for urban soundscape management</span>
                                    </div>
                                    <div>
                                        <span className="text-orange-400 font-semibold">EcoGo:</span>
                                        <span className="text-gray-300"> Vehicle CO₂ prediction with TOPSIS-based ranking and personalized eco-driving recommendations using LLaMA 3.3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Research Objectives */}
                    <div>
                        <div className="flex items-center mb-8">
                            <FlagIcon className="h-8 w-8 text-purple-400 mr-4" />
                            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Research Objectives</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {researchObjectives.map((objective, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white/5 p-6 rounded-lg border border-white/10"
                                >
                                    <h4 className="text-lg font-semibold text-white mb-3">{objective.title}</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">{objective.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 