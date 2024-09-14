//Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
function cleanText(text) {
  const cleanSentence = text.replace(/[^\w\s]/g, "");
  return cleanSentence;
}
function threeMostFrequentWord(text) {
  const wordArray = text.toLowerCase().split(/\s+/);
  const wordCount = {};
  for (const word of wordArray) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }
  const wordCountArray = Object.entries(wordCount);
  wordCountArray.sort((a, b) => b[1] - a[1]);

  const topThreeWord = wordCountArray.slice(0, 3);
  return topThreeWord.map((item) => ({
    word: item[0],
    count: item[1],
  }));
}
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
console.log(cleanText(sentence));
const cleanedText = cleanText(sentence);
console.log(threeMostFrequentWord(cleanedText));
