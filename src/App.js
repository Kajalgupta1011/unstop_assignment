import { useState } from "react";
import "./App.css";
import BookingSeat, {bookedSeats} from "./util/BookingSeat";
import ShowSeats from "./ShowSeats";
import trainLogo from "./images/trainLogo.png";

function App() {
	const avalSeats = 80 - bookedSeats.length;
	const [seats, setSeats] = useState("");
	const [error, setError] = useState("");

	function handleSubmit() {

		if (!seats) return setError("Please enter the number of seats ⚠️");
		if (seats <= 0) return setError("Seat number can't be 0 ⚠️");
		if (seats > 7) return setError("Seat number can't be greater than 7 ⚠️");
		if(avalSeats < seats)	return setError("Value exceeds available seats ⚠️")

		console.log(BookingSeat(Number(seats)));

		setError("");
		setSeats("");
	}
	return (
		<div className="container">
			<div className="form">
				<img src={trainLogo} alt="train_logo" />
				<h1 className="heading">Online Seat's Booking</h1>
				<div className="input">
					<p>Enter number of Seats</p>
					<input
						type="number"
						value={seats}
						onChange={(e) => setSeats(e.target.value)}
						min={0}
					/>
				</div>				
				<small className="error">{error}</small>
				<p className="show-availSeat">Available Seats : {avalSeats}</p>
				<button onClick={handleSubmit}>Book Ticket</button>
				<div className="indicator">
					<div className="avlSeats"></div>
					<p>Available Seats</p>
					<div className="bookedSeats"></div>
					<p>Booked Seats</p>
				</div>
			</div>
			<div className="showSeats">
				<h1>Seats</h1>
				<ShowSeats/>
			</div>
		</div>
	);
}

export default App;
