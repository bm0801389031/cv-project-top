import React from 'react';
import { Print, NoPrint } from 'react-easy-print';
import TextSection from './TextSection';

class EducationSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: true,
            schoolName: '',
            study: '',
            from: '',
            to: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState((prevState) => {
            return { editMode: !prevState.editMode };
        });
    }

    render() {
        const { editMode, schoolName, study, from, to } = this.state;
        const { id, handleDelete } = this.props;
        if (!editMode) {
            return (
                <TextSection
                    schoolName={schoolName}
                    study={study}
                    from={from}
                    to={to}
                    handleEdit={this.handleSubmit}
                />
            );
        }

        return (
            <NoPrint>
                <Print printOnly>
                    <p className='warning'>Fill in the form.</p>
                </Print>
                <section>
                    <form className='section' action='' onSubmit={this.handleSubmit}>
                        <label htmlFor='schoolName'>
                            <p>School Name:</p>
                            <input
                                type='text'
                                placeholder='School Name'
                                name='schoolName'
                                id='schoolName'
                                onChange={this.handleChange}
                                value={schoolName}
                                required
                            />
                        </label>
                        <label>
                            <p>Title of Study:</p>
                            <input
                                type='text'
                                placeholder='Title of study'
                                name='study'
                                onChange={this.handleChange}
                                value={study}
                                required
                            />
                        </label>
                        <label>
                            <p>From:</p>
                            <input
                                type='date'
                                name='from'
                                placeholder='From'
                                onChange={this.handleChange}
                                value={from}
                                required
                            />
                        </label>
                        
                        <label>
                            <p>To:</p>
                            <input
                                type='date'
                                name='to'
                                placeholder='To'
                                onChange={this.handleChange}
                                value={to}
                                required
                            />
                        </label>
                        <button className='formBtn'>Save</button>
                        <button
                            className='formBtn'
                            type='button'
                            onClick={() => handleDelete('educationIds', id)}>
                            Delete
                        </button>
                    </form>
                </section>
            </NoPrint>
        );
    }
}

export default EducationSection