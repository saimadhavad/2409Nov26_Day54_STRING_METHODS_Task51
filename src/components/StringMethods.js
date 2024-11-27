import React from 'react'
import Employee from '../classes/Employee';


function StringMethods() {
  return (
    <div>
        <h1>stringMethods()</h1>

        <div>

            {/* toUpperCase() STRING Method */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("toUpperCase() ::");
                    const stringUpperCase ="sai madhava";
                    console.log(`STRING : ${stringUpperCase}`)
                    console.log(`UPPERCASE : ${stringUpperCase.toUpperCase()}`);
            }}>toUpperCase()</button>

            {/* toLowerCase() STRING Method */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("toLowerCase() ::");
                    const stringLowerCase ="SAI MADHAVA";
                    console.log(`STRING : ${stringLowerCase}`)
                    console.log(`LOWERCASE : ${stringLowerCase.toLowerCase()}`);
            }}>toLowerCase()</button>  

            {/* concat() STRING Method */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("concat() ::");
                    const name = "Sai Madhava";
                    const surName = "D";
                    const fullName = name.concat(surName);
                    console.log(`Name : ${name}`);
                    console.log(`surName : ${surName}`);
                    console.log(`fullName : ${fullName}`);
                    console.log("2 METHOD : concat()");
                    console.log(`fullName : ${name} ${surName} `);
            }}>concat()</button>  

            {/* trim() trimStart() trimEnd() STRING Method */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("trim() trimStart() trimEnd() ::");
                    const trimStartEnd =" Sai Madhava ";
                    console.log(`STRING : ${trimStartEnd}`);
                    console.log("trim() ::");
                    console.log(`STRING trim : --->${trimStartEnd.trim()}<---`)
                    console.log("trimStart() ::");
                    console.log(`STRING trimStart : --->${trimStartEnd.trimStart()}<---`)
                    console.log("trimEnd() ::");
                    console.log(`STRING trimEND : --->${trimStartEnd.trimEnd()}<---`)

            }}>trim(), trimStart() & trimEnd()</button>
            
            {/* padStart() & padEnd() STRING Method */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("padStart() & padEnd() ::");
                    const padStartEnd ="oops!"; 
                    const padStart = "HA!!";
                    const padEnd = "Bruhahaha";
                    console.log(`STRING :: ${padStartEnd}`);
                    console.log(`padStart() :: ${padStartEnd.padStart(10,"o")}`);
                    console.log(`padStart() :: ${padStart.padStart(20,"HA")}`);
                    console.log(`padEnd() :: ${padStartEnd.padEnd(10,"!")}`);
                    console.log(`padEnd() :: ${padEnd.padEnd(20,"!!")}`);
            }}>padStart() & padEnd()</button>  
            
            {/* repeat() STRING Method */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("repeat() ::");
                    const slogan = "Jai Shree Ram 🙏 ";
                    console.log(`SLOGAN :: ${slogan}`);
                    console.log(slogan.repeat(108));
            }}>repeat()</button>  
            
            {/* replace() & replaceAll() STRING Method */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("replace() & replaceAll() ::");
                    const replaceMethod = "For MERN FULLSTACK, Please visit online / offline classes for BRNinfotech";
                    console.log(`STRING :: ${replaceMethod}`);
                    console.log(`replace() : ${replaceMethod.replace("online","offline")}`);
                    const replaceAllMethod ="India, officially known as the Republic of India. India has one of the world's fastest-growing economies, driven by sectors like technology, agriculture, manufacturing, and services.";
                    console.log(`STRING :: ${replaceAllMethod}`);
                    console.log(`replaceAll() : ${replaceAllMethod.replaceAll("India","Bharat")}`);                    
            }}>replace() & replaceAll()</button>  
            
            {/* split() STRING Method */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("replace() & replaceAll() ::");
                    const splitMethod = "Today, India is a democratic nation with a parliamentary system, led by a President (head of state) and a Prime Minister (head of government). It is a key player in global politics, technology, and sustainability efforts. Despite challenges like poverty and urbanization, India continues to thrive as a nation of resilience and innovation.";
                    console.log(splitMethod);
                    console.log(`split() :`);
                    console.log(splitMethod.split("."));
            }}>split()</button>  

            {/* slice(), substring() & substr() STRING Method */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("slice(), substring() & substr() ::");
                    const name = "SaiMadhava D";
                    console.log(`NAME :: ${name}`);
                    console.log(`slice() :: ${name.slice(3,10)}`);
                    console.log(`substring() :: ${name.substring(3,10)}`);
                    console.log(`substr() :: ${name.substr(3,7)}`);
            }}>slice(), substring() & substr()</button>  
            
            {/* length, at(), charAt() & [] STRING Method */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("length, at(), charAt() & [] ::");
                    const name = "SaiMadhava D";
                    console.log(`NAME :: ${name}`);
                    console.log(`length :: ${name.length}`);
                    console.log(`at() :: ${name.at(11)}`);
                    console.log(`charAt() :: ${name.charAt(11)}`);
                    console.log(`[] :: ${name[11]}`);
            }}>length, at(), charAt() & []</button>  
            
            {/* charCodeAt() STRING Method */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("charCodeAt() ::");
                    let alphabets = "abcdefghijklmnopqrstuvwxyz";
                    let capitalAlphabets = alphabets.toUpperCase();
                    let teluguLetters = "అఆఇఈఉఊఋౠఎఏఐఒఓఔఅంఅః కఖగఘఙచఛజఝఞటఠడఢణతథదధనపఫబభమయరలవశషసహళఱఴ";
                    console.log(`TELUGU LETTERS : ${teluguLetters}`);
                    for(let i = 0; i<teluguLetters.length; i++){
                        console.log(`${teluguLetters.charAt(i)} -> ${teluguLetters.charCodeAt(i)}`)
                    }
                    console.log(`SMALL ALPHABETS : ${alphabets}`);                    
                    for(let i = 0; i<alphabets.length; i++){
                        console.log(`${alphabets.charAt(i)} -> ${alphabets.charCodeAt(i)}`)
                    }
                    console.log(`BIG ALPHABETS : ${capitalAlphabets}`);
                    for(let i = 0; i<capitalAlphabets.length; i++){
                        console.log(`${capitalAlphabets.charAt(i)} -> ${capitalAlphabets.charCodeAt(i)}`)
                    }                   
            }}>charCodeAt()</button>  
            
            {/* String.fromCharCode() STRING STATIC Method */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("String.fromCharCode() ::");
                    for(let i=1000; i<=1064; i++){                        
                        console.log(String.fromCharCode(i));
                    }
            }}>String.fromCharCode()</button>  

            
            {/* endsWith() & startsWith() STRING Method */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("endsWith() & startsWith() ::");
                    let name = "Sai Madhava D";
                    console.log(`NAME :: ${name}`);
                    console.log(`endsWith() :: ${name.endsWith("D")}`);
                    console.log(`startsWith() :: ${name.startsWith("Sai")}`);

            }}>endsWith() & startsWith()</button>  
            
            {/* includes() STRING Method */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("includes() ::");
                    let name = "Sai Madhava D";
                    console.log(`NAME :: ${name}`);
                    console.log(`includes() :: ${name.includes("datla")}`);
                    console.log(`includes() :: ${name.includes("Madhava")}`);

            }}>includes()</button>  

            {/* indexOf() STRING Method */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("indexOf() ::");
                    let greetings = "WELCOME! Sai Madhava D";
                    console.log(`STRING  :: ${greetings}`);
                    console.log(`indexOf() - ! : ${greetings.indexOf("!")}`);
                    console.log(`indexOf() - D : ${greetings.indexOf("D")}`);
                    console.log(`indexOf() - (a,11) : ${greetings.indexOf("a",11)}`);
                    console.log(`indexOf() - F : ${greetings.indexOf("F")}`);
            }}>indexOf()</button>  
            
            {/* lastIndexOf() STRING Method */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("lastIndexOf() ::");
                    let greetings = "WELCOME Sai!  -> Sai Madhava D <-";
                    console.log(`STRING  :: ${greetings}`);
                    console.log(`lastIndexOf() - F : ${greetings.lastIndexOf("Sai")}`);
                    console.log(`lastIndexOf() - F : ${greetings.lastIndexOf("datla")}`);
            }}>lastIndexOf()</button>  

            {/* match() STRING Method */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("match() ::");
                    const regularExpression = "The quick brown fox jumps over the lazy dog";
                    console.log(`RE :: ${regularExpression}`);
                    console.log(regularExpression.match("fox"));
                    console.log(`CASE SENSITIVE / GLOBAL : ${regularExpression.match(/the/gi)}`);
            }}>match()</button>
            
            {/* search() STRING Method */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("search() ::");
                    const regularExpression = "The quick brown fox jumps over the lazy dog";
                    console.log(`RE :: ${regularExpression}`);
                    console.log(regularExpression.search("fox"));
                    console.log(`CASE SENSITIVE / GLOBAL : ${regularExpression.search(/the/gi)}`);
                    console.log(`NOT FOUND : ${regularExpression.search("day")}`);

            }}>search()</button>  

            <hr/>
            <div>
                <h1>Other stringMethods()</h1>
                {/* toLocaleLowerCase() STRING Method */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("toLocaleLowerCase() ::");
                    let lowerAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    console.log(`STRING :: ${lowerAlphabets}`)
                    console.log(`EN-US: ${lowerAlphabets.toLocaleLowerCase('en-US')}`);                    
                    console.log(`tr-TR : ${lowerAlphabets.toLocaleLowerCase('tr-TR')}`);
                    // console.log(`tr : ${lowerAlphabets.toLocaleLowerCase('tr')}`);
                    // console.log(`TR : ${lowerAlphabets.toLocaleLowerCase('TR')}`);
                    // console.log(`tr-u-co-search : ${lowerAlphabets.toLocaleLowerCase('tr-u-co-search')}`);
                    // console.log(`tr-x-turkish : ${lowerAlphabets.toLocaleLowerCase('tr-x-turkish')}`);
            }}>toLocaleLowerCase()</button>  
            
            {/* toLocaleUpperCase() STRING Method */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("toLocaleUpperCase() ::");
                    let capitalAlphabets = "abcdefghijklmnopqrstuvwxyz";
                    console.log(`STRING :: ${capitalAlphabets}`)
                    console.log(`EN-US: ${capitalAlphabets.toLocaleUpperCase('en-US')}`);
                    console.log(`tr-TR : ${capitalAlphabets.toLocaleUpperCase('tr-TR')}`);
                    // console.log(`tr : ${capitalAlphabets.toLocaleUpperCase('tr')}`);
                    // console.log(`TR : ${capitalAlphabets.toLocaleUpperCase('TR')}`);                    
                    // console.log(`tr-u-co-search : ${capitalAlphabets.toLocaleUpperCase('tr-u-co-search')}`);
                    // console.log(`tr-x-turkish : ${capitalAlphabets.toLocaleUpperCase('tr-x-turkish')}`);
            }}>toLocaleUpperCase()</button>  

            {/* valueOf() STRING Method */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("valueOf() ::");
                    const name = "SaiMadhava D";
                    console.log(`NAME : ${name}`);
                    console.log(`valueOf() : ${name.valueOf()}`);
            }}>valueOf()</button>  
            
            {/* prototype STRING STATIC Method */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("prototype() ::");
                    console.log("EMPLOYEE DETAILS ::")
                    let employeeDetails = new Employee("SM","Software Engineer",1993);
                    let employeeDetails1 = new Employee("DS","Digital Marketing Specialist",1980);
                    let employeeDetails2 = new Employee("MV","Financial Analyst",1985);
                    let employeeDetails3 = new Employee("DSM","College Professor",1990);
                    console.log(`employeeDetails :: NAME : ${employeeDetails.name}, NATIONALITY : ${employeeDetails.nationality}, JOB TITLE : ${employeeDetails.jobtitle}, BORN : ${employeeDetails.bornyear}, SALARY : ${employeeDetails.salary}`);
                    console.log(`employeeDetails1 :: NAME : ${employeeDetails1.name}, NATIONALITY : ${employeeDetails.nationality}, JOB TITLE : ${employeeDetails1.jobtitle}, BORN : ${employeeDetails1.bornyear}, SALARY : ${employeeDetails1.salary}`);
                    console.log(`employeeDetails2 :: NAME : ${employeeDetails2.name}, NATIONALITY : ${employeeDetails.nationality}, JOB TITLE : ${employeeDetails2.jobtitle}, BORN : ${employeeDetails2.bornyear}, SALARY : ${employeeDetails2.salary}`);
                    console.log(`employeeDetails3 :: NAME : ${employeeDetails3.name}, NATIONALITY : ${employeeDetails.nationality}, JOB TITLE : ${employeeDetails3.jobtitle}, BORN : ${employeeDetails3.bornyear}, SALARY : ${employeeDetails3.salary}`);
            }}>prototype</button> 

            {/* localeCompare() STRING Method  */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("localeCompare() ::");
                    const string1 = "abc";
                    const string2 = "abcd";
                    const string3 = "abc";
                    const string4 = "abc";
                    const string5 = "abcd";
                    const string6 = "abc";
                    console.log(`localeCompare() -> -1 : ${string1.localeCompare(string2)}`);
                    console.log(`localeCompare() -> 0 : ${string3.localeCompare(string4)}`);
                    console.log(`localeCompare() -> 1 : ${string5.localeCompare(string6)}`);
            }}>localeCompare()</button>  
            
            {/* constructor STRING STATIC Method  */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("constructor ::");
                    let message = "hello World!";
                    let textMessage = message.constructor;
                    console.log(textMessage);
                    let message1 = new String("Hello World!!");
                    console.log(message1);
            }}>constructor</button> 
            
            {/* codePointAt() STRING Method */}
            <button type='button' 
                onClick={ () => {
                    console.clear();
                    console.log("codePointAt() ::");
                    let message = "hello World!";
                    console.log(`codePointAt(0) : ${message.codePointAt(0)}`);
                    console.log(`codePointAt(1) : ${message.codePointAt(1)}`);
            }}>codePointAt()</button> 

            </div>
            
        </div>
      
    </div>
  )
}

export default StringMethods
