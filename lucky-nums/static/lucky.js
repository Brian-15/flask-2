/** processForm: get data from form and make AJAX call to our API. */

async function processForm(evt) {
    evt.preventDefault();

    formData = {
        "name": $("#name").val(),
        "year": $("#year").val(),
        "email": $("#email").val(),
        "color": $("#color").val()
    };

    const resp = await axios.post("/api/get-lucky-num", formData);

    handleResponse(resp);
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {

    $("b").text("");

    data = resp.data;

    if ("errors" in data) {
        for (let error in data["errors"]) {
            $(`#${error}-err`).text(data["errors"][error]);
        }
    }
    else {
        resultDiv = $("#lucky-results");
        resultDiv.html("");

        resultDiv.append(
            $("<p>").text(
                `Your lucky number is ${data["num"]["num"]} (${data["num"]["fact"]}).`
            ),
            $("<p>").text(
                `Your birth year ([${data["year"]["year"]}]) fact is ${data["year"]["fact"]}.`
            )
        );
    
    }
}


$("#lucky-form").on("submit", processForm);
