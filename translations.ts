export type Lang = 'hu' | 'en';

export const translations = {
  hu: {
    nav: {
      overview: 'Áttekintés',
      journey: 'A lelet útja',
      features: 'Funkciók',
      specs: 'Specifikációk',
      contact: 'Kapcsolat',
      lightMode: 'Váltás világos módra',
      darkMode: 'Váltás sötét módra',
    },
    hero: {
      subtitle: 'A leletek biztonsága a legfontosabb.',
      description: 'Megóvja, stabilizálja és dokumentálja a frissen talált régészeti leleteket – már az első pillanattól.',
      cta: 'Tudj meg többet',
    },
    problemSolution: {
      humidity: 'Páratartalom',
      stability: 'Stabilitás',
      critical: 'KRITIKUS',
      optimal: 'OPTIMÁLIS',
      criticalState: 'Kritikus Állapot',
      fragileTitle: 'A múlt sérülékeny.',
      fragileDesc: 'Rázkódás. Oxidáció.\nA leletek minden másodpercben veszítenek értékükből.',
      protectionActive: 'Védelem Aktív',
      solutionTitle: 'A megoldás stabil.',
      solutionDesc: 'Zárt mikroklíma. Fizikai védelem.\nMinden adat rögzítve az utókor számára.',
    },
    materials: {
      label: 'A lelet útja',
      title: 'A sártól a múzeumig.',
      description: 'A BARCA nem csak egy doboz, hanem egy biztonsági protokoll. Így kíséri végig a leletet a legkritikusabb órákon.',
      steps: [
        {
          title: '1. A Megtalálás Pillanata',
          description: 'A legsérülékenyebb perc. A BARCA azonnali, hermetikus védelmet nyújt a környezeti sokk (levegő, napfény) ellen már a gödör partján.',
        },
        {
          title: '2. Adaptív Rögzítés',
          description: 'Nincs két egyforma lelet. A belső moduláris szivacsrendszer felveszi a tárgy formáját, és fizikai kényszer nélkül stabilizálja azt.',
        },
        {
          title: '3. Védett Transzport',
          description: 'A terepjáró rázkódása vagy a hőingadozás nem jut el a tárgyig. A BARCA passzív klímastabilizátorként viselkedik az út során.',
        },
        {
          title: '4. Érkezés a Laborba',
          description: 'A leletet a restaurátor pontosan abban a fizikai és kémiai állapotban veszi át, ahogyan az a földből kikerült.',
        },
      ],
    },
    features: {
      label: 'Funkciók',
      title: 'Minden részlete a leletekért dolgozik.',
      description: 'Nem csupán egy doboz. A BARCA egy precízen megtervezett rendszer, amely a terepi valóságra reagál.',
      items: [
        {
          title: 'Stabil mikroklíma',
          description: 'A belső tér úgy van kialakítva, hogy a leletet minimális környezeti ingadozás érje, csökkentve az oxidáció és a hirtelen anyagváltozás kockázatát.',
        },
        {
          title: 'Védett rögzítés',
          description: 'A moduláris belső elrendezés a leleteket biztonságosan, mégis kíméletesen fogja meg – nincs felesleges mozgás, nincs ütközés.',
        },
        {
          title: 'Szenzorvezérelt figyelés',
          description: 'Integrált szenzorok figyelik a páratartalmat, hőmérsékletet és fényviszonyokat, és lehetőséget adnak a későbbi adatnaplózásra.',
        },
        {
          title: 'Terepre tervezett kialakítás',
          description: 'Könnyű, mégis masszív, könnyen tisztítható, esőben, sárban, terepjáró csomagtartójában is otthon érzi magát.',
        },
        {
          title: 'Dokumentációra kész',
          description: 'A BARCA használata egységes működést kényszerít ki: minden lelethez tartozik hely, idő, megtaláló és állapot – semmi sem vész el útközben.',
        },
      ],
    },
    explodedView: {
      label: 'Felépítés',
      title: 'Mérnöki Precizitás',
      shell: {
        title: 'Páncélozott Héj',
        description: 'Ütésálló kompozit fedél hermetikus zárással. A szellőzőnyílások speciális szűrővel vannak ellátva, amely kizárja a port, de engedi a mikroklíma szabályozását.',
      },
      core: {
        title: 'Adaptív Mag',
        description: 'A többrétegű szivacsrendszer (EPP) felveszi a lelet formáját. A központi térben a legérzékenyebb tárgyak – például kardok vagy ékszerek – is mozdulatlanul utaznak.',
      },
      base: {
        title: 'Stabil Bázis',
        description: 'A doboz alja rejti a szenzorokat és az elektronikát, elszigetelve a lelettől, de folyamatos kapcsolatban a belső légtérrel. Rázkódáselnyelő talpak a terepi stabilitásért.',
      },
      scrollHint: 'Görgess a rétegekért',
    },
    circuit: {
      label: 'Elektronika',
      title: 'A BARCA digitális idegrendszere.',
      description: 'Nem csak egy doboz. Egy önállóan gondolkodó védelmi egység. A redundáns áramkörök gondoskodnak arról, hogy a szenzoradatok és a védelem áramkimaradás esetén is aktívak maradjanak.',
      hotspots: {
        energy: 'Energia',
        solarArray: 'Napelem Tömb (21W)',
        chargeControl: 'Töltésvezérlés',
        powerMeasurement: 'Fogyasztásmérés',
        centralUnit: 'Központi Egység',
        logicControl: 'Logika és Vezérlés',
        timing: 'Időzítés',
        precisionClock: 'Precíziós óra',
        dataStorage: 'Adattárolás',
        offlineStorage: 'Offline mentés',
        climateMonitor: 'Klímafigyelés',
        heatHumidity: 'Hő & Pára',
      },
    },
    specs: {
      label: 'Specifikáció',
      title: 'Mérnöki Adatlap',
      physical: {
        heading: 'Fizikai Paraméterek',
        dimensions: 'Külső Méret (H x Sz)',
        material: 'Anyag',
        materialDesc: '3D Nyomtatott vázszerkezet',
      },
      control: {
        heading: 'Vezérlés & Szenzorok',
        esp32Label: 'Rendszervezérlés & Kijelző',
        esp32Desc: 'Kezelőfelület megjelenítése',
        dht22Label: 'Klímafigyelés',
        dht22Desc: 'Páratartalom és hőmérséklet mérése',
        rtcLabel: 'RTC (Real Time Clock)',
        rtcDesc: 'Pontos idő mérése áram nélkül is',
        sdLabel: 'Adatnaplózás',
        sdDesc: 'Leletek adatainak biztonságos tárolása',
      },
      power: {
        heading: 'Energiaellátás',
        solarLabel: 'Zöld Energia',
        solarDesc: 'Működés elszigetelt területeken is',
        batteryLabel: 'Power Bank',
        batteryDesc: 'Megtermelt felesleg tárolása',
        inaLabel: 'Energia Monitor',
        inaDesc: 'Akku és napelem áramának mérése',
        usbLabel: 'IP65 Csatlakozó',
        usbDesc: 'Víz- és porálló töltés terepen',
      },
      openSource: {
        title: 'Te is megépítenéd a BARCA-t?',
        description: 'Minden szükséges fájl, teljes dokumentáció Open Source, hiszen a tudás mindenkié.',
        docTooltip: 'Dokumentáció megtekintése',
      },
    },
    testimonials: {
      label: 'Együttműködés',
      title: 'Segítő szakértőink',
      partners: 'Kiemelt Partnereink',
      roles: {
        t1: 'Régész, gyűjteménykezelő',
        t2: 'Régész, muzeológus',
        t3: 'A ROSPIN alapítója',
        t4: 'Festmény restaurátor',
        t5: 'Történelem szakos tanár',
      },
    },
    contact: {
      line1: 'Védelem.',
      line2: 'Innováció.',
      line3: 'Jövő.',
      cardTitle: 'Partneri Együttműködés',
      cardDesc: 'Intézmények, kutatók és múzeumok jelentkezését várjuk. Építsük együtt a jövő régészetét.',
      cardCta: 'Kapcsolatfelvétel',
    },
    footer: {
      rights: '© 2024 BARCA Inc. Minden jog fenntartva.',
    },
  },
  en: {
    nav: {
      overview: 'Overview',
      journey: "The Find's Journey",
      features: 'Features',
      specs: 'Specifications',
      contact: 'Contact',
      lightMode: 'Switch to light mode',
      darkMode: 'Switch to dark mode',
    },
    hero: {
      subtitle: 'The safety of finds is paramount.',
      description: 'Protects, stabilizes, and documents freshly found archaeological artifacts — from the very first moment.',
      cta: 'Learn more',
    },
    problemSolution: {
      humidity: 'Humidity',
      stability: 'Stability',
      critical: 'CRITICAL',
      optimal: 'OPTIMAL',
      criticalState: 'Critical State',
      fragileTitle: 'The past is fragile.',
      fragileDesc: 'Vibration. Oxidation.\nFinds lose their value every second.',
      protectionActive: 'Protection Active',
      solutionTitle: 'The solution is stable.',
      solutionDesc: 'Sealed microclimate. Physical protection.\nAll data recorded for posterity.',
    },
    materials: {
      label: "The Find's Journey",
      title: 'From mud to museum.',
      description: 'BARCA is not just a box, but a safety protocol. This is how it guides the find through the most critical hours.',
      steps: [
        {
          title: '1. The Moment of Discovery',
          description: 'The most vulnerable minute. BARCA provides immediate, hermetic protection against environmental shock (air, sunlight) right at the edge of the excavation pit.',
        },
        {
          title: '2. Adaptive Securing',
          description: 'No two finds are the same. The internal modular foam system takes on the shape of the object and stabilizes it without physical force.',
        },
        {
          title: '3. Protected Transport',
          description: 'The vibrations of the off-road vehicle or temperature fluctuations never reach the object. BARCA acts as a passive climate stabilizer throughout the journey.',
        },
        {
          title: '4. Arrival at the Lab',
          description: 'The restorer receives the find in exactly the same physical and chemical condition in which it emerged from the ground.',
        },
      ],
    },
    features: {
      label: 'Features',
      title: 'Every detail works for the finds.',
      description: 'Not just a box. BARCA is a precisely designed system that responds to the realities of the field.',
      items: [
        {
          title: 'Stable Microclimate',
          description: 'The interior is designed so the find experiences minimal environmental fluctuation, reducing the risk of oxidation and sudden material changes.',
        },
        {
          title: 'Protected Securing',
          description: 'The modular interior layout holds finds safely yet gently — no unnecessary movement, no collisions.',
        },
        {
          title: 'Sensor-Driven Monitoring',
          description: 'Integrated sensors monitor humidity, temperature, and light conditions, enabling subsequent data logging.',
        },
        {
          title: 'Field-Designed Build',
          description: 'Light yet robust, easy to clean, at home in rain, mud, or the trunk of an off-road vehicle.',
        },
        {
          title: 'Documentation-Ready',
          description: 'Using BARCA enforces a unified workflow: every find has a location, time, finder, and condition — nothing is lost along the way.',
        },
      ],
    },
    explodedView: {
      label: 'Structure',
      title: 'Engineering Precision',
      shell: {
        title: 'Armored Shell',
        description: 'Impact-resistant composite lid with hermetic seal. The ventilation openings are equipped with special filters that exclude dust but allow microclimate regulation.',
      },
      core: {
        title: 'Adaptive Core',
        description: 'The multi-layer foam system (EPP) takes on the shape of the find. Even the most delicate objects — swords or jewelry — travel without movement in the central chamber.',
      },
      base: {
        title: 'Stable Base',
        description: 'The bottom of the box houses the sensors and electronics, isolated from the find but in constant contact with the interior air. Vibration-absorbing feet for field stability.',
      },
      scrollHint: 'Scroll for layers',
    },
    circuit: {
      label: 'Electronics',
      title: 'The digital nervous system of BARCA.',
      description: 'Not just a box. An independently thinking protection unit. Redundant circuits ensure that sensor data and protection remain active even during power outages.',
      hotspots: {
        energy: 'Energy',
        solarArray: 'Solar Array (21W)',
        chargeControl: 'Charge Control',
        powerMeasurement: 'Power Measurement',
        centralUnit: 'Central Unit',
        logicControl: 'Logic & Control',
        timing: 'Timing',
        precisionClock: 'Precision clock',
        dataStorage: 'Data Storage',
        offlineStorage: 'Offline storage',
        climateMonitor: 'Climate Monitoring',
        heatHumidity: 'Heat & Humidity',
      },
    },
    specs: {
      label: 'Specifications',
      title: 'Engineering Data Sheet',
      physical: {
        heading: 'Physical Parameters',
        dimensions: 'Outer Dimensions (L x W)',
        material: 'Material',
        materialDesc: '3D Printed frame structure',
      },
      control: {
        heading: 'Control & Sensors',
        esp32Label: 'System Control & Display',
        esp32Desc: 'User interface display',
        dht22Label: 'Climate Monitoring',
        dht22Desc: 'Humidity and temperature measurement',
        rtcLabel: 'RTC (Real Time Clock)',
        rtcDesc: 'Precise time measurement without power',
        sdLabel: 'Data Logging',
        sdDesc: 'Secure storage of find data',
      },
      power: {
        heading: 'Power Supply',
        solarLabel: 'Green Energy',
        solarDesc: 'Operation in isolated areas too',
        batteryLabel: 'Power Bank',
        batteryDesc: 'Storage of excess energy produced',
        inaLabel: 'Energy Monitor',
        inaDesc: 'Battery and solar panel current measurement',
        usbLabel: 'IP65 Connector',
        usbDesc: 'Water and dust resistant charging in the field',
      },
      openSource: {
        title: 'Would you also build BARCA?',
        description: 'All necessary files, full documentation Open Source, because knowledge belongs to everyone.',
        docTooltip: 'View Documentation',
      },
    },
    testimonials: {
      label: 'Collaboration',
      title: 'Our Supporting Experts',
      partners: 'Our Featured Partners',
      roles: {
        t1: 'Archaeologist, collection manager',
        t2: 'Archaeologist, museologist',
        t3: 'Founder of ROSPIN',
        t4: 'Painting restorer',
        t5: 'History teacher',
      },
    },
    contact: {
      line1: 'Protection.',
      line2: 'Innovation.',
      line3: 'Future.',
      cardTitle: 'Partner Collaboration',
      cardDesc: "We welcome applications from institutions, researchers, and museums. Let's build the archaeology of the future together.",
      cardCta: 'Get in Touch',
    },
    footer: {
      rights: '© 2024 BARCA Inc. All rights reserved.',
    },
  },
} as const;

export type Translations = typeof translations['hu'];
