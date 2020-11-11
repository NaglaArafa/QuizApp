import {useSelector} from "react-redux";
import {Col, Container, Row} from "../../styled/grid";
import {TitleH3} from "../../styled/components/Title";

function Result (){
    // Just show the Result that we have for Questions

    const {
        correct ,
        incorrect ,
        unAnswered ,
        fiftyfifty ,
        extindtime
    } = useSelector(state => state.QuizReducer)


    return (
        <Container>
            <TitleH3>Thanks For Finishing the Quiz</TitleH3>
            <Row display="flex">
                <Col flex="1">  Correct Answers : {correct}</Col>
                <Col flex="1">  Incorrect Answers : {incorrect}</Col>
                <Col flex="1">  Un Answered Answers : {unAnswered}</Col>
                <Col flex="1">  Used Life times : {fiftyfifty + extindtime }</Col>
            </Row>
        </Container>
    )
}

export default Result