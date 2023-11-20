<template>
    <div class="reservation-container">
        <h2>Make a Reservation</h2>
        <form @submit.prevent="submitReservation">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="reservation.name" required>
            </div>
            <div class="form-group">
                <label for="date">Date:</label>
                <input type="date" id="date" v-model="reservation.date" required>
            </div>
            <div class="form-group">
                <label for="time">Time:</label>
                <input type="time" id="time" v-model="reservation.time" required>
            </div>
            <div class="form-group">
                <label for="guests">Number of Guests:</label>
                <input type="number" id="guests" v-model="reservation.guests" min="1" required>
            </div>
            <button type="submit">Reserve</button>
        </form>
    </div>
</template>

<script>
import { APIService } from '@/http/APIService';
export default {
    name: 'Reserve',
    data() {
        const apiService = new APIService();
        return {
            apiService,
            reservation: {
                name: '',
                date: '',
                time: '',
                guests: 0
            }
        };
    },
    methods: {
            submitReservation() {
                const bookingTime = new Date(`${this.reservation.date}T${this.reservation.time}`);
                const reservationData = {
                    ...this.reservation,
                    reserve_time: this.reservation.time,
                    Booking_time: bookingTime.toISOString(),
                    number_of_guests: this.reservation.guests
                };

                console.log(reservationData)
                
                // Replace with your actual API service call
                this.apiService.addNewReservation(reservationData)
                    .then(response => {
                        alert('Your reservation was successful!');
                        this.resetForm();
                    })
                    .catch(error => {
                        console.error('Error submitting reservation:', error);
                        alert('Failed to submit reservation.');
                    });
            },
        },
        resetForm() {
            this.reservation = {
                name: '',
                date: '',
                time: '',
                guests: 0
            };
            console.log('Reservation data:', reservationData);

        }
};
</script>


<style scoped>
.reservation-container {
    max-width: 500px;
    margin: auto;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 8px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type=date],
input[type=time],
input[type=number] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    background-color: #442027;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #555;
}
</style>
