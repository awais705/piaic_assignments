/*Think of something you could store in a array. For example, you could make a list of mountains,
 rivers, countries, cities, languages, or anything else you’d like. 
 Write a program that creates a list containing these items. */

let arr_country: string[] = ["Pakista", "India", "Sri Lanka", "Bangladesh"];
let arr_cities: string[] = ["Karachi", "Mumbai", "Khatmandu", "Dhaka"];
let arr_languages: string[] = ["Urdu", "Hindi", "English", "Bangla"];

let combine: string[] = arr_country.concat(arr_cities, arr_languages);
console.log(combine);
