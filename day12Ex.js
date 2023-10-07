/* Level 1 */


// 1) Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const incomeText = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
const incomeArray = incomeText.match(/\d+/g).map(Number);
const totalIncome = incomeArray.reduce((acc,val)=>acc+val,0);
console.log(`Total Incomne Is : ${totalIncome} Euro`);



// 2) The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];
const sortedPoint = points.map(Number).sort((a,b)=>a-b);
const distance = sortedPoint[sortedPoint.length-1]-sortedPoint[0];
console.log(distance);



// 3) Write a pattern which identify if a string is a valid JavaScript variable

function is_valid_variable(str){
    const pattern = /[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    return pattern.test(str);
}

console.log(is_valid_variable('firstName'));
console.log(is_valid_variable('FirstName'));
console.log(is_valid_variable('0firstName'));
console.log(is_valid_variable('_firstName$'));



/* Level 2 */

// 1) Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

        function tenMostFrequentWords(paragraph){
        const word = paragraph.toLowerCase().split(/\s+/);

        const wordFrequency={};
        word.forEach(word => {
            if(wordFrequency[word]){
                wordFrequency[word]++;
            }else{
                wordFrequency[word]=1;
            }
        });

        //convert to wordFrequency object into array
        const wordFrequencyArray = Object.keys(wordFrequency).map((word)=>({
            word,
            frequency:wordFrequency[word]
        }))

        //sort array
        wordFrequencyArray.sort((a,b)=>b.frequency-a.frequency);

        //get top 10 word
        const topTenWord=wordFrequencyArray.slice(0,10);

        return topTenWord.map((entry)=>entry.word);
    }
    paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

    console.log(tenMostFrequentWords(paragraph));
