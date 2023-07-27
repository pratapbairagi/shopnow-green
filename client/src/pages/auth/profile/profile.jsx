
import { useEffect, useState } from "react";
import { Pencil, XLg } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import Input from "../../../asset/atoms";
import "../profile.css";
import { user_update_action } from "../../../redux/userAction"
import Spinner from "../../../components/spinner/spinner";

const Profile = ({ state }) => {

    const dispatch = useDispatch()

    // updated user
    const [updatedUser, setUpdatedUser] = useState({
        name: "",
        email: "",
        number: "",
        age: "",
        gender: "",
        address: "",
        image: {
            public_id: "",
            url: ""
        },
        oldpassword: "",
        newPassword: ""
    })

    // on edit load : prev user details
    useEffect(() => {
        if (state.user.email) {
            setUpdatedUser({
                ...updatedUser,
                name: state.user.name,
                email: state.user.email,
                number: state.user.number,
                age: state.user.age,
                gender: state.user.gender,
                address: state.user.address,
                image: state.user.image,
            })
        }
    }, [state.user])

    // edit change handler
    const editChangeHandler = (e) => {
        const { name, value } = e.target;

        if (name !== "image") {
            setUpdatedUser({
                ...updatedUser,
                [name]: value
            })
        }
        else {
            const reader = new FileReader();

            reader.addEventListener("load", function () {
                if (reader.DONE) {
                    setUpdatedUser({
                        ...updatedUser,
                        image: {
                            ...updatedUser.image,
                            url: reader.result
                        }
                    })
                }
            })
            reader.readAsDataURL(e.target.files[0])
        }
    }


    // submit updated user
    const updateUserHandler = () => {
        dispatch(user_update_action(updatedUser))
    }

    useEffect(() => {
        if (state.success) {
            document.getElementById("profile_edit_sec").style.display = "none";
            document.getElementById("profile_personal_details_edit_sec").style.display = "none";
            document.getElementById("profile_password_details_edit_sec").style.display = "none"
        }
    }, [state.success])

    return (
        <div className="container-fluid profile_container " >
            {/* { state.success && <NotificationToaster state={state} />} */}

            {state.loading && <Spinner />}

            <h5 style={{ color: "grey", margin: "3px auto" }}>profile</h5>

            <div className="row profile_container_row" >

                {/* first column : start */}
                <div className="col col-12 col-md-6 m-0" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "18px  24px", borderRadius: "12px", maxWidth: "300px", background: "var(--floral-white)", position: "relative", minHeight:"410px"  }}>
                    <div id="profile_edit_sec" style={{ position: "absolute", display: "none", flexDirection: "column", alignItems: "center", width: "100%", height: "100%", top: "0", left: "0", background: "white", borderRadius: "12px" }}>
                        <button onClick={
                            () => {
                                if (document.getElementById("profile_edit_sec").style.display === "flex") {
                                    document.getElementById("profile_edit_sec").style.display = "none"
                                }
                            }
                        } style={{ position: "absolute", right: "4px", top: "4px", width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", paddingTop: "1px" }}>
                            <XLg size="14" />
                        </button>

                        <div style={{ width: "90%", marginTop: "42px", display: "flex", alignItems: "center", height: "1.8rem" }}>
                            <Input type="file" name="image" id="file" fun={editChangeHandler} css={{ width: "90%", fontSize: "calc(10px + 0.390625vw)", color: "transparent" }} defaultValue={updatedUser.image.url} />
                            <img src={updatedUser.image.url} style={{ height: "100%", aspectRatio: "1/1" }} alt={updatedUser.image.url} />
                        </div>

                        <label style={{ marginTop: "8px", fontSize: "calc(8px + 0.390625vw)", width: "90%", textAlign: "left" }} htmlFor="name">Full Name</label>
                        <Input type="text" name="name" id="name" fun={editChangeHandler} placeholder="Full Name" defaultValue={updatedUser.name} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "90%" }} />

                        <label style={{ marginTop: "8px", fontSize: "calc(8px + 0.390625vw)", width: "90%", textAlign: "left" }} htmlFor="email">Email</label>
                        <Input type="email" name="email" id="email" fun={editChangeHandler} placeholder="Email" defaultValue={updatedUser.email} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "90%" }} />

                        <label style={{ marginTop: "8px", fontSize: "calc(8px + 0.390625vw)", width: "90%", textAlign: "left" }} htmlFor="nummber">Phone number</label>
                        <Input type="number" name="number" id="number" fun={editChangeHandler} placeholder="phone number" defaultValue={updatedUser.number} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "90%" }} />

                        <button onClick={updateUserHandler} style={{ width: "90%", marginTop: "18px", border: "none", fontWeight: "500", fontSize: "calc(10px + 0.390625vw)", padding: "2px 0" }}>Save</button>

                    </div>

                    <img src={updatedUser.image.url} style={{ width: "100%", aspectRatio: "1/.7" }} alt={state.user.url} />

                    <div className="profile_title row mt-2" style={{ width: "100%", display: "flex", justifyContent: "space-between", padding: "2px 0" }}>

                        <div className="title col col-5 p-0" style={{ whiteSpace: "nowrap", lineHeight: "100%", height: "max-height", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", fontSize: "calc(14px + 0.390625vw)", fontWeight: "500" }}>My profile</div>
                        <div className="address_bar col col-6 px-2 py-1" style={{ fontSize: "calc(8px + 0.390625vw)", color: "grey", textAlign: "right" }}>
                            {new Date(state.user.createdAt).toLocaleString().split(",")[0]}
                            <br />
                            {new Date(state.user.createdAt).toLocaleString().split(",")[1]}

                        </div>

                    </div>

                    <div className="row mt-2" style={{ width: "100%", display: "flex", justifyContent: "space-between", padding: "2px 0" }}>
                        <div className="col col-5 px-2 py-1" style={{ fontSize: "15px", whiteSpace: "nowrap", textAlign: "left", width: "48%", color: "var(--header-black)", padding: "4px 6px    ", borderBottom: "1px solid grey", boxShadow:"none", borderRadius:"0" }}>{updatedUser.name}</div>
                        <div className="col col-6 px-2 py-1" style={{ fontSize: "15px", textAlign: "center", width: "48%", whiteSpace: "nowrap", color: "var(--header-black)", borderBottom: "1px solid grey", boxShadow:"none", borderRadius:"0" }}>+91 {updatedUser.number}</div>
                    </div>

                    <div className="row mt-2" style={{ width: "100%", display: "flex", justifyContent: "space-between", padding: "2px 0" }}>
                        <div className="col col-12 px-2 py-1" style={{ fontSize: "calc(10px + 0.390625vw)", whiteSpace: "nowrap", textAlign: "center", color: "var(--header-black)", padding: "0", borderBottom: "1px solid grey", boxShadow:"none", borderRadius:"0" }}>{updatedUser.email}</div>
                    </div>

                    <button onClick={
                        () => {
                            if (document.getElementById("profile_edit_sec").style.display === "none") {
                                document.getElementById("profile_edit_sec").style.display = "flex"
                            }
                        }
                    } className="btn btn-danger mt-3 rounded-5 px-4 py-1 fs-6" style={{margin:"0 auto", position:"relative", maxWidth:"90%"}} >Edit</button>

                </div>
                {/* first column : end */}



                {/* second column : start */}
                <div className="col col-12 col-md-6 m-0 p-2" style={{ display: "flex", flexDirection: "column", gap: "4px", justifyContent: "space-between", aspectRatio: "1/1.3", alignItems: "center", borderRadius: "10px", height: "max-content", minHeight:"410px", background: "var(--floral-white)" }}>


                    {/* personal details section */}
                    <div className=" p-0 gap-2 m-0 d-flex flex-column justify-content-start align-items-center p-0" style={{ width: "100%", position: "relative", flexDirection: "column", height: "58%", borderRadius: "12px", background: "var(--floral-white)" }}>



                        {/* toggle profile personal detail view : start */}
                        <div id="profile_personal_details_edit_sec" style={{ position: "absolute", display: "none", flexDirection: "column", alignItems: "center", width: "100%", height: "100%", top: "0", left: "0", background: "white", borderBottom: "1px solid grey", boxShadow: "none" }}>

                            <button onClick={
                                () => {
                                    if (document.getElementById("profile_personal_details_edit_sec").style.display === "flex") {
                                        document.getElementById("profile_personal_details_edit_sec").style.display = "none"
                                    }
                                }
                            } style={{ position: "absolute", right: "4px", top: "4px", width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", paddingTop: "1px" }}>
                                <XLg size="14" />
                            </button>

                            <label style={{ marginTop: "10px", fontSize: "calc(8px + 0.390625vw)", width: "90%", textAlign: "left" }} htmlFor="age">Date Of Birth</label>
                            <Input type="date" name="age" id="age" placeholder="Date of birth" fun={editChangeHandler} defaultValue={updatedUser.age} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "90%" }} />

                            <label style={{ marginTop: "5px", fontSize: "calc(8px + 0.390625vw)", width: "90%", textAlign: "left" }} htmlFor="gender">Gender</label>

                            <div style={{ fontSize: "1.4", marginTop: "4px", border: "2px solid rgb(243, 238, 238)", padding: "4px 8px", fontWeight: "400", justifyContent: "flex-start", width: "90%", display: "flex", alignItems: "center" }}>
                                <label style={{ fontSize: "calc(8px + 0.390625vw)", color: "grey" }} htmlFor="male">Male</label>
                                <input onChange={editChangeHandler} value="male" style={{ marginLeft: "4px" }} type="radio" name="gender" id="male" />
                                <label style={{ fontSize: "calc(8px + 0.390625vw)", color: "grey", marginLeft: "16px" }} htmlFor="female">Female</label>
                                <input onChange={editChangeHandler} value="female" style={{ marginLeft: "4px" }} type="radio" name="gender" id="female" />
                            </div>

                            <label style={{ marginTop: "5px", fontSize: "calc(8px + 0.390625vw)", width: "90%", textAlign: "left" }} htmlFor="age">Address</label>
                            <Input type="text" name="address" id="address" placeholder="Address" fun={editChangeHandler} defaultValue={updatedUser.address} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "90%" }} />


                            <button onClick={updateUserHandler} style={{ width: "90%", marginTop: "8px", border: "none", fontWeight: "500", fontSize: "calc(10px + 0.390625vw)", padding: "2px 0" }}>Save</button>

                        </div>
                        {/* toggle profile personal detail view : end */}



                        <div className="col col-12 d-flex justify-content-between align-items-center" style={{ borderBottom: "1px solid grey", background: "var(--dark-red)", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", minHeight: "2.5rem", padding: "0 12px" }}>
                            <div style={{ fontSize: "calc(12px + 0.390625vw)", fontWeight: "500", color: "var(--floral-white)", width: "max-content", maxWidth: "70%", height: "20%", display: "flex", alignItems: "center" }}>Personal Details</div>
                            <button onClick={
                                () => {
                                    if (document.getElementById("profile_personal_details_edit_sec").style.display === "none") {
                                        document.getElementById("profile_personal_details_edit_sec").style.display = "flex"
                                    }
                                }
                            } style={{ minWidth: "30px", height: "60%", aspectRatio: "1/.5", borderRadius: "20px", display: "flex", alignItems: "center", background: "var(--white-smoke)", justifyContent: "center", padding: "2px 8px" }}> <Pencil color="var(--dark-red)" /> </button>
                        </div>


                        <div className="col col-12 mt-2 d-flex justify-content-between align-items-center" style={{ padding: "0 12px", boxShadow:"none", borderRadius:"0", borderBottom:"1px solid grey" }}>
                            <div style={{ fontSize: "1.5vw", fontWeight: "500", color: "grey", width: "max-content", maxWidth: "70%", height: "20%", minHeight: "calc(40px + 0.390625vw)", display: "flex", alignItems: "start", flexDirection: "column" }}>
                                <div className="" style={{ fontSize: "calc(10px + 0.390625vw)" }}>Date Of Birth</div>
                                <div style={{ fontSize: "calc(8px + 0.390625vw)", marginTop: "2px", fontWeight: "400" }}>{updatedUser.age ? updatedUser.age : "Please update your age!"}</div>
                            </div>
                            <button style={{ minWidth: "40px", height: "60%", whiteSpace: "noWrap", aspectRatio: "1/.25", borderRadius: "20px", display: "flex", alignItems: "center", background: "orange", justifyContent: "center", fontSize: "calc(10px + 0.390625vw)", padding: "1px 10px", color: "var(--floral-white)" }}> Edit and save </button>
                        </div>

                        <div className="col col-12 d-flex justify-content-between align-items-center" style={{ padding: "0 12px", boxShadow:"none", borderRadius:"0", borderBottom:"1px solid grey" }}>
                            <div style={{ fontSize: "1.5vw", fontWeight: "500", color: "grey", width: "max-content", maxWidth: "70%", height: "20%", minHeight: "calc(40px + 0.390625vw)", display: "flex", alignItems: "start", flexDirection: "column" }}>
                                <div className="" style={{ fontSize: "calc(10px + 0.390625vw)" }}>Gender</div>
                                <div style={{ fontSize: "1.4", marginTop: "4px", fontWeight: "400", display: "flex", alignItems: "center" }}>
                                    <div style={{ fontSize: "calc(8px + 0.390625vw)", marginTop: "2px", fontWeight: "400", margin: "0" }}>{updatedUser.gender ? updatedUser.gender : "Please update your profile !"}</div>
                                </div>
                            </div>
                            <button style={{ minWidth: "40px", height: "60%", whiteSpace: "noWrap", aspectRatio: "1/.25", borderRadius: "20px", display: "flex", alignItems: "center", background: "orange", justifyContent: "center", fontSize: "calc(10px + 0.390625vw)", padding: "1px 10px", color: "var(--floral-white)" }}> Edit and save </button>
                        </div>

                        <div className="col col-12 mt-2 d-flex justify-content-between align-items-center" style={{ padding: "0 12px", boxShadow:"none", borderRadius:"0", borderBottom:"1px solid grey" }}>
                            <div style={{ fontSize: "1.5vw", fontWeight: "500", color: "grey", width: "max-content", maxWidth: "70%", height: "20%", minHeight: "calc(40px + 0.390625vw)", display: "flex", alignItems: "start", flexDirection: "column" }}>
                                <div className="" style={{ fontSize: "calc(10px + 0.390625vw)" }}>Address</div>
                                <div style={{ fontSize: "calc(8px + 0.390625vw)", marginTop: "2px", fontWeight: "400" }}>{updatedUser.address ? updatedUser.address : "Please update your address!"}</div>
                            </div>
                            <button style={{ minWidth: "40px", height: "60%", whiteSpace: "noWrap", aspectRatio: "1/.25", borderRadius: "20px", display: "flex", alignItems: "center", background: "orange", justifyContent: "center", fontSize: "calc(10px + 0.390625vw)", padding: "1px 10px", color: "var(--floral-white)" }}> Edit and save </button>
                        </div>

                    </div>





                    {/* password detail view section : start */}
                    <div className=" p-0 gap-2 m-0 d-flex flex-column justify-content-start align-items-center p-0" style={{ width: "100%", position: "relative", flexDirection: "column", height: "40%", borderRadius: "12px", background: "var(--floral-white)" }}>



                        {/* toggle profile personal detail view : start */}
                        <div id="profile_password_details_edit_sec" style={{ position: "absolute", display: "none", flexDirection: "column", alignItems: "center", width: "100%", height: "100%", top: "0", left: "0", background: "white", borderRadius: "10px" }}>

                            <button onClick={
                                () => {
                                    if (document.getElementById("profile_password_details_edit_sec").style.display === "flex") {
                                        document.getElementById("profile_password_details_edit_sec").style.display = "none"
                                    }
                                }
                            } style={{ position: "absolute", right: "4px", top: "4px", width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", paddingTop: "1px" }}>
                                <XLg size="14" />
                            </button>

                            <label style={{ marginTop: "10px", fontSize: "calc(8px + 0.390625vw)", width: "90%", textAlign: "left" }} htmlFor="oldPassword">Old password</label>
                            <Input type="password" id="oldPassword" fun={editChangeHandler} name="oldPassword" placeholder="Old password" defaultValue="****" css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "90%" }} />

                            <label style={{ marginTop: "5px", fontSize: "calc(8px + 0.390625vw)", width: "90%", textAlign: "left" }} htmlFor="newPassword">New Password</label>
                            <Input type="password" id="newPassword" fun={editChangeHandler} name="newPassword" placeholder="New password" defaultValue="" css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "90%" }} />


                            <button onClick={updateUserHandler} style={{ width: "90%", marginTop: "8px", border: "none", fontWeight: "500", fontSize: "calc(10px + 0.390625vw)", padding: "2px 0" }}>Save</button>

                        </div>
                        {/* toggle profile personal detail view : end */}




                        <div className="col col-12 d-flex justify-content-between align-items-center" style={{ borderBottom: "1px solid grey", background: "var(--dark-red)", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", minHeight: "2.5rem", padding: "0 12px" }}>
                            <div style={{ fontSize: "calc(12px + 0.390625vw)", fontWeight: "500", color: "var(--floral-white)", width: "max-content", maxWidth: "70%", height: "20%", display: "flex", alignItems: "center" }}>Password</div>
                            <button onClick={
                                () => {
                                    if (document.getElementById("profile_password_details_edit_sec").style.display === "none") {
                                        document.getElementById("profile_password_details_edit_sec").style.display = "flex"
                                    }
                                }
                            } style={{ minWidth: "30px", height: "60%", aspectRatio: "1/.5", borderRadius: "20px", display: "flex", alignItems: "center", background: "var(--white-smoke)", justifyContent: "center", padding: "2px 8px" }}> <Pencil color="var(--dark-red)" /> </button>
                        </div>

                        <div className="col col-12 mt-2 d-flex justify-content-between align-items-center" style={{ padding: "0 12px", borderRadius:"0", boxShadow:"none", borderBottom:"1px solid grey" }}>
                            <div style={{ fontSize: "1.5vw", fontWeight: "500", color: "grey", width: "max-content", maxWidth: "70%", height: "20%", minHeight: "calc(40px + 0.390625vw)", display: "flex", alignItems: "start", flexDirection: "column" }}>
                                <div className="" style={{ fontSize: "calc(10px + 0.390625vw)" }}>Password</div>
                                <div style={{ fontSize: "calc(8px + 0.390625vw)", marginTop: "2px", fontWeight: "400" }}>********</div>
                            </div>
                            <button style={{ minWidth: "40px", height: "60%", whiteSpace: "noWrap", aspectRatio: "1/.25", borderRadius: "20px", display: "flex", alignItems: "center", background: "orange", justifyContent: "center", fontSize: "calc(10px + 0.390625vw)", padding: "1px 10px", color: "var(--floral-white)" }}> Edit and save </button>
                        </div>

                    </div>
                    {/* password detail view section : end */}


                </div>
                {/* second column : end */}


            </div>
        </div>
    )
}

export default Profile