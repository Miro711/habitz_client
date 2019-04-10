import React from 'react';

function NewHabitForm(props) {
    function handleSubmit(event){
        event.preventDefault();
		const { currentTarget } = event;
        const fD = new FormData(currentTarget);
        props.onSubmit({
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
		currentTarget.reset();
    }
	return (
        <div class="card">
            <div class="card-header">
                <h1>New Habit Profile</h1>
            </div>
            <div class="card-body">
                <form className="NewHabitForm" onSubmit={handleSubmit}>
                    <div class="form-group field">
                        <label htmlFor="name">Name</label>
                        <br />
                        <input type="text" name="name" id="name" class="form-control" placeholder="Enter Name" />
                    </div>
                    <div class="form-group field">
                        <label htmlFor="description">Description (optional)</label>
                        <br />
                        <textarea name="description" id="description" class="form-control" placeholder="Enter Description" />
                    </div>
                    <div class="form-group field">
                        <label htmlFor="habit_type">Habit Type</label> <br />
                        <select name="habit_type" id="habit_type">
                            <option value="Binary">With Yes or No each day</option>
                            <option value="Number">With a threshold</option>
                        </select>
                    </div>
                    <div class="form-group field">
                        <label htmlFor="threshold">Threshold</label>
                        <br />
                        <input type="number" name="threshold" id="threshold" class="form-control" placeholder="Enter threshold" />
                    </div>
                    <div class="form-group field">
                        <label htmlFor="unit">Unit</label>
                        <br />
                        <input type="text" name="unit" id="unit" class="form-control" placeholder="Enter unit" />
                    </div>
                    <div class="form-group field">
                        <label htmlFor="min_or_max">Minimum/Maxium</label> <br />
                        <select name="min_or_max" id="min_or_max">
                            <option value="At least">At least</option>
                            <option value="At most">At most</option>
                        </select>
                    </div>
                    <div class="form-group field">
                        <label htmlFor="target_streak">Target Streak (days)</label>
                        <br />
                        <input type="number" name="target_streak" id="target_streak" class="form-control" placeholder="Enter target streak" />
                    </div>
                    <div class="form-group field">
                        <label htmlFor="is_public">Do you want to challenge public with your habit?</label> 
                        <input type="checkbox" name="is_public" id="is_public" value="1" /><br />
                    </div>
                    <div class="form-group field">
                        <label htmlFor="frequency">Frequency</label> <br />
                        <select name="frequency" id="frequency">
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>
                    <div class="form-group field">
                        <label htmlFor="number_of_days">Number of Days Per Period</label>
                        <br />
                        <input type="number" name="number_of_days" id="number_of_days" class="form-control" placeholder="Enter number of days" />
                    </div>
                    <div class="actions">
                        <input type="submit" value="Save Habit Profile" class="btn btn-primary" />
                    </div>
                </form>
            </div>
        </div>
	);
}

export default NewHabitForm;