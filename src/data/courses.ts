export type CourseGroup =
  | "Group 1"
  | "Group 2"
  | "Group 3"
  | "Group 4"
  | "Non-Breadth"

export type CourseSession = "Fall" | "Winter" | "Summer"

export type Course = {
  id: string
  code: string
  title: string
  group: CourseGroup
  category: string
  description: string
  notes?: string
  tags: string[]
  sessions?: CourseSession[]
  aiCore?: boolean
  healthcareDataScience?: boolean
  mscacRequired?: boolean
}

export const GROUP_DETAILS: Record<CourseGroup, string> = {
  "Group 1":
    "Algorithms, Complexity, Cryptography, Theory of Distributed Computing",
  "Group 2":
    "Artificial Intelligence, Machine Learning, Knowledge Representation, Computational Linguistics, Computational Biology and Medicine, Robotics, Vision",
  "Group 3":
    "Systems, Networks, Databases, Security, Programming Languages, Compilers, Software Engineering, Scientific Computing",
  "Group 4":
    "Human Computer Interaction, Computational Social Science, Visualization, Graphics, Sustainability Computing, Computer Science Education",
  "Non-Breadth":
    "Course offerings out of the Department of Computer Science that are not eligible for fulfilling the breadth requirements.",
}

export const COURSE_SESSIONS: CourseSession[] = ["Fall", "Winter", "Summer"]

export const COURSES: Course[] = [
  {
    id: "csc2701h-mscac-communication",
    code: "CSC2701H",
    title: "Communication for Computer Scientists",
    group: "Non-Breadth",
    category: "MScAC Required",
    description:
      "This MScAC course helps students develop professional communication skills for internships, future employment, and business environments. Topics vary by offering, but usually include resumes, cover letters, online profiles, job search planning, interview strategy, personal branding, and effective professional communication.",
    notes:
      "Credit value: 0.50 FCE. Campus: St. George. Delivery mode: In class.",
    tags: ["MScAC", "required", "communication", "career"],
    mscacRequired: true,
  },
  {
    id: "csc2702h-mscac-technical",
    code: "CSC2702H",
    title: "Technical Entrepreneurship",
    group: "Non-Breadth",
    category: "MScAC Required",
    description:
      "This MScAC course introduces business and management concepts for students interested in starting a business or bringing new ideas to fruition within existing organizations. It also gives students experience presenting and defending scientific research through research activities and communications, with topics such as business and research innovation, research portfolio management, entrepreneurship, and market validation.",
    notes:
      "Credit value: 0.50 FCE. Campus: St. George. Delivery mode: In class.",
    tags: ["MScAC", "required", "entrepreneurship", "business"],
    mscacRequired: true,
  },
  {
    id: "csc1500h-teaching-cs",
    code: "CSC1500H",
    title: "Fundamentals of Teaching Computer Science in Higher Education",
    group: "Non-Breadth",
    category: "Teaching",
    description:
      "Students learn and apply evidence-based practices in university teaching of computer science. Topics include instructional design, active learning, and assessment. Students design course materials, give a teaching demonstration, reflect on teaching, and create a personal Statement of Teaching Philosophy.",
    notes:
      "Suitable for computer science graduate students interested in an academic career that includes teaching.",
    tags: ["teaching", "computer science education"],
    sessions: ["Fall"],
  },
  {
    id: "csc2600h-csc491-capstone",
    code: "CSC2600H/CSC491H1",
    title:
      "Topics in Computer Science: Capstone Project for the Business of Software",
    group: "Non-Breadth",
    category: "Capstone",
    description:
      "This course is designed and delivered by industry experts from the software and tech fields. Students work with teammates from CSC454H1 to develop a marketable startup on a selected theme. The class is small and highly interactive, with emphasis on working software and industry best practices.",
    notes:
      "Students are expected to have experience writing software and be able to learn on the go.",
    tags: ["capstone", "project", "entrepreneurship"],
    sessions: ["Winter"],
  },
  {
    id: "csc2221h-distributed-computing",
    code: "CSC2221H",
    title: "Introduction to the Theory of Distributed Computing",
    group: "Group 1",
    category: "Distributed Computing",
    description:
      "This course studies fundamental models and problems in distributed computing with an emphasis on synchronization and fault tolerance. Algorithms and impossibility results will both be considered.",
    tags: ["distributed computing", "algorithms", "theory", "fault tolerance"],
    sessions: ["Fall"],
  },
  {
    id: "csc2405h-automata-theory",
    code: "CSC2405H/CSC448H1",
    title: "Automata Theory",
    group: "Group 1",
    category: "Theory of Computation",
    description:
      "This course discusses theoretical results concerning regular, deterministic, context free, context sensitive, and recursively enumerable languages via generative grammars and corresponding automata. Topics include complexity bounds for recognition, language decision problems, and operations on languages.",
    tags: ["automata", "formal languages", "theory"],
    sessions: ["Winter"],
  },
  {
    id: "csc2407h-mathematical-methods",
    code: "CSC2407H/MAT1307H",
    title: "Mathematical Methods in the Theory of Computation",
    group: "Group 1",
    category: "Theory of Computation",
    description:
      "This course exposes students to mathematical methods that play a role in recent advances in theoretical computer science. It uses and develops tools from combinatorics, probability, algebra, and analysis, and discusses applications to modern topics in the theory of computation.",
    tags: ["theory", "mathematics", "combinatorics", "probability"],
    sessions: ["Fall"],
  },
  {
    id: "csc2410h-graph-theory",
    code: "CSC2410H/MAT1501H",
    title: "Introduction to Graph Theory",
    group: "Group 1",
    category: "Graph Theory",
    description:
      "This course covers important aspects of graph theory, including the development and analysis of algorithms for problems that arise in applications. Topics include minimum spanning trees, shortest paths, network flow with applications to matching, planarity testing, and graph colourability.",
    tags: ["graph theory", "algorithms", "theory"],
    sessions: ["Winter"],
  },
  {
    id: "csc2414h-quantum-algorithms-complexity",
    code: "CSC2414H",
    title:
      "Advanced Topics in Complexity Theory: Quantum Algorithms and Complexity Theory",
    group: "Group 1",
    category: "Complexity Theory",
    description:
      "An advanced course on a topic in complexity theory. Topics will change from one instance of the course to another.",
    tags: ["complexity", "quantum", "algorithms", "theory"],
    sessions: ["Fall"],
  },
  {
    id: "csc2414h-high-dimensional-expanders",
    code: "CSC2414H",
    title:
      "Advanced Topics in Complexity Theory: High-Dimensional Expanders: Tools and Applications",
    group: "Group 1",
    category: "Complexity Theory",
    description:
      "Expanders are sparse graphs that are highly connected. High-dimensional expanders are defined over simplicial complexes and have stronger properties of sparseness and interconnectivity. This course introduces high-dimensional expanders, surveys the technical toolkit, and shows how to use these objects for applications.",
    tags: ["complexity", "expanders", "algorithms", "theory"],
    sessions: ["Winter"],
  },
  {
    id: "csc2419h-zero-knowledge-proofs",
    code: "CSC2419H",
    title: "Topics in Cryptography: Zero-Knowledge Proofs",
    group: "Group 1",
    category: "Cryptography",
    description:
      "This graduate course offers a rigorous introduction to the theory of zero-knowledge proofs and succinct arguments, tracing the subject from classical foundations to recent breakthroughs. It does not assume cryptography background, but students should be mathematically mature and comfortable with discrete probability, linear algebra, and basic complexity theory.",
    tags: ["cryptography", "zero-knowledge", "security", "theory"],
    sessions: ["Fall"],
  },
  {
    id: "csc2421h-online-myopic-algorithms",
    code: "CSC2421H",
    title: "Topics in Algorithms: Online and Other Myopic Algorithms",
    group: "Group 1",
    category: "Algorithms",
    description:
      "This course focuses on research topics in algorithm design and analysis, with special focus on running time, approximation, fairness, and advanced techniques for designing and analyzing algorithms for fundamental computational problems or proving impossibility.",
    tags: ["algorithms", "online algorithms", "fairness", "optimization"],
    sessions: ["Fall"],
  },
  {
    id: "csc2421h-algorithmic-discrepancy-theory",
    code: "CSC2421H",
    title: "Topics in Algorithms: Algorithmic Discrepancy Theory",
    group: "Group 1",
    category: "Algorithms",
    description:
      "Discrepancy theory studies how well discrete objects can approximate continuous ones. This course surveys algorithmic developments in discrepancy theory from the last 16 years and some of their applications in numerical estimation, coresets, fair allocation, scheduling, bin packing, and differential privacy.",
    tags: ["algorithms", "discrepancy theory", "fairness", "optimization"],
    sessions: ["Winter"],
  },
  {
    id: "csc2429h-algebraic-gems",
    code: "CSC2429H/MAT1304H",
    title:
      "Topics of Theory of Computation: Algebraic Gems in Discrete Math and Theoretical Computer Science",
    group: "Group 1",
    category: "Theory of Computation",
    description:
      "This course explores applications of linear algebra and polynomial methods to combinatorics, discrete geometry, complexity theory, cryptography, and algorithm design. All necessary algebraic tools are developed throughout the course as needed.",
    notes:
      "The main prerequisite is mathematical maturity. Familiarity with discrete mathematics, algorithms, and linear algebra is helpful but not strictly required.",
    tags: ["theory", "algebra", "combinatorics", "algorithms"],
    sessions: ["Winter"],
  },
  {
    id: "csc2555h-algorithmic-fairness",
    code: "CSC2555H",
    title: "Mathematical Foundations of Algorithmic Fairness",
    group: "Group 1",
    category: "Algorithmic Fairness",
    description:
      "This course explores mathematical foundations of algorithmic fairness across decision-making contexts. Students examine formal definitions of individual and subgroup fairness, their relationship to bias, algorithms that satisfy them, and auditing methods. Application domains include social choice and machine learning, with a project in a chosen domain.",
    tags: ["fairness", "algorithms", "machine learning", "social choice"],
    sessions: ["Summer", "Winter"],
  },
  {
    id: "csc2431h-ai-in-medicine",
    code: "CSC2431H",
    title:
      "Topics in Computational Biology and Medicine: Building and Deploying AI in Medicine",
    group: "Group 2",
    category: "Computational Biology and Medicine",
    description:
      "This course introduces the variety of ways computational methods are utilized in modern medicine, including probabilistic and deterministic techniques in genomic data analysis, machine learning and NLP for medical texts, HCI considerations for medical software, and related topics.",
    tags: ["healthcare", "machine learning", "nlp", "computational biology"],
    sessions: ["Winter"],
  },
  {
    id: "csc2501h-computational-linguistics",
    code: "CSC2501H/CSC485H1",
    title: "Computational Linguistics",
    group: "Group 2",
    category: "Computational Linguistics",
    description:
      "Computational linguistics and the processing of language by computer. Topics include language models, context-free grammars, chart parsing, statistical parsing, semantics and semantic interpretation, ambiguity resolution techniques, and reference resolution, with emphasis on statistical learning methods for lexical, syntactic, and semantic knowledge.",
    tags: ["nlp", "computational linguistics", "language", "machine learning"],
    aiCore: true,
    sessions: ["Fall"],
  },
  {
    id: "csc2502h-knowledge-representation",
    code: "CSC2502H/CSC486H1",
    title: "Knowledge Representation and Reasoning",
    group: "Group 2",
    category: "Knowledge Representation",
    description:
      "Representing knowledge symbolically in a form suitable for automated reasoning, and associated reasoning methods. Topics include first-order logic, entailment, resolution, Horn clauses, procedural representations, production systems, description logics, inheritance networks, defaults and probabilities, tractable reasoning, abductive explanation, representation of action, and planning.",
    tags: ["knowledge representation", "reasoning", "logic", "ai"],
    aiCore: true,
    sessions: ["Fall"],
  },
  {
    id: "csc2506h-probabilistic-learning",
    code: "CSC2506H/CSC412H1",
    title: "Probabilistic Learning and Reasoning",
    group: "Group 2",
    category: "Machine Learning",
    description:
      "An introduction to probability as a means of representing and reasoning with uncertain knowledge. Topics include probabilistic graphical models, inference and probabilistic reasoning algorithms, statistical learning from empirical data, and applications in artificial intelligence and machine learning.",
    tags: ["machine learning", "probability", "graphical models", "ai"],
    sessions: ["Fall", "Winter"],
  },
  {
    id: "csc2511h-natural-language-computing",
    code: "CSC2511H/CSC401H1",
    title: "Natural Language Computing",
    group: "Group 2",
    category: "Computational Linguistics",
    description:
      "Introduction to natural language processing and speech techniques for applications such as information retrieval, speech recognition and synthesis, machine translation, summarization, and dialogue. Topics include n-grams, corpus analysis, neural methods, and information theory, using Python and other software.",
    tags: ["nlp", "speech", "language", "ai"],
    aiCore: true,
    sessions: ["Winter"],
  },
  {
    id: "csc2512h-advanced-propositional-reasoning",
    code: "CSC2512H",
    title: "Advanced Propositional Reasoning",
    group: "Group 2",
    category: "Automated Reasoning",
    description:
      "This course introduces algorithms for SAT and other propositional reasoning problems, encoding techniques for translating problems into SAT, and algorithms for MAXSAT and QBF. The aim is to provide background needed to exploit modern SAT, MAXSAT, and QBF solvers in your own work.",
    notes:
      "Knowledge of propositional logic and comfort with programming, data structures, and algorithms is expected.",
    tags: ["automated reasoning", "sat", "logic", "algorithms"],
    sessions: ["Winter"],
  },
  {
    id: "csc2515h-machine-learning",
    code: "CSC2515H",
    title: "Introduction to Machine Learning",
    group: "Group 2",
    category: "Machine Learning",
    description:
      "Machine learning techniques allow computers to learn from data and experience rather than requiring manual behavior specification. The course introduces supervised, unsupervised, and reinforcement learning; linear and nonlinear models including neural networks; loss functions; bias and variance; ensemble methods; optimization; and probabilistic views of machine learning.",
    notes: "Exclusions: ECE1513H.",
    tags: ["machine learning", "ai", "optimization", "statistics"],
    aiCore: true,
    healthcareDataScience: true,
    sessions: ["Winter"],
  },
  {
    id: "csc2516h-neural-networks",
    code: "CSC2516H",
    title: "Neural Networks and Deep Learning",
    group: "Group 2",
    category: "Machine Learning",
    description:
      "An introduction to neural networks and deep learning. Topics include backpropagation and automatic differentiation, convolutional networks, recurrent neural networks, methods for improving optimization and generalization, and neural networks for unsupervised and reinforcement learning.",
    notes: "Exclusions: MIE1517H.",
    tags: ["deep learning", "neural networks", "ai", "machine learning"],
    aiCore: true,
    healthcareDataScience: true,
    sessions: ["Fall"],
  },
  {
    id: "csc2518h-spoken-language-processing",
    code: "CSC2518H",
    title: "Spoken Language Processing",
    group: "Group 2",
    category: "Speech",
    description:
      "A graduate course on speech processing by machine, including digital signal processing, automatic speech recognition, and speech synthesis. Topics include articulatory and acoustic phonetics, prosody, speech signal processing, automated speech recognition, text-to-speech synthesis, language models, and dialogue systems.",
    tags: ["speech", "nlp", "signal processing", "ai"],
    sessions: ["Winter"],
  },
  {
    id: "csc2529h-computational-imaging",
    code: "CSC2529H",
    title: "Computational Imaging",
    group: "Group 2",
    category: "Computer Vision",
    description:
      "Introductory course covering foundations of computational imaging. Topics include image processing, convolutional neural networks for image processing, digital photography, inverse problems in imaging, proximal gradient methods, wave optics, time-of-flight imaging, and end-to-end optimization of optics and imaging systems.",
    tags: ["imaging", "computer vision", "deep learning", "ai"],
    aiCore: true,
    healthcareDataScience: true,
    sessions: ["Fall"],
  },
  {
    id: "csc2530h-computational-imaging-3d",
    code: "CSC2530H",
    title: "Computational Imaging and 3D Sensing",
    group: "Group 2",
    category: "Computer Vision",
    description:
      "From depth cameras in smartphones to 3D sensors in autonomous vehicles, 3D sensing is revolutionizing how we sense the world. This course covers the convergence of optics, photonics, sensing, and computation behind next-generation imaging and sensing systems.",
    tags: ["imaging", "3d sensing", "computer vision", "robotics"],
    sessions: ["Winter"],
  },
  {
    id: "csc2532h-statistical-learning-theory",
    code: "CSC2532H",
    title: "Statistical Learning Theory",
    group: "Group 2",
    category: "Machine Learning",
    description:
      "This course covers machine learning theory, including uniform convergence methods, Rademacher complexity, VC dimension, reproducing kernel Hilbert spaces, double descent in kernel ridge regression, linearization (NTK), and feature learning in neural networks.",
    notes: "Prerequisites: CSC2515H.",
    tags: ["machine learning", "learning theory", "statistics", "ai"],
    sessions: ["Winter"],
  },
  {
    id: "csc2539h-physics-informed-visual-computing",
    code: "CSC2539H",
    title:
      "Topics in Computer Vision: Physics-Informed Neural Representations for Visual Computing",
    group: "Group 2",
    category: "Computer Vision",
    description:
      "This course focuses on physics-informed neural representations, which combine data-driven learning with physics-based models to address forward and inverse problems in vision, graphics, imaging, and simulation. Topics include neural fields, operator learning, and differentiable solvers.",
    notes:
      "Recommended preparation: graduate-level exposure to computer vision or computational imaging courses such as CSC2529H or CSC2530H is desirable but not required.",
    tags: ["computer vision", "imaging", "deep learning", "ai"],
    sessions: ["Fall"],
  },
  {
    id: "csc2541h-learning-theory",
    code: "CSC2541H",
    title: "Topics in Machine Learning: Learning Theory",
    group: "Group 2",
    category: "Machine Learning",
    description:
      "This course discusses recent developments in machine learning through research papers. This offering focuses on learning theory, including deep learning theory and optimization algorithms for machine learning, with mathematically rigorous results suitable for students with a strong math or CS theory background.",
    notes:
      "Recommended preparation: at least one prior course in ML is recommended.",
    tags: ["machine learning", "learning theory", "optimization", "ai"],
    sessions: ["Winter"],
  },
  {
    id: "csc2545h-geometric-deep-learning",
    code: "CSC2545H",
    title: "Advanced Topics in Machine Learning: Geometric Deep Learning",
    group: "Group 2",
    category: "Machine Learning",
    description:
      "This course discusses recent developments in machine learning research based on a collection of ML research papers. Topics may include representation learning, ML theory, and application-specific aspects of ML research, with case studies of contemporary ML problems and pipelines.",
    notes:
      "Prerequisites: an undergraduate course in ML (e.g., CSC413H1). Recommended preparation: a graduate course in ML (e.g., CSC2516H).",
    tags: ["machine learning", "deep learning", "geometry", "ai"],
    sessions: ["Fall"],
  },
  {
    id: "csc2611h-semantic-change",
    code: "CSC2611H",
    title: "Computational Models of Semantic Change",
    group: "Group 2",
    category: "Computational Linguistics",
    description:
      "This course explores data-driven computational approaches to word meaning representation and semantic change. Topics include latent models of word meaning such as LSA and word2vec, corpus-based detection of semantic change, probabilistic diachronic models, and cognitive mechanisms of word sense extension such as chaining and metaphor.",
    tags: ["nlp", "semantics", "language", "machine learning"],
    sessions: ["Winter"],
  },
  {
    id: "csc2626h-imitation-learning-robotics",
    code: "CSC2626H",
    title: "Imitation Learning for Robotics",
    group: "Group 2",
    category: "Robotics",
    description:
      "This course examines important papers in imitation learning for robot control, with emphasis on developments in the last 10 years. Its purpose is to familiarize students with the frontiers of this research area and help them identify open problems and make novel contributions.",
    notes: "Prerequisites: CSC311H1 or CSC2515H or equivalent.",
    tags: ["robotics", "imitation learning", "machine learning", "ai"],
    sessions: ["Fall"],
  },
  {
    id: "csc2103h-software-testing",
    code: "CSC2103H/CSC410H1",
    title: "Software Testing and Verification",
    group: "Group 3",
    category: "Software Engineering",
    description:
      "Concepts and state-of-the-art techniques in quality assessment of software engineering, including quality attributes, formal specifications and their analysis, testing, verification, and validation.",
    tags: ["software engineering", "testing", "verification", "formal methods"],
    sessions: ["Fall"],
  },
  {
    id: "csc2104h-formal-methods",
    code: "CSC2104H/CSC465H1",
    title: "Formal Methods of Program Design",
    group: "Group 3",
    category: "Programming Languages",
    description:
      "Using mathematics to write error-free programs and prove each refinement, identifying errors as they are made. Topics include program development to meet specifications, modifications that preserve correctness, logic, formal specifications, refinement, and conditional, sequential, parallel, interaction, probabilistic, and functional programming.",
    tags: ["formal methods", "programming languages", "software engineering"],
    sessions: ["Fall"],
  },
  {
    id: "csc2108h-automated-reasoning-ml",
    code: "CSC2108H",
    title: "Automated Reasoning with Machine Learning",
    group: "Group 3",
    category: "Automated Reasoning",
    description:
      "This course introduces research on combining reasoning with machine learning. It covers logical foundations and algorithms behind reasoning engines and how machine learning can improve reasoning systems, including SAT, SMT, program synthesis, software debugging, inductive logic programming, and neuro-symbolic systems.",
    tags: ["automated reasoning", "machine learning", "programming languages"],
    sessions: ["Fall"],
  },
  {
    id: "csc2125h-se-for-ml",
    code: "CSC2125H",
    title:
      "Topics in Software Engineering: Software Engineering for Machine Learning",
    group: "Group 3",
    category: "Software Engineering",
    description:
      "This course discusses software engineering techniques and challenges in building modern software systems, such as machine learning systems, blockchains, and other safety-critical high-assurance systems. Students do significant seminar paper reading, literature review, and presentations.",
    tags: ["software engineering", "machine learning", "ai"],
    sessions: ["Winter"],
  },
  {
    id: "csc2126h-advanced-functional-programming",
    code: "CSC2126H",
    title: "Topics in Programming Languages: Advanced Functional Programming",
    group: "Group 3",
    category: "Programming Languages",
    description:
      "This course studies programming languages through type structures, semantics, and reasoning principles, covering language design, functional programming, and type systems.",
    tags: ["programming languages", "functional programming", "type systems"],
    sessions: ["Fall"],
  },
  {
    id: "csc2208h-advanced-operating-systems",
    code: "CSC2208H/CSC469H1",
    title: "Advanced Operating Systems",
    group: "Group 3",
    category: "Operating Systems",
    description:
      "An in-depth exploration of the major components of operating systems with emphasis on techniques, algorithms, and structures used to implement these components in modern systems. Project-based study covers process management, scheduling, memory management, file systems, and networking.",
    tags: ["operating systems", "systems", "networking"],
    sessions: ["Fall"],
  },
  {
    id: "csc2209h-computer-networking",
    code: "CSC2209H/CSC458H1",
    title: "Computer Networking Systems",
    group: "Group 3",
    category: "Networks",
    description:
      "Computer networks with emphasis on network programming and applications. Topics include layering, naming and addressing, packet switching, socket programming, protocols, congestion control, routing, network security, wireless networks, multimedia, web 2.0, software-defined networking, and online social networks.",
    tags: ["networks", "systems", "security"],
    sessions: ["Fall"],
  },
  {
    id: "csc2222h-parallel-distributed-computing",
    code: "CSC2222H",
    title: "Applications of Parallel and Distributed Computing",
    group: "Group 3",
    category: "Parallel Computing",
    description:
      "This course provides advanced discussions on parallel, distributed, and cloud computing and its applications. It covers sources of parallelism and locality in scientific applications, common parallel algorithms, performance bottlenecks, and working across parallel algorithm design, mathematical reformulation, and architecture-specific performance tuning.",
    tags: ["parallel computing", "distributed computing", "systems"],
    sessions: ["Winter"],
  },
  {
    id: "csc2229h-privacy-enhancing-technologies",
    code: "CSC2229H",
    title: "Topics in Computer Networks: Privacy-Enhancing Technologies",
    group: "Group 3",
    category: "Security",
    description:
      "This course explores how privacy can be formally defined and protected. It covers cryptographic concepts such as MPC, FHE, zero-knowledge proofs, private information retrieval, oblivious RAM, and anonymous communication, as well as statistical approaches to privacy with a focus on differential privacy.",
    notes:
      "Recommended preparation: a previous course on computer networks such as CSC2209H or equivalent.",
    tags: ["privacy", "security", "networks", "cryptography"],
    sessions: ["Fall"],
  },
  {
    id: "csc2229h-networks-machine-learning",
    code: "CSC2229H",
    title: "Topics in Computer Networks: Computer Networks and Machine Learning",
    group: "Group 3",
    category: "Networks",
    description:
      "This MSc/PhD-level course delves into core challenges of interconnection networks, emphasizing the use of machine learning to address bandwidth, latency, and packet loss issues across link, transport, and application layers.",
    notes:
      "Recommended preparation: a previous course on computer networks such as CSC2209H or equivalent.",
    tags: ["networks", "machine learning", "systems"],
    sessions: ["Winter"],
  },
  {
    id: "csc2234h-database-system-technology",
    code: "CSC2234H/CSC443H1",
    title: "Database System Technology",
    group: "Group 3",
    category: "Databases",
    description:
      "This course covers algorithms and data structures behind modern data management systems, including buffer pool management, indexing, sketches, filters, query operators, query optimization, concurrency control, transaction management, recovery algorithms, row and column layouts, and implementing a mini-database system.",
    tags: ["databases", "systems", "data structures"],
    sessions: ["Fall"],
  },
  {
    id: "csc2235h-cloud-native-data-management",
    code: "CSC2235H",
    title: "Cloud-Native Data Management Systems",
    group: "Group 3",
    category: "Databases",
    description:
      "This seminar course discusses state-of-the-art cloud database systems recently published in top-tier database venues. Topics include serverless architectures, storage and memory disaggregation, new interconnect technologies such as RDMA and CXL, multi-tenancy, and a final project on cloud databases.",
    notes: "Recommended preparation: introduction to databases.",
    tags: ["databases", "cloud", "systems"],
    sessions: ["Winter"],
  },
  {
    id: "csc2236h-data-structures-wild",
    code: "CSC2236H",
    title: "Data Structures in the Wild",
    group: "Group 3",
    category: "Databases",
    description:
      "A deep dive into real-world data structures engineered for modern CPUs, memory hierarchies, and diverse data types, studying space-speed trade-offs and what it takes to make a data structure fast in practice.",
    tags: ["databases", "data structures", "systems"],
    sessions: ["Winter"],
  },
  {
    id: "csc2237h-secure-computer-hardware",
    code: "CSC2237H",
    title: "Secure Computer Hardware Systems",
    group: "Group 3",
    category: "Security",
    description:
      "This graduate-level course explores the security of modern computer systems from a micro-architectural perspective, including cache side-channel attacks, transient-execution attacks, DRAM Rowhammer attacks, offensive and defensive aspects of micro-architectural security, and hardware-based trusted execution environments.",
    tags: ["security", "hardware", "systems"],
    sessions: ["Fall"],
  },
  {
    id: "csc2305h-numerical-optimization",
    code: "CSC2305H/CSC466H1",
    title: "Numerical Methods for Optimization Problems",
    group: "Group 3",
    category: "Scientific Computing",
    description:
      "Numerical methods for unconstrained optimization problems, in particular line search methods and trust region methods. Topics include steepest descent, Newton's method, quasi-Newton methods, conjugate gradient methods, and techniques for large problems.",
    notes: "This course will normally be offered every other year.",
    tags: ["optimization", "numerical methods", "scientific computing"],
    sessions: ["Winter"],
  },
  {
    id: "csc2321h-matrix-calculations",
    code: "CSC2321H",
    title: "Matrix Calculations",
    group: "Group 3",
    category: "Scientific Computing",
    description:
      "Review of numerical solution of linear systems, state-of-the-art developments in numerical linear algebra and PDEs, efficient linear solvers, and performance of methods and software. Topics include iterative methods, acceleration, preconditioning, multigrid, domain decomposition, and fast Fourier transform linear solvers.",
    notes:
      "Prerequisites: calculus, numerical linear algebra, interpolation, some knowledge of PDEs, and proficiency in a programming language, preferably MATLAB or FORTRAN.",
    tags: ["scientific computing", "linear algebra", "numerical methods"],
    sessions: ["Fall"],
  },
  {
    id: "csc2508h-advanced-data-systems",
    code: "CSC2508H",
    title: "Advanced Data Systems",
    group: "Group 3",
    category: "Databases",
    description:
      "The course examines how indexing, query processing, execution, and optimization are influenced by machine learning. Topics include workload-adaptive indexing, neural retrieval and ranking, workload-based optimization strategies, instance-optimized performance prediction, and infrastructure sizing.",
    tags: ["databases", "machine learning", "data systems"],
    healthcareDataScience: true,
    sessions: ["Fall"],
  },
  {
    id: "csc2514h-human-computer-interaction",
    code: "CSC2514H/CSC428H1",
    title: "Human-Computer Interaction",
    group: "Group 4",
    category: "HCI",
    description:
      "Understanding human behaviour as it applies to user interfaces, including work activity analysis, observational techniques, questionnaires, unobtrusive measures, human cognitive system parameters, task analysis, cognitive modeling, interface representations, prototyping tools, cognitive walkthroughs, usability studies, verbal protocol analysis, and case studies.",
    tags: ["hci", "design", "usability"],
    sessions: ["Winter"],
  },
  {
    id: "csc2524h-human-centred-ai",
    code: "CSC2524H",
    title: "Topics in Interactive Computing: Human-Centered Artificial Intelligence",
    group: "Group 4",
    category: "HCI",
    description:
      "This seminar examines HCI research on AI and large language models for intelligent user interfaces. It studies how LLMs can enhance interactive systems in domains such as education, human-robot interaction, and creativity support tools.",
    notes: "Recommended preparation: CSC428H1, CSC2514H, or equivalent.",
    tags: ["hci", "ai", "llms", "human-centred ai"],
    aiCore: true,
    sessions: ["Fall"],
  },
  {
    id: "csc2526h-context-aware-computing",
    code: "CSC2526H",
    title: "HCI: Topics in Ubiquitous Computing: Context-Aware Computing",
    group: "Group 4",
    category: "Ubiquitous Computing",
    description:
      "This seminar covers computing technology moving beyond desktops into everyday environments through paper readings, student-led presentations, and a course project.",
    notes:
      "Recommended preparation: a human-computer interaction course such as CSC428H1 and some exposure to user study design.",
    tags: ["hci", "ubiquitous computing", "context-aware computing"],
    sessions: ["Fall"],
  },
  {
    id: "csc2527h-business-software",
    code: "CSC2527H/CSC454H1",
    title: "The Business of Software",
    group: "Group 4",
    category: "Software Business",
    description:
      "The software and internet industries; principles of successful software enterprises; innovation and entrepreneurship; software business definition and planning; business models; market and product planning; product development; marketing, sales, and support; financial management and financing of high-technology ventures; management, leadership, and partnerships. Students write business plans in teams.",
    tags: ["software business", "entrepreneurship", "product"],
    sessions: ["Winter"],
  },
  {
    id: "csc2537h-information-visualization",
    code: "CSC2537H/STA2555H",
    title: "Information Visualization",
    group: "Group 4",
    category: "Visualization",
    description:
      "This course studies techniques and algorithms for effective visualizations based on graphic design, visual art, perceptual psychology, and cognitive science. Students read and critically analyze research papers, discuss them in class, and complete a final project.",
    tags: ["visualization", "hci", "design"],
    healthcareDataScience: true,
    sessions: ["Fall", "Winter"],
  },
  {
    id: "csc2558h-technology-abuse",
    code: "CSC2558H",
    title:
      "Topics in Multidisciplinary HCI: Technology Abuse in Interpersonal Contexts",
    group: "Group 4",
    category: "HCI",
    description:
      "This course explores technology abuse in interpersonal contexts, introducing abuse concepts such as coercive control and trauma, types of tech abuse seen in practice, dual-use technologies, trauma-informed computing, abuse-resistant technology design, and survivor-support interventions.",
    notes:
      "Recommended preparation: a human-computer interaction course such as CSC428H1 and some exposure to user study design.",
    tags: ["hci", "safety", "privacy", "society"],
    sessions: ["Winter"],
  },
  {
    id: "csc2600h-algorithmic-social-systems",
    code: "CSC2600H",
    title: "Topics in Computer Science: Algorithmic Social Systems",
    group: "Group 4",
    category: "Computational Social Science",
    description:
      "This course develops a formal understanding of algorithmic social systems such as social groups, AI systems, social media communities, and distributed compute systems. Topics include models of social systems, norm emergence, gossip algorithms, and social network formation and structure.",
    tags: ["computational social science", "multi-agent systems", "ai"],
    sessions: ["Fall"],
  },
  {
    id: "csc2631h-mobile-digital-health",
    code: "CSC2631H",
    title: "Mobile and Digital Health",
    group: "Group 4",
    category: "Digital Health",
    description:
      "This course examines mobile health over the past twenty years, including how sensors in ubiquitous and novel devices capture indicators of physical and mental health, physiological signals, psychomotor function, and disease-specific symptoms.",
    tags: ["healthcare", "mobile health", "hci", "sensors"],
    healthcareDataScience: true,
    sessions: ["Fall"],
  },
]

export const TAGS = Array.from(
  new Set(COURSES.flatMap((course) => course.tags))
).sort((a, b) => a.localeCompare(b))

export const CATEGORIES = Array.from(
  new Set(COURSES.map((course) => course.category))
).sort((a, b) => a.localeCompare(b))
