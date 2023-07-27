import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { admin_gets_all_users_action, admin_user_update_action } from "../../../../redux/userAction";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


import React from "react"
import Input from "../../../../asset/atoms"
import { PencilSquare, Trash3, XLg } from "react-bootstrap-icons";




const UsersList = ({ state }) => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.admin_gets_users);
    const singleUser = useSelector(state => state.admin_gets_user);



    useEffect(() => {
        fetchUsers()
    }, []);

    useEffect(() => {
        if (singleUser.success) {
            fetchUsers()
        }
    }, [singleUser])

    const fetchUsers = () => {
        dispatch(admin_gets_all_users_action())
    };

    // edit user
    // send edit user handler
    let [user, setUser] = useState({
        name: "",
        email: "",
        number: "",
        _id: "",
        image: {
            public_id: "",
            url: ""
        },
        age: "",
        gender: "",
        role: "",
        address: "",
        createdAt: ""
    });

    // edit change handler
    const updateAdminChangeHandler = (e) => {
        const { name, value } = e.target;

        if (name !== "image") {
            setUser({
                ...user,
                [name]: value
            })
        }
        else {
            const reader = new FileReader();

            reader.addEventListener("load", function () {
                if (reader.DONE) {
                    setUser({
                        ...user,
                        image: {
                            ...user.image,
                            url: reader.result
                        }
                    })
                }
            })
            reader.readAsDataURL(e.target.files[0])
        }
    };

    // submit updated user
    const updateUserHandler = () => {
        dispatch(admin_user_update_action(user._id, user))
    };

    const getUserById_handler = async (id) => {
        try {
            if (id) {
                const findUser = await users.users.find(u => u._id === id)
                setUser(findUser)
            }
        } catch (error) {
            alert("error occure !")
        }
    };

    return (
        <>
            <div className="container-fluid d-block">
                <h5 style={{ color: "grey", margin: "3px auto" }}>Users</h5>
                <div className="row p-0" style={{ overflowX: "scroll", maxHeight: "76vh" }}>

                    {/* column first : start */}
                    <div className="col col-12 col-md-8 col-lg-9 px-1 py-1" style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "start", minHeight: "76vh" }}>
                        <div className="table-responsive" style={{ overflow: "scroll", maxHeight: "75vh", position: "relative" }}>
                            <table className="table" style={{ fontSize: "calc(8px + 0.390635vw)" }}>
                                <thead style={{ position: "sticky", top: "0", color: "grey", background: "whitesmoke" }}>
                                    <tr>
                                        <th style={{ width: "max-content", whiteSpace: "nowrap", fontSize: "calc(7px + 0.390625vw)" }}>S No.</th>
                                        <th style={{ width: "max-content", whiteSpace: "nowrap", fontSize: "calc(7px + 0.390625vw)" }}>ID</th>
                                        <th style={{ width: "max-content", whiteSpace: "nowrap", fontSize: "calc(7px + 0.390625vw)" }}>Name</th>
                                        <th style={{ width: "max-content", whiteSpace: "nowrap", fontSize: "calc(7px + 0.390625vw)" }} >Phone</th>
                                        <th style={{ width: "max-content", whiteSpace: "nowrap", fontSize: "calc(7px + 0.390625vw)" }}>Email</th>
                                        <th>Image</th>
                                        <th style={{ width: "max-content", whiteSpace: "nowrap", fontSize: "calc(7px + 0.390625vw)" }}>Created</th>
                                        <th style={{ width: "max-content", whiteSpace: "nowrap", fontSize: "calc(7px + 0.390625vw)" }}>Edit</th>
                                        <th style={{ width: "max-content", whiteSpace: "nowrap", fontSize: "calc(7px + 0.390625vw)" }}>Del</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.success &&
                                        users.users.map((v, i) => {
                                            return <tr key={v._id}>
                                                <th style={{ fontWeight: "300", fontSize: "calc(5px + 0.390625vw)" }}>{i + 1}</th>
                                                <th style={{ fontWeight: "300", fontSize: "calc(5px + 0.390625vw)" }}>{v._id}</th>
                                                <th style={{ fontWeight: "300", fontSize: "calc(5px + 0.390625vw)" }}>{v.name}</th>
                                                <th style={{ fontWeight: "300", fontSize: "calc(5px + 0.390625vw)" }}>{v.number}</th>
                                                <th style={{ fontWeight: "300", fontSize: "calc(5px + 0.390625vw)" }}>{v.email}</th>
                                                <th ><img src={v.image.url} style={{ width: "32px", height: "32px" }} alt="" /></th>
                                                <th style={{ fontWeight: "300", fontSize: "calc(5px + 0.390625vw)" }}>{v.createdAt}</th>
                                                <th><button onClick={() => getUserById_handler(v._id)} className="btn btn-sm btn-warning rounded-circle" style={{ fontWeight: "300", fontSize: "calc(5px + 0.390625vw)" }}> <PencilSquare color="white" /> </button></th>
                                                <th><button className="btn btn-sm btn-danger" style={{ fontWeight: "300", fontSize: "calc(5px + 0.390625vw)" }}> <Trash3 color="white" /> </button></th>

                                            </tr>
                                        })
                                    }
                                </tbody>


                            </table>
                            <Stack sx={{ position: "sticky", bottom: "0", left: "0", background: "whitesmoke" }} spacing={2}>
                                <Pagination
                                    count={4}
                                    sx={{ justifyContent: 'center', display: "flex" }}
                                    renderItem={(item) => (
                                        <PaginationItem
                                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                            {...item}
                                        />
                                    )}
                                />
                            </Stack>
                        </div>

                    </div>
                    {/* column first : end */}


                    {/* column second : start */}
                    <div className="col col-12 col-md-4 col-lg-3 m-0 mt-sm-2 mt-md-0" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "18px  24px", maxHeight: "76vh", position: "relative" }}>

                        <div id="user_profile_edit" style={{ position: "absolute", display: "none", flexDirection: "column", alignItems: "center", width: "100%", height: "100%", top: "0", left: "0", background: "white", borderRadius: "12px" }}>
                            <button onClick={
                                () => {
                                    if (document.getElementById("user_profile_edit").style.display === "flex") {
                                        document.getElementById("user_profile_edit").style.display = "none"
                                    }
                                }
                            } style={{ position: "absolute", right: "4px", top: "4px", width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", paddingTop: "1px" }}>
                                <XLg size="14" />
                            </button>

                            <div style={{ width: "90%", marginTop: "20px", display: "flex", alignItems: "center", height: "1.8rem" }}>
                                <Input type="file" name="image" id="file" fun={updateAdminChangeHandler} css={{ width: "90%", fontSize: "calc(10px + 0.390625vw)", color: "transparent" }} defaultValue={user.image.url} />
                                <img src={user.image.url} style={{ height: "100%", aspectRatio: "1/1" }} alt={user.image.url} />
                            </div>

                            <label style={{ marginTop: "6px", fontSize: "calc(6px + 0.390625vw)", width: "90%", textAlign: "left" }} htmlFor="name">Full Name</label>
                            <Input type="text" name="name" id="name" fun={updateAdminChangeHandler} placeholder="Full Name" defaultValue={user.name} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "90%" }} />

                            <label style={{ marginTop: "6px", fontSize: "calc(6px + 0.390625vw)", width: "90%", textAlign: "left" }} htmlFor="email">Email</label>
                            <Input type="email" name="email" id="email" fun={updateAdminChangeHandler} placeholder="Email" defaultValue={user.email} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "90%" }} />

                            <label style={{ marginTop: "6px", fontSize: "calc(6px + 0.390625vw)", width: "90%", textAlign: "left" }} htmlFor="nummber">Phone number</label>
                            <Input type="number" name="number" id="number" fun={updateAdminChangeHandler} placeholder="phone number" defaultValue={user.number} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "90%" }} />

                            <label style={{ marginTop: "6px", fontSize: "calc(6px + 0.390625vw)", width: "90%", textAlign: "left" }} htmlFor="nummber">Address</label>
                            <Input type="text" name="address" id="address" fun={updateAdminChangeHandler} placeholder="phone number" defaultValue={user.address} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "90%" }} />

                            <div style={{ width: "90%", display: "flex", minHeight: "1.5rem", marginTop: "8px", gap: "20px", border: "2px solid rgb(243, 238, 238)", justifyContent: "center", alignItems: "center" }}>
                                <label style={{ fontSize: "calc(6px + 0.390625vw)", textAlign: "left" }} htmlFor="male">Male</label>
                                <Input type="radio" name="gender" id="male" fun={updateAdminChangeHandler} placeholder="male" defaultValue={user.gender} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", fontSize: "calc(8px + 0.390625vw)" }} />
                                <label style={{ fontSize: "calc(6px + 0.390625vw)", textAlign: "left" }} htmlFor="female">Female</label>
                                <Input type="radio" name="gender" id="female" fun={updateAdminChangeHandler} placeholder="female" defaultValue={user.gender} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", fontSize: "calc(8px + 0.390625vw)" }} />
                            </div>

                            <div style={{ width: "90%", maxHeight: "1.5rem", display: "flex", marginTop: "8px", gap: "20px", border: "2px solid rgb(243, 238, 238)", justifyContent: "space-between", padding: "0 3px", alignItems: "center" }}>
                                <label style={{ fontSize: "calc(6px + 0.390625vw)", textAlign: "left" }} htmlFor="age">Age</label>
                                <Input type="date" name="age" id="age" fun={updateAdminChangeHandler} placeholder="age" defaultValue={user.age} css={{ outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", maxHeight: "1.4rem" }} />
                            </div>

                            <div style={{ width: "90%", display: "flex", marginTop: "8px", maxHeight: "1.5rem", gap: "20px", border: "2px solid rgb(243, 238, 238)", justifyContent: "space-between", padding: "0 3px", alignItems: "center" }}>
                                <label style={{ fontSize: "calc(6px + 0.390625vw)", textAlign: "left" }} htmlFor="age">Role</label>
                                <select onChange={updateAdminChangeHandler} defaultValue={user.role} name="role" id="" style={{ outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(6px + 0.390625vw)", maxHeight: "1.4rem" }}>
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                                {/* <Input type="date" name="role" id="role" fun={updateAdminChangeHandler} placeholder="age" defaultValue={user.age} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", maxHeight:"1.4rem" }} /> */}
                            </div>

                            <button onClick={updateUserHandler} style={{ width: "90%", marginTop: "8px", border: "none", fontWeight: "500", fontSize: "calc(10px + 0.390625vw)", padding: "2px 0" }}>Save</button>

                        </div>


                        <div className="row mt-2" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "2px 0" }}>
                            <img className="col col-5 p-0 pb-4" src={user.image.url} style={{ height: "100px", aspectRatio: "1/.7", objectFit: "contain" }} alt={user.image.url} />
                            <div className="address_bar col col-7 p-0" style={{ fontSize: "calc(7px + 0.390625vw)", display: "flex", flexWrap: "wrap", gap: "0", alignItems: "center", justifyContent: "flex-end", alignContent: "flex-end", color: "grey", textAlign: "right" }}>
                                <span className="m-0 p-0 mx-1">Join : </span>
                                <span style={{ textAlign: "end" }}> {new Date(user.createdAt).toLocaleString().split(",")[0]} </span>
                                <br />
                                <span className="" style={{ textAlign: "end" }}>
                                    {new Date(user.createdAt).toLocaleString().split(",")[1]}
                                </span>

                            </div>
                        </div>

                        <div className="profile_title row mt-2" style={{ width: "100%", display: "flex", justifyContent: "space-between", padding: "2px 0" }}>

                            <div className="title col col-5" style={{ whiteSpace: "nowrap", lineHeight: "100%", padding: "0", textAlign: "left", fontSize: "calc(9px + 0.390625vw)", fontWeight: "500" }}>{user.name}</div>
                            <div className="address_bar col col-6 p-0" style={{ fontSize: "calc(8px + 0.390625vw)", color: "grey", textAlign: "right" }}>
                                <span> Role : </span> {user.role}
                            </div>

                        </div>

                        <div className="row mt-2" style={{ width: "100%", display: "flex", justifyContent: "space-between", padding: "2px 0" }}>
                            <div className="col col-7" style={{ fontSize: "calc(5px + 0.390625vw)", whiteSpace: "nowrap", textAlign: "left", color: "var(--header-black)", padding: "0", borderBottom: "1px solid grey" }}> <span className="text-danger">Age : </span> {user.age}</div>
                            <div className="col col-5 p-0" style={{ fontSize: "calc(5px + 0.390625vw)", textAlign: "left", whiteSpace: "nowrap", color: "var(--header-black)", borderBottom: "1px solid grey" }}> <span className="text-danger">Gender : </span> <span className="text-muted">{user.gender} </span> </div>
                        </div>

                        <div className="row mt-2" style={{ width: "100%", display: "flex", justifyContent: "space-between", padding: "2px 0" }}>
                            <div className="col col-12" style={{ fontSize: "calc(5px + 0.390625vw)", whiteSpace: "nowrap", textAlign: "left", color: "var(--header-black)", padding: "0", borderBottom: "1px solid grey", display: "flex", justifyContent: "space-between" }}> <span className="text-danger">Email : </span> <span className="text-muted">{user.email} </span></div>
                        </div>

                        <div className="row mt-2" style={{ width: "100%", display: "flex", justifyContent: "space-between", padding: "2px 0" }}>
                            <div className="col col-12" style={{ fontSize: "calc(5px + 0.390625vw)", whiteSpace: "nowrap", textAlign: "left", color: "var(--header-black)", padding: "0", borderBottom: "1px solid grey", display: "flex", justifyContent: "space-between" }}> <span className="text-danger">Phone : </span> <span className="text-muted">{user.number}</span></div>
                        </div>

                        <div className="row mt-2" style={{ width: "100%", display: "flex", justifyContent: "space-between", padding: "2px 0" }}>
                            <div className="col col-12" style={{ fontSize: "calc(5px + 0.390625vw)", whiteSpace: "nowrap", textAlign: "left", color: "var(--header-black)", padding: "0", borderBottom: "1px solid grey", display: "flex", justifyContent: "space-between" }}> <span className="text-danger">Address : </span> <span className="text-muted">{user.address}</span></div>
                        </div>

                        <div className="row mt-2" style={{ width: "100%", display: "flex", justifyContent: "space-between", padding: "2px 0" }}>
                            <div className="col col-12" style={{ fontSize: "calc(5px + 0.390625vw)", whiteSpace: "nowrap", textAlign: "left", color: "var(--header-black)", padding: "0", borderBottom: "1px solid grey", display: "flex", justifyContent: "space-between" }}> <span className="text-danger">ID : </span> <span className="text-muted">{user._id}</span></div>
                        </div>


                        <button onClick={
                            () => {
                                if (document.getElementById("user_profile_edit").style.display === "none") {
                                    document.getElementById("user_profile_edit").style.display = "flex";
                                }
                            }
                        } className="btn btn-danger mt-3 rounded-5 px-4 py-1 fs-6" >Edit</button>

                    </div>
                    {/* column second : end */}


                </div>
            </div>
        </>
    )
}

export default UsersList