
  Mini Javascript Bytes Utility for HBase
  This utility is mainly used for one way conversion from bytes to actual value representation. This is
  particularly useful in conjunction with HBase REST API.
  http://tdiscovery.blogspot.co.uk/
 
  Copyright (c) 2013 - Heng Sok
  Licensed under the Apache License Version 2.0 which is the same as HBase.
   - http://www.apache.org/licenses/LICENSE-2.0
 
  Author: Heng Sok (HS)
  Version: 0.10.0
  Date: 22nd, May, 2013
 
  In the process of porting the HBase Bytes utility that is currently only available for Java, reference 
  has been made to the original Bytes Utility source code which is also distributed under Apache License
  Version 2.0. strToBin and binToStr functions are contributed from 
  http://codereview.stackexchange.com/questions/3569/pack-and-unpack-bytes-to-strings 
  with Creative Commons License (http://creativecommons.org/licenses/by-sa/3.0/). They have been slightly
  modified to fit their purpose.
 
  Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides 
  the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR 
  CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or 
  conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are 
  solely responsible for determining the appropriateness of using or redistributing the Work and assume 
  any risks associated with Your exercise of permissions under this License.
 



  Javascript wrapper functions for HBase REST API
  This utility provides the functions for accessing HBase REST Gateway in a variety of ways.
  Please ensure that row keys, column families and column keys are stored in String.
  Cell values can be String, Int or Long. To convert bytes to their relevant data types,
  use the hbase.util.bytes utility I have written.
 
  This libary requires the Mini Javascript Bytes Utility for HBase
  
  Copyright (c) 2013 - Heng Sok
  http://tdiscovery.blogspot.co.uk/
  Licensed under the Apache License Version 2.0 which is the same as HBase.
   - http://www.apache.org/licenses/LICENSE-2.0
 
  Author: Heng Sok (HS)
  Version: 0.10.0
  Date: 23rd, May, 2013
 
  Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides 
  the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR 
  CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or 
  conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are 
  solely responsible for determining the appropriateness of using or redistributing the Work and assume 
  any risks associated with Your exercise of permissions under this License.
 


// This wrapper makes use of Javascript "promise" feature because the ajax call is asynchronous.
Usage:
var promise = REST.getAllRowsAllCols(restEndpoint,"TABLE NAME");

promise.success(function (data) {
	if(data.status.http_code == 200){
		//use data safely here
	}
});



