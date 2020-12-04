
const formatedDate = (param) => {
    const date = new Date(param)
    var options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    };
    let formatedDate = date.toLocaleString('en-US', options);
    return formatedDate;
}

const formatedDateHour = (param) =>{
    const date = new Date(param)
    let onlyDate = date.toLocaleString('en-us', { day: '2-digit', month: '2-digit', year: 'numeric'})
    let onlyHour = date.toLocaleString('en-us', { hour12: false, hour: '2-digit', minute:'2-digit' })
    let formatedDateHour = onlyDate + " " + onlyHour
    return formatedDateHour;
}

export default {
    formatedDate,
    formatedDateHour
}