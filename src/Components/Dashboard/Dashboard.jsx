import "./Dashboard.css";
import Logo from "../../assets/Swift-Earn-Logo.png";
// import Logo from "../../assets/Swift-Earn-Logo.jpg";
import {NavLink} from "react-router-dom";
import {IoHomeOutline} from "react-icons/io5";
import {LuHardDriveDownload} from "react-icons/lu";
import {
    FaArrowAltCircleUp,
    FaHistory,
    FaAddressCard,
    FaRegUser,
} from "react-icons/fa";
import {FaHandHoldingDollar} from "react-icons/fa6";
import {BsFillCreditCard2BackFill} from "react-icons/bs";
import {BiTransfer} from "react-icons/bi";
import {LiaHandHoldingHeartSolid} from "react-icons/lia";
import {LuRepeat2} from "react-icons/lu";
import {MdOutlineMenu} from "react-icons/md";
import {GoDatabase} from "react-icons/go";
import {HiMiniUser} from "react-icons/hi2";
import {FiLogOut} from "react-icons/fi";
import {useState, useEffect, useRef} from "react";
// import {Outlet} from "react-router-dom";
import {RiMenu3Fill} from "react-icons/ri";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {swiftUserData} from "../store/FeaturesSlice";
import DashHome from "../../Pages/DashHome/DashHome";
import Deposit from "../../Pages/Deposit/Deposit";
import WithdrawFunds from "../../Pages/Withdrawal/WithdrawFunds";
import ProfitHistory from "../../Pages/ProfitHistory/ProfitHistory";
import Transactions from "../../Pages/Transactions/Transactions";
import Transfer from "../../Pages/TransferFunds/TransferFunds";
import Profile from "../../Pages/Profile/Profile";
import TradingPlans from "../../Pages/TradingPlans/TradingPlans";
import MyPlans from "../../Pages/MyPlans/MyPlans";
import Referrals from "../../Pages/Referrals/Referrals";
import ScrollToTop from "../ScrollToTop";
import Swal from "sweetalert2";
import DetailPlan from "../../Pages/MyPlans/DetailPlan";
import { IoIosNotifications } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { Select } from 'antd';
import axios from "axios";



const Dashboard = () => {
    const dispatch = useDispatch();

    const {id} = useParams();

    const [userData, setUserdata] = useState({});

    const handleGetUser = async () => {
        fetch(`https://omega-exchange-back-end-one.vercel.app/api/userdata/${id}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((response) => {
                //    console.log(response);
                setUserdata(response?.data);
                dispatch(swiftUserData(response.data));
                localStorage.setItem("UserId", response?.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        if (id) {
            handleGetUser();
        }
    }, [id]);

    
    const [showUserDrop, setShowUserDrop] = useState(false);
    const userDropdownRef = useRef(null);

    const handleShowUserDropdown = () => {
        setShowUserDrop(!showUserDrop);
    };

    const handleClickOutside = (event) => {
        if (
            userDropdownRef.current &&
            !userDropdownRef.current.contains(event.target)
        ) {
            setShowUserDrop(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const [showNav, setShowNav] = useState(false);

    const handleShowNav = () => {
        setShowNav(!showNav);
    };

    const handleLinkClick = () => {
        if (window.innerWidth <= 480) {
            handleShowNav();
        }
    };

    const handleLogOut = () => {
        localStorage.removeItem("UserId");
        window.location.href = "https://omega-exchange.vercel.app/";
    };
    const handleAdmin = () => {
        // window.location.href = "https://www.whitebitcrypfield.org/#/admin";
    };
        const [userPlane, setUserPlane] = useState([]);
        const getallPlan = () => {
            const url = "https://omega-exchange-back-end-one.vercel.app/api/getallplan";
            axios.get(url)
                .then((response) => {
                    // console.log(response.data.data);
                    setUserPlane(response?.data?.data)
                    console.log("gggg",response?.data?.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        useEffect(() => {
            getallPlan();
        }, []);

    const [showHome, setShowHome] = useState(true);
    const [showdeposit, setShowDeposit] = useState(false);
    const [showWithdraw, setSHowWithdraw] = useState(false);
    const [showProfitHistory, setShowProfitHistory] = useState(false);
    const [showTransaction, setShowTransaction] = useState(false);
    const [showTransferFunds, setShowTransferFunds] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [showTradingPlans, setTradingPlans] = useState(false);
    const [showMyPlans, setShowMyPlans] = useState(false);
    const [showReferrals, setShowReferrals] = useState(false)
    const [showDetailPlan, setShowDetailPlan] = useState(false);
    const [invest, setInvest] = useState(false);

    
    const handleShowHome = () => {
        setShowHome(true);
        setShowDeposit(false);
        setSHowWithdraw(false);
        setShowProfitHistory(false);
        setShowTransaction(false);
        setShowTransferFunds(false);
        setShowProfile(false);
        setTradingPlans(false);
        setShowMyPlans(false);
        setShowReferrals(false);
        setShowDetailPlan(false);
        handleLinkClick();
    };
    const handleShowDeposit = () => {
        setShowHome(false);
        setShowDeposit(true);
        setSHowWithdraw(false);
        setShowProfitHistory(false);
        setShowTransaction(false);
        setShowTransferFunds(false);
        setShowProfile(false);
        setTradingPlans(false);
        setShowMyPlans(false);
        setShowReferrals(false);
        setShowDetailPlan(false);
        handleLinkClick();
    };
    const handleShowWithdraw = () => {
        setShowHome(false);
        setShowDeposit(false);
        setSHowWithdraw(true);
        setShowProfitHistory(false);
        setShowTransaction(false);
        setShowTransferFunds(false);
        setShowProfile(false);
        setTradingPlans(false);
        setShowMyPlans(false);
        setShowReferrals(false);
        setShowDetailPlan(false);
        handleLinkClick();
    };
    const handleShowProfit = () => {
        setShowHome(false);
        setShowDeposit(false);
        setSHowWithdraw(false);
        setShowProfitHistory(true);
        setShowTransaction(false);
        setShowTransferFunds(false);
        setShowProfile(false);
        setTradingPlans(false);
        setShowMyPlans(false);
        setShowReferrals(false);
        setShowDetailPlan(false);
        handleLinkClick();
    };
    const handleShowTransactions = () => {
        setShowHome(false);
        setShowDeposit(false);
        setSHowWithdraw(false);
        setShowProfitHistory(false);
        setShowTransaction(true);
        setShowTransferFunds(false);
        setShowProfile(false);
        setTradingPlans(false);
        setShowMyPlans(false);
        setShowReferrals(false);
        setShowDetailPlan(false);
        handleLinkClick();
    };
    const handleShowTransferFunds = () => {
        setShowHome(false);
        setShowDeposit(false);
        setSHowWithdraw(false);
        setShowProfitHistory(false);
        setShowTransaction(false);
        setShowTransferFunds(true);
        setShowProfile(false);
        setTradingPlans(false);
        setShowMyPlans(false);
        setShowReferrals(false);
        setShowDetailPlan(false);
        handleLinkClick();
    };
    const handleShowProfile = () => {
        setShowHome(false);
        setShowDeposit(false);
        setSHowWithdraw(false);
        setShowProfitHistory(false);
        setShowTransaction(false);
        setShowTransferFunds(false);
        setShowProfile(true);
        setTradingPlans(false);
        setShowMyPlans(false);
        setShowReferrals(false);
        setShowDetailPlan(false);
        handleLinkClick();
    };
    const handleShowTradingPlans = () => {
        setShowHome(false);
        setShowDeposit(false);
        setSHowWithdraw(false);
        setShowProfitHistory(false);
        setShowTransaction(false);
        setShowTransferFunds(false);
        setShowProfile(false);
        setTradingPlans(true);
        setShowMyPlans(false);
        setShowReferrals(false);
        setShowDetailPlan(false);
        handleLinkClick();
    };
    const handleShowMyPlans = () => {
        setShowHome(false);
        setShowDeposit(false);
        setSHowWithdraw(false);
        setShowProfitHistory(false);
        setShowTransaction(false);
        setShowTransferFunds(false);
        setShowProfile(false);
        setTradingPlans(false);
        setShowMyPlans(true);
        setShowReferrals(false);
        setShowDetailPlan(false);
        handleLinkClick();
    };
    const handleShowReferrals = () => {
        setShowHome(false);
        setShowDeposit(false);
        setSHowWithdraw(false);
        setShowProfitHistory(false);
        setShowTransaction(false);
        setShowTransferFunds(false);
        setShowProfile(false);
        setTradingPlans(false);
        setShowMyPlans(false);
        setShowReferrals(true);
        setShowDetailPlan(false);
        handleLinkClick();
    };
    const handleShowDetailPlan = () => {
        setShowHome(false);
        setShowDeposit(false);
        setSHowWithdraw(false);
        setShowProfitHistory(false);
        setShowTransaction(false);
        setShowTransferFunds(false);
        setShowProfile(false);
        setTradingPlans(false);
        setShowMyPlans(false);
        setShowReferrals(false);
        setShowDetailPlan(true);
        // handleLinkClick();
    };

    const Contactus = () => {
        Swal.fire("Contact us on live support");
    };
    const [showNotification, setNotification] = useState(false)


    const handleNotification =()=>{
        setNotification((prev)=> !prev)
    }

    const handleInvestmentButton = () => {
        setNotification(false)
        setShowNav(false);
        // setInvest(!invest);
        setShowHome(false);
        setShowDeposit(false);
        setSHowWithdraw(false);
        setShowProfitHistory(false);
        setShowTransaction(false);
        setShowTransferFunds(false);
        setShowProfile(false);
        setTradingPlans(true);
        setShowMyPlans(false);
        setShowReferrals(false);
        setShowDetailPlan(false);
        // handleLinkClick();
    };

    return (
        <>
            <ScrollToTop />

            <div className="DashboardBody bigScreen">
                <div className={`DashboardWrapper ${showNav ? "active" : " "}`}>
                    <div className={`DashboardNav ${showNav ? "active" : ""}`}>
                        <div className="DashboardNavWrapper ">
                            <div className="DashboardNavLogo">
                                <img src={Logo} alt="" />
                                <RiMenu3Fill
                                    className="DashboardNavLogoMenuFill"
                                    onClick={handleShowNav}
                                />
                            </div>
                            <div className="DashboardNavAccountView">
                                <div className="DashboardNavAccountViewPfp">
                                    <HiMiniUser className="HiMiniUser" />
                                </div>
                                <div className="DashboardNavAccountViewInitials">
                                    <h2>{userData?.fullName}</h2>
                                    <p>online</p>
                                </div>
                                <div className="DashboardNavAccountViewBalance">
                                    <GoDatabase />{" "}
                                    <span>
                                        $&nbsp;{userData?.accountBalance}
                                    </span>
                                </div>
                            </div>
                            <div className="DashboardNavLinks">
                                <div className="DashboardNavLinksRow1">
                                    <NavLink
                                        className="DashboardNavLinksItem"
                                        activeClassName="current"
                                        onClick={handleShowHome}
                                    >
                                        <span>
                                            <IoHomeOutline className="DashboardNavlinksIcons" />
                                        </span>
                                        <span>Home</span>
                                    </NavLink>
                                    <NavLink
                                        className="DashboardNavLinksItem "
                                        onClick={handleShowDeposit}
                                        activeClassName="current"
                                    >
                                        <span>
                                            <LuHardDriveDownload className="DashboardNavlinksIcons" />
                                        </span>
                                        <span>Deposit</span>
                                    </NavLink>
                                </div>
                                <div className="DashboardNavLinksRow2">
                                    <NavLink
                                        className="DashboardNavLinksItem"
                                        onClick={handleShowWithdraw}
                                        activeClassName="current"
                                    >
                                        <span>
                                            <FaArrowAltCircleUp className="DashboardNavlinksIcons" />
                                        </span>
                                        <span>Withdrawal</span>
                                    </NavLink>
                                    <NavLink
                                        className="DashboardNavLinksItem"
                                        onClick={handleShowProfit}
                                        activeClassName="current"
                                    >
                                        <span>
                                            <FaHistory className="DashboardNavlinksIcons" />
                                        </span>
                                        <span>Profit History</span>
                                    </NavLink>
                                </div>
                                <div className="DashboardNavLinksRow3">
                                    <NavLink
                                        className="DashboardNavLinksItem"
                                        onClick={handleShowTransactions}
                                        activeClassName="current"
                                    >
                                        <span>
                                            <BsFillCreditCard2BackFill className="DashboardNavlinksIcons" />
                                        </span>
                                        <span>Transactions</span>
                                    </NavLink>
                                    <NavLink
                                        className="DashboardNavLinksItem"
                                        onClick={handleShowTransferFunds}
                                        activeClassName="current"
                                    >
                                        <span>
                                            <BiTransfer className="DashboardNavlinksIcons" />
                                        </span>
                                        <span>Transfer Funds</span>
                                    </NavLink>
                                </div>
                                <div className="DashboardNavLinksRow4">
                                    <NavLink
                                        className="DashboardNavLinksItem"
                                        onClick={handleShowProfile}
                                        activeClassName="current"
                                    >
                                        <span>
                                            <FaAddressCard className="DashboardNavlinksIcons" />
                                        </span>
                                        <span>Profile</span>
                                    </NavLink>
                                    <NavLink
                                        className="DashboardNavLinksItem"
                                        onClick={handleShowTradingPlans}
                                        activeClassName="current"
                                    >
                                        <span>
                                            <FaHandHoldingDollar className="DashboardNavlinksIcons" />
                                        </span>
                                        <span>Trading Plans</span>
                                    </NavLink>
                                </div>
                                <div className="DashboardNavLinksRow5">
                                    <NavLink
                                        className="DashboardNavLinksItem"
                                        onClick={handleShowMyPlans}
                                        activeClassName="current"
                                    >
                                        <span>
                                            <LiaHandHoldingHeartSolid className="DashboardNavlinksIcons" />
                                        </span>
                                        <span>My Plans</span>
                                    </NavLink>
                                    <NavLink
                                        className="DashboardNavLinksItem"
                                        onClick={handleShowReferrals}
                                        activeClassName="current"
                                    >
                                        <span>
                                            <LuRepeat2 className="DashboardNavlinksIcons" />
                                        </span>
                                        <span>Referrals</span>
                                    </NavLink>
                                </div>

                                {userData?.isAdmin ? (
                                    <div className="DashboardNavLinksRow5">
                                        <NavLink
                                            className="DashboardNavLinksItem"
                                            onClick={handleAdmin}
                                            activeClassName="current"
                                        >
                                            <span>
                                                <LiaHandHoldingHeartSolid className="DashboardNavlinksIcons" />
                                            </span>
                                            <span>Admin</span>
                                        </NavLink>
                                    </div>
                                ) : null}
                            </div>
                            <div className="DashboardNavContact">
                                <div className="DashboardNavContactText">
                                    <h3>Need Help!</h3>
                                    <p>
                                        Contact our 24/7 customer support center
                                    </p>
                                </div>
                                <div className="DashboardNavContactBtn">
                                    <button onClick={Contactus}>
                                        Contact us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`DashboardMain ${showNav ? "active" : ""}`}>
                        <div className="DashboardMainHeader">
                            <div className="DashboardMainHeaderBox">
                                <div className="DashboardMainHeaderBoxHambuger" >
                                <div className="notification-icon-wrapper" onClick={handleNotification}>
                                <IoIosNotifications style={{ fontSize: "20px", cursor: "pointer" }} />
                                {userData?.notification && <span className="red-dot" />}
                                </div>
                                    <div className={`notificationBar ${showNotification ? 'show' : ''}`}>
                                        <div className="notification_header">
                                            <h4>Your Notifications</h4>
                                            <MdCancel className="cancel_icon" onClick={()=> setNotification(false)}/>
                                        </div>
                                        <div className="notification_status">
                                           <div className="status_holder">
                                             <div className="n_status_card">
                                                <h4>All</h4>
                                                </div>
                                                <div className="n_status_card">
                                                    <h4>Unread</h4>
                                                </div>
                                           </div>
                                        </div>
                                        <div className="notification_body">
                                        
                                    {userData?.notification ? (
                                        userPlane
                                        ?.filter((item) => item.planName !== item.planName.toUpperCase()) // remove ALL UPPERCASE
                                        .map((item, index)=> (
                                            <div
    className="notification_card"
    key={index}
    onClick={() => {
        handleInvestmentButton(); // this will setTradingPlans(true) and setShowNav(false)
    }}
>
    <h4>{item?.planName}</h4>
    <p>ROI - {item?.rio}%</p>
    <p>Duration - {item?.durationDays} Days</p>
    <p>Minimum Deposit {item?.minimumDeposit}</p>
    <p>Maximum Deposit {item?.maximumDeposit}</p>
    <div className="investment_btn_div">
        <button
            className="investment_btn"
            // onClick={(e) => {
            //     e.stopPropagation(); // Prevent bubbling up if clicking button
            //     handleInvestmentButton();
            // }}
        >
            Invest Now
        </button>
    </div>
</div>

                                        ))
                                    ) : (
                                        <div className="no_notification">
                                        <h4>No Notifications</h4>
                                        </div>
                                    )
                                    }

                                        </div>

                                    </div>
                                </div>
                                <div className="DashboardMainHeaderBoxHambuger">
                                    <MdOutlineMenu
                                        className="MdOutlineMenu"
                                        onClick={handleShowNav}
                                    />
                                </div>
                                <div
                                    className="DashboardMainHeaderBoxAccount"
                                    onClick={handleShowUserDropdown}
                                    ref={userDropdownRef}
                                >
                                    <div>
                                        <HiMiniUser className="HiMiniUser" />
                                    </div>
                                    <p>{userData?.fullName}</p>
                                </div>
                            </div>
                            {showUserDrop ? (
                                <>
                                    <div className="DashboardMainHeaderUserAccDiv">
                                        <div className="DashboardMainHeaderUserAccDivWrap">
                                            <p>Hi {userData?.fullName}</p>
                                            <div className="DashboardMainHeaderUserAccDivPfp" onClick={handleShowProfile}>
                                                <span>
                                                    <FaRegUser />
                                                </span>
                                                My profile
                                            </div>
                                            <div
                                                className="DashboardMainHeaderUserAccDivLogout"
                                                onClick={handleLogOut}
                                            >
                                                <span>
                                                    <FiLogOut />
                                                </span>
                                                Logout
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : null}
                        </div>
                        <div className="DashboardMainContent">
                            {/* <Outlet data = {userData} /> */}
                            {showHome ? (
                                <DashHome
                                    homechange={setShowHome}
                                    planchange={setTradingPlans}
                                    Transactions={setShowTransaction}
                                    handleShowDetailPlan={handleShowDetailPlan}
                                />
                            ) : showdeposit ? (
                                <Deposit />
                            ) : showWithdraw ? (
                                <WithdrawFunds />
                            ) : showProfitHistory ? (
                                <ProfitHistory />
                            ) : showTransaction ? (
                                <Transactions />
                            ) : showTransferFunds ? (
                                <Transfer />
                            ) : showProfile ? (
                                <Profile />
                            ) : showDetailPlan ? (
                                <DetailPlan
                                    handleShowMyPlans={handleShowMyPlans}
                                />
                            ) : showTradingPlans ? (
                                <TradingPlans />
                            ) : showMyPlans ? (
                                <MyPlans
                                    myplans={setTradingPlans}
                                    homechange={setShowHome}
                                    data={userData}
                                    handleShowDetailPlan={handleShowDetailPlan}
                                />
                            ) : showReferrals ? (
                                <Referrals />
                            ) : null}
                        </div>
                        <div className="DashboardMainFooter">
                            <p>All Rights Reserved © Omega Exchange 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
