# hotel-admin

A complete admin-facing solution for the management of rooms in a Hotel.

### REQUIRENMENTS

- Hotel can have multiple rooms of multiple types.
- Each room type has a different type of pricing. Example:
  - Type A(Single Room): 100 Rs per hour
  - Type A(Double Room): 200 Rs per hour
  - Type A(Suite): 300 Rs per hour
- Hotel can have multiple room of any type. Example:
  - 10 Single Rooms
  - 5 Double Rooms
  - 2 Suites

### FEATURES

- **CREATE**: Admin can create the room with user's details like: room-number, Email, Start Time, End Time etc

  - No two booking should overlap for the same room with give start and end time.
  - Show the total price of the booking as soon as user update any field for the booking. i.e. Room Number, Start Time, End Time etc.

- **EDIT**: Allow admin to edit the booking details like room-number, Email, Start Time, End Time and ask the admin for conformation for the total price before submiting the form.

- **DELETE**: Admin can cancel the booking. with folloeing conditions:

  - start_time > 48 hours: 100% refund
  - start_time > 24 hours: 50% refund
  - No refund for less than 24 hours but still can cancel the booking.

- **VIEW**: Admin can view the list of all the bookings with the following details:

  - Room Number, Room Type, Email, Start Time, End Time, Total Price, Actions to edit or delete the booking.
  - Admin can Filter by room number and room type
  - Admin can Filter by start time and end time
