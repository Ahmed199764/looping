var Show0rder = function() {
    var user0rder;
    var orderImage = "";


    while (user0rder !== "pizza" && user0rder !== "KFC") {
        user0rder = prompt("please enter pizza or KFC");
    }

    var numberOfImages;
    numberOfImages = prompt("how many images do you want");
    for (var i = 0; i < numberOfImages; i++) {
        console.log("index is" + i);
        if (user0rder === "KFC") {
            orderImage = orderImage + '<img src="https://buzz-caribbean.com/app/uploads/2019/08/kfc-big-deal-buzz-demo-1024x666.jpg">' + '<h1>item number one</h1>'
        } else if (user0rder === "pizza") {
            orderImage = orderImage + '<img src="https://media-cdn.tripadvisor.com/media/photo-s/14/7d/2a/cf/img-20180906-181850-01.jpg">' + '<h1>item number two</h1>'
        }

    }
    return orderImage;

}

document.write('<p>' + Show0rder() + '</p>');