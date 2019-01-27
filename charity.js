requests = require('request');
var hits = [];
var act_requests = 100;
var i;
var tracker = 0;

function getNP(page_number, terms, cities, states, zip, range, numresults, handler){
  requests.post({
    headers: {
      'content-type': 'application/json',
      'Subscription-Key': '0ed0c0657e3b4b22966a73ce1fa111f7'
    },
    url: 'https://apidata.guidestar.org/essentials/v1',
    form:{
      "search_terms": terms,
      "from": page_number,
      "size": numresults,
      "sort": {
        "sort_by": "",
        "ascending": true
      },
      "filters": {
        "geography": {
          "state": states,
          "zip": zip,
          "radius": range,
          "msa": [
            ""
          ],
          "city": cities,
          "county": [
            ""
          ]
        },
        /*,
        "organization": {
          "profile_levels": [
            "string"
          ],
          "ntee_major_codes": [
            "string"
          ],
          "ntee_minor_codes": [
            "string"
          ],
          "subsection_codes": [
            "string"
          ],
          "foundation_codes": [
            "string"
          ],
          "bmf_status": true,
          "pub78_verified": true,
          "affiliation_type": {
            "parent": true,
            "subordinate": true,
            "independent": true,
            "headquarter": true
          },
          "specific_exclusions": {
            "exclude_revoked_organizations": true,
            "exclude_defunct_or_merged_organizations": true
          },
          "number_of_employees_range": {
            "min": 0,
            "max": 0
          },
          "form_types": {
            "f990": true,
            "f990pf": true,
            "required_to_file_990t": true
          },
          "audits": {
            "a_133_audit_performed": true
          }
        },*/
        "financials": {
          "total_revenue": {
            "min": 0,
            "max": 10000000
          },
          "total_expenses": {
            "min": 0,
            "max": 10000000
          },
          "total_assets": {
            "min": 0,
            "max": 10000000
          }
        }
        
      }
    }
  }, function (error, html, body){
    //console.log(body);
    if (JSON.parse(body).code == '404'){
      handler("An error occured");
    }
    handler(JSON.parse(body).data.hits);
  });
}

function handler(one){
  console.log(one);
}
getNP(0, "TEXAS WOMENS FOUNDATION", [""], [""], "", 100, 10, handler);


module.exports = {
	getNP: getNP
}

