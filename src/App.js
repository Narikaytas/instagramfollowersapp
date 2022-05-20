import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import InstaFollowers from './components/InstaFollowers'

let Followers = [
  {fId: uuidv4(), fName: 'Allu Arjun', fImage: 'https://th.bing.com/th/id/OIP.Y2RvCM7l8p7a3fTW8-QO0AHaHa?w=213&h=213&c=7&r=0&o=5&dpr=1.25&pid=1.7'},
  {fId: uuidv4(), fName: 'Mahesh Babu', fImage: 'https://th.bing.com/th/id/OIP.J_I1OtYjTeCXBEzAwm1suwHaFY?pid=ImgDet&w=221&h=160&c=7&dpr=1.25'},
  {fId: uuidv4(), fName: 'Prabhas', fImage: 'https://th.bing.com/th/id/OIP.AgqX5n9w5T3jmLnK7zNw1QHaJk?w=182&h=236&c=7&r=0&o=5&dpr=1.25&pid=1.7'},
  {fId: uuidv4(), fName: 'Pawan Kalyan', fImage: 'https://th.bing.com/th/id/OIP.wjugbsL96LXQCB2opgZZQAHaD4?w=298&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'},   
  {fId: uuidv4(), fName: 'Jr NTR', fImage: 'https://th.bing.com/th/id/OIP.mhRohv6HArWAf_f4OTjJqQHaGn?w=210&h=188&c=7&r=0&o=5&dpr=1.25&pid=1.7'},
  {fId: uuidv4(), fName: 'RamCharan', fImage: 'https://th.bing.com/th/id/OIP.ufH-Z5zMDbW5v59gQDzWZQHaFN?w=182&h=128&c=7&r=0&o=5&dpr=1.25&pid=1.7'},
  {fId: uuidv4(), fName: 'Nani', fImage: 'https://th.bing.com/th/id/OIP.j47OahMG4aTZPgQpN1jxpwHaJ2?pid=ImgDet&w=217&h=288&c=7&dpr=1.25'},
  {fId: uuidv4(), fName: 'Vijay D', fImage: 'https://th.bing.com/th/id/OIP.1vZSlybxHWbGwaC-T50F5QHaJQ?w=153&h=191&c=7&r=0&o=5&dpr=1.25&pid=1.7'},
  {fId: uuidv4(), fName: 'Nithin', fImage: 'https://th.bing.com/th/id/OIP.WG-03A8NioPDdU9aJjfAwgHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.25&pid=1.7'},
  {fId: uuidv4(), fName: 'RaviTeja', fImage: 'https://th.bing.com/th/id/OIP.t223r16gZ0YTgLw4YfjxuAHaFj?w=182&h=136&c=7&r=0&o=5&dpr=1.25&pid=1.7'},
  {fId: uuidv4(), fName: 'Sharwanandh', fImage: 'https://th.bing.com/th/id/OIP.4I2-jbCTI-LmSUIPS5s7iQHaJ3?w=182&h=243&c=7&r=0&o=5&dpr=1.25&pid=1.7'},
  {fId: uuidv4(), fName: 'Rana', fImage: 'https://th.bing.com/th/id/OIP.B5msul2OLLnNO-4skPQ7rwHaJQ?w=182&h=228&c=7&r=0&o=5&dpr=1.25&pid=1.7'},
  {fId: uuidv4(), fName: 'AllariNaresh', fImage: 'https://th.bing.com/th/id/OIP.1AyR-g9Rz9k-4qIoKxuuZwHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.25&pid=1.7'},
  {fId: uuidv4(), fName: 'VarunTej', fImage: 'https://th.bing.com/th/id/OIP.YPNDQe2hAbdHad1zWEq3CwHaFj?w=220&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'},
  {fId: uuidv4(), fName: 'Siddarth', fImage: 'https://th.bing.com/th/id/OIP._AV8l_4lRcyzIZo0Ej2oQwHaJA?w=182&h=221&c=7&r=0&o=5&dpr=1.25&pid=1.7'},
  {fId: uuidv4(), fName: 'NagaChaitanya', fImage: 'https://th.bing.com/th/id/R.4f5af49f17d36b8e44dbc85d3d7a6900?rik=nCqHSBeDyzFIGQ&riu=http%3a%2f%2fmimgs.sulekha.com%2fnaga-chaitanya%2fimages%2fstills%2fnaga-chaitanya-stills-0264.jpg&ehk=%2b%2byBwslkYXfnMQtQ%2fIyIv4tHvpkNtm2MkKaF31ooOoE%3d&risl=&pid=ImgRaw&r=0'},
  {fId: uuidv4(), fName: 'Nikhil', fImage: 'https://th.bing.com/th/id/OIP.gjTZOXWvpgVorOlxDgQTagHaLG?w=182&h=273&c=7&r=0&o=5&dpr=1.25&pid=1.7'},
  {fId: uuidv4(), fName: 'SaiDharamTej', fImage: 'https://th.bing.com/th/id/OIP.8IT8RKksFG9la4-cntmCkgHaJQ?w=182&h=228&c=7&r=0&o=5&dpr=1.25&pid=1.7'},
  {fId: uuidv4(), fName: 'NagaShaurya', fImage: 'https://th.bing.com/th/id/OIP.57kBg4t1RcvQ75wJrjthWgHaJQ?w=172&h=215&c=7&r=0&o=5&dpr=1.25&pid=1.7'},
  {fId: uuidv4(), fName: 'Ram Potineni', fImage: 'https://i2.cinestaan.com/image-bank/1500-1500/143001-144000/143290.jpg'},

]

class App extends Component{
  state ={
    searchInput: '',
    Followers: Followers
  }
  onChangeSearchInput =(event)=>{
    this.setState({searchInput: event.target.value})
  }

  deleteUser =(fId) =>{
     const {Followers}=this.state
     const filterFollowers = Followers.filter(
       eachFollower=> eachFollower.fId !== fId
     )
     this.setState({Followers:filterFollowers})
  }

  
  render(){
    const{searchInput, Followers} =this.state
    const searchResults = Followers.filter(eachFollower=>
      eachFollower.fName.includes(searchInput))
    return(
      <>
        <div className='instaStyle col-12 col-sm-3 m-auto'>
          <section className='profileStyle m-3'>
          <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' alt=''/>
          <h4>Narik</h4>
          
          </section>
          <input type='search'placeholder='Enter name to Search' onChange={this.onChangeSearchInput}  value={searchInput}/>
          <hr></hr>
          <p className='m-3'><strong>Followers</strong></p>

          <ul>
           
            {
              searchResults.map(eachFollower=>(
                <InstaFollowers Followers={eachFollower} key={eachFollower.fId} deleteUser={this.deleteUser}/>
              ))
             
            }
          </ul>
        </div>
      </>
    )
  }
}
export default App