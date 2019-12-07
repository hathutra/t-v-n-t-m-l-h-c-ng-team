var menuActive = false;
var menu = $('.menu');
var burger = $('.menu-toggle');
initMenu();
function initMenu()
{
    if($('.menu').length)
    {
        var menu = $('.menu');
        if($('.menu-toggle').length)
        {
            burger.on('click', function()
            {
                if(menuActive)
                {
                    closeMenu();
                }
                else
                {
                    openMenu();

                    $(document).one('click', function cls(e)
                    {
                        if($(e.target).hasClass('menu_mm'))
                        {
                            $(document).one('click', cls);
                        }
                        else
                        {
                            closeMenu();
                        }
                    });
                }
            });
        }
    }
}

function openMenu()
{
    menu.addClass('active');
    menuActive = true;
}

function closeMenu()
{
    menu.removeClass('active');
    menuActive = false;
}

/*fixed header*/
$(window).scroll(function(){
    if ($(window).scrollTop() >= 40) {
        $('.header-container').addClass('fixed-header');
    }
    else {
        $('.header-container').removeClass('fixed-header');
    }
});

const auth = firebase.auth();
const db = firebase.firestore();

const loggedOuts = document.querySelectorAll(".logged-out")
const loggedIns = document.querySelectorAll(".logged-in")
const accountInfo = document.querySelector(".account-infos")

const topBarUI = (user) => {
	if (user) {
        const html =`
        <div>Logged in as ${user.email}</div>
        `;
        accountInfo.innerHTML =html;

		loggedIns.forEach(item => item.style.display = "block");
		loggedOuts.forEach(item => item.style.display = "none")
	} else {
        accountInfo.innerHTML = ''

		loggedIns.forEach(item => item.style.display = "none");
		loggedOuts.forEach(item => item.style.display = "block")
	}
}
auth.onAuthStateChanged(user => {
    if(user) {
        console.log(user)
        topBarUI(user)
    } else {
        topBarUI()
    }
})

//logout
const logout = document.querySelector("#logout")
logout.addEventListener("click", (e) => { 
    e.preventDefault();
    auth.signOut().then(() => {
        console.log("user sign out")
    })
})