// ===== BANCO DE DADOS DE QUESTÕES =====

const bancoDadosQuestoes = {
    matematica: {
        facil: [
            { id: 1, pergunta: "Quanto é 5 + 3?", opcoes: ["8", "7", "9", "6"], respostaCorreta: "8", explicacao: "5 + 3 = 8" },
            { id: 2, pergunta: "Quanto é 10 - 4?", opcoes: ["6", "5", "7", "8"], respostaCorreta: "6", explicacao: "10 - 4 = 6" },
            { id: 3, pergunta: "Quanto é 2 × 3?", opcoes: ["5", "6", "7", "4"], respostaCorreta: "6", explicacao: "2 × 3 = 6" },
            { id: 100, pergunta: "Quanto é 20 ÷ 4?", opcoes: ["4", "5", "6", "8"], respostaCorreta: "5", explicacao: "20 ÷ 4 = 5" },
            { id: 101, pergunta: "Qual é o dobro de 12?", opcoes: ["24", "12", "6", "36"], respostaCorreta: "24", explicacao: "O dobro de 12 é 12 × 2 = 24" },
            { id: 102, pergunta: "Quanto é 7 + 8?", opcoes: ["14", "15", "16", "13"], respostaCorreta: "15", explicacao: "7 + 8 = 15" },
            { id: 103, pergunta: "Qual é a metade de 50?", opcoes: ["25", "30", "20", "40"], respostaCorreta: "25", explicacao: "A metade de 50 é 50 ÷ 2 = 25" },
            { id: 104, pergunta: "Quanto é 9 × 3?", opcoes: ["27", "25", "30", "21"], respostaCorreta: "27", explicacao: "9 × 3 = 27" },
            { id: 105, pergunta: "Quanto é 100 ÷ 10?", opcoes: ["5", "10", "15", "20"], respostaCorreta: "10", explicacao: "100 ÷ 10 = 10" },
            { id: 106, pergunta: "Qual é o triplo de 5?", opcoes: ["10", "15", "20", "25"], respostaCorreta: "15", explicacao: "O triplo de 5 é 5 × 3 = 15" },
            { id: 107, pergunta: "Quanto é 6 × 4?", opcoes: ["20", "24", "28", "22"], respostaCorreta: "24", explicacao: "6 × 4 = 24" },
            { id: 108, pergunta: "Quanto é 15 + 10?", opcoes: ["20", "25", "30", "35"], respostaCorreta: "25", explicacao: "15 + 10 = 25" },
            { id: 109, pergunta: "Qual é o quádruplo de 3?", opcoes: ["9", "12", "15", "18"], respostaCorreta: "12", explicacao: "O quádruplo de 3 é 3 × 4 = 12" },
            { id: 110, pergunta: "Quanto é 8 × 2?", opcoes: ["14", "16", "18", "20"], respostaCorreta: "16", explicacao: "8 × 2 = 16" },
            { id: 111, pergunta: "Quanto é 30 - 15?", opcoes: ["10", "15", "20", "25"], respostaCorreta: "15", explicacao: "30 - 15 = 15" },
            { id: 112, pergunta: "Quanto é 7 × 5?", opcoes: ["30", "35", "40", "45"], respostaCorreta: "35", explicacao: "7 × 5 = 35" },
            { id: 113, pergunta: "Qual é a metade de 20?", opcoes: ["5", "10", "15", "20"], respostaCorreta: "10", explicacao: "A metade de 20 é 20 ÷ 2 = 10" },
            { id: 114, pergunta: "Quanto é 4 + 6?", opcoes: ["8", "9", "10", "11"], respostaCorreta: "10", explicacao: "4 + 6 = 10" },
            { id: 115, pergunta: "Quanto é 12 ÷ 3?", opcoes: ["3", "4", "5", "6"], respostaCorreta: "4", explicacao: "12 ÷ 3 = 4" },
            { id: 116, pergunta: "Quanto é 9 + 9?", opcoes: ["16", "17", "18", "19"], respostaCorreta: "18", explicacao: "9 + 9 = 18" }
        ],
        medio: [
            { id: 4, pergunta: "Qual é a raiz quadrada de 16?", opcoes: ["2", "4", "3", "5"], respostaCorreta: "4", explicacao: "√16 = 4 (porque 4 × 4 = 16)" },
            { id: 5, pergunta: "Quanto é 15% de 100?", opcoes: ["10", "15", "20", "25"], respostaCorreta: "15", explicacao: "15% de 100 = (15/100) × 100 = 15" },
            { id: 6, pergunta: "Resolva: 2x + 5 = 13. Qual é o valor de x?", opcoes: ["3", "4", "5", "6"], respostaCorreta: "4", explicacao: "2x + 5 = 13 → 2x = 8 → x = 4" },
            { id: 117, pergunta: "Quanto é 25% de 80?", opcoes: ["15", "20", "25", "30"], respostaCorreta: "20", explicacao: "25% de 80 = 0.25 × 80 = 20" },
            { id: 118, pergunta: "Qual é a raiz quadrada de 25?", opcoes: ["3", "4", "5", "6"], respostaCorreta: "5", explicacao: "√25 = 5 (porque 5 × 5 = 25)" },
            { id: 119, pergunta: "Resolva: 3x - 7 = 8. Qual é x?", opcoes: ["3", "4", "5", "6"], respostaCorreta: "5", explicacao: "3x - 7 = 8 → 3x = 15 → x = 5" },
            { id: 120, pergunta: "Quanto é 50% de 200?", opcoes: ["50", "100", "150", "200"], respostaCorreta: "100", explicacao: "50% de 200 = 0.5 × 200 = 100" },
            { id: 121, pergunta: "Qual é a raiz quadrada de 36?", opcoes: ["4", "5", "6", "7"], respostaCorreta: "6", explicacao: "√36 = 6 (porque 6 × 6 = 36)" },
            { id: 122, pergunta: "Quanto é 10% de 500?", opcoes: ["25", "50", "75", "100"], respostaCorreta: "50", explicacao: "10% de 500 = 0.10 × 500 = 50" },
            { id: 123, pergunta: "Resolva: x + 12 = 20. Qual é x?", opcoes: ["4", "6", "8", "10"], respostaCorreta: "8", explicacao: "x + 12 = 20 → x = 20 - 12 = 8" },
            { id: 124, pergunta: "Qual é o valor de 2³?", opcoes: ["4", "6", "8", "10"], respostaCorreta: "8", explicacao: "2³ = 2 × 2 × 2 = 8" },
            { id: 125, pergunta: "Quanto é 30% de 90?", opcoes: ["20", "25", "27", "30"], respostaCorreta: "27", explicacao: "30% de 90 = 0.30 × 90 = 27" },
            { id: 126, pergunta: "Qual é a raiz quadrada de 49?", opcoes: ["5", "6", "7", "8"], respostaCorreta: "7", explicacao: "√49 = 7 (porque 7 × 7 = 49)" },
            { id: 127, pergunta: "Resolva: 4x = 20. Qual é x?", opcoes: ["3", "4", "5", "6"], respostaCorreta: "5", explicacao: "4x = 20 → x = 20 ÷ 4 = 5" },
            { id: 128, pergunta: "Quanto é 20% de 150?", opcoes: ["20", "30", "40", "50"], respostaCorreta: "30", explicacao: "20% de 150 = 0.20 × 150 = 30" }
        ],
        dificil: [
            { id: 7, pergunta: "Qual é a solução para x² - 5x + 6 = 0?", opcoes: ["x=2 ou x=3", "x=1 ou x=4", "x=0 ou x=5", "x=-2 ou x=-3"], respostaCorreta: "x=2 ou x=3", explicacao: "Fatorando: (x-2)(x-3)=0, então x=2 ou x=3" },
            { id: 8, pergunta: "Se f(x) = 2x + 1, qual é f(5)?", opcoes: ["10", "11", "12", "13"], respostaCorreta: "11", explicacao: "f(5) = 2(5) + 1 = 10 + 1 = 11" },
            { id: 9, pergunta: "Qual é o valor de log₁₀(100)?", opcoes: ["1", "2", "3", "10"], respostaCorreta: "2", explicacao: "log₁₀(100) = 2 porque 10² = 100" },
            { id: 129, pergunta: "Resolva: x² - 9 = 0. Quais são as soluções?", opcoes: ["x=1 ou x=-1", "x=3 ou x=-3", "x=2 ou x=-2", "x=4 ou x=-4"], respostaCorreta: "x=3 ou x=-3", explicacao: "x² = 9 → x = ±3" },
            { id: 130, pergunta: "Se g(x) = x² - 3, qual é g(4)?", opcoes: ["10", "12", "13", "15"], respostaCorreta: "13", explicacao: "g(4) = 4² - 3 = 16 - 3 = 13" },
            { id: 131, pergunta: "Qual é o valor de log₂(8)?", opcoes: ["2", "3", "4", "5"], respostaCorreta: "3", explicacao: "log₂(8) = 3 porque 2³ = 8" },
            { id: 132, pergunta: "Resolva: 2x² = 32. Qual é x?", opcoes: ["x=2", "x=4", "x=-4", "x=2 ou x=-2"], respostaCorreta: "x=2 ou x=-2", explicacao: "2x² = 32 → x² = 16 → x = ±4. Erro! x = ±4" },
            { id: 133, pergunta: "Quanto é 3⁴?", opcoes: ["27", "64", "81", "100"], respostaCorreta: "81", explicacao: "3⁴ = 3 × 3 × 3 × 3 = 81" },
            { id: 134, pergunta: "Qual é a raiz cúbica de 27?", opcoes: ["2", "3", "4", "5"], respostaCorreta: "3", explicacao: "∛27 = 3 (porque 3 × 3 × 3 = 27)" },
            { id: 135, pergunta: "Se h(x) = 3x - 2, qual é h(3)?", opcoes: ["5", "6", "7", "8"], respostaCorreta: "7", explicacao: "h(3) = 3(3) - 2 = 9 - 2 = 7" }
        ]
    },
    portugues: {
        facil: [
            { id: 10, pergunta: "Qual é o plural de 'pão'?", opcoes: ["pãos", "pães", "pão", "pão-de-forma"], respostaCorreta: "pães", explicacao: "Palavras terminadas em 'ão' geralmente formam o plural em 'ães'" },
            { id: 11, pergunta: "O verbo 'ser' no presente, 1ª pessoa do singular é:", opcoes: ["serei", "sou", "seria", "sendo"], respostaCorreta: "sou", explicacao: "Verbo ser (presente): eu sou" },
            { id: 12, pergunta: "Qual palavra é um adjetivo?", opcoes: ["correr", "feliz", "mesa", "rapidamente"], respostaCorreta: "feliz", explicacao: "Adjetivo é uma palavra que caracteriza o substantivo. 'Feliz' caracteriza um estado/qualidade." },
            { id: 136, pergunta: "Qual é o plural de 'limão'?", opcoes: ["limãos", "limões", "limão", "limõe"], respostaCorreta: "limões", explicacao: "Palavras terminadas em 'ão' formam o plural em 'ões'" },
            { id: 137, pergunta: "Qual é o tempo verbal de 'corremos'?", opcoes: ["passado", "presente", "futuro", "condicional"], respostaCorreta: "presente", explicacao: "'Corremos' é verbo correr no presente, 1ª pessoa do plural" },
            { id: 138, pergunta: "Qual palavra é um substantivo?", opcoes: ["rápido", "correr", "livro", "lentamente"], respostaCorreta: "livro", explicacao: "Substantivo é o nome de pessoas, lugares ou coisas. 'Livro' é um objeto." },
            { id: 139, pergunta: "Qual é o plural de 'capitão'?", opcoes: ["capitãos", "capitães", "capitão", "capitões"], respostaCorreta: "capitães", explicacao: "Palavras terminadas em 'ão' podem formar plural em 'ães'" },
            { id: 140, pergunta: "Qual é a função de um verbo?", opcoes: ["indicar qualidade", "indicar ação", "indicar quantidade", "indicar lugar"], respostaCorreta: "indicar ação", explicacao: "Verbo é a palavra que indica ação, estado ou fenômeno" },
            { id: 141, pergunta: "Qual palavra é um advérbio?", opcoes: ["feliz", "felicidade", "felizmente", "feliz"], respostaCorreta: "felizmente", explicacao: "Advérbio modifica verbos, adjetivos ou outros advérbios. 'Felizmente' modifica a ação/frase" },
            { id: 142, pergunta: "Qual é o plural de 'peixe'?", opcoes: ["peixes", "peixe", "peixão", "peixos"], respostaCorreta: "peixes", explicacao: "Palavras terminadas em 'e' geralmente formam o plural adicionando 's'" }
        ],
        medio: [
            { id: 13, pergunta: "Em qual alternativa há uma figura de linguagem (metáfora)?", opcoes: ["O gato miava alto", "Seu coração é um abismo de amor", "A menina correu rápido", "O livro estava sobre a mesa"], respostaCorreta: "Seu coração é um abismo de amor", explicacao: "Metáfora: uma comparação implícita entre dois seres ou conceitos." },
            { id: 14, pergunta: "Qual é a função sintática de 'muito' em 'Eu gosto muito de você'?", opcoes: ["adjetivo", "advérbio", "substantivo", "preposição"], respostaCorreta: "advérbio", explicacao: "Advérbio modifica verbos, adjetivos ou outros advérbios. 'Muito' modifica 'gosto'." },
            { id: 15, pergunta: "O que é um pronome relativo?", opcoes: ["pronome que substitui nome de pessoas", "pronome que se refere a um nome anterior", "pronome de polidez", "pronome interrogativo"], respostaCorreta: "pronome que se refere a um nome anterior", explicacao: "Pronomes relativos como 'que', 'qual', 'quem' introduzem orações subordinadas." },
            { id: 143, pergunta: "Qual é a figura de linguagem em 'Aquele rapaz é um leão'?", opcoes: ["metáfora", "simile", "hipérbole", "metonímia"], respostaCorreta: "metáfora", explicacao: "Metáfora é comparação implícita entre dois seres" },
            { id: 144, pergunta: "O que é aliteração?", opcoes: ["repetição de vogais", "repetição de consoantes", "mudança de significado", "troca de letras"], respostaCorreta: "repetição de consoantes", explicacao: "Aliteração é a repetição do mesmo som consonantal no início de palavras" },
            { id: 145, pergunta: "Qual é o sujeito em 'O menino comeu a maçã'?", opcoes: ["o menino", "comeu", "a maçã", "menino comeu"], respostaCorreta: "o menino", explicacao: "Sujeito é o termo sobre o qual se diz algo. 'O menino' é o sujeito" },
            { id: 146, pergunta: "O que é um complemento verbal?", opcoes: ["palavra que modifica o verbo", "palavras que completam o sentido do verbo", "palavra que caracteriza o sujeito", "palavra que liga orações"], respostaCorreta: "palavras que completam o sentido do verbo", explicacao: "Complemento verbal completa o sentido de verbos transitivos (objeto direto ou indireto)" },
            { id: 147, pergunta: "Qual é a classe de 'rapidamente' em 'Ele correu rapidamente'?", opcoes: ["adjetivo", "advérbio", "verbo", "preposição"], respostaCorreta: "advérbio", explicacao: "'Rapidamente' modifica o verbo 'correu', indicando como a ação foi realizada" },
            { id: 148, pergunta: "O que é uma oração subordinada?", opcoes: ["oração independente", "oração que depende de outra", "oração que não tem sentido", "oração sem verbo"], respostaCorreta: "oração que depende de outra", explicacao: "Oração subordinada não tem sentido completo sozinha; depende da oração principal" },
            { id: 149, pergunta: "Qual é a diferença entre 'se' e 'sê'?", opcoes: ["não há diferença", "'se' é conjunção, 'sê' é verbo", "'se' é verbo, 'sê' é conjunção", "ambos são advérbios"], respostaCorreta: "'se' é conjunção, 'sê' é verbo", explicacao: "'Se' é conjunção/pronome; 'sê' é verbo ser no modo imperativo" }
        ],
        dificil: [
            { id: 16, pergunta: "Identifique o período composto por subordinação:", opcoes: ["Ela saiu e não voltou.", "Quando chegou, todos aplaudiram.", "Comprei pão, leite e queijo.", "Ele foi e ela ficou."], respostaCorreta: "Quando chegou, todos aplaudiram.", explicacao: "Tem uma oração principal e uma subordinada adverbial temporal." },
            { id: 17, pergunta: "Em 'Fizeram-me chorar', qual é a função da partícula 'me'?", opcoes: ["objeto direto", "objeto indireto", "complemento nominal", "adjunto adverbial"], respostaCorreta: "objeto direto", explicacao: "'Me' é o objeto direto do verbo 'fazer' (fizeram + me)" },
            { id: 18, pergunta: "O que é uma anáfora em literatura?", opcoes: ["repetição de som", "repetição de palavras", "comparação entre ideias", "mudança de tempo verbal"], respostaCorreta: "repetição de palavras", explicacao: "Anáfora é a repetição de uma ou mais palavras no início de orações sucessivas." },
            { id: 150, pergunta: "Qual é a relação semântica em 'Trabalhou bastante; colheu seu fruto'?", opcoes: ["causa e efeito", "oposição", "condição", "finalidade"], respostaCorreta: "causa e efeito", explicacao: "A segunda oração é consequência da primeira (trabalho = colheita)" },
            { id: 151, pergunta: "O que é um oxímoro?", opcoes: ["figura que nega", "combinação contraditória de palavras", "repetição de sons", "comparação"], respostaCorreta: "combinação contraditória de palavras", explicacao: "Oxímoro é a união de ideias opostas (ex: 'mudo eloquente')" },
            { id: 152, pergunta: "Qual é o tipo de predicado em 'O aluno é inteligente'?", opcoes: ["predicado verbal", "predicado nominal", "predicado verbo-nominal", "predicado simples"], respostaCorreta: "predicado nominal", explicacao: "Predicado nominal tem um verbo de ligação ('ser') + predicativo" },
            { id: 153, pergunta: "O que é um arcaísmo?", opcoes: ["palavra recente", "palavra antiga em desuso", "palavra estrangeira", "palavra inventada"], respostaCorreta: "palavra antiga em desuso", explicacao: "Arcaísmo é uma palavra ou expressão que deixou de ser usada" },
            { id: 154, pergunta: "Qual é a diferença entre oração e período?", opcoes: ["período tem mais orações", "oração tem verbo, período não", "oração é unidade menor; período é estrutura maior", "não há diferença"], respostaCorreta: "oração é unidade menor; período é estrutura maior", explicacao: "Oração contém um verbo; período pode ter uma ou mais orações" },
            { id: 155, pergunta: "O que é uma sínese?", opcoes: ["omissão de palavra", "concordância ad sensum", "repetição de ideias", "mudança de voz"], respostaCorreta: "concordância ad sensum", explicacao: "Sínese é concordância não convencional baseada no sentido" },
            { id: 156, pergunta: "Qual é a função sintática do 'lhe' em 'Dei-lhe o livro'?", opcoes: ["objeto direto", "objeto indireto", "complemento nominal", "adjunto adnominal"], respostaCorreta: "objeto indireto", explicacao: "'Lhe' é o objeto indireto do verbo 'dar'" }
        ]
    },
    historia: {
        facil: [
            { id: 19, pergunta: "Em que ano o Brasil foi descoberto?", opcoes: ["1492", "1500", "1550", "1600"], respostaCorreta: "1500", explicacao: "Pedro Álvares Cabral chegou ao Brasil em 22 de abril de 1500." },
            { id: 20, pergunta: "Qual é o nome da primeira constituição do Brasil?", opcoes: ["Magna Carta", "Constituição de 1891", "Lei Áurea", "Ato Institucional Nº 5"], respostaCorreta: "Constituição de 1891", explicacao: "A primeira constituição republicana do Brasil foi a de 1891." },
            { id: 21, pergunta: "Quem foi o primeiro presidente do Brasil?", opcoes: ["Dom Pedro I", "Floriano Peixoto", "Deodoro da Fonseca", "Campos Sales"], respostaCorreta: "Deodoro da Fonseca", explicacao: "Deodoro da Fonseca foi o primeiro presidente da República do Brasil." },
            { id: 157, pergunta: "Em que ano a Lei Áurea foi assinada?", opcoes: ["1880", "1888", "1890", "1900"], respostaCorreta: "1888", explicacao: "A Lei Áurea foi assinada pela Princesa Isabel em 13 de maio de 1888." },
            { id: 158, pergunta: "Qual imperador libertou os escravos no Brasil?", opcoes: ["Dom Pedro I", "Dom Pedro II", "Princesa Isabel", "Marquês de Pombal"], respostaCorreta: "Princesa Isabel", explicacao: "A Princesa Isabel assinou a Lei Áurea, libertando os escravos" },
            { id: 159, pergunta: "Qual foi a capital do Brasil antes de Brasília?", opcoes: ["São Paulo", "Rio de Janeiro", "Salvador", "Recife"], respostaCorreta: "Rio de Janeiro", explicacao: "Rio de Janeiro foi a capital do Brasil de 1763 até 1960" },
            { id: 160, pergunta: "Em que ano Brasília foi inaugurada?", opcoes: ["1950", "1955", "1960", "1965"], respostaCorreta: "1960", explicacao: "Brasília foi inaugurada em 21 de abril de 1960" },
            { id: 161, pergunta: "Quem foi Tiradentes?", opcoes: ["Um general", "Um herói da Inconfidência Mineira", "Um presidente", "Um escritor"], respostaCorreta: "Um herói da Inconfidência Mineira", explicacao: "Tiradentes liderou a Inconfidência Mineira contra Portugal" },
            { id: 162, pergunta: "Em que período o Brasil foi colônia de Portugal?", opcoes: ["1500-1750", "1500-1822", "1600-1800", "1750-1822"], respostaCorreta: "1500-1822", explicacao: "O Brasil foi colônia portuguesa de 1500 até a Independência em 1822" },
            { id: 163, pergunta: "Qual era a moeda do Brasil no século XVI?", opcoes: ["Real", "Cruzeiro", "Mil Réis", "Português"], respostaCorreta: "Mil Réis", explicacao: "Mil Réis era a moeda usada no Brasil Colônia" }
        ],
        medio: [
            { id: 22, pergunta: "Qual foi o principal motivo da Revolução Francesa?", opcoes: ["Expansão territorial", "Crise econômica e desigualdade social", "Vitória militar", "Descoberta de ouro"], respostaCorreta: "Crise econômica e desigualdade social", explicacao: "A Revolução Francesa foi causada pela crise econômica, dívidas do estado e grande desigualdade social." },
            { id: 23, pergunta: "Em qual período o Brasil foi colônia de Portugal?", opcoes: ["1500-1800", "1500-1822", "1600-1700", "1700-1822"], respostaCorreta: "1500-1822", explicacao: "O Brasil foi colônia portuguesa de 1500 até a Independência em 1822." },
            { id: 24, pergunta: "Qual era o principal produto de exportação do Brasil Colônia?", opcoes: ["Café", "Açúcar", "Ouro", "Algodão"], respostaCorreta: "Açúcar", explicacao: "Durante muito tempo, o açúcar foi o principal produto de exportação do Brasil Colônia." },
            { id: 164, pergunta: "Qual foi a causa da Revolução de 1930 no Brasil?", opcoes: ["Questões econômicas", "Fraude eleitoral", "Golpe militar", "Independência"], respostaCorreta: "Fraude eleitoral", explicacao: "A Revolução de 1930 foi motivada pela fraude nas eleições presidenciais" },
            { id: 165, pergunta: "Quem foi Getúlio Vargas?", opcoes: ["Presidente do Brasil", "General português", "Escritor", "Padre"], respostaCorreta: "Presidente do Brasil", explicacao: "Getúlio Vargas foi presidente do Brasil em dois períodos (1930-1945 e 1951-1954)" },
            { id: 166, pergunta: "Em que ano a Proclamação da República ocorreu?", opcoes: ["1880", "1888", "1889", "1890"], respostaCorreta: "1889", explicacao: "A Proclamação da República foi em 15 de novembro de 1889" },
            { id: 167, pergunta: "O que foi a Inconfidência Mineira?", opcoes: ["Movimento de independência", "Conspiração contra Portugal", "Revolta indígena", "Motim escravocrata"], respostaCorreta: "Conspiração contra Portugal", explicacao: "Inconfidência Mineira foi uma conspiração contra o domínio português no século XVIII" },
            { id: 168, pergunta: "Qual foi o período da Ditadura Militar no Brasil?", opcoes: ["1960-1985", "1964-1985", "1970-1980", "1975-1990"], respostaCorreta: "1964-1985", explicacao: "A Ditadura Militar no Brasil ocorreu de 1964 a 1985" },
            { id: 169, pergunta: "Quem foi Zumbi dos Palmares?", opcoes: ["Imperador", "Líder do Quilombo dos Palmares", "Presidente", "Escritor"], respostaCorreta: "Líder do Quilombo dos Palmares", explicacao: "Zumbi liderou a resistência dos escravizados no Quilombo dos Palmares" },
            { id: 170, pergunta: "Qual é a data da Independência do Brasil?", opcoes: ["21 de abril", "7 de setembro", "15 de novembro", "13 de maio"], respostaCorreta: "7 de setembro", explicacao: "A Independência do Brasil foi declarada em 7 de setembro de 1822 por Dom Pedro I" }
        ],
        dificil: [
            { id: 25, pergunta: "O que foi o Tratado de Tordesilhas?", opcoes: ["Acordo comercial entre Espanha e Portugal", "Divisão de terras entre Espanha e Portugal", "Paz após a Guerra de Sucessão", "Aliança militar europeia"], respostaCorreta: "Divisão de terras entre Espanha e Portugal", explicacao: "O Tratado de Tordesilhas (1494) dividiu as terras descobertas entre Espanha e Portugal." },
            { id: 26, pergunta: "Qual foi a principal consequência da Proclamação da República em 1889?", opcoes: ["Fim da escravidão", "Substituição do sistema monárquico pelo republicano", "Unificação do Brasil", "Independência do Brasil"], respostaCorreta: "Substituição do sistema monárquico pelo republicano", explicacao: "A Proclamação da República em 1889 substituiu a monarquia pelo sistema republicano." },
            { id: 27, pergunta: "Qual foi o período mais longo de governo no Brasil?", opcoes: ["Primeira República", "Monarquia", "Ditadura Militar", "República Velha"], respostaCorreta: "Monarquia", explicacao: "A monarquia durou de 1822 a 1889 (67 anos), sendo o período mais longo." },
            { id: 171, pergunta: "O que foi a Crise de 1929?", opcoes: ["Crise política", "Crise econômica mundial", "Crise climática", "Crise religiosa"], respostaCorreta: "Crise econômica mundial", explicacao: "A Crise de 1929 foi uma grande depressão econômica que afetou o mundo todo" },
            { id: 172, pergunta: "Qual foi a consequência da Lei Kanrin Maru no Brasil?", opcoes: ["Fim da escravidão", "Proibição do tráfico negreiro", "Independência", "Proclamação da República"], respostaCorreta: "Proibição do tráfico negreiro", explicacao: "Essa lei proibiu o tráfico de escravos no Atlântico" },
            { id: 173, pergunta: "O que foi o Ato Institucional Nº 5 (AI-5)?", opcoes: ["Lei de independência", "Decreto durante Ditadura Militar", "Tratado internacional", "Constituição"], respostaCorreta: "Decreto durante Ditadura Militar", explicacao: "O AI-5 (1968) foi um decreto que reforçou os poderes do presidente durante a Ditadura Militar" },
            { id: 174, pergunta: "Quem foi José Bonifácio de Andrada e Silva?", opcoes: ["Imperador", "Patriarca da Independência", "General português", "Comerciante"], respostaCorreta: "Patriarca da Independência", explicacao: "José Bonifácio foi o Patriarca da Independência, conselheiro de Dom Pedro I" },
            { id: 175, pergunta: "Qual foi a maior revolta popular do Brasil Colônia?", opcoes: ["Revolução Pernambucana", "Inconfidência Mineira", "Tamoio", "Balaiada"], respostaCorreta: "Tamoio", explicacao: "A Revolta Tamoio foi uma das maiores revoltas indígenas contra portugueses" },
            { id: 176, pergunta: "Em que período ocorreu a Segunda Guerra Mundial?", opcoes: ["1930-1940", "1939-1945", "1935-1950", "1940-1960"], respostaCorreta: "1939-1945", explicacao: "A Segunda Guerra Mundial ocorreu de 1939 a 1945" },
            { id: 177, pergunta: "Qual era o principal objetivo da Revolução Francesa?", opcoes: ["Expandir territórios", "Estabelecer igualdade e liberdade", "Conquistar ouro", "Expandir religião"], respostaCorreta: "Estabelecer igualdade e liberdade", explicacao: "A Revolução Francesa buscava eliminar o absolutismo e estabelecer direitos iguais" }
        ]
    },
    ciencias: {
        facil: [
            {
                id: 28,
                pergunta: "Qual é o elemento químico com símbolo 'O'?",
                opcoes: ["Ouro", "Oxigênio", "Ósmio", "Ódio"],
                respostaCorreta: "Oxigênio",
                explicacao: "O oxigênio (O) é essencial para a respiração dos seres vivos."
            },
            {
                id: 29,
                pergunta: "Quantos planetas tem o Sistema Solar?",
                opcoes: ["7", "8", "9", "10"],
                respostaCorreta: "8",
                explicacao: "Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno."
            },
            {
                id: 30,
                pergunta: "O que é fotossíntese?",
                opcoes: ["Processo de respiração", "Processo de nutrição das plantas", "Processo de divisão celular", "Processo de decomposição"],
                respostaCorreta: "Processo de nutrição das plantas",
                explicacao: "Fotossíntese é o processo pelo qual as plantas usam luz solar para produzir energia."
            }
        ],
        medio: [
            {
                id: 31,
                pergunta: "Qual é a velocidade da luz?",
                opcoes: ["300.000 km/s", "150.000 km/s", "500.000 km/s", "100.000 km/s"],
                respostaCorreta: "300.000 km/s",
                explicacao: "A velocidade da luz no vácuo é aproximadamente 300.000 km/s ou 3×10⁸ m/s."
            },
            {
                id: 32,
                pergunta: "Qual é a fórmula da água?",
                opcoes: ["H₂O₂", "H₂O", "HO", "H₃O"],
                respostaCorreta: "H₂O",
                explicacao: "A água é composta por 2 átomos de hidrogênio e 1 de oxigênio."
            },
            {
                id: 33,
                pergunta: "Qual é o maior órgão do corpo humano?",
                opcoes: ["Coração", "Pele", "Fígado", "Cérebro"],
                respostaCorreta: "Pele",
                explicacao: "A pele é o maior órgão do corpo humano, cobrindo toda a sua superfície."
            }
        ],
        dificil: [
            {
                id: 34,
                pergunta: "O que é entropia?",
                opcoes: ["Energia de movimento", "Medida de desordem em um sistema", "Velocidade de reação", "Força de atração"],
                respostaCorreta: "Medida de desordem em um sistema",
                explicacao: "Entropia (S) é uma grandeza que mede o grau de desordem molecular em um sistema."
            },
            {
                id: 35,
                pergunta: "Qual é a estrutura molecular do DNA?",
                opcoes: ["Helicoidal", "Espiral dupla", "Linear", "Circular"],
                respostaCorreta: "Espiral dupla",
                explicacao: "O DNA tem estrutura de dupla hélice, descoberta por Watson e Crick."
            },
            {
                id: 36,
                pergunta: "O que é a equação de Einstein?",
                opcoes: ["E = mc", "E = mc²", "E = m/c²", "E = 2mc"],
                respostaCorreta: "E = mc²",
                explicacao: "E = mc² relaciona energia (E) com massa (m) e velocidade da luz (c)."
            }
        ]
    },
    geografia: {
        facil: [
            {
                id: 37,
                pergunta: "Qual é a capital da França?",
                opcoes: ["Lyon", "Marselha", "Paris", "Toulouse"],
                respostaCorreta: "Paris",
                explicacao: "Paris é a capital e maior cidade da França."
            },
            {
                id: 38,
                pergunta: "Qual é o maior rio do Brasil?",
                opcoes: ["Rio São Francisco", "Rio Amazonas", "Rio Douro", "Rio Paraná"],
                respostaCorreta: "Rio Amazonas",
                explicacao: "O Rio Amazonas é o maior rio do Brasil e do mundo em volume de água."
            },
            {
                id: 39,
                pergunta: "Quantos continentes existem?",
                opcoes: ["5", "6", "7", "8"],
                respostaCorreta: "6",
                explicacao: "Existem 6 continentes: América, Europa, Ásia, África, Oceania e Antártida."
            }
        ],
        medio: [
            {
                id: 40,
                pergunta: "Qual é a capital da Austrália?",
                opcoes: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                respostaCorreta: "Canberra",
                explicacao: "Canberra é a capital da Austrália, embora Sydney seja a maior cidade."
            },
            {
                id: 41,
                pergunta: "Qual é o deserto mais quente do mundo?",
                opcoes: ["Kalahari", "Atacama", "Saara", "Gobi"],
                respostaCorreta: "Saara",
                explicacao: "O Saara é o maior e mais quente deserto quente do mundo."
            },
            {
                id: 42,
                pergunta: "Qual é o oceano mais profundo?",
                opcoes: ["Oceano Pacífico", "Oceano Atlântico", "Oceano Índico", "Oceano Ártico"],
                respostaCorreta: "Oceano Pacífico",
                explicacao: "O Oceano Pacífico é o maior e mais profundo oceano da Terra."
            }
        ],
        dificil: [
            {
                id: 43,
                pergunta: "Qual é a coordenada aproximada de latitude do Equador?",
                opcoes: ["45°", "0°", "90°", "30°"],
                respostaCorreta: "0°",
                explicacao: "O Equador está localizado na latitude 0°, dividindo a Terra em hemisférios norte e sul."
            },
            {
                id: 44,
                pergunta: "Qual é a maior cadeia de montanhas do mundo?",
                opcoes: ["Alpes", "Andes", "Himalaia", "Rochosas"],
                respostaCorreta: "Andes",
                explicacao: "Os Andes formam a cadeia de montanhas mais longa do mundo."
            },
            {
                id: 45,
                pergunta: "Quantos países existem no mundo?",
                opcoes: ["185", "193", "195", "200"],
                respostaCorreta: "193",
                explicacao: "Existem 193 países membros reconhecidos pela ONU (2026)."
            }
        ]
    }
};

// ===== ASSISTENTE IA =====

class AssistenteIA {
    constructor() {
        this.historico = [];
        this.respostasIA = {
            saudacao: [
                "Olá! Sou a IA Educadora. Como posso te ajudar?",
                "Bem-vindo! Faça-me uma pergunta sobre qualquer matéria!",
                "Oi! Estou aqui para ajudar você a aprender! 😊"
            ],
            matematica: [
                "Matemática é incrível! Quer resolver um problema passo a passo?",
                "Vamos explorar a matemática juntos! Qual conceito você quer aprender?"
            ],
            portugues: [
                "Português é a arte da comunicação! Como posso ajudar?",
                "Quer entender melhor regras de gramática ou literatura?"
            ],
            historia: [
                "História nos mostra o caminho do passado. Qual período te interessa?",
                "Vamos viajar no tempo? Qual evento histórico você quer conhecer?"
            ],
            ciencias: [
                "Ciência é descoberta! Qual tópico você quer explorar?",
                "A natureza é fascinante! Faça sua pergunta sobre ciências!"
            ],
            geografia: [
                "Geografia conecta os lugares! Qual região você quer conhecer?",
                "Vamos explorar o mundo? Qual pergunta tem sobre geografia?"
            ],
            despedida: [
                "Obrigada por estudar comigo! Volte sempre! 👋",
                "Continue aprendendo! Até a próxima! 📚"
            ]
        };
    }

    processarPergunta(pergunta) {
        const perguntaLower = pergunta.toLowerCase();
        let resposta = "";

        // Detectar tópico
        if (perguntaLower.includes('oi') || perguntaLower.includes('olá') || perguntaLower.includes('opa')) {
            resposta = this.obterRespostaAleatoria(this.respostasIA.saudacao);
        } else if (perguntaLower.includes('matemática') || perguntaLower.includes('math') || perguntaLower.includes('número') || perguntaLower.includes('equação')) {
            resposta = this.obterRespostaAleatoria(this.respostasIA.matematica);
        } else if (perguntaLower.includes('português') || perguntaLower.includes('gramática') || perguntaLower.includes('literatura')) {
            resposta = this.obterRespostaAleatoria(this.respostasIA.portugues);
        } else if (perguntaLower.includes('história') || perguntaLower.includes('histórico') || perguntaLower.includes('passado')) {
            resposta = this.obterRespostaAleatoria(this.respostasIA.historia);
        } else if (perguntaLower.includes('ciência') || perguntaLower.includes('biologia') || perguntaLower.includes('química') || perguntaLower.includes('física')) {
            resposta = this.obterRespostaAleatoria(this.respostasIA.ciencias);
        } else if (perguntaLower.includes('geografia') || perguntaLower.includes('país') || perguntaLower.includes('continente')) {
            resposta = this.obterRespostaAleatoria(this.respostasIA.geografia);
        } else if (perguntaLower.includes('adeus') || perguntaLower.includes('tchau') || perguntaLower.includes('até')) {
            resposta = this.obterRespostaAleatoria(this.respostasIA.despedida);
        } else {
            resposta = "Que pergunta interessante! 🤔 Pode ser mais específica? Qual matéria você quer estudar?\n\nMatérias disponíveis: Matemática, Português, História, Ciências, Geografia";
        }

        return resposta;
    }

    obterRespostaAleatoria(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    adicionarMensagem(usuario, mensagem) {
        this.historico.push({
            usuario: usuario,
            mensagem: mensagem,
            timestamp: new Date()
        });
    }
}

const assistente = new AssistenteIA();

// Função para enviar mensagem ao assistente
function enviarMensagemAssistente() {
    const inputMensagem = document.getElementById('input-assistente');
    const mensagem = inputMensagem.value.trim();

    if (!mensagem) return;

    const chatContainer = document.getElementById('chat-assistente');

    // Adicionar mensagem do usuário
    const divUsuario = document.createElement('div');
    divUsuario.className = 'mensagem-usuario';
    divUsuario.innerHTML = `<strong>Você:</strong> ${mensagem}`;
    chatContainer.appendChild(divUsuario);

    assistente.adicionarMensagem('Usuário', mensagem);

    // Simular digitação e resposta da IA
    setTimeout(() => {
        const resposta = assistente.processarPergunta(mensagem);
        const divIA = document.createElement('div');
        divIA.className = 'mensagem-ia';
        divIA.innerHTML = `<strong>🤖 IA:</strong> ${resposta}`;
        chatContainer.appendChild(divIA);

        assistente.adicionarMensagem('IA', resposta);
    }, 800);

    inputMensagem.value = '';
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Permitir enviar com Enter
document.addEventListener('DOMContentLoaded', function() {
    const inputAssistente = document.getElementById('input-assistente');
    if (inputAssistente) {
        inputAssistente.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                enviarMensagemAssistente();
            }
        });
    }
});
