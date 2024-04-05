const router = require('express').Router();
const bookingController =  require('../controllers/BookingController');
const { route } = require('./RoleRoutes');


router.post('/booking', bookingController.createBooking)
router.get('/booking',bookingController.getAllBooking)
router.get('/booking/:id',bookingController.getBookingById)
router.put('/booking/:id',bookingController.updateBookingById)
router.put('/booking/updatestatus/:id',bookingController.updateBookingStatus)
router.get('/booking/user/:id', bookingController.getBookingByUserId); // Fetch bookings by user ID
router.get('/booking/pending/user/:id', bookingController.getPendingBooking); // Fetch pending bookings by user ID
router.get('/booking/done/:id', bookingController.getDoneBooking); // Fetch done bookings by user ID


module.exports = router