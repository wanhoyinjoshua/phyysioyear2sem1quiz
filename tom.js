var choiceselection = document.getElementsByClassName("choicetext");
var submmitbutt= document.getElementById("submit");
var questioncontainer = document.getElementById("questioncontainer")

var questioncorrectwronglist =[];




//question bank

 
var questionbank = 
[
  {
      "question":"1.	Define the primary goals of endurance training in performance terms and in terms of RPE",
      "choice":[
      "",
      "",
      "",
      ""
    ],
      "answer":"0",
      "explanation":" to increase the power an individual can maintain ... ... across the spectrum of exercise intensities  . Increase duration to maintain a certain poower until farigue , maintain a certain power with lower rpe , increase power a person can maintain for a certain duration until fatigue .<br> metabolic outcomes : increase insulin sensitivity , anti inflammotory effects"

  }
  ,
  {
   "question":"List synmoms for the term endurance ",
           "choice":[
            "",
            "",
            "",
            ""
           ],
   "answer":"0",
   "explanation":"exercise capacity , fitness ,aerobic fitness , cardiorepsiraotry fitness , we can get increase in exercise capapsity with no increase in vo2 max "

  }
  ,
  {
   "question":"Define the mode of endurance training in terms of the amount of muscle mass involved in exercise, and list examples of specific training modes suitable for endurance training, and give instances performance tests relevant to each example.",
   "choice":
   [
    "",
    "",
    "",
    ""
   ],
   "answer":"0",
   "explanation":"Mode : dynamic exercise with both legs simultanously or both arms ( moderate to large pervent of total bofy muscle mass, exam peril : single muscle group endurance training, very efective in tha muscle , increase in muscle oxidative capacity but little central adaptations, vo2 incease  training modes : level walking ( 6min )incine (balke test  duration )legecycling(40kmcycle trial time )rowing (2kn erogo time trial ) running ( 5kn ,10 42 kn time ) "

  }
  ,
  {
   "question":"Briefly describe how RPE may be used to assess the effectiveness of an endurance training program",
   "choice":
   [
    "",
    "",
    "",
    ""
   ],
   "answer":"0" ,
   "explanation":"to test whether a perso cna go longer , if the person can maintain a cerrtain power output for longer period of time , why not always use gold standards ? clncial index might not always correlate to performanc "
  }
  ,
  {
   "question":"List the primary variables that combine to determine endurance training dosage",
   "choice":
   [
    "",
    "",
    "",
    ""
   ],
   "answer":"0",
   "explanation":"intensity , duration and frequeency "
  }
  ,
  {
   "question":"Define the terms absolute intensity and relative intensity and give examples of specific measures of relative intensity",
   "choice":
   [
    "",
    "",
    "",
    ""
   ],
   "answer":"0",
   "explanation":"Absoluteintensity (= absolute power)Relativeintensity (relative to the person’s ‘fitness’)( perent of vo2 max , hr mac rpe"
  }
  ,
  {
   "question":"Name and describe the three different dosage training formats that are effective in increasing endurance.",
   "choice":
   [
    "",
    "",
    "",
    ""
   ],
   "answer":"0",
   "explanation":"moderte intensity continous training , 20 to 40 min at 65 percent mac vo2 , high intensity interval trainng , sprint interval training  "
  }
  ,
  {
   "question":"Briefly explain why any endurance training program that uses high-intensity training must be a form of interval training",
   "choice":
   [
    "",
    "",
    "",
    ""
   ],
   "answer":"0",
   "explanation":"get enough total exercise duration to get sufficient stimulus for training adaptation , repeat high-intensity exercise bouts with rest intervals"
  }
  ,
  {
   "question":"Understand the importance of pre-exercise screening",
   "choice":
   [
    "",
    "",
    "",
    ""
   ],
   "answer":"0",
   "explanation":"safety:find those who at risk of cardiovascular problmes or other comorbidities during exercise .<br> Performane : dtermine patient goals , identify risk factors that can be tracked/changed by execise <br>psychological :rapport, awareness of mental health, estav=blish social support network around patient .   "
  }
  ,
  {
   "question":"Understand what factors increase the risk of cardiovascular disease and CV-related complications",
   "choice":
   [
    "",
    "",
    "",
    ""
   ],
   "answer":"0",
   "explanation":"age , family hostory , prediabetesrisk increase as intensity of exercise increase , smoking , hypertension , low fitness, obesity"
  }
  ,
  {
   "question":"Correctly identify a patients cardiovascular risk status and identify the appropriate course of action when proceeding to exercise testing and prescription",
   "choice":
   [
    "",
    "",
    "",
    ""
   ],
   "answer":"0",
   "explanation":"acsm screening model : review history for known disease(if yes high risk ) , signs and symtoms suggestive of cvd?(if ues high risk ) cvd risk factors (if>2 moderate , otherwise low )  "
  }
  ,
  {
   "question":"Understand how to correctly and accurately determine resting heart rate and blood pressure using standard protocols",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"assessment of radila pulse , count beats for self determined duration then multiply , into beats per minute(count from 1 closer to actual hr )<br> brachial bloodpressure, palce on medial part of antecubital fossa , 30 mmhg above systoloc presure <br> sys higher than  140 <90 , if sys > 200 , dias >110 clearance reuired   "
  }
  ,
  {
   "question":"Be able to determine cardiac risk level based on the findings of a resting haemodynamic assessment",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"if bpm > 100(non regular ) , afib (uncontrolled arthmias ) , premature beats >5/minute <br>high level av block , conduction problem<br> rate abnormality (60 to 100)<50 except athletes >100 tachycardia  "
  }
  ,
  {
   "question":"3.Understand how to implement and interpret the current screening models and algorithms",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"currnetly active patients are encouranged to continue exercising , regardless of disease status , <br> medical clearence is only recommneded for sedentary patients with known symtomatic cv pulmonary , metabolic disease , <br> all patients encouraged to profress towards vigrous intensity exercise , as there i sknwon dose respone <br>australian model knwo cv metabolic disease requirwes clearance but can be from allied health , vigrous nt directly recommended , additional risk factors can be considered ."
  }
  ,
  {
   "question":"When should we refer to a doctor ?",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"uncontrolled asthma with exercise , uncontrolled dibtese complications , hypohyperglycemia , neuropahty , retinopathy ,renal disease , .. "
  }
  ,
  {
   "question":"wHAT is orthostatic blood pressure ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"measure pressure in supine , then 10 moin of rest , then measure sys , if sys increase, hr increase , nrmal , if not normal , no increase in sys and may fall "
  }
  ,
  {
   "question":"  Explain, in general terms, how the power – duration to fatigue relationship is assessed, and sketch the relationship for a typical person (approximate shape). State approximately the duration someone can maintain i) peak power and ii) power at VO2max",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"set a power output , go to exusationn , measure time of that , repeat at diffferent intensity .maintain vo2 max for 2 to 4 min until fatigue , max power can only last for 5 seconds ( vo2 max is 400 w pw=eak 600 w"
  }
  ,
  {
   "question":"Compared to a typical young sedentary person, sketch the power – duration relationships for i) an endurance training person and ii) an person with a low endurance capacity (approximate shape only – X and Y axis should be approximately correct)",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"x axis is time to exhuation ( min) , y is power ( w), endurance trainer will be higher up , worst lower "
  }
  ,
  {
   "question":"Sketch how the power – duration changes with endurance training",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"6"
  }
  ,
  {
   "question":"Define the terms homeostasis and homeostat, and list a number of physiological variables (minimum of 5) that are essential to maintain with normal range.",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"two components : feedforward , feedback , oc coc , heat , ph , sosmolarity  "
  }
  ,
  {
   "question":"Explain the term feedback in terms of homeostasis",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"two type feedback and feedfrward "
  }
  ,
  {
   "question":"Explain i) how muscle threatens whole body homeostasis (list a minimum of 5 variable) and ii) match up these variable with the  homeostats that manage these variable during exercise. In overview terms define the phrase: the exercise response",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"it grabs o2 , glucose , ffa , adn dump co2 h heat , also major threat to decrease map( hypoia , hypercapnia , acidosis , hyperthermia ,hypoglycemia ) "
  }
  ,
  {
   "question":" Define the terms pulmonary circulation and systemic circulation. Be able to sketch a simplified version of the cardiovascular system (CVS), and on that diagram be able to identify the left and right hearts (and name the chambers and specific valves), lungs, aorta, arteries, capillary beds, veins, and interstitial spaces between alveolus and pulmonary capillary, and between muscle capillary and muscle cell.",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":""
  }
  ,
  {
   "question":"List and briefly describe the steps in involved in i) O2 transport and ii) O2 consumption – including coupling to muscle power output",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"ventilation :physical air flows transpoerrts o2 from atmosphere to alveolus , difusion of o2 down the conc gra to pulmonary capilary , then unde rhigh po2 binds to hb , blood transport o2 to capillary , low po2 , unbind , diffusion down conc to msucke cell , consumed by pxsphso accetp low enery e and h to form h20 , lower muscle po2 "
  }
  ,
  {
    "question":"Wt is muscke atp turnover ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"exercise power dribes adp and drives oxs phsos "
   }
   ,
  {
   "question":"Define the terms METS and VO2 , and all associated definitions",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"Mets(per min) , one measure of energy expenditure , 1 met = energy expenditure at rest ( 3.5ml o2 kg j/min) Vo2 (best measure of enerygy expenditurethe rate fo oxygen consumption during ox phos , defined as co x( diff in conc) , ususally limited by CO "
  }
  ,
  {
   "question":"Be able to convert workload or VO2to energy expenditure",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"1 w = 1 j /s , 1 l /min vo2 = 21 kj /min"
  }
  ,
  {
   "question":"Understand the relationships between workload, heart rate and VO2 and how they can be used to estimate or predict capacity",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"vo2 work rate and vow power is a linear relation , also has a non linear part .  "
  }
  ,
  {
   "question":"Understand the assumptions and limitations of estimating or predicting VO2 based on workload ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"Assumptions for estimation : estimation of vo2 max during max eff exer , : requires a single bout of maximal exercse > 6-8 min , progressive intensity >30s to stabalize metobolic orocess , peak hr +-10bpm , criteria for maximal effort .<br> assumptions for esttimaion and predicting from submaximal . requires three submaximal , convert work rate to esimate vo2 , predict vo2 max from hr and vo2 (linear), limitations : try to predict internal using external , not always perfect age disease , individual varbaility , relies omn predicted hr max and perfect response hr to exercise . "
  }
  ,
  {
   "question":" Calculate estimated or predicted VO2 using validated equations, and be able to convert between absolute and relative values of VO2",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"speed is interms of m /min , vo2 os relative per kg per min  "
  }
  ,
  {
   "question":"Understand the relative advantages and disadvantages or modality selection for the assessment of aerobic fitness, and how it could be applied in different setting and with different population groups",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"treadmill vs byccycle(treafmill higher b=vo2 max , more difficult to get artifact free ecg  , bicycel , good ecg recording , easy bp recordigns , lower vo2 max ( 10 =% loower)) , step bench(only slighter lower vo2 than treadmil , deoendent on body mass and ones ability to lift it ) vs field teest(good for mass testing , prediction power abt vo2 max is least ) "
  }
  ,
  {
    "question":"Explain how increased rate of crossbridge cycling causes increased muscle VO2. (Assuming adequate supply of O2 and adequate carbohydrate and fat storage)",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"Increasine in cross bridge cycling leads to sonumption of atp , causes increase in adp , an increase in rate of oxphos , increase in consumption of o2"
   }
  ,
  {
    "question":"Define the term: PO2, PaO2, PvO2",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":" "
   }
  ,
  {
    "question":"Sketch the haemoglobin (Hb) dissociation curve and explain in general terms why changes in PO2cause Hb loading and unloading",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"treadmill vs byccycle(treafmill higher b=vo2 max , more difficult to get artifact free ecg  , bicycel , good ecg recording , easy bp recordigns , lower vo2 max ( 10 =% loower)) , step bench(only slighter lower vo2 than treadmil , deoendent on body mass and ones ability to lift it ) vs field teest(good for mass testing , prediction power abt vo2 max is least ) "
   }
  ,
  {
    "question":"List and explain the processes causing O2 delivery via Hb unloading in the capillary as a result of increased muscle VO2",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"muscle vo2takes in oxygen , po2 in cytoplasm decrease in muscl cell , concentration gradient from capillary to msucle cell , increase rate of diffusion , decrease concentration of o2 dissolevd in capillary blood , low p02 cause o2 unbinding from hb , more po2 in capillaryv (not 100%)"
   }
  ,
  {
    "question":"Explain the relationship between muscle VO2, rate of arterial O2 delivery, and rate of venous O2outflow",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"treadmill vs byccycle(treafmill higher b=vo2 max , more difficult to get artifact free ecg  , bicycel , good ecg recording , easy bp recordigns , lower vo2 max ( 10 =% loower)) , step bench(only slighter lower vo2 than treadmil , deoendent on body mass and ones ability to lift it ) vs field teest(good for mass testing , prediction power abt vo2 max is least ) "
   }
  ,
  {
    "question":" Define the terms: O2 content, CaO2  and CvO2 State the approximate value of CaO2  in a normal male",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"O2content = dissolved O2+ O2bound to Hb (i.e. total O2) "
   }
  ,
  {
    "question":"Using the Hb dissociation curve, and relationship between PO2 and dissolved O2 relationship, and O2 content, explain why PvO2 is lower thanPaO2",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"treadmill vs byccycle(treafmill higher b=vo2 max , more difficult to get artifact free ecg  , bicycel , good ecg recording , easy bp recordigns , lower vo2 max ( 10 =% loower)) , step bench(only slighter lower vo2 than treadmil , deoendent on body mass and ones ability to lift it ) vs field teest(good for mass testing , prediction power abt vo2 max is least ) "
   }
  ,
  {
    "question":" State and explain the derivation of the Fick principle of determinants of muscle VO2 [ VO2 =   blood flow x (CaCO2   - CvO2 ) ], and be able to use this formula to perform calculations.",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"oxygen content in aretrial - oxygen content in vein = muscle vo2 , content euqls blood flow times concentration (..."
   }
  ,
  {
    "question":"State the determinants of muscle O2 delivery. ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"treadmill vs byccycle(treafmill higher b=vo2 max , more difficult to get artifact free ecg  , bicycel , good ecg recording , easy bp recordigns , lower vo2 max ( 10 =% loower)) , step bench(only slighter lower vo2 than treadmil , deoendent on body mass and ones ability to lift it ) vs field teest(good for mass testing , prediction power abt vo2 max is least ) "
   }
  ,
  {
    "question":"Explain in general terms why muscle O2 delivery must equal muscle O2 demand during exercise",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"treadmill vs byccycle(treafmill higher b=vo2 max , more difficult to get artifact free ecg  , bicycel , good ecg recording , easy bp recordigns , lower vo2 max ( 10 =% loower)) , step bench(only slighter lower vo2 than treadmil , deoendent on body mass and ones ability to lift it ) vs field teest(good for mass testing , prediction power abt vo2 max is least ) "
   }
  ,
  {
    "question":"Describe the physical arrangement of the arterioles, pre-capillary arterioles capillary beds and venule in a skeletal muscle. ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"treadmill vs byccycle(treafmill higher b=vo2 max , more difficult to get artifact free ecg  , bicycel , good ecg recording , easy bp recordigns , lower vo2 max ( 10 =% loower)) , step bench(only slighter lower vo2 than treadmil , deoendent on body mass and ones ability to lift it ) vs field teest(good for mass testing , prediction power abt vo2 max is least ) "
   }
  ,
  {
    "question":"Explain how alterations in smooth muscle tone (contraction or relaxation) of the pre-capillary arteriole determines muscle blood flow",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"what about contraction by the cns At rest:•arteriole smooth muscle is tonicallycontracted !•muscle blood flow is low,During moderate exercise:•some relaxation of smooth muscle•muscle blood flow is moderately high , During intense exercise:•marked relaxation of smooth muscle•muscle blood flow is high"
   }
  ,
  {
    "question":"Describe locally-controlled vasodilation: Specifically list three possible muscle metabolites that may have a vasodilating action and explain how muscle metabolic rate regulates muscle blood flow",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"During exercise metabolic rate of skeletal muscle cells & RBCs  shear past endothelial cell and unload O2,Muscle cells, endothelial cells, and RBCs cells release various metabolites•which act directly on smooth muscle to cause them to relax , Thus muscle metabolic rate (which also rate muscle of O2consumption & unloading of O2from RBCs •causesn rate of muscle O2delivery , atp k pg no "
   }
  ,
  {
    "question":"Describe centrally-controlled vasoconstriction: Specifically  describe the innervation of vascular smooth muscle by the sympathetic nervous system and explain how increased sympathetic nerve activity causes vasoconstriction , action is global , ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"the arterioles of muscles, skin& visceraare innervatedby sympathetic afferent nerves ,exercise causes sympathetic nerve activity: , sympathetic fibresrelease Nadon smooth muscle , Nadcauses smooth musclecontraction,blood flow , when you go all the way up to vo2 max , amount of cnsoverides brat , muscle blood flow decrease  "
   }
  ,
  {
    "question":"Describe the most commonly used maximal test protocols and outline the advantages and disadvantages of each",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"modifed bruce ( treadmill) , used in cardiology clnicns ,balke treadmil test , constatn speed , increnented grade walking test 5.3 km /h and 1 percent grade increase per minute , incremental cycle protocol , incremental cycle testr at 50-60 rev /mincadence "
   }
  ,
  {
    "question":"Define indirect calorimetry and how it relates to energy expenditure",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"The measurement of expired respiratory gases to estimate substrate utilisation and energy expenditure, Relies on the law of conservation of energy to assume:fuel consumed = heat produced"
   }
  ,
  {
    "question":"Explain the differing effect on VO2 of modality, workload increments, analysis increments and stage duration",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"effect of modality on vo2 max treadmill running > cycling for vo2 max , (5% difference between mode will be less due to adaptation  , VO2increases smoothly in 1-min increments since the time to plateau during a new intensity is ~ <1min, compared to some ‘steady state’ in longer stages"
   }
  ,
  {
    "question":" explaint the fpur fearues of a max vo2 test ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"mode , increments , duration(8 -12 min is a common recommendation , However, a duration between   5 -26 min is also effective), criteria for maximum "
   }
 ,
 {
    "question":" Outline the criteria required for a VO2max test outcome, and how this compares to a VO2 peak test outcome",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"Primary criteria: Plateau in VO2 despite an increase in workload , Secondary criteria:•RER > 1.15 •HRmax≤ 10 bpm or ≤ 5% of the age predicted maximum•RPE of ≥19  , Traditional termination: △VO2of <2.1 ml/kg/min between stages , use verficiation if uncsure "
   }
   ,
   {
    "question":" Explain secondary criteria for vo2 max test : respiratory exchange ratio :ratio of co2 released to oxygen consumed , reflects anaerobic metabolism , excess co2 from lactic acid buffeeing , RER > 1.05-1.15 (depending on which source you use)(most reliable proboemmis range big) , heart rate (termination criteria , HRmax≤ 10 bpm or≤ 5% of the age predicted maximum) ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"Primary criteria: Plateau in VO2 despite an increase in workload , Secondary criteria:•RER > 1.15 •HRmax≤ 10 bpm or ≤ 5% of the age predicted maximum•RPE of ≥19  , Traditional termination: △VO2of <2.1 ml/kg/min between stages , use verficiation if uncsure "
   }
  
  
]




//input question bank output question now 

function getquestionfrombank(){
   console.log(questionbank.length)
  
   if (questionbank.length!=0){
       console.log(questionbank.length)
       var questiontopick = Math.floor(Math.random()*questionbank.length);
       let questionnow = questionbank[questiontopick];
       questionbank.splice(questiontopick,1);
       console.log(questionbank.length);
       window.questionindexnow = questionnow;
       
       console.log(window.questionindexnow)
       return questionnow;
       
      

   }
   else {

       //clear evrything 
       document.body.innerHTML = '';
      //creating master division for the page 
      var mastersection=document.createElement("section");
      mastersection.setAttribute("id","master")
      var title = document.createElement("section");
      title.setAttribute("id","title");
      title.innerText="Think you know lymedmea ?????......this is some of your misconcp=eptions"
      document.body.append(title);
      document.body.appendChild(mastersection);
      
      function array(){

       console.log(questioncorrectwronglist)
       let newarray=[]
       
       for(let i =0;i<questioncorrectwronglist.length;i+=2 ){
           newarray.push(questioncorrectwronglist.slice(i,i+2));
           console.log(questioncorrectwronglist.slice(i,i+2))
           console.log(questioncorrectwronglist.slice(i,i+2))
           console.log(i)
       
       }
       console.log(newarray)
       
       console.log(questioncorrectwronglist)
       return newarray
       
       
       }

       let newaa = array();
     console.log(newaa)
     
     
     for (let i=0; i<newaa.length;i++){
       var createwrapmaster=document.getElementById("master");
       var createwrap = document.createElement('div');
       createwrap.classList.add("masterwrap");
        createwrapmaster.appendChild(createwrap);

  console.log(createwrap)
   for(let j=0; j<2;j++){
       var createwrap=document.getElementById("master");
       var create = document.createElement('div');
       create.innerText= newaa[i][j]
       create.classList.add("final");
       createwrapmaster.appendChild(create);


   }
                                       }
      
      var mastersection=document.createElement("section");
      mastersection.setAttribute("id","end");
      mastersection.innerText="Well Done !!!"
      document.body.appendChild(mastersection)

      var mastrsectionlala = document.getElementById("end");
      mastrsectionlala.addEventListener("click",()=>{
          window.location.assign("index.html")
          console.log("end")
      })

      
      //get that list get every other 2 , then put them into one division , then display themon page as rows 


      return
       
       


   }

   
   
}

//only stored outputi have here is a random question i picked from question bank and i have deleted one question from bank 


function choicegenerator(){
    let choicelist=[];
    let currentqquestion = getquestionfrombank();
    let v =currentqquestion.choice;
    let answer = currentqquestion.answer;
    window.questioncurr = currentqquestion.question;
    window.explanation=currentqquestion.explanation;
    console.log(v)
    console.log(answer)
    
    
    for (let i =0; i<v.length;i++){
       choicelist.push(v[i]) 

    }

    console.log(choicelist);

    function randomize(){
       let defualt= []
       console.log(choicelist.length)
       let randomized =[];
       let outputarray=[];
       
      let randomnolength = choicelist.length;
      console.log(randomnolength)
      for (let i =0; i<randomnolength;i++){
          
          defualt.push(i)
         
      }
      console.log(defualt);
      
       let randomno = Math.floor(Math.random()*defualt.length);
       console.log(randomno)
       
       
  
  
      
    
      for(let i=defualt.length-1;i>-1;i--){
          console.log(i)
          let newran = Math.floor(Math.random()*i);
          console.log(newran);
         
         randomized.push(defualt[newran]);
         console.log(randomized)
     
         defualt.splice(newran,1);
         console.log(defualt.length)
         
      
  
  
      }
      console.log(randomized);
  
      
  
      for(let i=0;i<randomized.length;i++){
  
          outputarray.push(choicelist[randomized[i]])
  
      }
  
      console.log(randomized);
      console.log(outputarray)
      console.log(answer)
      return [outputarray,randomized,answer];
      
  
   }
   return randomize(choicelist);
   }
 
   


   
let choicerandom = choicegenerator();
let randomoutput = choicerandom[1];
let randomid = choicerandom[0];
let choiceanswer= choicerandom[2];
console.log(randomid,randomoutput,choiceanswer)






function newquestion(choicegenerator){
   var choiceselection = document.getElementsByClassName("choicetext");
   let randomid1 = randomoutput;
   let randomoutput1 = randomid;
   let selectedchoiceanswer= choiceanswer;
   let choiceid = choiceselection[0].id;
   console.log(choiceid)
  console.log(selectedchoiceanswer)
  questioncontainer.innerText= window.questioncurr;
  window.answer=selectedchoiceanswer;
   console.log(randomid,randomoutput)
   
   

   

   
   
for(let i=0; i<choiceselection.length;i++){
   
   choiceselection[i].id= randomid1[i];
   choiceselection[i].innerText=randomoutput1[i];
   console.log(choiceselection[i].id)
   console.log(choiceselection[i].innerText)

}

console.log(choiceselection)
}

//###################################################
//CLICK TO GENERTAE NEW QUESTION    

let correctanswercount =0;
submmitbutt.addEventListener("click",()=>{
 console.log("enteringggg")
   
   let choicerandom = choicegenerator();
let randomoutputclick = choicerandom[1];
let randomidclick = choicerandom[0];
 
console.log(randomoutputclick);
console.log(randomidclick)

window.answer = choicerandom[2];
console.log(window.answer);
console.log(window.questioncurr)
questioncontainer.innerText= window.questioncurr;

for(let i=0; i<choiceselection.length;i++){
   
   choiceselection[i].id= randomoutputclick[i];
   choiceselection[i].innerText=randomidclick[i];
   console.log(choiceselection[i].id)
   console.log(choiceselection[i].innerText)

}
  
   console.log("click")
})

//add event listener to the button 
for(let i=0; i<choiceselection.length;i++){
   
   choiceselection[i].addEventListener("click",()=>{

       console.log(window.answer);
       
       
  
      if(window.answer==choiceselection[i].id){
          console.log("correct answer")
          correctanswercount++;
          console.log(correctanswercount);
          let container1= document.createElement("div")
          let p = document.createElement("div");
          let mask = document.createElement("div");
          let green = document.createElement("div");
          green.addEventListener("click",()=>{
              //remove element style and word 
           p.classList.remove("answerexplanation")
           p.innerText=null;
           mask.classList.remove("mask")

           green.classList.remove("green");
           green.innerText=null;
           //skip ton next element 
           function getnew(){
               console.log("enteringggg")
                 
                 let choicerandom = choicegenerator();
             let randomoutputclick = choicerandom[1];
              let randomidclick = choicerandom[0];
               
              console.log(randomoutputclick);
              console.log(randomidclick)
             
              window.answer = choicerandom[2];
              console.log(window.answer);
              console.log(window.questioncurr)
              questioncontainer.innerText= window.questioncurr;
             
              for(let i=0; i<choiceselection.length;i++){
                 
                 choiceselection[i].id= randomoutputclick[i];
                 choiceselection[i].innerText=randomidclick[i];
                 console.log(choiceselection[i].id)
                 console.log(choiceselection[i].innerText)
             
             }
                
                 console.log("click")
             }
             getnew();
          })
          
          //add emphasis on skip nutton 
          submmitbutt.style.color= "orange";
          submmitbutt.style.opacity=1;

          p.innerHTML= (window.explanation);
          p.classList.add("answerexplanation")
          mask.classList.add("mask")
          green.classList.add("green");
          
          green.innerText="Good Job , next "
          mask.style.cursor="not-allowed"

          
         
         document.body.append(container1);
         container1.appendChild(mask);
         p.appendChild(green);
         container1.appendChild(p);
        
          console.log(choiceselection[i].parentelement)
      }
      else{
          //remember the wrong question 
       console.log(window.questionindexnow.question)
       console.log(choiceselection[i]);
       let a =window.questionindexnow.question;
       let b = choiceselection[i];
      questioncorrectwronglist.push(a,b.innerText);
       console.log(questioncorrectwronglist)
       let p = document.createElement("div");
       let mask = document.createElement("div");
       let red = document.createElement("div");
       p.innerHTML= (window.explanation);
       p.classList.add("answerexplanation")
       mask.classList.add("mask")
       red.classList.add("red");
       
       red.innerText="try again  "
       mask.style.cursor="not-allowed"

       
      document.body.append(p);
      document.body.append(mask);
      p.appendChild(red);
      red.addEventListener("click",()=>{
       //remove element style and word 
    p.classList.remove("answerexplanation")
    p.innerText=null;
    mask.classList.remove("mask")

    red.classList.remove("red");
    green.innerText=null;
    
    
   })
      
      }

   })
}


//prepare the array for display 

function prepare(questioncorrectwronglist){
   let newlist=[]
   for(let i=0; i<questioncorrectwronglist;i+2){
       newlist.push(questioncorrectwronglist[i])

   }


}
prepare(questioncorrectwronglist);


newquestion(choicegenerator);








    










   




