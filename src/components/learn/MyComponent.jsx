// component = html + css + js
// Fragment <> </>

import "./style.css";

const MyComponent = () => {
  // const hoidanit = 25; //String
  // const hoidanit = true; //boolean
  // const hoidanit = undefined;
  // const hoidanit = null;
  // const hoidanit = [1, 2, 3];
  const hoidanit = {
    name: "hoidanit",
    age: 25,
  };
  return (
    <>
      <div> {JSON.stringify(hoidanit)} Huy va Cati Update</div>
      <div>{console.log("ERIC")}</div>
      <div className="child" style={{ borderRadius: "10px" }}>
        child
      </div>
    </>
  );
};

export default MyComponent;
