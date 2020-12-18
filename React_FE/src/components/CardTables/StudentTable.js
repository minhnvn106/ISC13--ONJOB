// import React, { Component } from 'react';
// import PropTypes from "prop-types";

// // components

// // import TableDropdown from "components/Dropdowns/TableDropdown.js";


// export default function StudentTable({ color }) {
//   // state = { }
//   return (
//     <>
//         {/* Colors */}
//       <div
//         className={
//           "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
//           (color === "light" ? "bg-white" : "bg-blue-900 text-white")
//         }
//       >
//         <div className="rounded-t mb-0 px-4 py-3 border-0">
//           <div className="flex flex-wrap items-center">
//             <div className="relative w-full px-4 max-w-full flex-grow flex-1">
//               <h3
//                 className={
//                   "font-semibold text-lg " +
//                   (color === "light" ? "text-gray-800" : "text-white")
//                 }
//               >
//                 {/* Table Title */}
//                 DANH SÁCH GIẢNG VIÊN
//               </h3>
//             </div>
            
//             <div className="col-auto">
//               <button
//                     type="button"
//                     className="btn btn-primary"
//                     data-toggle="modal"
//                     data-target="#editModal"
//                   >
//                 <i className="fas fa-plus"></i> Thêm
//               </button>

//             </div>
//           </div>
//         </div>
//         <div className="block w-full overflow-x-auto">
          
//           <table className="items-center w-full bg-transparent border-collapse">
//             <thead>
//               <tr>
//                 <th
//                   className={
//                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
//                     (color === "light"
//                       ? "bg-gray-100 text-gray-600 border-gray-200"
//                       : "bg-blue-800 text-blue-300 border-blue-700")
//                   }
//                 >
//                   Họ Tên
//                 </th>
//                 <th
//                   className={
//                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
//                     (color === "light"
//                       ? "bg-gray-100 text-gray-600 border-gray-200"
//                       : "bg-blue-800 text-blue-300 border-blue-700")
//                   }
//                 >
//                   Mã số
//                 </th>
                
//                 <th
//                   className={
//                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
//                     (color === "light"
//                       ? "bg-gray-100 text-gray-600 border-gray-200"
//                       : "bg-blue-800 text-blue-300 border-blue-700")
//                   }
//                 >
//                   Ngày sinh
//                 </th>
                
//                 <th
//                   className={
//                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
//                     (color === "light"
//                       ? "bg-gray-100 text-gray-600 border-gray-200"
//                       : "bg-blue-800 text-blue-300 border-blue-700")
//                   }
//                 >
//                   Email
//                 </th>

//                 <th
//                   className={
//                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
//                     (color === "light"
//                       ? "bg-gray-100 text-gray-600 border-gray-200"
//                       : "bg-blue-800 text-blue-300 border-blue-700")
//                   }
//                 >
//                   Điện thoại
//                 </th>

//                 <th
//                   className={
//                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
//                     (color === "light"
//                       ? "bg-gray-100 text-gray-600 border-gray-200"
//                       : "bg-blue-800 text-blue-300 border-blue-700")
//                   }
//                 >
//                   Chứng chỉ
//                 </th>

//                 <th
//                   className={
//                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
//                     (color === "light"
//                       ? "bg-gray-100 text-gray-600 border-gray-200"
//                       : "bg-blue-800 text-blue-300 border-blue-700")
//                   }
//                 >
//                   Tình trạng
//                 </th>                

//                 <th
//                   className={
//                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
//                     (color === "light"
//                       ? "bg-gray-100 text-gray-600 border-gray-200"
//                       : "bg-blue-800 text-blue-300 border-blue-700")
//                   }
//                 ></th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
//                   <img
//                     src={require("assets/img/team-1-800x800.jpg")}
//                     className="h-12 w-12 bg-white rounded-full border"
//                     alt="..."
//                   ></img>{" "}
//                   <span
//                     className={
//                       "ml-3 font-bold " +
//                       +(color === "light" ? "text-gray-700" : "text-white")
//                     }
//                   >
//                     Nguyễn Văn A
//                   </span>
//                 </th>
//                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
//                   AN022
//                 </td>
//                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
//                   25/6/1966
//                 </td>

//                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
//                   nva@gmail.com
//                 </td>
                
//                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
//                   098362879
//                 </td>

//                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
//                   {/* <i className="fas fa-circle text-orange-500 mr-2"></i>  */}
//                   Chứng chỉ TOEICS
//                 </td>
                
//                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
//                   <i className="fas fa-circle text-teal-500 mr-2"></i>
//                   Còn làm
//                 </td>

//                 {/* CHỨC NĂNG */}
//                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right">
//                   <a href="/">
//                     <i className="fas fa-edit text-primary"></i>
//                   </a>
//                   <a href="/">
//                     <i className="fas fa-trash-alt text-danger"></i>
//                   </a>
//                   {/* <TableDropdown /> */}
//                 </td>
//               </tr>
//               <tr>
//               <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
//                   <img
//                     src={require("assets/img/team-2-800x800.jpg")}
//                     className="h-12 w-12 bg-white rounded-full border"
//                     alt="..."
//                   ></img>{" "}
//                   <span
//                     className={
//                       "ml-3 font-bold " +
//                       +(color === "light" ? "text-gray-700" : "text-white")
//                     }
//                   >
//                     Đỗ Văn B
//                   </span>
//                 </th>
//                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
//                   AV101
//                 </td>
//                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
//                   20/3/1969
//                 </td>

//                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
//                   dvb@gmail.com
//                 </td>
                
//                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
//                   098762118
//                 </td>

//                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
//                   {/* <i className="fas fa-circle text-orange-500 mr-2"></i>  */}
//                   Chứng chỉ IELTS
//                 </td>
                
//                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
//                   {/* <i className="fas fa-circle text-orange-500 mr-2"></i>  */}
//                   <i className="fas fa-circle text-red-500 mr-2"></i>
//                   Hết làm
//                 </td>

//                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right">
//                   <a href="/">
//                     <i className="fas fa-edit text-primary"></i>
//                   </a>
//                   <a href="/">
//                     <i className="fas fa-trash-alt text-danger"></i>
//                   </a>
//                 </td>
//               </tr>
//               </tbody>
//           </table>
//           <div className="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div className="modal-dialog">
//                 <div className="modal-content">
//                   <div className="modal-header">
//                     <h5 className="modal-title" id="exampleModalLabel">Giảng viên mới</h5>
//                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">&times;</span>
//                     </button>
//                   </div>
//                   <div className="modal-body">
//                       <form>
//                           <div className="form-group row ">
//                             <label for="txtCode" className="col-sm-3 col-form-label ">MãID</label>
//                             <div className="col-sm-9 ">
//                               <input type="text" className="form-control" id="txtCode"/>
//                             </div>
//                           </div>

//                           <div className="form-group row ">
//                             <label for="txtName" className="col-sm-3 col-form-label ">Họ tên</label>
//                             <div className="col-sm-9 ">
//                               <input type="text" className="form-control" id="txtName"/>
//                             </div>
//                           </div>
                          
//                           <div className="form-group row ">
//                             <label for="txtName" className="col-sm-3 col-form-label ">Giới tính</label>
//                             <div className="col-sm-9 ">
//                               <div class="form-check">
//                                   <div class="row">
//                                     <div class="col-sm-6">
//                                         <input class="form-check-input" type="radio" name="Gender" id="rdGender" value="1" />
//                                         <label class="form-check-label" for="Radios1">
//                                           Nam
//                                         </label>
//                                       </div>
//                                       <div class="col-sm-6">
//                                         <input class="form-check-input" type="radio" name="Gender" id="rdGender" value="2" />
//                                         <label class="form-check-label" for="Radios1">
//                                           Nữ
//                                         </label>
//                                       </div>
//                                   </div> 
//                               </div>
//                             </div>
//                           </div>

//                           <div className="form-group row ">
//                             <label for="txtBirthday" className="col-sm-3 col-form-label ">Ngày sinh</label>
//                             <div className="col-sm-9 ">
//                               <input type="text" className="form-control" id="txtBirthday"/> (dd/mm/yy)
//                             </div>
//                           </div>  

//                           <div className="form-group row ">
//                             <label for="txtEmail" className="col-sm-3 col-form-label ">Email</label>
//                             <div className="col-sm-9 ">
//                               <input type="text" className="form-control" id="txtEmail"/>
//                             </div>
//                           </div>

//                           <div className="form-group row ">
//                             <label for="txtPhone" className="col-sm-3 col-form-label ">Điện thoại</label>
//                             <div className="col-sm-9 ">
//                               <input type="text" className="form-control" id="txtPhone"/>
//                             </div>
//                           </div>
                          
//                           <div className="form-group row ">
//                             <label for="txtName" className="col-sm-3 col-form-label ">Tình trạng</label>
//                             <div className="col-sm-9 ">
//                               <div class="form-check">
//                                   <div class="row">
//                                     <div class="col-sm-6">
//                                         <input class="form-check-input" type="radio" name="Status" id="rdStatus" value="1" />
//                                         <label class="form-check-label" for="Radios2">
//                                           Đang làm
//                                         </label>
//                                       </div>
//                                       <div class="col-sm-6">
//                                         <input class="form-check-input" type="radio" name="Status" id="rdStatus" value="2" />
//                                         <label class="form-check-label" for="Radios2">
//                                           Không còn làm
//                                         </label>
//                                       </div>
//                                     </div> 
//                                   </div>
//                                 </div>
//                               </div>

//                           <div className="form-group row ">
//                             <label for="Image" className="col-sm-3 col-form-label ">Ảnh</label>
//                             <div className="col-sm-9 ">
//                               <button class="button">Tải lên</button>
//                             </div>
//                           </div>
//                       </form>
//                   </div>
//                   <div className="modal-footer">
//                   <button type="button" className="btn btn-secondary" data-dismiss="modal">Thoát</button>
//                   <button type="button" className="btn btn-primary">Lưu</button>
//                   </div>
//                 </div>
//               </div>
//           </div>
//           </div>

//       </div>
//     </>
//   );
// }

// StudentTable.defaultProps = {
//   color: "light",
// };

// StudentTable.propTypes = {
//   color: PropTypes.oneOf(["light", "dark"]),
// };

import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from "prop-types";
import instructorService from './../../assets/services/instructorService';
import { Button, Modal } from 'react-bootstrap';

import { useFormik } from 'formik';
import * as Yup from "yup";
// import Input from './../controls/input';

import Input from './../../assets/services/input';
export default function InstructorTable({ color }) {
  const [instructors, setInstructors] = useState([]);

  const [instructorId, setInstructorId] = useState(0);

    /* ************************* */
  const loadData = () => {
        instructorService.getAll().then(res => {
            setInstructors(res);
        })
    }
    //B9 Remove Thay componentDidMount thành useEffect mngu
    useEffect(() => {
        
        loadData();
       
    }, [instructors]); //[] Bắt buộc phải có nếu không nó sẽ load lại nhiều lần
    //Set instructors vào để khi thay đổi update or delete thì nó sẽ set lại giá trị của instructors để nó gọi function loadData()


    const [modalShow, setModalShow] = useState(false);

    const handleModalClose = () => setModalShow(false);

    //Hàm xử lý để biết xem là thêm mới hay update
    const handleModalShow = (e, dataId) => {
        if (e) e.preventDefault();

        setInstructorId(dataId);
        if (dataId > 0) {//edit
            instructorService.get(dataId).then(res => {
                formik.setValues(res);
                setModalShow(true);
            })
        } else {//add
            formik.resetForm();
            setModalShow(true);
        }
    }
    /* ************************* */
    // Phần III: Formik và Function Xử lý handleFormSubmit 
    const formik = useFormik({
        initialValues: {
            insCode: "",
            insName: "",
            insGender: "",
            insBirthday: "",
            insEmail: "",
            insPhone: "",
            insImg: "",
            insCertification: "",
            insWorkStatus: "",
            insNote: ""
            //Nếu có thêm nhiều trường khác
        },
        validationSchema: Yup.object({
            insCode: Yup.string().required("Required").min(4, "Must be 4 characters or more"),
            insName: Yup.string().required("Required"),
            insEmail: Yup.string().email(),
        }),
        onSubmit: (values) => {
            // console.log(values);
            //Tách ra một hàm riêng để xử lý form
            handleFormSubmit(values);
        }
    });

    //Function xử lý khi người dùng nhập dữ liệu và thêm dữ liệu thành công 
    const handleFormSubmit = (data) => {

        if (instructorId === 0) {//add
            instructorService.add(data).then((res) => {
                loadData();
                handleModalClose();
            })
        } else {//update
            instructorService.update(instructorId, data).then(res => {
                loadData()
                handleModalClose();
                // if(res.errorCode===0){

                // }else{

                // }
            })
        }
    }


    //Delete 1 dòng dữ liệu
    const deleteRow = (e, dataId) => {
        e.preventDefault();
        instructorService.delete(dataId).then(res => {
            if (res.errorCode === 0) {
                loadData();
                console.log(res);

            } else {

            }
        });
        console.log(dataId);
    }
  
  return (
    <Fragment>
        {/* Colors */}
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-gray-800" : "text-white")
                }
              >
                {/* Table Title */}
                DANH SÁCH GIẢNG VIÊN
              </h3>
            </div>
            
            <div className="col-auto">
                <button 
                type="button" 
                className="btn btn-primary" 
                data-toggle="modal" data-target="#editModal" 
                variant="primary" onClick={() => 
                handleModalShow(null, 0)}>
                  <i className="fas fa-plus"></i> 
                  Thêm
                </button>
                <Modal show={modalShow} onHide={handleModalClose} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Instructor</Modal.Title>
                    </Modal.Header>
                    <form autoComplete="on" onSubmit={formik.handleSubmit}>
                        <Modal.Body>
                        {/* <form>
                          <div className="form-group row ">
                            <label for="txtCode" className="col-sm-3 col-form-label ">Mã số</label>
                            <div className="col-sm-9 ">
                              <input id="txtCode" type="text" className="inputClass form-control" maxLength="50"
                                frmField={formik.getFieldProps("insCode")}
                                err={formik.touched.insCode && formik.errors.insCode}
                                errMessage={formik.errors.insCode}
                              />
                            </div>
                          </div>

                          <div className="form-group row ">
                            <label for="txtName" className="col-sm-3 col-form-label ">Họ tên</label>
                            <div className="col-sm-9 ">
                              <input id="txtName" type="text" className="inputClass form-control" maxLength="50"
                                frmField={formik.getFieldProps("insName")}
                                err={formik.touched.insCode && formik.errors.insCode}
                                errMessage={formik.errors.insCode}
                              />
                            </div>
                          </div>
                          
                          <div className="form-group row ">
                            <label for="txtName" className="col-sm-3 col-form-label ">Giới tính</label>
                            <div className="col-sm-9 ">
                              <div class="form-check">
                                <div class="row">
                                  <div class="col-sm-6">
                                    <input class="form-check-input" type="radio" name="Gender" id="rdGender" value="1" 
                                          frmField={formik.getFieldProps("insGender")}
                                          err={formik.touched.insGender && formik.errors.insGender}
                                          errMessage={formik.errors.insGender}
                                    />
                                    <label class="form-check-label" for="Radios1">
                                      Nam
                                    </label>
                                  </div>
                                  <div class="col-sm-6">
                                    <input class="form-check-input" type="radio" name="Gender" id="rdGender" value="0" 
                                          frmField={formik.getFieldProps("insGender")}
                                          err={formik.touched.insGender && formik.errors.insGender}
                                          errMessage={formik.errors.insGender}
                                    />
                                    <label class="form-check-label" for="Radios1">
                                      Nữ
                                    </label>
                                  </div>
                                </div> 
                              </div>
                            </div>
                          </div>

                          <div className="form-group row ">
                            <label for="txtBirthday" className="col-sm-3 col-form-label ">Ngày sinh</label>
                            <div className="col-sm-9 ">
                              <input type="date" className="inputClass form-control" maxLength="100"
                                frmField={formik.getFieldProps("insBirthday")}
                                err={formik.touched.insBirthday && formik.errors.insBirthday}
                                errMessage={formik.errors.insBirthday}
                            /> (dd/mm/yy)
                            </div>
                          </div>  

                          <div className="form-group row ">
                            <label for="txtEmail" className="col-sm-3 col-form-label ">Email</label>
                            <div className="col-sm-9 ">
                              <input type="email" className="inputClass form-control"  maxLength="100"
                                frmField={formik.getFieldProps("insEmail")}
                                err={formik.touched.insEmail && formik.errors.insEmail}
                                errMessage={formik.errors.insEmail}
                            />
                            </div>
                          </div>

                          <div className="form-group row ">
                            <label for="txtPhone" className="col-sm-3 col-form-label ">Điện thoại</label>
                            <div className="col-sm-9 ">
                              <input type="text" className="inputClass form-control" maxLength="100"
                                frmField={formik.getFieldProps("insPhone")}
                                err={formik.touched.insPhone && formik.errors.insPhone}
                                errMessage={formik.errors.insPhone}
                            />
                            </div>
                          </div>

                          <div className="form-group row ">
                            <label for="txtPhone" className="col-sm-3 col-form-label ">Bằng cấp</label>
                            <div className="col-sm-9 ">
                              <input type="text" className="inputClass form-control" maxLength="100"
                                frmField={formik.getFieldProps("insCertification")}
                                err={formik.touched.insCertification && formik.errors.insCertification}
                                errMessage={formik.errors.insCertification}
                            />
                            </div>
                          </div>
                          
                          <div className="form-group row ">
                            <label for="txtName" className="col-sm-3 col-form-label ">Tình trạng</label>
                            <div className="col-sm-9 ">
                              <div class="form-check">
                                <div class="row">
                                  <div class="col-sm-4">
                                    <input class="form-check-input" type="radio" name="Status" id="rdStatus" value="1" 
                                      frmField={formik.getFieldProps("insWorkStatus")}
                                      err={formik.touched.insWorkStatus && formik.errors.insWorkStatus}
                                      errMessage={formik.errors.insWorkStatus}
                                    />
                                    <label class="form-check-label" for="Radios2">
                                      Đang làm
                                    </label>
                                  </div>
                                  <div class="col-sm-4">
                                    <input class="form-check-input" type="radio" name="Status" id="rdStatus" value="2" 
                                      frmField={formik.getFieldProps("insWorkStatus")}
                                      err={formik.touched.insWorkStatus && formik.errors.insWorkStatus}
                                      errMessage={formik.errors.insWorkStatus}
                                    />
                                    <label class="form-check-label" for="Radios2">
                                      Chưa làm
                                    </label>
                                  </div>
                                  <div class="col-sm-4">
                                    <input class="form-check-input" type="radio" name="Status" id="rdStatus" value="3" 
                                      frmField={formik.getFieldProps("insWorkStatus")}
                                      err={formik.touched.insWorkStatus && formik.errors.insWorkStatus}
                                      errMessage={formik.errors.insWorkStatus}
                                    />
                                    <label class="form-check-label" for="Radios2">
                                      Nghỉ hưu
                                    </label>
                                  </div>
                                </div> 
                              </div>
                            </div>
                          </div>

                          <div className="form-group row ">
                            <label for="Image" className="col-sm-3 col-form-label ">Ảnh</label>
                            <div className="col-sm-9 ">
                            <input id="txtInsImg" type="text" className="inputClass form-control" label="Image" labelSize="4" maxLength="100"
                                frmField={formik.getFieldProps("insImg")}
                                err={formik.touched.insImg && formik.errors.insImg}
                                errMessage={formik.errors.insImg}/>  
                              {/* <button class="button">Tải lên</button> */}
                            {/* </div>
                          </div>
                          <div className="form-group row ">
                            <label for="txtPhone" className="col-sm-3 col-form-label ">Ghi chú</label>
                            <div className="col-sm-9 ">
                              <input type="text" className="inputClass form-control" maxLength="100"
                                frmField={formik.getFieldProps("insNote")}
                                err={formik.touched.insNote && formik.errors.insNote}
                                errMessage={formik.errors.insNote}
                            />
                            </div>
                          </div>
                        </form> */} 
                            
                            
                            <Input id="txtInsGender" type="text" className="inputClass form-control" label="Gender" labelSize="4" maxLength="100"
                                frmField={formik.getFieldProps("insGender")}
                                err={formik.touched.insGender && formik.errors.insGender}
                                errMessage={formik.errors.insGender}
                            />
                            
                            <Input id="txtInsBirthday" type="date" className="inputClass form-control" label="BirthDay" labelSize="4" maxLength="100"
                                frmField={formik.getFieldProps("insBirthday")}
                                err={formik.touched.insBirthday && formik.errors.insBirthday}
                                errMessage={formik.errors.insBirthday}
                            />
                            
                            <Input id="txtInsEmail" type="email" className="inputClass form-control" label="Email" labelSize="4" maxLength="100"
                                frmField={formik.getFieldProps("insEmail")}
                                err={formik.touched.insEmail && formik.errors.insEmail}
                                errMessage={formik.errors.insEmail}
                            />
                            
                            <Input id="txtInsPhone" type="text" className="inputClass form-control" label="Phone" labelSize="4" maxLength="100"
                                frmField={formik.getFieldProps("insPhone")}
                                err={formik.touched.insPhone && formik.errors.insPhone}
                                errMessage={formik.errors.insPhone}
                            />
                            
                            <Input id="txtInsImg" type="text" className="inputClass form-control" label="Image" labelSize="4" maxLength="100"
                                frmField={formik.getFieldProps("insImg")}
                                err={formik.touched.insImg && formik.errors.insImg}
                                errMessage={formik.errors.insImg}
                            />
                            
                            <Input id="txtInsCertification" type="text" className="inputClass form-control" label="Certification" labelSize="4" maxLength="100"
                                frmField={formik.getFieldProps("insCertification")}
                                err={formik.touched.insCertification && formik.errors.insCertification}
                                errMessage={formik.errors.insCertification}
                            />
                            
                            <Input id="txtInsWorkStatus" type="text" className="inputClass form-control" label="Work Status" labelSize="4" maxLength="100"
                                frmField={formik.getFieldProps("insWorkStatus")}
                                err={formik.touched.insWorkStatus && formik.errors.insWorkStatus}
                                errMessage={formik.errors.insWorkStatus}
                            />
                            
                            <Input id="txtInsNote" type="text" className="inputClass form-control" label="Note" labelSize="4" maxLength="100"
                                frmField={formik.getFieldProps("insNote")}
                                err={formik.touched.insNote && formik.errors.insNote}
                                errMessage={formik.errors.insNote}
                            />

                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleModalClose}>
                                Close
                            </Button>
                            {/*  */}
                            <Button variant="primary" type="submit" onClick={handleModalClose} disabled={(!formik.isValid && formik.dirty)}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
              </div>
          </div>
        </div>
        
        <div className="block w-full overflow-x-auto">
          
          
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Họ Tên
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Mã số
                </th>
                
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Ngày sinh
                </th>
                
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Email
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Điện thoại
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Chứng chỉ
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Tình trạng
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Giới tính
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Ghi chú
                </th>                

                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
            {
              instructors.map((instructor, idx) => {
                return (
                <tr key={instructor.insId}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                  <img 
                    src={require("assets/img/team-1-800x800.jpg")}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span>
                    {instructor.insImg}{instructor.insName}
                  </span>
                    {idx + 1}</th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    {instructor.insCode}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    {instructor.insBirthday}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    {instructor.insEmail}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    {instructor.insPhone}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    {instructor.insCertification}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    {instructor.insWorkStatus}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    {instructor.insGender}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    {instructor.insNote}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right">
                      <a href="/#" onClick={(e) => handleModalShow(e, instructor.insId)}>
                        <i className="fas fa-edit text-primary"></i>
                      </a>
                      <a href="/#" onClick={(e) => deleteRow(e, instructor.insId)}>
                        <i className="fas fa-trash-alt text-danger"></i>
                      </a>
                      {/* <TableDropdown /> */}
                    </td>
                  </tr>
                  )
              })}             
          </tbody>
        </table>
                   
        </div>
      </div>
      
    </Fragment>
  );
}

StudentTable.defaultProps = {
  color: "light",
};

StudentTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};