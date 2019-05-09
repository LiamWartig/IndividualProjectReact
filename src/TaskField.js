import React,{Component} from 'react';

export default class TaskField extends Component{

	render(){

		return(

				<div className="TaskFieldDiv">
					// <input type = "text" onChange="this.props.setTaskDescriptionFunction"}/>


					// the problem here is how to translate Chris' example code into one that can push text into a map
					{this.props.setTaskDescription.map((task,i) => {
																	<li key={"Task" + i}>
																		<div className="item">
																			<Task text = {task}/>
																		</div>
																	</li>
																}

						)}

				</div>

			);

	}

}