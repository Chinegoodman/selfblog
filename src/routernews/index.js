import contents from '../views/contents'
export default [
    {
      path:'/',
      redirect:'/home/contents'
    },
    // 首页
    {
        name:'contents',
        path:'/home/contents',
        component:resolve=>require(['../views/contents.vue'],resolve),

        meta:{
            name:'contents'
        }
    },
    // 发布新内容
    {
        name:'makenewcontent',
        path:'/home/makenewcontent',
        component:()=>import('../views/makenewcontent.vue'),

        meta:{
            name:'makenewcontent'
        }
    },
    // 内容详情
    {
        path:'/home/contentdetails/:id',
        component:()=>import('../views/contentdetails.vue'),

        meta:{
            name:'contentdetails'
        }
    },
    // {
    //     path: "contents", //组界面
    //     component: contents =>
    //         require([
    //             "../views/contents.vue"
    //         ], resolve)
    // },
]