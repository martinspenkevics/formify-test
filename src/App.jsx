import React, { useEffect, useRef } from "react";
import "./formify/formify.css";
import "./formify/formify.es.js";

function App() {
  const formDefinition = {
    title: "My Demo Form",
    sections: [
      {
        title: "Personal Information",
        questions: [
          { id: "name", text: "Name", type: "text", rules: [] },
          { id: "email", text: "Email", type: "email", rules: [] },
        ],
        rules: [],
      },
      {
        title: "Survey",
        questions: [
          {
            id: "satisfaction",
            text: "Overall satisfaction",
            type: "radio",
            options: ["Very Satisfied", "Satisfied", "Neutral", "Unsatisfied"],
            rules: [],
          },
          {
            id: "comments",
            text: "Comments",
            type: "textarea",
            rules: [
              {
                if: {
                  questionId: "satisfaction",
                  operator: "!==",
                  value: "Very Satisfied",
                },
                then: { action: "show" },
              },
            ],
          },
        ],
        rules: [],
      },
    ],
  };
  return (
    <div>
      <h1 className="text-2xl font-bold">Formify Demo</h1>
      <formify-builder data={JSON.stringify(formDefinition)}></formify-builder>
    </div>
  );
}

export default App;
