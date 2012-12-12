
var a1 = [e, e+e, e+a, i+e, e+i],
    a2 = [i, y],
    a3 = [a, a+i, a+y, e+i, e+y, e+a],
    a4 = [o+o, o+u, o+o+h, a+u, o+a, o+w, u],
    a5 = [a+r, e+r, u+r, o+r],
    a6 = [e+r, e+a+r],
    a7 = [e+r+e, e+a+r, e+r],
    a8 = [r+u, r+o, r+e+u, r+a+u],
    a9 = [u+y, e+y, i+y],
    a10 = [a+w, a+u, o+w],
    a11 = [o+i, o+y],
    a12 = [e+w, e+u, u+e, u+i];
var a_arrs = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12];

var a='a', b='b', c='c', d='d', e='e', 
    f='f', g='g', h='h', i='i', j='j', 
    k='k', l='l', m='m', n='n', o='o', 
    p='p', q='q', r='r', s='s', t='t', 
    v='v', w='w', x='x', y='y', z='z';

var vowels = [a,e,i,u]; 
var consonants = [b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z];

function build_tree (arrs){
	var a_hash = {};
	for (ii = 0; ii < arrs.length; ii++){
		for (jj = 0; jj < arrs[ii].length; jj++){
			a_hash.put // to, put in each value with it's whole array, except it self.
		}
	}
	return a_hash;
}

function dolanize (str){
  var first_char = str.charAt(0);
  var last_char = str.charAt(str.length-1);
  console.log(str);
  return str;
}
function isNumber (nb) {
  return typeof nb == "number";
}
function isString (str) {
  return typeof str == "string";
}

var args = process.argv.slice(2);
var word = args[0];
if (isString(word)) {
  dolanize(word);
}


