export default function Cards(){
    return(
        <>
   <div className="container grid sm:grid-cols-2 md:grid-cols-3">
  <div className="item">
   <h2 className="justify-items-center animate-ping text-center">My Projects</h2>
   <br />
    <div>
      <h3>Project website </h3>
      <p> website for Jewellery shop</p>
   
      <a className="text-pink-500 underline hover:text-pink-700" href="https://almadinaj-6fe4e.web.app/"target='_blank'>Al Madina Jewellers</a>
    </div>
  </div>
  
  <div className="item">
   
    <div>
      <h3>Todo App</h3>
      <p>Todo App Made by me</p>
      <a className="text-pink-500 underline hover:text-pink-700"href="https://dailyapp-78d3c.web.app/">Todo App Firebase</a>
    </div>
  </div>
  <div className="item">
 
    <div className="desc">
      <h3>Covid Tracker App</h3>
      <p>Covid Tracker App </p>
      <a className="text-pink-500 underline hover:text-pink-700" href="https://covid-tracker-c21a1.web.app/">Covid Tracker App</a>
    </div>
  </div>
  <div className="item">
 
    <div className="desc">
      <h3>Panaverse Website</h3>
      <p>Panaverse Dao Website </p>
      <a className="text-pink-500 underline hover:text-pink-700" href="https://panaverseweb.vercel.app/">Panaverse Dao Website</a>
    </div>
  </div>
  <div className="item">
    
    <div className="desc">
      <h3>Piaic Website</h3>
      <p>Piaic Website Made by me</p>
      <a className="text-pink-500 underline hover:text-pink-700"href="https://piaicwebsitebyaribamemon.vercel.app/">Piaic Website</a>
    </div>
  </div>
  <div className="item">
    
    <div className="desc">
      <h3>Chakra ui</h3>
      <p>Chakra Pricing Ui</p>
      <a className="text-pink-500 underline hover:text-pink-700"href="https://chakrauibyaribamemon.vercel.app/">Chakra Pricing Ui</a>
    </div>
  </div>
</div>

  </>
    )
}