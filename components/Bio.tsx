export default function Bio(){
    return(
        <form className="grid grid-cols-2 gap-6">
        <div>
          <label> Full Name </label>
          <input type="text" name="name" placeholder="Full Name" />
        </div>
        <div >
          <label> Email Address </label>
          <input type="email" name="email" placeholder="Email Address" />
        </div>
        <div>
          <label> Message </label>
          <textarea name="message" placeholder="Your Message" ></textarea>
        </div>
        <a className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 m-14" href='https://www.linkedin.com/in/thearibamemon/'target='_blank'>
        <button >
  Button
</button></a>
      </form>

    )
}