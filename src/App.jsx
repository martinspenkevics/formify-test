import React, { useEffect, useRef } from "react";
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

  const data = JSON.stringify(formDefinition);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold py-2">Formify Demo</h1>
      <div>
        <h2 className="text-lg font-bold py-2">Formify Builder</h2>
        <formify-builder data={data}></formify-builder>
      </div>
      <div>
        <h2 className="text-lg font-bold py-2">Form Filler</h2>
        <formify-filler data={data}></formify-filler>
      </div>
      <div>
        <h2 className="text-lg font-bold py-2">Form Preview</h2>
        <formify-viewer data={data}></formify-viewer>
      </div>
    </div>
  );
}

export default App;
