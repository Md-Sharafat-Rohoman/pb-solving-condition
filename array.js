const friend = ['sharafat', 'faru', 'rohoman', 'muntaha'];
console.log(friend.length)
console.log(friend[3])
console.log(friend.includes('muntaha'))
console.log(friend.indexOf('muntaha'))
friend.push('moni')
console.log(friend)
friend.pop();
console.log(friend);
friend.shift();
console.log(friend);
friend.unshift('rohoman');
console.log(friend)

console.log(friend.slice(1,3))
console.log(friend.splice(1,3))


