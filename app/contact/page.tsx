import { SubmitContactForm } from "./actions"

export default function contact() {
    return(
        <div>
            <form>
                <div>
                    <div>
                        <label htmlFor="messageType">Message Type:</label>
                        <select id="messageType" name="messageType">
                            <option value={'Bug'}>Bug</option>
                            <option value={'Feedback'}>Feedback</option>
                            <option value={'Other'}>Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <input id="message" name="message" type="text" placeholder='Message'/>
                    </div>
                    <div>
                        <button className="btn btn-wide" formAction={SubmitContactForm}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}