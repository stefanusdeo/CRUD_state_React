import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      act: 0,
      index: '',
      datas: []
    }
  }

  componentDidMount() {
    this.refs.nama.focus()
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("test");

    let datas = this.state.datas;
    let nama = this.refs.nama.value;
    let alamat = this.refs.alamat.value;
    let phone = this.refs.phone.value;

    if (this.state.act === 0) {
      let data = {
        nama, alamat, phone
      }

      datas.push(data);
    } else {
      let index = this.state.index;
      datas[index].nama = nama;
      datas[index].alamat = alamat;
      datas[index].phone = phone;
    }


    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.forms.reset();
    this.refs.nama.focus();

  }

  onRemove = (i) => {
    let data = this.state.datas;
    data.splice(i, 1);
    this.setState({
      datas: data
    });

    this.refs.nama.focus()
  }

  onEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.nama.value = data.nama;
    this.refs.alamat.value = data.alamat;
    this.refs.phone.value = data.phone;

    this.setState({
      act: 1,
      index: i
    })
  }

  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <div>
          <h1>Test in PHI</h1>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <div className="card" style={{ width: "70%" }}>
            <h5 className="card-title mt-3">Input Data</h5>
            <form ref="forms">
              <div className="d-flex justify-content-center mt-3 mr-2 ml-2">
                <input type="text" className="form-control" style={{ width: "600px" }} placeholder="Nama" ref="nama" required />
              </div>
              <div className="d-flex justify-content-center mt-2 mr-2 ml-2">
                <input type="text" className="form-control" style={{ width: "600px" }} placeholder="Alamat" ref="alamat" required />
              </div>
              <div className="d-flex justify-content-center mt-2 mr-2 ml-2">
                <input type="number" className="form-control" style={{ width: "600px" }} placeholder="No Phone" ref="phone" />
              </div>
              <div className="d-flex justify-content-end mt-2 mb-3" style={{ marginRight: "20%" }}>
                <button onClick={(e) => this.onSubmit(e)} className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-3 d-flex justify-content-center">
          <table className="table" style={{ width: "70%" }}>
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Nama</th>
                <th scope="col">Alamat</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, i) =>
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{data.nama}</td>
                  <td>{data.alamat}</td>
                  <td>{data.phone}</td>
                  <td><button onClick={() => this.onEdit(i)} className="btn btn-success mr-1">Edit</button>
                    <button onClick={(e) => this.onRemove(e)} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div >
    );
  }
}

export default App;
