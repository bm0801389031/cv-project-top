import React from 'react';
import PrintProvider, { NoPrint, Print } from 'react-easy-print';
import uniqid from 'uniqid';
import EducationSection from './components/EducationSection';
import ExpirienceSection from './components/ExperienceSection';
import GeneralSection from './components/GeneralSection';
import './styles/App.css';
import './styles/forms.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      educationIds: [],
      experienceIds: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(type) {
    this.setState((prevState) => {
      return {
        [type]: [...prevState[type], uniqid()],
      };
    });
  }

  handleDelete(type, id) {
    this.setState((prevState) => {
      let newList = prevState[type].filter((key) => key !== id);
      return {
        [type]: newList,
      };
    });
  }

  render() {
    const eduComponents = this.state.educationIds.map((id) => (
      <EducationSection key={id} id={id} handleDelete={this.handleDelete} />
    ));
    const expComponents = this.state.experienceIds.map((id) => (
      <ExpirienceSection key={id} id={id} handleDelete={this.handleDelete} />
    ));

    return (
      <div>
        <PrintProvider>
          <NoPrint>
            <main>
              <h1 className='title'>CV-App with React</h1>
              <Print>
                <h2 className='subTitle'>General Information</h2>
                <GeneralSection />
              </Print>
              <div>
                <Print>
                  <h2 className='subTitle'>Educational Experience</h2>
                  {eduComponents}
                </Print>
                <button
                  className='addBtn'
                  onClick={() => this.handleClick('educationIds')}>
                    Add
                  </button>
              </div>
              <div>
                <Print>
                  <h2 className='subTitle'>Experience Section</h2>
                  {expComponents}
                </Print>
                <button
                  className='addBtn'
                  onClick={() => this.handleClick('experienceIds')}>
                    Add
                  </button>
              </div>
              <button
                onClick={() => {
                  window.print();
                }}
                className='addBtn'>
                  Print
                </button>
            </main>
          </NoPrint>
        </PrintProvider>
      </div>
    )
  }
}

export default App;