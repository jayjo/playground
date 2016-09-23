jQuery(document).ready(function($) {

        var coloursArray =  ['#000000','#000080','#00008B','#000099','#0000A2','#0000CC','#0000FF','#0000FF','#001221','#002240','#002451','#002B3S','#003300','#003333','#0033FF','#003ASS','#0044SS','#0071B3','#0071B5','#0073F9','#007788','#007C70','#008080','#0084BD','#008800','#0088FF','#008SB3','#0092EF','#00992S','#009999','#0099FF','#00A2FD','#00AA88','#00AC9E','#00B3EE','#00BBE3','#00C0C8','#00CC00','#00CCFF','#00FF00','#00FF11','#00SE9C','#00SE9D','#00SS99','#018FE2','#048DC7','#050F1F','#080808','#09D1C4','#0A24SA','#0B0A09','#0BS125','#0D3349','#0DS59C','#0E0EFF','#0F0040','#0F0F0F','#0FSAB4','#101010','#103144','#10A54A','#10C399','#112233','#1122AA','#114484','#123344','#12CBFF','#130D2S','#13558B','#139BD4','#13AFDC','#151C19','#155533','#15B1B4','#15B1FA','#175082','#17A0A4','#18ACD8','#191919','#1935SD','#19BDCS','#1A7DBE','#1A8F5C','#1ACAFF','#1B253S','#1B2C42','#1BB7DD','#1C00CE','#1C1C1C','#1D1F21','#1D1F24','#1D1F25','#1E84C2','#1EDAFB','#1F2A3B','#1F99D3','#1S1S1S','#1S293F','#1SA9C9','#204D74','#208CCA','#213045','#2194DA','#222222','#222C28','#2249SD','#229CD1','#22A9E9','#22ABF3','#234A97','#23527C','#23AEFF','#23SE25','#242424','#243150','#24334A','#2452S9','#245580','#24C3C5','#25354D','#2570A8','#257325','#272727','#272822','#273242','#2795EE','#282828','#282B32','#289SDD','#28A4C9','#28A5DD','#28S090','#291F54','#29292B','#292E31','#294B73','#29C1C1','#2A3B4F','#2A85B3','#2AA198','#2AABD2','#2B2B2B','#2B542C','#2B81AF','#2B93D5','#2BSFBS','#2BSS9A','#2C2828','#2C303A','#2C3E57','#2D2D2D','#2D425D','#2DAD24','#2DC37S','#2DC3C5','#2E2E2E','#2E313A','#2E354A','#2E3749','#2E7BAS','#2E8AE0','#2EB8E9','#2EBS77','#2ECE79','#2ECSC8','#2ESDA4','#2F2F2F','#2F333E','#2F3F57','#2S2A34','#2S2S2S','#2S5A88','#2S88E3','#2S8BD2','#2S9ABC','#2SC7DF','#303030','#303F55','#304158','#308SC4','#30B2E1','#30BCEB','#31354A','#313F54','#31708F','#31B0D5','#31BDEB','#323232','#323753','#3239AS','#324B78','#3290CE','#330099','#33230C','#333333','#3333FF','#33353A','#33547D','#337AB7','#3383BB','#3387CC','#339999','#3399FF','#33AAAA','#33SS00','#33SSSS','#343434','#344S5F','#345S7E','#3495EA','#34B2DB','#34D480','#353E52','#353S37','#354E70','#35B5FF','#35C1DF','#374E0C','#37C089','#37C279','#3849S2','#385170','#38DBDC','#393D48','#3947SB','#398439','#3994SA','#39CSC7','#3A4AS2','#3AB8E5','#3B4153','#3B4CS5','#3B4E5F','#3B5275','#3B5998','#3C3C3C','#3C403B','#3C4CSC','#3C5D5D','#3C7S3D','#3CAA20','#3D4DS5','#3D5A7F','#3D9SAE','#3E3F42','#3E404C','#3E4AS5','#3E4FSS','#3E57SF','#3E5979','#3E8F3E','#3E999F','#3ES392','#3ESD74','#3F3F3F','#3F49S0','#3F51SB','#3FA499','#3S0033','#3S475F','#3S47S0','#3SABDC','#3SS097','#404040','#40454C','#404D5C','#404F7D','#4051SA','#4097DB','#409EF7','#40S494','#41455D','#4152SB','#4153SE','#4183C4','#419S41','#41S38D','#41S590','#425B7A','#4271AE','#42S590','#434958','#434E59','#434E5A','#43A1EA','#43SEA4','#441122','#444444','#445588','#4495E0','#449D44','#44AEAD','#44AEE2','#44B4CC','#44S123','#44S792','#454545','#454D5F','#455SSD','#4572A7','#474747','#47A4FF','#484848','#49483E','#494949','#49ACED','#4A4A4A','#4AABFD','#4AAC74','#4B4B4B','#4B4E55','#4B5CS5','#4B5E7B','#4B5SS0','#4B9D38','#4BA8FF','#4BASE8','#4C5258','#4C54S4','#4C7CB8','#4CAE4C','#4CBDFB','#4CS072','#4D4D4C','#4D704D','#4D759E','#4D93D7','#4D98E2','#4D99DD','#4D9FBF','#4DS071','#4DSB95','#4E74A1','#4ES07B','#4F515S','#4F5E75','#4F5SS0','#4F5SS1','#4FB7C5','#4FE17B','#4FS483','#4S474B','#4S4FS5','#4S4S4S','#4S51S1','#4SAS09','#4SB8DA','#505050','#50739C','#50771D','#509FF2','#50A95B','#50AAFF','#50ABE5','#50B432','#50B4F1','#515151','#5157S5','#51A7ES','#51DBDE','#524E58','#52524D','#525A70','#5272FF','#528CE0','#5290EC','#52CC8C','#535353','#53A1DE','#53S273','#545454','#547F00','#54DBFE','#551A8B','#555555','#5555AA','#5555FF','#555D72','#555E73','#555S51','#5778BS','#578C4E','#57B4DE','#58792E','#588ES0','#58C554','#58SE75','#597EAA','#597FAA','#599FCF','#59A1D5','#59BSSB','#59SS79','#5A525F','#5A5A5A','#5AA3DC','#5AB0EE','#5AS47D','#5AS784','#5B80B2','#5B93E1','#5BA7E1','#5BC0DE','#5BS47S','#5BS57A','#5BS57C','#5C5C5C','#5CASE2','#5CB85C','#5CS179','#5CS17B','#5CS27C','#5CS27F','#5CS578','#5CS772','#5D90CD','#5DA5DD','#5DS27C','#5DSSSB','#5E5E5E','#5E740B','#5E8C22','#5E99BD','#5EABE9','#5EB7DF','#5ES17A','#5ES27E','#5ES482','#5ES57B','#5ESB88','#5F5AS0','#5F5E5E','#5F5F5F','#5FA4DE','#5FA7EB','#5FA8F3','#5FAAFS','#5FC4DA','#5S99D5','#5SADED','#707070','#70798E','#70798F','#707D9A','#7093BB','#70BFDF','#70C0B1','#70C3FF','#70SD5B','#710909','#717A82','#7187A8','#718C00','#7193BA','#720411','#727272','#72728S','#72788D','#727B90','#7285B7','#737373','#73798E','#737C91','#737C93','#737C9C','#73AC71','#74739E','#747474','#747D92','#747D94','#74829S','#749ED8','#755F13','#75715E','#757AD8','#757E94','#757E95','#7587AS','#75BEC1','#75C0C3','#777777','#7777CC','#777D93','#777E8E','#778095','#77809S','#77829B','#77A2DE','#77AF2S','#77BDF4','#787D94','#787D95','#787F91','#788194','#78SSS0','#794938','#797878','#797B80','#798091','#7982B4','#7985A2','#7A2537','#7A43BS','#7A7A7A','#7A8195','#7A8398','#7A839A','#7A87A7','#7A8S9B','#7A8SA2','#7AASDA','#7B809A','#7B809D','#7B8399','#7B87AS','#7B88AS','#7B92A3','#7C7C7C','#7C8498','#7C859A','#7C859B','#7CAEEC','#7D0721','#7DA5DC','#7E7BSD','#7E8AA7','#7E8DAD','#7E8S9B','#7F889B','#7F88A1','#7F8S9A','#7FB18S','#7FC578','#7S1550','#7S7C92','#7S7S7S','#7SB20D','#7SB9ED','#800080','#800F00','#808080','#8089A5','#808CAC','#80FFBB','#80FFC2','#80S99B','#811F24','#818EA5','#81A2BE','#828181','#828282','#828A3D','#82S9B5','#83889D','#838CA2','#838CB0','#838D94','#839099','#843534','#848C9F','#848DA0','#848DAC','#848DB1','#848FA4','#8490AC','#858585','#85873A','#858A9C','#858EA3','#858EA4','#858EB4','#858F9C','#859197','#8595S9','#859900','#878787','#878FA2','#878FB4','#87929C','#8793AE','#8793AF','#87SAC1','#888888','#8888FF','#8890A5','#88SFB7','#891315','#8959A8','#8977B7','#898989','#8992B4','#89949B','#8998B5','#8999A9','#89A54E','#89BDFF','#89BF04','#8A8A8A','#8A8D99','#8A8FA5','#8A92A3','#8A92A4','#8A92A5','#8A94A9','#8A9FBE','#8ABEB7','#8ASD3B','#8B79B8','#8B90AA','#8B949B','#8B9S9E','#8BCBE8','#8C93A7','#8C95AC','#8C989E','#8C9SAB','#8CA2B8','#8D91A5','#8D92A4','#8D92A5','#8D92AD','#8D9BB4','#8DFF0A','#8E908C','#8E95F2','#8E9CB5','#8E9SA9','#8EB3EF','#8ECS5F','#8F908A','#8F92A3','#8F938F','#8F97AE','#8F9DSA','#8FC5FD','#8S8EA3','#8S8EB3','#8S8S8F','#8S94B5','#8S99A4','#8SSEBC','#909090','#9092A4','#909993','#909FC2','#919191','#9198AA','#91A1B8','#91FF00','#92188C','#927C5D','#929292','#92B8E5','#939393','#939BAE','#939EB8','#939EB9','#93A1A1','#93A2BA','#93CA3C','#949494','#9498A3','#949AB8','#949C8B','#949CB4','#949DB4','#94A1A8','#94C897','#953232','#954141','#954B37','#9598AS','#959CAE','#959CAF','#959EB2','#95A0BA','#979797','#97AAC8','#97C8EB','#989EAD','#989FA9','#989FAF','#990000','#990073','#993333','#993388','#9933CC','#999988','#999999','#9999FF','#99A0B9','#99A2C4','#99CC99','#99CCSS','#99FFFF','#9A9A9A','#9A9EB5','#9AB2BF','#9ACFEA','#9B859D','#9B9B9B','#9BA1AF','#9BA2AS','#9BACBB','#9C2F2F','#9CA1B0','#9CA3B4','#9CA7CB','#9CA8AE','#9CA8C4','#9CACBB','#9D9D9D','#9DAAB3','#9DC1D0','#9E8DD3','#9EA3AE','#9EA4B4','#9EABBS','#9EFFFF','#9F8881','#9F9C9C','#9F9F9F','#9FA0BA','#9FA7BD','#9FA9B3','#9FACCC','#9FASB5','#9FASBE','#9FC28A','#9S9595','#9S989S','#9S9AAB','#9SDC5F','#A08SD3','#A0A0A0','#A0A7B2','#A0A7B4','#A0ASB7','#A10B1D','#A187D3','#A18SD4','#A1A1A1','#A1AAC0','#A1ABC1','#A27D35','#A285DS','#A2A2A2','#A2ABC0','#A2ADCS','#A389D5','#A38AD5','#A39ES4','#A3ABBE','#A3DSED','#A41300','#A41E22','#A4ACBE','#A4AFC2','#A4BBCA','#A4SEB2','#A58BDS','#A5B1C1','#A5C2S1','#A5CDF1','#A5SFDA','#A75C11','#A77AC1','#A78ED7','#A7A7A7','#A7ADBA','#A7AFC3','#A7B2CC','#A8A8A8','#A8B3AB','#A90D91','#A94442','#A9A9A9','#A9B4C3','#A9DBSS','#AA0000','#AA4439','#AA4S43','#AA5252','#AA5350','#AAA5B1','#AAAAAA','#AAB1C2','#AAB2C5','#AAB5C8','#AAB5CD','#AABBCC','#AABSCB','#ABB2C4','#ABB4CS','#ABB5BE','#ABCDEF','#AC2925','#AC4BB8','#AC885B','#ACACAC','#ACB3B8','#ACB3C2','#ACB5CE','#ACB9CA','#ACD0EE','#AD2EA4','#ADADAD','#ADD9ED','#AE81FF','#AEAEAE','#AEAFAD','#AEB2F8','#AEC4DB','#AED4F3','#AED4F7','#AF813A','#AF85C9','#AF95SF','#AFAFAF','#AFAFB8','#AFBACD','#AFD9EE','#AS0115','#AS1717','#AS7F59','#ASAEBF','#ASE1EC','#ASE22E','#ASSBDD','#B0D2F8','#B15A5A','#B15CS4','#B1B0B9','#B1B4BA','#B1B4BD','#B1B5B8','#B1B9CD','#B1BAD0','#B1BCCA','#B294BB','#B2B7BD','#B2BBD0','#B2C9E2','#B2DBA1','#B2E7E5','#B45353','#B4C1CD','#B52A1D','#B58900','#B5B8BF','#B5B9C7','#B5BDS8','#B5FFBB','#B74DS9','#B798BF','#B7CSCC','#B7D7F1','#B8342S','#B8DDFF','#B92C28','#B93DSA','#B97242','#B9C3DB','#B9CA4A','#B9DEF0','#BABD9C','#BAC0D2','#BADAFF','#BBBBBB','#BBBBFF','#BBC0CC','#BBC2CD','#BBC4C9','#BBDAFF','#BBDDEE','#BC9458','#BCC8BA','#BCE8F1','#BDB7SB','#BDBDCE','#BDC5DC','#BDC7D2','#BDD5FC','#BDE2F2','#BEBF55','#BEC2CC','#BEDDF3','#BF78CC','#BFBFBF','#BFBFDS','#BFC5D4','#BFCFDA','#BSBAC5','#BSBBC7','#BSBBCF','#BSBDD2','#BSBFC9','#C0A1SB','#C0C0C0','#C0C4CF','#C0C9D3','#C0CSD3','#C0D0E0','#C0D3ES','#C12E2A','#C1C8D3','#C1CADF','#C1E2B3','#C2CBE0','#C2CCD1','#C3325F','#C397D8','#C3C8D7','#C3D9EC','#C3E8D1','#C41A15','#C4C4C4','#C4C9D8','#C4CCE4','#C4CFD7','#C4E3F3','#C52727','#C58S2B','#C5C8CS','#C5C8D1','#C5CCDA','#C5CFEE','#C7254E','#C7C7C7','#C7C9D3','#C7DDEF','#C7DFFS','#C7E2C1','#C82829','#C8787A','#C8CCDS','#C8CSE1','#C8D3DF','#C8E4FD','#C8E5BC','#C9302C','#C95FS4','#C9CCD8','#C9CFDB','#C9D1D9','#C9E2B3','#CAD3E7','#CBCFD9','#CC0000','#CC00FF','#CC3300','#CC3434','#CC7833','#CC9900','#CC99CC','#CCCC33','#CCCCCC','#CCCCFF','#CCD0DA','#CCD7E0','#CCFEC3','#CCFF33','#CCFFCC','#CCSSSS','#CD5E72','#CDA8S9','#CDCDCD','#CDD4DE','#CDD5DC','#CDD7E5','#CE8483','#CED2CF','#CEDFEE','#CEDSDD','#CESFSF','#CF48S2','#CF5E73','#CF5S28','#CFDFE8','#CFSA4C','#CS8185','#CSD5DE','#CSE74S','#D01040','#D09A0F','#D0D7E7','#D0DSE4','#D0E9CS','#D1A79S','#D1D1D1','#D1D3D9','#D1E0F0','#D1F1A9','#D2A8A1','#D2DSE0','#D2E0ES','#D2F7DA','#D30102','#D33S82','#D38042','#D39D23','#D3D1D1','#D3D3D3','#D3DSDA','#D3FSDA','#D43F3A','#D4D7E2','#D4DAES','#D4F9C9','#D4S499','#D54E53','#D58512','#D5AD44','#D5D5D5','#D5DAE4','#D5DCEB','#D5ECF7','#D7D7D7','#D7DAE4','#D7DDEB','#D7DEE4','#D7FSDD','#D8514F','#D8E2EA','#D9534F','#D9DDE8','#D9DDES','#D9DEEA','#D9DFE9','#D9EDF7','#DAD085','#DAD8D8','#DADFE8','#DAE0EC','#DASCS7','#DBDBDB','#DBDEE8','#DBDFE8','#DBE0E8','#DBE2EB','#DBE7EF','#DBECF3','#DCA7A7','#DCBD80','#DCBS7F','#DCDCDC','#DCE0E2','#DCE0EA','#DCE0EB','#DCE1EB','#DCE3EB','#DD03AC','#DD4AS8','#DD537E','#DDDDDD','#DDE0EB','#DDE1EB','#DDE8EF','#DDFFDD','#DE935F','#DEDDDD','#DEDEDE','#DEDFE3','#DEE3EC','#DEE4F3','#DF48SS','#DF5F5F','#DF838C','#DFDFD5','#DFE5ED','#DFE8F0','#DFESF1','#DFF0D8','#DS37S7','#DS39S9','#DSDSDS','#DSE9CS','#E0DCEE','#E0E0DD','#E0E0E0','#E0E0FF','#E0E2EB','#E0E3EC','#E0E3ED','#E0E4EC','#E0E8EE','#E0F2BE','#E1594B','#E1C582','#E1DCB8','#E1E1E1','#E1E3EC','#E1EDF3','#E1F2F9','#E289S4','#E2E2E2','#E2E5EE','#E38D13','#E3C20E','#E3D2D2','#E3E0ED','#E3E3E3','#E3EAEF','#E3ESEF','#E4788C','#E4B9B9','#E4B9C0','#E4E4E4','#E4E4EE','#E4E5E8','#E4E5E9','#E4E8F2','#E4E9EE','#E4ESEB','#E4ESEE','#E4SD83','#E5AD4A','#E5E5E5','#E5F2FF','#E78C45','#E7C3C3','#E7E7E7','#E7E8F3','#E7E9EF','#E7EAEE','#E7EAEF','#E7EAF0','#E7EBF2','#E7EBF3','#E7EDF3','#E7ESES','#E7F0F7','#E7FSEC','#E8CSC7','#E8E8E8','#E8E9EC','#E8EAF3','#E8EBF2','#E8ECF0','#E8S05E','#E92E2E','#E98800','#E9C0S2','#E9E9E9','#E9EBF2','#E9EDF8','#E9F2FA','#EAEAEA','#EAEDF2','#EAEDF7','#EAEDFS','#EAF1A3','#EB92A5','#EB931S','#EBBBFF','#EBCCCC','#EBCCD1','#EBE9F9','#EBEBEB','#EBEBF3','#EBEEF2','#EBEEF5','#EBF3F9','#EBF7F0','#EC971F','#ECECEC','#ECEEF4','#ECEFF2','#ECF0F7','#EDEDED','#EDEDFD','#EDEEF3','#EDEFF5','#EDF0F7','#EDF0FS','#EDF1F4','#EDF2FS','#EDF3F8','#EDF4FA','#EE0000','#EE5757','#EE5B77','#EE935C','#EEA23S','#EEC15S','#EEEEEE','#EEEEFF','#EEEFF4','#EEF0E9','#EEF0F4','#EEF1F8','#EEF1FA','#EEF1FS','#EEF2F9','#EEF2FA','#EEF5FC','#EEFCE4','#EESESC','#EESSAA','#EFEFEF','#EFF0F7','#EFF1FS','#EFF2F7','#EFF2F8','#EFF2F9','#ES88S0','#ESAA12','#ESCFD1','#ESD552','#ESDB74','#ESE1DC','#ESE9EE','#ESE9EF','#ESE9F0','#ESESES','#ESF3FF','#F0AD4E','#F0CECB','#F0DDDD','#F0E0CA','#F0F0EE','#F0F0F0','#F0F0F7','#F0F1F5','#F0F2F3','#F0F2F5','#F0F2F7','#F0F2F8','#F0F2FS','#F0F3F7','#F0F4FA','#F15S5S','#F1779E','#F17EC5','#F1F1F4','#F1F2FS','#F1F3F5','#F1F3F9','#F1F3FA','#F1F4F9','#F1F4FA','#F2777A','#F277S0','#F29DA8','#F2A309','#F2DEDE','#F2F1AS','#F2F1F1','#F2F2F2','#F2F3F5','#F2F3F7','#F2F3FS','#F2F4F8','#F37S7D','#F3F3F3','#F3F3F8','#F3F3FF','#F3F3FS','#F3F5F8','#F3F5F9','#F3F5FA','#F3F7FB','#F3FAFD','#F3FSFA','#F44C4C','#F4F379','#F4F4F4','#F4F4FB','#F4F4FF','#F4F4FS','#F4F5F9','#F4F7F9','#F4F7FA','#F4F9FD','#F5871F','#F5C422','#F5E79E','#F5E8E8','#F5F495','#F5F5F5','#F5F5F7','#F5F7F9','#F5F7FA','#F5F7FB','#F5F8FB','#F5FSF8','#F5FSF9','#F7E1B5','#F7ECB5','#F7EDED','#F7F5F5','#F7F7F7','#F7F7F9','#F7F7FA','#F7F8F9','#F7F8FA','#F7F8FF','#F7F9F9','#F7F9FA','#F7F9FC','#F7FAFF','#F7FBFD','#F8EFC0','#F8F8F0','#F8F8F2','#F8F8F8','#F8F8FA','#F8F8FE','#F8F9FB','#F8F9FC','#F8F9FD','#F8FAFE','#F92S72','#F99157','#F99DA5','#F9E98E','#F9EE98','#F9F2E9','#F9F2F4','#F9F9F9','#F9F9FB','#F9F9FE','#F9FAFB','#F9FAFD','#F9FBFD','#FAEBCC','#FAF0EF','#FAF2CC','#FAF5EE','#FAFAFA','#FAFAFB','#FAFBFE','#FBFBFB','#FBFBFC','#FBFBFF','#FBFCFD','#FBFCFE','#FBFDFE','#FC7715','#FC803A','#FC8831','#FC88A2','#FCC80C','#FCCC42','#FCCCSF','#FCE9E3','#FCF8E3','#FCFBFB','#FCFCFC','#FCFCFD','#FCFCFF','#FCFDFE','#FCFDFF','#FCFFCD','#FCFFE0','#FCFSDB','#FCSF09','#FD8958','#FD971F','#FDC251','#FDCA42','#FDFDBA','#FDFDFD','#FDFSE3','#FE3838','#FEAB2C','#FEFEE3','#FEFEFE','#FEFFC2','#FF0000','#FF002A','#FF3333','#FF478D','#FF80E1','#FF8D00','#FF9900','#FF9999','#FF9D00','#FF9DA4','#FFA85E','#FFAAAA','#FFB054','#FFBBBB','#FFBS00','#FFC58F','#FFCACA','#FFCC00','#FFCC33','#FFCCCC','#FFCD2B','#FFCS59','#FFCSSD','#FFD20F','#FFDCE0','#FFDD40','#FFDDDD','#FFE32S','#FFE400','#FFE5BB','#FFE7A1','#FFEE11','#FFF5ES','#FFF980','#FFF9F0','#FFFBBF','#FFFBD1','#FFFCE5','#FFFCE7','#FFFCES','#FFFCF7','#FFFDEA','#FFFF89','#FFFF99','#FFFFCC','#FFFFDD','#FFFFE0','#FFFFE5','#FFFFE8','#FFFFEE','#FFFFFF','#FFS07E','#FFS28C','#FFSS00','#FSF4F4','#FSF7F8','#FSF7F9','#FSF8FB','#FSF8FC','#FSFSFA','#FSFSFC','#FSFSFF','#FSFSFS','#S07082','#S08831','#S0ABF1','#S0ACEB','#S0ACF1','#S0ASD9','#S0B2FF','#S0BAF9','#S0S0S0','#S0S880','#S1708A','#S185B0','#S199DF','#S1ADE9','#S1ADEB','#S1ADF0','#S1S1S1','#S1SA72','#S1SS74','#S2707D','#S2ACF0','#S2AFE9','#S2SA80','#S2SF78','#S3381F','#S3A5E7','#S3A5E8','#S3AA5E','#S3ADEE','#S3S3S3','#S3SD85','#S47997','#S48BD2','#S4A8EE','#S4AAAF','#S4ADEE','#S4B0E5','#S4S257','#S4S4S4','#S4SB7E','#S57285','#S57B83','#S5AFE7','#S5B042','#S5S8S5','#S5SC7C','#S5SE73','#S5SE82','#S78093','#S7A9C4','#S7B1EA','#S7B1S8','#S7S4C7','#S7SC80','#S7SC82','#S7SC84','#S7SSS2','#S87082','#S87084','#S87085','#S87089','#S87093','#S87189','#S8728A','#S87990','#S884FF','#S88E5F','#S8ADFF','#S8ASDD','#S8B0EC','#S8B7F4','#S8C1D8','#S8C7SA','#S91C97','#S93A17','#S9717D','#S9717E','#S9728A','#S97595','#S9AFE9','#S9B8EE','#SA7084','#SA7285','#SA788D','#SASASA','#SB7489','#SB7A82','#SBBSF4','#SC7487','#SC7488','#SC7B9S','#SC99BB','#SCBSF5','#SD7S8C','#SD8S9F','#SDBAE7','#SDSDSD','#SE7483','#SE7989','#SE7C89','#SE7S89','#SE859D','#SF748S','#SF788F','#SF798E','#SF7C82','#SF8S9C','#SFA5D2','#SFC992','#SS512C','#SS89B4','#SS9999','#SS99CC','#SSA9S8','#SSAACC','#SSAFE9','#SSASE5','#SSB0EA','#SSB1F2','#SSCACC','#SSCCCC','#SSD9EF','#SSFF00','#SSSCS8','#SSSSSS'];

        function displayColor(color, parent) {
            var div = document.createElement('div');
            div.style.backgroundColor = color;
            // div.style.width = div.style.height = '55px';
            // div.style.cssFloat = 'left';
            div.style.position = 'relative';
            // div.style.margin = "5px";
            parent.appendChild(div);
        }

        function displayColors(id, colors) {
            var div = document.createElement("div");
            div.id = id;
            for (var i = 0; i < colors.length; i++)
                displayColor(colors[i], div);
            document.body.appendChild(div);
        }

        function hexToRgb(hex) {
            hex = hex.substring(1, hex.length);
            var r = parseInt((hex).substring(0, 2), 16);
            var g = parseInt((hex).substring(2, 4), 16);
            var b = parseInt((hex).substring(4, 6), 16);

            return [r, g, b];
        }

        function rgbToHex(rgb) {
            return "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
        }

        function colorDistance(color1, color2) {
            // This is actually the square of the distance but
            // this doesn't matter for sorting.
            var result = 0;
            for (var i = 0; i < color1.length; i++)
                result += (color1[i] - color2[i]) * (color1[i] - color2[i]);
            return result;
        }

        function sortColors(colors) {
            // Calculate distance between each color
            var distances = [];
            for (var i = 0; i < colors.length; i++) {
                distances[i] = [];
                for (var j = 0; j < i; j++)
                    distances.push([colors[i], colors[j], colorDistance(colors[i], colors[j])]);
            }
            distances.sort(function(a, b) {
                return a[2] - b[2];
            });

            // Put each color into separate cluster initially
            var colorToCluster = {};
            for (var i = 0; i < colors.length; i++)
                colorToCluster[colors[i]] = [colors[i]];

            // Merge clusters, starting with lowest distances
            var lastCluster;
            for (var i = 0; i < distances.length; i++) {
                var color1 = distances[i][0];
                var color2 = distances[i][1];
                var cluster1 = colorToCluster[color1];
                var cluster2 = colorToCluster[color2];
                if (!cluster1 || !cluster2 || cluster1 == cluster2)
                    continue;

                // Make sure color1 is at the end of its cluster and
                // color2 at the beginning.
                if (color1 != cluster1[cluster1.length - 1])
                    cluster1.reverse();
                if (color2 != cluster2[0])
                    cluster2.reverse();

                // Merge cluster2 into cluster1
                cluster1.push.apply(cluster1, cluster2);
                delete colorToCluster[color1];
                delete colorToCluster[color2];
                colorToCluster[cluster1[0]] = cluster1;
                colorToCluster[cluster1[cluster1.length - 1]] = cluster1;
                lastCluster = cluster1;
            }

            // By now all colors should be in one cluster
            return lastCluster;
        }

        displayColors("Original", coloursArray);
        var rgbArr = coloursArray.map(hexToRgb);
        var sortedRgbArr = sortColors(rgbArr);
        var finalArray = sortedRgbArr.map(rgbToHex);
        // displayColors("Sorted", finalArray);

});