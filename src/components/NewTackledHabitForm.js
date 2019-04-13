import React from 'react';
import FormErrors from './FormErrors';

function NewTackledHabitForm(props) {

    const {errors = []} = props;

    function handleSubmit (event){
        event.preventDefault();

        const { currentTarget } = event;
        const fD = new FormData(currentTarget)

        props.onSubmit(
            {
                checkin_date: fD.get('checkin_date'),
                checkin_value: fD.get('checkin_value'),
                is_reminder: fD.get('is_reminder')
            }
        )
    }

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

    today = yyyy+'-'+mm+'-'+dd;

    return (

        <div className="mx-4 mb-5">
            <form className="TackledHabitForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="checkin_date">Check-in Date</label> <br />
                    <FormErrors noField forField="checkin_date" errors={errors} />
                    <input type="date" name="checkin_date" id="checkin_date" max={today} placeholder="Check-in Date" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="checkin_value">Check-in Value (Leave value blank for already checked-in day to undo that check-in)</label> <br />
                    <FormErrors noField forField="checkin_value" errors={errors} />
                    <input type="number" name="checkin_value" id="checkin_value" step="any" placeholder="Check-in Value" className="form-control" />
                </div>
                <div className="form-group">
                        <FormErrors errors={errors} forField="is_reminder"/>
                        <input type="checkbox" name="is_reminder" id="is_reminder" value="1" className="form-group-input mx-1" />
                        <label htmlFor="is_reminder" className="form-check-label">Do you want to receive reminder prompts?</label><br />
                </div>
                <div className="actions">
                    <input type="submit" value="Check In" className="btn btn-success font-weight-bold" />
                </div>
            </form>
      </div>
    );
}
export default NewTackledHabitForm;