const request = require('superagent');
const fs = require('fs');
let runID;
let date = new Date();
let data;
request
    .post('https://api.qase.io/v1/run/GD2')
    .set('Accept', 'application/json')
    .set('Token', '03cd07b87806c11d541ece4d054c1c884a1ba74e')
    .send({
        title: `Regression Testing - ${date.toISOString()}`,
        include_all_cases: true
    })
    .then((res) => {
        runID = res.body.result.id;
        data = JSON.parse(fs.readFileSync('cypress.json'));
        data.reporterOptions.runId = runID;

        fs.writeFile('cypress.json', JSON.stringify(data), function writeJSON(err) {
            if (err) return console.log(err);
        });
    })
    .catch((err) => {
        console.log(err);
    });
