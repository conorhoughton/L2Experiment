import {stimuli} from './stimuli.js';

var trial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
        var word = jsPsych.timelineVariable('word', true);
        var translation = jsPsych.timelineVariable('translation', true);
	var image = jsPsych.timelineVariable('imageFile', true);
        return '<p style="font-size:60px;font-weight:bold;">' + word + '<img src=' + image + '>' + translation + '</p><p>press ENTER to continue.</p>';
    },
    choices: ['Enter'],
    post_trial_gap: 500,
    data: {stimulus_type: 'word-translation'}
};

// Define the multiple-choice question trial
var question_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function() {
        var translation = jsPsych.timelineVariable('translation', true);
        var correct = jsPsych.timelineVariable('correct', true);
        var incorrect = jsPsych.timelineVariable('incorrect', true);
        return '<p>What is the Toki Pona word for "' + translation + '"?</p>';
    },
    choices: function() {
        var correct = jsPsych.timelineVariable('correct', true);
        var incorrect = jsPsych.timelineVariable('incorrect', true);
        return [correct, incorrect];
    },
    data: {stimulus_type: 'multiple-choice'},
    correct_choice: function() {
        var correct = jsPsych.timelineVariable('correct', true);
        return correct;
    },
    feedback: function() {
        var correct = jsPsych.timelineVariable('correct', true);
        var incorrect = jsPsych.timelineVariable('incorrect', true);
        var response = jsPsych.data.get().last(1).values()[0].button_pressed;
        if (response == correct) {
            return '<p>Correct!</p>';
        } else {
            return '<p>Sorry, the correct answer was "' + correct + '".</p>';
        }
    }
};

// Define the experiment timeline
var timeline = [];
for (var i = 0; i < stimuli.length; i++) {
    var trial_data = {
        word: stimuli[i].word,
        translation: stimuli[i].translation,
        correct: stimuli[i].correct,
        incorrect: stimuli[i].incorrect,
	imageFile: stimuli[i].imageFile
    };
    timeline.push({timeline: [trial, question_trial], timeline_variables: [trial_data]});
}

const jsPsych = initJsPsych();
jsPsych.run(timeline)
