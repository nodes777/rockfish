var animals = [
    {
        name: "Blue Rockfish",
        img: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Sebastes_mystinus_2.jpg/220px-Sebastes_mystinus_2.jpg",],
       alts: ["blue"],
       description : "Blue rockfish were once an important part of the California fishery; they were the most common rockfish marketed in San Francisco and San Diego during the 19th century, but have since declined in popularity. They continue to be of interest as game fish, and are among the most common types landed by boat anglers; in fact, there is evidence of overfishing in Monterey Bay and southern California"
    }, {
        name: "Black Rockfish",
        img: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Sebastes_melanops.jpg/220px-Sebastes_melanops.jpg",],
        alts: ["Black",],
        description: "Rockfish are slow-growing and extremely long-lived, and black rockfish become sexually mature only after 6 to 8 years of age. Specimen collected off Alaska have been aged to 49 years old."
    }, {
        name: "Brown Rockfish",
        img: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Brown_rockfish.jpg/220px-Brown_rockfish.jpg"],
        alts: ["Brown"],
        description: "The brown rockfish feeds primarily at night on small fishes, crab, shrimp, and other small invertebrates. During the day this fish tends to lie on the seabed among seaweed or next to rocks or in other hidden locations. Its spines are venomous and can cause painful injuries to the unwary."
    },
    {
        name: "Vermilion Rockfish",
        img: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sebastes_miniatus.jpg/220px-Sebastes_miniatus.jpg"],
        alts: ["Vermilion"],
        description:"The vermilion rockfish appears to mature and spawn for the first time at age 3–4. A vermilion rockfish that was 20 inches (51 cm) long was estimated to contain 282,000 eggs. By this measure a 30 inches (76 cm) female might hold as many as 500,000 eggs. The principal reproductive period is from December through March."
    },
    {
        name: "Canary Rockfish",
        img: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sebastes_pinniger_1.jpg/250px-Sebastes_pinniger_1.jpg"],
        alts: ["Canary"],
        description: "Young canaries live in relatively shallow water, moving to deeper water as they mature. Adults are mostly found at depths of 80–200 meters (with two recorded at 838 meters), tending to collect in groups around pinnacles and similar high-relief rock formations, especially where the current is strong. They may move considerable distances; one individual covered 700 km in four years after being tagged and released."
    },
    {
        name: "China Rockfish",
        img: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/China_rockfish_in_Neah_Bay_August_2009_JLL.jpg/250px-China_rockfish_in_Neah_Bay_August_2009_JLL.jpg"],
        alts: ["China"],
        description: 'Although Jordan and Evermann promoted the common name "yellowspotted rockfish", the "China" name has persisted, due to a perceived preference by persons of Chinese ancestry living in central California.'
    },
    {
        name: "Gopher Rockfish",
        img: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Gopher_rockfish.jpg/250px-Gopher_rockfish.jpg"],
        alts: ["Gopher"],
        description: "Gophers are extremely closely related to the black-and-yellow rockfish S. chrysomelas; S. chrysomelas is darker brown with yellow patches, and tends to prefer shallower water. While it was once thought that the black-and-yellow and gopher rockfish were merely color morphs of the same species, detailed genomic studies using microsatellite analysis have recently shown, however, that there is a significant amount of genetic difference between the two at loci that code for more than just coloration. This implies that they are indeed distinct, albeit closely related species, making them ideal specimens for studying sympatric evolution."
    },
    {
        name: "Kelp Rockfish",
        img: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Sebastes_atrovirens.jpg/220px-Sebastes_atrovirens.jpg"],
        alts: ["Kelp"],
        description : "This rockfish is an important prey item for many other animals. The larva is consumed by siphonophores and chaetognaths. The juvenile is food for other fish, such as lingcod, cabezon, and salmon, as well as many birds, pinnipeds, and porpoises. The adult is prey for sharks, dolphins, and seals. Additionally, this species is taken in spearfishing and angling."
    },
    {
        name: "Copper Rockfish",
        img: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Sebastes_caurinus_1.jpg/220px-Sebastes_caurinus_1.jpg"],
        alts: ["Copper"],
        description : "This rockfish is known to be very faithful to its chosen home and numerous tagging studies have shown that these rockfish travel no more than a mile from their chosen location."
    },
    {
        name: "Bocaccio Rockfish",
        img: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Sebastes_paucispinis.jpg/220px-Sebastes_paucispinis.jpg"],
        alts: ["Bocaccio"],
        description : "The southern distinct population segment of bocaccio is a U.S. National Marine Fisheries Service Species of Concern. National Marine Fisheries Service listed the Puget Sound/Georgia basin distinct population segment as endangered on April 28, 2010. Critical habitat was designated on November 13, 2014."
    },
    {
        name: "Tiger Rockfish",
        img: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Sebastes_nigrocinctus.jpg/220px-Sebastes_nigrocinctus.jpg"],
        alts: ["tiger", "tiger seaperch", "black-banded rockfish", "banded rockfish", "Sebastes nigrocinctus"],
        description : "Scientists have dated some fish to be up to 166 years old. It is very vulnerable, with a minimum population doubling time of 14 years."
    },
    {
        name: "Quillback Rockfish",
        img: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Quillback_Rockfish_Alaska_Sealife_Center.JPG/220px-Quillback_Rockfish_Alaska_Sealife_Center.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Quillback_Rockfish.JPG/320px-Quillback_Rockfish.JPG"],
        alts: ["Quillback seaperch", "Quillback", "Sebastes maliger"],
        description : "Quillbacks obtain their name from the sharp, venomous quills or spines on the dorsal fin. At the base of the spines are venomous glands, which excrete poison into the spines. The stinging spines protect the quillback from predators. They are not extremely toxic to humans but can still cause pain and infection."
    },
    {
        name: "Yelloweye rockfish",
        img: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Sebastes_ruberrimus_1.jpg/220px-Sebastes_ruberrimus_1.jpg"],
        alts: ["Sebastes ruberrimus", "Yelloweye"],
        description : "A stock assessment of the species, which incorporated data gathered from northern California and Oregon, was done in 2001. The study concluded the fish's numbers are just 7% of what they would be without human intervention in northern California, and a slightly higher 13% in Oregon. The assessment also showed a 30-year decline in numbers. These numbers are far below the 25% threshold at which a fish is labeled overfished."
    },
    {
        name: "Redbanded rockfish",
        img: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Sebastes_babcocki.jpg/220px-Sebastes_babcocki.jpg"],
        alts: ["Redbanded", "bandit", "barber pole", "flag rockfish", "Spanish flag", "hollywood", "convict" , "flag", "Sebastes babcocki"],
        description : "Like other rockfish, this species is viviparous. The female releases the live young between March and September across the species' range."
    },
    {
        name: "Yellowtail rockfish",
        img: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Sebastes_flavidus.jpg/220px-Sebastes_flavidus.jpg"],
        alts: ["Yellowtail", "Sebastes flavidus", "Yellowtail seaperch"],
        description : "The yellowtail rockfish occurs from San Diego, California, to Kodiak Island, Alaska; it is caught commercially off the coast of British Columbia, as well as being caught by recreational anglers off of central and northern California."
    },
    {
        name: "Starry rockfish",
        img: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Starryrockfish_300.jpg/220px-Starryrockfish_300.jpg"],
        alts: ["Starry", "spotted corsair", "spotted rockfish", "chinafish", "red rock cod", "Sebastes constellatus"],
        description : "The starry rockfish (Sebastes constellatus) is a type of rockfish (Sebastidae) that lives mainly off the coasts of California and Baja California. This fish are also commonly called spotted corsair, spotted rockfish, chinafish, and red rock cod."
    },
    {
        name: "Grass rockfish",
        img: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sebastes_rastrelliger.jpg/220px-Sebastes_rastrelliger.jpg"],
        alts: ["Grass", "Sebastes rastrelliger", "Grass Rockcod", "Grass Bass", "Grassy"],
        description : "Lives in the benthic zone and feeds on crustaceans and small fish. This fish is an ambush predator and waits hiding in kelp, rocks and holes until prey passes by."
    },
    {
        //Not from Wikipedia
        name: "Rosy rockfish",
        img: ["http://www.chabotcollege.edu/faculty/jyasaki/photogallery/fishpics/800X600/P1010047aa.jpg"],
        alts: ["rosy", "Sebastes rosaceus"],
        description : "If a hungry fish or seal comes by, the rockfishes duck between the boulders. But mostly they just hang there, snacking on the smaller fishes, octopuses and shrimp living among the rocks."
    },
    {
        //Not from Wikipedia
        name: "Olive rockfish",
        img: ["http://www.fishbase.org/images/species/Seser_u0.jpg"],
        alts: ["Sebastes serranoides", "olive"],
        description : "The body of the olive rockfish is elongate and compressed. The upper profile of the head is almost straight, and the snout is long and pointed. The lower jaw is projecting. The olive rockfish always has nine soft rays in the anal fin; the yellowtail rockfish usually has eight."
    },
    {
        //Not from Wikipedia
        name: "Honeycomb rockfish",
        img: ["http://www.fishbase.org/images/species/Seumb_u0.jpg", "http://friendsoflajollashores.com/marinelife/wp-content/gallery/cache/858__580x_05-honeycomb-rockfish_7669261500_o.jpg"],
        alts: ["Sebastes umbrosus", "Honeycomb"],
        description : "Unafraid, can usually be closely approached with slow nonthreatening movements. Very little is known about the biology of this dwarf species"
    },

];
