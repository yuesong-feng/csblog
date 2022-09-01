import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'


export default defineUserConfig({
    lang: 'zh-CN',
    title: 'csblog',
    description: '一站式秃头孵化基地',
    base: "/",
    plugins: [
        backToTopPlugin(),
        prismjsPlugin({}),
    ],
    theme: defaultTheme({
        navbar: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/yuesong-feng'
            }
        ],
        sidebar:
            [
                {
                    text: '30天自制C++服务器',
                    // link: '/30dayMakeCppServer/',
                    collapsible: true,
                    children: [
                        '/30dayMakeCppServer/',
                        '/30dayMakeCppServer/day01-从一个最简单的socket开始',
                        '/30dayMakeCppServer/day02-不要放过任何一个错误',
                        '/30dayMakeCppServer/day03-高并发还得用epoll',
                        '/30dayMakeCppServer/day04-来看看我们的第一个类',
                        '/30dayMakeCppServer/day05-epoll高级用法-Channel登场',
                        '/30dayMakeCppServer/day06-服务器与事件驱动核心类登场',
                        '/30dayMakeCppServer/day07-为我们的服务器添加一个Acceptor',
                        '/30dayMakeCppServer/day08-一切皆是类，连TCP连接也不例外',
                        '/30dayMakeCppServer/day09-缓冲区-大作用',
                        '/30dayMakeCppServer/day10-加入线程池到服务器',
                        '/30dayMakeCppServer/day11-完善线程池，加入一个简单的测试程序',
                        '/30dayMakeCppServer/day12-将服务器改写为主从Reactor多线程模式',
                        '/30dayMakeCppServer/day13-C++工程化、代码分析、性能优化',
                        '/30dayMakeCppServer/day14-支持业务逻辑自定义、完善Connection类',
                        '/30dayMakeCppServer/day15-macOS、FreeBSD支持',
                    ],
                },
                {
                    text: '数据库内核开发笔记',
                    // link: '/dbnotes/',
                    collapsible: true,
                    children: [
                        '/dbnotes/页大小——数据库文件IO的基本单位',
                        '/dbnotes/PostgreSQL表和元组的组织方式',
                        '/dbnotes/PostgreSQL内存上下文',
                        '/dbnotes/PostgreSQL空闲空间映射表(FSM)',
                        '/dbnotes/PostgreSQL可见性映射表(VM)和VACUUM操作',
                        '/dbnotes/PostgreSQL虚拟文件描述符(VFD)',
                        '/dbnotes/PostgreSQL插件开发',
                        '/dbnotes/PostgreSQL插入大量数据：pg_testgen插件',
                        '/dbnotes/行存与列存——数据表的存储方式',
                        '/dbnotes/openGauss列存数据压缩实验',
                        '/dbnotes/openGauss列存数据压缩源码分析',
                        '/dbnotes/PostgreSQL文本搜索（一）——简介',
                        '/dbnotes/PostgreSQL文本搜索（二）——表和索引',
                        '/dbnotes/PostgreSQL文本搜索（五）——词法分析器',
                        '/dbnotes/PostgreSQL文本搜索（六）——词典',
                        '/dbnotes/PostgreSQL文本搜索（七）——自定义配置',
                        // '/dbnotes/PostgreSQL pg_trgm',
                        '/dbnotes/PostgreSQL自定义文本检索分词规则',
                    ],
                },
                {
                    text: '小林coding',
                    link: 'https://xiaolincoding.com'
                },
                {
                    text: 'labuladong的算法网站',
                    link: 'https://labuladong.gitee.io/algo/'
                },
                {
                    text: '代码随想录',
                    link: 'https://www.programmercarl.com'
                },
                {
                    text: 'CodeTop',
                    link: 'https://codetop.cc/home'
                },
                {
                    text: 'OI WIKI',
                    link: 'https://oi-wiki.org'
                },
                {
                    text: '阿秀的学习笔记',
                    link: 'https://interviewguide.cn'
                },
                {
                    text: 'CS-Notes',
                    link: 'http://www.cyc2018.xyz'
                },
                {
                    text: 'C/C++ 技术面试基础知识总结',
                    link: 'https://interview.huihut.com'
                },
                {
                    text: 'cppreference',
                    link: 'https://zh.cppreference.com/w/首页'
                },
                {
                    text: '现代C++教程',
                    link: 'https://changkun.de/modern-cpp/'
                },
                {
                    text: '南京大学操作系统：设计与实现',
                    link: 'http://jyywiki.cn/OS/2022/'
                },
                {
                    text: 'CMU 15-445/645',
                    link: 'https://15445.courses.cs.cmu.edu/fall2022/'
                },
                {
                    text: 'MIT 6.828',
                    link: 'https://pdos.csail.mit.edu/6.828/2022/index.html'
                },
                {
                    text: 'CS 144',
                    link: 'https://cs144.github.io'
                },
                {
                    text: '(需要翻墙)The Internals of PostgreSQL',
                    link: 'http://www.interdb.jp/pg/index.html'
                }
            ]
    })
})
