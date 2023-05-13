const jsPsych = initJsPsych();

console.log("here");

var trial = {
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="font-size:48px; color:red;">GREEN</p>',
  choices: ['Red', 'Green', 'Blue'],
  prompt: "<p>What color is the ink?</p>"
};

timeline=[]
timeline.push(trial)

// Run the experiment
jsPsych.run(timeline)


