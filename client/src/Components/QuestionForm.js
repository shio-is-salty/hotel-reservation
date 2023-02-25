export const QuestionForm = () => {
  return (
    <form className="question-form">
      <input className="name-field" type="text" placeholder="name..." />
      <input className="email-field" type="email" placeholder="email..." />
      <textarea className="textarea-field" placeholder="question..." rows="10" cols="50"></textarea>
      <button className="btn">SEND MESSAGE</button>
   </form>
  )
}
