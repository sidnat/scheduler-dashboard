import React, { Component } from "react";
import Loading from "./Loading";
import Panel from "./Panel";
import classnames from "classnames";

const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm"
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday"
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3"
  }
];

function Dashboard(props) {
  const [state, setState] = React.useState({ focused: null });

  selectPanel(id) {
    setState({
      focused: id
    });
  }

  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": state.focused
    });

    if (state.loading) {
      return <Loading />;
    }

    const panels = (state.focused ? data.filter(panel => state.focused === panel.id) : data)
      .map(panel => (
        <Panel
          key={panel.id}
          id={panel.id}
          label={panel.label}
          value={panel.value}
          onSelect={selectPanel}
        />
      ));

    return <main className={dashboardClasses}>{panels}</main>;
  }
}

export default Dashboard;
