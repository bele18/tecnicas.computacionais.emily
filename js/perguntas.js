export const perguntas = [
    {
        enunciado: "Você prefere viajar para destinos modernos ou históricos?",
        alternativas: [
            {
                texto: "modernos",
                afirmacao: [
                    "Destinos modernos são cidades vibrantes e tecnológicas, com vida noturna, compras e arquitetura contemporânea.",
                    "Exemplos: Nova York, Dubai, Tóquio, Singapura, Londres."
                ],
                proxima: 1,
            },
            {
                texto: "históricos",
                afirmacao: [
                    "Destinos históricos são repletos de cultura, monumentos antigos e uma vibe clássica que nos leva a outra época.",
                    "Exemplos: Roma, Atenas, Jerusalém, Cusco, Cairo."
                ],
                proxima: 2,
            }
        ]
    },
    {
        enunciado: "Em viagens modernas, o que te atrai mais?",
        alternativas: [
            {
                texto: "compras e entretenimento",
                afirmacao: [
                    "Destinos perfeitos pra quem ama shopping, shows e agitação urbana.",
                    "Ex: Los Angeles, Paris, Las Vegas."
                ],
                proxima: 3,
            },
            {
                texto: "tecnologia e inovação",
                afirmacao: [
                    "Acharemos a cidade ideal, vá para 3."
                ],
                proxima: 4,
            }
        ]
    },
    {
        enunciado: "Você gosta de viagens com imersão cultural e costumes locais?",
        alternativas: [
            {
                texto: "sim.",
                afirmacao: [
                    "Roteiros culturais te levam a conhecer tradições, culinária típica e a alma do lugar.",
                    "Ex: Marrakech, Kyoto, Oaxaca."
                ],
                proxima: 5,
            },
            {
                texto: "não.",
                afirmacao: [
                    "vá para 4."
                ],
                proxima: 6,
            }
        ]
    },
    {
        enunciado: "Prefere viagens com roteiros bem definidos ou explorar livremente?",
        alternativas: [
            {
                texto: "roteiros definidos",
                afirmacao: [
                    "5 viagens organizadas pra quem ama planejamento e aproveitar cada minuto.",
                    "Excursões na Europa, Cruzeiros pelo Caribe, Pacotes Disney, Viagens com guia na Ásia, Roteiros por cidades italianas."
                ],
                proximo: 7,
            },
            {
                texto: "explorar livremente",
                afirmacao: [
                    "3 destinos perfeitos pra quem curte se perder no mapa.",
                    "Tailândia, Costa Rica, Islândia.",
                    "Caso não se interesse por nenhum desses, vá para 5."
                ],
                proximo: 8,
            }
        ]
    },
    {
        enunciado: "Para viagens com toque mágico / fantasia",
        alternativas: [
            {
                texto: "castelos e lendas medievais",
                afirmacao: [
                    "Escócia, Alemanha (Rota dos Castelos), Transilvânia."
                ],
                proximo: 9,
            },
            {
                texto: "cenários épicos e natureza de tirar o fôlego",
                afirmacao: [
                    "Nova Zelândia, Noruega, Islândia, Patagônia, Alpes Suíços."
                ]
            }
        ]
    }
];
