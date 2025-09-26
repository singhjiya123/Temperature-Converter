let btn=document.querySelector("#btn");
let fromUnit=document.querySelector("#from");
let toUnit=document.querySelector("#to");
let value=document.querySelector("#inputvalue");
let result=document.querySelector("#result");


const celciusToFahrenheit = (num) =>{
    let ctof=(num * 9 / 5) + 32;
    result.innerText=`${num}Celcius is ${ctof} Fahrenheit.`;
    
};

 const FahrenheitToCelcius =(num) => {
    let ftoc= (num - 32) * 5 / 9;
    result.innerText=`${num}Fahrenheit is  ${ftoc} Celcius.`;
    };

const CelciusToKelvin =(num) => {
    let ctok = num+ 273.15;
    result.innerText=`${num}Celcius is  ${ctok} Kelvin`;;
};
const KelvinToCelcius = (num) => {
    let ktoc= num- 273.15;
    result.innerText=`${num}Kelvin is ${ktoc} Celcius`;
};

const FahrenheitToKelvin =(num) => {
     let ftok=(num - 32) * 5 / 9 + 273.15;
     result.innerText=`${num}Fahrenheit is ${ftok} Kelvin`;
};

const KelvinToFahrenheit =(num) => {
    let ktof= (num - 273.15) * 9 / 5 + 32;
    result.innerText=`${num}kelvin is ${ktof} fahrenheit`;
};

const convertTem =() => {
    btn.addEventListener("click" ,() => {
    let num= parseFloat(value.value);
    let from= fromUnit.value;
    let to= toUnit.value;
        if(from===to){
            result.innerText="Can't be converted to Same Units";
        }
        else if(from=== "celcius"&& to==="fahrenheit"){
            celciusToFahrenheit(num);
        }
        else if(from=== "fahrenheit"&& to==="celcius"){
            FahrenheitToCelcius(num);
        }
        else if(from=== "kelvin" && to==="celcius"){
            KelvinToCelcius(num);
        }
        else if(from=== "celcius"&& to==="kelvin"){
            CelciusToKelvin(num);
        }
        else if(from=== "fahrenheit"&& to==="kelvin"){
            FahrenheitToKelvin(num);
        }
        else if(from=== "kelvin"&& to==="fahrenheit"){
            KelvinToFahrenheit(num);
        }




    });
};
        

        
        
        
convertTem();

 
  
   