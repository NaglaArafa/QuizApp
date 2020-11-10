function Answer(props) {

    const { correct , txt, name, chose} = props
    
    // todo : Adding type image to the questions
    
    // let Img;
    // type === "text" ?
    //     Img = <p>{txt}</p> :
    //     Img = <img src={txt}></img>

        function changeAnswer(e){
            correct ? chose("correct") : chose("incorrect")
        }
        
    return(

        <div>
            <input name={name} type="radio" onChange={(e) => changeAnswer(e)}/>
            {txt}
        </div>
    )
}

export default Answer;