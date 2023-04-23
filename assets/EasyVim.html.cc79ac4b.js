import{_ as t,o as d,c as r,a}from"../app.dbff23ac.mjs";const n="/assets/EasyVim.1c95ca7d.png",e={},h=a('<h1 id="easyvim" tabindex="-1"><a class="header-anchor" href="#easyvim" aria-hidden="true">#</a> EasyVim</h1><p>\u7B80\u5355\u6613\u7528\u7684vim\u914D\u7F6E\uFF0C\u719F\u7EC3\u540E\u53EF\u5927\u5927\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\uFF08VS Code\u7684\u4E24\u500D\u4EE5\u4E0A\uFF09\u3002</p><p><img src="'+n+`" alt="EasyVim"></p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u5B89\u88C5\u8FC7\u7A0B\u9700\u8981\u4ECEgithub\u4E0B\u8F7D\u5F88\u591A\u63D2\u4EF6\uFF0C\u56FD\u5185\u5C3D\u91CF\u6302VPN</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/yuesong-feng/EasyVim
<span class="token builtin class-name">cd</span> EasyVim/
<span class="token function">sh</span> ./install.sh 
<span class="token function">vim</span>
:PlugInstall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tagbar\u663E\u793A\u548CCTRL-]\u8DF3\u8F6C\u9700\u8981\u5B89\u88C5ctags C/C++\u67E5\u627E\u76F8\u5173\u529F\u80FD\u9700\u8981\u5B89\u88C5gtags \u5F3A\u70C8\u63A8\u8350\u5C06ctags\u3001gtags\u7ED3\u5408\u4F7F\u7528\uFF0C\u5373\u4F7F\u7528--with-universal-ctags\u6765\u7F16\u8BD1\u5B89\u88C5gtags\u3002 LSP\u76F8\u5173\u529F\u80FD\u9700\u8981\u5B89\u88C5\u6BCF\u79CD\u8BED\u8A00\u7684LSP\u670D\u52A1\u5668\uFF0C\u5982ccls\u3001clangd\u7B49\uFF0C\u8FD8\u9700\u8981\u914D\u7F6Ecompile_commands.json\u8DEF\u5F84\u3002 \u5F00\u53D1C/C++\u65F6\uFF0Cctags+gtags\u548CLSP\u9009\u4E00\u79CD\u4F7F\u7528\u5373\u53EF\uFF0C\u4E5F\u53EF\u540C\u65F6\u4F7F\u7528\uFF0C\u9ED8\u8BA4\u90FD\u5F00\u542F\u4E86\uFF0C\u5982\u679C\u4F7F\u7528\u5361\u987F\u53EF\u4EE5\u7981\u7528LSP\u76F8\u5173\u63D2\u4EF6\u3002</p><p><strong>\u4E0B\u5217\u5FEB\u6377\u952E\u53EF\u80FD\u968F\u65F6\u6709\u53D8\u52A8\uFF0C\u4EE5github\u4E3B\u9875\u4E0A\u4E3A\u51C6\u3002</strong></p><h2 id="\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5F0F" aria-hidden="true">#</a> \u6A21\u5F0F</h2><table><thead><tr><th>\u5FEB\u6377\u952E</th><th>\u539F\u6307\u4EE4</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td></td><td>ESC\u6216CTRL-[</td><td>\u8FD4\u56DE\u5230\u547D\u4EE4\u6A21\u5F0F</td></tr><tr><td></td><td>i</td><td>\u5728\u5149\u6807\u4F4D\u7F6E\u63D2\u5165</td></tr><tr><td></td><td>a</td><td>\u5728\u5149\u6807\u540E\u4E00\u4E2A\u4F4D\u7F6E\u63D2\u5165</td></tr><tr><td></td><td>I</td><td>\u5728\u884C\u9996\u63D2\u5165</td></tr><tr><td></td><td>A</td><td>\u5728\u884C\u5C3E\u63D2\u5165</td></tr><tr><td></td><td>o</td><td>\u5728\u4E0B\u65B9\u65B0\u5EFA\u4E00\u884C\u5E76\u63D2\u5165</td></tr><tr><td></td><td>O</td><td>\u5728\u4E0A\u65B9\u65B0\u5EFA\u4E00\u884C\u5E76\u63D2\u5165</td></tr><tr><td></td><td>s</td><td>\u5220\u9664\u5149\u6807\u5B57\u7B26\u5E76\u63D2\u5165</td></tr><tr><td></td><td>S\u6216cc</td><td>\u5220\u9664\u5149\u6807\u6240\u5728\u884C\u5E76\u63D2\u5165</td></tr><tr><td></td><td>v</td><td>\u8FDB\u5165\u53EF\u89C6\u6A21\u5F0F</td></tr><tr><td></td><td>V</td><td>\u8FDB\u5165\u53EF\u89C6\u884C\u6A21\u5F0F\uFF0C\u6B64\u65F6\u4F1A\u6574\u884C\u9009\u4E2D</td></tr><tr><td></td><td>CTRL-V</td><td>\u8FDB\u5165\u53EF\u89C6\u5757\u6A21\u5F0F\uFF0C\u6B64\u65F6\u4F1A\u7AD6\u884C\u9009\u4E2D\uFF0C\u6309I\u8FDB\u5165\u5217\u63D2\u5165\u6A21\u5F0F</td></tr><tr><td></td><td>R</td><td>\u8FDB\u5165\u66FF\u6362\u6A21\u5F0F</td></tr><tr><td></td><td>gi</td><td>\u5728\u4E0A\u4E00\u6B21\u63D2\u5165\u6A21\u5F0F\u7684\u4F4D\u7F6E\u63D2\u5165</td></tr></tbody></table><h2 id="\u5149\u6807" tabindex="-1"><a class="header-anchor" href="#\u5149\u6807" aria-hidden="true">#</a> \u5149\u6807</h2><table><thead><tr><th>\u5FEB\u6377\u952E</th><th>\u539F\u6307\u4EE4</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td></td><td>[n]k\u6216j\u6216h\u6216l</td><td>\u4E0A\u4E0B\u5DE6\u53F3\u79FB\u52A8\uFF0C\u524D\u9762\u7684n\u8868\u793A\u79FB\u52A8\u591A\u5C11\u5355\u4F4D</td></tr><tr><td></td><td>[n]w</td><td>\u53F3\u79FB\u5230\u4E0B\u4E00\u4E2A\u5355\u8BCD\u7684\u5F00\u5934</td></tr><tr><td></td><td>[n]e</td><td>\u53F3\u79FB\u5230\u5F53\u524D\u6216\u4E0B\u4E00\u4E2A\u5355\u8BCD\u7684\u8BCD\u5C3E</td></tr><tr><td></td><td>[n]b</td><td>\u5DE6\u79FB\u5230\u5F53\u524D\u6216\u4E0A\u4E00\u4E2A\u5355\u8BCD\u7684\u8BCD\u5934</td></tr><tr><td></td><td>[n]ge</td><td>\u5DE6\u79FB\u5230\u4E0A\u4E00\u4E2A\u5355\u8BCD\u7684\u8BCD\u5C3E</td></tr><tr><td></td><td>[n]W\u6216E\u6216B\u6216gE</td><td>\u540C\u4E0A\u9762\u56DB\u884C\uFF0C\u4F46\u5355\u8BCD\u4EC5\u4EE5\u7A7A\u683C\u5206\u5272\uFF0C\u5C0F\u5199\u5219\u4EE5\u6807\u70B9\u548C\u7A7A\u683C\u5206\u5272</td></tr><tr><td>;h</td><td>^</td><td>\u79FB\u52A8\u5230\u884C\u9996\u7B2C\u4E00\u4E2A\u975E\u7A7A\u767D\u5B57\u7B26</td></tr><tr><td>;l</td><td>$</td><td>\u79FB\u52A8\u5230\u884C\u5C3E</td></tr><tr><td></td><td>0</td><td>\u79FB\u52A8\u5230\u884C\u9996</td></tr><tr><td></td><td><a href="%E6%88%96">n</a></td><td>\u5411\u524D(\u540E)\u79FB\u52A8\u4E00\u4E2A(n\u4E2A)\u53E5\u5B50(\u6807\u70B9\u7B26\u53F7\u5206\u5272)</td></tr><tr><td></td><td>[n]{\u6216}</td><td>\u5411\u524D(\u540E)\u79FB\u52A8\u4E00\u4E2A(n\u4E2A)\u6BB5\u843D(\u7A7A\u884C\u5206\u5272)</td></tr><tr><td></td><td>+\u6216&lt;enter&gt;</td><td>\u79FB\u52A8\u5230\u4E0B\u4E00\u884C\u7684\u9996\u4E2A\u975E\u7A7A\u5B57\u7B26</td></tr><tr><td></td><td>-</td><td>\u79FB\u52A8\u5230\u4E0A\u4E00\u884C\u7684\u9996\u4E2A\u975E\u7A7A\u5B57\u7B26</td></tr><tr><td></td><td>gg\u6216G</td><td>\u79FB\u52A8\u5230\u6587\u4EF6\u9996(\u6216\u6587\u4EF6\u5C3E)</td></tr><tr><td></td><td>{n}gg\u6216{n}G\u6216:{n}</td><td>\u79FB\u52A8\u5230\u7B2Cn\u884C</td></tr><tr><td></td><td>{n}%</td><td>\u79FB\u52A8\u5230\u6587\u4EF6\u7684 n% \u5904</td></tr><tr><td></td><td>{n}|</td><td>\u79FB\u52A8\u5230\u5F53\u524D\u884C\u7684\u7B2Cn\u5217</td></tr><tr><td></td><td>gm</td><td>\u79FB\u52A8\u5230\u5F53\u524D\u884C\u7684\u4E2D\u95F4</td></tr><tr><td></td><td>M\u6216H\u6216L</td><td>\u5149\u6807\u79FB\u52A8\u5230\u5C4F\u5E55\u4E2D\u95F4\u4E00\u884C/\u7B2C\u4E00\u884C/\u6700\u540E\u4E00\u884C</td></tr><tr><td></td><td>zz\u6216zt\u6216zb</td><td>\u5C06\u5F53\u524D\u884C\u5C45\u4E2D/\u663E\u793A\u4E3A\u9876\u884C/\u663E\u793A\u4E3A\u5E95\u884C</td></tr><tr><td></td><td>[n]zh\u6216[n]zl\u6216z[n]h\u6216z[n]l</td><td>\u5411\u5DE6(\u53F3)\u6EDA\u52A8\u4E00\u884C(n\u884C)</td></tr><tr><td></td><td>zH\u6216zL</td><td>\u5411\u5DE6(\u53F3)\u6EDA\u52A8\u534A\u5C4F</td></tr><tr><td></td><td>CTRL-E\u6216CTRL-Y</td><td>\u5411\u4E0B(\u4E0A)\u6EDA\u52A8\u4E00\u884C</td></tr><tr><td>;j\u6216;k</td><td>CTRL-D\u6216CTRL-U</td><td>\u5411\u4E0B(\u4E0A)\u6EDA\u52A8\u534A\u5C4F</td></tr><tr><td></td><td>CTRL-F\u6216CTRL-B</td><td>\u5411\u4E0B(\u4E0A)\u6EDA\u52A8\u6574\u5C4F</td></tr></tbody></table><h2 id="\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u641C\u7D22" aria-hidden="true">#</a> \u641C\u7D22</h2><table><thead><tr><th>\u5FEB\u6377\u952E</th><th>\u539F\u6307\u4EE4</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td></td><td>[n]f{char}</td><td>\u79FB\u52A8\u5230\u884C\u5185\u4E0B\u4E00\u4E2Achar\u5B57\u7B26\u5904\uFF0C\u524D\u9762\u52A0n\u8868\u793A\u5230\u4E0Bn\u4E2A</td></tr><tr><td></td><td>[n]F{char}</td><td>\u79FB\u52A8\u5230\u884C\u5185\u4E0A\u4E00\u4E2Achar\u5B57\u7B26\u5904\uFF0C\u524D\u9762\u52A0n\u8868\u793A\u5230\u4E0An\u4E2A</td></tr><tr><td></td><td>[n]t{char}</td><td>\u79FB\u52A8\u5230\u884C\u5185\u4E0B\u4E00\u4E2Achar\u5B57\u7B26\u524D\uFF0C\u524D\u9762\u52A0n\u8868\u793A\u5230\u4E0Bn\u4E2A</td></tr><tr><td></td><td>[n]T{char}</td><td>\u79FB\u52A8\u5230\u884C\u5185\u4E0A\u4E00\u4E2Achar\u5B57\u7B26\u540E\uFF0C\u524D\u9762\u52A0n\u8868\u793A\u5230\u4E0An\u4E2A</td></tr><tr><td></td><td>;\u6216,</td><td>\u79FB\u52A8\u5230\u4E0B(\u4E0A)\u4E00\u4E2A\u884C\u5185\u641C\u7D22\u7684\u7ED3\u679C(f/F/t/T)\uFF0C\u7531\u4E8E;\u88AB\u8BBE\u7F6E\u4E3Aleader\u952E\uFF0C\u6309\u4E0B\u540E\u8981\u7B49\u4E00\u79D2\u624D\u4F1A\u6267\u884C\u8DF3\u8F6C</td></tr><tr><td></td><td>/\u6216?</td><td>\u6B63\u5411(\u6216\u53CD\u5411)\u641C\u7D22\uFF0C\u8F93\u5165\u56DE\u8F66\u91CD\u590D\u4E0A\u4E00\u6B21\u641C\u7D22</td></tr><tr><td></td><td>n\u6216N</td><td>\u4E0B\u4E00\u4E2A(\u6216\u4E0A\u4E00\u4E2A)\u641C\u7D22\u7ED3\u679C</td></tr><tr><td></td><td>*\u6216#</td><td>\u5411\u540E(\u524D)\u641C\u7D22\u5F53\u524D\u5149\u6807\u4E0B\u7684\u5355\u8BCD</td></tr><tr><td></td><td>gd</td><td>\u641C\u7D22\u5F53\u524D\u5149\u6807\u4E0B\u7684\u5355\u8BCD</td></tr><tr><td>;/</td><td>:noh</td><td>\u53D6\u6D88\u641C\u7D22\u7ED3\u679C\u9AD8\u4EAE</td></tr><tr><td></td><td>CTRL-P</td><td>\u6A21\u7CCA\u641C\u7D22\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6</td></tr></tbody></table><h2 id="\u7F16\u8F91" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91" aria-hidden="true">#</a> \u7F16\u8F91</h2><table><thead><tr><th>\u5FEB\u6377\u952E</th><th>\u539F\u6307\u4EE4</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td></td><td>u\u6216CTRL-R</td><td>\u64A4\u9500(\u53CD\u64A4\u9500)</td></tr><tr><td></td><td>x\u6216X</td><td>\u5220\u9664\u5F53\u524D(\u5411\u524D\u5220\u9664)\u5B57\u7B26</td></tr><tr><td></td><td>[n]r{char}</td><td>\u66FF\u6362(n\u4E2A)\u5B57\u7B26\u4E3Achar</td></tr><tr><td></td><td>J</td><td>\u5220\u9664\u5F53\u524D\u884C\u5C3E\u7684\u6362\u884C\u7B26</td></tr><tr><td>d;l</td><td>D\u6216d$</td><td>\u526A\u5207\u5F53\u524D\u884C\u5230\u884C\u5C3E</td></tr><tr><td></td><td>[n]dd</td><td>\u526A\u5207n\u884C\uFF0C\u6CA1\u6709n\u8868\u793A\u526A\u5207\u4E00\u884C</td></tr><tr><td></td><td>[n]yy</td><td>\u590D\u5236n\u884C\uFF0C\u6CA1\u6709n\u8868\u793A\u590D\u5236\u5F53\u524D\u884C</td></tr><tr><td></td><td>[n]cc</td><td>\u6539\u5199n\u884C\uFF0C\u6CA1\u6709n\u8868\u793A\u590D\u5236\u5F53\u524D\u884C\uFF0C\u540CS</td></tr><tr><td></td><td>p</td><td>\u5728\u5F53\u524D\u4F4D\u7F6E\u540E\u7C98\u8D34</td></tr><tr><td></td><td>P</td><td>\u5728\u5F53\u524D\u4F4D\u7F6E\u524D\u7C98\u8D34</td></tr><tr><td>;c&lt;space&gt;</td><td></td><td>\u6CE8\u91CA/\u53CD\u6CE8\u91CA\u5F53\u524D\u884C\u6216\u9009\u4E2D\u5185\u5BB9</td></tr><tr><td>;w</td><td>:w</td><td>\u4FDD\u5B58</td></tr><tr><td>;q</td><td>:q</td><td>\u9000\u51FA</td></tr><tr><td></td><td>c{}\u6216d{}\u6216v{}\u6216y{}</td><td>\u66F4\u6539\u3001\u5220\u9664\u3001\u9009\u4E2D\u3001\u62F7\u8D1D{ }\u4F5C\u7528\u57DF\u4E2D\u7684\u5185\u5BB9\uFF0C\u4F5C\u7528\u57DF\u5728\u4E0B\u65B9\u8868\u683C\u4E2D</td></tr></tbody></table><h2 id="c-d-v-y\u547D\u4EE4\u540E\u7684\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#c-d-v-y\u547D\u4EE4\u540E\u7684\u4F5C\u7528\u57DF" aria-hidden="true">#</a> c,d,v,y\u547D\u4EE4\u540E\u7684\u4F5C\u7528\u57DF</h2><table><thead><tr><th>\u5FEB\u6377\u952E</th><th>\u6307\u4EE4</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td></td><td>[n]k\u6216j\u6216h\u6216l</td><td>\u4E0A\u4E0B\u5DE6\u53F3\uFF0C\u524D\u9762\u7684n\u8868\u793A\u79FB\u52A8\u591A\u5C11\u5355\u4F4D</td></tr><tr><td></td><td>[n]w</td><td>\u5230\u4E0B\u4E00\u4E2A\u5355\u8BCD\u7684\u5F00\u5934</td></tr><tr><td></td><td>[n]e</td><td>\u5230\u5F53\u524D\u6216\u4E0B\u4E00\u4E2A\u5355\u8BCD\u7684\u8BCD\u5C3E</td></tr><tr><td></td><td>[n]b</td><td>\u5230\u5F53\u524D\u6216\u4E0A\u4E00\u4E2A\u5355\u8BCD\u7684\u8BCD\u5934</td></tr><tr><td></td><td>[n]ge</td><td>\u5230\u4E0A\u4E00\u4E2A\u5355\u8BCD\u7684\u8BCD\u5C3E</td></tr><tr><td></td><td>[n]W\u6216E\u6216B\u6216gE</td><td>\u540C\u4E0A\u9762\u56DB\u884C\uFF0C\u4F46\u5355\u8BCD\u4EC5\u4EE5\u7A7A\u683C\u5206\u5272\uFF0C\u5C0F\u5199\u5219\u4EE5\u6807\u70B9\u548C\u7A7A\u683C\u5206\u5272</td></tr><tr><td>;h</td><td>^</td><td>\u5230\u884C\u9996\u7B2C\u4E00\u4E2A\u975E\u7A7A\u767D\u5B57\u7B26</td></tr><tr><td>;l</td><td>$</td><td>\u5230\u884C\u5C3E</td></tr><tr><td></td><td>0</td><td>\u5230\u884C\u9996</td></tr><tr><td></td><td>(\u6216)</td><td>\u5411\u524D(\u540E)\u4E00\u4E2A\u53E5\u5B50(\u6807\u70B9\u7B26\u53F7\u5206\u5272)</td></tr><tr><td></td><td>{\u6216}</td><td>\u5411\u524D(\u540E)\u4E00\u4E2A\u6BB5\u843D(\u7A7A\u884C\u5206\u5272)</td></tr><tr><td></td><td>gg\u6216G</td><td>\u79FB\u52A8\u5230\u6587\u4EF6\u9996(\u6216\u6587\u4EF6\u5C3E)</td></tr><tr><td></td><td>{n}gg\u6216{n}G\u6216:{n}</td><td>\u79FB\u52A8\u5230\u7B2Cn\u884C</td></tr><tr><td></td><td>f{char}\u6216t{char}</td><td>\u5149\u6807\u4F4D\u7F6E\u5230char \u4E4B\u5904(\u4E4B\u524D)</td></tr><tr><td></td><td>iw</td><td>\u6574\u4E2A\u5355\u8BCD\uFF08\u4E0D\u5305\u62EC\u5206\u9694\u7B26\uFF09</td></tr><tr><td></td><td>aw</td><td>\u6574\u4E2A\u5355\u8BCD\uFF08\u5305\u62EC\u5206\u9694\u7B26\uFF09</td></tr><tr><td></td><td>iW</td><td>\u6574\u4E2A\u7A7A\u683C\u5206\u5272\u7684\u5355\u8BCD\uFF08\u4E0D\u5305\u62EC\u5206\u9694\u7B26\uFF09</td></tr><tr><td></td><td>aW</td><td>\u6574\u4E2A\u7A7A\u683C\u5206\u5272\u7684\u5355\u8BCD\uFF08\u5305\u62EC\u5206\u9694\u7B26\uFF09</td></tr><tr><td></td><td>is</td><td>\u6574\u4E2A\u53E5\u5B50\uFF08\u4E0D\u5305\u62EC\u5206\u9694\u7B26\uFF09</td></tr><tr><td></td><td>as</td><td>\u6574\u4E2A\u53E5\u5B50\uFF08\u5305\u62EC\u5206\u9694\u7B26\uFF09</td></tr><tr><td></td><td>ip</td><td>\u6574\u4E2A\u6BB5\u843D\uFF08\u4E0D\u5305\u62EC\u524D\u540E\u7A7A\u767D\u884C\uFF09</td></tr><tr><td></td><td>ap</td><td>\u6574\u4E2A\u6BB5\u843D\uFF08\u5305\u62EC\u524D\u540E\u7A7A\u767D\u884C\uFF09</td></tr><tr><td></td><td>ib\u6216i)\u6216i(</td><td>\u5C0F\u62EC\u53F7\u5185</td></tr><tr><td></td><td>ab\u6216a)\u6216a(</td><td>\u5C0F\u62EC\u53F7\u5185\uFF08\u5305\u542B\u5C0F\u62EC\u53F7\u672C\u8EAB\uFF09</td></tr><tr><td></td><td>iB\u6216i}\u6216i{</td><td>\u5927\u62EC\u53F7\u5185</td></tr><tr><td></td><td>aB\u6216a}\u6216a{</td><td>\u5927\u62EC\u53F7\u5185\uFF08\u5305\u542B\u5927\u62EC\u53F7\u672C\u8EAB\uFF09</td></tr><tr><td></td><td>i]\u6216i[</td><td>\u4E2D\u62EC\u53F7\u5185</td></tr><tr><td></td><td>a]\u6216a[</td><td>\u4E2D\u62EC\u53F7\u5185\uFF08\u5305\u542B\u4E2D\u62EC\u53F7\u672C\u8EAB\uFF09</td></tr><tr><td></td><td>i&#39;</td><td>\u5355\u5F15\u53F7\u5185</td></tr><tr><td></td><td>a&#39;</td><td>\u5355\u5F15\u53F7\u5185\uFF08\u5305\u542B\u5355\u5F15\u53F7\u672C\u8EAB\uFF09</td></tr><tr><td></td><td>i&quot;</td><td>\u53CC\u5F15\u53F7\u5185</td></tr><tr><td></td><td>a&quot;</td><td>\u53CC\u5F15\u53F7\u5185\uFF08\u5305\u542B\u53CC\u5F15\u53F7\u672C\u8EAB\uFF09</td></tr><tr><td></td><td>[n]i)</td><td>\u5F80\u5916n\u5C42\u5C0F\u62EC\u53F7\u5185</td></tr><tr><td></td><td>[n]a)</td><td>\u5F80\u5916n\u5C42\u5C0F\u62EC\u53F7\u5185\uFF08\u5305\u542B\u5C0F\u62EC\u53F7\u672C\u8EAB\uFF09</td></tr><tr><td></td><td>[n]f)</td><td>\u5230\u7B2Cn\u4E2A\u5C0F\u62EC\u53F7\u5904</td></tr><tr><td></td><td>[n]t)</td><td>\u5230\u7B2Cn\u4E2A\u5C0F\u62EC\u53F7\u524D</td></tr></tbody></table><h2 id="\u7A97\u53E3\u4E0E\u8DF3\u8F6C" tabindex="-1"><a class="header-anchor" href="#\u7A97\u53E3\u4E0E\u8DF3\u8F6C" aria-hidden="true">#</a> \u7A97\u53E3\u4E0E\u8DF3\u8F6C</h2><table><thead><tr><th>\u5FEB\u6377\u952E</th><th>\u6307\u4EE4</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td></td><td>CTRL-O\u6216CTRL-I</td><td>\u8FD4\u56DE\u5149\u6807\u4E0A\u4E00\u4E2A/\u4E0B\u4E00\u4E2A\u6240\u5728\u4F4D\u7F6E</td></tr><tr><td>;n</td><td>:NERDTreeToggle</td><td>\u6253\u5F00\u76EE\u5F55</td></tr><tr><td>;m</td><td>:TagbarToggle</td><td>\u6253\u5F00tag\u5217\u8868</td></tr><tr><td>;[1-9]</td><td></td><td>\u8F6C\u5230\u7B2Cn\u4E2Abuffer</td></tr><tr><td>;bd</td><td>:bd</td><td>\u5173\u95ED\u5F53\u524Dbuffer</td></tr><tr><td>;bn</td><td>:bn</td><td>\u4E0B\u4E00\u4E2Abuffer</td></tr><tr><td>;bp</td><td>:bp</td><td>\u4E0A\u4E00\u4E2Abuffer</td></tr><tr><td></td><td>gt</td><td>\u8DF3\u8F6C\u5230\u4E0B\u4E00\u4E2Atab</td></tr><tr><td></td><td>gT</td><td>\u8DF3\u8F6C\u5230\u4E0A\u4E00\u4E2Atab</td></tr><tr><td>;t</td><td>:terminal</td><td>\u6253\u5F00\u65B0\u7EC8\u7AEF\uFF0C\u5728\u7EC8\u7AEF\u4E2D\u4F7F\u7528CTRL-W\u4F7F\u7528vim\u7A97\u53E3\u63A7\u5236</td></tr><tr><td>CTRL {h\u6216j\u6216k\u6216l}</td><td>CTRL-W {h/j/k/l}</td><td>\u5728\u591A\u4E2A\u7A97\u53E3\u8DF3\u8F6C</td></tr><tr><td></td><td>CTRL-W {H/J/K/L}</td><td>\u5C06\u5F53\u524D\u7A97\u53E3\u79FB\u52A8\u5230\u67D0\u4E00\u65B9\u5411</td></tr><tr><td></td><td>CTRL-W o</td><td>\u4EC5\u4FDD\u7559\u5F53\u524D\u7A97\u53E3\uFF0C\u5173\u95ED\u5176\u4ED6\u6240\u6709\u7A97\u53E3</td></tr><tr><td></td><td>CTRL-W =</td><td>\u5C06\u6240\u6709\u7A97\u53E3\u7684\u9AD8\u5EA6\u5BBD\u5EA6\u8BBE\u7F6E\u4E3A\u4E0E\u5F53\u524D\u7A97\u53E3\u4E00\u6837</td></tr><tr><td></td><td>CTRL-W [n]+\u6216-</td><td>\u589E\u52A0\u6216\u51CF\u5C11[n]\u5355\u4F4D\u7684\u5F53\u524D\u7A97\u53E3\u9AD8\u5EA6</td></tr><tr><td></td><td>CTRL-W _</td><td>\u5C06\u5F53\u524D\u7A97\u53E3\u7684\u9AD8\u5EA6\u8BBE\u7F6E\u4E3A\u5C3D\u53EF\u80FD\u6700\u9AD8</td></tr><tr><td></td><td>CTRL-W [n]&lt;\u6216&gt;</td><td>\u589E\u52A0\u6216\u51CF\u5C11[n]\u5355\u4F4D\u7684\u5F53\u524D\u7A97\u53E3\u5BBD\u5EA6</td></tr><tr><td></td><td>CTRL-W |</td><td>\u5C06\u5F53\u524D\u7A97\u53E3\u7684\u5BBD\u5EA6\u8BBE\u7F6E\u4E3A\u5C3D\u53EF\u80FD\u6700\u5BBD</td></tr></tbody></table><h2 id="c-c-\u5F00\u53D1\u3001gtags" tabindex="-1"><a class="header-anchor" href="#c-c-\u5F00\u53D1\u3001gtags" aria-hidden="true">#</a> C/C++\u5F00\u53D1\u3001gtags</h2><table><thead><tr><th>\u5FEB\u6377\u952E</th><th>\u539F\u6307\u4EE4</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td></td><td>CTRL-]</td><td>\u8DF3\u8F6C\u5230\u5B9A\u4E49\uFF0C\u9700\u8981ctag\u751F\u6210tags\u6587\u4EF6</td></tr><tr><td></td><td>gf</td><td>\u8DF3\u8F6C\u5230\u5934\u6587\u4EF6\uFF0C\u627E\u4E0D\u5230\u5219\u9700\u8981\u5728.vimrc\u4E2D\u8BBE\u7F6Epath</td></tr><tr><td>;gs</td><td></td><td>Find this symbol</td></tr><tr><td>;gg</td><td></td><td>Find this definition</td></tr><tr><td>;gd</td><td></td><td>Find functions called by this function</td></tr><tr><td>;gc</td><td></td><td>Find functions calling this function</td></tr><tr><td>;gt</td><td></td><td>Find this text string</td></tr><tr><td>;ge</td><td></td><td>Find this egrep pattern</td></tr><tr><td>;gf</td><td></td><td>Find this file</td></tr><tr><td>;gi</td><td></td><td>Find files #including this file</td></tr><tr><td>;ga</td><td></td><td>Find places where this symbol is assigned a value</td></tr><tr><td>;gz</td><td></td><td>Find current word in ctags database</td></tr></tbody></table><h2 id="c-c-\u3001lsp\u3001\u4EE3\u7801\u63D0\u793A\u8865\u5168\u7B49" tabindex="-1"><a class="header-anchor" href="#c-c-\u3001lsp\u3001\u4EE3\u7801\u63D0\u793A\u8865\u5168\u7B49" aria-hidden="true">#</a> C/C++\u3001LSP\u3001\u4EE3\u7801\u63D0\u793A\u8865\u5168\u7B49</h2><table><thead><tr><th>\u5FEB\u6377\u952E</th><th>\u539F\u6307\u4EE4</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>;ag</td><td>:ALEGoToDefinition</td><td>\u8DF3\u8F6C\u5230\u5B9A\u4E49</td></tr><tr><td>;af</td><td>:ALEFindReferences</td><td>\u67E5\u627E\u5F15\u7528</td></tr><tr><td>;as</td><td>:ALESymbolSearch</td><td>\u67E5\u627E\u7CFB\u7EDF\u7B26\u53F7</td></tr><tr><td>;ah</td><td>:ALEHover</td><td>\u663E\u793A\u8BE6\u7EC6\u4FE1\u606F</td></tr><tr><td>;ar</td><td>:ALERename</td><td>\u91CD\u547D\u540D</td></tr><tr><td>;aa</td><td>:ALECodeAction</td><td>\u4EE3\u7801\u81EA\u52A8\u4F18\u5316</td></tr></tbody></table><h2 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> rust</h2><table><thead><tr><th>\u5FEB\u6377\u952E</th><th>\u539F\u6307\u4EE4</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>;rf</td><td>:RustFmt</td><td>\u4EE3\u7801\u683C\u5F0F\u5316</td></tr><tr><td>;rr</td><td>:RustRun</td><td>\u8FD0\u884Crust\u4EE3\u7801</td></tr></tbody></table>`,26),i=[h];function s(c,l){return d(),r("div",null,i)}const b=t(e,[["render",s],["__file","EasyVim.html.vue"]]);export{b as default};
