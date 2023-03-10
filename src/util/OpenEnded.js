/**
 * 
 * @param {string} question question to be asked
 * @param {Function} setResponse react UseState function to set response to question
 * @param {string} [ type = text ] type of input field; default is text (see HTML input types for more options)
 * @returns open-ended question text field with label
 */

const OpenEnded = ({question, setResponse, type="text"}) => {

    const responseChange = (event) => {
        setResponse(event.target.value);
    }

    return ( 
        <div className="open-ended">
            
            <label htmlFor="question">{question}</label>
            <input type={type} name="question" onChange={responseChange}/>

        </div>
     );
}
 
export default OpenEnded;