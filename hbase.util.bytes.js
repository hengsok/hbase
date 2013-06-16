/*
 * Mini Javascript Bytes Utility for HBase
 * This utility is mainly used for one way conversion from bytes to actual value representation. This is
 * particularly useful in conjunction with HBase REST API.
 * http://tdiscovery.blogspot.co.uk/
 *
 * Copyright (c) 2013 - Heng Sok
 * Licensed under the Apache License Version 2.0 which is the same as HBase.
 *  - http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author: Heng Sok (HS)
 * Version: 0.10.0
 * Date: 22nd, May, 2013
 *
 * In the process of porting the HBase Bytes utility that is currently only available for Java, reference 
 * has been made to the original Bytes Utility source code which is also distributed under Apache License
 * Version 2.0. strToBin and binToStr functions are contributed from 
 * http://codereview.stackexchange.com/questions/3569/pack-and-unpack-bytes-to-strings 
 * with Creative Commons License (http://creativecommons.org/licenses/by-sa/3.0/). They have been slightly
 * modified to fit their purpose.
 *
 * Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides 
 * the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR 
 * CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or 
 * conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are 
 * solely responsible for determining the appropriateness of using or redistributing the Work and assume 
 * any risks associated with Your exercise of permissions under this License.
 */


(function() {
	var SIZEOF_LONG = 8;
	var SIZEOF_INT  = 4;

	window.HS = {
		// Note that there is no Long in Javascript, so value of Long is 
		// represented within acceptable range of Int. Support sign and unsigned long.
		toLong: function(byteArray) {
			var n = 0;
			var offset = 0;
			for(var i = offset; i < (offset + SIZEOF_LONG); i++) {
				n <<= 8;
				n ^= byteArray[i] & 0xFF;
			}
			return n;
		},

		toInt: function(byteArray) {
			var n = 0;
			var offset = 0;
			for(var i = offset; i < (offset + SIZEOF_INT); i++) {
				n <<= 8;
				n ^= byteArray[i] & 0xFF;
			}
			return n;
		},
		// Note that there is no Short data type in Javascript, so value of Short is 
		// represented within acceptable range of Int. Support only unsign short at the moment.
		toShort: function(byteArray) {
			var n = 0;
			n ^= byteArray[0] & 0xFF;
			n <<= 8;
			n ^= byteArray[1] & 0xFF;
			return n;
		},
		binToStr: function(bytes) {
			var chars = [];
			for(var i = 0, n = bytes.length; i < n;) {
				chars.push(((bytes[i++] & 0xff) << 8) | (bytes[i++] & 0xff));
			}

			return String.fromCharCode.apply(null, chars);
		},

		strToBin: function(str) {
			var bytes = [];
			for(var i = 0, n = str.length; i < n; i++) {

				var char = str.charCodeAt(i);
				bytes.push(char & 0xFF);
			}

			return bytes;
		}

	};
})();