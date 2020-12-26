const service_url = 'http://localhost:3000/api/assets';

function getAllAssets() {
    $.ajax({
        url: 'http://localhost:3000/api/assets',
        type: 'GET',
        success: function(assets) {
            console.log(assets);
        }
    });
}

function getAllAssetsFiltered(query) {
    console.log(query);
    $.ajax({
        url: service_url + query,
        type: 'GET',
        success: function (assets) {
            recreateAssetsTable(assets);
            //console.log(assets);
            //assetOperationsListeners(assets);
        }
    });
}

function getAllAssetsById(assetId) {
    console.log(query);
    $.ajax({
        url: service_url + `/${assetId}`,
        type: 'GET',
        success: function (asset) {
            console.log(asset);
            //findAsset(asset);
        }
    });
}

(function assetOperationsListeners() {
   
    $("#get-assets-filterd").click(() =>{
        const queryCity = $("#City").val();
        const queryCountry = $("#Country").val();
        // const queryNeighborhood = $("#Neighborhood").val();
        const queryRooms = $("#inputState").find(":selected").text();
        const queryElevator = $('.form-check-input-Elevator').is(':checked');
        const queryParking = $('.form-check-input-Parking').is(':checked');
        const queryPets = $('.form-check-input-Pets').is(':checked');
        // const queryPrice = $('.form-check-input1:checked').val();
        // const queryCondition = $('.form-check-input2:checked').val();
        const query = `?Country=${queryCountry}&City=${queryCity}&Rooms=${queryRooms}&Elevator=${queryElevator}&Parking=${queryParking}&Pets=${queryPets}`;
        getAllAssetsFiltered(query);    

    });

    $("#all-assets").click(() => {
        getAllAssets();
    });

    $("#get-asset").click(() => {
        console.log("ok")
        // const assetId = $("#id").val();
        // getAllAssetsById(assetId);
    });

}())


function recreateAssetsTable(assets) {
    // EXTRACT VALUE FOR HTML HEADER. 
    let col = ["Country","City","Street","Condition","Rooms","Price",""];

    // CREATE DYNAMIC TABLE.
    let table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
    let tr = table.insertRow(-1);// TABLE ROW.
    // console.log(tr);

    for (let i = 0; i < col.length; i++) {
        if (i == 7)
            continue;
        let th = document.createElement("th");// TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
    let tabCell;
    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (let i = 0; i < assets.length; i++) {
        tr = table.insertRow(-1);
    
        for (let j = 0; j < col.length; j++) {
            if (j == 7)
                continue;

            tabCell = tr.insertCell(-1);
            tabCell.innerHTML = assets[i][col[j]];
        }
        tabCell.innerHTML = '<button class="btn btn-primary btn-xs my-xs-btn" id="get-asset">Deatils</button>';
    }

    const divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}
