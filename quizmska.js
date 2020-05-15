 var choiceselection = document.getElementsByClassName("choicetext");
 var submmitbutt= document.getElementById("submit");
 var questioncontainer = document.getElementById("questioncontainer")

var questioncorrectwronglist =[];




 //question bank
 
  
 var questionbank = 
 [
   {
       "question":"You are treating a patient with low back pain that is of non-irritable How would your patient present:",
       "choice":["Pain 6/10 that increases after 5 minutes of standing and reduces after 30 minutes of lying in supine.",
       "Pain 8/10, that aggravates after 30 minutes of running and reduces after resting on side lying for 10 minutes.",
       "Pain 7/10, that aggravates after 15 minutes of sitting and reduces after 35 minutes of walking around.",
       "Pain 9/10 that increases after 10 minutes of walking and reduces after 25 minutes of sitting."],
       "answer":"1",
       "explanation":"welllll"

   }
   ,
   {
    "question":"You suspect the contractile tissues are affected when:",
            "choice":[
                "AROM = PROM.",
                "You receive the report of the x-ray you recommended your patient to have.",
                "AROM < PROM.",
                "AROM > PROM."
            ],
    "answer":"2",
    "explanation":"lol"

   }
   ,
   {
    "question":"Which of the following statements is INCORRECT when assessing a patient with an irritable condition with active movement testing (AMT):",
    "choice":
    [
        "You will not perform any stressful procedures.",
        "You will ask the patient to move to the first onset of pain or to the point where the pain starts to increase.",
        "You will ask the patient to move to P2 or R2.",
        "You will not attempt to reproduce patient’s pain/symptoms."
    ],
    "answer":"2",
    "explanation":"3"

   }
   ,
   {
    "question":"The aim of the isometric muscle test is to:",
    "choice":
    [
        "Look at the amount of force a muscle can generate.",
        "Assess how strong a muscle group is.",
        "Assess the non-contractile tissues.",
        "Assess the contractile tissues."
    ],
    "answer":"3" ,
    "explanation":"4"
   }
   ,
   {
    "question":"Which of the following statements is CORRECT about radicular pain:",
    "choice":
    [
        "The usual pattern involves pain that extends beyond the knees and is more intense in the lower back than in the leg.",
        "It is pain localised in a dermatomal area as a result of a nerve root compression.",
        "It involves any pain that is reported below the buttock area.",
        "It is pain in the presence of altered sensation and weakness in the lower limb."
    ],
    "answer":"1",
    "explanation":"5"
   }
   ,
   {
    "question":"Deep aching across the SIJ can be an early sign for:",
    "choice":
    [
        "Spinal stenosis",
        "Spondylolysis",
        "Ankylosing Spondylitis",
        "Rheumatoid arthritis"
    ],
    "answer":"2",
    "explanation":"6"
   }
   ,
   {
    "question":"Which of the following modalities is NOT RECOMMENDED for people with non-specific low back pain (NSLBP):",
    "choice":
    [
        "TENS",
        "Manual therapy",
        "Motor control",
        "Exercise"
    ],
    "answer":"0",
    "explanation":"6"
   }
   ,
   {
    "question":"You are treating a patient with low back pain (LBP) and classified them as having a medium risk of chronicity. What intervention would you recommend to this patient based on the ACI model of care?",
    "choice":
    [
        "Frist line care only.",
        "Frist line care, physiotherapy and cognitive behaviour therapy.",
        "First line care and physiotherapy",
        "A comprehensive physiotherapy program only."
    ],
    "answer":"2",
    "explanation":"6"
   }
   ,
   {
    "question":"Radiculopathy involves the interruption of normal conduction of signals from the nerves in the spine to the lower limbs.",
    "choice":
    [
        "truee",
        "flase",
        "/",
        "/"
    ],
    "answer":"0",
    "explanation":"6"
   }
   ,
   {
    "question":"A patient can present a nerve root compromise in the absence of pain.",
    "choice":
    [
        "truee",
        "flase",
        "/",
        "/"
    ],
    "answer":"0",
    "explanation":"6"
   }
   ,
   {
    "question":"In practice, we should ask for consent for every technique we perform.",
    "choice":
    [
        "truee",
        "flase",
        "/",
        "/"
    ],
    "answer":"1",
    "explanation":"6"
   }
   ,
   {
    "question":"Most people recover from an episode of LBP within 6 weeks, but about 1/3 will present with persistent symptoms.",
    "choice":
    [
        "truee",
        "flase",
        "/",
        "/"
    ]
    ,
    "answer":"0",
    "explanation":"6"
   }
   ,
   {
    "question":"Clinical course is the course of the disease without any clinical intervention.",
    "choice":
    [
        "truee",
        "false",
        "/",
        "/"
    ]
    ,
    "answer":"1",
    "explanation":"6"
   }
   ,
   {
    "question":"About 50% of patients will present a recurrent episode of LBP in the first year.",
    "choice":
    [
        "truee",
        "flase",
        "/",
        "/"
    ]
    ,
    "answer":"0",
    "explanation":"6"
   }
   ,
   {
    "question":"Prognostic factors are factors associated with outcome of LBP.",
    "choice":
    [
        "truee",
        "flase",
        "/",
        "/"
    ]
    ,
    "answer":"0",
    "explanation":"6"
   }
   ,
   {
    "question":"Older age, symptoms of depression, catastophising thoughts are all weaker predictors of worst prognosis for LBP.",
    "choice":
    [
        "truee",
        "flase",
        "/",
        "/"
    ]
    ,
    "answer":"1",
    "explanation":"6"
   }
   ,
   {
    "question":"Characteristics of LBP in adults vs older adults inlcude:",
    "choice":
    [
        "Same prevalence in both populations, LBP in older people linked to more serious pathologies (i.e., spinal stenosis), but similar prognosis.",
        "Prevalence higher in adults, sames causes of LBP and same prognosis.",
        "Prevalence higher in adults, but LBP in older linked to more serious pathologies (i.e., spinal stenosis) and worst prognosis.",
        "Prevalence higher in older adults, same causes of LBP, but worst prognosis."
    ]
    ,
    "answer":"2",
    "explanation":"6"
   }
   ,
   {
    "question":"Treatment using manual therapy will target primarily what impairment?",
    "choice":
    [
        "Joint function",
        "Biomechanical function",
        "Muscle function",
        "Motor control"
    ]
    ,
    "answer":"0",
    "explanation":"6"
   }
   ,
   {
    "question":"The correct therapist contact point for PA central and unilateral PAIVMs are, respectively:",
    "choice":
    [
        "Pisiform and thumbs tip",
        "Pisiform and thumbs pad",
        "Ulnar border (between pisiform and hook of hamate) and thumbs tip",
        "Thumbs tip and ulnar border (between pisiform and hook of hamate)"
    ]
    ,
    "answer":"2",
    "explanation":"6"
   }
   ,
   {
    "question":"During manual therapy using PAIVMs and PPIVMs (assessment and treatment), it is important to observe:",
    "choice":
    [
        "The position of the therapist",
        "The amount of force applied",
        "all",
        "direction of force applied"
    ]
    ,
    "answer":"2",
    "explanation":"6"
   }
   ,
   {
    "question":"You are performing PAIVM central PA grade III treatment on L4 on a patient that was non-irritable, but presented 7/10 pain on PAIVM assessment for that segment (central L4). You have just started the first set and plan to sustain oscillations for 45 seconds. The patient complains that is painful, what should you do?",
    "choice":
    [
        "Reduce the amount of force (move to a grade II instead)",
        "Explain that is normal to have some pain at the beginning, but the pain should reduce as you progress into the set",
        "Move the treatment to the segment above or below, which were less painful on assessment",
        "Stop the treatment immediately"
    ]
    ,
    "answer":"1",
    "explanation":"6"
   }
   ,
   {
    "question":"You are performing a PAIVM unilateral PA grade III treatment on Left L4 for (plan for 3 sets of 45 seconds). You reassess AMT after the first set and noted no change in movement range or pain intensity. What should you do?",
    "choice":
    [
        "Perform 1 set using a grade IV, reassess AMT again, perform another 2 sets if found to be effective, and assess AMT again at the end of treatment",
        "Continue with grade III for the following 2 sets as the technique needs some time to have an effect on range or pain - would continue to monitor the patient and assess AMT again at the end of treatment",
        "Change to a grade IV for the following 2 sets, while you continue to monitor the patient, and assess AMT again at the end of treatment",
        "The patient clearly does not respond to manual therapy and there is no point in continuing with this technique"
    ]
    ,
    "answer":"2",
    "explanation":"6"
   }
   ,
   {
    "question":"The passive accessory intervetebral movement (PAIVM) assessment of patients with irritable LBP should be completed using GRADES I-II only.",
    "choice":
    [
        "truee",
        "flase",
        "/",
        "/"
    ]
    ,
    "answer":"1",
    "explanation":"6"
   }
   ,
   {
    "question":"PAIVMs are a very common assessment and treatment technique, safe to use in all patients that complain of LBP.",
    "choice":
    [
        "truee",
        "flase",
        "/",
        "/"
    ]
    ,
    "answer":"1",
    "explanation":"PAIVMS are contraindicated in people that have a NRC (positive neuro exam), people with severe osteoporosis in the spine, and people that present a red flag (i.e., suspected fracture, infection, inflammation)."
   }
   ,
   {
    "question":"AMT should be reassessed following both PAIVM and PPIVM assessment.",
    "choice":
    [
        "truee",
        "flase",
        "/",
        "/"
    ]
    ,
    "answer":"0",
    "explanation":"6"
   }
   ,
   {
    "question":"If a pars defect is suspected on a patient with unrelenting low back pain, the following referral for imaging would be appropriate",
    "choice":
    [
        "MRI with and without contrast ",
        "Radiographs A-P, Lateral & Oblique views ",
        "Nuclear bone scan ",
        "Radiographs A-P view only "
    ]
    ,
    "answer":"1",
    "explanation":"6"
   }
   ,
   {
    "question":"Your patient has a painful lumbar radiculopathy with failure of 6 weeks of nonsurgical care. Clinical deterioration of neurological signs prompts the appropriate referral for what type of imaging.",
    "choice":
    [
        "Ultrasound",
        "Radiographs A-P, Lateral & Oblique views , CT ",
        "  PET scan ",
        "MRI "
    ]
    ,
    "answer":"3",
    "explanation":"6"
   }
   ,
   {
    "question":"A 12-year-old ‘husky’ boy presents with traumatic right knee pain that increases with activity and decreases with rest and clinical exam reveals antalgic gait with an essentially normal knee exam. You should immediately think…",
    "choice":
    [
        " Ankle instability ",
        "Osgood’s Schlater disease ",
        "All of the above ",
        "Slipped-Capital Femoral Epiphysis "
    ]
    ,
    "answer":"3",
    "explanation":"6"
   }
   ,
   {
    "question":"A 58-year-old female presents with complaints of right knee pain after she slipped and fell while getting out of the bathtub yesterday. Her clinical exam reveals point-tenderness on the patella and head of fibula. She cannot ambulate more than 4-steps and cannot actively flex her knee past 40 degrees. You decide to",
    "choice":
    [
        "Continue your evaluation and test her strength ",
        "Refer her to her family physician ",
        "Educate her to rest, ice, compress and elevate her lower extremity for two-more days",
        "Refer her for radiography to rule-out a fracture "
    ]
    ,
    "answer":"3",
    "explanation":"6"
   }
   ,
   {
    "question":"The Ottawa Ankle Rules consist of",
    "choice":
    [
        "  Pain in malleolar zone ",
        "Unable to bear weight for 4-steps immediately after injury and during exam ",
        "Bony tenderness in posterior half of distal tibia or fibular or tip of medial or lateral malleolus",
        "All of the above "
    ]
    ,
    "answer":"3",
    "explanation":"6"
   }
   ,
   {
    "question":"You suspect and wish to rule-out a scaphoid fracture in a patient that sustained a fall on an outstretched hand 10 hours ago. You would expect the following exam findings",
    "choice":
    [
        "Difficulty walking in your clinic ",
        "No pain or swelling around the wrist and only mild reductions in active thumb range of motion ",
        "Positive phalens maneuver, numbness and tingling in an median nerve distribution, positive Tinel’s sign over the carpal tunnel ",
        "Snuff box tenderness, pain with longitudinal compression of the carpal-metacarpal joint of the thumb, tenderness on the scaphoid tubercle "
    ]
    ,
    "answer":"3",
    "explanation":"6"
   }
   ,
   {
    "question":"In a patient with suspected spine trauma, the criteria for determination of whether imaging for the cervical spine is indicated and the recommended modality are based upon the",
    "choice":
    [
        "the National Emergency X-Ray Utilization Study Low Risk Rule (NEXUS-LRR)  ",
        "Chicago C-spine rules  ",
        "Sydney MSK thought leaders  ",
        "Canadian C-Spine rules and nexus lrr "
    ]
    ,
    "answer":"3",
    "explanation":"6"
   }
   ,
   {
    "question":"What would you do after confirming you patient has a postiive neurological signs?",
    "choice":
    [
        "Treat the patient and closely monitor the progression of the condition",
        "Refer the patient to have an imaging and confirm what is causing the NRC ",
        "Advice the patient to stay at home on bed rest until the symptoms go away",
        "Refer the patient immediately to their GP "
    ]
    ,
    "answer":"0",
    "explanation":"6"
   }
   ,
   {
    "question":"Radiculopathy is defined by pain,",
    "choice":
    [
        "yes",
        "flase",
        "/",
        "/"
    ]
    ,
    "answer":"1",
    "explanation":"It is defined by objective neurological signs."
   }
   ,
   {
    "question":"Urgent refer the patient with ALBP and leg dominant pain, where there is progressive loss of neurological function, to hospital.",
    "choice":
    [
        "true ",
        "false",
        "/ ",
        "/"
    ]
    ,
    "answer":"0",
    "explanation":"6"
   }
   ,
   {
    "question":"Which of the following is/are the presentation fo the radicular pain?",
    "choice":
    [
        "electric , shocking  ",
        "burung  ",
        "lacininating ",
        "all "
    ]
    ,
    "answer":"3",
    "explanation":"6"
   }
   ,
   {
    "question":"Which of the following are the pathologies of radiculopathy?",
    "choice":
    [
        " ischemia  ",
        "ischemia, compression ",
        "compression, inflammation ",
        "inflammation, compression, ischemia "
    ]
    ,
    "answer":"3",
    "explanation":"6"
   }
   ,
   {
    "question":"Which of the following is incorrect?",
    "choice":
    [
        "MNeurological exams are compulsory for all LBP. ",
        "Neurological exams are required when pain referred from the lumbar spine past the buttock",
        "Neurological exams are required if there is an altered sensation in the lower limb.",
        "Neurological exams are required when pain is in a dermatomal distribution. "
    ]
    ,
    "answer":"0",
    "explanation":"6"
   }
   ,
   {
    "question":"People with low back pain present a delayed activation of the deep muscles (i.e., TrA and multifidus), which is believed to contribute to:",
    "choice":
    [
        "Poor control of the diaphragm and pelvic floor muscles  ",
        "Increased instability in the spine/pelvis  ",
        "Increased stiffness in the spine/pelvis  ",
        "chronicity of back pain  "
    ]
    ,
    "answer":"1",
    "explanation":"6"
   }
   ,
   {
    "question":"The usual presentation of people with lumbo-pelvic motor control impairments include:",
    "choice":
    [
        "Ongoing (persistent) LBP  ",
        "All the above are correct ",
        "PAIVMs and PPIVMs do not reproduce symptoms ",
        "Poor movement control during AMTs "
    ]
    ,
    "answer":"1",
    "explanation":"6"
   }
   ,
   {
    "question":"Guidelines recommend that imaging people with NSLBP is only considered when:",
    "choice":
    [
        "Neurological examination and neural tension tests are positive ",
        "Results of the imaging test is likely to change or direct treatment ",
        "Red flags are present ",
        "A and C are correct  "
    ]
    ,
    "answer":"3",
    "explanation":"6"
   }
   ,
   {
    "question":"Guidelines recommend the following interventions for people with LBP",
    "choice":
    [
        "Advice to stay active, exercise and traction ",
        "Reassure patient of favourable diagnosis, interdisciplinary therapy and electrotherapy ",
        "Advice to avoid bed rest, manual therapy and NSAIDs ",
        "Advice of early return to work, motor control and Paracetamol "
    ]
    ,
    "answer":"2",
    "explanation":"6"
   }
   ,
   {
    "question":"Early supervised exercise is usually unnecessary for people with acute NSLBP and low risk of chronicity",
    "choice":
    [
        "true ",
        "false",
        "/ ",
        "/"
    ]
    ,
    "answer":"0",
    "explanation":"6"
   }
   ,
   {
    "question":"Advice to people with NSLBP and NRC are virtually the same",
    "choice":
    [
        "true ",
        "false",
        "/ ",
        "/"
    ]
    ,
    "answer":"1",
    "explanation":"Patients with NRC receive a slightly different advice as their pain mechanism and behaviour is different from NSLBP"
   }
   ,
   {
    "question":"A patient with NSLBP should use the pain intensity as a guide to dictate how much activity they perform.",
    "choice":
    [
        "true ",
        "false",
        "/ ",
        "/"
    ]
    ,
    "answer":"1",
    "explanation":"All patients with NSLBP should be advised to keep active, explain that pain is expected but they should aim to increase active time every day till is back to normal"
   }
   ,
   {
    "question":"internal validity depends on ",
    "choice":
    [
        "the theoretical conceptualization of the indepedent and dependt variables",
        "how to applied the findings in the clinical practice ",
        "how appropraite were the statistical procedures for analysing data  ",
        "how well the study was conducted "
    ]
    ,
    "answer":"3",
    "explanation":"6"
   }
   ,
   {
    "question":"Clinical diagnosis is a diagnosis based on the identification of the underlying mechanism of the disease, condition or dysfunction. ",
    "choice":
    [
        "true ",
        "false",
        "/ ",
        "/"
    ]
    ,
    "answer":"1",
    "explanation":"6"
   }
   ,
   {
    "question":"An evidence-based approach to diagnosis should not be based on: ",
    "choice":
    [
        "the most updated evidence ",
        "Imaging reports ",
        "patient values  ",
        " clinical expertise "
    ]
    ,
    "answer":"1",
    "explanation":"6"
   }
   ,
   {
    "question":"A test result that is positive in a person who does not have the disease or condition of interest",
    "choice":
    [
        "false negative ",
        "true postivve ",
        "false positive ",
        " true negative "
    ]
    ,
    "answer":"2",
    "explanation":"6"
   }
   ,
   {
    "question":"The positive likelihood ratio is ",
    "choice":
    [
        "a ratio that indicates how much the odds of a disease are increased if a diangostic test is negative. ",
        "a ratio that indicates how much the odds of a disease are decreased if a diangostic test is positive. ",
        "a ratio that indicates how much the odds of a disease are increased if a diangostic test is positive. ",
        "a ratio that indicates how much the odds of a disease are decreased if a diangostic test is negative. "
    ]
    ,
    "answer":"2",
    "explanation":"6"
   }
   ,
   {
    "question":"An ideal questionnaire should has/have",
    "choice":
    [
        "high validity ",
        "high reliability  ",
        "both ",
        "/ "
    ]
    ,
    "answer":"2",
    "explanation":"6"
   }
   ,
   {
    "question":"The weakest form of validity is ",
    "choice":
    [
        "content validity ",
        "construct validity ",
        "criterion-related validity  ",
        "face validity "
    ]
    ,
    "answer":"3",
    "explanation":"6"
   }
   ,
   {
    "question":"Are you going to rule in or rule out a physical examination with97% sensitivity,  97% specificity and negative findings?",
    "choice":
    [
        "rule out ",
        "rule in ",
        "/ ",
        "/"
    ]
    ,
    "answer":"0",
    "explanation":"6"
   }
   ,
   {
    "question":"If the  pre-test probability of a  physical diagnostic test with  a likelihood ratio of 1 increases, the post-test reliability will",
    "choice":
    [
        "decerease",
        "not change ",
        "increase",
        "/"
    ]
    ,
    "answer":"2",
    "explanation":"6"
   }
   ,
   {
    "question":"Risk factors for groin pain include:",
    "choice":
    [
        "Changes in training load ",
        "CV fitness  ",
        "Hip ROM, PHx of groin pain  ",
        " All of the above "
    ]
    ,
    "answer":"3",
    "explanation":"6"
   }
   ,
   {
    "question":"In groin pain, the most commonly involved adductor muscle is:",
    "choice":
    [
        "Adductor magnus ",
        "Adductor longus ",
        "Adductor brevis ",
        "Gracilis "
    ]
    ,
    "answer":"1",
    "explanation":"6"
   }
   ,
   {
    "question":"Red flag conditions not to be missed when diagnosing groin pain include:",
    "choice":
    [
        "Inguinal Hernia ",
        "ASIS hypothysitis ",
        "Perthes ",
        "Lumbar spine referred pain "
    ]
    ,
    "answer":"2",
    "explanation":"6"
   },
   {
    "question":"Diagnostic criteria for iliopsoas related groin pain include:",
    "choice":
    [
        "Pain on resisted adduction testing ",
        "Tenderness of the pubic symphysis ",
        "Pain with abdominal resistance ",
        "Pain on resisted hip flexion"
    ]
    ,
    "answer":"3",
    "explanation":"6"
   }
   ,
   {
    "question":"Guidelines for managing hip OA should include:",
    "choice":
    [
        "Exercise and weight management ",
        "Exercise and pain management with opioids ",
        "Weight management and aquatic therapy ",
        "TENS and stem cell therapy "
    ]
    ,
    "answer":"0",
    "explanation":"6"
   }
   ,
   {
    "question":"Which statement regarding hip fractures is INCORRECT::",
    "choice":
    [
        "Patients present with present with a shortened and externally rotated leg on affected side ",
        "10% die within 30 days ",
        "Most people can return to their preliving arrangements",
        "20% die within 1 year "
    ]
    ,
    "answer":"2",
    "explanation":"6"
   }
   ,
   {
    "question":"If the  pre-test probability of a  physical diagnostic test with  a likelihood ratio of 1 increases, the post-test reliability will",
    "choice":
    [
        "decerease",
        "not change ",
        "increase",
        "/"
    ]
    ,
    "answer":"2",
    "explanation":"6"
   }
   ,
   {
    "question":"Strategies to manage the loads acting on the hip joint can include the following:",
    "choice":
    [
        "Supportive footwear",
        "Increase the moment arm between the COM and the hip joint ",
        "Limping by loading more to the unaffected side ",
        "Reduce the moment arm between the COM and the hip joint centre"
    ]
    ,
    "answer":"3",
    "explanation":"6"
   }
   ,
   {
    "question":"Hip labral injuries typically:",
    "choice":
    [
        "Are aggravated by positions of combinations of flexion/IR/adduction",
        "Have clear mechanisms of injury ",
        "Complain of acute pain over the anterior groin ",
        "Do not experience any clicking with hip movements "
    ]
    ,
    "answer":"0",
    "explanation":"6"
   }
   ,
   {
    "question":"What are the risk factors for groin pain",
    "choice":
    [
        "",
        "",
        "",
        ""

    ]
    ,
    "answer":"0",
    "explanation":"rapid changes in training load , past hstory of groin injury , muscle length , strength imbalance , loss of hip range of motion"
   }
   ,
   {
    "question":"What is the dianostioc process of groin pain ",
    "choice":
    [
        "",
        "",
        "",
        ""

    ]
    ,
    "answer":"0",
    "explanation":"step one , localize and listen to history , step 2 paplpate and recreate symptoms , step 3 , alleviate and investigate "
   }
  ,
  {
    "question":"Give me the origin of groin pain  ",
    "choice":
    [
        "",
        "",
        "",
        ""

    ]
    ,
    "answer":"0",
    "explanation":"muscle tendon unit , stress fracture , pubic or abdominal , nerve entrapment , red flag "
   }
   ,
   {
    "question":"statistics of hip fracture  ",
    "choice":
    [
        "",
        "",
        "",
        ""

    ]
    ,
    "answer":"0",
    "explanation":"less than 50n percent goes back to pre living condition , 5 percent has a surgery , one in ten will die in thirty days , one in five will die within a year  "
   }
   ,
   {
    "question":"classify fermoral neck fracture for me   ",
    "choice":
    [
        "",
        "",
        "",
        ""

    ]
    ,
    "answer":"0",
    "explanation":"five types of fracture : 4 classifications : undisplaced/incomplete , complete without displacement , complete with partial displacement , complete with full displacement   "
   }
   ,
   {
    "question":"How many types of hip fractures are there?  ",
    "choice":
    [
        "",
        "",
        "",
        ""

    ]
    ,
    "answer":"0",
    "explanation":"three , femorla neck , intertrochenteric fracture (excellent healing potential, better blood supply ), subtrochenteric fracture(always orif, intramedullary nail) "
   }
   ,
   {
    "question":"How do you manage a hip joint fracture ? ",
    "choice":
    [
        "",
        "",
        "",
        ""

    ]
    ,
    "answer":"0",
    "explanation":"breathing exercise right after , chest exercises , circulation exercises , static quads and gluts exercise , weight bearing within 24 hrs  "
   }
   ,
   {
    "question":"What is the common clincial characterisitics of a labral injury ",
    "choice":
    [
        "",
        "",
        "",
        ""

    ]
    ,
    "answer":"0",
    "explanation":"take years to diagnose , diffuse anterior or grion pain , frequently undiagnosed for a long time , clicking is the most consistnet symptom , can also cause insability , 22 percent of athelets , and 55 percent of atheletes with mechnical hip pain ha s it , qudrant test !, go hand in hand with impingement "
   }
   ,
   {
    "question":"Please describe in detail what the q angle is ",
    "choice":
    [
        "",
        "",
        "",
        ""

    ]
    ,
    "answer":"0",
    "explanation":"asis to central patella , and central patella to tibial tubercle (women 17 , 14 male )genu valgum will increase it , femroal internal rotation will increase it , tibial external rotation will also increase it . "
   }
   ,
   {
    "question":"explain the difference between the timing of swelling between acl and meniscus ,  ",
    "choice":
    [
        "",
        "",
        "",
        ""

    ]
    ,
    "answer":"0",
    "explanation":"asis to central patella , and central patella to tibial tubercle (women 17 , 14 male )genu valgum will increase it , femroal internal rotation will increase it , tibial external rotation will also increase it . "
   }
   ,
   {
    "question":"The pathology of tendinopathy is primarily related to ",
    "choice":
    [
        "inflammation",
        "micro teargin of collagen",
        "celloular changes",
        "all of the above "

    ]
    ,
    "answer":"2",
    "explanation":"asis to central patella , and central patella to tibial tubercle (women 17 , 14 male )genu valgum will increase it , femroal internal rotation will increase it , tibial external rotation will also increase it . "
   }
   ,
   {
    "question":"Pathological features of tendon pathology include: ",
    "choice":
    [
        "Change in the extracellular matrix including increased proteoglycans and increased type I collagen fibrils",
        "Change in the extracellular matrix including increased proteoglycans and neurovascular ingrowth",
        "Decrease in tendon size and neurovascular ingrowth",
        "ncrease in tendon size and type I collagen fibrils"

    ]
    ,
    "answer":"1",
    "explanation":"asis to central patella , and central patella to tibial tubercle (women 17 , 14 male )genu valgum will increase it , femroal internal rotation will increase it , tibial external rotation will also increase it . "
   }
   ,
   {
    "question":"Stages of tendinopathy include: ",
    "choice":
    [
        "Normal tendon->reactive tendinopathy-> tendon disrepair-> degenerative tendinopathy",
        "Normal tendon-> degenerative tendinopathy->reactive on degenerative tendinopathy-> reactive tendinopathy",
        "Normal tendon ->degenerative tendinopathy->reactive on degenerative tendinopathy-> tendon disrepair",
        "Normal tendon ->tendon disrepair -> reactive tendinopathy-> degenerative tendinopathy"

    ]
    ,
    "answer":"0",
    "explanation":"asis to central patella , and central patella to tibial tubercle (women 17 , 14 male )genu valgum will increase it , femroal internal rotation will increase it , tibial external rotation will also increase it . "
   }
   ,
   {
    "question":"intial management of achilles tendinopathy oincludes  ",
    "choice":
    [
        "Relative rest, add a heel lift into their shoe, commence isometric exercises targeting plantar flexors",
        "Continue with exercise/sport, address any identified causative biomechanical factors and introduce isometric exercises targeting plantar flexors",
        "Relative rest, add a heel lift into their shoe, apply ultrasound or interferential to reduce pain, imaging to confirm",
        "Rest, add a heel lift into their shoe, NSAIDS, individualised eccentric exercise program for plantarflexors"

    ]
    ,
    "answer":"0",
    "explanation":"asis to central patella , and central patella to tibial tubercle (women 17 , 14 male )genu valgum will increase it , femroal internal rotation will increase it , tibial external rotation will also increase it . "
   }
   ,
   {
    "question":"Pain in tendinopathy is variable and complex, however, we do know pain is related to:",
    "choice":
    [
        "Biochemical substances stimulated by compression or tension forces",
        "Microtearing of collagen fibers as the collagen matrix is disrupted",
        "Early inflammatory markers that persist beyond stage 1",
        "Central sensitisation occurring throughout stages 2 and 3"

    ]
    ,
    "answer":"0",
    "explanation":"asis to central patella , and central patella to tibial tubercle (women 17 , 14 male )genu valgum will increase it , femroal internal rotation will increase it , tibial external rotation will also increase it . "
   }
   ,
   {
    "question":"infromation from book , undersstand patients exoerience of the presenting disorder . osteoid osteoma , physical examiantion is aimed at confirming diagnosis , suggested by history , and identify the most appropriate treatment , to maximize patients comfot , all test are performed in one position , the order , general to specific , if irrtibale , no of test performed is limited  so the most importatn test perfoemed first , what should i measure  , those related to patients main concerns , and variables you exoect to change . relationship of size of spinal curve and pain isnt clearly established , except head pain , formal vs informal , for posterior , look for shoulder , scapular , psis , level of pelvis  , ikiac crest , gluteal folds , knee crease , calcaneal angle , oatella height an dposition , scars emans previous tramu , skin color circulation , inflammation , after observation , think which movement is affected first , all physiological active movements ar eusually examined, flexion extension , lateral flexion and rotation , ",
    "choice":
    [
        "Biochemical substances stimulated by compression or tension forces",
        "Microtearing of collagen fibers as the collagen matrix is disrupted",
        "Early inflammatory markers that persist beyond stage 1",
        "Central sensitisation occurring throughout stages 2 and 3"

    ]
    ,
    "answer":"0",
    "explanation":"asis to central patella , and central patella to tibial tubercle (women 17 , 14 male )genu valgum will increase it , femroal internal rotation will increase it , tibial external rotation will also increase it . "
   }
   ,
   {
    "question":"describe in words how to perform a active test , ",
    "choice":
    [
        "Biochemical substances stimulated by compression or tension forces",
        "Microtearing of collagen fibers as the collagen matrix is disrupted",
        "Early inflammatory markers that persist beyond stage 1",
        "Central sensitisation occurring throughout stages 2 and 3"

    ]
    ,
    "answer":"0",
    "explanation":"clear and appropriat explanations , first questioned about pain at rest , if pain is present before testing proceeds , pain must be carefully monitotred , , if  not irritbale , ask the patient to move as move as far as possibel , , if irrtibale , then move until the nitial osnet of pain , or until the first increase in pain .,all active movement of the spiine is performed standing except rotation  , ideally shouldnot be wearing shoes , for flexion , slide your hands doewn the front of your knee , rotatiion , cross arm across chest , observe active movemrmts , can also use sustained or reprtitve , how to perform straaight leg test , patient lies supuine , and completlty relaxed , physio supports the ankle posteriorly , and anterior aspect of knee , superior to the patella , the lift the ;eg into flexion , with neutral hip abduction  , the head unsupported , prone knee bend as well ,how to perform the slump test , seated comfotabtly on the end of th eplintht , active flexion of thoracic soine , by patient , head reamins erect ,, and sacrmum vrtical , overpressure to thoracic flexion , and reamin , active flex cervical , overpressurre apply and maintein , knee on asytomatic side is active ly extended , and dorsiflexion , then asked to extend cercial , and attmept further knee extension  , , then repeatt on the other side ,  "
   }
   ,
   {
    "question":"when would you tes for cns ",
    "choice":
    [
        "Biochemical substances stimulated by compression or tension forces",
        "Microtearing of collagen fibers as the collagen matrix is disrupted",
        "Early inflammatory markers that persist beyond stage 1",
        "Central sensitisation occurring throughout stages 2 and 3"

    ]
    ,
    "answer":"0",
    "explanation":"exagerrated tendon reflex , ataxia , clonus , babinskki, how do you test for it , you start at th eheel go up from lateral to medial  "
   }
   ,
   {
    "question":"LBP is the most common health condition to result in someone retiring from the workforce early. A key problem in the management of ALBP is the number of people who develop chronic LBP following an ALBP episode. We expect that early appropriate care may reduce such a transition.  ",
    "choice":
    [
        "Biochemical substances stimulated by compression or tension forces",
        "Microtearing of collagen fibers as the collagen matrix is disrupted",
        "Early inflammatory markers that persist beyond stage 1",
        "Central sensitisation occurring throughout stages 2 and 3"

    ]
    ,
    "answer":"0",
    "explanation":"exagerrated tendon reflex , ataxia , clonus , babinskki, how do you test for it , you start at th eheel go up from lateral to medial  "
   }
   ,
   {
    "question":"summarize the six steps in the model o fcare of low bac pain , ",
    "choice":
    [
        "Biochemical substances stimulated by compression or tension forces",
        "Microtearing of collagen fibers as the collagen matrix is disrupted",
        "Early inflammatory markers that persist beyond stage 1",
        "Central sensitisation occurring throughout stages 2 and 3"

    ]
    ,
    "answer":"0",
    "explanation":"assessment , triage , no imge in nponspeocific low back pain, personlaized evidence based health education, mamnagement with guideline , schduled foloow plan  "
   }
   ,
   {
    "question":"review of all previous bouts of pain is required , what education to provie for low backpain, advised to remian active and avoid bed rest , and to reassure them the favourable prognosis of albp , There is some evidence that exercise can delay recovery when commenced in the early acute phase",
    "choice":
    [
        "Biochemical substances stimulated by compression or tension forces",
        "Microtearing of collagen fibers as the collagen matrix is disrupted",
        "Early inflammatory markers that persist beyond stage 1",
        "Central sensitisation occurring throughout stages 2 and 3"

    ]
    ,
    "answer":"0",
    "explanation":"assessment , triage , no imge in nponspeocific low back pain, personlaized evidence based health education, mamnagement with guideline , schduled foloow plan  "
   }
   ,
   {
    "question":"During the initial stage of recovery, guiding the person to resume their normal physical activities should be the physical therapy focus without a separate structured exercise program., An exercise program may have value once the patient has recovered from the acute episode, as trials have shown that exercise programs begun at this point can halve the risk of recurrence",
    "choice":
    [
        "Biochemical substances stimulated by compression or tension forces",
        "Microtearing of collagen fibers as the collagen matrix is disrupted",
        "Early inflammatory markers that persist beyond stage 1",
        "Central sensitisation occurring throughout stages 2 and 3"

    ]
    ,
    "answer":"0",
    "explanation":"assessment , triage , no imge in nponspeocific low back pain, personlaized evidence based health education, mamnagement with guideline , schduled foloow plan  "
   }
   ,
   {
    "question":"ypically, six treatment sessions are delivered over a 12-week timeframe., paracem=tamol , then nasaid s.",
    "choice":
    [
        "Biochemical substances stimulated by compression or tension forces",
        "Microtearing of collagen fibers as the collagen matrix is disrupted",
        "Early inflammatory markers that persist beyond stage 1",
        "Central sensitisation occurring throughout stages 2 and 3"

    ]
    ,
    "answer":"0",
    "explanation":"assessment , triage , no imge in nponspeocific low back pain, personlaized evidence based health education, mamnagement with guideline , schduled foloow plan  "
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

        let countmsk = document.getElementById("progress");
        countmsk.innerHTML= questionbank.length;
        
        
   
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








     


 
 


 
 


    



 
