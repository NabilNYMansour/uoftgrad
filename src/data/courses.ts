export type CourseGroup =
  | "Group 1"
  | "Group 2"
  | "Group 3"
  | "Group 4"
  | "Non-Breadth"

export type Course = {
  id: string
  code: string
  title: string
  group: CourseGroup
  category: string
  description: string
  notes?: string
  tags: string[]
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

export const COURSES: Course[] = [
  {
    id: "csc2701h-mscac-communication",
    code: "CSC2701H",
    title: "Communication for Computer Scientists",
    group: "Non-Breadth",
    category: "MScAC Required",
    description:
      "This MScAC course helps students develop professional communication skills for internships, future employment, and business environments. Topics vary by offering, but usually include resumes, cover letters, online profiles, job search planning, interview strategy, personal branding, and effective professional communication.",
    notes: "Credit value: 0.50 FCE. Campus: St. George. Delivery mode: In class.",
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
    notes: "Credit value: 0.50 FCE. Campus: St. George. Delivery mode: In class.",
    tags: ["MScAC", "required", "entrepreneurship", "business"],
    mscacRequired: true,
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
  },
  {
    id: "csc2332h-quantum-algorithms",
    code: "CSC2332H",
    title: "Introduction to Quantum Algorithms",
    group: "Group 1",
    category: "Quantum Computing",
    description:
      "This course will provide a rigorous introduction to quantum computing for computer science students. Topics covered will include the quantum circuit model, quantum query complexity, Grover's algorithm and amplitude amplification, the quantum Fourier transform and applications, phase estimation, Deutsch-Jozsa, the quantum linear systems algorithm, quantum error correction, and quantum simulation. Modern approaches to quantum algorithm design will also be covered including linear combinations of unitaries, block encodings, and quantum singular value transformations.",
    notes:
      "Prerequisites: Good knowledge of linear algebra and elementary real and complex analysis.",
    tags: ["quantum", "algorithms", "theory"],
  },
  {
    id: "csc2414h-complexity-lower-bounds",
    code: "CSC2414H",
    title:
      "Advanced Topics in Complexity Theory: Algorithmic Approaches to Lower Bounds",
    group: "Group 1",
    category: "Complexity Theory",
    description:
      "An advanced course on a topic in complexity theory. This offering focuses on proving lower bounds by designing algorithms: to prove that problem X cannot be solved by any efficient algorithm, the course studies how to design an efficient algorithm that solves problem Y. Students learn which algorithmic problems imply lower bounds, why the implications hold, and recent algorithms and lower bounds from the last few years.",
    tags: ["complexity", "algorithms", "lower bounds", "theory"],
  },
  {
    id: "csc2419h-lattice-cryptography",
    code: "CSC2419H",
    title: "Topics in Cryptography: Lattice-based Cryptography",
    group: "Group 1",
    category: "Cryptography",
    description:
      "This course covers recent advancements in theoretical cryptography, including proof systems, secure computation protocols, lattice-based cryptography, quantum cryptography, and program obfuscation. The offering studies mathematical properties of lattices, hard lattice problems, and cryptographic applications built from those problems, with emphasis on recent results.",
    notes:
      "Expected preparation includes mathematical maturity and undergraduate discrete mathematics, algorithms, and complexity theory. The offering does not require prior cryptography; basic linear algebra and probability are the stated prerequisites.",
    tags: ["cryptography", "lattices", "security", "quantum"],
  },
  {
    id: "csc2421h-online-myopic-algorithms",
    code: "CSC2421H",
    title: "Topics in Algorithms: Online and Other Myopic Algorithms",
    group: "Group 1",
    category: "Algorithms",
    description:
      "This course focuses on research topics in algorithm design and analysis, including running time, approximation, fairness, and advanced techniques for designing, analyzing, or proving impossibility for fundamental computational problems. The offering studies myopic algorithms where input is not fully known in advance, including algorithms with limited ability to revise past decisions and both worst-case and stochastic inputs. Applications include auctions, fair division, scheduling, learning theory, and online advertising.",
    notes:
      "The course is intended to be accessible to CS students with background equivalent to CSC373.",
    tags: ["algorithms", "online algorithms", "fairness", "optimization"],
  },
  {
    id: "csc2412h-private-data-analysis",
    code: "CSC2412H",
    title: "Algorithms for Private Data Analysis",
    group: "Group 1",
    category: "Privacy",
    description:
      "This course studies individual privacy in data analysis from a rigorous theoretical perspective, focusing on differential privacy and efficient differentially private algorithms. It also covers connections between differential privacy and statistics, machine learning, and geometry, with formal privacy proofs.",
    notes:
      "Requires mathematical maturity, probability theory, and design and analysis of algorithms.",
    tags: ["privacy", "algorithms", "differential privacy", "machine learning"],
  },
  {
    id: "csc2429h-algebraic-complexity",
    code: "CSC2429H",
    title: "Topics in the Theory of Computation: Algebraic Complexity",
    group: "Group 1",
    category: "Complexity Theory",
    description:
      "An advanced theoretical computer science course. This offering studies the power and limitations of algebraic computation, arithmetic circuits, lower bounds for arithmetic circuits, derandomizing polynomial identity testing, polynomial reconstruction, and polynomial factoring.",
    notes:
      "Assumes strong mathematical maturity and some background in complexity theory and algorithms.",
    tags: ["complexity", "algebra", "theory", "algorithms"],
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
  },
  {
    id: "csc2503h-computer-vision",
    code: "CSC2503H",
    title: "Foundations of Computer Vision",
    group: "Group 2",
    category: "Computer Vision",
    description:
      "Introduction to vision, visual processes, and image understanding. Topics include camera system geometry and image acquisition, scene lighting and reflectance models, image and object classification, generative models, 3D vision, temporal sequence and video analysis, and combining vision with other modalities.",
    tags: ["computer vision", "ai", "machine learning", "imaging"],
    aiCore: true,
  },
  {
    id: "csc2515h-machine-learning",
    code: "CSC2515H",
    title: "Introduction to Machine Learning",
    group: "Group 2",
    category: "Machine Learning",
    description:
      "Machine learning techniques allow computers to learn from data and experience rather than requiring manual behavior specification. The course introduces supervised, unsupervised, and reinforcement learning; linear and nonlinear models including neural networks; loss functions; bias and variance; ensemble methods; optimization; and probabilistic views of machine learning.",
    tags: ["machine learning", "ai", "optimization", "statistics"],
    aiCore: true,
    healthcareDataScience: true,
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
  },
  {
    id: "csc2517h-sentence-structure",
    code: "CSC2517H",
    title: "Discrete Mathematical Models of Sentence Structure",
    group: "Group 2",
    category: "Computational Linguistics",
    description:
      "An introduction to mathematical models of sentence structure used in computational linguistics. Topics include string matching and similarity, string and tree transducers, extended context-free formalisms, tree-adjoining grammar, substructural logics, discourse representation calculi, typed feature structures, and topological models, with parsing, complexity, algebraic properties, and formal equivalence.",
    notes:
      "Requires basic knowledge of logic, formal language theory, and graph theory. Familiarity with syntactic theory is helpful but not assumed.",
    tags: ["nlp", "computational linguistics", "theory", "formal languages"],
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
  },
  {
    id: "csc2539h-physics-informed-visual-computing",
    code: "CSC2539H",
    title:
      "Topics in Computer Vision: Physics-informed neural representations for visual computing",
    group: "Group 2",
    category: "Computer Vision",
    description:
      "An advanced seminar course on selected topics in computer vision and computational imaging, based on papers from the current literature as class reading.",
    notes:
      "Recommended preparation: graduate-level exposure to computer vision or computational imaging courses such as CSC2529H or CSC2530H is desirable but not required.",
    tags: ["computer vision", "imaging", "deep learning", "ai"],
    aiCore: true,
  },
  {
    id: "csc2541h-causality",
    code: "CSC2541H",
    title: "Topics in Machine Learning: Introduction to Causality",
    group: "Group 2",
    category: "Machine Learning",
    description:
      "This course discusses recent developments in machine learning through research papers. This offering introduces statistical versus causal estimands, assumptions and models for estimating causal queries, and recent applications of causality in machine learning, with motivating examples from healthcare.",
    notes:
      "Recommended preparation: at least one prior ML course. Students need strong probability, statistics, Bayesian networks, linear algebra, and latent variable modeling.",
    tags: ["causality", "machine learning", "healthcare", "ai"],
    aiCore: true,
    healthcareDataScience: true,
  },
  {
    id: "csc2541h-drug-discovery",
    code: "CSC2541H",
    title: "Topics in Machine Learning: AI for Drug Discovery",
    group: "Group 2",
    category: "Machine Learning",
    description:
      "This pilot graduate course is delivered with a sister course in Pharmacology and Toxicology. It covers foundational knowledge for collaborative drug development and biological datasets, including structural biology, genomics, and phenomics. Students conduct hands-on assignments and a team project with Pharmacology and Toxicology students to co-design research questions, designs, and datasets at the intersection of AI and drug development.",
    notes:
      "Recommended preparation: at least one prior ML course. The course includes tutorials and co-working sessions with expert guidance.",
    tags: ["drug discovery", "machine learning", "healthcare", "biology", "ai"],
    aiCore: true,
    healthcareDataScience: true,
  },
  {
    id: "csc2611h-semantic-change",
    code: "CSC2611H",
    title: "Computational Models of Semantic Change",
    group: "Group 2",
    category: "Computational Linguistics",
    description:
      "This course explores data-driven computational approaches to word meaning representation and semantic change. Topics include latent models of word meaning such as LSA and word2vec, corpus-based detection of semantic change, probabilistic diachronic models, and cognitive mechanisms of word sense extension such as chaining and metaphor. The course has a strong hands-on component focused on large-scale text analyses and seminar presentations.",
    tags: ["nlp", "semantics", "language", "machine learning"],
  },
  {
    id: "csc2511h-natural-language-computing",
    code: "CSC2511H/CSC401",
    title: "Natural Language Computing",
    group: "Group 2",
    category: "Computational Linguistics",
    description:
      "Introduction to natural language processing and speech techniques for applications such as information retrieval, speech recognition and synthesis, machine translation, summarization, and dialogue. Topics include n-grams, corpus analysis, neural methods, and information theory, using Python and other software.",
    tags: ["nlp", "speech", "language", "ai"],
    aiCore: true,
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
  },
  {
    id: "csc2108h-automated-reasoning-ml",
    code: "CSC2108H",
    title: "Automated Reasoning with Machine Learning",
    group: "Group 3",
    category: "Automated Reasoning",
    description:
      "This course introduces research on combining reasoning with machine learning. It covers logical foundations and algorithms behind reasoning engines and how machine learning can improve reasoning systems, including SAT, SMT, program synthesis, software debugging, inductive logic programming, and neuro-symbolic systems. Paper readings, class discussions, and project presentations are expected.",
    tags: ["automated reasoning", "machine learning", "programming languages"],
  },
  {
    id: "csc2125h-blockchain",
    code: "CSC2125H",
    title: "Topics in Software Engineering: Blockchain Technology & Engineering",
    group: "Group 3",
    category: "Software Engineering",
    description:
      "This course discusses software engineering techniques and challenges in building modern software systems, such as machine learning systems, blockchains, and other safety-critical high-assurance systems. Students do significant seminar paper reading, literature review, and presentations.",
    tags: ["software engineering", "blockchain", "security"],
  },
  {
    id: "csc2126h-advanced-functional-programming",
    code: "CSC2126H",
    title: "Topics in Programming Languages: Advanced functional programming",
    group: "Group 3",
    category: "Programming Languages",
    description:
      "This course studies programming languages through type structures, semantics, and reasoning principles, covering language design, functional programming, and type systems. Emphasis is on advanced features in languages such as Haskell and OCaml, with paper reading, presentations, in-class discussions, and a course report.",
    tags: ["programming languages", "functional programming", "type systems"],
  },
  {
    id: "csc2209h-computer-networks",
    code: "CSC2209H/CSC458H1",
    title: "Computer Networks",
    group: "Group 3",
    category: "Networks",
    description:
      "Computer networks with emphasis on network programming and applications. Topics include layering, naming and addressing, packet switching, socket programming, protocols, congestion control, routing, network security, wireless networks, multimedia, web 2.0, software-defined networking, and online social networks.",
    tags: ["networks", "systems", "security"],
  },
  {
    id: "csc2233h-storage-systems-ml",
    code: "CSC2233H",
    title: "Topics in Storage Systems: Machine Learning to Building Better Systems",
    group: "Group 3",
    category: "Systems",
    description:
      "This course covers foundations and recent advances in storage systems, which underpin large-scale data storage. Students perform a cutting-edge mini-research project to design, build, or evaluate a system.",
    tags: ["systems", "storage", "machine learning", "databases"],
  },
  {
    id: "csc2234h-database-system-technology",
    code: "CSC2234H/CSC443H1",
    title: "Database System Technology",
    group: "Group 3",
    category: "Databases",
    description:
      "This course covers algorithms and data structures behind modern data management systems, including modern hardware, buffer pool management, indexing, sketches, filters, query operators, query optimization, concurrency control, transaction management, recovery algorithms, row and column layouts, and implementing a mini-database system.",
    notes:
      "Recommended preparation: CSC343H1, CSC369H1, CSC373H1 or CSC375H1, or equivalent.",
    tags: ["databases", "systems", "data structures"],
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
  },
  {
    id: "csc2508h-vector-databases",
    code: "CSC2508H",
    title:
      "Advanced Data Systems: Vector Database Systems and Semistructured Data Management",
    group: "Group 3",
    category: "Databases",
    description:
      "The course examines how indexing, query processing, execution, and optimization are influenced by machine learning. It covers workload-adaptive indexing, neural retrieval and ranking, query execution optimization, performance prediction, vector database algorithms for similarity search, high-dimensional indexing, embeddings, retrieval-augmented generation, image and video search, and database-style processing of unstructured data.",
    tags: ["databases", "vector search", "machine learning", "rag"],
    healthcareDataScience: true,
  },
  {
    id: "csc2107h-compilers",
    code: "CSC2107H/CSC488H1",
    title: "Compilers and Interpreters",
    group: "Group 3",
    category: "Compilers",
    description:
      "The structure of compilers and programming language processing. Topics include scanning, parsing, semantic analysis, compiler dictionaries and tables, runtime organization and storage allocation, code generation, optimization, and modern compiler tools. The project involves building a complete compiler.",
    tags: ["compilers", "programming languages", "systems"],
  },
  {
    id: "csc2125h-se4ai",
    code: "CSC2125H",
    title:
      "Topics in Software Engineering: Software Engineering for ML-Enabled Systems (SE4AI)",
    group: "Group 3",
    category: "Software Engineering",
    description:
      "This course discusses software engineering techniques and challenges in building modern software systems, such as machine learning systems, blockchains, and other safety-critical high-assurance systems. Students do significant seminar paper reading, literature review, and presentations.",
    tags: ["software engineering", "machine learning", "ai"],
  },
  {
    id: "csc2210h-visual-mobile-computing",
    code: "CSC2210H",
    title: "Visual and Mobile Computing Systems",
    group: "Group 3",
    category: "Systems",
    description:
      "This course covers principles, techniques, and challenges in designing processors, software frameworks, and algorithms to accelerate visual computing applications including image processing, deep learning, diffusion models, implicit representations, federated learning, and robotics, using architectures such as TPUs, GPUs, and FPGAs.",
    tags: ["systems", "visual computing", "hardware", "deep learning"],
  },
  {
    id: "csc2229h-networks-for-ml",
    code: "CSC2229H",
    title: "Topics in Computer Networks: Computer Networks for Machine Learning",
    group: "Group 3",
    category: "Networks",
    description:
      "Exploration of research topics in computer networks, including computer networks for machine learning, hyperscale data center networking, software-defined networking, multiple access communication networks, and emerging network research areas.",
    notes:
      "Recommended preparation: a previous course on computer networks such as CSC2209H or equivalent.",
    tags: ["networks", "machine learning", "systems"],
  },
  {
    id: "csc2231h-privacy-enhancing-technologies",
    code: "CSC2231H",
    title: "Special Topics in Computer Systems: Privacy-Enhancing Technologies",
    group: "Group 3",
    category: "Security",
    description:
      "This course provides a specialized focus on a research area in computer systems. Topic areas vary and may include secure systems and hardware, systems for visual computing, massively parallel systems, or other emerging areas.",
    notes:
      "Recommended preparation: familiarity with operating systems and computer architecture.",
    tags: ["privacy", "security", "systems"],
  },
  {
    id: "csc2306h-scientific-computing",
    code: "CSC2306H/CSC456H1",
    title: "High Performance Scientific Computing",
    group: "Group 3",
    category: "Scientific Computing",
    description:
      "Computationally intensive applications in science and engineering are implemented on fast parallel computers. Topics include parallel architectures, numerical algorithms on parallel architectures, performance evaluation, matrix-vector products, linear systems, sparse matrices, iterative methods, domain decomposition, and Fourier solvers.",
    notes:
      "For students in computer science, applied mathematics, science, and engineering. Ordinarily offered in years alternating with CSC2310H.",
    tags: ["scientific computing", "parallel computing", "systems"],
  },
  {
    id: "csc2525h-data-structures-wild",
    code: "CSC2525H",
    title: "Research Topics in Database Management: Data Structures in the Wild",
    group: "Group 3",
    category: "Databases",
    description:
      "A research topics course in database management. This offering is a deep dive into real-world data structures engineered for modern CPUs, memory hierarchies, and diverse data types, studying space-speed trade-offs and practical performance.",
    notes: "Recommended preparation: a previous database systems course.",
    tags: ["databases", "data structures", "systems"],
  },
  {
    id: "csc2521h-physics-based-animation",
    code: "CSC2521H",
    title: "Topics in Computer Graphics: Physics-Based Animation",
    group: "Group 4",
    category: "Graphics",
    description:
      "This seminar-style course covers advanced graphics and computer animation through academic paper readings, student-led presentations, and a course project.",
    notes:
      "Recommended preparation: CSC317H1, with CSC417H1 a plus. Participants should know basic graphics concepts.",
    tags: ["graphics", "animation", "visual computing"],
  },
  {
    id: "csc2537h-information-visualization",
    code: "CSC2537H",
    title: "Information Visualization",
    group: "Group 4",
    category: "Visualization",
    description:
      "This course studies techniques and algorithms for effective visualizations based on graphic design, visual art, perceptual psychology, and cognitive science. Students read and critically analyze research papers, discuss them in class, and complete a final project.",
    tags: ["visualization", "hci", "design"],
  },
  {
    id: "csc2552h-llms-society",
    code: "CSC2552H",
    title: "Topics in Computational Social Science: LLMs and Society",
    group: "Group 4",
    category: "Computational Social Science",
    description:
      "This course introduces computational social science at the intersection of AI, data, and society. It covers methodologies from large-scale observational studies to online experimentation, research skills, paper reviews, and projects. Topics include online misinformation, algorithmic bias, and social media platforms.",
    tags: ["computational social science", "llms", "ai", "society"],
  },
  {
    id: "csc2604h-intellectual-property",
    code: "CSC2604H",
    title: "Topics in Human-Centred and Interdisciplinary Computing: Intellectual Property",
    group: "Group 4",
    category: "HCI",
    description:
      "This seminar covers innovative human-computer interaction technologies used across disciplines, including virtual reality, augmented reality, haptics, and generative AI. This offering is a research seminar on intellectual property issues in protecting and leveraging contemporary human-machine interface innovations in academic and commercial settings.",
    notes: "Recommended preparation: CSC428H1/CSC2514H or equivalent.",
    tags: ["hci", "intellectual property", "generative ai"],
  },
  {
    id: "csc2615h-ethical-ai",
    code: "CSC2615H",
    title: "Ethical Aspects of Artificial Intelligence",
    group: "Group 4",
    category: "AI Ethics",
    description:
      "This course introduces critical social analysis of ethical aspects of AI. Topics include theories of ethics, AI history, ethics and computing, values embedded in AI, privacy concerns, biases across demographic and geographic dimensions, debates around AI, auditing AI systems, and designing fairer systems.",
    tags: ["ai ethics", "ai", "fairness", "society"],
    aiCore: true,
  },
  {
    id: "csc2631h-mobile-digital-health",
    code: "CSC2631H",
    title: "Mobile and Digital Health",
    group: "Group 4",
    category: "Digital Health",
    description:
      "This course examines mobile health over the past twenty years, including definitions of mobile health and how sensors in ubiquitous and novel devices capture indicators of physical and mental health, physiological signals, psychomotor function, and disease-specific symptoms.",
    tags: ["healthcare", "mobile health", "hci", "sensors"],
    healthcareDataScience: true,
  },
  {
    id: "csc2600h-algorithmic-social-systems",
    code: "CSC2600H",
    title: "Topics in Computer Science: Algorithmic Social Systems",
    group: "Group 4",
    category: "Computational Social Science",
    description:
      "This topics course explores how individuals, AI agents, and algorithms work together to achieve common goals. It covers distributed collaboration and collective intelligence, opinion dynamics, network formation, learning algorithms, and sociological and mathematical approaches to collaborative systems.",
    tags: ["computational social science", "multi-agent systems", "ai"],
  },
  {
    id: "csc2514h-human-computer-interaction",
    code: "CSC2514H/CSC428H1",
    title: "Human-Computer Interaction",
    group: "Group 4",
    category: "HCI",
    description:
      "Understanding human behavior as it applies to user interfaces, including work activity analysis, observational techniques, questionnaires, unobtrusive measures, human cognitive system parameters, task analysis, cognitive modeling, interface representations, prototyping tools, cognitive walkthroughs, usability studies, verbal protocol analysis, and case studies.",
    tags: ["hci", "design", "usability"],
  },
  {
    id: "csc2524h-human-centred-ai",
    code: "CSC2524H",
    title: "Topics in Interactive Computing: Human-Centred Artificial Intelligence",
    group: "Group 4",
    category: "HCI",
    description:
      "This seminar examines HCI research on AI and large language models for intelligent user interfaces. It studies how LLMs can enhance interactive systems in domains such as education, human-robot interaction, and creativity support tools. Students conduct weekly readings, lead presentations and discussions, and complete a final project.",
    notes: "Recommended preparation: CSC428H1/2514H or equivalent.",
    tags: ["hci", "ai", "llms", "human-centred ai"],
    aiCore: true,
  },
  {
    id: "csc2526h-context-aware-computing",
    code: "CSC2526H",
    title: "HCI: Topics in Ubiquitous Computing: Context-aware computing",
    group: "Group 4",
    category: "Ubiquitous Computing",
    description:
      "This seminar covers computing technology moving beyond desktops into everyday environments through paper readings, student-led presentations, and a course project.",
    notes:
      "Recommended preparation: a human-computer interaction course such as CSC428H1 and some exposure to user study design.",
    tags: ["hci", "ubiquitous computing", "context-aware computing"],
  },
  {
    id: "csc2527h-business-software",
    code: "CSC2527H",
    title: "The Business of Software",
    group: "Group 4",
    category: "Software Business",
    description:
      "The software and internet industries; principles of successful software enterprises; innovation and entrepreneurship; software business definition and planning; business models; market and product planning; product development; marketing, sales, and support; financial management and financing of high-technology ventures; management, leadership, and partnerships. Students write business plans in teams.",
    tags: ["software business", "entrepreneurship", "product"],
  },
  {
    id: "csc2527h-csc454-business-software",
    code: "CSC2527H/CSC454H1",
    title: "The Business of Software",
    group: "Group 4",
    category: "Software Business",
    description:
      "The software and internet industries; principles of successful software enterprises; innovation and entrepreneurship; software business definition and planning; business models; market and product planning; product development; marketing, sales, and support; financial management and financing of high-technology ventures; management, leadership, and partnerships. Students write business plans in teams.",
    tags: ["software business", "entrepreneurship", "product"],
  },
  {
    id: "csc2537h-sta2555-information-visualization",
    code: "CSC2537H/STA2555H",
    title: "Information Visualization",
    group: "Group 4",
    category: "Visualization",
    description:
      "This course studies techniques and algorithms for effective visualizations based on graphic design, visual art, perceptual psychology, and cognitive science. Students read and critically analyze research papers, discuss them in class, and complete a final project.",
    tags: ["visualization", "hci", "statistics"],
    healthcareDataScience: true,
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
  },
  {
    id: "csc2600h-csc491-capstone",
    code: "CSC2600H/CSC491H1",
    title: "Topics in Computer Science: Capstone Project",
    group: "Non-Breadth",
    category: "Capstone",
    description:
      "This is a topics course in computer science. The topic changes from year to year and may span a variety of computer science topics.",
    tags: ["capstone", "project"],
  },
]

export const TAGS = Array.from(
  new Set(COURSES.flatMap((course) => course.tags))
).sort((a, b) => a.localeCompare(b))

export const CATEGORIES = Array.from(
  new Set(COURSES.map((course) => course.category))
).sort((a, b) => a.localeCompare(b))
