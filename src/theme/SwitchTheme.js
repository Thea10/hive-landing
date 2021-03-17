const SwitchTheme = ({ switchTheme, checked, toggleCheck }) => {
  return (
    <div style={{position: "fixed", bottom: "25%"}}>
      <button className="btn btn-deep-orange border-round" 
        title={checked ? "Light Mode" : "Dark Mode"}
        onClick={() => {
          switchTheme();
          toggleCheck();
        }}
      >
        {checked ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
      </button>
    </div>
  );
};

export default SwitchTheme;
