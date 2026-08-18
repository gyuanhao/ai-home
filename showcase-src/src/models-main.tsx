import React from "react";
import ReactDOM from "react-dom/client";
import ModelsApp from "./ModelsApp";
import "./home.css";

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: Error | null }
> {
  state = { error: null as Error | null };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 40, fontFamily: "monospace", color: "#E8542C" }}>
          <h2 style={{ marginBottom: 12 }}>页面渲染出错，已反馈给站长</h2>
          <pre style={{ whiteSpace: "pre-wrap", color: "#475569" }}>
            {String((this.state.error && this.state.error.stack) || this.state.error)}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

window.addEventListener("error", (e) => {
  document.title = "ERR: " + (e.message || "unknown");
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ModelsApp />
    </ErrorBoundary>
  </React.StrictMode>
);
