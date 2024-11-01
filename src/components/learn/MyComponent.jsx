// component = html + css + js
// Fragment <> </>

import "./style.css";

const MyComponent = () => {
  return (
    <>
      <div>Huy va Cati Update</div>
      <div className="child" style={{ borderRadius: "10px" }}>
        child
      </div>
    </>
  );
};

export default MyComponent;
