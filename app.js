function tenMostFrequentWords(paragraph) {
  const cleanedParagraph = paragraph.toLowerCase().replace(/[^\w\s]/g, "");
  const wordArray = cleanedParagraph.split(/\s+/);

  const wordCount = {};
  for (const word of wordArray) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }
  const wordCountArray = Object.entries(wordCount);
  wordCountArray.sort((a, b) => b[1] - a[1]);

  const topTenWord = wordCountArray.slice(0, 10);

  return topTenWord.map((item) => ({
    word: item[0],
    count: item[1],
  }));
}
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
console.log(tenMostFrequentWords(paragraph));
