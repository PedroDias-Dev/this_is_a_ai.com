import Typewriter from 'typewriter-effect';

const TypewriterLine = ({string}) => {
    // typewriter
    //     .pauseFor(2500)
    //     .typeString(string)
    //     .pauseFor(300)

    return(
        <Typewriter
            onInit={(typewriter) => {
            typewriter.typeString(string)
                .callFunction(() => {
                console.log('String typed out!');
                })
                .pauseFor(2500)
                .start();
            }}
            options={{
                delay: 50
            }}
        />
    )

}

export default TypewriterLine;