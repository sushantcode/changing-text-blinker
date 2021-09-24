import React, { useState, useEffect } from 'react';

export const ChangingTextBlinker = (props) => {
    const [singleText, setSingleText] = useState(props.stringArray? props.stringArray[0] : "");
    const [currentIndex, setCurrentIndex] = useState(0);
    let componentMounted = true;

    function getRandomInt(size) {
        return Math.floor(Math.random() * size)
    }

    useEffect(() => {
        if (!props.stringArray) {
            throw new Error("ChangingTextBlinker: stringArray props must be provided");
        }
        if (!Array.isArray(props.stringArray)) {
            throw new Error("ChangingTextBlinker: stringArray props must be an array");
        }
        if (!props.delayTime) {
            throw new Error("ChangingTextBlinker: delayTime props must be provided");
        }
        const stringArray = props.stringArray;
        const item = () => {
            setSingleText(stringArray[currentIndex]);
            if (props.random !== null && props.random) {
                var randomInt = getRandomInt(stringArray.length);
                while (randomInt === currentIndex) {
                    randomInt = getRandomInt(stringArray.length);
                }
                setCurrentIndex(randomInt);
            }
            else {
                if (currentIndex === (stringArray.length - 1)) {
                    setCurrentIndex(0);
                }
                else {
                    var temp = currentIndex + 1;
                    setCurrentIndex(temp);
                }
            }
        }
        if (componentMounted) {
            setTimeout(item, props.delayTime * 1000);
        }
        return () => {
            componentMounted = false;
        }
    }, [props, currentIndex]);

    return (
        <div className={props.className}>
            {singleText}
        </div>
    )
};