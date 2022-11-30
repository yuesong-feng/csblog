# PostgreSQL查询编译

数据库查询编译将SQL语言表达的查询转化成数据库能够实际执行的操作，这是关系型数据库最重要、最核心的任务。SQL引擎一般拥有查询编译和查询执行两个阶段，前者将SQL语句编译为数据库中最优的执行计划，而后者采用最优的算法执行此计划。

> 下文的代码不完全，仅保留了关键代码，请结合源码查看！

PostgreSQL会为每一个连接fork一个postgres进程，主函数`PostgresMain`在`backend/tcop/postgres.c`文件中，所有的查询流程都在此函数中完成。初始化完成后，函数会进入到一个for循环，其中关键代码如下：

```c
// 读取客户端输入
firstchar = ReadCommand(&input_message);

// 根据不同的命令进行不同的处理
switch (firstchar)
		{
			case 'Q':			/* 简单查询 */
				{
					const char *query_string;

					query_string = pq_getmsgstring(&input_message);
					pq_getmsgend(&input_message);

					exec_simple_query(query_string);
				}
				break;
		}
```

对于绝大部分查询语句，都会执行`exec_simple_query`函数，关键代码如下：

```c
parsetree_list = pg_parse_query(query_string);

foreach(parsetree_item, parsetree_list)
	{
    querytree_list = pg_analyze_and_rewrite(parsetree, query_string,
												NULL, 0);

		plantree_list = pg_plan_queries(querytree_list,
										CURSOR_OPT_PARALLEL_OK, NULL);
    
    portal = CreatePortal("", true, true);

    PortalStart(portal, NULL, 0, InvalidSnapshot);

    (void) PortalRun(portal,
						 FETCH_ALL,
						 isTopLevel,
						 receiver,
						 receiver,
						 completionTag);
    
		PortalDrop(portal, false);
  }
```

`pg_parse_query`将SQL查询解析成分析树，然后调用`pg_analyze_and_rewrite`函数进行查询分析和重写，生成查询树，然后调用`pg_plan_queries`函数根据查询树生成一个执行计划，最后将执行计划创建为一个portal并执行。