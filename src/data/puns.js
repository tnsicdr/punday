// Data is being held in an array for now, maybe move to an API in the future
const puns = [
    `I tried an electric oven for the first time yesterday. It was shocking.`,
    `The problem with UDP jokes is that I don't get half of them.`,
    `I made an NTP joke once. The timing was perfect.`,
    `The candle quit his job because he felt burned out.`,
    `I had a pun about insanity but then I lost it.`,
    `I used to be afraid of hurdles, but I got over it.`,
    `I'd like to start a diet, but I've got too much on my plate right now.`,
    `The shovel was a ground-breaking invention.`,
    `As I suspected, someone has been adding soil to my garden. The plot thickens.`,
    `I burned 2000 calories today, I left my food in the oven for too long.`,
    `I think circles are pointless.`,
    `I used to be addicted to soap, but I'm clean now.`,
    `I knew a guy who collected candy canes, they were all in mint condition`,
    `I will iron out the details later, said the man pressed for time`,
    `Whoever stole my Microsoft DVD is in big trouble. You have my word!`
];

export const getPun = () => {
    const randomIndex = Math.floor(Math.random() * puns.length);

    return puns[randomIndex];
}