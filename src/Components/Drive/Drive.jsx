import { useState } from "react";
import "./Drive.scss";
function Drive() {
  const [questions] = useState([
    {
      id: 1,
      question: "What is Kitahub, and how does it benefit students?",
      answers: [
        "Cut costs, mitigate risk, and maximize ",
        "operational efficiency with Beekeeper.",
        "Empower frontline teams to excel, improving",
        "quality, brand reputation, and customer",
        "satisfaction while driving revenue growth.",
      ],
    },
    {
      id: 2,
      question: "How does Kitahub help students get hired?",
      answers: [
        "Cut costs, mitigate risk, and maximize ",
        "operational efficiency with Beekeeper.",
        "Empower frontline teams to excel, improving",
        "quality, brand reputation, and customer",
        "satisfaction while driving revenue growth.",
      ],
    },

    {
      id: 3,
      question: "What makes Kitahub different from other educational?",
      answers: [
        "Cut costs, mitigate risk, and maximize ",
        "operational efficiency with Beekeeper.",
        "Empower frontline teams to excel, improving",
        "quality, brand reputation, and customer",
        "satisfaction while driving revenue growth.",
      ],
    },
    {
      id: 4,
      question: "Is Kitahub suitable for subjects beyond computer science?",
      answers: [
        "Cut costs, mitigate risk, and maximize ",
        "operational efficiency with Beekeeper.",
        "Empower frontline teams to excel, improving",
        "quality, brand reputation, and customer",
        "satisfaction while driving revenue growth.",
      ],
    },
    {
      id: 5,
      question: "How does Kitahub ensure compliance with FERPA?",
      answers: [
        "Cut costs, mitigate risk, and maximize ",
        "operational efficiency with Beekeeper.",
        "Empower frontline teams to excel, improving",
        "quality, brand reputation, and customer",
        "satisfaction while driving revenue growth.",
      ],
    },
    {
      id: 6,
      question:
        "Do students have to share their academic data with recruiters on Kitahub?",
      answers: [
        "Cut costs, mitigate risk, and maximize ",
        "operational efficiency with Beekeeper.",
        "Empower frontline teams to excel, improving",
        "quality, brand reputation, and customer",
        "satisfaction while driving revenue growth.",
      ],
    },
  ]);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const handleQuestionClick = (id) => {
    if (selectedQuestionId === id) {
      setSelectedQuestionId(null);
    } else {
      setSelectedQuestionId(id);
    }
  };

  return (
    <>
      <div className="Drive-con">
        <div className="content-container">
          <p className="content-containerp" style={{ fontWeight: "bold" }}>
            Making frontline lives easier
          </p>
          <div>
            {questions.map((question) => (
              <div key={question.id} className="question-container">
                <div
                  className="question-header"
                  onClick={() => handleQuestionClick(question.id)}
                >
                  <p>
                    <a href="#!" style={{ textDecoration: "none" }}>
                      {question.question}
                    </a>
                  </p>
                  <span>
                    <a
                      href="#!"
                      style={{
                        textDecoration: "none",
                        color: "skyblue",
                        fontSize: "22px",
                      }}
                    >
                      {selectedQuestionId === question.id ? "-" : "+"}
                    </a>
                  </span>
                </div>
                {selectedQuestionId === question.id && (
                  <ul
                    className="answer-list"
                    style={{ listStyleType: "none", marginLeft: "14%" }}
                  >
                    {question.answers.map((answer, index) => (
                      <li key={index}>{answer}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <img
            src="/Images/woman.webp"
            style={{
              width: "60%",
              marginLeft: "40px",
              cursor: "pointer",
              marginTop: "23%",
            }}
          />
        </div>
      </div>
    </>
  );
}
export default Drive;
