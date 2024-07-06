import{_ as a,c as t,o as i,a2 as s}from"./chunks/framework.DRZK5IXa.js";const E=JSON.parse('{"title":"视频审核相关接口","description":"","frontmatter":{},"headers":[],"relativePath":"api/review_video.md","filePath":"api/review_video.md"}'),e={name:"api/review_video.md"},l=s(`<h1 id="视频审核相关接口" tabindex="-1">视频审核相关接口 <a class="header-anchor" href="#视频审核相关接口" aria-label="Permalink to &quot;视频审核相关接口&quot;">​</a></h1><h2 id="视频审核通过" tabindex="-1">视频审核通过 <a class="header-anchor" href="#视频审核通过" aria-label="Permalink to &quot;视频审核通过&quot;">​</a></h2><h4 id="请求url" tabindex="-1">请求URL <a class="header-anchor" href="#请求url" aria-label="Permalink to &quot;请求URL&quot;">​</a></h4><ul><li><code>/api/v1/review/reviewVideoApproved </code></li></ul><h4 id="请求方式" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式" aria-label="Permalink to &quot;请求方式&quot;">​</a></h4><ul><li>POST</li></ul><h4 id="请求头" tabindex="-1">请求头 <a class="header-anchor" href="#请求头" aria-label="Permalink to &quot;请求头&quot;">​</a></h4><ul><li><code>Authorization&#39;: token</code></li><li><code>&quot;content-type&quot;: &quot;application/json&quot;</code></li></ul><h4 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">必选</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">vid</td><td style="text-align:left;">是</td><td style="text-align:left;">int</td><td>视频ID</td></tr></tbody></table><h3 id="返回示例" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例" aria-label="Permalink to &quot;返回示例&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ok&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="备注" tabindex="-1">备注 <a class="header-anchor" href="#备注" aria-label="Permalink to &quot;备注&quot;">​</a></h4><p>无</p><h2 id="视频审核不通过" tabindex="-1">视频审核不通过 <a class="header-anchor" href="#视频审核不通过" aria-label="Permalink to &quot;视频审核不通过&quot;">​</a></h2><h4 id="请求url-1" tabindex="-1">请求URL <a class="header-anchor" href="#请求url-1" aria-label="Permalink to &quot;请求URL&quot;">​</a></h4><ul><li><code>/api/v1/review/reviewVideoFailed </code></li></ul><h4 id="请求方式-1" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式-1" aria-label="Permalink to &quot;请求方式&quot;">​</a></h4><ul><li>POST</li></ul><h4 id="请求头-1" tabindex="-1">请求头 <a class="header-anchor" href="#请求头-1" aria-label="Permalink to &quot;请求头&quot;">​</a></h4><ul><li><code>Authorization&#39;: token</code></li><li><code>&quot;content-type&quot;: &quot;application/json&quot;</code></li></ul><h4 id="参数-1" tabindex="-1">参数 <a class="header-anchor" href="#参数-1" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">必选</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">vid</td><td style="text-align:left;">是</td><td style="text-align:left;">int</td><td>视频ID</td></tr><tr><td style="text-align:left;">status</td><td style="text-align:left;">是</td><td style="text-align:left;">int</td><td>审核状态码</td></tr><tr><td style="text-align:left;">remark</td><td style="text-align:left;">否</td><td style="text-align:left;">string</td><td>问题备注</td></tr></tbody></table><h3 id="返回示例-1" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例-1" aria-label="Permalink to &quot;返回示例&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ok&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="备注-1" tabindex="-1">备注 <a class="header-anchor" href="#备注-1" aria-label="Permalink to &quot;备注&quot;">​</a></h4><p>无</p><h2 id="获取视频审核记录" tabindex="-1">获取视频审核记录 <a class="header-anchor" href="#获取视频审核记录" aria-label="Permalink to &quot;获取视频审核记录&quot;">​</a></h2><h4 id="请求url-2" tabindex="-1">请求URL <a class="header-anchor" href="#请求url-2" aria-label="Permalink to &quot;请求URL&quot;">​</a></h4><ul><li><code>/api/v1/review/getVideoReviewRecord?vid=视频ID </code></li></ul><h4 id="请求方式-2" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式-2" aria-label="Permalink to &quot;请求方式&quot;">​</a></h4><ul><li>GET</li></ul><h4 id="请求头-2" tabindex="-1">请求头 <a class="header-anchor" href="#请求头-2" aria-label="Permalink to &quot;请求头&quot;">​</a></h4><ul><li><code>Authorization&#39;: token</code></li></ul><h3 id="返回示例-2" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例-2" aria-label="Permalink to &quot;返回示例&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;review&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;remark&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;createdAt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ok&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="返回参数说明" tabindex="-1">返回参数说明 <a class="header-anchor" href="#返回参数说明" aria-label="Permalink to &quot;返回参数说明&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">status</td><td style="text-align:left;">int</td><td>审核状态</td></tr><tr><td style="text-align:left;">remark</td><td style="text-align:left;">string</td><td>审核备注</td></tr><tr><td style="text-align:left;">createdAt</td><td style="text-align:left;">time</td><td>审核时间</td></tr></tbody></table><h4 id="备注-2" tabindex="-1">备注 <a class="header-anchor" href="#备注-2" aria-label="Permalink to &quot;备注&quot;">​</a></h4><p>无</p>`,40),n=[l];function h(d,r,o,p,k,u){return i(),t("div",null,n)}const g=a(e,[["render",h]]);export{E as __pageData,g as default};
