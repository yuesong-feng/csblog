import{_ as n,o as s,c as a,a as e}from"../app.dbff23ac.mjs";const t={},c=e(`<h1 id="vfd\u2014\u2014\u865A\u62DF\u6587\u4EF6\u63CF\u8FF0\u7B26" tabindex="-1"><a class="header-anchor" href="#vfd\u2014\u2014\u865A\u62DF\u6587\u4EF6\u63CF\u8FF0\u7B26" aria-hidden="true">#</a> VFD\u2014\u2014\u865A\u62DF\u6587\u4EF6\u63CF\u8FF0\u7B26</h1><p>\u5728\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\uFF0C\u6BCF\u5F53\u4E00\u4E2A\u8FDB\u7A0B\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\uFF0C\u7CFB\u7EDF\u5C31\u4F1A\u4E3A\u8BE5\u6587\u4EF6\u5206\u914D\u4E00\u4E2A\u552F\u4E00\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\uFF0C\u5728Linux\u7CFB\u7EDF\u4E2D\u662F\u4E00\u4E2A<code>int</code>\u7C7B\u578B\u7684\u503C\u3002\u6BCF\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\u90FD\u4F1A\u5BF9\u4E00\u4E2A\u8FDB\u7A0B\u80FD\u6253\u5F00\u7684\u6587\u4EF6\u6570\u52A0\u4EE5\u9650\u5236\uFF0C\u7528<code>ulimit -n</code>\u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u8FDB\u7A0B\u80FD\u6253\u5F00\u7684\u6700\u5927\u6587\u4EF6\u6570\u3002\u5BF9\u4E8E\u4E00\u4E2A\u6570\u636E\u5E93\u7CFB\u7EDF\uFF0C\u7CFB\u7EDF\u5143\u6570\u636E\u548C\u7528\u6237\u6570\u636E\u90FD\u53EF\u80FD\u4FDD\u5B58\u5728\u8BB8\u591A\u4E0D\u540C\u6587\u4EF6\u5F53\u4E2D\uFF0C\u800C\u4E14\u5E38\u5E38\u4F1A\u5BF9\u5927\u8868\u8FDB\u884C\u6392\u5E8F\u3001hash join\u7B49\u64CD\u4F5C\uFF0C\u9700\u8981\u7ECF\u5E38\u6253\u5F00\u5927\u91CF\u6587\u4EF6\uFF0C\u5982\u679C\u8D85\u8FC7\u4E86\u64CD\u4F5C\u7CFB\u7EDF\u7684\u9650\u5236\uFF0C\u5C31\u4F1A\u51FA\u9519\u6216\u963B\u585E\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0CPostgreSQL\u4F7F\u7528\u4E86\u865A\u62DF\u6587\u4EF6\u63CF\u8FF0\u7B26\uFF08VFD\uFF09\u673A\u5236\u3002</p><p>VFD\u7684\u539F\u7406\u7C7B\u4F3C\u4E8E\u8FDB\u7A0B\u6C60\u3001\u5185\u5B58\u6C60\u7B49\u6C60\u5316\u6280\u672F\uFF0C\u5F53\u8FDB\u7A0B\u7533\u8BF7\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\u65F6\uFF0C\u603B\u80FD\u5206\u914D\u4E00\u4E2A\u865A\u62DF\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\uFF0C\u662F\u771F\u5B9E\u6587\u4EF6\u63CF\u8FF0\u7B26\u7684\u4E00\u4E2A\u4E0A\u5C42\u5C01\u88C5\u3002\u4E0A\u5C42\u7CFB\u7EDF\u5BF9\u6587\u4EF6\u8FDB\u884C\u64CD\u4F5C\u65F6\uFF0C\u53EA\u9700\u8981\u4F7F\u7528VFD\u5373\u53EF\uFF0C\u7531VFD\u7BA1\u7406\u5668\u8F6C\u5316\u4E3A\u5BF9\u5B9E\u9645\u6587\u4EF6\u63CF\u8FF0\u7B26\u7684\u64CD\u4F5C\u3002VFD\u4F7F\u7528LRU\uFF08\u6700\u8FD1\u6700\u5C11\u4F7F\u7528\uFF09\u6C60\u6765\u7BA1\u7406\u6240\u6709\u5DF2\u7ECF\u6253\u5F00\u6587\u4EF6\uFF0C\u5F53\u8FDB\u7A0B\u6253\u5F00\u7684\u6587\u4EF6\u4E2A\u8D85\u8FC7\u64CD\u4F5C\u7CFB\u7EDF\u9650\u5236\u65F6\uFF0C\u4E5F\u53EF\u4EE5\u7533\u8BF7\u4E00\u4E2A\u65B0\u7684VFD\uFF0C\u4ECELRU\u94FE\u8868\u4E2D\u66FF\u6362\u6700\u957F\u65F6\u95F4\u672A\u4F7F\u7528\u7684VFD\u5E76\u5173\u95ED\u76F8\u5E94\u7684\u5B9E\u9645\u6587\u4EF6\u63CF\u8FF0\u7B26\u3002VFD\u4E5F\u4F1A\u7BA1\u7406\u4E00\u4E2A\u7A7A\u95F2VFD\u94FE\u8868\uFF0C\u65B9\u4FBF\u83B7\u53D6\u5F53\u524D\u7A7A\u95F2\u7684VFD\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">vfd</span>
<span class="token punctuation">{</span>
 <span class="token keyword">int</span>   fd<span class="token punctuation">;</span>    <span class="token comment">// \u5F53\u524D\u6587\u4EF6\u63CF\u8FF0\u7B26</span>
 <span class="token keyword">unsigned</span> <span class="token keyword">short</span> fdstate<span class="token punctuation">;</span>  <span class="token comment">// \u5F53\u524DVFD\u7684\u72B6\u6001</span>
 ResourceOwner resowner<span class="token punctuation">;</span>  <span class="token comment">// \u62E5\u6709\u8005</span>
 File  nextFree<span class="token punctuation">;</span>  <span class="token comment">// \u5728\u7A7A\u95F2\u94FE\u8868\u4E2D\u8868\u793A\u4E0B\u4E00\u4E2A\u7A7A\u95F2\u7684VFD</span>
 File  lruMoreRecently<span class="token punctuation">;</span> <span class="token comment">// LRU\u94FE\u8868\u4E2D\u66F4\u8FD1\u88AB\u4F7F\u7528\u7684</span>
 File  lruLessRecently<span class="token punctuation">;</span> <span class="token comment">// LRU\u94FE\u8868\u4E2D\u66F4\u8FDC\u88AB\u4F7F\u7528\u7684</span>
 <span class="token class-name">off_t</span>  fileSize<span class="token punctuation">;</span>  <span class="token comment">// \u5F53\u524D\u6587\u4EF6\u5927\u5C0F</span>
 <span class="token keyword">char</span>    <span class="token operator">*</span>fileName<span class="token punctuation">;</span>  <span class="token comment">// \u5F53\u524D\u6587\u4EF6\u540D</span>
 <span class="token keyword">int</span>   fileFlags<span class="token punctuation">;</span>  <span class="token comment">// \u6253\u5F00\u6587\u4EF6\u65F6open()\u51FD\u6570\u7684flags</span>
 <span class="token class-name">mode_t</span>  fileMode<span class="token punctuation">;</span>  <span class="token comment">// \u6253\u5F00\u6587\u4EF6\u7684\u6A21\u5F0F</span>
<span class="token punctuation">}</span> Vfd<span class="token punctuation">;</span>

<span class="token keyword">static</span> Vfd <span class="token operator">*</span>VfdCache<span class="token punctuation">;</span>     <span class="token comment">// VFD\u6570\u7EC4\u7684\u6307\u9488</span>
<span class="token keyword">static</span> Size SizeVfdCache <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// VFD\u6570\u7EC4\u7684\u5927\u5C0F</span>

<span class="token keyword">static</span> <span class="token keyword">int</span> nfile <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>   <span class="token comment">// \u6B63\u5728\u4F7F\u7528\u7684VFD\u6570\u91CF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[c];function p(l,i){return s(),a("div",null,o)}const r=n(t,[["render",p],["__file","PostgreSQL\u865A\u62DF\u6587\u4EF6\u63CF\u8FF0\u7B26(VFD).html.vue"]]);export{r as default};
