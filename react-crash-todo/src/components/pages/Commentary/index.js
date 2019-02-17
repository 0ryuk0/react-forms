import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class CommentaryForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      tradeId: null,
      updateExternalComments: null,
      statusSelected: '',
      tradeSettlementSelected: -1,
    }
  }

  render() {

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <form id="csw-commentary" onSubmit={this.handleSubmit} noValidate>
            <label id="lblTradeId" name="lblTradeId" class="lbl-trade-id">
              <span>Trade ID :</span> <span>{this.state.tradeId}</span>
            </label>
            <div className="external-comments-main">
              <label id="lblUpdateExternalComments" htmlFor="updateExternalComments">
                <input id="updateExternalComments" name="updateExternalComments" type="checkbox" onChange={ this.handleChange }/> 
                <span>Update Client Facing Status</span>
              </label>
              <div className="row external-comment-status">
                <select id="ddExternalStatus" name="ddExternalStatus" value={this.state.statusSelected} onChange={this.handleChange} className="col-xs-6">
                  <option value=" ">Select Status...</option>
                  <option>Status 1</option>
                </select>
                <input id="txtExternalStatusSearch" name="txtExternalStatusSearch" className="col-xs-6" type="search" onChange={this.handleChange}></input>
              </div>
              <select id="ddExternalSettlementStatus" name="ddExternalSettlementStatus" value={this.state.tradeSettlementSelected} onChange={this.handleChange}>
                <option value="-1">Select Settlement Status</option>
                <option value="Please enter contact no and email address">Please enter contact no and email address</option>
              </select>
              <div id="externalCommentGrid" name="externalCommentGrid" className="external-history-main csw-grid"> 
              <p>Client Facing Status History</p>
              <Container>
                <Row className="header">
                  <Col xs={3}>
                    Comments
                  </Col>
                  <Col>
                    SID
                  </Col>
                  <Col>
                    Assigned To
                  </Col>
                  <Col>
                    Update Status
                  </Col>
                  <Col>
                    Updated By
                  </Col>
                </Row>
                <Row className="grid-row">
                  <Col xs={3}>snjdfke
                  </Col>
                  <Col>nsdbjkf
                  </Col>
                  <Col>sjndih
                  </Col>
                  <Col>jsdhfwe
                  </Col>
                  <Col>smdbkfe
                  </Col>
                </Row>
                <Row className="grid-row">
                  <Col xs={3}>djfhed
                  </Col>
                  <Col>djncfkde
                  </Col>
                  <Col>jsdfbked
                  </Col>
                  <Col>sdjfhjed
                  </Col>
                  <Col>djkfoe
                  </Col>
                </Row>
              </Container>
            </div>
            </div>
            <div className="internal-comments-main csw-grid">
              <label htmlFor="updateInternalComments">
                <input id="updateInternalComments" name="updateInternalComments" type="checkbox" onChange={ this.handleChange }/> 
                <span class="update-internal-comments-span">Update Internal Comments</span>
              </label>
              <textarea id="interComment" name="internalComment" className="internal-comment-textArea" onChange={this.handleChange}></textarea>
              <div id="internalCommentHistoryGrid" name="internalCommentHistoryGrid" className="external-history-main"> 
              <p>Internal Comments History</p>
              <Container>
                <Row className="header">
                  <Col xs={3}>
                    Comments
                  </Col>
                  <Col>
                    SID
                  </Col>
                  <Col>
                    Assigned To
                  </Col>
                  <Col>
                    Update Status
                  </Col>
                  <Col>
                    Updated By
                  </Col>
                </Row>
                <Row className="grid-row">
                  <Col xs={3}>dkvewd
                  </Col>
                  <Col>dfbdefc
                  </Col>
                  <Col>dhvschdjkc
                  </Col>
                  <Col>jsdc
                  </Col>
                  <Col>ndsbhcjhdc
                  </Col>
                </Row>
                <Row className="grid-row">
                  <Col xs={3}>ndsfkdjwf
                  </Col>
                  <Col>nsdbckjdc
                  </Col>
                  <Col>sbdjw
                  </Col>
                  <Col>jdbjkw
                  </Col>
                  <Col>djcnokdw
                  </Col>
                </Row>
              </Container>
            </div>
            </div>
            <div className="reassign-main">
              <div className="col-xs-6">
                <label htmlFor="reAssign">
                  <input id="reAssign" name="reAssign" type="checkbox" onChange={ this.handleChange }/> 
                    <span className="update-internal-comments-span">Re-assign</span>
                </label>
              </div>
              <div className="col-xs-6">
                <span style={{fontSize: '12px'}}>Assign To: </span>
                <select id="ddAssignTo" name="ddAssignTo"  value={this.state.statusSelected} onChange={this.handleChange} className="col-xs-6">
                  <option value=" ">Select Status...</option>
                  <option>Status 1</option>
                </select>
              </div>
            </div>
            <div className="commentary-btn-main">
            <button id="btnCancel" name="btnCancel" onClick={this.handleCance}>Cancel</button>
            <button id="btnSubmit" type="submit" name="btnSubmit">Submit</button>
          </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CommentaryForm;
