import React, { Component } from 'react';
import InputFullSalary from './components/Input/InputFullSalary';
import InputReadOnly from './components/Input/InputReadOnly';
import ProgressBarSalary from './components/ProgressBarSalary';

import { calculateSalaryFrom } from './helpers/salary';

const COLOR_INSS = '#e67e22';
const COLOR_IRPF = '#c0392b';
const COLOR_NET_SALARY = '#16a085';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      fullSalary: 1000,
      baseINSS:'',
      discountINSS:'',
      baseIRPF:'',
      discountIRPF:'',
      netSalary:'',
      percentINSS:'',
      percentIRPF:'',
      percentNetSalary:''
    };
  }

  componentDidMount(){
    this.handleChangeFullSalary(this.state.fullSalary);
  }

  handleChangeFullSalary = (newSalary) =>{
    const calculatedValues = calculateSalaryFrom(newSalary);
    const {baseINSS,discountINSS,baseIRPF,discountIRPF,netSalary} = calculatedValues;
    
    this.setState({
      fullSalary: newSalary,
      baseINSS: baseINSS,
      discountINSS:discountINSS,
      baseIRPF:baseIRPF,
      discountIRPF:discountIRPF,
      netSalary: netSalary,
      percentINSS:(discountINSS/newSalary)*100,
      percentIRPF:(discountIRPF/newSalary)*100,
      percentNetSalary:(netSalary/newSalary)*100
    });


  }
  
  render() {
    const {fullSalary,
           baseINSS,
          discountINSS,
          baseIRPF,
          discountIRPF,
          netSalary,
          percentINSS,
          percentIRPF,
          percentNetSalary} = this.state;

    return(
      <div className="container">
        <h1 style={styles.centeredTitle}>React Salário</h1>
        <div className="row">
          <InputFullSalary
            fullSalary={fullSalary}
            onChangeFullSalary={this.handleChangeFullSalary} />
          <InputReadOnly 
            fieldId="baseINSS"
            fieldName="Base INSS"
            fieldValue={baseINSS} 
          />
          <InputReadOnly
            fieldId="discontINSS"
            fieldName="Desconto INSS"
            fieldValue={discountINSS} 
            percentage={percentINSS}
            color={COLOR_INSS}
          />
          <InputReadOnly
            fieldId="baseIRPF"
            fieldName="Base IRPF"
            fieldValue={baseIRPF} />
          <InputReadOnly
            fieldId="discontIRPF"
            fieldName="Desconto IRPF"
            fieldValue={discountIRPF} 
            percentage={percentIRPF}
            color={COLOR_IRPF}
          />
        </div>
        <div className="row">
          <InputReadOnly
            fieldId="netSalary"
            fieldName="Salário Líquido"
            fieldValue={netSalary} 
            percentage={percentNetSalary}
            color={COLOR_NET_SALARY}
          />
        </div>
        <ProgressBarSalary 
            percentINSS={discountINSS} 
            colorINSS={COLOR_INSS}
            percentIRPF={discountIRPF} 
            colorIRPF={COLOR_IRPF}
            percentNetSalary={netSalary} 
            colorNetSalary={COLOR_NET_SALARY}  
          />
      </div>
    );
  }
}

const styles = {
  centeredTitle:{
    textAlign:'center'
  }
}
