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
   ,
   {
    "question":" Be able to explain what the variable total peripheral resistance (TPS) means in terms of the cardio vascular system ",
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
    "question":"  Be able to state the mathematical relationships a) relating MAP, CO and TPR and b) relating CO, HR and SV, and be able to perform calculations with these relationships",
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
    "question":"  Sketch the relationship between TPR and power (i.e. exercise intensity) and explain the physiological events causing the shape of the relationship. (Note: numeric values for TPR are not examinable)",
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
    "question":"Explain why the changes in TPR with increasing exercise intensity are a threat to MAP",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"in exercise , tpr decrease necause of muscle locally controled vsodilation  this decrease tpr , and if co isnt raised , map will decease  "
   }
   ,
   {
    "question":"Describe and explain the responses of the autonomic system to exercise. Specifically explain these responses in the context of actions to prevent a fall in MAP during exercise at increasing power. Include baroreceptor input your answer.",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"at beginning of exercise , central commamnd increase map set point , baroreceptor now below set pint , causes error signal , causes increase in peripheral sympathetic activity , vasoconstriction to viscera , skin , non exercisng muscle ., also cause  increase in cardiac sympathetic activity , increase in hr , contractility , decrease vaus , this increase co , also increase co by frnak starling mechanism ,  "
   }
   ,
   {
    "question":"Sketch the relationships between active force and muscle length (sarcomere length) for both skeletal and cardiac muscle. Indicate the approximate physiological range for cardiac muscle and explain the significance of the shape of the relationship in this region. (Note: numeric values are not examinable)",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"at beginning of exercise , central commamnd increase map set point , baroreceptor now below set pint , causes error signal , causes increase in peripheral sympathetic activity , vasoconstriction to viscera , skin , non exercisng muscle ., also cause  increase in cardiac sympathetic activity , increase in hr , contractility , decrease vaus , this increase co , also increase co by frnak starling mechanism ,  "
   }
   ,
   {
    "question":" Describe the events occurring during diastole: Specifically a) describe what happens to cardiac muscle cell length, define the term EDV and explain the determinants of EDV. Sketch and explain (in general terms) the shape of the relationship between diastolic volume and ventricular filling pressure. (Note: numeric values are not examinable)",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"at beginning of exercise , central commamnd increase map set point , baroreceptor now below set pint , causes error signal , causes increase in peripheral sympathetic activity , vasoconstriction to viscera , skin , non exercisng muscle ., also cause  increase in cardiac sympathetic activity , increase in hr , contractility , decrease vaus , this increase co , also increase co by frnak starling mechanism ,  "
   }
   ,
   {
    "question":" Sketch the relationship between EDV and SV, and be able to indicate in the relationship how and increase in EDV will effect SV",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"at beginning of exercise , central commamnd increase map set point , baroreceptor now below set pint , causes error signal , causes increase in peripheral sympathetic activity , vasoconstriction to viscera , skin , non exercisng muscle ., also cause  increase in cardiac sympathetic activity , increase in hr , contractility , decrease vaus , this increase co , also increase co by frnak starling mechanism ,  "
   }
   ,
   {
    "question":"Describe the steps in the Frank Starling mechanism starting with an increase ventricular filling pressure and ending with an increased SV",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"at beginning of exercise , central commamnd increase map set point , baroreceptor now below set pint , causes error signal , causes increase in peripheral sympathetic activity , vasoconstriction to viscera , skin , non exercisng muscle ., also cause  increase in cardiac sympathetic activity , increase in hr , contractility , decrease vaus , this increase co , also increase co by frnak starling mechanism ,  "
   }
   ,
   {
    "question":"In general terms explain the overall purpose (or benefit) of the Frank Starling mechanism",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"↑ filling of the heart ....‘automatically’ causes ↑ cardiac output(via ↑ SV)"
   }
   ,
   {
    "question":"  In the context of exercise describe the steps, starting with muscle vasodilation that result in increased CO via the Frank Starling mechanism",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"causes muscle vasodilation ...... causes muscle blood flow... causesvenous return , Right heart*:... causes RV filling pressure... causes RV EDV=  muscle length during diastole  ... causes active force next systolevia Frank Starling mechanism... causes RV SV , causes LV filling pressure... causes LV EDV=  muscle length during diastole  ... causes active force next systole via Frank Starling mechanism... causes LV SV... causes cardiac output to systemic circulation   "
   }
   ,
   {
    "question":"Describe and explain the responses of the autonomic system to exercise. Specifically explain these responses in the context of actions to prevent a fall in MAP during exercise at increasing power. Include baroreceptor input your answer.",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"at beginning of exercise , central commamnd increase map set point , baroreceptor now below set pint , causes error signal , causes increase in peripheral sympathetic activity , vasoconstriction to viscera , skin , non exercisng muscle ., also cause  increase in cardiac sympathetic activity , increase in hr , contractility , decrease vaus , this increase co , also increase co by frnak starling mechanism ,  "
   }
   ,
   {
    "question":" Sketch the relationships between active force and muscle length (sarcomere length) for both skeletal and cardiac muscle. Indicate the approximate physiological range for cardiac muscle and explain the significance of the shape of the relationship in this region. (Note: numeric values are not examinable)",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"Cardiacmuscle length –tension relationship•From sarcomere lengths ~1.5 to 2.0 mm: the potential to develop active force rises rapidly•Increase length past ~ 2.0 mm prevented by connective tissue ‘bag’ wrapping outside of heart : pericardium "
   }
   ,
   {
    "question":" Describe the events occurring during diastole: Specifically a) describe what happens to cardiac muscle cell length, define the term EDV and explain the determinants of EDV. Sketch and explain (in general terms) the shape of the relationship between diastolic volume and ventricular filling pressure. (Note: numeric values are not examinable)",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"left ventricle relax , lv pressure decrease , pulmonary vein presure constant , left av valve opens , flow from pulmonary vein to lv , lv passively fills due to the vein filing pressure , final ampunt after filling (determinants fillinfg pressure , ventricular wall compliance ), end diastolc volume ,  "
   }
   ,
   {
    "question":"Sketch the relationship between EDV and SV, and be able to indicate in the relationship how and increase in EDV will effect SV",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"curve increase at first then level off , slope is steeper at first then level off as edv increase . "
   }
   ,
   {
    "question":"Describe the steps in the Frank Starling mechanism starting with an increase ventricular filling pressure and ending with an increased SV",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"Amount of filling during diastole depends on:•filling pressure  •ventricular wall compliance (i.e. ‘stretchiness’),increased diastolic volume , increase length of individual cardiac muscle scell , if it begins contraction at an increased length , force of contractionof systole increase , stroke volume increase .  "
   }
   ,
   {
    "question":"In general terms explain the overall purpose (or benefit) of the Frank Starling mechanism",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"at beginning of exercise , central commamnd increase map set point , baroreceptor now below set pint , causes error signal , causes increase in peripheral sympathetic activity , vasoconstriction to viscera , skin , non exercisng muscle ., also cause  increase in cardiac sympathetic activity , increase in hr , contractility , decrease vaus , this increase co , also increase co by frnak starling mechanism ,  "
   }
   ,
   {
    "question":"In the context of exercise describe the steps, starting with muscle vasodilation that result in increased CO via the Frank Starling mechanism",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"at beginning of exercise , central commamnd increase map set point , baroreceptor now below set pint , causes error signal , causes increase in peripheral sympathetic activity , vasoconstriction to viscera , skin , non exercisng muscle ., also cause  increase in cardiac sympathetic activity , increase in hr , contractility , decrease vaus , this increase co , also increase co by frnak starling mechanism ,  "
   }
   ,
   {
    "question":"Be able to state the mathematical relationship relating whole body VO2, CO, CaO2 and CvO2 – i.e, the Fick relationship – and be able to explain the relationship. Be able to perform calculations with the Fick relationship.",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"at beginning of exercise , central commamnd increase map set point , baroreceptor now below set pint , causes error signal , causes increase in peripheral sympathetic activity , vasoconstriction to viscera , skin , non exercisng muscle ., also cause  increase in cardiac sympathetic activity , increase in hr , contractility , decrease vaus , this increase co , also increase co by frnak starling mechanism ,  "
   }
   ,
   {
    "question":"Be able to explain the determinants of VO2max in terms of the  Fick relationship",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"interaction of three factors , increase in cardiac output , increase in cao2 , decrease i cvo2  "
   }
   ,
   {
    "question":"Sketch and explain the relationships between a) CvO2 and exercise intensity and b) CaO2 and exercise intensity, and indicate and describe the changes in a-v O2 difference (Note: numeric values are not examinable)",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"The muscle VO2ii)As exercise intensity ... muscle removes O2from capillary at higher rateiii).. so CvO2decreases with exercise intensity , The CvO2goes from rest ~ 100 ml O2/ L blood down to 30 ml O2/ L at max exercise , ungs + pulmonary circulation do an excellent job keeping CaO2approx. constant , a-vO2 difference with intensity , max ~ 85% extraction of O2from arterial blood !"
   }
   ,
   {
    "question":" Sketch and describe the approximate shapes of the relationships between a) LV EDV and intensity b) LV ESV and intensity, c) SV and intensity, d) HR and intensity and e) CO and intensity. (Note: numeric values are not examinable). Briefly be able to explain the changes in EDV, ESV, SV, HR and CO",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"hr and co increases linearlyh  , lv edv increases , end systolic decreases , systoic volujme will increase then platueau at sv max   "
   }
   ,
   {
    "question":" Sketch the approximate shapes of the relationships between a) SBP and intensity b) MAP and intensity, c) DBP and intensity. In terms of the sympathetic nervous system explain the changes in MAP with exercise intensity.",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"MAP stay approx. constantActually tends to slightly with intensity ( MAP ‘setpoint’ is reset to higher value during exercise) Note SBP goes up a lot, but MAP not so much.Recall formula for MAP = DBP + 1/3 (SBP-DBP) ... means MAP more influenced by DBP than SBP"
   }
   ,
   {
    "question":"  Sketch the relationship between VO2 and power, and explain this relationship in terms of the Fick principle",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"vo2 increase as both co increases and ca cv difference increase , increse linearly  "
   }
   ,
   {
      "question":"   Describe and explain primary causes of lower VO2max  in an average woman compared to man, in absolute terms (L/min). Include in your answer reference to: COmax, HRmax, SVmax, LVEDV, and heart size (total heart volume - THV). Identify sub-components of the Fick principle that are similar between men and women.",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"smaller heart size , absolute vo2 max of typical young adult female is 35 percent lower compared to male , cardiac output is less because stroke volume is less , heart rate is the same , cao2 in female is less than male as well   "
     }
     ,
     {
      "question":" Sketch and explain the cross-sectional relationship between THV and VO2max for subjects ranging from sedentary to elite athlete. ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"it is a linear relationship , heart size is a dominant factor determining vo2 max   "
     }
     ,
     {
      "question":" i) Explain why VO2max  measured relative to body weight (ml/kg/min) is more similar between men and women compared absolute units (L/min), and ii) explain reasons why differences still remain comparing VO2max relative to body weight between men and women.",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"difference is because of different heart size and difference in concentration difference , when you normalize it , you take away the conributon of heart size , sinxe hat size is correlated to body size and man ususlly ahs bugger frames than women , when absolute difference is 35% , relative is 25% , btu why difference still occur , female has higher percent fat compared to male , "
     }
     ,
     {
      "question":"Sketch (graph) the relationship between CaO2 and CvO2 from rest to maximal exercise for a typical man and woman",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"Background: from rest to VO2max•CaO2remains approx. constant•CvO2progressively decreases ,At VO2max•CaO2lower in female•CvO2similar, CaO2lower at rest in female... female ~ 180 ml O2/ litre blood  ... male ~ 200 ml O2/ litre blood , because conc of hb is lower in female ,. "
     }
     ,
     {
      "question":"Explain primary causes of the decline in average VO2max with age. Identify sub-components of the Fick principle that are similar between young and old.",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"heartrate decrease and stroke volume is th same , heart rate declines with age , possibly de to age related changes , in the sa node , or heart conductive system , training doesnt prevent or minimize decline , reduction in hr max is primary reason vo2 max decrease with age . "
     }
     ,
     {
      "question":"Sketch and explain the cross-sectional relationship between CO max and VO2max for subjects ranging from those with chronic disease to elite athlete. ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"vo2 max is limmited by oxygen delivery , o2 delivert is deined as co max x cao2 , "
     }
     ,
     {
      "question":"Sketch and explain the relationship between change in COmax and change in VO2max for a typical endurance training program (3-12 months). (Note: Numeric values not examinable for specific groups such a frail elderly, males with CHF, etc.). In general terms describe what are the similarities and differences for changes in COmax and change in VO2max for a typical endurance training program comparing: men and women, young and old, health and those with chronic disease.",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"Endurance training COmax(and so capacity for O2delivery)... and this in the main factor explaining training VO2maxwithin the sameperson  "
     }
     ,
     {
      "question":"Describe and explain the primary causes of increased VO2max with endurance training. Include in your answer reference to: COmax, HRmax, SVmax, LV ESVat max , LV EDV at max. Identify sub-components of the Fick principle that are similar between pre and post-training.",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":" , increease in left ventricular filling after endurance exercise is due to increased blood volume(rapid 1 week , from sedentary to trained ) eccentric cardiac hyperetrophy , if sufficient adaptaation is enuf , after endurance training , increase in co max and vo2 max are relatively modest , evn with long term training . endurance trainng cause increase in max co , however endurance training doesnt increase hr max , it decreases slighgtly with training .cardiac output increae entirely di=ue to increase in  stroke volume max increase . no chnage in lv end systolic volume max , increase in co completely due to increase in end diastolic poressure , There is an filling of the left ventricle during maximal exercise, after endurance training  "
     }
     ,
     {
      "question":"State the direction of change (increase, constant, decrease) in blood volume, plasma volume, total red cell volume and [Hb], occurring in the first few weeks of a training program",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"total blood volume increase , increase in plasma volume and red bllod cell volume , total hb increase but concc of hb remain constant .  "
     }
     ,
     {
      "question":"Step-by-step explain the cardiovascular mechanisms by which a training-induced increase in blood volume causes an increased COmax and VO2max  in a previously sedentary subject.",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"vo2 increase as both co increases and ca cv difference increase , increse linearly  "
     }
     ,
     {
      "question":" Describe the effect of plasma volume expansion on SV and VO2max  in a previously trained subject.",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"Expanding plasma volume by 400 ml .......  in trainedyoung adult men had no effect on submaximal exercise stroke volume or VO2 max. "
     }
     ,
     {
      "question":" Briefly describe and interpret the experimental evidence that shows that increases in blood volume causes the increased COmax and VO2max after short-term training (i.e. Montero et al. 2015)",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"sedentary subjects did 6 weeks endurance training. •post training ... SVmax, COmax,VO2max & ,blood volume. •no change in LV mass. •After the post test  .... withdraw blood from the subjects equal to the training increase in blood volume. •After blood withdrawal the subjects performed a 2ndmax test. •SVmax, COmax,VO2max returned to pre training values, indicating that in blood volume caused training increases."
     }
     ,
     {
      "question":" Define the terms: eccentric cardiac hypertrophy and concentric cardiac hypertrophy, and describe the physiological stimuli causing each",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"vo2 increase as both co increases and ca cv difference increase , increse linearly  "
     }
     ,
     {
      "question":" tep-by-step explain the cardiovascular mechanisms by which eccentric cardiac hypertrophy causes an increased COmax  and VO2max",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"in LVEDV during maximal exercise →SVmaxvia the Frank Starling mechanism →COmax→VO2maxResult: (physiological) Eccentric hypertrophy•LV mass•LV chamber volume •LV wall thickness•constant ratio: wall thickness to chamber volume "
     }
     ,
     {
      "question":" Sketch or describe the pattern of change of VO2max and LV mass in response to 12 months of progressive intense endurance training.",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"VO2maxincreased 18% from 0 –6 monthsthen no further increase from 6 moto 12 mo... despite 2x training dosage•LV mass 20% from 0 –6 monthsthen no further increase from 6 moto 12 mo... despite 2x training dosage"
     }
     ,
     {
      "question":"Describe what happens to values of CaO2 at max and CvO2 at max comparing before and after a typical training program",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"vo2 increase as both co increases and ca cv difference increase , increse linearly  "
     }
     ,
     {
      "question":" Identify approximate values for increases in VO2max – in units of l/min and as a % change – for a typical endurance training program (3-12 months)m",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"Average percent change pre-raining to post –trainingVO2maxand COmax.... similar percent increases with training: 11-13%  for ~1-3 month training , a-vO2diffmaxshows only a small change "
     }
     ,
     {
      "question":"  integrated model of how endurance training increases VO2max and why this should increase performance",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"vo2 increase as both co increases and ca cv difference increase , increse linearly  "
     }
     ,
     {
      "question":"Describe the variability in change in VO2max for a group of people performing an identical endurance training program, and in general terms define the non responder, and approximate the proportion of in a population.",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"•On average, subjects  VO2max by  400 ml O2/min•About  8% of subjects are high responders (improved by more than 700 ml/min)•About 7% of subjects = non-responders (improved by less than 100 ml/min)"
     }
     ,
     {
      "question":" In terms of the general chemical relationship for oxidizing fats and carbohydrates (CHO), sketch and explain the relationship between: i) rate of fats and CHO oxidation (combined) and power and ii) VO2 and power.",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"vo2 increase as both co increases and ca cv difference increase , increse linearly  "
     }
     ,
     {
      "question":"Explain why someone with a low VO2max will have a lower exercise capacity compared to someone with a substantially higher VO2max.",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"vo2 increase as both co increases and ca cv difference increase , increse linearly  "
     }
     ,
     {
      "question":"Comparing people with different VO2max values, compare and explain their VO2 values when exercising at the same steady state submaximal power",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"vo2 increase as both co increases and ca cv difference increase , increse linearly  "
     }
     ,
     {
      "question":"Define the terms absolute VO2 and relative VO2, and explain the application of these concepts to different client and exercise mode scenarios",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"vo2 increase as both co increases and ca cv difference increase , increse linearly  "
     }
     ,
     {
      "question":" Explain why endurance training may result in reduced effort to perform activities of daily living (ADLs) for an older person, or someone with chronic disease, but result in no change in effort for a young adult.",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"vo2 increase as both co increases and ca cv difference increase , increse linearly  "
     }
     ,
     {
      "question":" Explain why immediately post bed rest an older person, or someone with chronic disease, may require a structured exercise program but a young adult may not.",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"vo2 increase as both co increases and ca cv difference increase , increse linearly  "
     }
     ,
     {
      "question":"  Sketch the approximate time course of change in VO2max for a previously trained person when they stop training. Explain the causes of the decreased VO2max with detraining, and sketch the approximate time course for the components determining VO2max during detraining.",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"everything decrease except heart rate(decrease by about 15 percent ) , Most rapid drops are in 1st few weeks ....then more gradual decrease Training adaptations are more than ½ gone by 3 week of detraining  "
     }
     ,
     {
      "question":"  Name two representative muscle oxidative enzymes and the sketch the approximate time course of change in concentration of these enzymes for a previously trained person when they stop training.",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"citrate synthase , [SDH] decrease by 40 percent , "
     }
     ,
     {
      "question":" Sketch the approximate time course of change in VO2max over one month of bed rest. Briefly – in regard to exercise capacity - explain why it is important to minimize the duration of bed rest.",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"Progressive linear in 1stmonth of bedrest (later does eventually plateau out)1stmonth: i.e. 2x duration →2 x VO2max  "
     }
     ,
     {
      "question":" Explain the causes of decreased VO2max during bed rest. ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"lv mass also progressively decrease during bed rest : a study suggest cardiac output decrease by 26 percent , stroke volume decrease by 28 oercent , heart rate increase sliht;y , so major cause is decrease of stroke volume , and thats because of decrease in end diatolic volume , and it is because if decrease in blood vloume , blood volume progressively decreases during the 1st3 week of bedrest , decrease in blood volume causes decrease in decreased filling pressure thus lead to decrease in ventricular filling , less frannk starling , decreased stroke volume ,  "
     }
     ,
     {
      "question":" Describe the approximate time course of recovery of blood volume and LV ventricular mass during recovery (re-ambulation) following bed rest. ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"blood volume bounces back in 3 days of re-ambulation , Re-ambulation causes LV mass ... however recovery is slower than recovery of PV•so exercise capacity may only fully recover weeks after bed rest "
     }
     ,
     {
      "question":"  Describe barriers that people may commonly identify as reasons not to do regular exercise ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"vo2 increase as both co increases and ca cv difference increase , increse linearly  "
     }
     ,
     {
      "question":"  Sketch or describe the relationship between: all-cause mortality, and death due to cardiovascular disease, cancer, and diabetes mellitus relative to activity level. Discuss the practical implications of these relationships. ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":" Exercise (specifically the AMOUNT of exercise) has a general effect on progress of many different diseases , similar in all cause mortality and specific ddidease ...increase in physical activity results in reduction of all cause mortality , dose response , the more the better  "
     }
     ,
     {
      "question":"State the predicted reduction in all-cause mortality if a previously sedentary person were to regularly exercise for i) 15 min brisk-walking/day or 5 min running/day or i) 105 min brisk-walking/day or 25 min running/day. ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"15 min brisk walk or 5 min runnign per day : 10 percent reduction i all cause mortality , cause an extensio of 3 more years , 105 , is 35 percent reduction in all cause mortality   "
     }
     ,
     {
      "question":"Understand concepts of critical dose potency of exercise",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"Dose Potency: The strength of exercise training at a particular dosage to elicit gains of the desired outcome."
     }
     ,
     {
      "question":"Know and be able to describe the seven basic principles of exercise prescription and their seven modifiers from the ACSM Position Stand for exercise in healthy populations",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"15 min brisk walk or 5 min runnign per day : 10 percent reduction i all cause mortality , cause an extensio of 3 more years , 105 , is 35 percent reduction in all cause mortality   "
     }
     ,
     {
      "question":"Know and be able to describe the seven basic principles of exercise prescription and their seven modifiers from the ACSM Position Stand for exercise in healthy populations",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"15 min brisk walk or 5 min runnign per day : 10 percent reduction i all cause mortality , cause an extensio of 3 more years , 105 , is 35 percent reduction in all cause mortality   "
     }
     ,
     {
      "question":"Explain whether exercise can be “fractionized” or broken up over a single day and if this is better than one exercise session a day",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"15 min brisk walk or 5 min runnign per day : 10 percent reduction i all cause mortality , cause an extensio of 3 more years , 105 , is 35 percent reduction in all cause mortality   "
     }
     ,
     {
      "question":"Understand whether exercise intensity and duration can be “traded off”",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"15 min brisk walk or 5 min runnign per day : 10 percent reduction i all cause mortality , cause an extensio of 3 more years , 105 , is 35 percent reduction in all cause mortality   "
     }
     ,
     {
      "question":"Understand the usefulness of interval training as a prescription tool, and acknowledge the circumstances where it may be beneficial or not beneficial”",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"15 min brisk walk or 5 min runnign per day : 10 percent reduction i all cause mortality , cause an extensio of 3 more years , 105 , is 35 percent reduction in all cause mortality   "
     }
     ,
     {
      "question":"  Be able to correctly prescribe exercise intensity using heart rate, perceived exertion (2 ways) and by work rate”",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"15 min brisk walk or 5 min runnign per day : 10 percent reduction i all cause mortality , cause an extensio of 3 more years , 105 , is 35 percent reduction in all cause mortality   "
     }
     ,
     {
      "question":"Be able design a complete exercise prescription to improve aerobic fitness in a healthy person covering all the seven basic principles of ExRx, based on that individual’s response to a cardiorespiratory fitness test and using the ACSM MetCalc equations”",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"15 min brisk walk or 5 min runnign per day : 10 percent reduction i all cause mortality , cause an extensio of 3 more years , 105 , is 35 percent reduction in all cause mortality   "
     }
     ,
     {
      "question":"Know the ACSM Position Stand for the use of Lifestyle Physical Activity for weight loss”",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"15 min brisk walk or 5 min runnign per day : 10 percent reduction i all cause mortality , cause an extensio of 3 more years , 105 , is 35 percent reduction in all cause mortality   "
     }
     ,
     {
      "question":"Know how the 7 “modifiers” (eg. age, gender, etc) may change the nature of exercise prescription given to a healthy person”",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"Memonic : FITT frwquency , intensity , time , type of exercise , volume , pattern and progression  , modifiers include age , initial fitness , disease , downfall fo exercise program is fear to progress to vigorous    "
     }
     ,
     {
      "question":" Understand the importance of exercise progression for training outcomes, and acknowledge when ExRx principle hierarchy should be revised to suit the patient goals”",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"mortality and intnsity has a dose response relationship ,as training statu sincreases , intensity become the limiting factor , if the patient main preferenc eis performance , the  first increase intensity , duration then frequency , if its health , then frequency , duration and then intensity   "
     }
     ,
     {
      "question":" Be able design a complete exercise prescription to improve aerobic fitness in a healthy person covering all the seven basic principles of ExRx, based on that individual’s response to a cardiorespiratory fitness test and using the ACSM MetCalc equations”",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"there ar ea number of wuestions to consider : what level of fitt to sstart at ? what exercise is suitable ? how do i initiaally presribe intensity ? ho do i progress the program ? how do i help the client to adhere ?   "
     }
     ,
     {
      "question":" Briefly explain in terms of overall energy loss and gain how high energy electrons harvested from bonds in carbohydrates drive ATP resynthesis in oxidative phosphorylation (OxPhos)”",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"95 percrnt of atp to powe is by oxs phos , oxphos use energy derived from stripping electrons from fats and carbs , then use that energ to drive ap resynrrhesis , oxs phos is a two stage appraich   "
     }
     ,
          {
      "question":"  In overview, briefly describe and explain the 2 stages of OxPhos – the electron transport chain (ETC) and ATPsynthase – and explain how they are coupled together.”",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"stage 1 , electron transport chain , high energy electron tranffere a;ong  aseriwes of h hydrigen pumps embedded in the mitocchondrial membrane , energy is lost by electorns sued to create a h concntratipon gradient across a membrane , stage 2 : atp snhase , h flows back down its gradient thru a protein machoine , atp aynthase , h flow drives a turbine in the protin , drives the energy consuming process , adp to atp . "
     }
     ,
     {
      "question":"For the ETC explain in terms of energy loss and gain how high energy electrons create the H+ gradient and explain the role of NADH and O2 in the ETC”",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"electron transport chain has 3 protein complexes , physiclaly close to each other , embedded in the inner mitochhndirla wall , e carrier nadh trasfer a paor of high enengy e to the ffirst pump , the e p=move thru the pump, lose poetntial energy m that energy is used to pump h ions , creating a concentration gradient , after passing thru the third pmp , the now low energy e need to be dispoased of somehow , oxygen accept it , to form water , o2 keeps etc running , electorn transport chin needs two things to function ,  a constant supply of o2 , and nadh , when the gradient s fully pumped up , nadh and o2 consummption will cease , unless the h graidetn is drained   "
     }
     ,
     {
      "question":" Starting with glucose and fatty acids describe in general terms the steps involved in NADH supply to the ETC”",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"source of high enegy electron is from ch bond in glucose and fatty acid we eat as food , fatty acids first imported in mitochondria , glucose slplit , by glycolysis outside litochondira , then pyruvate imported into mitochondira , both pyruvate and fatty acids chipped down to 2 carbon segment , acetyl co a , this is fed into cirtirc acid cycle , high energy stripped from acetly by breaking ch bonds , then trasnported by nadh to etc  "
     }
     ,
     {
      "question":" For the ATP synthase in terms of energy loss and gain how the H+ gradient drives ATP resynthesis, and describe how the ATP synthase works”",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":" outsude the iner membrne of the mitochondira , hydrogen ions reallly want to go back inside , but cant , because it is only one way , the only cgannel is that atp synthase , when h moves thry that channel , change shape  ... drives a turbie in the atp synhtase , force of turbine movement is transferred t the catylytic site ,  "
     }
     ,
     {
      "question":" i) Explain what happens to the ATP produced by OxPhos in muscle during exercise and ii) explain the supply of substrate to the ATP synthase.”",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"atp produced by atp synthase diffues out of mitochondira , substrate for atp suynthase ( adp) diffuses int the mitochondria , and binds with atp synthase active site . "
     }
     ,
     {
      "question":" Explain how the rate of OxPhos is regulated in muscle the transition from rest to exercise”",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"15 min brisk walk or 5 min runnign per day : 10 percent reduction i all cause mortality , cause an extensio of 3 more years , 105 , is 35 percent reduction in all cause mortality   "
     }
     ,
     {
      "question":" In overview, briefly describe and explain the components causing an increase in exercise capacity following endurance training.”",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"changes in cv struture (increase in blood volume , exxectric), and changes muscle struture (increase in mitochondria , ) ,   "
     }
     ,
     {
      "question":"Sketch* and describe the relationship between cardiac output (CO) and power before and after endurance training for a typical subject. Compare and explain the CO values before and after training at a given submaximal power.”",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"pre training : co increase lineraly with power up to co max , post training : co to subma increase linear with power as well , same line ,,exercise at 75 w still need same vo2 , need same oxygen delivery to the muscle  , however training caused increase in cardiac output max , so incrase in vo2 max lwad to increase in max power   "
     }
     ,
     {
      "question":" Sketch* and describe the relationship between blood [lactate] and power before and after endurance training for a typical subject. Compare [lactate] values before and after training at a given submaximal power, and explain why cardiovascular adaptations of change in VO2max cannot explain the changes in [lactate]”",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":" pre training : blood lactate increase non linearly with power , driven by non linear incerease in amp , post traaining , blood lactate level lower at every submaximal power , primary cause of decrease in fatigue during submaxumal exercise   "
     }
     ,
     {
      "question":"  Describe in general terms how changes in muscle mitochondrial capacity can be assessed.”",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"mitochondria are placed at intervals along the length of each myofibril , if there is a high or low concentration of any one mitochondrial protein , this indicates all mitochondrial proteins will be present at that relative concentration level , therefore w=we can measure by measuing increase in concentration of a representative mitochondrial protein/ enzyme , or increase in relative volume mitochondira occupy in muscle fibre ( mitochondrial content )  "
     }
     ,
     {
      "question":" State – approximately – typical values for i) the change in mitochondrial capacity and ii) VO2max for an endurance training program (MICT, HIIT, SIT#) for a male or female healthy young adult, or middle-aged or elderly client who are healthy or who have a chronic disease.  (Assuming adequate training dosage)”",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"avaerrga chgange for trainng group is 41 percent , un volume density of mitochondria , increased mitochondria in trained muscle is the universal findign for all people doing endurance trainign , as long as dosage is sufficient , including healthy mae , female , young and old , even obses , from a review , aaverge value for change of enzyme cone  is 29 percent , and change in vo2 max is 12 percent ,sprint interval training is not included     "
     }
     ,
     {
      "question":"  Sketch* and describe the relationship between muscle [mitochondrial protein] and time for i_ 3 months of endurance training, ii) long-term maintenance training and iii) detraining.”",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"see linear increase up to at least 3 months , the longer u train , the more mitochondria u get , eventually plateaus out , plataue level depends on weekil training volume , ( frequency times tume ), also by genetic variation , to summarize  for the first three months , longer u train , more miochondria u get , maintainence training maintains this increase , stop will cause it to drop back to sedentary levels , when u reach 60 days of detraining , yr mitochondrial level drcrease to dedentary level to baseline ,   "
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








    










   




