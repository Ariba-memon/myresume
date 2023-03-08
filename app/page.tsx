import MyPhoto from '../public/MyPhoto.jpg'
import Image from 'next/image'
export default function Home(){
  return(
    <>
<div className="wrapper">
 
  <h3></h3>
  <div className="menu flex justify-between flex-wrap">
    <a href="/" className="active">Home</a>
    <a href="/nextnew">Projects</a>
    <a href="/Skills">Skills</a>
    <a href="/Contact">Contact me</a>
    </div>

  
  </div>
  
  <div className="container flex">
  <div className="rounded-full ...">
  <Image src={MyPhoto} width={300} height={300} alt='music' />
  </div>
  <div className="details">
 
  <div className="text-5xl font-extrabold ...">
  <span className="animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
    Ariba Memon
  </span>
</div>
    <p className="outline outline-offset-2 outline-pink-500">Mern Stack Developer  Ui/Ux Designer</p>
    <br />
   
  </div>
</div>
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