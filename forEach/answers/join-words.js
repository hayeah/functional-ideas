var words = [
	'We','hold','these','truths',
  'to','be','self-evident,','that','all','men','are','created','equal,','that','they','are','endowed',
  'by','their','Creator','with','certain','unalienable','Rights,','that',
  'among','these','are','Life,','Liberty','and','the','pursuit','of', 'Happiness.'
];

var paragraph = "";

words.forEach(word => {
	paragraph += word + " ";
});

console.log(paragraph);