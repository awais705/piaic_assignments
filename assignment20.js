/*Think of something you could store in a array. For example, you could make a list of mountains,
 rivers, countries, cities, languages, or anything else you’d like.
 Write a program that creates a list containing these items. */
var arr_country = ["Pakista", "India", "Sri Lanka", "Bangladesh"];
var arr_cities = ["Karachi", "Mumbai", "Khatmandu", "Dhaka"];
var arr_languages = ["Urdu", "Hindi", "English", "Bangla"];
var combine = arr_country.concat(arr_cities, arr_languages);
console.log(combine);
