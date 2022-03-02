import React from 'react';
import { Print, NoPrint } from 'react-easy-print';
import TextSection from './TextSection.js';

class ExpirienceSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: true,
            companyName: '',
            position: '',
            from: '',
            to: '',
            tasks: '',
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
        const { editMode, companyName, position, from, to, tasks } = this.state;
        const { id, handleDelete } = this.props;

        if (!editMode) {
            return (
                <TextSection
                    companyName={companyName}
                    position={position}
                    from={from}
                    to={to}
                    tasks={tasks}
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
                    <form
                        action=''
                        className='section xpSection'
                        onSubmit={this.handleSubmit}>
                        <label>
                            <p>Company Name:</p>
                            <input
                                type='text'
                                placeholder='Company Name'
                                name='companyName'
                                onChange={this.handleChange}
                                value={companyName}
                                required
                            />
                        </label>

                        <label>
                            <p>Position Title:</p>
                            <input
                                type='text'
                                placeholder='Position Title'
                                name='position'
                                onChange={this.handleChange}
                                value={position}
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
                        <textarea
                            name='tasks'
                            className='tasks'
                            placeholder='Main Tasks'
                            onChange={this.handleChange}
                            value={tasks}
                            required
                        />
                        <button className='formBtn'>Save</button>
                        <button
                            className='formBtn'
                            type='button'
                            onClick={() => handleDelete('experienceIds', id)}>
                            Delete
                            </button>
                        </form>
                </section>
            </NoPrint>
        );
    }
}

export default ExpirienceSection;