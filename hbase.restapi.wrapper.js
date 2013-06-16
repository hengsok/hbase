/*
 * Javascript wrapper functions for HBase REST API
 * This utility provides the functions for accessing HBase REST Gateway in a variety of ways.
 * Please ensure that row keys, column families and column keys are stored in String.
 * Cell values can be String, Int or Long. To convert bytes to their relevant data types,
 * use the hbase.util.bytes utility I have written.
 *
 * This libary requires the Mini Javascript Bytes Utility for HBase
 * 
 * Copyright (c) 2013 - Heng Sok
 * http://tdiscovery.blogspot.co.uk/
 * Licensed under the Apache License Version 2.0 which is the same as HBase.
 *  - http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author: Heng Sok (HS)
 * Version: 0.10.0
 * Date: 23rd, May, 2013
 *
 * Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides 
 * the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR 
 * CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or 
 * conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are 
 * solely responsible for determining the appropriateness of using or redistributing the Work and assume 
 * any risks associated with Your exercise of permissions under this License.
 */


/* This wrapper makes use of Javascript "promise" feature because the ajax call is asynchronous.
Usage:
var promise = REST.getAllRowsAllCols(restEndpoint,"TABLE NAME");

promise.success(function (data) {
	if(data.status.http_code == 200){
		//use data safely here
	}
});


*/
(function() {
	window.REST = {
		//Convert String in Base64 to String. Equivalent to decode base64
		getEncodedString: function(dataInBase64) {
			return window.atob(dataInBase64);
		},
		getEncodedInt: function(dataInBase64) {
			//Decode base64, convert string to byte arrays, then byte arrays to Int
			return HS.toInt(HS.strToBin(window.atob(dataInBase64)));
		},
		getEncodedLong: function(dataInBase64) {
			return HS.toLong(HS.strToBin(window.atob(dataInBase64)));
		},

		//REST Calls
		//Get all rows and all columns from the specified table
		//serverAddr: http://yourhost.com
		//Return: return data else if something is wrong, return null
		getAllRowsAllCols: function(serverAddr, tableName) {
			var tableNameURIEncoded = encodeURIComponent(tableName);
			var json_url =  serverAddr + "/" + tableNameURIEncoded + "/*";
			var d = REST.makeHTTPRequest(json_url);
			var promise = REST.makeHTTPRequest(json_url);
			return promise;
		},
		//Get a row. rowKey is in string
		//Return: return data else if something is wrong, return null
		getRow: function(serverAddr, tableName, rowKey) {
			var tableNameURIEncoded = encodeURIComponent(tableName);
			var rowKeyURIEncoded = encodeURIComponent(rowKey);
			var json_url =  serverAddr + "/" + tableNameURIEncoded + "/" + rowKeyURIEncoded;
			var promise = REST.makeHTTPRequest(json_url);
			return promise;
		},
		getRowOneCol: function(serverAddr, tableName, rowKey, colFamily, colQualifier) {
			var tableNameURIEncoded = encodeURIComponent(tableName);
			var rowKeyURIEncoded = encodeURIComponent(rowKey);
			var colURIEncoded = encodeURIComponent(colFamily + ":" + colQualifier);
			var json_url =  serverAddr + "/" + tableNameURIEncoded + "/" + rowKeyURIEncoded + "/" + colURIEncoded;
			var promise = REST.makeHTTPRequest(json_url);
			return promise;
		},
		//Get a row. rowKey is in string
		//Return: return data else if something is wrong, return null
		getAllRowsOneCol: function(serverAddr, tableName, colFamily, colQualifier) {
			var tableNameURIEncoded = encodeURIComponent(tableName);
			var colURIEncoded = encodeURIComponent(colFamily + ":" + colQualifier);
			var json_url =  serverAddr + "/" + tableNameURIEncoded + "/*/" + colURIEncoded;
			var promise = REST.makeHTTPRequest(json_url);
			return promise;
		},
		//Return: return data else if something is wrong, return null
		getAllRowsOneColFamily: function(serverAddr, tableName, colFamily) {
			var tableNameURIEncoded = encodeURIComponent(tableName);
			var colURIEncoded = encodeURIComponent(colFamily);
			var json_url =  serverAddr + "/" + tableNameURIEncoded + "/*/" + colURIEncoded;
			var promise = REST.makeHTTPRequest(json_url);
			return promise;
		},
		makeHTTPRequest: function(json_url){
			//inside can access variable from outside
			return $.ajax({
				url: json_url, 
				type: 'GET',
				dataType: 'json',
				error: function() {
					console.log("There is something going wrong. Please check.");
				},
				//Uncomment this if you want data to be returned as json
				/*beforeSend: function (request)
				{
                	request.setRequestHeader('Accept', 'application/json');
             		request.setRequestHeader('Content-Type', 'application/json');
	            },*/
       		});
       		
		}

	};
})();