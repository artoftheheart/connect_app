/**
 * 
 * @param {String} question
 * @param {Array<String>} options list of options for the user to choose from
 * @param {Function} setResponse
 * @param {String} id
 * @param {String} [type = radio] of input field; either radio or checkbox; default is radio
 * @returns 
 */

const MultipleChoice = ({question, options, setResponse, id, type="radio"}) => {

    const responseChange = (event) => {
        setResponse(event.target.value);
    }

    return ( 

        <div className="multiple-choice"> 
        
            <p>{question}</p>

            {options.map((option, i) => 
                <div className="option" key={i}>
                    <input type={type} name={id} value={option} onChange={responseChange}/>
                    <label htmlFor={option}>{option}</label>
                </div>
            )}


        </div>
    );
}
 
export default MultipleChoice;