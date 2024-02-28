import { SubmitContactForm } from "./actions"

//render contact page
export default async function Contact() {
    //render contact form
    return(
        <div>
            <form className='flex flex-col justify-around items-center absolute w-1/3 min-w-64 flex-wrap flex-initial h-[640px] left-1/3 top-[140px] bg-01dp shadow-[[0px_16px_6px_rgba(244,144,29,0.03)], [0px_9px_5px_rgba(244,144,29,0.1)], [0px_4px_4px_rgba(244,144,29,0.17)], [0px_1px_2px_rgba(244,144,29,0.2)]] rounded-[20px]'>
                <div className="form-control w-5/6">
                    <div className="label">
                        <span className="label-text">Reason For Contact:</span>
                    </div>
                    <select id="contactReason" name="contactReason" className="select select-bordered">
                        <option value={'Bug'}>Bug</option>
                        <option value={'Feedback'}>Feedback</option>
                        <option value={'Other'}>Other</option>
                    </select>
                </div>
                <div className="form-control w-5/6">
                    <div className="label">
                        <span className="label-text">Message:</span>
                    </div>
                    <textarea id="message" name="message" placeholder='Message' className="textarea textarea-bordered textarea-lg h-64"></textarea>
                </div>
                <div>
                    <button className="btn btn-wide" formAction={SubmitContactForm}>Submit</button>
                </div>
            </form>
        </div>
    )
}