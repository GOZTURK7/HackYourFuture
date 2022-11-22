function isWeekend(dayOfWeek){
    if(dayOfWeek === 'Sunday')
        return true;
    if(dayOfWeek === 'Monday')
        return false;
    if(dayOfWeek === 'Tuesday')
        return false;
    if(dayOfWeek === 'Wednesday')
        return false;
    if(dayOfWeek === 'Thursday')
        return false;
    if(dayOfWeek === 'Friday')
        return false;
    if(dayOfWeek === 'Saturday')
        return true;
}

console.log('Monday is a '+(isWeekend('Monday') ? 'weekend' : 'week day'));
console.log('Tuesday is a '+(isWeekend('Tuesday') ? 'weekend' : 'week day'));
console.log('Wednesday is a '+(isWeekend('Wednesday') ? 'weekend' : 'week day'));
console.log('Thursday is a '+(isWeekend('Thursday') ? 'weekend' : 'week day'));
console.log('Friday is a '+(isWeekend('Friday') ? 'weekend' : 'week day'));
console.log('Saturday is a '+(isWeekend('Saturday') ? 'weekend' : 'week day'));
console.log('Sunday is a '+(isWeekend('Sunday') ? 'weekend' : 'week day'));

const date = new Date()
