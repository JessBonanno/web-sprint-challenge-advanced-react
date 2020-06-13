import React, { Component } from 'react';
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  constructor() {
    super();
    this.state = {
      allPlants: [],
      plants: [],
      cheapPlants: [],
      qualityPlants: [],
      selected: '',
    };
  }
  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants
  componentDidMount() {
    axios.get('http://localhost:3333/plants').then((res) => {
      console.log(res);
      this.setState({ plants: res.data.plantsData });
      this.setState({ allPlants: res.data.plantsData });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selected !== this.state.selected) {
      console.log(this.state.selected);

      if (this.state.selected === 'cheap') {
        this.setState({
          plants: this.state.allPlants.filter((plant) => {
            return plant.price < 20;
          }),
        });
      } else if (this.state.selected === 'quality') {
        this.setState({
          plants: this.state.allPlants.filter((plant) => {
            return plant.price >= 20;
          }),
        });
      }
      // this.setState({
      //   qualityPlants: this.state.allPlants.filter((plant) => {
      //     return plant.price >= 20;
      //   }),
      // });
      // this.setState({
      //   cheapPlants: this.state.allPlants.filter((plant) => {
      //     return plant.price < 20;
      //   }),
      // });
    }
  }

  handleChange = (event) => {
    this.setState({ selected: event.target.value });
  };

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <>
        <InputLabel style={{color: !this.props.darkMode && 'white', marginLeft: '5em'}} id='demo-simple-select-label'>
          Choose Price Range
        </InputLabel>
        <Select
          style={{ backgroundColor: !this.props.darkMode && '#cf0', width: 100, marginLeft: '5em'}}
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={this.state.selected}
          onChange={this.handleChange}>
          <MenuItem value={'cheap'}>Cheap Plants</MenuItem>
          <MenuItem value={'quality'}>Quality Plants</MenuItem>
        </Select>

        <main className='plant-list'>
          {this.state?.plants?.map((plant) => (
            <div className='plant-card' key={plant.id}>
              <img className='plant-image' src={plant.img} alt={plant.name} />
              <div
                className={
                  this.props.darkMode
                    ? 'plant-details plant-details-light'
                    : 'plant-details'
                }>
                <h2
                  className={
                    this.props.darkMode ? 'plant-name light-h2' : 'plant-name'
                  }>
                  {plant.name}
                </h2>
                <p className='plant-scientific-name'>{plant.scientificName}</p>
                <p>{plant.description}</p>
                <div className='plant-bottom-row'>
                  <p>${plant.price}</p>
                  <p>☀️ {plant.light}</p>
                  <p>💦 {plant.watering}x/month</p>
                </div>
                <button
                  className={
                    this.props.darkMode
                      ? 'plant-button light-button'
                      : 'plant-button'
                  }
                  onClick={() => this.props.addToCart(plant)}>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </main>
      </>
    );
  }
}
