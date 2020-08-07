$("form").on("submit", e => {

    const email = $("#email").val().trim();
    const subject = $("#subject").val().trim();
    const text = $("#text").val().trim();

    const data = {
        email,
        subject,
        text
    };
    
    $.post("/email", data)
    .then(() => {
        window.location.href = "/email/sent";
        //Email sent
    })
    .catch(() => {
        window.location.href = "/error";
        //Something went wrong
    });
   
  });