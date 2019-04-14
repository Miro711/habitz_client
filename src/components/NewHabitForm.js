import React from 'react';
import FormErrors from "./FormErrors";

function NewHabitForm(props) {

    const { onSubmit, errors, data = {} } = props;

    function handleSubmit(event){
        event.preventDefault();
		const { currentTarget } = event;
        const fD = new FormData(currentTarget);
        onSubmit({
			name: fD.get('name'),
            description: fD.get('description'),
            habit_type: fD.get('habit_type'),
            threshold: fD.get('threshold'),
            unit: fD.get('unit'),
            min_or_max: fD.get('min_or_max'),
            target_streak: fD.get('target_streak'),
            is_public: fD.get('is_public'),
            frequency: fD.get('frequency'),
            number_of_days: fD.get('number_of_days'),
		});
    }

	return (
        
        <form className="NewHabitForm mx-3 my-2 p-1 clearfix" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label><br />
                <FormErrors errors={errors} forField="name"/>
                <input type="text" name="name" id="name" defaultValue={data.name} className="form-control" placeholder="Enter Name" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description (optional)</label><br />
                <FormErrors errors={errors} forField="description"/>
                <textarea name="description" id="description" defaultValue={data.description} className="form-control" placeholder="Enter Description" />
            </div>
            <div className="form-group">
                <label htmlFor="habit_type">Habit Type</label> <br />
                <FormErrors errors={errors} forField="habit_type"/>
                <select name="habit_type" id="habit_type" className="form-control">
                    <option value="Binary">With Yes or No each day</option>
                    <option value="Number">With a threshold</option>
                </select>
            </div>
            <div class="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor="threshold">Threshold</label><br />
                    <FormErrors errors={errors} forField="threshold"/>
                    <input type="number" name="threshold" id="threshold" defaultValue={data.threshold} className="form-control" placeholder="Enter threshold" />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="unit">Unit</label><br />
                    <FormErrors errors={errors} forField="unit"/>
                    <input type="text" name="unit" id="unit" defaultValue={data.unit} className="form-control" placeholder="Enter unit" />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="min_or_max">Minimum/Maxium</label> <br />
                    <FormErrors errors={errors} forField="min_or_max"/>
                    <select name="min_or_max" id="min_or_max" className="form-control">
                        <option value="At least">At least</option>
                        <option value="At most">At most</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="target_streak">Target Streak (days)</label><br />
                <FormErrors errors={errors} forField="target_streak"/>
                <input type="number" name="target_streak" id="target_streak" defaultValue={data.target_streak} className="form-control" placeholder="Enter target streak" />
            </div>
            <div className="form-group">
                <FormErrors errors={errors} forField="is_public"/>
                <input type="checkbox" name="is_public" id="is_public" value="true" className="form-group-input mx-1"/>
                <input type="hidden" name="is_public" id="is_public" value="false" />
                <label htmlFor="is_public" className="form-check-label">Do you want to challenge public with your habit?</label>
            </div>
            {/* <div className="form-group">
                <label htmlFor="frequency">Frequency</label> <br />
                <FormErrors errors={errors} forField="frequency"/>
                <select name="frequency" id="frequency" className="form-control">
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="number_of_days">Number of Days Per Period</label><br />
                <FormErrors errors={errors} forField="number_of_days"/>
                <input type="number" name="number_of_days" id="number_of_days" defaultValue={data.number_of_days} className="form-control" placeholder="Enter number of days" />
            </div> */}
            <div className="actions">
                <input type="submit" value="Save Habit Profile" className="btn btn-success font-weight-bold float-right" />
            </div>
        </form>
            
	);
}

export default NewHabitForm;