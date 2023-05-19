const nume= 'Mihai';
const initialValues=[17, 5, 'Mara', nume, null, undefined,['Mitzi','Gogo',10,5,2,true]];
const otherValues=[10,20,nume,'Ana are mere',null, ['Si Mara are mere'],nume,undefined,[5,7]];
initialValues.push(otherValues[0],otherValues[1],otherValues[2],otherValues[3],otherValues[4],otherValues[5],otherValues[6],otherValues[7],otherValues[8]);
console.log(initialValues);

const result1=initialValues[0]+2;
const result2=initialValues[1]+2;
const result3=initialValues[6][2]+2;
const result4=initialValues[6][3]+2;
const result5=initialValues[6][4]+2;
initialValues[0]=result1;
initialValues[1]=result2;
initialValues[6][2]=result3;
initialValues[6][3]=result4;
initialValues[6][4]=result5;
console.log(initialValues);

const concatVal1= initialValues[2].concat(' happy codding');
const concatVal2=initialValues[6][0].concat(' happy codding');
const concatVal3=initialValues[6][1].concat(' happy codding');
console.log(concatVal1,concatVal2,concatVal3);

initialValues[6][5]=!initialValues[6][5];
console.log(initialValues)