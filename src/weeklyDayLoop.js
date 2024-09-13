

function DayLoop(day) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saturday", "Sunday"];
    for (let i = 0; i < days.length; i++){
        if (i===day - 1){ // -1 Puisque le tableau commence à 0
            return days[i];
        }
    }
}


console.log(DayLoop(4)); // Monday