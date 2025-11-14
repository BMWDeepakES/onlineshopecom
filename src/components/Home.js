import React from "react";
import { ToastContainer, toast } from 'react-toastify';

function Home() {
     const notify = () => toast("Loading your think to ride!");
    return (
 <div>
      {/* Your Jumbotron-like component */}
      <div className="p-3 mb-1 bg-light rounded-3">
        <div className="container-fluid py-1">
          <h3 className="display-5 fw-bold">Welcome Deepak Salve our Portal!</h3>
          <p className="col-md-8 fs-4">Master Management Portal design & developed for easy to manage your ecommer website & application.</p>
          <button className="btn btn-primary btn-lg" type="button" onClick={notify}>Let Start</button>
        </div>
      </div>
      <ToastContainer />
    </div>
    );
}

export default Home;