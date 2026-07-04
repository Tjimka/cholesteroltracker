const FOODS = [
  {n:"Magere melk",cat:"Zuivel",fiber:0,protein:3.7},
  {n:"Halfvolle melk",cat:"Zuivel",fiber:0,protein:3.4},
  {n:"Volle melk",cat:"Zuivel",fiber:0,protein:3.3},
  {n:"Karnemelk",cat:"Zuivel",fiber:0,protein:3.0},
  {n:"Lactosevrije melk (halfvol)",cat:"Zuivel",fiber:0,protein:3.2},
  {n:"Kefir",cat:"Zuivel",fiber:0,protein:3.5},
  {n:"Drinkyoghurt Optimel (aardbei)",cat:"Zuivel",fiber:0,protein:3.1},
  {n:"Chocolademelk (halfvol)",cat:"Zuivel",fiber:null,protein:3.3},
  {n:"Magere yoghurt",cat:"Zuivel",fiber:null,protein:4.1},
  {n:"Halfvolle yoghurt",cat:"Zuivel",fiber:null,protein:4.2},
  {n:"Volle yoghurt",cat:"Zuivel",fiber:null,protein:3.8},
  {n:"Magere kwark",cat:"Zuivel",fiber:null,protein:8.4,good:true},
  {n:"Halfvolle kwark",cat:"Zuivel",fiber:null,protein:7.5},
  {n:"Volle kwark",cat:"Zuivel",fiber:null,protein:8},
  {n:"Skyr",cat:"Zuivel",fiber:null,protein:10.6,good:true},
  {n:"Griekse yoghurt 10% vet",cat:"Zuivel",fiber:null,protein:4.2},
  {n:"Griekse yoghurt 2% vet",cat:"Zuivel",fiber:null,protein:6},
  {n:"Lactosevrije yoghurt (halfvol)",cat:"Zuivel",fiber:null,protein:4.5},
  {n:"Lactosevrije kwark",cat:"Zuivel",fiber:null,protein:9.8},
  {n:"Soja drink ongezoet",cat:"Zuivel",fiber:null,protein:3.3},
  {n:"Haverdrink",cat:"Zuivel",fiber:null,protein:0.3},
  {n:"Kokos drink",cat:"Zuivel",fiber:null,protein:0.2},
  {n:"Amandel drink ongezoet",cat:"Zuivel",fiber:null,protein:0.9},
  {n:"Soja yoghurt",cat:"Zuivel",fiber:null,protein:4.4},
  {n:"Haver yoghurt",cat:"Zuivel",fiber:null,protein:0.2},
  {n:"Kokos yoghurt",cat:"Zuivel",fiber:null,protein:1.5},
  {n:"Creme fraiche",cat:"Zuivel",fiber:null,protein:2.6},
  {n:"Zure room",cat:"Zuivel",fiber:null,protein:3},
  {n:"Kookroom",cat:"Zuivel",fiber:null,protein:2.4},
  {n:"Slagroom light",cat:"Zuivel",fiber:null,protein:3.2},
  {n:"Soja room",cat:"Zuivel",fiber:null,protein:2.2},
  {n:"Haverroom (haverfraiche)",cat:"Zuivel",fiber:null,protein:0.8},
  {n:"Ei gekookt",cat:"Vlees, vis, ei, vervangers",fiber:0,protein:12.3},
  {n:"Kipfilet",cat:"Vlees, vis, ei, vervangers",fiber:0,protein:30.9},
  {n:"Rundergehakt",cat:"Vlees, vis, ei, vervangers",fiber:0,protein:30.4},
  {n:"Half om half gehakt (HOH)",cat:"Vlees, vis, ei, vervangers",fiber:0,protein:30.1},
  {n:"Varkensgehakt",cat:"Vlees, vis, ei, vervangers",fiber:0,protein:26.4},
  {n:"Sukadelappen",cat:"Vlees, vis, ei, vervangers",fiber:0,protein:21.3},
  {n:"Magere runderlappen",cat:"Vlees, vis, ei, vervangers",fiber:0,protein:21.3},
  {n:"Entrecote",cat:"Vlees, vis, ei, vervangers",fiber:0,protein:31},
  {n:"Biefstuk",cat:"Vlees, vis, ei, vervangers",fiber:0,protein:29.3},
  {n:"Tartaar",cat:"Vlees, vis, ei, vervangers",fiber:0,protein:30.1},
  {n:"Braadworst",cat:"Vlees, vis, ei, vervangers",fiber:0,protein:15.2},
  {n:"Varkenshaas",cat:"Vlees, vis, ei, vervangers",fiber:0,protein:28.7},
  {n:"Slavink",cat:"Vlees, vis, ei, vervangers",fiber:0,protein:20.7},
  {n:"Tonijn uit blik",cat:"Vlees, vis, ei, vervangers",fiber:0,protein:27},
  {n:"Tonijn vers",cat:"Vlees, vis, ei, vervangers",fiber:0,protein:29.2,good:true},
  {n:"Magere vis",cat:"Vlees, vis, ei, vervangers",fiber:0,protein:23.4},
  {n:"Zalm",cat:"Vlees, vis, ei, vervangers",fiber:0,protein:25.2,good:true},
  {n:"Makreel",cat:"Vlees, vis, ei, vervangers",fiber:0,protein:18,good:true},
  {n:"Sardines in olie",cat:"Vlees, vis, ei, vervangers",fiber:0,protein:21.7,good:true},
  {n:"Seitan (vegetarisch)",cat:"Vlees, vis, ei, vervangers",fiber:null,protein:28.4},
  {n:"Vegetarisch gehakt",cat:"Vlees, vis, ei, vervangers",fiber:null,protein:21.8},
  {n:"Vegetarische hamburger",cat:"Vlees, vis, ei, vervangers",fiber:null,protein:19.6},
  {n:"Vegetarische kip stukjes",cat:"Vlees, vis, ei, vervangers",fiber:null,protein:19.8},
  {n:"Tofu",cat:"Vlees, vis, ei, vervangers",fiber:2,protein:10.6,good:true},
  {n:"Tempeh",cat:"Vlees, vis, ei, vervangers",fiber:6.2,protein:17.6,good:true},
  {n:"Falafel",cat:"Vlees, vis, ei, vervangers",fiber:8.8,protein:8.2},
  {n:"Vegetarisch rul gehakt",cat:"Vlees, vis, ei, vervangers",fiber:8.4,protein:null},
  {n:"Vegetarische stukjes/reepjes",cat:"Vlees, vis, ei, vervangers",fiber:6.8,protein:null},
  {n:"Groente balletjes/groente burger",cat:"Vlees, vis, ei, vervangers",fiber:5.8,protein:null},
  {n:"Vlees onbewerkt (algemeen)",cat:"Vlees, vis, ei, vervangers",fiber:0,protein:null},
  {n:"Gevogelte (algemeen)",cat:"Vlees, vis, ei, vervangers",fiber:0,protein:null},
  {n:"Vis (algemeen)",cat:"Vlees, vis, ei, vervangers",fiber:0,protein:null},
  {n:"Harde kaas",cat:"Broodbeleg",fiber:0,protein:22.5},
  {n:"Zachte kaas",cat:"Broodbeleg",fiber:0,protein:17},
  {n:"Kipfilet vleeswaren",cat:"Broodbeleg",fiber:0,protein:17.5},
  {n:"Kalkoenfilet",cat:"Broodbeleg",fiber:0,protein:19.8},
  {n:"Ham",cat:"Broodbeleg",fiber:0,protein:16.4},
  {n:"Gebraden gehakt",cat:"Broodbeleg",fiber:0,protein:12.8},
  {n:"Boterham worst",cat:"Broodbeleg",fiber:0,protein:11.6},
  {n:"Rosbief",cat:"Broodbeleg",fiber:0,protein:27.2},
  {n:"Gerookte zalm",cat:"Broodbeleg",fiber:0,protein:21.8,good:true},
  {n:"Tonijnsalade",cat:"Broodbeleg",fiber:null,protein:11.4},
  {n:"Hummus",cat:"Broodbeleg",fiber:5.4,protein:7.7,good:true},
  {n:"Zuivelspread",cat:"Broodbeleg",fiber:null,protein:5.1},
  {n:"Zuivelspread light",cat:"Broodbeleg",fiber:null,protein:8.1},
  {n:"Sandwich spread",cat:"Broodbeleg",fiber:0.9,protein:1.6},
  {n:"Jam",cat:"Broodbeleg",fiber:1.2,protein:null},
  {n:"Appelstroop",cat:"Broodbeleg",fiber:4.6,protein:null},
  {n:"Pindakaas",cat:"Broodbeleg",fiber:8.6,protein:null,good:true},
  {n:"Notenpasta",cat:"Broodbeleg",fiber:6.6,protein:null,good:true},
  {n:"Vleeswaren (gemiddeld)",cat:"Broodbeleg",fiber:0.2,protein:null},
  {n:"Kaas (gemiddeld)",cat:"Broodbeleg",fiber:0,protein:null},
  {n:"Bruine bonen",cat:"Peulvruchten",fiber:7.6,protein:6.1,good:true},
  {n:"Kidneybonen",cat:"Peulvruchten",fiber:7.6,protein:8.3,good:true},
  {n:"Zwarte bonen",cat:"Peulvruchten",fiber:8,protein:6.1,good:true},
  {n:"Witte bonen",cat:"Peulvruchten",fiber:7.1,protein:7.8,good:true},
  {n:"Linzen",cat:"Peulvruchten",fiber:4.8,protein:8.8,good:true},
  {n:"Kapucijners",cat:"Peulvruchten",fiber:6.5,protein:9.5,good:true},
  {n:"Sojabonen/edamame",cat:"Peulvruchten",fiber:6.5,protein:10.6,good:true},
  {n:"Spliterwten",cat:"Peulvruchten",fiber:6.5,protein:8.4,good:true},
  {n:"Kikkererwten",cat:"Peulvruchten",fiber:6.9,protein:7.6,good:true},
  {n:"Pinda's",cat:"Peulvruchten",fiber:6.7,protein:25.2,good:true},
  {n:"Tuinbonen",cat:"Peulvruchten",fiber:4.7,protein:5,good:true},
  {n:"Spelt",cat:"Granen, pasta, aardappel",fiber:null,protein:4},
  {n:"Boekweit",cat:"Granen, pasta, aardappel",fiber:null,protein:8},
  {n:"Havermout",cat:"Granen, pasta, aardappel",fiber:7.3,protein:12.8,good:true},
  {n:"Gerst",cat:"Granen, pasta, aardappel",fiber:4.9,protein:3.5,good:true},
  {n:"Roggemeel",cat:"Granen, pasta, aardappel",fiber:null,protein:10},
  {n:"Mais",cat:"Granen, pasta, aardappel",fiber:null,protein:2.5},
  {n:"Aardappel",cat:"Granen, pasta, aardappel",fiber:1.7,protein:1.9},
  {n:"Zoete aardappel",cat:"Granen, pasta, aardappel",fiber:2.7,protein:1.7},
  {n:"Witte pasta",cat:"Granen, pasta, aardappel",fiber:3.4,protein:null},
  {n:"Volkoren pasta",cat:"Granen, pasta, aardappel",fiber:4.2,protein:5.6,good:true},
  {n:"Groentepasta (bv. spinazie)",cat:"Granen, pasta, aardappel",fiber:3.4,protein:null},
  {n:"Orzo wit",cat:"Granen, pasta, aardappel",fiber:3.4,protein:null},
  {n:"Orzo volkoren",cat:"Granen, pasta, aardappel",fiber:8,protein:null,good:true},
  {n:"Witte rijst",cat:"Granen, pasta, aardappel",fiber:0.7,protein:null},
  {n:"Meergranen rijst",cat:"Granen, pasta, aardappel",fiber:1.1,protein:null},
  {n:"Zilvervliesrijst",cat:"Granen, pasta, aardappel",fiber:2.1,protein:3.1,good:true},
  {n:"Risotto rijst",cat:"Granen, pasta, aardappel",fiber:0.7,protein:null},
  {n:"Couscous wit",cat:"Granen, pasta, aardappel",fiber:1.2,protein:4},
  {n:"Couscous volkoren",cat:"Granen, pasta, aardappel",fiber:2.8,protein:null,good:true},
  {n:"Quinoa",cat:"Granen, pasta, aardappel",fiber:2.8,protein:4.4,good:true},
  {n:"Bulgur",cat:"Granen, pasta, aardappel",fiber:4.5,protein:3.1},
  {n:"Gnocchi",cat:"Granen, pasta, aardappel",fiber:1.8,protein:null},
  {n:"Wrap wit",cat:"Granen, pasta, aardappel",fiber:3,protein:null},
  {n:"Wrap volkoren",cat:"Granen, pasta, aardappel",fiber:8,protein:null,good:true},
  {n:"Wrap met groente",cat:"Granen, pasta, aardappel",fiber:6,protein:null},
  {n:"Walnoten",cat:"Noten, zaden, pitten",fiber:4.6,protein:15.9,good:true},
  {n:"Paranoten",cat:"Noten, zaden, pitten",fiber:7.5,protein:14.3,good:true},
  {n:"Pecannoten",cat:"Noten, zaden, pitten",fiber:9.6,protein:9.2,good:true},
  {n:"Cashewnoten",cat:"Noten, zaden, pitten",fiber:3.8,protein:21.2,good:true},
  {n:"Amandelen",cat:"Noten, zaden, pitten",fiber:10.2,protein:21.7,good:true},
  {n:"Pistachenoten",cat:"Noten, zaden, pitten",fiber:9.5,protein:23.8,good:true},
  {n:"Hazelnoten",cat:"Noten, zaden, pitten",fiber:9,protein:16.4,good:true},
  {n:"Macadamianoten",cat:"Noten, zaden, pitten",fiber:8,protein:7.8,good:true},
  {n:"Zonnebloempitten",cat:"Noten, zaden, pitten",fiber:7.4,protein:18,good:true},
  {n:"Pompoenpitten",cat:"Noten, zaden, pitten",fiber:8.5,protein:30.3,good:true},
  {n:"Pijnboompitten",cat:"Noten, zaden, pitten",fiber:6.3,protein:16.5,good:true},
  {n:"Chiazaad",cat:"Noten, zaden, pitten",fiber:34.4,protein:16.5,good:true},
  {n:"Lijnzaad",cat:"Noten, zaden, pitten",fiber:34.8,protein:19,good:true},
  {n:"Veldsla",cat:"Groente",fiber:1.7,protein:null},
  {n:"Courgette",cat:"Groente",fiber:1.1,protein:null},
  {n:"Aubergine",cat:"Groente",fiber:2.5,protein:null},
  {n:"Broccoli",cat:"Groente",fiber:2.7,protein:null},
  {n:"Bloemkool",cat:"Groente",fiber:2.3,protein:null},
  {n:"Paksoi",cat:"Groente",fiber:1,protein:null},
  {n:"Pastinaak",cat:"Groente",fiber:2.6,protein:null},
  {n:"Knolselderij",cat:"Groente",fiber:4.9,protein:null},
  {n:"Bleekselderij",cat:"Groente",fiber:1.1,protein:null},
  {n:"Komkommer",cat:"Groente",fiber:0.3,protein:null},
  {n:"Spruitjes",cat:"Groente",fiber:4.5,protein:null},
  {n:"Doperwtjes",cat:"Groente",fiber:4.5,protein:null},
  {n:"Champignon",cat:"Groente",fiber:2.3,protein:null},
  {n:"Avocado",cat:"Groente",fiber:3.1,protein:null,good:true},
  {n:"Augurk",cat:"Groente",fiber:0.9,protein:null},
  {n:"Pompoen",cat:"Groente",fiber:1.1,protein:null},
  {n:"Wortel",cat:"Groente",fiber:2.9,protein:null},
  {n:"Paprika",cat:"Groente",fiber:1.9,protein:null},
  {n:"Ui",cat:"Groente",fiber:2.7,protein:null},
  {n:"Tomaat",cat:"Groente",fiber:1.3,protein:null},
  {n:"Knoflook",cat:"Groente",fiber:2.1,protein:null},
  {n:"Spinazie",cat:"Groente",fiber:1.4,protein:null},
  {n:"Andijvie",cat:"Groente",fiber:1.7,protein:null},
  {n:"Witte kool",cat:"Groente",fiber:2.8,protein:null},
  {n:"Spitskool",cat:"Groente",fiber:2.5,protein:null},
  {n:"Chinese kool",cat:"Groente",fiber:2.5,protein:null},
  {n:"Rode kool",cat:"Groente",fiber:2.9,protein:null},
  {n:"Rode biet",cat:"Groente",fiber:2.9,protein:null},
  {n:"Zuurkool",cat:"Groente",fiber:3.2,protein:null},
  {n:"Sperzieboon",cat:"Groente",fiber:2.9,protein:null},
  {n:"Prei",cat:"Groente",fiber:2.3,protein:null},
  {n:"IJsbergsla",cat:"Groente",fiber:1.2,protein:null},
  {n:"Rucola sla",cat:"Groente",fiber:1.9,protein:null},
  {n:"Nectarine",cat:"Fruit",fiber:1.1,protein:null},
  {n:"Kiwi groen",cat:"Fruit",fiber:2.3,protein:null,good:true},
  {n:"Kiwi geel",cat:"Fruit",fiber:1.4,protein:null},
  {n:"Blauwe bessen",cat:"Fruit",fiber:2.4,protein:null,good:true},
  {n:"Ananas",cat:"Fruit",fiber:1.6,protein:null},
  {n:"Druiven (wit/groen)",cat:"Fruit",fiber:1.4,protein:null},
  {n:"Druiven blauw",cat:"Fruit",fiber:2.1,protein:null},
  {n:"Kers",cat:"Fruit",fiber:0.9,protein:null},
  {n:"Framboos",cat:"Fruit",fiber:2.5,protein:null,good:true},
  {n:"Aardbei",cat:"Fruit",fiber:1.1,protein:null},
  {n:"Mango",cat:"Fruit",fiber:1.6,protein:null},
  {n:"Bramen",cat:"Fruit",fiber:3.1,protein:null,good:true},
  {n:"Pruimen (vers)",cat:"Fruit",fiber:2.2,protein:null,good:true},
  {n:"Watermeloen",cat:"Fruit",fiber:0.6,protein:null},
  {n:"Galia meloen",cat:"Fruit",fiber:0.4,protein:null},
  {n:"Cantaloupe meloen",cat:"Fruit",fiber:0.9,protein:null},
  {n:"Honingmeloen",cat:"Fruit",fiber:0.6,protein:null},
  {n:"Passievrucht",cat:"Fruit",fiber:3.3,protein:null},
  {n:"Appel",cat:"Fruit",fiber:2,protein:null,good:true},
  {n:"Banaan",cat:"Fruit",fiber:1.9,protein:null},
  {n:"Sinaasappel",cat:"Fruit",fiber:2,protein:null},
  {n:"Mandarijn",cat:"Fruit",fiber:0.9,protein:null},
  {n:"Peer",cat:"Fruit",fiber:2.2,protein:null,good:true},
  {n:"Perzik",cat:"Fruit",fiber:2,protein:null},
  {n:"Abrikozen (gedroogd)",cat:"Gedroogd fruit",fiber:14.4,protein:null},
  {n:"Pruimen (gedroogd)",cat:"Gedroogd fruit",fiber:5.1,protein:null},
  {n:"Cranberries (gedroogd)",cat:"Gedroogd fruit",fiber:5,protein:null},
  {n:"Rozijnen",cat:"Gedroogd fruit",fiber:3.7,protein:null},
  {n:"Dadels",cat:"Gedroogd fruit",fiber:7.5,protein:null},
  {n:"Cornflakes",cat:"Ontbijtgranen",fiber:3,protein:null},
  {n:"Muesli met vruchten",cat:"Ontbijtgranen",fiber:8.5,protein:null,good:true},
  {n:"Granola",cat:"Ontbijtgranen",fiber:6.7,protein:null},
  {n:"Haverzemelen",cat:"Ontbijtgranen",fiber:15.4,protein:null,good:true},
  {n:"Tarwezemelen",cat:"Ontbijtgranen",fiber:45,protein:null},
  {n:"7 granen ontbijt",cat:"Ontbijtgranen",fiber:1.7,protein:null},
  {n:"Wit brood",cat:"Brood en crackers",fiber:2.5,protein:null},
  {n:"Tarwebrood",cat:"Brood en crackers",fiber:5,protein:null},
  {n:"Volkoren brood",cat:"Brood en crackers",fiber:6.7,protein:null,good:true},
  {n:"Meergranenbrood",cat:"Brood en crackers",fiber:6.3,protein:null,good:true},
  {n:"Maisbrood",cat:"Brood en crackers",fiber:4.7,protein:null},
  {n:"Roggebrood volkoren",cat:"Brood en crackers",fiber:8.3,protein:null,good:true},
  {n:"Krentenbol",cat:"Brood en crackers",fiber:4.2,protein:null},
  {n:"Mueslibol",cat:"Brood en crackers",fiber:5.8,protein:null},
  {n:"Witte bol",cat:"Brood en crackers",fiber:3.8,protein:null},
  {n:"Volkoren bol",cat:"Brood en crackers",fiber:7.5,protein:null,good:true},
  {n:"Beschuit wit",cat:"Brood en crackers",fiber:2.5,protein:null},
  {n:"Beschuit volkoren",cat:"Brood en crackers",fiber:8.5,protein:null,good:true},
  {n:"Rijstwafel",cat:"Brood en crackers",fiber:4.7,protein:null},
  {n:"Cracotte cracker wit",cat:"Brood en crackers",fiber:3,protein:null},
  {n:"Cracotte cracker vezelrijk",cat:"Brood en crackers",fiber:11,protein:null},
  {n:"Sesam knäckebröd",cat:"Brood en crackers",fiber:3.1,protein:null},
  {n:"Volkoren knäckebröd",cat:"Brood en crackers",fiber:13.7,protein:null,good:true},
  {n:"Vezelrijk knäckebröd",cat:"Brood en crackers",fiber:23.9,protein:null,good:true},
];

const CATEGORIES = [...new Set(FOODS.map(f=>f.cat))];
let activeCategory = "Alle";

function fmt(n){
  if(n===null||n===undefined) return "–";
  return (Math.round(n*10)/10).toString().replace(".",",");
}
function todayStr(){ return new Date().toISOString().slice(0,10); }

const foodOptions = document.getElementById("foodOptions");
FOODS.forEach(f=>{
  const opt = document.createElement("option");
  opt.value = f.n;
  foodOptions.appendChild(opt);
});

const STORAGE_PREFIX = "cholesteroltracker:";
async function loadJSON(key, fallback){
  try{
    const raw = localStorage.getItem(STORAGE_PREFIX+key);
    return raw ? JSON.parse(raw) : fallback;
  }catch(e){ return fallback; }
}
async function saveJSON(key, value){
  try{ localStorage.setItem(STORAGE_PREFIX+key, JSON.stringify(value)); }
  catch(e){ console.error("Opslaan mislukt", e); }
}

let currentDate = todayStr();
let currentEntries = [];
let currentSettings = {gender:"v"};

function targetFor(gender){ return gender==="m" ? {min:30,goal:40} : {min:25,goal:30}; }

async function refreshVandaag(){
  currentEntries = await loadJSON("entries:"+currentDate, []);
  const tbody = document.getElementById("entriesBody");
  const empty = document.getElementById("entriesEmpty");
  tbody.innerHTML = "";
  if(currentEntries.length===0){
    empty.style.display="block";
  }else{
    empty.style.display="none";
    currentEntries.forEach((e,i)=>{
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${e.name}</td><td class="num">${e.grams} g</td><td class="num">${fmt(e.fiber)} g</td><td class="num">${e.protein!==null?fmt(e.protein)+" g":"–"}</td><td><button class="ghost" data-i="${i}">verwijderen</button></td>`;
      tbody.appendChild(tr);
    });
    tbody.querySelectorAll("button.ghost").forEach(btn=>{
      btn.addEventListener("click", async ()=>{
        currentEntries.splice(parseInt(btn.dataset.i),1);
        await saveJSON("entries:"+currentDate, currentEntries);
        refreshVandaag();
      });
    });
  }

  const totFiber = currentEntries.reduce((s,e)=>s+(e.fiber||0),0);
  const totProtein = currentEntries.reduce((s,e)=>s+(e.protein||0),0);

  document.getElementById("totFiber").textContent = fmt(totFiber)+" g";
  document.getElementById("totProtein").textContent = fmt(totProtein)+" g";

  const t = targetFor(currentSettings.gender);
  const pct = Math.min(100, Math.round((totFiber/t.goal)*100));
  document.getElementById("totPct").textContent = pct+"%";
  document.getElementById("progressBar").style.width = pct+"%";

  const circumference = 314;
  const offset = circumference - (Math.min(totFiber,t.goal)/t.goal)*circumference;
  document.getElementById("gaugeRing").style.strokeDashoffset = offset;
  document.getElementById("gaugeValue").textContent = fmt(totFiber);
  document.getElementById("gaugeTargetLabel").textContent = `doel ${t.goal} g (min. ${t.min} g)`;
}

document.getElementById("dateInput").value = currentDate;
document.getElementById("dateInput").addEventListener("change", (e)=>{
  currentDate = e.target.value || todayStr();
  refreshVandaag();
});
document.getElementById("genderSelect").addEventListener("change", async (e)=>{
  currentSettings.gender = e.target.value;
  await saveJSON("settings", currentSettings);
  refreshVandaag();
});

document.getElementById("addBtn").addEventListener("click", async ()=>{
  const name = document.getElementById("foodInput").value.trim();
  const grams = parseFloat(document.getElementById("gramsInput").value)||0;
  const feedback = document.getElementById("addFeedback");
  const food = FOODS.find(f=>f.n.toLowerCase()===name.toLowerCase());
  if(!food){ feedback.textContent = "Niet gevonden in de lijst. Kies een item uit de suggesties."; return; }
  if(grams<=0){ feedback.textContent = "Vul een geldig aantal gram in."; return; }
  feedback.textContent = "";
  const entry = {
    name: food.n,
    grams: grams,
    fiber: food.fiber!==null ? (food.fiber/100)*grams : null,
    protein: food.protein!==null ? (food.protein/100)*grams : null
  };
  currentEntries.push(entry);
  await saveJSON("entries:"+currentDate, currentEntries);
  document.getElementById("foodInput").value="";
  refreshVandaag();
});

document.getElementById("labDate").value = todayStr();
async function refreshLabs(){
  const labs = await loadJSON("labs", []);
  labs.sort((a,b)=>a.date<b.date?1:-1);
  const tbody = document.getElementById("labsBody");
  const empty = document.getElementById("labsEmpty");
  tbody.innerHTML = "";
  if(labs.length===0){ empty.style.display="block"; return; }
  empty.style.display="none";
  labs.forEach((l,i)=>{
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${l.date}</td><td class="num">${l.ldl!==null?fmt(l.ldl):"–"}</td><td class="num">${l.hdl!==null?fmt(l.hdl):"–"}</td><td class="num">${l.tg!==null?fmt(l.tg):"–"}</td><td><button class="ghost" data-i="${i}">verwijderen</button></td>`;
    tbody.appendChild(tr);
  });
  tbody.querySelectorAll("button.ghost").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      const labs2 = await loadJSON("labs", []);
      labs2.sort((a,b)=>a.date<b.date?1:-1);
      labs2.splice(parseInt(btn.dataset.i),1);
      await saveJSON("labs", labs2);
      refreshLabs();
    });
  });
}
document.getElementById("labAddBtn").addEventListener("click", async ()=>{
  const date = document.getElementById("labDate").value || todayStr();
  const ldl = document.getElementById("labLdl").value;
  const hdl = document.getElementById("labHdl").value;
  const tg = document.getElementById("labTg").value;
  const labs = await loadJSON("labs", []);
  labs.push({date, ldl: ldl!==""?parseFloat(ldl):null, hdl: hdl!==""?parseFloat(hdl):null, tg: tg!==""?parseFloat(tg):null});
  await saveJSON("labs", labs);
  document.getElementById("labLdl").value="";
  document.getElementById("labHdl").value="";
  document.getElementById("labTg").value="";
  refreshLabs();
});

document.querySelectorAll(".tab-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".tab-btn").forEach(b=>b.classList.remove("active"));
    document.querySelectorAll(".panel").forEach(p=>p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("panel-"+btn.dataset.tab).classList.add("active");
  });
});

function renderCategoryFilters(){
  const wrap = document.getElementById("categoryFilters");
  wrap.innerHTML = "";
  ["Alle",...CATEGORIES].forEach(cat=>{
    const chip = document.createElement("div");
    chip.className = "chip"+(cat===activeCategory?" active":"");
    chip.textContent = cat;
    chip.addEventListener("click", ()=>{ activeCategory = cat; renderCategoryFilters(); renderDb(); });
    wrap.appendChild(chip);
  });
}
function renderDb(){
  const tbody = document.getElementById("dbBody");
  tbody.innerHTML = "";
  const list = activeCategory==="Alle" ? FOODS : FOODS.filter(f=>f.cat===activeCategory);
  list.forEach(f=>{
    const proteinBadge = (f.protein!==null && f.protein>=15) ? '<span class="badge protein">eiwitrijk</span>' : '';
    const goodBadge = f.good ? '<span class="badge">vezel/onverzadigd vet</span>' : '';
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${f.n}${goodBadge}${proteinBadge}</td><td class="num">${fmt(f.fiber)} g</td><td class="num">${fmt(f.protein)} g</td>`;
    tbody.appendChild(tr);
  });
}

(async function init(){
  currentSettings = await loadJSON("settings", {gender:"v"});
  document.getElementById("genderSelect").value = currentSettings.gender;
  renderCategoryFilters();
  renderDb();
  await refreshVandaag();
  await refreshLabs();
})();