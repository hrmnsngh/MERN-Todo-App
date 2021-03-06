import React from 'react';
import { connect } from 'react-redux';

export const TaskList = ({ tasks, name, id }) => (
    <div>
        <h3><span>Group ID :&nbsp;{id}</span>&nbsp;, Group Name : &nbsp;{name}</h3>
        {tasks.map(task => (<div>{task.name}</div>))}
    </div>
);

const mapStateToProps = (state, ownProps) => {
    let groupID = ownProps.id;
    return {
        name: ownProps.name,
        id: groupID,
        tasks: state.tasks.filter(task => task.group === groupID)
    }
};

export const ConnectedTaskList = connect(mapStateToProps)(TaskList);