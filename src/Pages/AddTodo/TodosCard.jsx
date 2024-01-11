import PropTypes from 'prop-types';

const ContactList = (props) => {
const {id, name, lastname, telephone, category, editTodo, deleteTodo} = props;
return (
<div className="contact-card">
    <div className="contact-list d-flex justify-content-between align-items-center w-75 mx-auto alert alert-primary">
        <div className='contact-list-content'>
            <span>{name} </span>
            <span>{lastname} </span>
            <span className="text-success">{category} </span> <br />
            <span>{telephone} </span>
        </div>
        <div className="buttons d-flex">
            <button className="btn btn-primary d-block me-2" onClick={()=> editTodo(id)}>
                Edit
            </button>
            <button className="btn btn-danger d-block" onClick={()=> deleteTodo(id)}>
                Delete
            </button>
        </div>
    </div>
</div>
)
};


ContactList.propTypes = {
id: PropTypes.number,
name: PropTypes.string,
lastname: PropTypes.string,
telephone: PropTypes.string,
category: PropTypes.string,
deleteTodo: PropTypes.func,
editTodo: PropTypes.func,
};

export default ContactList