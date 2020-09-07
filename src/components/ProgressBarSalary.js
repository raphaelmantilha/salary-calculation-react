import React, { Component } from 'react'

export default class ProgressBarSalary extends Component {
    render() {
        const {percentINSS,percentIRPF,percentNetSalary,colorINSS,colorIRPF,colorNetSalary} = this.props;
       
        return (
            <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start"
            }}
            >
                <div
                    style={{
                    marginTop: "40px",
                    width: percentINSS + "%",
                    height: "20px",
                    backgroundColor: colorINSS
                    }}
                ></div>
                <div
                    style={{
                    marginTop: "40px",
                    width: percentIRPF + "%",
                    height: "20px",
                    backgroundColor: colorIRPF
                    }}
                ></div>
                <div
                    style={{
                    marginTop: "40px",
                    width: percentNetSalary + "%",
                    height: "20px",
                    backgroundColor: colorNetSalary
                    }}
                ></div>
            </div>
        );
    }
}
