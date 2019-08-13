# 基于angular cli 、ng-alain、 ng-zorro的后台管理系统

本项目为个人练习angular cli搭建,仅供参考学习。
## 准备工作
###安装 angular cli环境
  `
  npm install @angular/cli -g
  `
##安装 ng-zorro 依赖
  `
  npm install ng-zorro-antd -g
  `
## 开始构建
### 创建项目
  `
  ng new PROJECT-NAME
  `  
  `
  cd PROJECT-NAME
  `  
  `
  ng add ng-zorro-antd
  `  
  `
  语言包选择zh_CN,css选择less
  `
### 运行项目  
  `
    git clone https://github.com/codersw/ng-cms
  `  
  `
   ng s --proxy-config proxy.config.json --port 4123 --host 192.168.4.162 --open
  `  
  `
  --proxy-config // 代理配置默认不开启代理
  `  
  `
  --port // 端口号默认随机
  `  
  `
  --host // 本机ip默认localhost
  `  
  `
  --open // 开启默认浏览器默认不开启
  `  
## 开发指令

  `
  ng g m [保存位置]/modelName  //创建模块  
  `  
  `
  ng g c [保存位置]/componentName //创建组件  
  `  
  `
  ng g s [保存位置]/serviceName //创建服务
  `  
  `
  ng g pipe [保存位置]/pipeName //创建通道
  `  
  `
  ng g m [保存位置]/modelName --routing //创建带有路由的模块
  `  
  `
   缩写含义 serve=s build = b generate = g  component = c module = m  service = s  
  `
## 项目结构

> * service  项目所有服务
> * model    项目所有实体
> * layout   项目通用模版
> * routes   项目主体内容
> * shared   项目公用引用
> * styles   项目通用样式
> * assets   项目静态资源
> * environments 环境参数

## 项目部署
### 打包
`
ng b --prod --base-href ./ --output-hashing=none  
`  
`
--prod //生产环境
`  
`
--base-href //index页面引入js的路径前缀
`  
`
--output-hashing //编译后是否生成hash文件名字
`  
`
打包完成将dist目录下打包完的文件部署在服务器就可以了
`
