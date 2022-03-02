import React from 'react';
import { NoPrint, Print } from 'react-easy-print';
import TextSection from './TextSection';

class GeneralSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editMode: true,
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
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
		const { editMode, firstName, lastName, email, phone } = this.state;

		if (!editMode) {
			return (
				<TextSection
					firstName={firstName}
					lastName={lastName}
					email={email}
					phone={phone}
					handleEdit={this.handleSubmit}
				/>
			);
		}

		return (
			<NoPrint>
				<Print printOnly>
					<p className='warning'>Fill in the form.</p>
				</Print>
				<section className='generalSection'>
					<form className='section' action='' onSubmit={this.handleSubmit}>
						<label>
							<p>First Name:</p>
							<input
								type='text'
								placeholder='First Name'
								name='firstName'
								onChange={this.handleChange}
								value={firstName}
								required
							/>
						</label>

						<label>
							<p>Last Name:</p>
							<input
								type='text'
								placeholder='Last Name'
								name='lastName'
								onChange={this.handleChange}
								value={lastName}
								required
							/>
						</label>

						<label>
							<p>Email:</p>
							<input
								type='email'
								placeholder='example@gmail.com'
								name='email'
								onChange={this.handleChange}
								value={email}
								required
							/>
						</label>
						<label>
							<p>Phone Number:</p>
							<input
								type='tel'
								name='phone'
								placeholder='123-456-7890'
								onChange={this.handleChange}
								value={phone}
								required
							/>
						</label>
						<button className='formBtn generalBtn' type='submit'>
							Save
						</button>
					</form>
				</section>
			</NoPrint>
		);
	}
}

export default GeneralSection;
