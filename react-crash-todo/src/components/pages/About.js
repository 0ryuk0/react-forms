import React from 'react'
import DynamicForm from './DynamicForm';

class About extends React.Component {
  state = {
    formData: [
      {id:1, name:'a', age:20, qualification:'bca', rating:3},
      {id:2, name:'a', age:20, qualification:'bca', rating:3},
      {id:3, name:'a', age:20, qualification:'bca', rating:3}
    ]
  };

  handleSubmit = (data) =>{
    console.log(data);
  };

  render(){
    const model ={
      title: "Domestic Settlements",
      form: [
        [{
          field: "label",
          id: "dtcTradeId",
          name:"dtcTradeId",
          label: "Trade Id: ",
          value: "T4326528423",
          class:"cmt-trade-banner"
        }],
        [{
            field: "checkbox",
            id: "dtcUpdateExternalCommentChk",
            name: "dtcUpdateExternalCommentChk",
            label: "Update Client Facing Status",
            class:"cmt-chk-primary"
        }],
        [{
          field:"select",
          id: "dtcExternalStatusSelect",
          name: "dtcExternalStatusSelect",
          placeholder: "Select Status...",
          class:"cmt-select-primary",
          disabled: true,
          options: [
            {
              key: "1",
              value: "Status 1",
              settlementData: [
                {
                  key: "01",
                  value: "Settlement Data 101"
                },
                {
                  key: "02",
                  value: "Settlement Data 102",
                  childBlocks: [
                    {
                      field: "text",
                      id: "settlementContact",
                      name: "settlementContact",
                      placeholder: "contact no..",
                      class:"cmt-input-txt-primary",
                      mandatory: true
                    },
                    {
                      field: "text",
                      id: "settlementUserName",
                      name: "settlementUserName",
                      placeholder: "user name",
                      mandatory: true
                    }
                  ]
                }
              ]
            },
            {
              key: "2",
              value: "Status 2",
              settlementData: [
                {
                  key: "01",
                  value: "Settlement Data 201"
                },
                {
                  key: "02",
                  value: "Settlement Data 202"
                }
              ],
              class:"cmt-select-primary",
              width:50
            }
          ]
        },
        {
          field: "text",
          id: "dtcExternalStatusSearch",
          name: "dtcExternalStatusSearch",
          placeholder: "Search...",
          class:"cmt-input-txt-primary",
          disabled: true,
          width:50
        }],
        [{
          field:"select",
          id: "dtcExternalSettlementStatusSelect",
          name: "dtcExternalStatusSelect",
          placeholder: "Select Settlement Status...",
          options: [],
          class:"cmt-select-primary",
          disabled:true,
          mandatory: true
        }],
        [{
          field:"heading",
          id: "dtcExternalCommentHistoryHeading",
          name: "dtcExternalCommentHistoryHeading",
          label: "Client Facing Status History",
          class:"cmt-heading-primary"
        }],
        [{
          field:"grid",
          id: "dtcExternalCommentHistoryGrid",
          name: "dtcExternalCommentHistoryGrid",
          class:"cmt-grid-main",
          rowClass:"cmt-grid-row",
          header: {
            class: 'cmt-grid-header',
            columnDef: [
              {
                id: 1,
                label: 'Comments',
                width: 3,
              },
              {
                id: 2,
                label: 'SID'
              },
              {
                id:3,
                label: 'Assigned To'
              },
              {
                id:4,
                label: 'Updated Status'
              },
              {
                id:5,
                label: 'Updated By'
              }
            ]
          },
          rowData: [
            {
              id: '1',
              comment: 'Comment 1',
              sid: '1',
              assignedTo:'Some Name',
              updatedStatus: 'Some status',
              updatedBy: 'Some name'
            },
            {
              id: '2',
              comment: 'Comment 2',
              sid: '2',
              assignedTo:'Some Name',
              updatedStatus: 'Some status',
              updatedBy: 'Some name'
            }
          ]
        }],
        [{
          field: "checkbox",
          id: "dtcUpdateInternalCommentChk",
          name: "dtcUpdateInternalCommentChk",
          label: "Update Internal Comments",
          class:"cmt-chk-primary"
        }],
        [{
          field: "textArea",
          id: "dtcInternalCommentTxt",
          name: "dtcInternalCommentTxt",
          placeholder: "Type in your comment...",
          class:"cmt-input-txtarea-primary",
          disabled: true
        }],
        [{
          field:"heading",
          id: "dtcInternalCommentHistoryHeading",
          name: "dtcInternalCommentHistoryHeading",
          label: "Internal Comments History",
          class:"cmt-heading-primary"
        }],
        [{
          field:"grid",
          id: "dtcInternalCommentHistoryGrid",
          name: "dtcInternalCommentHistoryGrid",
          class:"cmt-grid-main",
          rowClass:"cmt-grid-row",
          header: {
            class: 'cmt-grid-header',
            columnDef: [
              {
                id:1,
                label: 'Comments'
              },
              {
                id:2,
                label: 'SID'
              },
              {
                id:3,
                label: 'Assigned To'
              },
              {
                id:4,
                label: 'Updated Status'
              },
              {
                id:5,
                label: 'Updated By'
              }
            ]
          },
          rowData: [
            {
              id: '1',
              comment: 'Comment 1',
              sid: '1',
              assignedTo:'Some Name',
              updatedStatus: 'Some status',
              updatedBy: 'Some name'
            },
            {
              id: '2',
              comment: 'Comment 2',
              sid: '2',
              assignedTo:'Some Name',
              updatedStatus: 'Some status',
              updatedBy: 'Some name'
            }
          ]
        }],
        [{
          field: "checkbox",
          id: "dtcReAssignChk",
          name: "dtcReAssignChk",
          label: "Re-Assign",
          class:"cmt-chk-primary"
        }],
        [{
          field:"select",
          id: "dtcReAssignSelect",
          name: "dtcReAssignSelect",
          placeholder: "Assign to...",
          options: [
            {
              key: 1,
              value: 'Assign to some one'
            },
            {
              key: 2,
              value: 'Assign to some two'
            }
          ],
          class:"cmt-select-primary",
          disabled:true,
          mandatory: true
        }],
      ]
    };
    return (
      <React.Fragment>
        <DynamicForm
          model={model}
          handleSubmit={(data)=> {this.handleSubmit(data)}}
        />
      </React.Fragment>
    )
  }
}

export default About;
