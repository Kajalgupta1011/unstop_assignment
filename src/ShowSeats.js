import React from "react";
import { bookedSeats, seat } from "./util/BookingSeat";

function ShowSeats() {
	return (
		<div className="seats-container">
			{seat.map((row, idx) => {
				return (
					<div className="row" key={"row" + idx}>
						{row.map((num, idx) => {
							return (
								<div
									key={"col" + idx}
									className={`seat ${
										bookedSeats.includes(num)
											? "booked"
											: ""
									}`}
								>
									{num}
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}

export default ShowSeats;
