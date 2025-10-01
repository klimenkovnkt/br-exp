/***************** 
 * Popitka2 *
 *****************/

// import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
// const { PsychoJS } = core;
// const { TrialHandler, MultiStairHandler } = data;
// const { Scheduler } = util;

// Временно закомментируйте и используйте прямой импорт для тестирования:
// import { PsychoJS, TrialHandler, MultiStairHandler, Scheduler } from './lib/psychojs-2024.2.4.js';
import { PsychoJS } from './lib/psychojs-2024.2.4.js';

// Получаем остальные классы через PsychoJS
const TrialHandler = PsychoJS.data.TrialHandler;
const MultiStairHandler = PsychoJS.data.MultiStairHandler;
const Scheduler = PsychoJS.util.Scheduler;
// Если что-то не найдено, выведем в консоль для отладки
console.log('Available exports:', Object.keys(psychojs));
//import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
//const { PsychoJS } = core;
//const { TrialHandler, MultiStairHandler } = data;
//const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'popitka2';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(demo_sexRoutineBegin());
flowScheduler.add(demo_sexRoutineEachFrame());
flowScheduler.add(demo_sexRoutineEnd());
flowScheduler.add(demo_ageRoutineBegin());
flowScheduler.add(demo_ageRoutineEachFrame());
flowScheduler.add(demo_ageRoutineEnd());
flowScheduler.add(instr_1RoutineBegin());
flowScheduler.add(instr_1RoutineEachFrame());
flowScheduler.add(instr_1RoutineEnd());
const loop_1_blockLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_1_blockLoopBegin(loop_1_blockLoopScheduler));
flowScheduler.add(loop_1_blockLoopScheduler);
flowScheduler.add(loop_1_blockLoopEnd);




flowScheduler.add(instr_2RoutineBegin());
flowScheduler.add(instr_2RoutineEachFrame());
flowScheduler.add(instr_2RoutineEnd());
const loop_2_blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_2_blocksLoopBegin(loop_2_blocksLoopScheduler));
flowScheduler.add(loop_2_blocksLoopScheduler);
flowScheduler.add(loop_2_blocksLoopEnd);


flowScheduler.add(demo_memeRoutineBegin());
flowScheduler.add(demo_memeRoutineEachFrame());
flowScheduler.add(demo_memeRoutineEnd());
flowScheduler.add(final_textRoutineBegin());
flowScheduler.add(final_textRoutineEachFrame());
flowScheduler.add(final_textRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'incon_stim.xlsx', 'path': 'incon_stim.xlsx'},
    {'name': 'img1.png', 'path': 'img1.png'},
    {'name': 'img2.png', 'path': 'img2.png'},
    {'name': 'img3.png', 'path': 'img3.png'},
    {'name': 'img4.png', 'path': 'img4.png'},
    {'name': 'img5.png', 'path': 'img5.png'},
    {'name': 'img6.png', 'path': 'img6.png'},
    {'name': 'img7.png', 'path': 'img7.png'},
    {'name': 'img8.png', 'path': 'img8.png'},
    {'name': 'img9.png', 'path': 'img9.png'},
    {'name': 'img10.png', 'path': 'img10.png'},
    {'name': 'img11.png', 'path': 'img11.png'},
    {'name': 'img12.png', 'path': 'img12.png'},
    {'name': 'img13.png', 'path': 'img13.png'},
    {'name': 'img14.png', 'path': 'img14.png'},
    {'name': 'img15.png', 'path': 'img15.png'},
    {'name': 'img16.png', 'path': 'img16.png'},
    {'name': 'img17.png', 'path': 'img17.png'},
    {'name': 'img18.png', 'path': 'img18.png'},
    {'name': 'img19.png', 'path': 'img19.png'},
    {'name': 'img20.png', 'path': 'img20.png'},
    {'name': 'img21.png', 'path': 'img21.png'},
    {'name': 'img22.png', 'path': 'img22.png'},
    {'name': 'img23.png', 'path': 'img23.png'},
    {'name': 'img24.png', 'path': 'img24.png'},
    {'name': 'all_incongr_stim_list.xlsx', 'path': 'all_incongr_stim_list.xlsx'},
    {'name': 'img1.png', 'path': 'img1.png'},
    {'name': 'img2.png', 'path': 'img2.png'},
    {'name': 'img3.png', 'path': 'img3.png'},
    {'name': 'img4.png', 'path': 'img4.png'},
    {'name': 'img5.png', 'path': 'img5.png'},
    {'name': 'img6.png', 'path': 'img6.png'},
    {'name': 'img7.png', 'path': 'img7.png'},
    {'name': 'img8.png', 'path': 'img8.png'},
    {'name': 'img9.png', 'path': 'img9.png'},
    {'name': 'img10.png', 'path': 'img10.png'},
    {'name': 'img11.png', 'path': 'img11.png'},
    {'name': 'img12.png', 'path': 'img12.png'},
    {'name': 'img13.png', 'path': 'img13.png'},
    {'name': 'img14.png', 'path': 'img14.png'},
    {'name': 'img15.png', 'path': 'img15.png'},
    {'name': 'img16.png', 'path': 'img16.png'},
    {'name': 'img17.png', 'path': 'img17.png'},
    {'name': 'img18.png', 'path': 'img18.png'},
    {'name': 'img19.png', 'path': 'img19.png'},
    {'name': 'img20.png', 'path': 'img20.png'},
    {'name': 'img21.png', 'path': 'img21.png'},
    {'name': 'img22.png', 'path': 'img22.png'},
    {'name': 'img23.png', 'path': 'img23.png'},
    {'name': 'img24.png', 'path': 'img24.png'},
    {'name': 'img25.png', 'path': 'img25.png'},
    {'name': 'img26.png', 'path': 'img26.png'},
    {'name': 'img27.png', 'path': 'img27.png'},
    {'name': 'img28.png', 'path': 'img28.png'},
    {'name': 'img29.png', 'path': 'img29.png'},
    {'name': 'img30.png', 'path': 'img30.png'},
    {'name': 'img31.png', 'path': 'img31.png'},
    {'name': 'img32.png', 'path': 'img32.png'},
    {'name': 'img33.png', 'path': 'img33.png'},
    {'name': 'img34.png', 'path': 'img34.png'},
    {'name': 'img35.png', 'path': 'img35.png'},
    {'name': 'img36.png', 'path': 'img36.png'},
    {'name': 'img37.png', 'path': 'img37.png'},
    {'name': 'img38.png', 'path': 'img38.png'},
    {'name': 'img39.png', 'path': 'img39.png'},
    {'name': 'img40.png', 'path': 'img40.png'},
    {'name': 'img41.png', 'path': 'img41.png'},
    {'name': 'img42.png', 'path': 'img42.png'},
    {'name': 'img43.png', 'path': 'img43.png'},
    {'name': 'img44.png', 'path': 'img44.png'},
    {'name': 'img45.png', 'path': 'img45.png'},
    {'name': 'img46.png', 'path': 'img46.png'},
    {'name': 'img47.png', 'path': 'img47.png'},
    {'name': 'img48.png', 'path': 'img48.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var demo_sexClock;
var text_demo_1;
var slider;
var demo_ageClock;
var text_demo_age;
var textbox;
var text_age_space;
var key_resp_age;
var instr_1Clock;
var text_instr_1;
var key_resp_instr_1;
var quest_1Clock;
var text;
var text_2;
var key_resp;
var pic_1Clock;
var image_1;
var text_label_1;
var ans_quest_1Clock;
var text_ans_quest_right;
var text_ans_quest_left;
var key_resp_ans_quest_1;
var instr_2Clock;
var text_3;
var key_resp_instr_2;
var pic2Clock;
var image_2;
var text_label_2;
var key_resp_recognition;
var text_instr_3;
var demo_memeClock;
var text_meme;
var slider_meme;
var final_textClock;
var text_fin;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "demo_sex"
  demo_sexClock = new util.Clock();
  text_demo_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_demo_1',
    text: 'Добрый день!\nСпасибо, что согласились принять участие в исследовании!\nПожалуйста, отметьте Ваш пол ниже',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0, (- 0.3)], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u0416\u0435\u043d\u0441\u043a\u0438\u0439", "\u041c\u0443\u0436\u0441\u043a\u043e\u0439", "\u041d\u0435 \u0445\u043e\u0447\u0443 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c"], fontSize: 0.025, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  // Initialize components for Routine "demo_age"
  demo_ageClock = new util.Clock();
  text_demo_age = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_demo_age',
    text: 'Пожалуйста, введите Ваш возраст числом (например, 31)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox',
    text: '',
    placeholder: 'Ввести возраст',
    font: 'Arial',
    pos: [0, (- 0.2)], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.25, 0.25],  units: undefined, 
    ori: 0.0,
    color: [(- 1.0), (- 1.0), (- 1.0)], colorSpace: 'rgb',
    fillColor: [0.0, 0.0, 0.0], borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  text_age_space = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_age_space',
    text: 'Нажмите "пробел" после ввода возраста числом, чтобы продолжить',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_age = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr_1"
  instr_1Clock = new util.Clock();
  text_instr_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instr_1',
    text: 'Сейчас Вы увидите серию картинок с подписями к ним, после каждой картинки Вам нужно будет ответить на вопрос относительно этого персонажа (картинки с подписью). Сам вопрос Вы увидите ДО картинки. \nОтвечайте на вопросы в формате “да/нет” с помощью клавиатуры:\nстрелочка вправо (—>) – ответ “да”, а стрелочка влево (<—) – ответ “нет”. Экран для ответа появится после завершения показа картинки.\n\nЕсли инструкция понятна, нажмите клавишу “пробел”',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_instr_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "quest_1"
  quest_1Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Чтобы перейти к картинке, нажмите клавишу "пробел"',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, (- 0.2)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "pic_1"
  pic_1Clock = new util.Clock();
  image_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_1', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text_label_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_label_1',
    text: '',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "ans_quest_1"
  ans_quest_1Clock = new util.Clock();
  text_ans_quest_right = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_ans_quest_right',
    text: 'стрелка вправо - ответ "да"',
    font: 'Open Sans',
    units: 'height', 
    pos: [0.3, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_ans_quest_left = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_ans_quest_left',
    text: 'стрелка влево - ответ "нет"',
    font: 'Open Sans',
    units: 'height', 
    pos: [(- 0.3), 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_ans_quest_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr_2"
  instr_2Clock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Теперь Вам будут показаны картинки с подписями, часть которых встречалась Вам ранее, а другая часть является новой. Ваша задача – определить, был ли вам показан именно такой персонаж (картинка с подписью) ранее.\n\nЕсли такой персонаж был на предыдущем этапе эксперимента, нажимайте стрелочку вправо (—>), если персонажа не было и он новый – стрелочку влево (<—)\n\nЕсли инструкция понятна, нажмите клавишу “пробел”',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_instr_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "pic2"
  pic2Clock = new util.Clock();
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text_label_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_label_2',
    text: '',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_recognition = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_instr_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instr_3',
    text: 'стрелка вправо - персонаж был\nстрелка влево - не было',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "demo_meme"
  demo_memeClock = new util.Clock();
  text_meme = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_meme',
    text: 'Знакомы ли Вам мемы в стиле "итальянский брейнрот"? (например, "бомбардиро крокодило" или "тралалело тралала")',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider_meme = new visual.Slider({
    win: psychoJS.window, name: 'slider_meme',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0, (- 0.25)], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u0414\u0430", "\u041d\u0435\u0442", "\u041d\u0435 \u0443\u0432\u0435\u0440\u0435\u043d/\u0430"], fontSize: 0.05, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  // Initialize components for Routine "final_text"
  final_textClock = new util.Clock();
  text_fin = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_fin',
    text: 'Большое спасибо за то, что согласились принять участие в исследовании и уделили ему время! Дождитесь, пожалуйста, окончания загрузки данных: данное окно закроется автоматически!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var demo_sexMaxDurationReached;
var demo_sexMaxDuration;
var demo_sexComponents;
function demo_sexRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demo_sex' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    demo_sexClock.reset();
    routineTimer.reset();
    demo_sexMaxDurationReached = false;
    // update component parameters for each repeat
    slider.reset()
    psychoJS.experiment.addData('demo_sex.started', globalClock.getTime());
    demo_sexMaxDuration = null
    // keep track of which components have finished
    demo_sexComponents = [];
    demo_sexComponents.push(text_demo_1);
    demo_sexComponents.push(slider);
    
    for (const thisComponent of demo_sexComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function demo_sexRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demo_sex' ---
    // get current time
    t = demo_sexClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_demo_1* updates
    if (t >= 0.0 && text_demo_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_demo_1.tStart = t;  // (not accounting for frame time here)
      text_demo_1.frameNStart = frameN;  // exact frame index
      
      text_demo_1.setAutoDraw(true);
    }
    
    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }
    
    
    // Check slider for response to end Routine
    if (slider.getRating() !== undefined && slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of demo_sexComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demo_sexRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demo_sex' ---
    for (const thisComponent of demo_sexComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('demo_sex.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    // the Routine "demo_sex" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var demo_ageMaxDurationReached;
var _key_resp_age_allKeys;
var demo_ageMaxDuration;
var demo_ageComponents;
function demo_ageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demo_age' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    demo_ageClock.reset();
    routineTimer.reset();
    demo_ageMaxDurationReached = false;
    // update component parameters for each repeat
    textbox.setText('');
    textbox.refresh();
    key_resp_age.keys = undefined;
    key_resp_age.rt = undefined;
    _key_resp_age_allKeys = [];
    psychoJS.experiment.addData('demo_age.started', globalClock.getTime());
    demo_ageMaxDuration = null
    // keep track of which components have finished
    demo_ageComponents = [];
    demo_ageComponents.push(text_demo_age);
    demo_ageComponents.push(textbox);
    demo_ageComponents.push(text_age_space);
    demo_ageComponents.push(key_resp_age);
    
    for (const thisComponent of demo_ageComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function demo_ageRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demo_age' ---
    // get current time
    t = demo_ageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_demo_age* updates
    if (t >= 0.0 && text_demo_age.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_demo_age.tStart = t;  // (not accounting for frame time here)
      text_demo_age.frameNStart = frameN;  // exact frame index
      
      text_demo_age.setAutoDraw(true);
    }
    
    
    // *textbox* updates
    if (t >= 0.0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox.tStart = t;  // (not accounting for frame time here)
      textbox.frameNStart = frameN;  // exact frame index
      
      textbox.setAutoDraw(true);
    }
    
    
    // *text_age_space* updates
    if (t >= 0.0 && text_age_space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_age_space.tStart = t;  // (not accounting for frame time here)
      text_age_space.frameNStart = frameN;  // exact frame index
      
      text_age_space.setAutoDraw(true);
    }
    
    
    // *key_resp_age* updates
    if (t >= 0.5 && key_resp_age.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_age.tStart = t;  // (not accounting for frame time here)
      key_resp_age.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_age.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_age.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_age.clearEvents(); });
    }
    
    if (key_resp_age.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_age.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_age_allKeys = _key_resp_age_allKeys.concat(theseKeys);
      if (_key_resp_age_allKeys.length > 0) {
        key_resp_age.keys = _key_resp_age_allKeys[_key_resp_age_allKeys.length - 1].name;  // just the last key pressed
        key_resp_age.rt = _key_resp_age_allKeys[_key_resp_age_allKeys.length - 1].rt;
        key_resp_age.duration = _key_resp_age_allKeys[_key_resp_age_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of demo_ageComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demo_ageRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demo_age' ---
    for (const thisComponent of demo_ageComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('demo_age.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox.text',textbox.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_age.corr, level);
    }
    psychoJS.experiment.addData('key_resp_age.keys', key_resp_age.keys);
    if (typeof key_resp_age.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_age.rt', key_resp_age.rt);
        psychoJS.experiment.addData('key_resp_age.duration', key_resp_age.duration);
        routineTimer.reset();
        }
    
    key_resp_age.stop();
    // the Routine "demo_age" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instr_1MaxDurationReached;
var _key_resp_instr_1_allKeys;
var instr_1MaxDuration;
var instr_1Components;
function instr_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instr_1Clock.reset();
    routineTimer.reset();
    instr_1MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_instr_1.keys = undefined;
    key_resp_instr_1.rt = undefined;
    _key_resp_instr_1_allKeys = [];
    psychoJS.experiment.addData('instr_1.started', globalClock.getTime());
    instr_1MaxDuration = null
    // keep track of which components have finished
    instr_1Components = [];
    instr_1Components.push(text_instr_1);
    instr_1Components.push(key_resp_instr_1);
    
    for (const thisComponent of instr_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_1' ---
    // get current time
    t = instr_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instr_1* updates
    if (t >= 0.0 && text_instr_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instr_1.tStart = t;  // (not accounting for frame time here)
      text_instr_1.frameNStart = frameN;  // exact frame index
      
      text_instr_1.setAutoDraw(true);
    }
    
    
    // *key_resp_instr_1* updates
    if (t >= 0.52 && key_resp_instr_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instr_1.tStart = t;  // (not accounting for frame time here)
      key_resp_instr_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_instr_1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instr_1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instr_1.clearEvents(); });
    }
    
    if (key_resp_instr_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instr_1.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_instr_1_allKeys = _key_resp_instr_1_allKeys.concat(theseKeys);
      if (_key_resp_instr_1_allKeys.length > 0) {
        key_resp_instr_1.keys = _key_resp_instr_1_allKeys[_key_resp_instr_1_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instr_1.rt = _key_resp_instr_1_allKeys[_key_resp_instr_1_allKeys.length - 1].rt;
        key_resp_instr_1.duration = _key_resp_instr_1_allKeys[_key_resp_instr_1_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_1' ---
    for (const thisComponent of instr_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_instr_1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_instr_1.keys', key_resp_instr_1.keys);
    if (typeof key_resp_instr_1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_instr_1.rt', key_resp_instr_1.rt);
        psychoJS.experiment.addData('key_resp_instr_1.duration', key_resp_instr_1.duration);
        routineTimer.reset();
        }
    
    key_resp_instr_1.stop();
    // the Routine "instr_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var loop_1_block;
function loop_1_blockLoopBegin(loop_1_blockLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop_1_block = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'incon_stim.xlsx',
      seed: undefined, name: 'loop_1_block'
    });
    psychoJS.experiment.addLoop(loop_1_block); // add the loop to the experiment
    currentLoop = loop_1_block;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop_1_block of loop_1_block) {
      snapshot = loop_1_block.getSnapshot();
      loop_1_blockLoopScheduler.add(importConditions(snapshot));
      loop_1_blockLoopScheduler.add(quest_1RoutineBegin(snapshot));
      loop_1_blockLoopScheduler.add(quest_1RoutineEachFrame());
      loop_1_blockLoopScheduler.add(quest_1RoutineEnd(snapshot));
      loop_1_blockLoopScheduler.add(pic_1RoutineBegin(snapshot));
      loop_1_blockLoopScheduler.add(pic_1RoutineEachFrame());
      loop_1_blockLoopScheduler.add(pic_1RoutineEnd(snapshot));
      loop_1_blockLoopScheduler.add(ans_quest_1RoutineBegin(snapshot));
      loop_1_blockLoopScheduler.add(ans_quest_1RoutineEachFrame());
      loop_1_blockLoopScheduler.add(ans_quest_1RoutineEnd(snapshot));
      loop_1_blockLoopScheduler.add(loop_1_blockLoopEndIteration(loop_1_blockLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop_1_blockLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop_1_block);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop_1_blockLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop_2_blocks;
function loop_2_blocksLoopBegin(loop_2_blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop_2_blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'all_incongr_stim_list.xlsx',
      seed: undefined, name: 'loop_2_blocks'
    });
    psychoJS.experiment.addLoop(loop_2_blocks); // add the loop to the experiment
    currentLoop = loop_2_blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop_2_block of loop_2_blocks) {
      snapshot = loop_2_blocks.getSnapshot();
      loop_2_blocksLoopScheduler.add(importConditions(snapshot));
      loop_2_blocksLoopScheduler.add(pic2RoutineBegin(snapshot));
      loop_2_blocksLoopScheduler.add(pic2RoutineEachFrame());
      loop_2_blocksLoopScheduler.add(pic2RoutineEnd(snapshot));
      loop_2_blocksLoopScheduler.add(loop_2_blocksLoopEndIteration(loop_2_blocksLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop_2_blocksLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop_2_blocks);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop_2_blocksLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var quest_1MaxDurationReached;
var _key_resp_allKeys;
var quest_1MaxDuration;
var quest_1Components;
function quest_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'quest_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    quest_1Clock.reset();
    routineTimer.reset();
    quest_1MaxDurationReached = false;
    // update component parameters for each repeat
    text.setText(QuestionText);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('quest_1.started', globalClock.getTime());
    quest_1MaxDuration = null
    // keep track of which components have finished
    quest_1Components = [];
    quest_1Components.push(text);
    quest_1Components.push(text_2);
    quest_1Components.push(key_resp);
    
    for (const thisComponent of quest_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function quest_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'quest_1' ---
    // get current time
    t = quest_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.5 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of quest_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function quest_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'quest_1' ---
    for (const thisComponent of quest_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('quest_1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "quest_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pic_1MaxDurationReached;
var pic_1MaxDuration;
var pic_1Components;
function pic_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pic_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    pic_1Clock.reset(routineTimer.getTime());
    routineTimer.add(2.500000);
    pic_1MaxDurationReached = false;
    // update component parameters for each repeat
    image_1.setImage(ImageFile);
    text_label_1.setText(LabelText);
    psychoJS.experiment.addData('pic_1.started', globalClock.getTime());
    pic_1MaxDuration = null
    // keep track of which components have finished
    pic_1Components = [];
    pic_1Components.push(image_1);
    pic_1Components.push(text_label_1);
    
    for (const thisComponent of pic_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function pic_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pic_1' ---
    // get current time
    t = pic_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_1* updates
    if (t >= 0.0 && image_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1.tStart = t;  // (not accounting for frame time here)
      image_1.frameNStart = frameN;  // exact frame index
      
      image_1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_1.setAutoDraw(false);
    }
    
    
    // *text_label_1* updates
    if (t >= 0.0 && text_label_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_label_1.tStart = t;  // (not accounting for frame time here)
      text_label_1.frameNStart = frameN;  // exact frame index
      
      text_label_1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_label_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_label_1.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pic_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pic_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pic_1' ---
    for (const thisComponent of pic_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('pic_1.stopped', globalClock.getTime());
    if (pic_1MaxDurationReached) {
        pic_1Clock.add(pic_1MaxDuration);
    } else {
        pic_1Clock.add(2.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ans_quest_1MaxDurationReached;
var _key_resp_ans_quest_1_allKeys;
var ans_quest_1MaxDuration;
var ans_quest_1Components;
function ans_quest_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ans_quest_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ans_quest_1Clock.reset();
    routineTimer.reset();
    ans_quest_1MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_ans_quest_1.keys = undefined;
    key_resp_ans_quest_1.rt = undefined;
    _key_resp_ans_quest_1_allKeys = [];
    psychoJS.experiment.addData('ans_quest_1.started', globalClock.getTime());
    ans_quest_1MaxDuration = null
    // keep track of which components have finished
    ans_quest_1Components = [];
    ans_quest_1Components.push(text_ans_quest_right);
    ans_quest_1Components.push(text_ans_quest_left);
    ans_quest_1Components.push(key_resp_ans_quest_1);
    
    for (const thisComponent of ans_quest_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ans_quest_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ans_quest_1' ---
    // get current time
    t = ans_quest_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_ans_quest_right* updates
    if (t >= 0.0 && text_ans_quest_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_ans_quest_right.tStart = t;  // (not accounting for frame time here)
      text_ans_quest_right.frameNStart = frameN;  // exact frame index
      
      text_ans_quest_right.setAutoDraw(true);
    }
    
    
    // *text_ans_quest_left* updates
    if (t >= 0.0 && text_ans_quest_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_ans_quest_left.tStart = t;  // (not accounting for frame time here)
      text_ans_quest_left.frameNStart = frameN;  // exact frame index
      
      text_ans_quest_left.setAutoDraw(true);
    }
    
    
    // *key_resp_ans_quest_1* updates
    if (t >= 0.0 && key_resp_ans_quest_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_ans_quest_1.tStart = t;  // (not accounting for frame time here)
      key_resp_ans_quest_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_ans_quest_1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_ans_quest_1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_ans_quest_1.clearEvents(); });
    }
    
    if (key_resp_ans_quest_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_ans_quest_1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_ans_quest_1_allKeys = _key_resp_ans_quest_1_allKeys.concat(theseKeys);
      if (_key_resp_ans_quest_1_allKeys.length > 0) {
        key_resp_ans_quest_1.keys = _key_resp_ans_quest_1_allKeys[_key_resp_ans_quest_1_allKeys.length - 1].name;  // just the last key pressed
        key_resp_ans_quest_1.rt = _key_resp_ans_quest_1_allKeys[_key_resp_ans_quest_1_allKeys.length - 1].rt;
        key_resp_ans_quest_1.duration = _key_resp_ans_quest_1_allKeys[_key_resp_ans_quest_1_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_ans_quest_1.keys == CorrectAnswer_congr) {
            key_resp_ans_quest_1.corr = 1;
        } else {
            key_resp_ans_quest_1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ans_quest_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ans_quest_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ans_quest_1' ---
    for (const thisComponent of ans_quest_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ans_quest_1.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_ans_quest_1.keys === undefined) {
      if (['None','none',undefined].includes(CorrectAnswer_congr)) {
         key_resp_ans_quest_1.corr = 1;  // correct non-response
      } else {
         key_resp_ans_quest_1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_ans_quest_1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_ans_quest_1.keys', key_resp_ans_quest_1.keys);
    psychoJS.experiment.addData('key_resp_ans_quest_1.corr', key_resp_ans_quest_1.corr);
    if (typeof key_resp_ans_quest_1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_ans_quest_1.rt', key_resp_ans_quest_1.rt);
        psychoJS.experiment.addData('key_resp_ans_quest_1.duration', key_resp_ans_quest_1.duration);
        routineTimer.reset();
        }
    
    key_resp_ans_quest_1.stop();
    // the Routine "ans_quest_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instr_2MaxDurationReached;
var _key_resp_instr_2_allKeys;
var instr_2MaxDuration;
var instr_2Components;
function instr_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instr_2Clock.reset();
    routineTimer.reset();
    instr_2MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_instr_2.keys = undefined;
    key_resp_instr_2.rt = undefined;
    _key_resp_instr_2_allKeys = [];
    psychoJS.experiment.addData('instr_2.started', globalClock.getTime());
    instr_2MaxDuration = null
    // keep track of which components have finished
    instr_2Components = [];
    instr_2Components.push(text_3);
    instr_2Components.push(key_resp_instr_2);
    
    for (const thisComponent of instr_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_2' ---
    // get current time
    t = instr_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // *key_resp_instr_2* updates
    if (t >= 0.0 && key_resp_instr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instr_2.tStart = t;  // (not accounting for frame time here)
      key_resp_instr_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_instr_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instr_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instr_2.clearEvents(); });
    }
    
    if (key_resp_instr_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instr_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_instr_2_allKeys = _key_resp_instr_2_allKeys.concat(theseKeys);
      if (_key_resp_instr_2_allKeys.length > 0) {
        key_resp_instr_2.keys = _key_resp_instr_2_allKeys[_key_resp_instr_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instr_2.rt = _key_resp_instr_2_allKeys[_key_resp_instr_2_allKeys.length - 1].rt;
        key_resp_instr_2.duration = _key_resp_instr_2_allKeys[_key_resp_instr_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_2' ---
    for (const thisComponent of instr_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_instr_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_instr_2.keys', key_resp_instr_2.keys);
    if (typeof key_resp_instr_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_instr_2.rt', key_resp_instr_2.rt);
        psychoJS.experiment.addData('key_resp_instr_2.duration', key_resp_instr_2.duration);
        routineTimer.reset();
        }
    
    key_resp_instr_2.stop();
    // the Routine "instr_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pic2MaxDurationReached;
var _key_resp_recognition_allKeys;
var pic2MaxDuration;
var pic2Components;
function pic2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pic2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    pic2Clock.reset();
    routineTimer.reset();
    pic2MaxDurationReached = false;
    // update component parameters for each repeat
    image_2.setImage(ImageFile_All_list);
    text_label_2.setText(LabelText_all);
    key_resp_recognition.keys = undefined;
    key_resp_recognition.rt = undefined;
    _key_resp_recognition_allKeys = [];
    psychoJS.experiment.addData('pic2.started', globalClock.getTime());
    pic2MaxDuration = null
    // keep track of which components have finished
    pic2Components = [];
    pic2Components.push(image_2);
    pic2Components.push(text_label_2);
    pic2Components.push(key_resp_recognition);
    pic2Components.push(text_instr_3);
    
    for (const thisComponent of pic2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pic2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pic2' ---
    // get current time
    t = pic2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    
    // *text_label_2* updates
    if (t >= 0.0 && text_label_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_label_2.tStart = t;  // (not accounting for frame time here)
      text_label_2.frameNStart = frameN;  // exact frame index
      
      text_label_2.setAutoDraw(true);
    }
    
    
    // *key_resp_recognition* updates
    if (t >= 0.0 && key_resp_recognition.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_recognition.tStart = t;  // (not accounting for frame time here)
      key_resp_recognition.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_recognition.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_recognition.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_recognition.clearEvents(); });
    }
    
    if (key_resp_recognition.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_recognition.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_recognition_allKeys = _key_resp_recognition_allKeys.concat(theseKeys);
      if (_key_resp_recognition_allKeys.length > 0) {
        key_resp_recognition.keys = _key_resp_recognition_allKeys[_key_resp_recognition_allKeys.length - 1].name;  // just the last key pressed
        key_resp_recognition.rt = _key_resp_recognition_allKeys[_key_resp_recognition_allKeys.length - 1].rt;
        key_resp_recognition.duration = _key_resp_recognition_allKeys[_key_resp_recognition_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_recognition.keys == True_Ans_all) {
            key_resp_recognition.corr = 1;
        } else {
            key_resp_recognition.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_instr_3* updates
    if (t >= 0.0 && text_instr_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instr_3.tStart = t;  // (not accounting for frame time here)
      text_instr_3.frameNStart = frameN;  // exact frame index
      
      text_instr_3.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pic2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pic2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pic2' ---
    for (const thisComponent of pic2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('pic2.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_recognition.keys === undefined) {
      if (['None','none',undefined].includes(True_Ans_all)) {
         key_resp_recognition.corr = 1;  // correct non-response
      } else {
         key_resp_recognition.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_recognition.corr, level);
    }
    psychoJS.experiment.addData('key_resp_recognition.keys', key_resp_recognition.keys);
    psychoJS.experiment.addData('key_resp_recognition.corr', key_resp_recognition.corr);
    if (typeof key_resp_recognition.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_recognition.rt', key_resp_recognition.rt);
        psychoJS.experiment.addData('key_resp_recognition.duration', key_resp_recognition.duration);
        routineTimer.reset();
        }
    
    key_resp_recognition.stop();
    // the Routine "pic2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var demo_memeMaxDurationReached;
var demo_memeMaxDuration;
var demo_memeComponents;
function demo_memeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demo_meme' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    demo_memeClock.reset();
    routineTimer.reset();
    demo_memeMaxDurationReached = false;
    // update component parameters for each repeat
    slider_meme.reset()
    psychoJS.experiment.addData('demo_meme.started', globalClock.getTime());
    demo_memeMaxDuration = null
    // keep track of which components have finished
    demo_memeComponents = [];
    demo_memeComponents.push(text_meme);
    demo_memeComponents.push(slider_meme);
    
    for (const thisComponent of demo_memeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function demo_memeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demo_meme' ---
    // get current time
    t = demo_memeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_meme* updates
    if (t >= 0.0 && text_meme.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_meme.tStart = t;  // (not accounting for frame time here)
      text_meme.frameNStart = frameN;  // exact frame index
      
      text_meme.setAutoDraw(true);
    }
    
    
    // *slider_meme* updates
    if (t >= 0.0 && slider_meme.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_meme.tStart = t;  // (not accounting for frame time here)
      slider_meme.frameNStart = frameN;  // exact frame index
      
      slider_meme.setAutoDraw(true);
    }
    
    
    // Check slider_meme for response to end Routine
    if (slider_meme.getRating() !== undefined && slider_meme.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of demo_memeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demo_memeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demo_meme' ---
    for (const thisComponent of demo_memeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('demo_meme.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_meme.response', slider_meme.getRating());
    psychoJS.experiment.addData('slider_meme.rt', slider_meme.getRT());
    // the Routine "demo_meme" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

var final_textMaxDurationReached;
var final_textMaxDuration;
var final_textComponents;
function final_textRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'final_text' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    final_textClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    final_textMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('final_text.started', globalClock.getTime());
    final_textMaxDuration = null
    // keep track of which components have finished
    final_textComponents = [];
    final_textComponents.push(text_fin);
    
    for (const thisComponent of final_textComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function final_textRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'final_text' ---
    // get current time
    t = final_textClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_fin* updates
    if (t >= 0.0 && text_fin.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_fin.tStart = t;  // (not accounting for frame time here)
      text_fin.frameNStart = frameN;  // exact frame index
      
      text_fin.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_fin.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_fin.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of final_textComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function final_textRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'final_text' ---
    for (const thisComponent of final_textComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('final_text.stopped', globalClock.getTime());
    if (final_textMaxDurationReached) {
        final_textClock.add(final_textMaxDuration);
    } else {
        final_textClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
