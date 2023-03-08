import Bio from '@/components/Bio'
export default function About(){
  return(
    <>
    <div className="wrapper">
     
      <h3></h3>
      <div className="menu flex justify-between flex-wrap">
        <a href="/" >Home</a>
        <a href="/nextnew">Projects</a>
        <a href="/Skills"> Skills</a>
        <a href="/Contact" className="active">Contact me</a>
        </div>
    
      
      </div>
     
  <Bio/>
  <a className="icon flex justify-center items-center animate-bounce" href="https://twitter.com/aribamemon786"target='_blank'>
  <i className="fa fa-twitter"></i>
</a>
<a className="icon flex justify-center items-center animate-bounce" href="https://www.linkedin.com/in/thearibamemon/" target='_blank'>
  <i className="fa fa-linkedin"></i>
</a>
<a className="icon flex justify-center items-center animate-bounce" href="https://github.com/Ariba-memon"target='_blank'>
  <i className="fa fa-github"></i>
</a>
      
    
    
    
    </>

  
  )
}