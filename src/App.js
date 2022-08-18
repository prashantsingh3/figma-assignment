import "./styles.css";


export default function App() {
  let scale= [
    {
      food: 100,
      shopping: 200,
      movies: 30,
     
    }
  ];


  const totalExpenses =()=>{
    let sum=0
   for(let i=0; i<scale.length; i++){
    /* console.log(Object.entries(scale[i])) */
  Object.entries(scale[i]).map((ele)=>sum+=ele[1])
   }
  return (sum)
  }
  


  return (
    <div className="App" style={{margin:"20px"}}>
      <div>
        <div
         
          style={{
            
            width: "300px",
            height: "187px",
            borderRadius: "12px",
            padding: "22px",
            backgroundColor:"#3F3F3F"
          }}
        >
          <div style={{ display: "flex" }}>
            <h3 style={{ margin: "0px 0px 0px 5px", fontSize: "16px",color: "#FFFFFF" }}>
              Your total spend
            </h3>
            <select style={{ margin: "0px 0px 0px 82px",color: "#FFFFFF",  border: "none", outLine:"none" ,backgroundColor:"#3F3F3F",textDecorationLine: "underline",textDecoration: "underline", textUnderlineOffset: "3px"}}>
              <option>this week</option>
            </select>
          </div>

          <div style={{ margin: "70px 0px 0px 6px" }}>
            <span style={{ fontSize: "16px",color: "#FFFFFF" }}>SAR</span>
            <span style={{ margin: "0px 0px 0px 15px", fontSize: "30px",color: "#FFFFFF" }}>
            {totalExpenses()}
            </span>
          </div>
          {scale.map((ele, i) => {
            return (
              <div
                style={{
                  display: "flex",
                  width: "280px",
                  height: "14px",
                  borderRadius: "5px",
                  margin: "30px 0px 0px 6px"
                }}
              >
                <div
                  style={{
                    width: `${ele.food}px`,
                    height: "10px",
                    margin: "0px 0px 0px 0px",
                    backgroundColor: "#FFB800",
                    borderRadius:"150px 0 0 150px"
                  }}
                ></div>
                <div
                  style={{
                    width: `${ele.shopping}px`,
                    height: "10px",
                    margin: "0px 0px 0px 0px",
                    backgroundColor: "#1BA493"

                  }}
                ></div>
                <div
                  style={{
                    width: `${ele.movies}px`,
                    height: "10px",
                    margin: "0px 0px 0px 0px",
                    backgroundColor: "#E44816",
                    borderRadius:"0 150px 150px 0"
                  }}
                ></div>
              </div>
            );
          })}

          <ul style={{ display: "flex" , margin: "0px 20px 0px -39px"}}>
            <li style={{ margin:"10px 20px 10px 5px", fontSize: "12px",color: "#FFFFFF" }}>
            Food
            </li>
            <li style={{ margin: "10px 20px 10px 5px", fontSize: "12px",color: "#FFFFFF" }}>
            Shopping
            </li>
            <li style={{ margin: "10px 20px 10px 5px", fontSize: "12px",color: "#FFFFFF" }}>
            Movies
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
