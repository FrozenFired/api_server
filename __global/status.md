标准返回值：

|  序号	|   值	|status	| data	| 说明
|   1	|  200	|  200	| true	| 成功相应
|   2	|  200	|  201	| true	| 该请求已成功，并因此创建了一个新的资源。这通常是在POST请求，或是某些PUT请求之后返回的响应
|   3	|  200	|  205	| false	| 服务器成功处理了请求，但没有返回任何内容, 比如成功删除数据, 之前已经创建
|   4	|  400	|  400	| false	| 请求参数有误
|   5	|  401	|  401	| false	| 当前请求需要用户验证
|   6	|  400	|  403	| false	| 权限不足
|   7	|  400	|  405	| false	| 请求行中指定的请求方法不能被用于请求相应的资源
|   8	|  400	|  406	| false	| 请求的资源的内容特性无法满足请求头中的条件，因而无法生成响应实体
|   9	|  500	|  500	| false	| 服务器遇到了不知道如何处理的情况