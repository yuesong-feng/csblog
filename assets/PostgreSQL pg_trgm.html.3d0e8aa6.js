import{_ as t,o as e,c as d,a as o}from"../app.dbff23ac.mjs";const r={},a=o('<h1 id="postgresql-pg-trgm" tabindex="-1"><a class="header-anchor" href="#postgresql-pg-trgm" aria-hidden="true">#</a> PostgreSQL pg_trgm</h1><p>pg_trgm\u6A21\u5757\u63D0\u4F9B\u4E86\u51FD\u6570\u548C\u8FD0\u7B97\u7B26\uFF0C\u7528\u4E8E\u786E\u5B9A\u57FA\u4E8E\u4E09\u5143\u7EC4\u5339\u914D\u7684\u6587\u672C\u76F8\u4F3C\u5EA6\uFF0C\u4EE5\u53CA\u652F\u6301\u5FEB\u901F\u641C\u7D22\u76F8\u4F3C\u5B57\u7B26\u4E32\u7684\u7D22\u5F15\u8FD0\u7B97\u7B26\u3002</p><p>\u8FD9\u4E2A\u6A21\u5757\u88AB\u8BA4\u4E3A\u662F &quot;\u53D7\u4FE1\u4EFB\u7684&quot;\uFF0C\u5B83\u53EF\u4EE5\u7531\u5728\u5F53\u524D\u6570\u636E\u5E93\u4E0A\u6709CREATE\u6743\u9650\u7684\u975E\u8D85\u7EA7\u7528\u6237\u6765\u5B89\u88C5\u3002</p><h2 id="\u4E09\u5143\u7EC4\u7684\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u4E09\u5143\u7EC4\u7684\u6982\u5FF5" aria-hidden="true">#</a> \u4E09\u5143\u7EC4\u7684\u6982\u5FF5</h2><p>\u4E09\u5143\u7EC4\u662F\u6307\u4ECE\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u62BD\u53D6\u7684\u4E09\u4E2A\u8FDE\u7EED\u5B57\u7B26\u7EC4\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8BA1\u7B97\u4E24\u4E2A\u5B57\u7B26\u4E32\u5171\u4EAB\u7684\u4E09\u5143\u7EC4\u6570\u91CF\u4ECE\u800C\u8861\u91CF\u5B83\u4EEC\u7684\u76F8\u4F3C\u5EA6\u3002\u8FD9\u4E2A\u7B80\u5355\u7684\u60F3\u6CD5\u5BF9\u4E8E\u6D4B\u91CF\u8BB8\u591A\u81EA\u7136\u8BED\u8A00\u4E2D\u7684\u5355\u8BCD\u7684\u76F8\u4F3C\u5EA6\u975E\u5E38\u6709\u6548\u3002</p><blockquote><p>pg_trgm\u5728\u4ECE\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u63D0\u53D6\u4E09\u5143\u7EC4\u65F6\uFF0C\u5FFD\u7565\u4E86\u975Eword\u7C7B\u578B\u7684\u5B57\u7B26\uFF08\u4E0D\u7531\u5B57\u6BCD\u548C\u6570\u5B57\u7EC4\u6210\u7684\u5B57\u7B26\uFF09\u3002\u5728\u786E\u5B9A\u5B57\u7B26\u4E32\u4E2D\u5305\u542B\u7684\u4E09\u5143\u7EC4\u96C6\u5408\u65F6\uFF0C\u6BCF\u4E2A\u8BCD\u90FD\u88AB\u8BA4\u4E3A\u6709\u4E24\u4E2A\u7A7A\u683C\u524D\u7F00\u548C\u4E00\u4E2A\u7A7A\u683C\u540E\u7F00\u3002\u4F8B\u5982\uFF0C\u5B57\u7B26\u4E32<code>cat</code>\u4E2D\u7684\u4E09\u5143\u7EC4\u662F<code>c</code>\u3001<code>ca</code>\u3001<code>cat</code>\u548C<code>at</code>\u3002\u5B57\u7B26\u4E32<code>foo|bar</code>\u4E2D\u7684\u4E09\u5143\u7EC4\u662F<code>f</code>\u3001<code>fo</code>\u3001<code>foo</code>\u3001<code>oo</code>\u3001<code>b</code>\u3001<code>ba</code>\u548C<code>ar</code>\u3002</p></blockquote><h2 id="\u51FD\u6570\u548C\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u548C\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u51FD\u6570\u548C\u8FD0\u7B97\u7B26</h2><p>pg_trgm\u6A21\u5757\u63D0\u4F9B\u7684\u51FD\u6570\u548C\u8FD0\u7B97\u7B26\u89C1\u4E0B\u9762\u4E24\u4E2A\u8868\uFF1A</p><p>\u8868\u4E00\uFF1Apg_trgm\u51FD\u6570\uFF1A</p><table><thead><tr><th>\u51FD\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>similarity ( text, text ) \u2192 real</td><td>\u8FD4\u56DE\u4E00\u4E2A\u6570\u5B57\u8868\u793A\u4E24\u4E2A\u53C2\u6570\u7684\u76F8\u4F3C\u7A0B\u5EA6\u3002\u7ED3\u679C\u7684\u8303\u56F4\u662F0\uFF08\u8868\u793A\u4E24\u4E2A\u5B57\u7B26\u4E32\u5B8C\u5168\u4E0D\u76F8\u4F3C\uFF09\u52301\uFF08\u8868\u793A\u4E24\u4E2A\u5B57\u7B26\u4E32\u5B8C\u5168\u76F8\u540C\uFF09\u3002</td></tr><tr><td>show_trgm ( text ) \u2192 text[]</td><td>\u8FD4\u56DE\u7ED9\u5B9A\u5B57\u7B26\u4E32\u4E2D\u6240\u6709\u4E09\u5143\u7EC4\u7684\u6570\u7EC4\u3002(\u5B9E\u9645\u4E0A\u9664\u4E86\u8C03\u8BD5\u5F88\u5C11\u6709\u7528\u3002)</td></tr><tr><td>word_similarity ( text, text ) \u2192 real</td><td>\u8FD4\u56DE\u4E00\u4E2A\u6570\u5B57\uFF0C\u8868\u793A\u7B2C\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u7684\u4E09\u5143\u7EC4\u96C6\u4E0E\u7B2C\u4E8C\u4E2A\u5B57\u7B26\u4E32\u4E2D\u4E09\u5143\u7EC4\u7684\u6709\u5E8F\u96C6\u4E2D\u4EFB\u4F55\u8FDE\u7EED\u90E8\u5206\u7684\u6700\u5927\u76F8\u4F3C\u5EA6\u3002\u8BE6\u60C5\u8BF7\u89C1\u4E0B\u9762\u7684\u89E3\u91CA\u3002</td></tr><tr><td>strict_word_similarity ( text, text ) \u2192 real</td><td>\u4E0Eword_similarity\u76F8\u540C\uFF0C\u4F46\u5F3A\u5236\u8981\u6C42\u8FDE\u7EED\u90E8\u5206\u7684\u8FB9\u754C\u4E0E\u5355\u8BCD\u8FB9\u754C\u76F8\u5339\u914D\u3002\u7531\u4E8E\u6211\u4EEC\u6CA1\u6709\u8DE8\u5B57\u4E09\u89D2\uFF0C\u8FD9\u4E2A\u51FD\u6570\u5B9E\u9645\u4E0A\u662F\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u5B57\u7B26\u4E32\u548C\u7B2C\u4E8C\u4E2A\u5B57\u7B26\u4E32\u7684\u4EFB\u4F55\u8FDE\u7EED\u7684\u5355\u8BCD\u8303\u56F4\u4E4B\u95F4\u7684\u6700\u5927\u76F8\u4F3C\u5EA6\u3002</td></tr></tbody></table><p>|show_limit () \u2192 real| |set_limit ( real ) \u2192 real|</p>',11),c=[a];function i(s,h){return e(),d("div",null,c)}const l=t(r,[["render",i],["__file","PostgreSQL pg_trgm.html.vue"]]);export{l as default};