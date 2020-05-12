var choiceselection = document.getElementsByClassName("choicetext");
var submmitbutt= document.getElementById("submit");
var questioncontainer = document.getElementById("questioncontainer")

var questioncorrectwronglist =[];




//question bank

 
var questionbank = 
[
  {
      "question":"human cant walk automativally , need to learn .normal sequence of milestones , can only be achieved after a certain period of time ",
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
   "question":"how segment of the bodya dn moment of inertia change as we age , and recite piagets development of change ",
           "choice":[
            "",
            "",
            "",
            ""
           ],
   "answer":"0",
   "explanation":"sensirimotor , pre operationla (reversibility , volume , sauage has bigger volume , water mark , ), concrete operational , formal operations ,   "

  }
  ,
  {
   "question":"perceptual activity is limited when motor skill is impared  ",
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
   "question":"less skileed resembles push like , simulatanoeuys movement rather than sequrence ",
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
   "question":"compare and contrast skilled vs unskilled movement ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ],
   "answer":"0",
   "explanation":"skilled : small no of segent ,distal seegments dont lag , stiff movement of joints , lack of sequencing , small range of motion .. skiled : large no of segments , segments lag and whip , free movements of joijts , proximal to distal sequencing , large range of motion "
  }
  ,
  {
   "question":"define and differentiate learning and memory ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ],
   "answer":"0",
   "explanation":"learning is process by whihc we aquire knowledge from the external world and put it into memory "
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
   "question":"define motor memeory ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ],
   "answer":"0",
   "explanation":"persistence of the aquired capabilioty to perform something"
  }
  ,
  {
   "question":"define learning ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ],
   "answer":"0",
   "explanation":"neural serquence of events followed by biochemical "
  }
  ,
  {
   "question":"explain the model for learning ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ],
   "answer":"0",
   "explanation":"sensory memeory , short term memeory , long term memeory (short term memeory store(iconic memery) , sbort term memeory (working memeory(7))) , if info in short term is not process ( reheased , ... it s lost , into long term requires synthesis of orotein , short term only needs modification of proteins , "
  }
  ,
  {
   "question":"components of long term memeory ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ],
   "answer":"0",
   "explanation":"procedural() , declarative ( semantic , eposodic )(processed by hippocampus "
  }
  ,
  {
   "question":"explain the HM case ",
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
   "question":"straegties to enhab=nce memory peeformance ",
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
   "question":"in everyday activitues , most individuals strive for effortless excution , as soon as they attain an acceptable evel of [erformance , they start to sutomate , what is proactive interference ? explain the stroop interference , ad how to correct the error in skill excution  ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"91 percent of physio reported at least one workplace msk injury duing their career , 48 percent is lower back pain even thumb, neck and upper back as well . 18 percent has left because of the msk pain , higher oprevalnace of injury is commonly seen in the younger age group , becuase they dont ask for help , no experience , sports physio 3 times more thumb pain ,thumb ossteoarthtitis , privayte is wrist  pedirtrics is knee , ,how t correct , three ways , freeze techniquwe , old way new way , video self modelling  "
  }
  ,
  {
   "question":"to reduce error rates , please explain the swiss cheese model , defemse in deoth ",
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
   "question":"learning can occur in the automatic system without ivolvement of the consious system ( ijmplicit learnign) , learninng can be facilitated by trusuting the autonomic system ",
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
   "question":"an internal focus constrians the motor system ",
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
   "question":"What is focal dystonia ?and what is yips , compare and contrast the two of them ",
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
   "question":"divide task into three parts : predictability ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"preparatory(three compoenent , relaxation , visualization , focus )  , functional , confirmatory "
  }
  ,
  {
   "question":"there is an optimal speed for different mode of walking , each type has ots own optimal spoeed , for human , have optimal strike , smaller striek is more efficient  ",
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
   "question":"what is the neural change and energetic change when you are becoming more skilled  ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"effferent neural signal , duation of cycle of activation decrase , reduced contionus activation of muscle , lower magnitiude of sugnal (magnitue, frequency , cocnsitency , rest periods in between . o2 consumption decrwease, hr decerase , economy of moveent increase  "
  }
  ,
  {
   "question":"summarize changes from skilled to unskilled ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"efficienty and economyu , preferred modes of movement coincide wit optimal energy efficienty , chaneges in muslce recuiment , muscle activity  skilled mototr performance , lower global enbergy cost   "
  }
  ,
  {
   "question":"different fucntion between left and right brain , only 75 percent of baby has the same arm preference  ",
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
   "question":"define speed accuracy trade off and give three theories why it happen, bahviour response to instructions , what happens wen you manipulate the distance o ftaget and the sizze of target , and define  t he index of diffuculty , expalin fitts law , x axus andy axis ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"iteration coreecction model(inital impulse phase , a current control) , impulse varaibility  , optmisd sub movement model  "
  }
  ,
  {
    "question":"define motor learning and explain the three stages of learningn ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"motor learning is the permanent increase in performance arising as a result of practice and experience "
   }
   ,
  {
   "question":"compare and contrast consious and automatic control ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"consious is slow , serial , voluntary  , and attention demanding , and automatic is the opposite , but it is a continum , is walking  into a lecture hall automatic ? yea it is   "
  }
  ,
  {
   "question":"why do movements become automatic ? ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"consiouness can be freed it is very energy expensive , dont want to waste resoucres , perception is for action  "
  }
  ,
  {
   "question":"compare and ocntrast procedural and declarative knowledge , automated procedual knowledge and declaarative stored in two different area of the brain  ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"case of HM , how to explain , unable to hold information in memeory , procedual contorl of skills can occur without concouius attention , automaticity , and people want to autommate the skill as quickly as posssibel "
  }
  ,
  {
   "question":"What consititutes good goal setting ?",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"setting specific and difficult goals leads to better performance than less specific goals or easy goals or no goals  , and what is the advantage of that ?, well four allow trainee to focus on his activities help regulate effort that is directed towrds these activities ,m help maintainvigilance in attempting to reach the goals , serve as a referent  aginsat which achivemen can be compared , and explain three type of goals , outcome goals , process goals , performance goals , explain cars , challengin , attainable , realistic , specific     "
  }
  ,
  {
   "question":"explain rpinciples f goal setting in a pysio context  ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"specificry , feedback , difficulty,   acceptance   "
  }
  ,
  {
   "question":"define two types of motivation , and how extrinsic rewards undermine childrnes;s intrinsic motivation  ",
   "choice":
   [
    "",
    "",
    "",
    ""
   ]
   ,
   "answer":"0",
   "explanation":"intrintisc , doing task for its own sake ,overjustification  "
  }
  ,
  {
    "question":"explain what cognitive evaluation theory ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"extrinisnc reward to control decrease intrinsic , but extrinsic reward to validate increase  "
   }
  ,
  {
    "question":"brain has limitied capacity for processing  inputs , and for generating approriate response , therefore , how do we allocate attention resources if it is limited and how do we get around with a limited attention capacty  ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"we allocate by three rules , aloocate to ensure we can complete one activity allocoate attention accordign to our enduring dispositions allocate according to novelty of stutin , implications for these , only inform pl wt they should attend to , remove other disttractions , and keep the environment clear , an important outcome in motor learning is reduction in amountof capacuty thats needed o perform the skill, and consequrn freing up of capacity for other task to b eperformed , we need all our attenion to be allocated to one thing   "
   }
  ,
  {
    "question":"  explain the relationship between arousal and psycholohiccal activation ,and is there only one type of relatioship ? and what arousal affect and how to incoprate all this into goal asetting and motivation   ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"arousal is a general physiological and psycological ctivation of the organism that varies on a continum of deep sleep to intense excitement , compare and contrast between trait and state anxiety , traint is an aquired predisposition to perceive ..to be more dangerous , state is momnetm to moment changs in feeling of nerbousness , worry , multiple u curves exist , fine and complex motor control require low arousal level , gross and simple one reuire fine motor control  "
   }
  ,
  {
    "question":"explain the attentional quadrants , and explain what consitiutes optimal performacne , ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"borad external , borad internal , narrow internal , narrow external , switching between different quadrants ,  "
   }
  ,
  {
    "question":"regurgitate everything about feedback , is augmented feedback nevcsar after the skill is autpmatized ?",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"proprioceptive intrinsic feedback may drop belowconious awareness , movement control changes from hghly dependent on feedback early on in learning t( cognitive and associative phase ) to being relatively feedback independent late in learning "
   }
  ,
  {
    "question":"video feedback doesnt change what ( rhtymi.. coordination )",
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
    "question":"explain the guidnce hypothesis  ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"a hypothesis oindicating role of augmented feedback in learning is to guide performance to be correct during practic e, however if provided too frequnely , can cause the learner to develop a dependency , and therefore perform prroly when its not avalable "
   }
  ,
  {
    "question":" when will overlearning works and when will n=it not work? is there any difference between overlearning after 1 week or immmeidtae overlearning and is the more te better?",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"works when its dynamic balamcne , and procedural skills, no difference between refresher and immeduate , and max benefit at 50 % 100 and 200 sem to be useless  "
   }
  ,
  {
    "question":"define mssed practice and ditributed practice , why is distibuted better ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"the rest period between sessions, its less fatigue , massing of practice may diminsh amount of cognitive effort used on eeach trail , beetter consolidtion "
   }
  ,
  {
    "question":"complexity and organizational part , what strageties to reduce complexity , fractionization , segmentation , sijmplification ",
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
    "question":"when will verbal instructions hinder you  ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"verbal instructions hurt when instruction is directed towards specific compoennt rather thna the entire seuence and when emphasis is laid on the most undesribale outcome of an inended action and instrucyions focus on wha not to do t"
   }
  ,
  {
    "question":"what is the action effect hypothesis ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"implications m direct attention to intednded outvome rather than on movement itslf  "
   }
  ,
  {
    "question":"describe transfer of learningn ,positive transfer deonds oon the degree of simnilairyt between two movement and two performan ce context , negative happens when a perceptully familiar situation requirs a movement hats different form the one kearned first ",
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
    "question":"please list the common measures of health .",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"life expectancy ,mortality , morbidity , comorbidity , incidence , prevalence , disability - adjusted lifeyear , years of life lose , years lived with diaibility , self assessed health status  "
   }
  ,
  {
    "question":"Explain different models of health please ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"medical model , biop[sychosocial model , socio ecological model , "
   }
  ,
  {
    "question":" explain the socio ecological model in more detail  ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"imagine the onion peel , personal , interpersonal , organizational , community , public policy "
   }
 ,
 {
    "question":"Give me the definition of health promotion",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"the process of enabling people to increase control over their own health , any planned combination of educational , political , regulatory , and organizational supports for actions and onditions of living conducive to the health of individuals , groups  , or communities . "
   }
   ,
   {
    "question":" Explain the WHO principles for health promotion",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"health promotion is context driven , integrates who health defintion , by addressing the multi dimensional nature of health , its physical , social , and mental dimeniosn , underpins , overall responsibilityh of the state in promoting health , all levels of governemnt has a responsibility and accountabiliity for protecting maintaining health , good health as public good , participation is core principle in promoting health  "
   }
   ,
   {
    "question":"Explain the otta wa charter and explain how it relates to health promotion to smoking and obesity  ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"building healthy policy(NHMRC obesity guidelines sku cantee ) , create supportuve environment , strenttheing community action(swaap it dontdrop it how do you measure up , develop persoonal skills , re orienting health services . "
   }
   ,
   {
    "question":" is obesity only increasing in adult population? ttur or false ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"increasing in both the adult and children population "
   }
   ,
   {
    "question":"How can we as physios be involved in healh promotion , explian sing the ota wa charter fraamewor ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"build healthy policy ,,, create supportive environemnts , occupi , community action , workforce , "
   }
   ,
   {
    "question":"What is activity based fundig?",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"pay for the service you recieve , when hospital is quiter , funding goes , so why promote ,how to congragulate a hosptal that has progrmas successful in reducing hospital vivist    "
   }
   ,
   {
    "question":"explain different types of behaviour change models , remeber the accronm ,",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":" HSCTT , HEALTH belief model (if patient know the actual consequence of the disease , then patient might be more inclined to do sth about it (perceived threat of the disease , example of this (back book))), social learming cohg=gintive model (notion of self efficacy , more than jusst confidence , but capable  ,not just abou confidence but also when you are out with friends...more confident , both personal and environemntal factors ,example that uses thiss , moving on  ), com b , transtherotical change  , theory of reasoned action (if a patient )  "
   }
   ,
   {
    "question":"explan thepry of resoned action ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":" its connection with alcohol consumption , self efficacy on alcohol  bahaviour is a function of behaviour intention , and behaviour intention is a function of attitude towward behaviour and subjective norm , "
   }
   ,
   {
    "question":" explain the com-B model ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"capability (not just physical  but also psycological ), motivation(self efficacy ) , opportunity(have resource , social norm ), all affects behaviour , education , persuasion , incentiviation , coercion , training , restriction , modelling   "
   }
   ,
   {
    "question":" transtheortial ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"cues foe posiive change , cues for negative change ... also related to self efficacy ... there can be relaspe use to assess , contemplatio , preparatioj , active chabge , maintanece , how effective (50 50 ) , assessment , treatment goal   "
   }
   ,
   {
    "question":"compare and contrast three methods of research in terms of the stance , meaningn , and approach ",
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
    "question":"How many types of qualitative studis are there ?",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"informing review ,, enhancing e=reviews , extending reviews , suppleementing reviews "
   }
   ,
   {
    "question":"describe the typical process of conduting a qualitative reserach ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"define research question , design study  , seek permossson and access to subjecs , pilot data collection , collect data , analyze ad devlop models , write up  "
   }
   ,
   {
    "question":"saturating of data , small numbers important have they eahced data saturation ",
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
    "question":"give me different examples of qualitatiuve methods ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"strutured interviews , open edned interviews , focus groupn , biogrqphy and autobiography , visual methods , open ended proformas , realist tales , observations (observe w physio does ) "
   }
   ,
   {
    "question":" what are he mroe common ways to do qualitative research ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"ethnography(exploring decision making process in delivery of physio) , semi stuturted interviews(example in lecture , ppl with ra who successfully maintain pa are motivated by a desire to manage symtoms , resist functional declins and maintain health and independence ) , narrative interviews(exaample , experience of living with stroke to inform self management interventions , five themes , changed bodies , relationshsips , changing rols , identities , relative experience , help design meaningfuk personalized self managenen interventions that could be inegrated into daily life ,  ) , focus group (lumbar spinal stenosis seeek education and care focused on self management to understand factors that are important to ppl w ls ,3 themes are identiffied, emotional repsone desire for edu , and motivation to pursue edu , desire for individualized care based on self management  ) "
   }
   ,
   {
    "question":"difference in mindset between th9ose who are admitted to hospital often compared to those who can self manaeg ",
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
    "question":"HOw to critically appraise a qualatiative reserach ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"how to examione to assess validity , results , relavance , ocnflict of research ,assess credibility , whether it make sende , transferability  , anothe ptient group? dependability ? confirmability can replicate ? position of reaeher ? who are they lecturer ask student  "
   }
   ,
   {
    "question":"What questions you need to ask yourself when assessing a qualittive research ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"use the casp checklist firest ! !! was the sample used in the study approrpiate? was the data collected app ? was he dtata analyze dapap  , can i transfer the date to another groyp , does the study adequately address potential ethial issue ? is what the researcher ddid was clear ?  "
   }
   ,
   {
    "question":"Tell me th eexact definition of physiotheraphy ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"physio is a process that seeks to enable ppl with imparriments , activity limitations and participation restrictions , to reach their optimal pysical or social funnctiona level , hru partnership with familu providers and community "
   }
   ,
   {
    "question":"whhta is the biggest implication of qualitatiuve reseach to physio ? ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"the implementation of evidence based pracice ,can inform physio on how to facilitate adherence and improve effectivenesss of intervention"
   }
   ,
   {
    "question":"put physio in emergency department ",
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
    "question":"How can qualitative research helps phyIO ?",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"discuss patients condition prognosis empathetically  , assessing health literavy anf paient understanding , disucss acceptability and self management , facilitating adherence , patient empowerment and self efficacy . "
   }
   ,
   {
    "question":"self management is useless if patient dont use , findings , those who frequrntly present to hospitel consider their health to be better than those self manage , self manage acceot the condition , self manage reli well so dont present , seld fdenial in the hospital group , best thing to go is hopital , think it is external , self manahe , accept but also have control     ",
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
    "question":" self management versus self care ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"self care is looking after yourself to prevent a disease while self management is trying to mitigate thta impact ."
   }
   ,
   {
    "question":"Why parint doesnt adhere to self management ",
    "choice":
    [
     "",
     "",
     "",
     ""
    ]
    ,
    "answer":"0",
    "explanation":"five main factors , social /economic related(enables want to get back to sport , barrier no  time ) , condition related (painful , can relieve pain), theraphy related , healthcare team and system related (instructions too complex , desire to please the physio ), patient related (too tired , self efficacy ), "
   }
   ,
   {
      "question":" all cause mortality risk is a curvlinear relationship according to levl of physical activity or fitness",
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
      "question":" physical inacitivuiyt is the no 4 reason of death ,risk factor for getting hronic disease  ",
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
      "question":"What are th ebenefits of phhysical activity ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"redice colon cnacer , breast cancer , osteo diabitese, coronoary  , mentla health "
     }
     ,
     {
      "question":"being active , inspite of weight is beneficial ...",
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
      "question":"are australian suffciently active ? no ...",
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
      "question":"What are the physical activity guidelines ?",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"150 min of moderte physical  actiivty , vigorous half as much  , resistance 1 session per week at least , break up sitting time  "
     }
     ,
     {
      "question":"how we can promtoe physical activity ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"whole of school , transport policy ...promote and prevent , welling being  "
     }
     ,
     {
      "question":"how confident physio are to promote physical actitivy in provatye practice ? ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"50 percent ofphysios encouraneg more thn 10 patients per week , 33 oercent can name th eopa guideline , 90 percent thought it is feasible  "
     }
     ,
     {
      "question":"is behaviour education to promote exercise effective ? ",
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
      "question":"what primary care intervention  work for increasing physical activity ?",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"one on one couselling , self dorected , supervised or unsuperviesed , telephone(get support)by nsw  , self monitoring ? "
     }
     ,
     {
      "question":"What are some of he primary care onterventions that work to promote actve lifestyle ",
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
      "question":"primary care and 5a",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"assess , advise , agree , assit , arrange "
     }
     ,
     {
      "question":"dog ownershhip and physical activity ? , do prior to pulmonary rehab ",
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
      "question":"please recite the tutorial guidelines ",
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
      "question":" wHAT is sedentary behaviour?",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"anything thaats below mets 1.5 , "
     }
     ,
     {
      "question":"concept of incidental activity , ",
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
      "question":"how to objectvely measure sedentary time ?",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"accelerometers , objective measurement of sedentary time , self repoeted sittingtime ,  most (57 % ) is sedentary  "
     }
     ,
     {
      "question":"more active increase all cause mortality , increase sitting , however active , increase yr ll cause mortality ",
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
      "question":"if replace one hour of sitting with one hour of exercise , then impove your hazard ratio , ",
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
      "question":"How sitting is accumulated is also improtant , the more you break up , the more ",
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
      "question":"thing about policy is whether you are targeting the right group of people ",
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
      "question":"is activity based activiy working aall positive ? positive impact on interaction m communciation work perfomanc , no , privacy  concentration equivocal impact on physica and mental .   ,  ",
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
      "question":"impact on msk discomfort , reductions in msk symotoms , ",
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
      "question":"the need to normalize behaviours . impact of education on breaking up sedtanry tiem , standing desk and control biggest change is education and desk , education onlyh a little a ",
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
      "question":"post stroe spend so littl time moving m we create an enviroment tto force ppl to sit , ",
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
      "question":"What is the cause of obesity ??",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"measured using body mss indez , most commonly used , enerygy intake greater than energy expenditure , social norms too , militaty family assigned to high obesity rate , --- around the world , africa , australia 30 percent is obeses"
     }
     ,
     {
      "question":"prevalence of obseity in australia ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"v30 opercent of ppl r onses , two in three , 1 in4 children  "
     }
     ,
     {
      "question":"list some effective stragieties for weight loss ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":" national performance benchmark  , try to increase , prevent obseity in children , whts more effective , healthy eating , sessions for pnysical activity , part of school week , healrhy canteen ,create environment , support teachers to implenment ,"
     }
     ,
     {
      "question":"exercise effectiveness obesity ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"even in the absence of weight loss , exercise can reduce blood pressur e "
     }
     ,
     {
      "question":"using transtherotical in weight loss ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"assessment , .... medication , effective to lose small to medium weight loss , surgery , can lead to greater loss f weight compareed o short term,,reduction on comorities ,  "
     }
     ,
     {
      "question":" guidelines on nuttrition , ive guideline ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"wide variety , maintain healthy weight , lmit intake of food contains saturated fat , opromote breastfeding , good food hygeine , "
     }
     ,
     {
      "question":"role of promary care in obesity  ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"whole ofsociety approach , start at chidlren , or vefore the child is born ,  giv more resouces equity ..."
     }
     ,
     {
      "question":"cigarettrs has not always been perceived at bad ,  ",
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
      "question":"actual impact of smoking ,  ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"2/3 lifetime smoker wil die from a disease caused by their smoking  "
     }
     ,
     {
      "question":"give me some benefits of smoking cessation",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"within 20 min , heart rate and blood pressure drop , 12 hours , co leveml in blood drop to normal , 2 ro 12 weeks, circulation improves and lung function increases , one to 9 months , coughing and shotness of breath wil; apper , 5 years , risk of stroke decease , 10 yuears , riask of lung cancwr drop , 15 years , risk of coronoary heart disease is tht of a non smoker ,   "
     }
     ,
     {
      "question":"quit at 60 , still give you 3 years of life expectancy ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"within 20 min , heart rate and blood pressure drop , 12 hours , co leveml in blood drop to normal , 2 ro 12 weeks, circulation improves and lung function increases , one to 9 months , coughing and shotness of breath wil; apper , 5 years , risk of stroke decease , 10 yuears , riask of lung cancwr drop , 15 years , risk of coronoary heart disease is tht of a non smoker ,   "
     }
     ,
     {
      "question":"14.5 percent of people smoke , outer regional and remote aread tend to smoke more , aborginal stend to smke more , almost one third have been diagnosed as having mntal health disordeer ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"within 20 min , heart rate and blood pressure drop , 12 hours , co leveml in blood drop to normal , 2 ro 12 weeks, circulation improves and lung function increases , one to 9 months , coughing and shotness of breath wil; apper , 5 years , risk of stroke decease , 10 yuears , riask of lung cancwr drop , 15 years , risk of coronoary heart disease is tht of a non smoker ,   "
     }
     ,
     {
      "question":"smaller baaby ?? reason to smoke,, why then nicotine is addictive , actucate nicotine receptors in the brin , the faster the delic=vdery of ncototine to th brain , the greater the effect , take 6 to 10 sec  ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"within 20 min , heart rate and blood pressure drop , 12 hours , co leveml in blood drop to normal , 2 ro 12 weeks, circulation improves and lung function increases , one to 9 months , coughing and shotness of breath wil; apper , 5 years , risk of stroke decease , 10 yuears , riask of lung cancwr drop , 15 years , risk of coronoary heart disease is tht of a non smoker ,   "
     }
     ,
     {
      "question":"improved sense of taste and smell, dun wanna guv u somking because the f=gain weight ...explain more , ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"within 20 min , heart rate and blood pressure drop , 12 hours , co leveml in blood drop to normal , 2 ro 12 weeks, circulation improves and lung function increases , one to 9 months , coughing and shotness of breath wil; apper , 5 years , risk of stroke decease , 10 yuears , riask of lung cancwr drop , 15 years , risk of coronoary heart disease is tht of a non smoker ,   "
     }
     ,
     {
      "question":"no of smokers in 55 to 65 more has more t=s okers ...",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"within 20 min , heart rate and blood pressure drop , 12 hours , co leveml in blood drop to normal , 2 ro 12 weeks, circulation improves and lung function increases , one to 9 months , coughing and shotness of breath wil; apper , 5 years , risk of stroke decease , 10 yuears , riask of lung cancwr drop , 15 years , risk of coronoary heart disease is tht of a non smoker ,   "
     }
     ,
     {
      "question":"strageties , either behavioral ,or oharmological, try behaviour forst ,breif opportunity advice is imprtant to kerry , increasing self efficacy , use in conjucntion ,   ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"within 20 min , heart rate and blood pressure drop , 12 hours , co leveml in blood drop to normal , 2 ro 12 weeks, circulation improves and lung function increases , one to 9 months , coughing and shotness of breath wil; apper , 5 years , risk of stroke decease , 10 yuears , riask of lung cancwr drop , 15 years , risk of coronoary heart disease is tht of a non smoker ,   "
     }
     ,
     {
      "question":"pharmacotheraphy : nicotine repacment , varenicin , bupropan , cuyctine , e cigaretes  , nicotine repacemnt caan be rovided to pregnant womenr , ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"within 20 min , heart rate and blood pressure drop , 12 hours , co leveml in blood drop to normal , 2 ro 12 weeks, circulation improves and lung function increases , one to 9 months , coughing and shotness of breath wil; apper , 5 years , risk of stroke decease , 10 yuears , riask of lung cancwr drop , 15 years , risk of coronoary heart disease is tht of a non smoker ,   "
     }
     ,
     {
      "question":"three drusg you need to know , Champiz Tabex(not avavin opbs) Zyban  ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"within 20 min , heart rate and blood pressure drop , 12 hours , co leveml in blood drop to normal , 2 ro 12 weeks, circulation improves and lung function increases , one to 9 months , coughing and shotness of breath wil; apper , 5 years , risk of stroke decease , 10 yuears , riask of lung cancwr drop , 15 years , risk of coronoary heart disease is tht of a non smoker ,   "
     }
     ,
     {
      "question":"hwta is normal walking , walk at 11 monthes of age ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"within 20 min , heart rate and blood pressure drop , 12 hours , co leveml in blood drop to normal , 2 ro 12 weeks, circulation improves and lung function increases , one to 9 months , coughing and shotness of breath wil; apper , 5 years , risk of stroke decease , 10 yuears , riask of lung cancwr drop , 15 years , risk of coronoary heart disease is tht of a non smoker ,   "
     }
     ,
     {
      "question":"base width in gait , as we agi , walking speed slows down , with shorter steps and linger stance phases , increased tme when both feet are in contact wif the ground (increase stav=biloyt)  ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"within 20 min , heart rate and blood pressure drop , 12 hours , co leveml in blood drop to normal , 2 ro 12 weeks, circulation improves and lung function increases , one to 9 months , coughing and shotness of breath wil; apper , 5 years , risk of stroke decease , 10 yuears , riask of lung cancwr drop , 15 years , risk of coronoary heart disease is tht of a non smoker ,   "
     }
     ,
     {
      "question":"walking stuick is usually contralateral side to wwhere the issue is , patiet prefer to use dominant hand , increase base of support , kep your feet as close as possibel to the wheels  ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"within 20 min , heart rate and blood pressure drop , 12 hours , co leveml in blood drop to normal , 2 ro 12 weeks, circulation improves and lung function increases , one to 9 months , coughing and shotness of breath wil; apper , 5 years , risk of stroke decease , 10 yuears , riask of lung cancwr drop , 15 years , risk of coronoary heart disease is tht of a non smoker ,   "
     }
     ,
     {
      "question":"please give me some indications for walking aids ,  ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"decreased abiloty to bear weight through lower limbs , weakness , balcnce , pain , improve ggait patteren , increase confidence to mobilize , improve gait pattern , cognitic efactors ( bad can increase thri risk )   "
     }
     ,
     {
      "question":"What is the rile of the aid ,  ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"walking stuick 20 percent of body weight , frame up to 50  "
     }
     ,
     {
      "question":"what si the weight bearing status ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"non weight bearing , NWB   , TWB , touch weight bearing , (for balance ) pwb  , partial weight bearing  , wbat , weight bearing is tolerated(can bear as much weight as tey can tolerate ,full weight bearing    "
     }
     ,
     {
      "question":"when use mobility , msk , neurological conditions , acuite storke , paeediatric onset , neurodegenrative paralysis peripheral disorders , presribing walking aid promotes mobility and exercise partocipation   ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"non weight bearing , NWB   , TWB , touch weight bearing , (for balance ) pwb  , partial weight bearing  , wbat , weight bearing is tolerated(can bear as much weight as tey can tolerate ,full weight bearing    "
     }
     ,
     {
      "question":"when use crutch and walkig stick ,why use quad stick over walking frame ( when i stroke m cant really grip) ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"non weight bearing , NWB   , TWB , touch weight bearing , (for balance ) pwb  , partial weight bearing  , wbat , weight bearing is tolerated(can bear as much weight as tey can tolerate ,full weight bearing    "
     }
     ,
     {
      "question":"how to teach a person to use a wlking stick , forarm support frames , pick up frames , rollaor fromaes , four wheeled walker 3 wheeled walker , posterior safety roller sfor kids ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"got 4 stoppers , need to pick up vulnerble , rollator framee vs pick up frame ? , weight tolerance , standard iss 80 90 kg , bariiatric patients ..."
     }
     ,
     {
      "question":"knee waalkers ... how to fit a walking stick ?",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"patient can be measured in suopine or standnign , place stick 15 cm from lateral malleolus , elbow in 15 to 30 degree of flexion when holding the stick , handle of the stick should reac the greater trochanter , ulnar styloid or proximal wrist crease , patient should wear well fitted shoes "
     }
     ,
     {
      "question":"how to fit axillary crutch ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"stopper (ferrule ) 15 c, out from lateraal malleous , 4 fingers sopoace bewtween axilla and padding , handgrip at proxial wirst grease , recheck space between axilla , and padding when upright , ensure patient use pair , unsafe to use just one "
     }
     ,
     {
      "question":"what do you wanna check before asking ppl to wapk on a stck or sth similar , ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"measure bp , sp02 , ensure sitting balance on the edge of chair or bed  also heps with any postural hypotension , check screws and wing nuts must be tight , rubber tps , must not be uneven , integry=ity of parts , floot aint sluppery , footwear , clothing , drips  "
     }
     ,
     {
      "question":"what do you wanna check before asking ppl to wapk on a stck or sth similar , ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"measure bp , sp02 , ensure sitting balance on the edge of chair or bed  also heps with any postural hypotension , check screws and wing nuts must be tight , rubber tps , must not be uneven , integry=ity of parts , floot aint sluppery , footwear , clothing , drips  "
     }
     ,
     {
      "question":"gait pattenrs with aid s ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"step thru gait , four point alternating pattern , trpod alternating , tripod simulatanois   "
     }
     ,
     {
      "question":"which side off the stick  ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"contalateral side of the injur , but if same , bs=ase of suport is smaller , "
     }
     ,
     {
      "question":"what do you wanna check before asking ppl to wapk on a stck or sth similar , ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"measure bp , sp02 , ensure sitting balance on the edge of chair or bed  also heps with any postural hypotension , check screws and wing nuts must be tight , rubber tps , must not be uneven , integry=ity of parts , floot aint sluppery , footwear , clothing , drips  "
     }
     ,
     {
      "question":"how to teach ppl walk stairs , ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"initial assessment always donw woth second therapist , stick go down first then bad leg goes down "
     }
     ,
     {
      "question":"research on mobility aid ,  ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"small alteration in the length of walking sitck used fr weight bearing ambulation in patients with unlateralk knee oa increase energy expenditure during walking  , use of a walking sstikc can diminsh pain and improve phsical function in oa  knees , if height too high to low , increase energy expenditture , half ofppl with oa and ra use aid "
     }
     ,
     {
      "question":"measuing phsical activity ( calorimetery , doubly abelled water tecniques ), physical activity vs physical fitness ...not interchanghable ?  ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"accelerometers , actigraph , axivity , fixbitx  "
     }
     ,
     {
      "question":"describe components of totaal energy exendityr e",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"resting exnergy expendtyre  thermic effect of food , activity eergy expenditure  "
     }
     ,
     {
      "question":"describe intensity f exercise with mets , ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"sendentary is smaller than 1.6 mets , light  1.6 to 3 met , moderate  3 to 6 , vigorous , 6 to 9 , high , 9 mets "
     }
     ,
     {
      "question":"have 0 rpe ? no rang eis from 6 to 19 ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"sendentary is smaller than 1.6 mets , light  1.6 to 3 met , moderate  3 to 6 , vigorous , 6 to 9 , high , 9 mets "
     }
     ,
     {
      "question":"measure cardioascular fitness , ewalkig spped , physical activity engagement ...",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"sendentary is smaller than 1.6 mets , light  1.6 to 3 met , moderate  3 to 6 , vigorous , 6 to 9 , high , 9 mets "
     }
     ,
     {
      "question":"measure cardioascular fitness , ewalkig spped , physical activity engagement ... meadure exercise performance , ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"sendentary is smaller than 1.6 mets , light  1.6 to 3 met , moderate  3 to 6 , vigorous , 6 to 9 , high , 9 mets "
     }
     ,
     {
      "question":"self report vs observation of exercise  ",
      "choice":
      [
       "",
       "",
       "",
       ""
      ]
      ,
      "answer":"0",
      "explanation":"39 report to be adgerent , 16 percetn actually do ti , simialr to physio , but physio more accurate ? no  , only a small percnetag ecomes from the phsio group "
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








    










   




