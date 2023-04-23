import{_ as d,o as s,c as a,b as e,d as l,a as t,e as i,r as c}from"../app.dbff23ac.mjs";const r={},u=t(`<h1 id="day13-c-\u5DE5\u7A0B\u5316\u3001\u4EE3\u7801\u5206\u6790\u3001\u6027\u80FD\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#day13-c-\u5DE5\u7A0B\u5316\u3001\u4EE3\u7801\u5206\u6790\u3001\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a> day13-C++\u5DE5\u7A0B\u5316\u3001\u4EE3\u7801\u5206\u6790\u3001\u6027\u80FD\u4F18\u5316</h1><p>\u5728\u4E4B\u524D\u7684\u6559\u7A0B\u91CC\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5B8C\u6574\u5F00\u53D1\u4E86\u4E00\u4E2A\u4E3B\u4ECEReactor\u591A\u7EBF\u7A0B\u7684\u670D\u52A1\u5668\u7684\u6838\u5FC3\u67B6\u6784\uFF0C\u63A5\u4E0B\u6765\u7684\u5F00\u53D1\u91CD\u5FC3\u5E94\u8BE5\u4ECE\u67B6\u6784\u8F6C\u79FB\u5230\u7EC6\u8282\u3002\u5728\u8FD9\u4E4B\u524D\uFF0C\u5C06\u6574\u4E2A\u9879\u76EE\u73B0\u4EE3\u5316\u3001\u5DE5\u7A0B\u5316\u662F\u5FC5\u8981\u7684\uFF0C\u4E5F\u662F\u5FC5\u987B\u7684\u3002</p><p>C++\u9879\u76EE\u5DE5\u7A0B\u5316\u7684\u7B2C\u4E00\u6B65\uFF0C\u4E00\u5B9A\u662F\u4F7F\u7528CMake\u3002\u76EE\u524D\u5C06\u6240\u6709\u6587\u4EF6\u90FD\u653E\u5728\u4E00\u4E2A\u6587\u4EF6\u5939\uFF0C\u5E76\u4E14\u6CA1\u6709\u5206\u7C7B\u3002\u968F\u7740\u9879\u76EE\u8D8A\u6765\u8D8A\u590D\u6742\u3001\u6A21\u5757\u8D8A\u6765\u8D8A\u591A\uFF0C\u5F00\u53D1\u8005\u9700\u8981\u8003\u8651\u8FD9\u5EA7\u5C4E\u5C71\u7684\u53EF\u8BFB\u6027\uFF0C\u5982\u5C06\u6A21\u5757\u62C6\u5206\u5230\u4E0D\u540C\u6587\u4EF6\u5939\uFF0C\u5C06\u5934\u6587\u4EF6\u7EDF\u4E00\u653E\u5728\u4E00\u8D77\u7B49\u3002\u5BF9\u4E8E\u8FD9\u6837\u590D\u6742\u7684\u9879\u76EE\uFF0C\u5982\u679C\u624B\u5199\u590D\u6742\u7684Makefile\u6765\u7F16\u8BD1\u94FE\u63A5\uFF0C\u90A3\u4E48\u5C06\u4F1A\u76F8\u5F53\u8D1F\u8D23\u7E41\u7410\u3002\u6211\u4EEC\u5E94\u5F53\u4F7F\u7528CMake\u6765\u7BA1\u7406\u6211\u4EEC\u7684\u9879\u76EE\uFF0CCMake\u7684\u4F7F\u7528\u975E\u5E38\u7B80\u5355\u3001\u529F\u80FD\u5F3A\u5927\uFF0C\u4F1A\u5E2E\u6211\u4EEC\u81EA\u52A8\u751F\u6210Makefile\u6587\u4EF6\uFF0C\u4F7F\u9879\u76EE\u7684\u7F16\u8BD1\u94FE\u63A5\u66F4\u52A0\u5BB9\u6613\uFF0C\u7A0B\u5E8F\u5458\u53EF\u4EE5\u5C06\u66F4\u591A\u7684\u7CBE\u529B\u653E\u5728\u5199\u4EE3\u7801\u4E0A\u3002</p><blockquote><p>C++\u7684\u7F16\u8BD1\u3001\u94FE\u63A5\u770B\u4F3C\u7B80\u5355\uFF0C\u5B9E\u9645\u4E0A\u76F8\u5F53\u7E41\u7410\u590D\u6742\uFF0C\u5177\u4F53\u539F\u7406\u8BF7\u53C2\u8003\u300A\u6DF1\u5165\u7406\u89E3\u8BA1\u7B97\u673A\u7CFB\u7EDF\uFF08\u7B2C\u4E09\u7248\uFF09\u300B\u7B2C\u4E03\u7AE0\u3002\u5982\u679C\u6CA1\u6709CMake\uFF0C\u5F00\u53D1\u4E00\u4E2A\u5927\u578BC++\u9879\u76EE\uFF0C\u4E00\u534A\u7684\u65F6\u95F4\u4F1A\u7528\u5728\u7F16\u8BD1\u94FE\u63A5\u4E0A\u3002</p></blockquote><p>\u6211\u4EEC\u5C06\u6838\u5FC3\u5E93\u653E\u5728<code>src</code>\u76EE\u5F55\u4E0B\uFF0C\u4F7F\u7528\u7F51\u7EDC\u5E93\u7684\u6D4B\u8BD5\u7A0B\u5E8F\u653E\u5728<code>test</code>\u76EE\u5F55\u4E0B\uFF0C\u6240\u6709\u7684\u5934\u6587\u4EF6\u653E\u5728<code>/include</code>\u76EE\u5F55\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>set(PINE_SRC_INCLUDE_DIR \${PROJECT_SOURCE_DIR}/src/include)
set(PINE_TEST_INCLUDE_DIR \${PROJECT_SOURCE_DIR}/test/include)
include_directories(\${PINE_SRC_INCLUDE_DIR} \${PINE_TEST_INCLUDE_DIR})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u73B0\u5934\u6587\u4EF6\u7684<code>.cpp</code>\u6587\u4EF6\u5219\u6309\u7167\u6A21\u5757\u653E\u5728<code>src</code>\u76EE\u5F55\uFF08\u8FD9\u4E2A\u7248\u672C\u8FD8\u672A\u62C6\u5206\u6A21\u5757\u5230\u4E0D\u540C\u6587\u4EF6\u5939\uFF09\u3002</p><p><code>src</code>\u76EE\u5F55\u662F\u7F51\u7EDC\u5E93\uFF0C\u5E76\u6CA1\u6709\u53EF\u6267\u884C\u7684\u7A0B\u5E8F\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5C06\u8FD9\u4E2A\u7F51\u7EDC\u5E93\u7684<code>.cpp</code>\u6587\u4EF6\u7F16\u8BD1\u94FE\u63A5\u6210\u591A\u4E2A\u76EE\u6807\u6587\u4EF6\uFF0C\u7136\u540E\u94FE\u63A5\u5230\u4E00\u4E2A\u5171\u4EAB\u5E93\u4E2D\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>file(GLOB_RECURSE pine_sources \${PROJECT_SOURCE_DIR}/src/*.cpp)
add_library(pine_shared SHARED \${pine_sources})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u7F16\u8BD1\u65F6\uFF0C\u6839\u636E\u4E0D\u540C\u73AF\u5883\u8BBE\u7F6E\u7F16\u8BD1\u53C2\u6570\u4E5F\u5F88\u65B9\u4FBF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>set(CMAKE_CXX_FLAGS &quot;\${CMAKE_CXX_FLAGS} -fPIC -Wall -Wextra -std=c++17 -pthread&quot;)
set(CMAKE_CXX_FLAGS &quot;\${CMAKE_CXX_FLAGS} -Wno-unused-parameter -Wno-attributes&quot;) #TODO: remove
set(CMAKE_CXX_FLAGS_DEBUG &quot;\${CMAKE_CXX_FLAGS_DEBUG} -O0 -ggdb -fsanitize=address -fno-omit-frame-pointer -fno-optimize-sibling-calls&quot;)
set(CMAKE_EXE_LINKER_FLAGS  &quot;\${CMAKE_EXE_LINKER_FLAGS} -fPIC&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528<code>test</code>\u76EE\u5F55\u4E0B\u7684<code>.cpp</code>\u6587\u4EF6\u521B\u5EFA\u53EF\u6267\u884C\u6587\u4EF6\u7684\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>foreach (pine_test_source \${PINE_TEST_SOURCES})
    get_filename_component(pine_test_filename \${pine_test_source} NAME)
    string(REPLACE &quot;.cpp&quot; &quot;&quot; pine_test_name \${pine_test_filename})

    add_executable(\${pine_test_name} EXCLUDE_FROM_ALL \${pine_test_source})
    add_dependencies(build-tests \${pine_test_name})
    add_dependencies(check-tests \${pine_test_name})

    target_link_libraries(\${pine_test_name} pine_shared)

    set_target_properties(\${pine_test_name}
        PROPERTIES
        RUNTIME_OUTPUT_DIRECTORY &quot;\${CMAKE_BINARY_DIR}/bin&quot;
        COMMAND \${pine_test_name}
    )
endforeach(pine_test_source \${PINE_TEST_SOURCES})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u6211\u4EEC\u5207\u6362\u5230\u4E86\u66F4\u5F3A\u5927\u66F4\u597D\u7528\u7684clang\u7F16\u8BD1\u5668\uFF08\u4E4B\u524D\u662FGCC\uFF09\u3002</p><p>\u914D\u7F6E\u597DCMake\u548Cclang\u540E\uFF0C\u8FD8\u9700\u8981\u505A\u4EE5\u4E0B\u4E09\u4EF6\u4E8B\uFF1A</p><ol><li>format\uFF1A\u4F5C\u4E3A\u4E00\u4E2A\u5927\u578BC++\u9879\u76EE\uFF0C\u53EF\u80FD\u6709\u8BB8\u591A\u7A0B\u5E8F\u5458\u5171\u540C\u5F00\u53D1\uFF0C\u6BCF\u4E2A\u4EBA\u7684\u7F16\u7801\u4E60\u60EF\u98CE\u683C\u90FD\u4E0D\u540C\uFF0C\u6574\u4E2A\u9879\u76EE\u53EF\u80FD\u98CE\u683C\u6742\u4E71\uFF0C\u53EF\u8BFB\u6027\u5DEE\uFF0C\u4E0D\u5229\u4E8E\u9879\u76EE\u7EF4\u62A4\u3002\u6240\u4EE5\u5728\u5199C++\u4EE3\u7801\u65F6\u5E94\u8BE5\u9075\u5B88\u4E00\u4E9B\u7EA6\u5B9A\uFF0C\u4F7F\u4EE3\u7801\u7684\u98CE\u683C\u7EDF\u4E00\u3002\u76EE\u524D\u6BD4\u8F83\u6D41\u884C\u7684C++\u4EE3\u7801\u98CE\u683C\u6709google\u3001llvm\u7B49\uFF0C\u672C\u9879\u76EE\u91C7\u7528google\u98CE\u683C\u3002</li><li>cpplint\uFF1A\u57FA\u4E8Egoogle C++\u7F16\u7801\u89C4\u8303\u7684\u9759\u6001\u4EE3\u7801\u5206\u6790\u5DE5\u5177\uFF0C\u53EF\u4EE5\u67E5\u627E\u4EE3\u7801\u4E2D\u9519\u8BEF\u3001\u8FDD\u53CD\u7EA6\u5B9A\u3001\u5EFA\u8BAE\u4FEE\u6539\u7684\u5730\u65B9\u3002</li><li>clang-tidy\uFF1Aclang\u7F16\u8BD1\u5668\u7684\u4EE3\u7801\u5206\u6790\u5DE5\u5177\uFF0C\u529F\u80FD\u5341\u5206\u5F3A\u5927\u3002\u65E2\u53EF\u4EE5\u67E5\u627E\u4EE3\u7801\u4E2D\u7684\u5404\u79CD\u9759\u6001\u9519\u8BEF\uFF0C\u8FD8\u53EF\u4EE5\u63D0\u793A\u53EF\u80FD\u4F1A\u5728\u8FD0\u884C\u65F6\u53D1\u751F\u7684\u95EE\u9898\u3002\u4E0D\u4EC5\u5982\u6B64\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4EE3\u7801\u5206\u6790\u7ED9\u51FA\u53EF\u4EE5\u63D0\u5347\u7A0B\u5E8F\u6027\u80FD\u7684\u5EFA\u8BAE\u3002</li></ol><p>\u8FD9\u4E09\u4EF6\u4E8B\u53EF\u4EE5\u4FDD\u8BC1\u6211\u4EEC\u5199\u51FA\u98CE\u683C\u4E00\u81F4\u3001bug\u8F83\u5C11\u3001\u6027\u80FD\u8F83\u597D\u3001\u9075\u5B88google\u7F16\u7801\u89C4\u8303\u7684\u9879\u76EE\uFF0C\u662F\u5F00\u53D1\u5927\u578BC++\u9879\u76EE\u5FC5\u5907\u7684\u5229\u5668\u3002</p><p>\u4E3A\u4E86\u5F88\u65B9\u4FBF\u5730\u81EA\u52A8\u4E00\u952E\u8FD0\u884C\uFF0C\u8FD9\u4E09\u4E2A\u5DE5\u5177\u90FD\u5DF2\u7ECF\u4EE5<code>python</code>\u811A\u672C\u7684\u683C\u5F0F\u4FDD\u5B58\u5728\u4E86<code>build_support</code>\u76EE\u5F55\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>build_support
    - clang_format_exclusions.txt     // \u4E0D\u9700\u8981\u683C\u5F0F\u5316\u7684\u4EE3\u7801
    - run_clang_format.py             // format
    - cpplint.py                      // cpplint
    - run_clang_tidy_extra.py         // \u5E2E\u52A9\u6587\u4EF6\uFF0C\u4E0D\u76F4\u63A5\u8FD0\u884C
    - run_clang_tidy.py               // clang-tidy
.clang-format                         // format\u914D\u7F6E
.clang-tidy                           // clang-tidy\u914D\u7F6E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>format\u5728CMakeLists.txt\u4E2D\u7684\u914D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># runs clang format and updates files in place.
add_custom_target(format \${PINE_BUILD_SUPPORT_DIR}/run_clang_format.py
        \${CLANG_FORMAT_BIN}
        \${PINE_BUILD_SUPPORT_DIR}/clang_format_exclusions.txt
        --source_dirs
        \${PINE_FORMAT_DIRS}
        --fix
        --quiet
        )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cpplint\u5728CMakeLists.txt\u4E2D\u7684\u914D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>add_custom_target(cpplint echo &#39;\${PINE_LINT_FILES}&#39; | xargs -n12 -P8
        \${CPPLINT_BIN}
        --verbose=2 --quiet
        --linelength=120
        --filter=-legal/copyright,-build/include_subdir,-readability/casting
        )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>clang-tidy\u5728CMakeLists.txt\u4E2D\u7684\u914D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>add_custom_target(clang-tidy
        \${PINE_BUILD_SUPPORT_DIR}/run_clang_tidy.py # run LLVM&#39;s clang-tidy script
        -clang-tidy-binary \${CLANG_TIDY_BIN}        # using our clang-tidy binary
        -p \${CMAKE_BINARY_DIR}                      # using cmake&#39;s generated compile commands
        )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u7701\u7565\u4E86\u6587\u4EF6\u5939\u5B9A\u4E49\u7B49\u5F88\u591A\u4FE1\u606F\uFF0C\u5B8C\u6574\u914D\u7F6E\u5728\u6E90\u4EE3\u7801\u4E2D\u3002</p><p>\u63A5\u4E0B\u6765\u5C1D\u8BD5\u7F16\u8BD1\u6211\u4EEC\u7684\u9879\u76EE\uFF0C\u9996\u5148\u521B\u5EFA\u4E00\u4E2A<code>build</code>\u6587\u4EF6\u5939\uFF0C\u9632\u6B62\u6587\u4EF6\u548C\u9879\u76EE\u6DF7\u5728\u4E00\u8D77\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir build
cd build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u4F7F\u7528CMake\u751F\u6210Makefile\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cmake ..
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u751F\u6210Makefile\u540E\uFF0C\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u8FDB\u884C\u4EE3\u7801\u683C\u5F0F\u5316:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>make format
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u7528cpplint\u68C0\u67E5\u4EE3\u7801:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>make cpplint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6700\u540E\u4F7F\u7528clang-tidy\u8FDB\u884C\u4EE3\u7801\u5206\u6790\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>make clang-tidy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5C06\u6240\u6709\u7684\u8B66\u544A\u90FD\u4FEE\u6539\u597D\uFF0C\u91CD\u65B0\u8FD0\u884C\u8FD9\u4E09\u4E2A\u547D\u4EE4\u76F4\u5230\u5168\u90E8\u901A\u8FC7\u3002\u7136\u540E\u4F7F\u7528<code>make</code>\u6307\u4EE4\u5373\u53EF\u7F16\u8BD1\u6574\u4E2A\u7F51\u7EDC\u5E93\uFF0C\u4F1A\u88AB\u4FDD\u5B58\u5230<code>lib</code>\u6587\u4EF6\u5939\u4E2D\uFF0C\u4F46\u8FD9\u91CC\u6CA1\u6709\u53EF\u6267\u884C\u6587\u4EF6\u3002\u5982\u679C\u6211\u4EEC\u9700\u8981\u7F16\u8BD1\u53EF\u6267\u884C\u670D\u52A1\u5668\uFF0C\u9700\u8981\u7F16\u8BD1<code>test</code>\u76EE\u5F55\u4E0B\u76F8\u5E94\u7684\u6E90\u6587\u4EF6:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>make server
make multiple_client
make single_client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u751F\u6210\u7684\u53EF\u6267\u884C\u6587\u4EF6\u5728<code>build/test</code>\u76EE\u5F55\u4E0B\uFF0C\u8FD9\u65F6\u4F7F\u7528<code>./test/server</code>\u5373\u53EF\u8FD0\u884C\u670D\u52A1\u5668\u3002</p><p>\u81F3\u6B64\uFF0C\u4ECA\u5929\u7684\u6559\u7A0B\u5DF2\u7ECF\u7ED3\u675F\u4E86\u3002\u4ECA\u5929\u6211\u4EEC\u5C06\u6574\u4E2A\u9879\u76EE\u5DE5\u7A0B\u5316\uFF0C\u4F7F\u7528\u4E86CMake\u3001format\u3001cpplint\u3001clang-tidy\uFF0C\u4EE3\u7801\u7684\u98CE\u683C\u53D8\u6210\u4E86google-style\uFF0C\u4FEE\u590D\u4E86\u4E4B\u524D\u7248\u672C\u7684\u8BB8\u591Abug\uFF0C\u5E94\u7528\u4E86\u8FD9\u4E9B\u5DE5\u5177\u7ED9\u6211\u4EEC\u63D0\u4F9B\u7684\u73B0\u4EE3C++\u9879\u76EE\u5EFA\u8BAE\uFF0C\u6027\u80FD\u4E5F\u63D0\u9AD8\u4E86\u3002\u5728\u4ECA\u5929\u7684\u7248\u672C\uFF0C\u6240\u6709\u7684\u7C7B\u4E5F\u90FD\u88AB\u58F0\u660E\u4E3A\u4E0D\u53EF\u62F7\u8D1D\u3001\u4E0D\u53EF\u79FB\u52A8\u3002clang-tidy\u63D0\u793A\u7684\u6309\u503C\u4F20\u53C2\u4E5F\u88AB\u4FEE\u6539\u4E3A\u5F15\u7528\u4F20\u53C2\uFF0C\u51CF\u5C11\u4E86\u5927\u91CF\u7684\u590D\u5236\u64CD\u4F5C\u3002\u8FD9\u4E9B\u5DE5\u5177\u5EFA\u8BAE\u7684\u4FEE\u6539\u90FD\u5927\u5927\u964D\u4F4E\u4E86bug\u53D1\u751F\u7684\u51E0\u7387\u3001\u63D0\u9AD8\u4E86\u670D\u52A1\u5668\u6027\u80FD\uFF0C\u867D\u7136\u8FD8\u6CA1\u6709\u7528\u4EFB\u4F55\u7684\u6027\u80FD\u6D4B\u8BD5\u5DE5\u5177\uFF0C\u670D\u52A1\u5668\u7684\u5904\u7406\u901F\u5EA6\u3001\u541E\u5410\u91CF\u3001\u5E76\u53D1\u652F\u6301\u5EA6\u90FD\u660E\u663E\u63D0\u9AD8\u4E86\u3002</p>`,40),o=i("\u5B8C\u6574\u6E90\u4EE3\u7801\uFF1A"),v={href:"https://github.com/yuesong-feng/30dayMakeCppServer/tree/main/code/day13",target:"_blank",rel:"noopener noreferrer"},_=i("https://github.com/yuesong-feng/30dayMakeCppServer/tree/main/code/day13");function m(p,b){const n=c("ExternalLinkIcon");return s(),a("div",null,[u,e("p",null,[o,e("a",v,[_,l(n)])])])}const x=d(r,[["render",m],["__file","day13-C++\u5DE5\u7A0B\u5316\u3001\u4EE3\u7801\u5206\u6790\u3001\u6027\u80FD\u4F18\u5316.html.vue"]]);export{x as default};
