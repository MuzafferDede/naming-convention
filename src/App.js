import { useCallback, useMemo, useState } from "react";
import Input from "./components/Input";

const App = () => {
  const [name, setName] = useState({});

  const inputs = useMemo(
    () => [
      {
        name: "product-name",
        label: "Product Name",
        type: "select",
        color: "bg-blue-500",
        placeholder: "Select a product",
        options: [
          {
            label: "Good Wallet",
            value: "good-wallet",
          },
          {
            label: "Great Product",
            value: "great-product",
          },
          {
            label: "Awesome App",
            value: "awesome-app",
          },
        ],
      },
      {
        name: "project-name",
        label: "Project Name",
        type: "select",
        color: "bg-purple-500",
        placeholder: "Select a project",
        dependency: "product-name",
        options: [
          {
            label: "One Account",
            value: "one-account",
          },
          {
            label: "PGN",
            value: "pgn",
          },
          {
            label: "PE",
            value: "pe",
          },
        ],
      },
      {
        name: "role-name",
        label: "Role Name",
        type: "select",
        color: "bg-orange-500",
        placeholder: "Select a role",
        dependency: "project-name",
        options: [
          {
            label: "UX",
            value: "ux",
          },
          {
            label: "UI",
            value: "UI",
          },
          {
            label: "Frontend",
            value: "frontend",
          },
          {
            label: "Backend",
            value: "backend",
          },
          {
            label: "DevOps",
            value: "devops",
          },
          {
            label: "Avengers",
            value: "avengers",
          },
        ],
      },
      {
        name: "the-thing-name",
        label: "The Thing Name",
        type: "text",
        color: "bg-yellow-500",
        placeholder: "Enter a name",
        dependency: "role-name",
      },
      {
        name: "tag",
        label: "Tag",
        type: "text",
        color: "bg-green-500",
        placeholder: "Enter a tag",
        dependency: "the-thing-name",
      },
    ],
    []
  );

  const onChange = useCallback(({ target }) => {
    setName((prev) => ({
      ...prev,
      [target.name]: target.value.toLowerCase().replace(/\s/g, "_"),
    }));
  }, []);

  return (
    <div className="min-h-screen bg-blue-100">
      <div className="container p-4 space-y-10">
        <h1 className="text-3xl text-gray-500 text-center py-10 drop-shadow">
          Naming Convention Generator
        </h1>
        <div className="grid gap-4 lg:grid-cols-5 items-start">
          {inputs.map((input, index) => (
            <div
              className={`grid gap-1 p-4 shrink-0 rounded-lg min-w-max text-white font-semibold shadow-lg ${input.color}`}
              key={input.name}
            >
              <label className="text-xs uppercase" htmlFor={input.name}>
                {input.label}
              </label>
              <Input
                id={input.name}
                label={input.label}
                type={input.type}
                options={input.options}
                defaultValue={name[input.name]}
                name={input.name}
                placeholder={input.placeholder}
                onChange={onChange}
                disabled={input.dependency && !name[input.dependency]}
              />
            </div>
          ))}
        </div>
        <div className="flex space-x-4 h-40 ring-1 ring-gray-400 text-3xl text-gray-700 items-center justify-center py-10 px-4 bg-gray-100 rounded-lg shadow-md">
          {Object.entries(name).map(
            ([key, value]) =>
              value && (
                <div className="flex space-x-4" key={key}>
                  <span>{name[key]}</span>
                  {key !== "tag" && <span>/</span>}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
