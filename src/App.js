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
        options: [
          {
            label: "One Account",
            value: "one-account",
          },
          {
            label: "PGN",
            value: "pgn",
          },
        ],
      },
      {
        name: "role-name",
        label: "Role Name",
        type: "select",
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
        ],
      },
      {
        name: "the-thing-name",
        label: "The Thing Name",
        type: "text",
      },
      {
        name: "tag",
        label: "Tag",
        type: "text",
      },
    ],
    []
  );

  const onChange = useCallback(({ target }) => {
    setName((prev) => ({
      ...prev,
      [target.name]: target.value.toLowerCase().replace(/\s/g, "-"),
    }));
  }, []);

  return (
    <div className="container p-4 space-y-1">
      <div className="grid gap-4 grid-cols-5 items-start">
        {inputs.map((input) => (
          <div className="grid gap-1" key={input.name}>
            <label className="text-xs text-gray-600" htmlFor={input.name}>
              {input.label}
            </label>
            <Input
              id={input.name}
              label={input.label}
              type={input.type}
              options={input.options}
              defaultValue={name[input.name]}
              name={input.name}
              onChange={onChange}
            />
            {name[input.name] && (
              <p>
                {input.label}: {name[input.name]}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
