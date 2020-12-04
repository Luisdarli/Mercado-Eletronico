
const formatedDate = (param) => {
    const date = new Date(param)
    var options = {
        year: "numeric",
        month: "2-digit",
        day: "numeric"
    };
    let formatedDate = date.toLocaleString('en-US', options);
    return formatedDate;
}

export default {
    formatedDate
}