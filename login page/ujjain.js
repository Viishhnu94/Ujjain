// ------------------------- nav bar Digital Clock -----------------------


function updataClock() {
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";


        if (hou == 0) {
            hou = 12;
        }
        if (hou > 12) {
            hou = hou - 12;
            pe = "PM";
        }

    Number.prototype.pad = function(digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + hou);
        return n;
    }

    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var ids = ["dayname","month","daynum","year","hour","minutes","second","period"];
    var values = [week[dname],months[mo],dnum.pad(2),yr,hou.pad(2),min.pad(2),sec.pad(2),pe];

    for (var i = 0; i< ids.length; i++) 
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
    updataClock();
    window.setInterval("updataClock()",1);
}



// ---------------------------view profile------------------------------

function viewProfile() {
    document.getElementById("view-profile").style.display = "block";

    document.getElementById("home-page").style.display = "none";
    document.getElementById("home-name").style.backgroundColor = "white";
    
    document.getElementById("Air-port").style.backgroundColor = "white";
    document.getElementById("air-port-section").style.display = "none";
    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("puja-booking-name").style.backgroundColor = "white";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";
}




// -----------------------------HOME PAGE----------------------------



function homePage(){
    document.getElementById("home-page").style.display = "block";
    document.getElementById("home-name").style.backgroundColor = "#FF5F1F";
    
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("Air-port").style.backgroundColor = "white";
    document.getElementById("air-port-section").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("puja-booking-name").style.backgroundColor = "white";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "white";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";

}

// --------------------------- Hotel Booking ----------------------------

function hotelBooking() {
    document.getElementById("hotel-booking-page").style.display = "block";
    document.getElementById("air-port-section").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";
    document.getElementById("puja-booking-name").style.backgroundColor = "white";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "white";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";

}

function bookNow01(){
    document.getElementById("home_page_popup").style.display = "block";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";
    document.getElementById("puja-booking-name").style.backgroundColor = "white";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "white";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";

}






// ---------------------home page big card slider--------------------


fetch('http://13.50.223.218:8097/hotels/getallhotels')
            .then(response => response.json())
            .then(apidata => {
                console.log(apidata.data);
                let data1 = "";
                apidata.data.map((value) => {

                    data1 +=  `
                    <div class="swiper-slide">
                    <div class="card_container">
              
                    <img src=${value.image} alt="" id="home_image01">
                    <div class="star01">
                        <img src="../login page/Images/star.PNG" alt="" id="star_image01">
                        <p class="home_rating010">${value.rating}</p>
                    </div>
                    <h1 class="sri_siva_hotel_name01" id="home_main_heading50">${value.hotelName}</h1>
                <div class="members_div">
                  <img src="../login page/Images/profile icon.png" alt="" class="profile_hotel_image">
                  <p class="total_members">4</p>

                </div>
                <div class="button_space">
                  <p class="home_card_amount01">₹ ${value.price}</p>
                  <button class="home_button01">Book Now</button>
                </div>

            </div>
            </div>
                    
                    `;
                    document.getElementById("slider0111").innerHTML = data1;
                });
            })
            .catch((err) => { console.log(err); 
            });




// ------------------------home page small cards slider -------------------




fetch('http://13.50.223.218:8097/guide/AllGuides')
            .then(response => response.json())
            .then(apidata => {
                console.log(apidata.data);
                let data1 = "";
                apidata.data.map((value) => {
                    
                    data1 +=  `
                    <div class="swiper-slide" id="swiper-slider-space">
                        <div class="small_card_container02">
                        <img src="../login page/Images/image 1.PNG" alt="" class="small-card-image01">
                        <div class="home_rating_01">
                            <img src="../login page/Images/star.PNG" alt="" class="home_star">
                            <p class="home_rating01">${value.distance}</p>
                        </div>
                        <h2 class="ram_ghat_name01">${value.name}</h2> 
                        <div class="kilometer-alignment">
                            <img src="../login page/Images/distance symbol.png" alt="" class="distance-simbol01">
                            <p class="small-card-kilometer">${value.rating} km</p>
                        </div>
                        <button class="book_guide_button">Book a Guide</button>
                    </div>
                  </div>
                    
                    `;
                    document.getElementById("slider100").innerHTML = data1;

                });
            })
            .catch((err) => { console.log(err); 
            });


//-------------------------- Hotel Booking small cards slider----------------- 

fetch('http://13.50.223.218:8097/guide/AllGuides')
            .then(response => response.json())
            .then(apidata => {
                console.log(apidata.data);
                let data1 = "";
                apidata.data.map((value) => {

                    data1 +=  `
                    <div class="swiper-slide" id="swiper-space01">
                        <div class="small_card_container01">
                        <img src="../login page/Images/image 1.PNG" alt="" class="small-card-image01">
                        <div class="home_rating_01">
                            <img src="../login page/Images/star.PNG" alt="" class="home_star">
                            <p class="home_rating01">${value.distance}</p>
                        </div>
                        <h2 class="ram_ghat_name01">${value.name}</h2> 
                        <div class="kilometer-alignment">
                            <img src="../login page/Images/distance symbol.png" alt="" class="distance-simbol01">
                            <p class="small-card-kilometer">${value.rating} km</p>
                        </div>
                        <button class="book_guide_button">Book a Guide</button>
                    </div>
                    </div>
                    
                    `;
                    document.getElementById("slider1001").innerHTML = data1;
                });
            })
            .catch((err) => { console.log(err); 
            });


// ---------------------- hotelBookGuidePopup01----------------

function hotelBookGuidePopup01(){
    document.getElementById("home_page_popup").style.display = "block";
    document.getElementById("hotel-booking-popup-box").style.display = "block";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";
    document.getElementById("puja-booking-name").style.backgroundColor = "white";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "white";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";
}

function hotelPopupConfirmation() {
    document.getElementById("home_page_popup").style.display = "block";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "block";
    document.getElementById("puja_booking_section").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";
    document.getElementById("puja-booking-name").style.backgroundColor = "white";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "white";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";

}

function intoMark01() {
    document.getElementById("hotel-booking-page").style.display = "block";
    document.getElementById("puja_booking_section").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";

    document.getElementById("air-port-section").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";
    document.getElementById("puja-booking-name").style.backgroundColor = "white";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "white";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";

}



// -------------------------- puja booking ---------------------------


function pujaBooking() {
    document.getElementById("puja_booking_section").style.display = "block";
    document.getElementById("puja_booking_popup_section01").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("puja-booking-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "white";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";

}


function pujaBookingPopup01() {
    document.getElementById("puja_booking_section").style.display = "block";
    document.getElementById("puja_booking_popup_section01").style.display = "block";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("puja-booking-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "white";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";
}

function pujaPopupBookConfirm02() {
    document.getElementById("puja_booking_section").style.display = "block";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "block";
    document.getElementById("puja_booking_popup_section01").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("puja-booking-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "white";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";

}
function pujaIntoMark01() {
    document.getElementById("puja_booking_section").style.display = "block";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("puja-booking-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "white";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";
}

function pujaPopupThird03() {
    document.getElementById("puja-booking-box03").style.display = "block";
    document.getElementById("puja_booking_section").style.display = "block";

    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("puja-booking-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "white";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";
}

function pujaIntoMark03() {
    document.getElementById("puja_booking_section").style.display = "block";

    document.getElementById("puja-booking-box03").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("puja-booking-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "white";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";
}
function pujaPopupConfirm03() {
    document.getElementById("puja_booking_section").style.display = "block";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "block";

    document.getElementById("puja-booking-box03").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("puja-booking-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "white";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";
}


// ---------------------------------- ujjain dharshan --------------------------------------------------------




fetch('http://13.50.223.218:8097/guide/AllGuides')
//------------------------ ujjain small card slider --------------------------------
            .then(response => response.json())
            .then(apidata => {
                console.log(apidata.data);
                let data1 = "";
                apidata.data.map((value) => {
                    
                    data1 +=  `
                    <div class="swiper-slide" id="ujjain-slider-small01">
                        <div class="small_card_container01">
                        <img src="../login page/Images/image 1.PNG" alt="" class="small-card-image01">
                        <div class="home_rating_01">
                            <img src="../login page/Images/star.PNG" alt="" class="home_star">
                            <p class="home_rating01">${value.distance}</p>
                        </div>
                        <h2 class="ram_ghat_name01">${value.name}</h2> 
                        <div class="kilometer-alignment">
                            <img src="../login page/Images/distance symbol.png" alt="" class="distance-simbol01">
                            <p class="small-card-kilometer">${value.rating}</p>
                        </div>
                        <button class="airport_small_card_button01">Book a Guide</button>
                        </div>
                       
                  </div>
                    
                    `;
                    document.getElementById("slider-ujjain-small-card").innerHTML = data1;

                });
            })
            .catch((err) => { console.log(err); 
            });





function ujjainDharshan() {
    document.getElementById("ujjain-dharshan-section").style.display = "block";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";

    document.getElementById("puja-booking-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "white";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";

}

function ujjainPopup01() {
    document.getElementById("ujjain-dharshan-section").style.display = "block";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "block";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";

    document.getElementById("puja-booking-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "white";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";

}

function ujjainConfirmation01() {
    document.getElementById("ujjain-dharshan-section").style.display = "block";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "block";

    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";

    document.getElementById("puja-booking-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "white";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";

}

function ujjainIntoMark01() {
    document.getElementById("ujjain-dharshan-section").style.display = "block";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";

    document.getElementById("puja-booking-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "white";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";

}

// ----------------------------- omkareshwar tour --------------------------------



function omkareshwarTour() {
    document.getElementById("omkareshwar-tour-section").style.display = "block";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";

    document.getElementById("puja-booking-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "white";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";

}

function omkareshwarTourPopup01() {
    document.getElementById("omkareshwar-tour-section").style.display = "block";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "block";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";

    document.getElementById("puja-booking-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "white";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";


}
function omkareshwarPopupButton() {
    document.getElementById("omkareshwar-tour-section").style.display = "block";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "block";

    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";

    document.getElementById("puja-booking-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "white";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";

}

function omkareshwarTourIntoMark01() {
    document.getElementById("omkareshwar-tour-section").style.display = "block";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";

    document.getElementById("puja-booking-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "white";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";

}

// ---------------------- maa bhaglamukhi tour section ---------------------------

function maaBhaglamushiTour() {
    document.getElementById("maa-baglamukhi-tour-section").style.display = "block";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";

    document.getElementById("puja-booking-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "white";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";

}

function maaBhaglamushiTourPopup01() {
    document.getElementById("maa-baglamukhi-tour-section").style.display = "block";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "block";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";

    document.getElementById("puja-booking-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "white";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";

}

function maaBhaglamushiTourConfirm02() {
    document.getElementById("maa-baglamukhi-tour-section").style.display = "block";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "block";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";

    document.getElementById("puja-booking-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "white";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";

}


function maaBhaglamukhiTourIntoMark01() {
    document.getElementById("maa-baglamukhi-tour-section").style.display = "block";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";

    document.getElementById("puja-booking-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "white";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";


}

// --------------------- taxi services -------------------------------------



function taxiServices() {
    document.getElementById("taxi-services-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("taxi-services-tour-section").style.display = "block";
    document.getElementById("taxi-services-popup1").style.display = "block";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";

    document.getElementById("puja-booking-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "white";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";


}

function taxiServicesConfirm02() {
    document.getElementById("taxi-services-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("taxi-services-tour-section").style.display = "block";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "block";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";

    document.getElementById("puja-booking-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "white";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";



}

function taxiServicesIntoMark01() {
    document.getElementById("taxi-services-name").style.backgroundColor = "#FF5F1F";
    document.getElementById("taxi-services-tour-section").style.display = "block";
    document.getElementById("taxi-services-popup1").style.display = "block";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("view-profile").style.display = "none";
    document.getElementById("air-port-section").style.display = "none";

    document.getElementById("puja-booking-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("Air-port").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";

    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "white";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";


}


// --------------------------- AIR PORT PAGE ------------------------------------------


function airPortRides() {
    document.getElementById("air-port-section").style.display = "block";
    document.getElementById("air-port-popup1").style.display = "block";
    document.getElementById("Air-port").style.backgroundColor = "#FF5F1F";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("view-profile").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";

    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("puja-booking-name").style.backgroundColor = "white";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "white";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";

}

function airPortGreenPopup02() {
    document.getElementById("air-port-section").style.display = "block";
    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("Air-port").style.backgroundColor = "#FF5F1F";
    document.getElementById("air-port-popup-confirmation-box").style.display = "block";

    document.getElementById("view-profile").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    
    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("puja-booking-name").style.backgroundColor = "white";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "white";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";


}

function airPortIntoMark01() {
    document.getElementById("air-port-section").style.display = "block";
    document.getElementById("air-port-popup1").style.display = "block";
    document.getElementById("Air-port").style.backgroundColor = "#FF5F1F";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("view-profile").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    
    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("puja-booking-name").style.backgroundColor = "white";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("about-ujjain-main-section").style.display = "none";
    document.getElementById("about-ujjain-name").style.backgroundColor = "white";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "white";
    document.getElementById("about-ujjain-name").style.color = "black";

    document.getElementById("aside-bar-length01").style.height = "470px";

}


// -------------------------------------- about ujjain -----------------------------------


function aboutUjjain() {
    document.getElementById("aside-bar-length01").style.height = "1000px";

    document.getElementById("about-ujjain-main-section").style.display = "block";
    document.getElementById("about-ujjain-name").style.backgroundColor = "#FF5F1F";

    document.getElementById("air-port-section").style.display = "none";
    document.getElementById("air-port-popup1").style.display = "none";
    document.getElementById("Air-port").style.backgroundColor = "white";
    document.getElementById("air-port-popup-confirmation-box").style.display = "none";

    document.getElementById("view-profile").style.display = "none";

    document.getElementById("home_page_popup").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("home-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-popup-confirmation-box").style.display = "none";

    document.getElementById("puja_booking_section").style.display = "none";
    document.getElementById("puja_booking_popup_section01").style.display = "none";
    document.getElementById("puja-booking-popup-confirmation-box").style.display = "none";
    document.getElementById("puja-booking-box03").style.display = "none";
    
    document.getElementById("ujjain-dharshan-section").style.display = "none";
    document.getElementById("ujjain-dharshan-name").style.backgroundColor = "white";
    document.getElementById("ujjain-dharshan-popup-box1").style.display = "none";
    document.getElementById("ujjain-dharshan-popup-confirmation-box").style.display = "none";

    document.getElementById("hotel-booking-page").style.display = "none";
    document.getElementById("hotel-booking-name").style.backgroundColor = "white";
    document.getElementById("hotel-booking-popup-box").style.display = "none";
    document.getElementById("puja-booking-name").style.backgroundColor = "white";

    document.getElementById("omkareshwar-tour-section").style.display = "none";
    document.getElementById("omkareshwar-tour-name").style.backgroundColor = "white";
    document.getElementById("omkareshwar-tour-popup-box1").style.display = "none";
    document.getElementById("omkareshwar-popup-confirmation-box").style.display = "none";

    document.getElementById("maa-baglamukhi-tour-section").style.display = "none";
    document.getElementById("maa-bhaglamukhi-name").style.backgroundColor = "white";
    document.getElementById("maa-baglamukhi-tour-popup01").style.display = "none";
    document.getElementById("maa-baglamukhi-popup-confirmation-box").style.display = "none";

    document.getElementById("taxi-services-name").style.backgroundColor = "white";
    document.getElementById("taxi-services-tour-section").style.display = "none";
    document.getElementById("taxi-services-popup1").style.display = "none";
    document.getElementById("taxi-services-popup-confirmation-box").style.display = "none";

    document.getElementById("home-name").style.color = "black";
    document.getElementById("hotel-booking-name").style.color = "black";
    document.getElementById("puja-booking-name").style.color = "black";
    document.getElementById("ujjain-dharshan-name").style.color = "black";
    document.getElementById("omkareshwar-tour-name").style.color = "black";
    document.getElementById("maa-bhaglamukhi-name").style.color = "black";
    document.getElementById("taxi-services-name").style.color = "black";
    document.getElementById("Air-port").style.color = "black";
    document.getElementById("about-ujjain-name").style.color = "white";

}








