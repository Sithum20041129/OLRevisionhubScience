import json

new_questions = [
    {
        "id": "q11-15-01",
        "unitId": "g11-u15",
        "subtopicId": "15.1",
        "type": "mcq",
        "paperSource": "G.C.E. O/L Model Paper (Biosphere)",
        "year": 2024,
        "difficulty": "Easy",
        "textEn": "Which of the following correctly arranges the ecological organizational levels in ascending hierarchical order?",
        "textSi": "ජීවගෝලයේ සංවිධාන මට්ටම් ආරෝහණ පිළිවෙළට (කුඩා මට්ටමේ සිට ඉහළට) නිවැරදිව දක්වා ඇති පිළිතුර කුමක්ද?",
        "diagramUrl": "/images/unit15/fig_15_1_organizational_levels.png",
        "optionsEn": [
            "Individual → Population → Community → Ecosystem → Biome → Biosphere",
            "Individual → Community → Population → Biome → Ecosystem → Biosphere",
            "Population → Individual → Ecosystem → Community → Biome → Biosphere",
            "Individual → Population → Ecosystem → Community → Biosphere → Biome"
        ],
        "optionsSi": [
            "තනි ජීවියා → ගහනය → ප්‍රජාව → පරිසර පද්ධතිය → ජෛව හෝමය → ජීවගෝලය",
            "තනි ජීවියා → ප්‍රජාව → ගහනය → ජෛව හෝමය → පරිසර පද්ධතිය → ජීවගෝලය",
            "ගහනය → තනි ජීවියා → පරිසර පද්ධතිය → ප්‍රජාව → ජෛව හෝමය → ජීවගෝලය",
            "තනි ජීවියා → ගහනය → පරිසර පද්ධතිය → ප්‍රජාව → ජීවගෝලය → ජෛව හෝමය"
        ],
        "correctIndex": 0,
        "explanationEn": "According to the textbook (Figure 15.1), the organizational levels ascend from Individual → Population (same species) → Community (interacting species) → Ecosystem (community + abiotic factors) → Biome (regional ecosystem) → Biosphere (global life zone).",
        "explanationSi": "පෙළපොතේ 15.1 රූපයට අනුව, සංවිධාන මට්ටම් ආරෝහණ පිළිවෙළ වන්නේ: තනි ජීවියා → ගහනය → ප්‍රජාව → පරිසර පද්ධතිය → ජෛව හෝමය → ජීවගෝලය වේ.",
        "competency": "15.1 Explains organizational levels of the biosphere."
    },
    {
        "id": "q11-15-02",
        "unitId": "g11-u15",
        "subtopicId": "15.1",
        "type": "mcq",
        "paperSource": "G.C.E. O/L 2023",
        "year": 2023,
        "difficulty": "Medium",
        "textEn": "In a typical sigmoid population growth curve, during which phase is the birth rate exactly balanced by the death rate?",
        "textSi": "සාමාන්‍ය එස්-හැඩැති (සිග්මොයිඩ්) ගහන වර්ධන වක්‍රයක උපත් අනුපාතිකය හා මරණ අනුපාතිකය සමාන වී ගහනය ස්ථායී වන්නේ කුමන අවධියේදීද?",
        "diagramUrl": "/images/unit15/fig_15_4_growth_curve.png",
        "optionsEn": [
            "Lag phase",
            "Log / Exponential phase",
            "Deceleration phase",
            "Stationary / Equilibrium phase"
        ],
        "optionsSi": [
            "ප්‍රලම්බ අවධිය (Lag phase)",
            "ඝාතීය / ලඝුගණක අවධිය (Log phase)",
            "මන්දන අවධිය (Deceleration phase)",
            "ස්ථාවර / සමතුලිත අවධිය (Stationary phase)"
        ],
        "correctIndex": 3,
        "explanationEn": "In the stationary phase, the population size reaches environmental carrying capacity (K) where Natality equals Mortality (Births = Deaths), resulting in net zero population growth.",
        "explanationSi": "ස්ථාවර අවධියේදී ගහනයේ ප්‍රමාණය පරිසරයේ ධාරිතාව (K) කරා ළඟා වන අතර උපත් අනුපාතිකය හා මරණ අනුපාතිකය සමතුලිත වේ.",
        "competency": "15.1 Analyzes demographic parameters on population growth curves."
    },
    {
        "id": "q11-15-03",
        "unitId": "g11-u15",
        "subtopicId": "15.2",
        "type": "mcq",
        "paperSource": "G.C.E. O/L 2022",
        "year": 2022,
        "difficulty": "Medium",
        "textEn": "If the producers in a grassland ecosystem store 20,000 J of energy, how much energy is expected to be transferred to the secondary consumers according to the 10% law?",
        "textSi": "තෘණබිම් පරිසර පද්ධතියක නිෂ්පාදක මට්ටමේ ගබඩා වී ඇති ශක්තිය 20,000 J නම්, 10% නියමයට අනුව ද්විතීයික පාරිභෝගික මට්ටමට සම්ප්‍රේෂණය වන ශක්ති ප්‍රමාණය කොපමණද?",
        "diagramUrl": "/images/unit15/fig_15_13_energy_pyramid.png",
        "optionsEn": [
            "2,000 J",
            "200 J",
            "20 J",
            "2 J"
        ],
        "optionsSi": [
            "2,000 J",
            "200 J",
            "20 J",
            "2 J"
        ],
        "correctIndex": 1,
        "explanationEn": "According to the 10% law: Producers (T1) = 20,000 J; Primary consumers (T2) = 10% of 20,000 = 2,000 J; Secondary consumers (T3) = 10% of 2,000 = 200 J.",
        "explanationSi": "10% නියමය අනුව: නිෂ්පාදකයන් (T1) = 20,000 J; ප්‍රාථමික පාරිභෝගිකයන් (T2) = 2,000 J; ද්විතීයික පාරිභෝගිකයන් (T3) = 200 J වේ.",
        "competency": "15.2 Applies energy transfer calculations across trophic levels."
    },
    {
        "id": "q11-15-04",
        "unitId": "g11-u15",
        "subtopicId": "15.2",
        "type": "mcq",
        "paperSource": "G.C.E. O/L 2023",
        "year": 2023,
        "difficulty": "Hard",
        "textEn": "Which bacteria are responsible for converting nitrite (NO2-) to nitrate (NO3-) during nitrification in the nitrogen cycle?",
        "textSi": "නයිට්‍රජන් චක්‍රයේ නයිට්‍රීකරණ ක්‍රියාවලියේදී නයිට්‍රයිට් (NO2-) අයන නයිට්‍රේට් (NO3-) බවට පත් කරන බැක්ටීරියා විශේෂය කුමක්ද?",
        "diagramUrl": "/images/unit15/fig_15_18_nitrogen_cycle.png",
        "optionsEn": [
            "Nitrosomonas",
            "Nitrobacter",
            "Rhizobium",
            "Pseudomonas"
        ],
        "optionsSi": [
            "නයිට්‍රොසොමොනාස් (Nitrosomonas)",
            "නයිට්‍රොබැක්ටර් (Nitrobacter)",
            "රයිසෝබියම් (Rhizobium)",
            "සුඩොමොනාස් (Pseudomonas)"
        ],
        "correctIndex": 1,
        "explanationEn": "Nitrosomonas oxidizes ammonium (NH4+) to nitrite (NO2-), and Nitrobacter oxidizes nitrite (NO2-) to nitrate (NO3-). Pseudomonas carries out denitrification, and Rhizobium fixes atmospheric N2.",
        "explanationSi": "නයිට්‍රොසොමොනාස් මඟින් ඇමෝනියම් නයිට්‍රයිට් බවටද, නයිට්‍රොබැක්ටර් මඟින් නයිට්‍රයිට් නයිට්‍රේට් බවටද ඔක්සිකරණය කරයි.",
        "competency": "15.2 Identifies bacterial agents in the nitrogen cycle."
    },
    {
        "id": "q11-15-05",
        "unitId": "g11-u15",
        "subtopicId": "15.3",
        "type": "mcq",
        "paperSource": "G.C.E. O/L 2021",
        "year": 2021,
        "difficulty": "Medium",
        "textEn": "Which pair of gases is predominantly responsible for the formation of acid rain?",
        "textSi": "අම්ල වැසි ඇතිවීම කෙරෙහි ප්‍රධාන වශයෙන් බලපාන වායු යුගලය කුමක්ද?",
        "diagramUrl": "/images/unit15/fig_15_23_acid_rain.png",
        "optionsEn": [
            "CO2 and CH4",
            "SO2 and NO2",
            "CFC and O3",
            "CO and H2S"
        ],
        "optionsSi": [
            "CO2 සහ CH4",
            "SO2 සහ NO2",
            "CFC සහ O3",
            "CO සහ H2S"
        ],
        "correctIndex": 1,
        "explanationEn": "Sulfur dioxide (SO2) and Nitrogen dioxide (NO2) dissolve in atmospheric water droplets forming sulfuric acid (H2SO4) and nitric acid (HNO3), lowering rainwater pH below 5.6.",
        "explanationSi": "සල්ෆර් ඩයොක්සයිඩ් (SO2) සහ නයිට්‍රජන් ඩයොක්සයිඩ් (NO2) වායුගෝලීය ජලය සමඟ ප්‍රතික්‍රියා කර සල්ෆියුරික් සහ නයිට්‍රික් අම්ල සාදමින් අම්ල වැසි (pH < 5.6) ඇති කරයි.",
        "competency": "15.3 Explains chemical genesis of acid precipitation."
    },
    {
        "id": "q11-15-06",
        "unitId": "g11-u15",
        "subtopicId": "15.3",
        "type": "mcq",
        "paperSource": "G.C.E. O/L 2022",
        "year": 2022,
        "difficulty": "Hard",
        "textEn": "What primary ecological catastrophe directly triggers the massive death of fish during eutrophication of a reservoir?",
        "textSi": "ජලාශයක සුපෝෂණයේදී (Eutrophication) මසුන් සහ අනෙකුත් ජලජ ජීවීන් විශාල වශයෙන් මියයාමට සෘජුවම බලපාන පාරිසරික සාධකය කුමක්ද?",
        "diagramUrl": "/images/unit15/fig_15_31_eutrophication.png",
        "optionsEn": [
            "Excessive increase in dissolved water temperature",
            "Severe depletion of Dissolved Oxygen (DO) due to bacterial decomposition of dead algae",
            "Direct poisoning by nitrogen gas bubbles",
            "Lack of carbon dioxide required for fish respiration"
        ],
        "optionsSi": [
            "ජලයේ උෂ්ණත්වය අධික ලෙස ඉහළ යාම",
            "මියගිය ඇල්ගී දිරාපත් කිරීමේදී බැක්ටීරියා මඟින් දියවූ ඔක්සිජන් (DO) ක්ෂය කිරීම",
            "නයිට්‍රජන් වායු බුබුලු මඟින් සෘජුවම විෂවීම",
            "මසුන්ගේ ශ්වසනයට අවශ්‍ය කාබන් ඩයොක්සයිඩ් හිඟවීම"
        ],
        "correctIndex": 1,
        "explanationEn": "During an algal bloom, sunlight is blocked and algae die. Aerobic decomposing bacteria proliferate rapidly and consume almost all dissolved oxygen in the water, suffocating fish.",
        "explanationSi": "ඇල්ගී ස්ථරය මියගිය පසු ඒවා වියෝජනය කරන වායුගෝලීය බැක්ටීරියා ජලයේ දියවී ඇති ඔක්සිජන් සියල්ල පරිභෝජනය කිරීම නිසා ඔක්සිජන් හිඟවීමෙන් මත්ස්‍යයෝ හුස්ම හිරවී මියයති.",
        "competency": "15.3 Analyzes steps leading to aquatic hypoxia during eutrophication."
    },
    {
        "id": "q11-15-07",
        "unitId": "g11-u15",
        "subtopicId": "15.3",
        "type": "mcq",
        "paperSource": "G.C.E. O/L 2023",
        "year": 2023,
        "difficulty": "Medium",
        "textEn": "In a marine food chain contaminated with DDT, which organism will possess the HIGHEST concentration of the chemical in its body tissues due to biomagnification?",
        "textSi": "DDT මඟින් දූෂණය වූ සාගර ආහාර දාමයක ජෛව විශාලනය (Biomagnification) හේතුවෙන් ශරීර පටක තුළ වැඩිම රසායනික සාන්ද්‍රණයක් එක්රැස් වන්නේ කුමන ජීවියා තුළද?",
        "diagramUrl": "/images/unit15/fig_15_29_30_smog_biomagnification.png",
        "optionsEn": [
            "Phytoplankton (Algae)",
            "Zooplankton",
            "Small fish",
            "Fish-eating Sea Eagle (Apex predator)"
        ],
        "optionsSi": [
            "ශාක ප්ලවාංග (ඇල්ගී)",
            "සත්ව ප්ලවාංග",
            "කුඩා මසුන්",
            "මසුන් බුදින මුහුදු රාජාලියා (ඉහළ විලෝපිකයා)"
        ],
        "correctIndex": 3,
        "explanationEn": "DDT is non-biodegradable and fat-soluble. Because it cannot be broken down or excreted, it progressively amplifies at each successive trophic level, reaching maximum concentration in apex predators (Sea Eagle).",
        "explanationSi": "DDT ජෛව හායනය නොවන සහ මේදයේ දියවන රසායනිකයකි. එබැවින් පෝෂී මට්ටම් ඔස්සේ ඉහළට යත්ම සාන්ද්‍රණය වැඩි වී ඉහළම විලෝපිකයා (රාජාලියා) තුළ උපරිම සාන්ද්‍රණය තැන්පත් වේ.",
        "competency": "15.3 Explains biological magnification of non-biodegradable toxins."
    },
    {
        "id": "q11-15-08",
        "unitId": "g11-u15",
        "subtopicId": "15.4",
        "type": "mcq",
        "paperSource": "G.C.E. O/L 2020",
        "year": 2020,
        "difficulty": "Easy",
        "textEn": "Which of the following chronic conditions represents a Non-Communicable Disease (NCD) prevalent in Sri Lanka?",
        "textSi": "ශ්‍රී ලංකාවේ වර්තමානයේ බහුලව දක්නට ලැබෙන බෝනොවන රෝගයක් (NCD) වන්නේ පහත සඳහන් කුමක්ද?",
        "optionsEn": [
            "Dengue fever",
            "Type 2 Diabetes mellitus",
            "Cholera",
            "Tuberculosis"
        ],
        "optionsSi": [
            "ඩෙංගු උණ",
            "දෙවන වර්ගයේ දියවැඩියාව",
            "කොලරාව",
            "ක්ෂය රෝගය"
        ],
        "correctIndex": 1,
        "explanationEn": "Type 2 Diabetes is a non-communicable lifestyle disease caused by insulin resistance, poor diet, and lack of exercise. Dengue, cholera, and TB are infectious/communicable diseases.",
        "explanationSi": "දෙවන වර්ගයේ දියවැඩියාව යනු වැරදි ආහාර රටා සහ ව්‍යායාම හිඟකම නිසා ඇතිවන බෝනොවන රෝගයකි. ඩෙංගු, කොලරාව සහ ක්ෂය රෝගය බෝවන රෝග වේ.",
        "competency": "15.4 Distinguishes lifestyle diseases from communicable diseases."
    },
    {
        "id": "q11-15-09",
        "unitId": "g11-u15",
        "subtopicId": "15.5",
        "type": "mcq",
        "paperSource": "G.C.E. O/L 2022",
        "year": 2022,
        "difficulty": "Hard",
        "textEn": "In ancient Sri Lankan hydraulic tank construction, what was the primary engineering function of the Bisokotuwa (Cistern Sluice)?",
        "textSi": "පුරාණ ශ්‍රී ලාංකේය වාරි තාක්ෂණයේදී බිසෝකොටුවේ ප්‍රධාන ඉංජිනේරුමය කාර්යභාරය කුමක්ද?",
        "diagramUrl": "/images/unit15/fig_15_40_sluice_gate.png",
        "optionsEn": [
            "To filter mud and sand before water enters the field",
            "To dissipate and reduce the high hydrostatic pressure of water before discharging it through conduits",
            "To store extra water during drought periods",
            "To break wind-driven surface waves hitting the tank bund"
        ],
        "optionsSi": [
            "කුඹුරට ජලය යැවීමට පෙර මඩ සහ වැලි පෙරා ඉවත් කිරීම",
            "සොරොව්ව ඔස්සේ ජලය පිටකිරීමේදී ජලයේ ඇති අධික පීඩනය සමනය කර බැම්ම ආරක්ෂා කිරීම",
            "නියං කාලයේදී අමතර ජලය ගබඩා කර තබා ගැනීම",
            "වැව් බැම්ම මත ගැටෙන රළ පහරේ ශක්තිය බිඳ දැමීම"
        ],
        "correctIndex": 1,
        "explanationEn": "The Bisokotuwa is a stone-lined pressure-dampening chamber that dissipates the immense hydrostatic pressure of deep tank water, allowing calm water outflow through the sluice tunnels without bursting the earthen bund. Ralapanawa breaks wave energy.",
        "explanationSi": "බිසෝකොටුව මඟින් වැවේ ගැඹුරු ජල කඳේ අධික ජලස්ථිතික පීඩනය සමනය කර සොරොව්ව හරහා ආරක්ෂිතව ජලය නිකුත් කරයි. රළ පහර බිඳ දමන්නේ රළපනාව මඟිනි.",
        "competency": "15.5 Evaluates indigenous hydraulic innovations of Sri Lanka."
    },
    {
        "id": "q11-15-10",
        "unitId": "g11-u15",
        "subtopicId": "15.5",
        "type": "mcq",
        "paperSource": "G.C.E. O/L 2021",
        "year": 2021,
        "difficulty": "Medium",
        "textEn": "Which international environmental treaty was specifically formulated to control and eliminate substances that deplete the Stratospheric Ozone Layer?",
        "textSi": "ඕසෝන් වියන ක්ෂය කරන වායු (CFC) පාලනය කර ඉවත් කිරීම සඳහා සම්පාදනය කළ ජාත්‍යන්තර සම්මුතිය කුමක්ද?",
        "optionsEn": [
            "Montreal Protocol",
            "Kyoto Protocol",
            "Basel Convention",
            "RAMSAR Convention"
        ],
        "optionsSi": [
            "මොන්ට්‍රියල් සම්මුතිය (Montreal Protocol)",
            "කියෝටෝ සම්මුතිය (Kyoto Protocol)",
            "බාසල් සම්මුතිය (Basel Convention)",
            "රැම්සා සම්මුතිය (RAMSAR Convention)"
        ],
        "correctIndex": 0,
        "explanationEn": "The Montreal Protocol (1987) targets the phase-out of Ozone Depleting Substances (CFCs, halons). Kyoto Protocol targets greenhouse gases; Basel targets hazardous waste; RAMSAR targets wetlands.",
        "explanationSi": "මොන්ට්‍රියල් ප්‍රොටෝකෝලය ඕසෝන් වියන ක්ෂය කරන CFC වායු පාලනයට ඇති කරගත් සම්මුතියකි. කියෝටෝ හරිතාගාර වායු සඳහාද, බාසල් උපද්‍රවකාරී අපද්‍රව්‍ය සඳහාද, රැම්සා තෙත්බිම් සඳහාද වේ.",
        "competency": "15.5 Identifies international environmental conventions."
    }
]

new_flashcards = [
    {
        "id": "fc11-15-01",
        "unitId": "g11-u15",
        "subtopicId": "15.1",
        "topicEn": "Organizational Levels",
        "topicSi": "සංවිධාන මට්ටම්",
        "frontEn": "What is the difference between a 'Population' and a 'Community' in ecology?",
        "frontSi": "පාරිසරික විද්‍යාවේදී 'ගහනයක්' සහ 'ප්‍රජාවක්' අතර ඇති වෙනස කුමක්ද?",
        "backEn": "A Population consists of individuals of the SAME species in a given area at a given time. A Community consists of all populations of DIFFERENT species living and interacting together in that habitat.",
        "backSi": "ගහනයක් යනු නිශ්චිත ප්‍රදේශයක එක් විශේෂයකට අයත් ජීවීන් සමූහයකි. ප්‍රජාවක් යනු එම පරිසරයේ එකිනෙක අන්තර්ක්‍රියා කරන විවිධ විශේෂ රැසක ජීවීන්ගේ එකතුවකි.",
        "tag": "Ecology Basics"
    },
    {
        "id": "fc11-15-02",
        "unitId": "g11-u15",
        "subtopicId": "15.1",
        "topicEn": "Population Growth",
        "topicSi": "ගහන වර්ධනය",
        "frontEn": "What are the 4 phases of a typical Sigmoid (S-shaped) population growth curve?",
        "frontSi": "සිග්මොයිඩ් ගහන වර්ධන වක්‍රයක ඇති ප්‍රධාන අවධි 4 මොනවාද?",
        "backEn": "1. Lag phase (initial slow adaptation)\n2. Log / Exponential phase (rapid geometric growth)\n3. Deceleration phase (slowing due to resource limits)\n4. Stationary phase (equilibrium at Carrying Capacity K)",
        "backSi": "1. ප්‍රලම්බ අවධිය (මුල් අනුවර්තන අවධිය)\n2. ඝාතීය / ලඝුගණක අවධිය (ශීඝ්‍ර වර්ධනය)\n3. මන්දන අවධිය (සම්පත් සීමාවීම)\n4. ස්ථාවර අවධිය (ධාරිතා සීමාවේදී උපත්=මරණ සමතුලිතතාව)",
        "tag": "Demographics"
    },
    {
        "id": "fc11-15-03",
        "unitId": "g11-u15",
        "subtopicId": "15.2",
        "topicEn": "Energy Flow",
        "topicSi": "ශක්ති ගලායාම",
        "frontEn": "Why can an Ecological Pyramid of Energy NEVER be inverted?",
        "frontSi": "ශක්ති පිරමිඩයක් කිසිවිටෙකත් කණපිට පෙරළුණු (ප්‍රතිලෝම) එකක් විය නොහැක්කේ ඇයි?",
        "backEn": "According to the Second Law of Thermodynamics, energy is irrevocably lost as metabolic heat and waste (~90%) at every trophic level step. Therefore, energy at a higher trophic level is ALWAYS less than the level below it.",
        "backSi": "තාපගති විද්‍යා නියම අනුව එක් පෝෂී මට්ටමකින් ඊළඟ මට්ටමට යනවිට 90% ක් පමණ ශක්තිය තාපය හා බහිස්ස්‍රාවය ලෙස හානි වන බැවින් ඉහළ මට්ටමක ශක්තිය සැමවිටම පහළ මට්ටමට වඩා අඩුය.",
        "tag": "Trophic Dynamics"
    },
    {
        "id": "fc11-15-04",
        "unitId": "g11-u15",
        "subtopicId": "15.2",
        "topicEn": "Nitrogen Cycle",
        "topicSi": "නයිට්‍රජන් චක්‍රය",
        "frontEn": "What are the specific roles of Nitrosomonas and Nitrobacter bacteria in the Nitrogen Cycle?",
        "frontSi": "නයිට්‍රජන් චක්‍රයේදී නයිට්‍රොසොමොනාස් සහ නයිට්‍රොබැක්ටර් බැක්ටීරියාවල කාර්යභාරය කුමක්ද?",
        "backEn": "Nitrosomonas converts Ammonium (NH4+) into Nitrite (NO2-). Nitrobacter converts Nitrite (NO2-) into Nitrate (NO3-), which is the form readily absorbed by plant roots.",
        "backSi": "නයිට්‍රොසොමොනාස් මඟින් ඇමෝනියම් (NH4+) නයිට්‍රයිට් (NO2-) බවට පත් කරයි. නයිට්‍රොබැක්ටර් මඟින් නයිට්‍රයිට් (NO2-) නයිට්‍රේට් (NO3-) බවට ඔක්සිකරණය කරයි.",
        "tag": "Microbiology"
    },
    {
        "id": "fc11-15-05",
        "unitId": "g11-u15",
        "subtopicId": "15.3",
        "topicEn": "Acid Rain",
        "topicSi": "අම්ල වැසි",
        "frontEn": "What is the pH threshold for Acid Rain, and what chemical acids are formed?",
        "frontSi": "අම්ල වැසි ලෙස සලකන pH අගය කුමක්ද සහ එහි අඩංගු වන අම්ල මොනවාද?",
        "backEn": "Rainwater with pH < 5.6. Formed when atmospheric SO2 and NOx react with water vapor producing Sulfuric acid (H2SO4) and Nitric acid (HNO3).",
        "backSi": "pH අගය 5.6 ට වඩා අඩු වැසි ජලය අම්ල වැසි වේ. වායුගෝලීය SO2 සහ NOx ජලය සමඟ ප්‍රතික්‍රියා කර සල්ෆියුරික් (H2SO4) හා නයිට්‍රික් (HNO3) අම්ල සාදයි.",
        "tag": "Pollution"
    },
    {
        "id": "fc11-15-06",
        "unitId": "g11-u15",
        "subtopicId": "15.3",
        "topicEn": "Eutrophication",
        "topicSi": "සුපෝෂණය",
        "frontEn": "What triggers an Algal Bloom in freshwater bodies, and what is its consequence?",
        "frontSi": "මිරිදිය ජලාශයක ඇල්ගී පිපිරීමක් (Algal Bloom) ඇතිවන්නේ ඇයි, එහි ප්‍රතිඵලය කුමක්ද?",
        "backEn": "Excessive influx of agricultural fertilizer nitrates and detergent phosphates. Rapid algal proliferation blocks sunlight, followed by massive bacterial decomposition which exhausts all Dissolved Oxygen (DO), causing fish suffocation.",
        "backSi": "කෘෂිකාර්මික පොහොර (නයිට්‍රේට්) සහ ඩිටර්ජන්ට් (පොස්පේට්) සේදී ඒම නිසා ඇල්ගී ශීඝ්‍රයෙන් වැඩේ. ඒවා මියගිය පසු වියෝජක බැක්ටීරියා ජලයේ ඔක්සිජන් සියල්ල අවසන් කර මසුන් මරා දමයි.",
        "tag": "Water Quality"
    },
    {
        "id": "fc11-15-07",
        "unitId": "g11-u15",
        "subtopicId": "15.3",
        "topicEn": "Biomagnification",
        "topicSi": "ජෛව විශාලනය",
        "frontEn": "What is Biomagnification, and which trophic level is most severely harmed?",
        "frontSi": "ජෛව විශාලනය යනු කුමක්ද සහ වඩාත්ම හානි සිදුවන්නේ කුමන පෝෂී මට්ටමටද?",
        "backEn": "The progressive increase in concentration of fat-soluble, non-biodegradable toxins (e.g. DDT, methylmercury) up trophic levels. Apex predators (top carnivores and humans) suffer the highest and most toxic concentrations.",
        "backSi": "ජෛව හායනය නොවන විෂ ද්‍රව්‍ය (DDT, රසදිය) පෝෂී මට්ටම් ඔස්සේ ඉහළට යත්ම සාන්ද්‍රණය වැඩිවීමයි. ඉහළම විලෝපිකයන්ට (රාජාලීන්, මිනිසා) වැඩිම විෂ සාන්ද්‍රණය ලැබී හානි සිදුවේ.",
        "tag": "Ecotoxicology"
    },
    {
        "id": "fc11-15-08",
        "unitId": "g11-u15",
        "subtopicId": "15.5",
        "topicEn": "Ancient Hydraulic Engineering",
        "topicSi": "පැරණි වාරි තාක්ෂණය",
        "frontEn": "What were the engineering functions of the Ralapanawa and Bisokotuwa in ancient Sri Lankan tanks?",
        "frontSi": "පුරාණ වැව් පද්ධතියේ 'රළපනාව' සහ 'බිසෝකොටුව' මඟින් ඉටුවූ කාර්යයන් මොනවාද?",
        "backEn": "Ralapanawa: Stepped stone pitching on the bund slope that breaks wave impact to prevent embankment erosion.\nBisokotuwa: A cistern chamber that dampens violent hydrostatic water pressure before water exits into sluice conduits, preventing dam rupture.",
        "backSi": "රළපනාව: වැව් බැම්ම මත ගැටෙන රළ පහර බිඳ දමා බැම්ම ඛාදනය වීම වළක්වයි.\nබිසෝකොටුව: ගැඹුරු ජලයේ අධික පීඩනය සමනය කර සොරොව්ව තුළින් ආරක්ෂිතව ඇළ මාර්ගවලට ජලය නිකුත් කරයි.",
        "tag": "Indigenous Knowledge"
    },
    {
        "id": "fc11-15-09",
        "unitId": "g11-u15",
        "subtopicId": "15.5",
        "topicEn": "Food Miles & Carbon Footprint",
        "topicSi": "ආහාර සැතපුම් හා කාබන් අඩිසටහන",
        "frontEn": "What is a 'Food Mile', and why does minimizing it promote sustainability?",
        "frontSi": "'ආහාර සැතපුම' (Food Mile) යනු කුමක්ද, එය අවම කරගැනීම තිරසර බවට උපකාරී වන්නේ ඇයි?",
        "backEn": "The transport distance from farm to plate. Minimizing food miles by eating local food slashes transport fuel combustion, reduces refrigerated storage emissions, and decreases carbon footprints.",
        "backSi": "ආහාර නිෂ්පාදනය කළ ස්ථානයේ සිට පාරිභෝගිකයාගේ පිඟාන දක්වා ප්‍රවාහනය වන දුරයි. දේශීය ආහාර භාවිතයෙන් ප්‍රවාහන ඉන්ධන දැවීම හා කාබන් විමෝචනය අවම වේ.",
        "tag": "Sustainability"
    },
    {
        "id": "fc11-15-10",
        "unitId": "g11-u15",
        "subtopicId": "15.5",
        "topicEn": "5R Concept",
        "topicSi": "5R සංකල්පය",
        "frontEn": "What are the 5Rs of modern waste management in order of ecological priority?",
        "frontSi": "අපද්‍රව්‍ය කළමනාකරණයේ 5R මූලධර්ම පෙළගස්වන්න?",
        "backEn": "1. Refuse (decline unnecessary items)\n2. Reduce (minimize consumption)\n3. Reuse (use items repeatedly)\n4. Repurpose (find new creative functions)\n5. Recycle (convert waste into new materials)\n(+ Replace with biodegradable alternatives)",
        "backSi": "1. Refuse (ප්‍රතික්ෂේප කිරීම)\n2. Reduce (අවම කිරීම)\n3. Reuse (නැවත භාවිතය)\n4. Repurpose (වෙනත් කාර්යයකට ගැනීම)\n5. Recycle (ප්‍රතිචක්‍රීකරණය)\n(+ Replace - පරිසර හිතකාමී දේ ආදේශය)",
        "tag": "Waste Management"
    }
]

with open('server/db/store.json', 'r', encoding='utf-8') as f:
    db = json.load(f)

# Keep non-g11-u15 questions or deduplicate by id
existing_q_ids = {q['id'] for q in db.get('questions', [])}
for q in new_questions:
    if q['id'] not in existing_q_ids:
        db['questions'].append(q)
        existing_q_ids.add(q['id'])

existing_fc_ids = {fc['id'] for fc in db.get('flashcards', [])}
for fc in new_flashcards:
    if fc['id'] not in existing_fc_ids:
        db['flashcards'].append(fc)
        existing_fc_ids.add(fc['id'])

with open('server/db/store.json', 'w', encoding='utf-8') as f:
    json.dump(db, f, indent=2, ensure_ascii=False)

print(f"Updated store.json: total questions={len(db['questions'])}, total flashcards={len(db['flashcards'])}")

