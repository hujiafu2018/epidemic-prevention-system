//测试的接口地址
var hisName = "出入登记系统"

var host="http://gbdatatest.mx5918.com/index";
var baseUrl="http://gbdatatest.mx5918.com/"
var baseUrlMode="http://gbdatatest.mx5918.com"

//四合村
// var host="http://sihecun.mx5918.com/index";
// var baseUrl="http://sihecun.mx5918.com/"
// var baseUrlMode="http://sihecun.mx5918.com"

/*方法名称*/
var in_submit_fun="/index/entry";//进入登记
var out_submit_fun="/index/out";//出去登记
var file_fun="/index/upload";//上传图片
var sacan_file_fun="/index/card";//识别身份证
var shop_index_fun="/shop/index";//商铺登记
var business_index_fun="/business/index";//企业登记
var index_license_fun="/index/license";//识别营业执照
var business_community_fun="/business/community";//社区
var index_business_search_fun="/business/search";//查询企业或者商铺信息
var index_business_edit_fun="/business/edit";//企业编辑
var index_shop_edit_fun="/shop/edit";//商铺编辑
var index_Land_Contract_fun="/Land_Contract";//添加承包合同
var Land_Contract_search_fun="/Land_Contract/search";//搜索合同
var Land_Contract_edit_fun="/Land_Contract/edit";//编辑合同
var Land_Contract_editSave_fun="/Land_Contract/editSave";//保存编辑合同
var GetBanners="/index/getBanner";//banner
var NewContract="/contract/addContract";//新建合同
var SearchContract="/contract/searchContract";//搜索合同
var GetContractInfo="/contract/getContractInfo";//合同详情
var EditContract="/contract/editContract";//编辑合同
var AddSeals="/seal/addSeal";//添加盖章

//调取接口方法
/**
 * 注意：transport为get的时候postData传空字符串,getData参数放在这里面，反之同理（transport为post的时候getData传空字符串,postData参数放在这里面）
 * @param {Object} transport   post获取get
 * @param {Object} method      方法名
 * @param {Object} postData    post传的参数
 * @param {Object} getData
 * @param {Object} callback
 */

function sendAjax(api,data,callback) {
    /*接口地址*/
    $.ajax({
        url: host+api,
        type: "POST",
        dataType: "json",
        data:data,
        // contentType:"application/x-www-form-urlencoded",
        // enctype:"multipart/form-data",
        success: function(res) {
            callback(JSON.parse(res))//正式
            // callback(res)//测试
        },
		error:function(err){
			if(api==NewContract||api==EditContract||api==AddSeals){
				vant.Toast("请求超时")
			}
		}
    })
};

















































