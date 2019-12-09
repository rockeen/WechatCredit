/**
 * 此文件管理项目所有接口
 */
import {get, post, put, del} from './network';

/**
 * 服务器根域名
 * 试玩更多接口看这里
 * http://jsonplaceholder.typicode.com/
 * @type {string}
 */
export const API_ROOT = 'https://api.11315.com/webApp';


/**
 * 获取图片
 */
export const getPhoto = (id) => get(`${API_ROOT}/photos/${id}`);


/**
 * 获取公司数据
 */
export const getCompanyCredit = (id) => get(`${API_ROOT}/index3/${id}`);
