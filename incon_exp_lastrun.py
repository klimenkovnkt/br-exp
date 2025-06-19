#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2024.2.0),
    on Thu Jun 19 14:08:03 2025
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

import psychopy
psychopy.useVersion('2024.2.0')


# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '3'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER, priority)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2024.2.0'
expName = 'con_exp'  # from the Builder filename that created this script
# information about this experiment
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = True
_winSize = [1470, 956]
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='/Users/ashevelyova/Downloads/inc_brainrotexp/incon_exp_lastrun.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # set how much information should be printed to the console / app
    if PILOTING:
        logging.console.setLevel(
            prefs.piloting['pilotConsoleLoggingLevel']
        )
    else:
        logging.console.setLevel('warning')
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log')
    if PILOTING:
        logFile.setLevel(
            prefs.piloting['pilotLoggingLevel']
        )
    else:
        logFile.setLevel(
            logging.getLevel('exp')
        )
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if PILOTING:
        logging.debug('Fullscreen settings ignored as running in pilot mode.')
    
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowStencil=False,
            monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height', 
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0,0,0]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win._monitorFrameRate = win.getActualFrameRate(infoMsg='Attempting to measure frame rate of screen, please wait...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.mouseVisible = False
    win.hideMessage()
    # show a visual indicator if we're in piloting mode
    if PILOTING and prefs.piloting['showPilotingIndicator']:
        win.showPilotingIndicator()
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    
    # Setup iohub keyboard
    ioConfig['Keyboard'] = dict(use_keymap='psychopy')
    
    # Setup iohub experiment
    ioConfig['Experiment'] = dict(filename=thisExp.dataFileName)
    
    # Start ioHub server
    ioServer = io.launchHubServer(window=win, **ioConfig)
    
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='iohub'
        )
    if deviceManager.getDevice('key_resp_instr_1') is None:
        # initialise key_resp_instr_1
        key_resp_instr_1 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_instr_1',
        )
    if deviceManager.getDevice('key_resp') is None:
        # initialise key_resp
        key_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp',
        )
    if deviceManager.getDevice('key_resp_ans_quest_1') is None:
        # initialise key_resp_ans_quest_1
        key_resp_ans_quest_1 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_ans_quest_1',
        )
    if deviceManager.getDevice('key_resp_instr_2') is None:
        # initialise key_resp_instr_2
        key_resp_instr_2 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_instr_2',
        )
    if deviceManager.getDevice('key_resp_recognition') is None:
        # initialise key_resp_recognition
        key_resp_recognition = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_recognition',
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], playbackComponents=[]):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    playbackComponents : list, tuple
        List of any components with a `pause` method which need to be paused.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # start a timer to figure out how long we're paused for
    pauseTimer = core.Clock()
    # pause any playback components
    for comp in playbackComponents:
        comp.pause()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='ioHub',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # sleep 1ms so other threads can execute
        clock.time.sleep(0.001)
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    for comp in playbackComponents:
        comp.play()
    # reset any timers
    for timer in timers:
        timer.addTime(-pauseTimer.getTime())


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ioHub'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "instr_1" ---
    text_instr_1 = visual.TextStim(win=win, name='text_instr_1',
        text='Сейчас Вы увидите серию картинок с подписями к ним, после каждой картинки Вам нужно будет ответить на вопрос относительно этого персонажа (картинки с подписью). Сам вопрос Вы увидите ДО картинки. \nОтвечайте на вопросы в формате “да/нет” с помощью клавиатуры:\nстрелочка вправо (—>) – ответ “да”, а стрелочка влево (<—) – ответ “нет”. Экран для ответа появится после завершения показа картинки.\n\nЕсли инструкция понятна, нажмите клавишу “пробел”',
        font='Open Sans',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_resp_instr_1 = keyboard.Keyboard(deviceName='key_resp_instr_1')
    
    # --- Initialize components for Routine "quest_1" ---
    text = visual.TextStim(win=win, name='text',
        text='',
        font='Open Sans',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    text_2 = visual.TextStim(win=win, name='text_2',
        text='Чтобы перейти к картинке, нажмите клавишу "пробел"',
        font='Open Sans',
        units='height', pos=(0, -0.2), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    key_resp = keyboard.Keyboard(deviceName='key_resp')
    
    # --- Initialize components for Routine "pic_1" ---
    image_1 = visual.ImageStim(
        win=win,
        name='image_1', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(None, 0.4),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    text_label_1 = visual.TextStim(win=win, name='text_label_1',
        text='',
        font='Open Sans',
        units='height', pos=(0, -0.3), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    
    # --- Initialize components for Routine "ans_quest_1" ---
    text_ans_quest_right = visual.TextStim(win=win, name='text_ans_quest_right',
        text='стрелка вправо - ответ "да"',
        font='Open Sans',
        units='height', pos=(0.3, 0), draggable=False, height=0.04, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    text_ans_quest_left = visual.TextStim(win=win, name='text_ans_quest_left',
        text='стрелка влево - ответ "нет"',
        font='Open Sans',
        units='height', pos=(-0.3, 0), draggable=False, height=0.04, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    key_resp_ans_quest_1 = keyboard.Keyboard(deviceName='key_resp_ans_quest_1')
    
    # --- Initialize components for Routine "instr_2" ---
    text_3 = visual.TextStim(win=win, name='text_3',
        text='Теперь Вам будут показаны картинки с подписями, часть которых встречалась Вам ранее, а другая часть является новой. Ваша задача – определить, был ли вам показан именно такой персонаж (картинка с подписью) ранее.\n\nЕсли такой персонаж был на предыдущем этапе эксперимента, нажимайте стрелочку вправо (—>), если персонажа не было и он новый – стрелочку влево (<—)\n\nЕсли инструкция понятна, нажмите клавишу “пробел”',
        font='Open Sans',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_resp_instr_2 = keyboard.Keyboard(deviceName='key_resp_instr_2')
    
    # --- Initialize components for Routine "pic2" ---
    image_2 = visual.ImageStim(
        win=win,
        name='image_2', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(None, 0.4),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    text_label_2 = visual.TextStim(win=win, name='text_label_2',
        text='',
        font='Open Sans',
        units='height', pos=(0, -0.3), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    key_resp_recognition = keyboard.Keyboard(deviceName='key_resp_recognition')
    text_instr_3 = visual.TextStim(win=win, name='text_instr_3',
        text='стрелка вправо - персонаж был\nстрелка влево - не было',
        font='Open Sans',
        units='height', pos=(0, -0.4), draggable=False, height=0.02, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    
    # --- Initialize components for Routine "final_text" ---
    text_fin = visual.TextStim(win=win, name='text_fin',
        text='Большое спасибо за то, что согласились принять участие в исследовании и уделили ему время! Дождитесь, пожалуйста, окончания загрузки данных: данное окно закроется автоматически!',
        font='Open Sans',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # --- Prepare to start Routine "instr_1" ---
    # create an object to store info about Routine instr_1
    instr_1 = data.Routine(
        name='instr_1',
        components=[text_instr_1, key_resp_instr_1],
    )
    instr_1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for key_resp_instr_1
    key_resp_instr_1.keys = []
    key_resp_instr_1.rt = []
    _key_resp_instr_1_allKeys = []
    # store start times for instr_1
    instr_1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    instr_1.tStart = globalClock.getTime(format='float')
    instr_1.status = STARTED
    thisExp.addData('instr_1.started', instr_1.tStart)
    instr_1.maxDuration = None
    # keep track of which components have finished
    instr_1Components = instr_1.components
    for thisComponent in instr_1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "instr_1" ---
    instr_1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_instr_1* updates
        
        # if text_instr_1 is starting this frame...
        if text_instr_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_instr_1.frameNStart = frameN  # exact frame index
            text_instr_1.tStart = t  # local t and not account for scr refresh
            text_instr_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_instr_1, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_instr_1.status = STARTED
            text_instr_1.setAutoDraw(True)
        
        # if text_instr_1 is active this frame...
        if text_instr_1.status == STARTED:
            # update params
            pass
        
        # *key_resp_instr_1* updates
        waitOnFlip = False
        
        # if key_resp_instr_1 is starting this frame...
        if key_resp_instr_1.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            key_resp_instr_1.frameNStart = frameN  # exact frame index
            key_resp_instr_1.tStart = t  # local t and not account for scr refresh
            key_resp_instr_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_instr_1, 'tStartRefresh')  # time at next scr refresh
            # update status
            key_resp_instr_1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_instr_1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_instr_1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_instr_1.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_instr_1.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_instr_1_allKeys.extend(theseKeys)
            if len(_key_resp_instr_1_allKeys):
                key_resp_instr_1.keys = _key_resp_instr_1_allKeys[-1].name  # just the last key pressed
                key_resp_instr_1.rt = _key_resp_instr_1_allKeys[-1].rt
                key_resp_instr_1.duration = _key_resp_instr_1_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            instr_1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instr_1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instr_1" ---
    for thisComponent in instr_1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for instr_1
    instr_1.tStop = globalClock.getTime(format='float')
    instr_1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('instr_1.stopped', instr_1.tStop)
    # check responses
    if key_resp_instr_1.keys in ['', [], None]:  # No response was made
        key_resp_instr_1.keys = None
    thisExp.addData('key_resp_instr_1.keys',key_resp_instr_1.keys)
    if key_resp_instr_1.keys != None:  # we had a response
        thisExp.addData('key_resp_instr_1.rt', key_resp_instr_1.rt)
        thisExp.addData('key_resp_instr_1.duration', key_resp_instr_1.duration)
    thisExp.nextEntry()
    # the Routine "instr_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    loop_1_block = data.TrialHandler2(
        name='loop_1_block',
        nReps=1.0, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('incon_stim.xlsx'), 
        seed=None, 
    )
    thisExp.addLoop(loop_1_block)  # add the loop to the experiment
    thisLoop_1_block = loop_1_block.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisLoop_1_block.rgb)
    if thisLoop_1_block != None:
        for paramName in thisLoop_1_block:
            globals()[paramName] = thisLoop_1_block[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisLoop_1_block in loop_1_block:
        currentLoop = loop_1_block
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisLoop_1_block.rgb)
        if thisLoop_1_block != None:
            for paramName in thisLoop_1_block:
                globals()[paramName] = thisLoop_1_block[paramName]
        
        # --- Prepare to start Routine "quest_1" ---
        # create an object to store info about Routine quest_1
        quest_1 = data.Routine(
            name='quest_1',
            components=[text, text_2, key_resp],
        )
        quest_1.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        text.setText(QuestionText)
        # create starting attributes for key_resp
        key_resp.keys = []
        key_resp.rt = []
        _key_resp_allKeys = []
        # store start times for quest_1
        quest_1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        quest_1.tStart = globalClock.getTime(format='float')
        quest_1.status = STARTED
        thisExp.addData('quest_1.started', quest_1.tStart)
        quest_1.maxDuration = None
        # keep track of which components have finished
        quest_1Components = quest_1.components
        for thisComponent in quest_1.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "quest_1" ---
        # if trial has changed, end Routine now
        if isinstance(loop_1_block, data.TrialHandler2) and thisLoop_1_block.thisN != loop_1_block.thisTrial.thisN:
            continueRoutine = False
        quest_1.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text* updates
            
            # if text is starting this frame...
            if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text.frameNStart = frameN  # exact frame index
                text.tStart = t  # local t and not account for scr refresh
                text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
                # update status
                text.status = STARTED
                text.setAutoDraw(True)
            
            # if text is active this frame...
            if text.status == STARTED:
                # update params
                pass
            
            # *text_2* updates
            
            # if text_2 is starting this frame...
            if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_2.frameNStart = frameN  # exact frame index
                text_2.tStart = t  # local t and not account for scr refresh
                text_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
                # update status
                text_2.status = STARTED
                text_2.setAutoDraw(True)
            
            # if text_2 is active this frame...
            if text_2.status == STARTED:
                # update params
                pass
            
            # *key_resp* updates
            waitOnFlip = False
            
            # if key_resp is starting this frame...
            if key_resp.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                key_resp.frameNStart = frameN  # exact frame index
                key_resp.tStart = t  # local t and not account for scr refresh
                key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
                # update status
                key_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp.status == STARTED and not waitOnFlip:
                theseKeys = key_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_allKeys.extend(theseKeys)
                if len(_key_resp_allKeys):
                    key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                    key_resp.rt = _key_resp_allKeys[-1].rt
                    key_resp.duration = _key_resp_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                quest_1.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in quest_1.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "quest_1" ---
        for thisComponent in quest_1.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for quest_1
        quest_1.tStop = globalClock.getTime(format='float')
        quest_1.tStopRefresh = tThisFlipGlobal
        thisExp.addData('quest_1.stopped', quest_1.tStop)
        # check responses
        if key_resp.keys in ['', [], None]:  # No response was made
            key_resp.keys = None
        loop_1_block.addData('key_resp.keys',key_resp.keys)
        if key_resp.keys != None:  # we had a response
            loop_1_block.addData('key_resp.rt', key_resp.rt)
            loop_1_block.addData('key_resp.duration', key_resp.duration)
        # the Routine "quest_1" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "pic_1" ---
        # create an object to store info about Routine pic_1
        pic_1 = data.Routine(
            name='pic_1',
            components=[image_1, text_label_1],
        )
        pic_1.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        image_1.setImage(ImageFile)
        text_label_1.setText(LabelText)
        # store start times for pic_1
        pic_1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        pic_1.tStart = globalClock.getTime(format='float')
        pic_1.status = STARTED
        thisExp.addData('pic_1.started', pic_1.tStart)
        pic_1.maxDuration = None
        # keep track of which components have finished
        pic_1Components = pic_1.components
        for thisComponent in pic_1.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "pic_1" ---
        # if trial has changed, end Routine now
        if isinstance(loop_1_block, data.TrialHandler2) and thisLoop_1_block.thisN != loop_1_block.thisTrial.thisN:
            continueRoutine = False
        pic_1.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 2.5:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_1* updates
            
            # if image_1 is starting this frame...
            if image_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_1.frameNStart = frameN  # exact frame index
                image_1.tStart = t  # local t and not account for scr refresh
                image_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_1, 'tStartRefresh')  # time at next scr refresh
                # update status
                image_1.status = STARTED
                image_1.setAutoDraw(True)
            
            # if image_1 is active this frame...
            if image_1.status == STARTED:
                # update params
                pass
            
            # if image_1 is stopping this frame...
            if image_1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_1.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    image_1.tStop = t  # not accounting for scr refresh
                    image_1.tStopRefresh = tThisFlipGlobal  # on global time
                    image_1.frameNStop = frameN  # exact frame index
                    # update status
                    image_1.status = FINISHED
                    image_1.setAutoDraw(False)
            
            # *text_label_1* updates
            
            # if text_label_1 is starting this frame...
            if text_label_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_label_1.frameNStart = frameN  # exact frame index
                text_label_1.tStart = t  # local t and not account for scr refresh
                text_label_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_label_1, 'tStartRefresh')  # time at next scr refresh
                # update status
                text_label_1.status = STARTED
                text_label_1.setAutoDraw(True)
            
            # if text_label_1 is active this frame...
            if text_label_1.status == STARTED:
                # update params
                pass
            
            # if text_label_1 is stopping this frame...
            if text_label_1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_label_1.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    text_label_1.tStop = t  # not accounting for scr refresh
                    text_label_1.tStopRefresh = tThisFlipGlobal  # on global time
                    text_label_1.frameNStop = frameN  # exact frame index
                    # update status
                    text_label_1.status = FINISHED
                    text_label_1.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                pic_1.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in pic_1.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "pic_1" ---
        for thisComponent in pic_1.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for pic_1
        pic_1.tStop = globalClock.getTime(format='float')
        pic_1.tStopRefresh = tThisFlipGlobal
        thisExp.addData('pic_1.stopped', pic_1.tStop)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if pic_1.maxDurationReached:
            routineTimer.addTime(-pic_1.maxDuration)
        elif pic_1.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-2.500000)
        
        # --- Prepare to start Routine "ans_quest_1" ---
        # create an object to store info about Routine ans_quest_1
        ans_quest_1 = data.Routine(
            name='ans_quest_1',
            components=[text_ans_quest_right, text_ans_quest_left, key_resp_ans_quest_1],
        )
        ans_quest_1.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # create starting attributes for key_resp_ans_quest_1
        key_resp_ans_quest_1.keys = []
        key_resp_ans_quest_1.rt = []
        _key_resp_ans_quest_1_allKeys = []
        # store start times for ans_quest_1
        ans_quest_1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        ans_quest_1.tStart = globalClock.getTime(format='float')
        ans_quest_1.status = STARTED
        thisExp.addData('ans_quest_1.started', ans_quest_1.tStart)
        ans_quest_1.maxDuration = None
        # keep track of which components have finished
        ans_quest_1Components = ans_quest_1.components
        for thisComponent in ans_quest_1.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "ans_quest_1" ---
        # if trial has changed, end Routine now
        if isinstance(loop_1_block, data.TrialHandler2) and thisLoop_1_block.thisN != loop_1_block.thisTrial.thisN:
            continueRoutine = False
        ans_quest_1.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_ans_quest_right* updates
            
            # if text_ans_quest_right is starting this frame...
            if text_ans_quest_right.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_ans_quest_right.frameNStart = frameN  # exact frame index
                text_ans_quest_right.tStart = t  # local t and not account for scr refresh
                text_ans_quest_right.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_ans_quest_right, 'tStartRefresh')  # time at next scr refresh
                # update status
                text_ans_quest_right.status = STARTED
                text_ans_quest_right.setAutoDraw(True)
            
            # if text_ans_quest_right is active this frame...
            if text_ans_quest_right.status == STARTED:
                # update params
                pass
            
            # *text_ans_quest_left* updates
            
            # if text_ans_quest_left is starting this frame...
            if text_ans_quest_left.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_ans_quest_left.frameNStart = frameN  # exact frame index
                text_ans_quest_left.tStart = t  # local t and not account for scr refresh
                text_ans_quest_left.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_ans_quest_left, 'tStartRefresh')  # time at next scr refresh
                # update status
                text_ans_quest_left.status = STARTED
                text_ans_quest_left.setAutoDraw(True)
            
            # if text_ans_quest_left is active this frame...
            if text_ans_quest_left.status == STARTED:
                # update params
                pass
            
            # *key_resp_ans_quest_1* updates
            waitOnFlip = False
            
            # if key_resp_ans_quest_1 is starting this frame...
            if key_resp_ans_quest_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_ans_quest_1.frameNStart = frameN  # exact frame index
                key_resp_ans_quest_1.tStart = t  # local t and not account for scr refresh
                key_resp_ans_quest_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_ans_quest_1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_ans_quest_1.started')
                # update status
                key_resp_ans_quest_1.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_ans_quest_1.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_ans_quest_1.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_ans_quest_1.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_ans_quest_1.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_ans_quest_1_allKeys.extend(theseKeys)
                if len(_key_resp_ans_quest_1_allKeys):
                    key_resp_ans_quest_1.keys = _key_resp_ans_quest_1_allKeys[-1].name  # just the last key pressed
                    key_resp_ans_quest_1.rt = _key_resp_ans_quest_1_allKeys[-1].rt
                    key_resp_ans_quest_1.duration = _key_resp_ans_quest_1_allKeys[-1].duration
                    # was this correct?
                    if (key_resp_ans_quest_1.keys == str(CorrectAnswer_congr)) or (key_resp_ans_quest_1.keys == CorrectAnswer_congr):
                        key_resp_ans_quest_1.corr = 1
                    else:
                        key_resp_ans_quest_1.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                ans_quest_1.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in ans_quest_1.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "ans_quest_1" ---
        for thisComponent in ans_quest_1.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for ans_quest_1
        ans_quest_1.tStop = globalClock.getTime(format='float')
        ans_quest_1.tStopRefresh = tThisFlipGlobal
        thisExp.addData('ans_quest_1.stopped', ans_quest_1.tStop)
        # check responses
        if key_resp_ans_quest_1.keys in ['', [], None]:  # No response was made
            key_resp_ans_quest_1.keys = None
            # was no response the correct answer?!
            if str(CorrectAnswer_congr).lower() == 'none':
               key_resp_ans_quest_1.corr = 1;  # correct non-response
            else:
               key_resp_ans_quest_1.corr = 0;  # failed to respond (incorrectly)
        # store data for loop_1_block (TrialHandler)
        loop_1_block.addData('key_resp_ans_quest_1.keys',key_resp_ans_quest_1.keys)
        loop_1_block.addData('key_resp_ans_quest_1.corr', key_resp_ans_quest_1.corr)
        if key_resp_ans_quest_1.keys != None:  # we had a response
            loop_1_block.addData('key_resp_ans_quest_1.rt', key_resp_ans_quest_1.rt)
            loop_1_block.addData('key_resp_ans_quest_1.duration', key_resp_ans_quest_1.duration)
        # the Routine "ans_quest_1" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'loop_1_block'
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "instr_2" ---
    # create an object to store info about Routine instr_2
    instr_2 = data.Routine(
        name='instr_2',
        components=[text_3, key_resp_instr_2],
    )
    instr_2.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for key_resp_instr_2
    key_resp_instr_2.keys = []
    key_resp_instr_2.rt = []
    _key_resp_instr_2_allKeys = []
    # store start times for instr_2
    instr_2.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    instr_2.tStart = globalClock.getTime(format='float')
    instr_2.status = STARTED
    thisExp.addData('instr_2.started', instr_2.tStart)
    instr_2.maxDuration = None
    # keep track of which components have finished
    instr_2Components = instr_2.components
    for thisComponent in instr_2.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "instr_2" ---
    instr_2.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_3* updates
        
        # if text_3 is starting this frame...
        if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_3.frameNStart = frameN  # exact frame index
            text_3.tStart = t  # local t and not account for scr refresh
            text_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_3.status = STARTED
            text_3.setAutoDraw(True)
        
        # if text_3 is active this frame...
        if text_3.status == STARTED:
            # update params
            pass
        
        # *key_resp_instr_2* updates
        waitOnFlip = False
        
        # if key_resp_instr_2 is starting this frame...
        if key_resp_instr_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_instr_2.frameNStart = frameN  # exact frame index
            key_resp_instr_2.tStart = t  # local t and not account for scr refresh
            key_resp_instr_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_instr_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            key_resp_instr_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_instr_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_instr_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_instr_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_instr_2.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_instr_2_allKeys.extend(theseKeys)
            if len(_key_resp_instr_2_allKeys):
                key_resp_instr_2.keys = _key_resp_instr_2_allKeys[-1].name  # just the last key pressed
                key_resp_instr_2.rt = _key_resp_instr_2_allKeys[-1].rt
                key_resp_instr_2.duration = _key_resp_instr_2_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            instr_2.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instr_2.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instr_2" ---
    for thisComponent in instr_2.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for instr_2
    instr_2.tStop = globalClock.getTime(format='float')
    instr_2.tStopRefresh = tThisFlipGlobal
    thisExp.addData('instr_2.stopped', instr_2.tStop)
    # check responses
    if key_resp_instr_2.keys in ['', [], None]:  # No response was made
        key_resp_instr_2.keys = None
    thisExp.addData('key_resp_instr_2.keys',key_resp_instr_2.keys)
    if key_resp_instr_2.keys != None:  # we had a response
        thisExp.addData('key_resp_instr_2.rt', key_resp_instr_2.rt)
        thisExp.addData('key_resp_instr_2.duration', key_resp_instr_2.duration)
    thisExp.nextEntry()
    # the Routine "instr_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    loop_2_block = data.TrialHandler2(
        name='loop_2_block',
        nReps=1.0, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('all_incongr_stim_list.xlsx'), 
        seed=None, 
    )
    thisExp.addLoop(loop_2_block)  # add the loop to the experiment
    thisLoop_2_block = loop_2_block.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisLoop_2_block.rgb)
    if thisLoop_2_block != None:
        for paramName in thisLoop_2_block:
            globals()[paramName] = thisLoop_2_block[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisLoop_2_block in loop_2_block:
        currentLoop = loop_2_block
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisLoop_2_block.rgb)
        if thisLoop_2_block != None:
            for paramName in thisLoop_2_block:
                globals()[paramName] = thisLoop_2_block[paramName]
        
        # --- Prepare to start Routine "pic2" ---
        # create an object to store info about Routine pic2
        pic2 = data.Routine(
            name='pic2',
            components=[image_2, text_label_2, key_resp_recognition, text_instr_3],
        )
        pic2.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        image_2.setImage(ImageFile_All_list)
        text_label_2.setText(LabelText_all)
        # create starting attributes for key_resp_recognition
        key_resp_recognition.keys = []
        key_resp_recognition.rt = []
        _key_resp_recognition_allKeys = []
        # store start times for pic2
        pic2.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        pic2.tStart = globalClock.getTime(format='float')
        pic2.status = STARTED
        thisExp.addData('pic2.started', pic2.tStart)
        pic2.maxDuration = None
        # keep track of which components have finished
        pic2Components = pic2.components
        for thisComponent in pic2.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "pic2" ---
        # if trial has changed, end Routine now
        if isinstance(loop_2_block, data.TrialHandler2) and thisLoop_2_block.thisN != loop_2_block.thisTrial.thisN:
            continueRoutine = False
        pic2.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_2* updates
            
            # if image_2 is starting this frame...
            if image_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_2.frameNStart = frameN  # exact frame index
                image_2.tStart = t  # local t and not account for scr refresh
                image_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
                # update status
                image_2.status = STARTED
                image_2.setAutoDraw(True)
            
            # if image_2 is active this frame...
            if image_2.status == STARTED:
                # update params
                pass
            
            # *text_label_2* updates
            
            # if text_label_2 is starting this frame...
            if text_label_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_label_2.frameNStart = frameN  # exact frame index
                text_label_2.tStart = t  # local t and not account for scr refresh
                text_label_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_label_2, 'tStartRefresh')  # time at next scr refresh
                # update status
                text_label_2.status = STARTED
                text_label_2.setAutoDraw(True)
            
            # if text_label_2 is active this frame...
            if text_label_2.status == STARTED:
                # update params
                pass
            
            # *key_resp_recognition* updates
            waitOnFlip = False
            
            # if key_resp_recognition is starting this frame...
            if key_resp_recognition.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_recognition.frameNStart = frameN  # exact frame index
                key_resp_recognition.tStart = t  # local t and not account for scr refresh
                key_resp_recognition.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_recognition, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_recognition.started')
                # update status
                key_resp_recognition.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_recognition.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_recognition.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_recognition.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_recognition.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_recognition_allKeys.extend(theseKeys)
                if len(_key_resp_recognition_allKeys):
                    key_resp_recognition.keys = _key_resp_recognition_allKeys[-1].name  # just the last key pressed
                    key_resp_recognition.rt = _key_resp_recognition_allKeys[-1].rt
                    key_resp_recognition.duration = _key_resp_recognition_allKeys[-1].duration
                    # was this correct?
                    if (key_resp_recognition.keys == str('@True_Ans_all')) or (key_resp_recognition.keys == '@True_Ans_all'):
                        key_resp_recognition.corr = 1
                    else:
                        key_resp_recognition.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # *text_instr_3* updates
            
            # if text_instr_3 is starting this frame...
            if text_instr_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_instr_3.frameNStart = frameN  # exact frame index
                text_instr_3.tStart = t  # local t and not account for scr refresh
                text_instr_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_instr_3, 'tStartRefresh')  # time at next scr refresh
                # update status
                text_instr_3.status = STARTED
                text_instr_3.setAutoDraw(True)
            
            # if text_instr_3 is active this frame...
            if text_instr_3.status == STARTED:
                # update params
                pass
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                pic2.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in pic2.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "pic2" ---
        for thisComponent in pic2.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for pic2
        pic2.tStop = globalClock.getTime(format='float')
        pic2.tStopRefresh = tThisFlipGlobal
        thisExp.addData('pic2.stopped', pic2.tStop)
        # check responses
        if key_resp_recognition.keys in ['', [], None]:  # No response was made
            key_resp_recognition.keys = None
            # was no response the correct answer?!
            if str('@True_Ans_all').lower() == 'none':
               key_resp_recognition.corr = 1;  # correct non-response
            else:
               key_resp_recognition.corr = 0;  # failed to respond (incorrectly)
        # store data for loop_2_block (TrialHandler)
        loop_2_block.addData('key_resp_recognition.keys',key_resp_recognition.keys)
        loop_2_block.addData('key_resp_recognition.corr', key_resp_recognition.corr)
        if key_resp_recognition.keys != None:  # we had a response
            loop_2_block.addData('key_resp_recognition.rt', key_resp_recognition.rt)
            loop_2_block.addData('key_resp_recognition.duration', key_resp_recognition.duration)
        # the Routine "pic2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'loop_2_block'
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "final_text" ---
    # create an object to store info about Routine final_text
    final_text = data.Routine(
        name='final_text',
        components=[text_fin],
    )
    final_text.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for final_text
    final_text.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    final_text.tStart = globalClock.getTime(format='float')
    final_text.status = STARTED
    thisExp.addData('final_text.started', final_text.tStart)
    final_text.maxDuration = None
    # keep track of which components have finished
    final_textComponents = final_text.components
    for thisComponent in final_text.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "final_text" ---
    final_text.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 2.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_fin* updates
        
        # if text_fin is starting this frame...
        if text_fin.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_fin.frameNStart = frameN  # exact frame index
            text_fin.tStart = t  # local t and not account for scr refresh
            text_fin.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_fin, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_fin.started')
            # update status
            text_fin.status = STARTED
            text_fin.setAutoDraw(True)
        
        # if text_fin is active this frame...
        if text_fin.status == STARTED:
            # update params
            pass
        
        # if text_fin is stopping this frame...
        if text_fin.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_fin.tStartRefresh + 2.0-frameTolerance:
                # keep track of stop time/frame for later
                text_fin.tStop = t  # not accounting for scr refresh
                text_fin.tStopRefresh = tThisFlipGlobal  # on global time
                text_fin.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_fin.stopped')
                # update status
                text_fin.status = FINISHED
                text_fin.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            final_text.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in final_text.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "final_text" ---
    for thisComponent in final_text.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for final_text
    final_text.tStop = globalClock.getTime(format='float')
    final_text.tStopRefresh = tThisFlipGlobal
    thisExp.addData('final_text.stopped', final_text.tStop)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if final_text.maxDurationReached:
        routineTimer.addTime(-final_text.maxDuration)
    elif final_text.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-2.000000)
    thisExp.nextEntry()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # return console logger level to WARNING
    logging.console.setLevel(logging.WARNING)
    # mark experiment handler as finished
    thisExp.status = FINISHED
    logging.flush()


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
