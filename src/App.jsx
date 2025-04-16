import React, { useState } from "react";
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

  const [buildResult, setBuildResult] = useState(null);
  const [fillResult, setFillResult] = useState(null);
  const handleBuild = (data) => {
    console.log("Form build", data);
    setBuildResult(data);
  };

  const handleSubmit = (data) => {
    console.log("Form submit", data);
    setFillResult(data);
  };

  return (
    <div className="flex flex-col gap-4 p-4 my-app">
      <h1 className="text-2xl font-bold py-2">Formify Demo</h1>
      <div>
        <h2 className="text-lg font-bold py-2">Formify Builder</h2>
        <formify-builder data={data} buildHandler={handleBuild} />

        {buildResult && (
          <div>
            <h2 className="font-bold py-2">Last Build Result</h2>
            <pre>{JSON.stringify(buildResult, null, 2)}</pre>
          </div>
        )}
      </div>
      <div>
        <h2 className="text-lg font-bold py-2">Form Filler</h2>
        <formify-filler data={data} submitHandler={handleSubmit} />

        {fillResult && (
          <div>
            <h2 className="font-bold py-2">Last Fill Result</h2>
            <pre>{JSON.stringify(fillResult, null, 2)}</pre>
          </div>
        )}
      </div>
      <div>
        <h2 className="text-lg font-bold py-2">Form Viewer</h2>
        <formify-viewer data={data} />
      </div>
    </div>
  );
}

export default App;
