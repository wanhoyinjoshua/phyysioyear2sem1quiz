var choiceselection = document.getElementsByClassName("choicetext");
var submmitbutt= document.getElementById("submit");
var questioncontainer = document.getElementById("questioncontainer")

var questioncorrectwronglist =[];




//question bank

 
var questionbank = 
[
  {
      "question":"give me the definitions of manual handling ",
      "choice":[
      "",
      "",
      "",
      ""
    ],
      "answer":"0",
      "explanation":"activity require the use of force exerted by a person to lift , lower , opush , pull , carry or otherwise move something else . "

  }
  ,
  {
   "question":"What is model law ? and what is the model work health safety act andhow does it do  its job ",
           "choice":[
            "",
            "",
            "",
            ""
           ],
   "answer":"0",
   "explanation":"to secure the health and safety of workers and workplaces : by asking duty holders and employees to minimie risk , providing a fair and effective representation , consultation and cooperation , encourage provision of advice , education and training. securing complaince with the act .  "

  }
  ,
  {
   "question":"are there different regulator in veery state (whs ) , whats the one called in NSW , ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ],
   "answer":"0",
   "explanation":"Safework nsw  "

  }
  ,
  {
   "question":"please describe the role of Safework nsw , ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ],
   "answer":"0" ,
   "explanation":"employers and businness have legal obligations under work health and safety laws related to , mnaging harzards and risks , due diigence . duty of care , duty to concult , register of injuries , injuries at work , return to work program "
  }
  ,
  {
   "question":"What are the safety responsibilities of an employee ?",
   "choice":
   [
    "",
    "",
    "",
    ""
   ],
   "answer":"0",
   "explanation":"must take resaonable care fo themselves and not do anything that would affect health and safety ofothers , follow any resaonble health and safety instructions from employer , (work safely , follow instructions , ask if not sure how to safely perform , use ppr , report injuries and unhealthy situations "
  }
  ,
  {
   "question":"How to make sure someone can work safely ?",
   "choice":
   [
    "",
    "",
    "",
    ""
   ],
   "answer":"0",
   "explanation":"shown to use any equipment that you will be operating , given personal protective equipment and shown how to wear it properly , shon around the workplace , entry exit points  fitst aid areas , know emergency evacuation proceduresa , and shown the emergency evacuation points , introduced to ummediate supervisor , health and safety representative (HSR), know safety policies , and procedures , in place , how to report problems or injuries ,know everyones role in the workplace "
  }
  ,
  {
   "question":"factsheet in nsw ??at health level , at hosptial level ?",
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
   "question":"Why is it important to practice safe manual handling ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ],
   "answer":"0",
   "explanation":"no of workers is the gretest , 12 percent of the workforce is injured , fal,ls , biggest nechanism of injury , hit by objects , sound pressure , mental stress, indrect cost , time off work , wont return to work "
  }
  ,
  {
   "question":"What is the top cause of injuty in the healthcare industry ? ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ],
   "answer":"0",
   "explanation":"lifting people or moving beds and trolleys , slips and falls in high traffic areas , your mental stress, occupational violence and aggeession"
  }
  ,
  {
   "question":"What is a code balck ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ],
   "answer":"0",
   "explanation":"secutity id called in the ed , similar to what a fall is to a patient , cideblack hjappens to the staff , the worst possible threat to the staff , ice and intoxication of alcohol , cognitive impairment , age care ward "
  }
  ,
  {
   "question":"claims , serious claims ",
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
   "question":"safe work month october ",
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
   "question":"workplace msk disorders , how ? which one is the most comon ?",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"acute , repetitve , conseqqurnce of a mh injury may extend beyond the individual , psychological , the back , neck , shoulder and upper limb , prevalanxee of lbop of nurses , 71 percent compared with 37 percent in usa  "
  }
  ,
  {
   "question":"Sats of injuries in physiotherapists in queensland ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"91 percent of physio reported at least one workplace msk injury duing their career , 48 percent is lower back pain even thumb, neck and upper back as well . 18 percent has left because of the msk pain , higher oprevalnace of injury is commonly seen in the younger age group , becuase they dont ask for help , no experience , sports physio 3 times more thumb pain ,thumb ossteoarthtitis , privayte is wrist  pedirtrics is knee  "
  }
  ,
  {
   "question":"What are some of the job related risk factors for physiotherpahy",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"lifting , trasfer , adopt unusual positions , unanticipated movement by patient , reprtitve nature "
  }
  ,
  {
   "question":"principles that underpin safe manual handling ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"minmizr the liffting andlowering force , avoid need for bending , reduce pshing pulling holding , size and surfacr characteristics , stabiloity m and weight of object , vertical , horizontaal ovments involeved , workplace klayout , work postures   "
  }
  ,
  {
   "question":"How to have risk management ?",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"first steop , risk identification to look for risk factors , determine the level of risk for each risk factor , aim the evaluate ( mehtods of storage ) ( light weight is wasit heigh , heavy is floor)  elmite reduce ,, evaluare the process , "
  }
  ,
  {
   "question":"what is a safe manual habdling checklist ? work environment ? individual factor ?",
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
   "question":"how to manual handle people , us ethe risk management model . ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"(any measures you can do to mitigate that risk ?) you have to think , wwhat is the task , what are the risk to this being a successful manamor , have i been properlyh trained , what harm do they pose to client , how can i eliminate or control each risk factor , was the process successful ? what would i repeat or do diffeently in the future  , eeven if you knwo the eqipmnt , you need to knwwo the specifics "
  }
  ,
  {
   "question":"give me the model to identify risk ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"working environment, task , load(patient uncooperative , lack insight , muscke spasms, tonicity , hydro theraphybwet , working environmen uneven floor , reduced lighting  ) , individual capability () , "
  }
  ,
  {
   "question":"be able to perform and describe the task of lying to sitting ,explain the procedure ,   ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"(makee sure foot control is in close vicinity )(get the patient to help as much as possible ) position the patient side lying to the bed , and with knees bent , elevate the bed to about 45 degrees , hang the patients legs over the side of the bed , one hand on patients hip and another hand on patients shoulder  "
  }
  ,
  {
   "question":"be able to assist the patient to sit to stand ...",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"when i say rock , you rock forward , hen i say stand ,you are going to stand up ,,   "
  }
  ,
  {
   "question":"explaining lying to wheelchair ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"(raise bed a bit slightly before standing up , foot footplates off the wheel chair  ) ask patient to sit for 2 minutes before moving them so that patient doesnt feel dizzy . with their feet on the ground explain procedure to patient , move the wheelchaor as close as you can to the patient , make sure the bed is locked , the chair is locked , ut ont he trasfer belt , say wheni say rock , roxk yourself back and forth and when i say stand , stand up for me , thn ask the patient to put their hand on the handle before sitting ddown  "
  }
  ,
  {
   "question":"should we adjust the manueir according to the tallest person or the shortest person ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"shortest  "
  }
  ,
  {
    "question":"How to use walking belts (pelican belts)?",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"not there to lift , but to control ,overhead bars , bed rails(no two bed rails can be used simulatanouesly ) ... "
   }
   ,
  {
   "question":"side board whenn",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"when the transfer is pern=manant , "
  }
  ,
  {
   "question":"What is slide sheet ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"help transfer , "
  }
  ,
  {
   "question":"What is mechanical aids and what ius the criteria of a good mechanical aid ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"standing aid , alings(full sling , ) , hover mats , hover jack(very expensive ) reduce the no of ppl handling , be aeasyu to operate , be capable of lifting the load saly , be capable of being used in the intended location , be in sound condition and properly maintained ,"
  }
  ,
  {
   "question":"bariatric patient ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"bariatric is an internationally accepted term applied to patients whose weight exceeds recommended body mass index , and where bnody size restricts mobility , health or access to avaliable services or eqipment .(over 120kg)(250kg)super batriactric  "
  }
  ,
  {
   "question":"explain what is hazardous manual task and describe some of them ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"patient transfer , repositioing in a wider bariatric bed , managing heavy limbs , take blood pressure during iv cannualtion , moving patient forward during chest observation , managing adipose tissueb ,  "
  }
  ,
  {
   "question":"innovatuve to engage the population is  the purpose of a health campagin , ",
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
    "question":"What is the leading cause of death in australia ?",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"number one is coronary heart disease(male and female) ,lung is second in male , stroke is third in male , dementia is second in female , stroke is third in female   "
   }
  ,
  {
    "question":"mortality cause explaindifferent age groups snd explain whagt is disiability adjusted life year  ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"coronary heart disease is frim 25 to 44 , copd is  65 ,   "
   }
  ,
  {
    "question":"explain pattern of comormidities across the age population  ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"what is the most common comormidities , 65 above ( back and cardiovascular disease)"
   }
  ,
  {
    "question":"explain the burden on society in terms of the cost of different disease ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"280 ppl develop r=type 2 eveyr day , "
   }
  ,
  {
    "question":"cost of living with a chronic condition ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"time cost , not just physcil , family , mean time spend to manage the condition (26 per month)"
   }
  ,
  {
    "question":" how many years longer will a person live if ia 50 year old maintains a oderat elevel of exercise , healthy body mass index , annd healthy diet , avoid ciug , alcohol ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"typically lic=ves 50 more years ,  "
   }
  ,
  {
    "question":"explain the different models for prevention please ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"primoirdial prevention ( policy) , primary (beofre showw disease) , secondayr ( showing signs may have miy not have ) , tertiary (defintly hv the disease )"
   }
  ,
  {
    "question":" differenc between inqeuity and inqeuality ",
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
    "question":"list the roles of physiotheraphy in primary prevention",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"increase physical activity , reduce sedentary behaviour , counselling , injury prevention , smoking cessation, ,reduce obesity  , falls prevention program , "
   }
  ,
  {
    "question":"is most of what physios do part of the secondary prevention ??",
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
    "question":"give me some examples of primary , seconday and tertiry prevention ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"primary is policu=y , secondary is , tertiary is any management rogramme , support groups , or any vocational rehabilitation programs to retrain workers "
   }
  ,
  {
    "question":"Can tertiary prevention help reduce hospotal admissions ? and what is the potential problem?",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"pulmonary rehab is so effecive , but problem is low attendence rate . heapf of hospital avoidance program,  "
   }
  ,
  {
    "question":"please describe health literacy ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"60 opercent has low health literacy ,...the degree of the individual has the capacity , to process , basic helath information to make a decision , there are three types , basic , being able to read and write(maybe provide other language ) , communicative interactivbe( the ability to look at the data and ask qquestions ) , critical health literacy(able to make decision)  "
   }
  ,
  {
    "question":"Describeanother set of literacy  ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"prose literacy , ability to read , document literacy , ability to filll a d=form , numeracy  , math , dosing , problem solving , what if i have  afever what do i do now , when age increase , low level increase , "
   }
  ,
  {
    "question":"describe the impact of low health literacy ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":" hospitalizationinceasen and ed increase . not understnd dosage , higher risk , forget to take meduction  , moe likely to have risky ifestyles , higher has vaccinations , take mefi==dciation correctl , to ealthcare system, miss appointments , treatment adherence ,  "
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
      "explanation":"vo2 increase as both co increases and ca cv difference increase , increse linearly  "
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
      "explanation":"vo2 increase as both co increases and ca cv difference increase , increse linearly  "
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
      "explanation":"vo2 increase as both co increases and ca cv difference increase , increse linearly  "
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
      "explanation":"vo2 increase as both co increases and ca cv difference increase , increse linearly  "
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
      "explanation":"vo2 increase as both co increases and ca cv difference increase , increse linearly  "
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
      "explanation":"vo2 increase as both co increases and ca cv difference increase , increse linearly  "
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
      "explanation":"vo2 increase as both co increases and ca cv difference increase , increse linearly  "
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








    










   



