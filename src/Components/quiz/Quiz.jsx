import React, { useState } from "react";
import { QuizWrapper, Question, Options, OptionButton, NextButton, Score } from "./Quiz.styles";

const quizData = [
    {
        question: "Qual é o primeiro passo para investir no seu negócio?",
        options: [
            "Definir seu público-alvo",
            "Contratar funcionários",
            "Comprar produtos aleatórios",
            "Ignorar o planejamento financeiro"
        ],
        answer: "Definir seu público-alvo",
    },
    {
        question: "Por que é importante ter uma reserva de emergência?",
        options: [
            "Para pagar dívidas inesperadas",
            "Para investir em outra empresa",
            "Para ignorar imprevistos",
            "Para aumentar custos operacionais"
        ],
        answer: "Para pagar dívidas inesperadas",
    },
];

function QuizComponent() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswer = (option) => {
        setSelectedAnswer(option);

        if (option === quizData[currentQuestion].answer) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null); 
    };

    return (
        <QuizWrapper>
            {currentQuestion < quizData.length ? (
                <>
                    
                    <Question>{quizData[currentQuestion].question}</Question>

                   
                    <Options>
                        {quizData[currentQuestion].options.map((option, index) => (
                            <OptionButton
                                key={index}
                                isSelected={selectedAnswer === option}
                                isCorrect={option === quizData[currentQuestion].answer}
                                onClick={() => handleAnswer(option)}
                                disabled={!!selectedAnswer}
                            >
                                {option}
                            </OptionButton>
                        ))}
                    </Options>


                    <NextButton
                        disabled={!selectedAnswer}
                        onClick={handleNextQuestion}
                    >
                        Próxima pergunta
                    </NextButton>
                </>
            ) : (

                <Score>
                    Você concluiu o quiz! Pontuação: {score}/{quizData.length}
                </Score>
            )}
        </QuizWrapper>
    );
};

export default QuizComponent;