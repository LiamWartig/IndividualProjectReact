import React,{Component} from 'react';
import TaskField from './TaskField';

export default class Parent extends Component{

	constructor(props){
		super(props);
		this.state={
			text: "",
			taskDescription: ["exampletask"]
		}
		this.value="hi value from parent";
	}

	setTaskDescription = (e) => {
		this.setState({
			 text : e.target.value
		})
	}

	btnfcn = () => {
		let arr = this.state.taskDescription;
			arr.push(this.state.text);
			this.setState({
				taskDecription: arr,
				text: ""
			})
	}

	render(){
		return(

			<div className="ParentDiv">
				<TaskField/>
				<ul>
				<TaskField setTaskDescriptionFunction={this.setTaskDescription}/>
				</ul>
			</div>

		);
	}


}