// Shared data and utilities for MiceNet app
// This file simulates backend data and AI logic

const MiceNetData = {
    // Current User Profile
    currentUser: {
        id: 'user-1',
        name: 'Profesional',
        avatar: 'P',
        gradient: 'from-blue-500 to-cyan-500',
        role: 'Full-Stack Developer',
        company: 'Freelance',
        interests: ['Tech', 'IA', 'Startup', 'Full-Stack', 'Cloud'],
        bio: 'Desarrollador full-stack con 5 años de experiencia. Apasionado por la IA y las startups. Buscando conectar con founders y otros developers.',
        social: {
            linkedin: 'linkedin.com/in/profesional',
            twitter: '@profesional_dev'
        },
        eventGoals: [
            'Encontrar proyectos interesantes',
            'Networking con founders',
            'Aprender sobre IA aplicada'
        ]
    },

    // Events
    events: [
        {
            id: 'event-1',
            name: 'Tech Conference 2025',
            type: 'Conferencia',
            description: 'El evento tech más grande del año',
            date: '2025-01-15',
            location: 'Barcelona, España',
            attendees: 450,
            status: 'active',
            gradient: 'from-blue-500 to-cyan-500',
            matchingAlgorithm: 'interests-common'
        },
        {
            id: 'event-2',
            name: 'Startup Networking',
            type: 'Networking',
            description: 'Conecta con emprendedores y founders',
            date: '2025-01-20',
            location: 'Madrid, España',
            attendees: 200,
            status: 'active',
            gradient: 'from-purple-500 to-pink-500',
            matchingAlgorithm: 'professional-networking'
        }
    ],

    // Connection Profiles
    connections: [
        {
            id: 'user-2',
            name: 'María García',
            avatar: 'M',
            gradient: 'from-pink-500 to-purple-500',
            role: 'Product Manager',
            company: 'TechCorp',
            interests: ['IA', 'Product', 'Startup', 'SaaS', 'B2B'],
            matchPercentage: 90,
            status: 'online',
            bio: 'Product Manager apasionada por la IA. Liderando desarrollo de plataforma SaaS B2B. Buscando desarrolladores talentosos.',
            eventGoals: [
                'Encontrar talento técnico para mi startup',
                'Aprender sobre nuevas tendencias en IA',
                'Networking con otros founders y PMs'
            ],
            aiInsight: 'María está buscando desarrolladores para su startup. Tus habilidades en full-stack coinciden perfectamente.',
            whyMatch: [
                'María está buscando desarrolladores full-stack para su nuevo proyecto de IA',
                'Compartes interés en tecnología emergente y startups',
                'Ambos buscan colaboración en proyectos innovadores',
                'Perfiles complementarios: product + technical'
            ],
            experience: [
                {
                    role: 'Product Manager',
                    company: 'TechCorp',
                    period: '2022 - Presente',
                    gradient: 'from-blue-500 to-cyan-500'
                },
                {
                    role: 'Senior Product Designer',
                    company: 'InnovaLabs',
                    period: '2019 - 2022',
                    gradient: 'from-purple-500 to-pink-500'
                }
            ],
            social: {
                linkedin: 'linkedin.com/in/mariagarcia',
                twitter: '@mariagarcia_pm'
            },
            location: 'Cerca de ti',
            lastSeen: '10:45'
        },
        {
            id: 'user-3',
            name: 'Jorge Martínez',
            avatar: 'J',
            gradient: 'from-blue-500 to-cyan-500',
            role: 'CTO',
            company: 'InnovaLabs',
            interests: ['Tech', 'Cloud', 'DevOps', 'Arquitectura', 'Kubernetes'],
            matchPercentage: 75,
            status: 'away',
            bio: 'CTO con enfoque en cloud native y arquitecturas escalables. Mentor de developers.',
            eventGoals: [
                'Buscar colaboración en proyectos cloud',
                'Mentoría de developers junior',
                'Compartir conocimiento sobre DevOps'
            ],
            aiInsight: 'Jorge busca colaboración en proyectos de infraestructura cloud. Match en intereses técnicos.',
            whyMatch: [
                'Ambos trabajan con tecnologías cloud',
                'Jorge está buscando colaboradores técnicos',
                'Intereses compartidos en DevOps y arquitectura',
                'Oportunidad de mentoría y aprendizaje'
            ],
            lastSeen: '5m ago'
        },
        {
            id: 'user-4',
            name: 'Ana Rodríguez',
            avatar: 'A',
            gradient: 'from-green-500 to-teal-500',
            role: 'Founder',
            company: 'GreenTech',
            interests: ['Sostenibilidad', 'Startup', 'Fundraising', 'Tech for Good'],
            matchPercentage: 84,
            status: 'online',
            bio: 'Fundadora de startup de tecnología sostenible. Construyendo equipo tech.',
            eventGoals: [
                'Construir mi equipo tech',
                'Encontrar desarrolladores con visión de impacto',
                'Networking con inversores'
            ],
            aiInsight: 'Ana está construyendo su equipo tech. Busca desarrolladores con visión de impacto.',
            whyMatch: [
                'Ana está construyendo su equipo de desarrollo',
                'Busca developers con valores alineados',
                'Proyecto con propósito e impacto social',
                'Oportunidad de founding team member'
            ],
            lastSeen: 'Ayer'
        },
        {
            id: 'user-5',
            name: 'Carlos Sánchez',
            avatar: 'C',
            gradient: 'from-yellow-500 to-orange-500',
            role: 'Data Scientist',
            company: 'AI Labs',
            interests: ['Machine Learning', 'IA', 'Python', 'Data', 'Research'],
            matchPercentage: 68,
            status: 'offline',
            bio: 'Data Scientist especializado en ML. Investigación aplicada en IA.',
            eventGoals: [
                'Colaboraciones en proyectos de IA',
                'Compartir research en ML',
                'Encontrar engineering talent'
            ],
            aiInsight: 'Carlos busca colaboradores en proyectos de IA y ML.',
            lastSeen: '2 días'
        },
        {
            id: 'user-6',
            name: 'Laura Fernández',
            avatar: 'L',
            gradient: 'from-indigo-500 to-purple-500',
            role: 'UX Designer',
            company: 'DesignCo',
            interests: ['UX', 'Design', 'Product', 'User Research', 'UI'],
            matchPercentage: 72,
            status: 'online',
            bio: 'UX Designer con foco en productos tech. Colaboro con developers.',
            eventGoals: [
                'Networking con developers',
                'Aprender sobre implementación técnica',
                'Colaboraciones design-dev'
            ],
            aiInsight: 'Laura busca entender mejor la perspectiva técnica. Colaboración design-dev.',
            lastSeen: '3 días'
        }
    ],

    // Messages
    messages: [
        {
            id: 'msg-1',
            userId: 'user-2',
            userName: 'María García',
            lastMessage: '¡Me encantaría conocer más sobre tu experiencia! ¿Tienes tiempo para un café?',
            timestamp: '10:45',
            unread: 2,
            messages: [
                {
                    from: 'user-2',
                    text: '¡Hola! Vi tu perfil y me parece muy interesante tu experiencia en full-stack 👋',
                    timestamp: '10:30',
                    type: 'received'
                },
                {
                    from: 'user-2',
                    text: 'Estoy construyendo una startup de IA y busco desarrolladores talentosos. ¿Te gustaría que charlemos?',
                    timestamp: '10:31',
                    type: 'received'
                },
                {
                    from: 'user-1',
                    text: '¡Hola María! Claro que sí, me encantaría saber más sobre tu proyecto 🚀',
                    timestamp: '10:42',
                    type: 'sent'
                },
                {
                    from: 'user-2',
                    text: '¡Perfecto! ¿Tienes tiempo para un café? Estoy en el área del networking ahora ☕',
                    timestamp: '10:45',
                    type: 'received'
                }
            ]
        },
        {
            id: 'msg-2',
            userId: 'user-3',
            userName: 'Jorge Martínez',
            lastMessage: '¿Qué opinas de usar Kubernetes para el despliegue?',
            timestamp: 'Ayer',
            unread: 1,
            messages: []
        },
        {
            id: 'msg-3',
            userId: 'user-4',
            userName: 'Ana Rodríguez',
            lastMessage: 'Perfecto! Nos vemos mañana en el coffee break 🙂',
            timestamp: 'Ayer',
            unread: 0,
            messages: []
        },
        {
            id: 'msg-4',
            userId: 'user-5',
            userName: 'Carlos Sánchez',
            lastMessage: 'Excelente charla sobre IA. Mandame info cuando puedas!',
            timestamp: '2 días',
            unread: 0,
            messages: []
        },
        {
            id: 'msg-5',
            userId: 'user-6',
            userName: 'Laura Fernández',
            lastMessage: '¿Podemos coordinar para el workshop de mañana?',
            timestamp: '3 días',
            unread: 0,
            messages: []
        }
    ],

    // AI Generated Quick Messages
    quickMessages: {
        general: [
            '¡Hola! Me encantaría conectar contigo y hablar sobre colaboración. 🚀',
            'Vi tu perfil y creo que tenemos intereses en común. ¿Charlamos? ☕',
            '¡Hola! La IA nos matcheó. Me gustaría conocer más sobre tu proyecto. 💡'
        ],
        highMatch: [
            '¡Hola [NAME]! Vi que buscas [NEED]. Me encantaría saber más. Soy [ROLE] con experiencia en [SKILL]. 🚀',
            'Hola! La IA nos matcheó con [PERCENTAGE]%. Comparto tu interés en [INTEREST]. ¿Charlamos sobre tu proyecto? ☕',
            '¡Hola! Me interesa mucho [TOPIC]. Creo que podríamos tener una conversación interesante. 💡'
        ]
    },

    // AI Suggested Responses
    aiResponses: [
        '¡Claro! Estoy libre en 10 minutos. ¿Dónde nos vemos?',
        'Me encantaría! Voy para allá. Dame 5 minutos 😊',
        'Perfecto timing! Justo terminé mi sesión. Te veo ahí!'
    ],

    // Admin Stats
    adminStats: {
        activeEvents: 12,
        totalUsers: 1247,
        connectionsMade: 3842,
        matchRate: 87
    },

    // Existing Avatars for Onboarding
    avatars: [
        {
            id: 'professional',
            name: 'Profesional',
            avatar: 'P',
            gradient: 'from-blue-500 to-cyan-500',
            interests: ['Tech', 'Negocios']
        },
        {
            id: 'creative',
            name: 'Creativo',
            avatar: 'C',
            gradient: 'from-pink-500 to-purple-500',
            interests: ['Arte', 'Diseño']
        },
        {
            id: 'entrepreneur',
            name: 'Emprendedor',
            avatar: 'E',
            gradient: 'from-green-500 to-teal-500',
            interests: ['Startup', 'VC']
        }
    ]
};

// AI Matching Algorithm Simulator
const AIMatchingEngine = {
    calculateMatch(user1, user2) {
        // Simulate AI matching based on interests
        const commonInterests = user1.interests.filter(interest =>
            user2.interests.includes(interest)
        );
        const baseScore = (commonInterests.length / user1.interests.length) * 100;

        // Add randomness to simulate AI complexity
        const aiAdjustment = Math.random() * 20 - 10;
        return Math.min(95, Math.max(60, Math.round(baseScore + aiAdjustment)));
    },

    generateInsight(user1, user2) {
        const commonInterests = user1.interests.filter(interest =>
            user2.interests.includes(interest)
        );

        const insights = [
            `${user2.name} está buscando ${user1.role.toLowerCase()}s. Match perfecto!`,
            `Intereses comunes en ${commonInterests.join(', ')}`,
            `Ambos asisten al mismo evento. Gran oportunidad de networking`,
            `La IA detectó complementariedad en vuestros perfiles`
        ];

        return insights[Math.floor(Math.random() * insights.length)];
    },

    personalizeMessage(template, user, targetUser) {
        return template
            .replace('[NAME]', targetUser.name)
            .replace('[NEED]', 'colaboradores')
            .replace('[ROLE]', user.role)
            .replace('[SKILL]', user.interests[0])
            .replace('[PERCENTAGE]', this.calculateMatch(user, targetUser))
            .replace('[INTEREST]', targetUser.interests[0])
            .replace('[TOPIC]', targetUser.interests[1] || targetUser.interests[0]);
    }
};

// Utility Functions
const Utils = {
    formatTimestamp(timestamp) {
        // Simple timestamp formatter
        return timestamp;
    },

    getStatusColor(status) {
        const colors = {
            online: 'bg-green-500',
            away: 'bg-yellow-500',
            offline: 'bg-gray-400'
        };
        return colors[status] || colors.offline;
    },

    getMatchColor(percentage) {
        if (percentage >= 85) return { bg: 'bg-purple-100', text: 'text-purple-700' };
        if (percentage >= 75) return { bg: 'bg-blue-100', text: 'text-blue-700' };
        if (percentage >= 65) return { bg: 'bg-green-100', text: 'text-green-700' };
        return { bg: 'bg-yellow-100', text: 'text-yellow-700' };
    },

    generateGradientClass(gradient) {
        return `bg-gradient-to-br ${gradient}`;
    }
};

// Export for use in HTML pages
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MiceNetData, AIMatchingEngine, Utils };
}
