import React, { useState } from "react";
import { QuizWrapper, Question, Options, OptionButton, NextButton, Score } from "./Quiz.styles";

const quizData = [
    {
        question: "Qual é a principal finalidade do controle de fluxo de caixa em uma empresa?",
        options: [
            "Identificar clientes inadimplentes.",
            "Monitorar as entradas e saídas de dinheiro.",
            "Definir metas de longo prazo.",
            "Automatizar processos internos."
        ],
        answer: "Monitorar as entradas e saídas de dinheiro.",
    },
    {
        question: "Por que é importante realizar a análise de custos e despesas regularmente?",
        options: [
            "Para determinar o lucro total da empresa.",
            "Para identificar oportunidades de redução de gastos.",
            "Para evitar o uso de tecnologia no controle financeiro.",
            "Para definir novos fornecedores automaticamente."
        ],
        answer: "Para identificar oportunidades de redução de gastos.",
    },

    {
        question: "Qual é a vantagem de utilizar tecnologia na gestão financeira?",
        options: [
            "Automatizar processos e reduzir erros.",
            "Aumentar as despesas da empresa.",
            "Controlar apenas as despesas variáveis.",
            "Eliminar a necessidade de planejamento financeiro."
        ],
        answer: "Automatizar processos e reduzir erros.",
    },

    {
        question: "O que uma reserva de emergência ajuda a evitar?",
        options: [
            "O crescimento do negócio.",
            "A dependência de crédito em situações inesperadas.",
            "A necessidade de planejamento financeiro.",
            "A redução de custos e despesas."
        ],
        answer: "A dependência de crédito em situações inesperadas.",
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