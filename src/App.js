// import Home from "./pages/home/Home";
// import { createContext, useState } from "react";

// const themes = {
//   light: {
//     background: "#fff",
//     color: "#222",
//   },
//   dark: {
//     background: "#222",
//     color: "#fff",
//   },
// };

// export const ThemeContext = createContext(themes.light);

// function App() {
//   const [theme, setTheme] = useState(themes.light);

//   const toggleTheme = () =>
//     setTheme((prev) => (prev === themes.light ? themes.dark : themes.light));

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <Home />
//     </ThemeContext.Provider>
//   );
// }

// export default App;

import React, { useCallback, useState } from "react";
// import "./styles.css";

interface IDataRecord {
  label: string; // uniq
  value: number;
}

interface IAppProps {
  size?: number;
}

export class App extends React.Component<IAppProps, { list: IDataRecord[] }> {
  state = {
    list: Array.from({ length: this.props.size ?? 200 }, (_el, index) => ({
      label: `label ${index + 1}`,
      value: App.generateValue(),
    })),
  };

  static generateValue() {
    return Math.round(100 + Math.random() * 900);
  }

  handleUpdate = (index: number) => {
    const newList = [...this.state.list];
    newList[index] = { ...newList[index], value: App.generateValue() };
    this.setState({ list: newList });
  };

  render() {
    return (
      <div>
        <h1>Test app</h1>
        {this.state.list.map((el, index) => (
          <Row data={el} index={index} onUpdate={this.handleUpdate} />
        ))}
      </div>
    );
  }
}

interface IRowProps {
  data: IDataRecord; // TODO
  index: number;
  onUpdate: (index: number) => void;
}

class Row extends React.Component<IRowProps> {
  renderCount = 0;

  shouldComponentUpdate(nextProps: IRowProps) {
    return nextProps.data !== this.props.data;
  }

  handleUpdate = () => {
    this.props.onUpdate(this.props.index);
  };

  render() {
    const {
      data: { label, value },
    } = this.props;

    this.renderCount++;

    return (
      <div>
        <span className="label">{label}:</span>
        <span>{value}</span> <span>({this.renderCount})</span>{" "}
        <button className="button" onClick={this.handleUpdate}>
          Update
        </button>
      </div>
    );
  }
}

const generateValue = () => Math.round(100 + Math.random() * 900);

const App2 = ({ size }: IAppProps) => {
  const [list, setList] = useState<Array<IDataRecord>>(() =>
    Array.from({ length: size ?? 200 }, (_el, index) => ({
      label: `label ${index + 1}`,
      value: generateValue(),
    }))
  );

  const handleUpdate = (index: number) => {
    const newList = [...list];
    newList[index] = { ...newList[index], value: generateValue() };
    setList(newList);
  };

  return (
    <div>
      <h1>Test app</h1>
      {list.map((el, index) => (
        <Row2 key={el.label} data={el} index={index} onUpdate={handleUpdate} />
      ))}
    </div>
  );
};

const Row2 = ({ data, index, onUpdate }: IRowProps) => {
  const [count, setCount] = useState(0);

  const handleUpdate = useCallback(() => {
    onUpdate(index);
    setCount((c) => c + 1);
  }, [index, onUpdate]);

  return (
    <div>
      <span className="label">{data.label}:</span>
      <span>{data.value}</span> <span>({count})</span>
      <button className="button" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
};

export default App2;
