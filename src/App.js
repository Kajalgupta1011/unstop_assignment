import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="form">
        <h1 className='heading'>
          Online Seat's Booking
        </h1>
        <label htmlFor="numSeat"></label>
        <input type="number" />
        <small>
            error
        </small>
        <p>Available Seats : </p>
        <button>Book Ticket</button>
        <div className="identify">
          <div className="avlSeats"></div>
          <p>Available Seats</p>
          <div className="bookedSeats"></div>
          <p>Booked Seats</p>
        </div>
      </div>
    </div>
  );
}

export default App;
