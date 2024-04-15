const router = require('express').Router();
const bookingController =  require('../controllers/BookingController');
const { route } = require('./RoleRoutes');


router.post('/booking', bookingController.createBooking)
router.get('/booking',bookingController.getAllBooking)
router.get('/booking/:id',bookingController.getBookingById)
router.put('/booking/:id',bookingController.updateBookingById)
router.put('/booking/updatestatus/:id',bookingController.updateBookingStatus)
router.get('/booking/user/:id', bookingController.getBookingByUserId); 
router.get('/booking/pending/user/:id', bookingController.getPendingBooking); 
router.get('/booking/done/:id', bookingController.getDoneBooking); 
router.get('/booking/serviceprovider/:id',bookingController.getBookingByServiceProviderId)
router.get('/booking/serviceprovider/done/:id',bookingController.getDoneBookingByServiceProviderId)
router.delete('/booking/:id',bookingController.deleteBooking)

module.exports = router