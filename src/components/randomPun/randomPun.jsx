import { useState } from "react";
import { getPun } from "../../data/puns";

const RandomPun = () => {
    const [pun, setPun] = useState(getPun());
    return (
        <>{pun}</>
    );
};

export default RandomPun;