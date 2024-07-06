import{_ as t,c as a,o as s,a2 as i}from"./chunks/framework.DRZK5IXa.js";const u=JSON.parse('{"title":"API管理相关接口","description":"","frontmatter":{},"headers":[],"relativePath":"api/api.md","filePath":"api/api.md"}'),l={name:"api/api.md"},e=i(`<h1 id="api管理相关接口" tabindex="-1">API管理相关接口 <a class="header-anchor" href="#api管理相关接口" aria-label="Permalink to &quot;API管理相关接口&quot;">​</a></h1><h2 id="获取api列表" tabindex="-1">获取API列表 <a class="header-anchor" href="#获取api列表" aria-label="Permalink to &quot;获取API列表&quot;">​</a></h2><h4 id="请求url" tabindex="-1">请求URL <a class="header-anchor" href="#请求url" aria-label="Permalink to &quot;请求URL&quot;">​</a></h4><ul><li><code>/api/v1/api/getApiList </code></li></ul><h4 id="请求方式" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式" aria-label="Permalink to &quot;请求方式&quot;">​</a></h4><ul><li>POST</li></ul><h4 id="请求头" tabindex="-1">请求头 <a class="header-anchor" href="#请求头" aria-label="Permalink to &quot;请求头&quot;">​</a></h4><ul><li><code>Authorization&#39;: token</code></li><li><code>&quot;content-type&quot;: &quot;application/json&quot;</code></li></ul><h4 id="请求参数" tabindex="-1">请求参数 <a class="header-anchor" href="#请求参数" aria-label="Permalink to &quot;请求参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">必选</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">page</td><td style="text-align:left;">是</td><td style="text-align:left;">int</td><td>页码</td></tr><tr><td style="text-align:left;">pageSize</td><td style="text-align:left;">是</td><td style="text-align:left;">int</td><td>页面数量，最大100</td></tr></tbody></table><h4 id="返回示例" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例" aria-label="Permalink to &quot;返回示例&quot;">​</a></h4><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;total&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;list&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;method&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;GET&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;category&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;desc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;createdAt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2021-07-16T08:49:54Z&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ok&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="返回参数说明" tabindex="-1">返回参数说明 <a class="header-anchor" href="#返回参数说明" aria-label="Permalink to &quot;返回参数说明&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">total</td><td style="text-align:left;">int</td><td>数量</td></tr><tr><td style="text-align:left;">list</td><td style="text-align:left;">object</td><td>API信息数组</td></tr></tbody></table><h5 id="api信息" tabindex="-1">API信息 <a class="header-anchor" href="#api信息" aria-label="Permalink to &quot;API信息&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">id</td><td style="text-align:left;">int</td><td>ID</td></tr><tr><td style="text-align:left;">method</td><td style="text-align:left;">string</td><td>请求方法</td></tr><tr><td style="text-align:left;">path</td><td style="text-align:left;">string</td><td>请求路径</td></tr><tr><td style="text-align:left;">category</td><td style="text-align:left;">string</td><td>分组</td></tr><tr><td style="text-align:left;">desc</td><td style="text-align:left;">string</td><td>简介</td></tr><tr><td style="text-align:left;">createdAt</td><td style="text-align:left;">string</td><td>上传时间</td></tr></tbody></table><h4 id="备注" tabindex="-1">备注 <a class="header-anchor" href="#备注" aria-label="Permalink to &quot;备注&quot;">​</a></h4><p>无</p><h2 id="获取全部api列表" tabindex="-1">获取全部API列表 <a class="header-anchor" href="#获取全部api列表" aria-label="Permalink to &quot;获取全部API列表&quot;">​</a></h2><h4 id="请求url-1" tabindex="-1">请求URL <a class="header-anchor" href="#请求url-1" aria-label="Permalink to &quot;请求URL&quot;">​</a></h4><ul><li><code>/api/v1/api/getAllApiList</code></li></ul><h4 id="请求方式-1" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式-1" aria-label="Permalink to &quot;请求方式&quot;">​</a></h4><ul><li>GET</li></ul><h4 id="请求头-1" tabindex="-1">请求头 <a class="header-anchor" href="#请求头-1" aria-label="Permalink to &quot;请求头&quot;">​</a></h4><ul><li><code>Authorization&#39;: token</code></li></ul><h4 id="返回示例-1" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例-1" aria-label="Permalink to &quot;返回示例&quot;">​</a></h4><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;total&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;list&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;method&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;GET&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;category&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;desc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;createdAt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2021-07-16T08:49:54Z&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ok&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="返回参数说明-1" tabindex="-1">返回参数说明 <a class="header-anchor" href="#返回参数说明-1" aria-label="Permalink to &quot;返回参数说明&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">total</td><td style="text-align:left;">int</td><td>数量</td></tr><tr><td style="text-align:left;">list</td><td style="text-align:left;">object</td><td>API信息数组</td></tr></tbody></table><h5 id="api信息-1" tabindex="-1">API信息 <a class="header-anchor" href="#api信息-1" aria-label="Permalink to &quot;API信息&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">id</td><td style="text-align:left;">int</td><td>ID</td></tr><tr><td style="text-align:left;">method</td><td style="text-align:left;">string</td><td>请求方法</td></tr><tr><td style="text-align:left;">path</td><td style="text-align:left;">string</td><td>请求路径</td></tr><tr><td style="text-align:left;">category</td><td style="text-align:left;">string</td><td>分组</td></tr><tr><td style="text-align:left;">desc</td><td style="text-align:left;">string</td><td>简介</td></tr><tr><td style="text-align:left;">createdAt</td><td style="text-align:left;">string</td><td>上传时间</td></tr></tbody></table><h4 id="备注-1" tabindex="-1">备注 <a class="header-anchor" href="#备注-1" aria-label="Permalink to &quot;备注&quot;">​</a></h4><p>无</p><h2 id="新增api" tabindex="-1">新增API <a class="header-anchor" href="#新增api" aria-label="Permalink to &quot;新增API&quot;">​</a></h2><h4 id="请求url-2" tabindex="-1">请求URL <a class="header-anchor" href="#请求url-2" aria-label="Permalink to &quot;请求URL&quot;">​</a></h4><ul><li><code>/api/v1/api/addAPI</code></li></ul><h4 id="请求方式-2" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式-2" aria-label="Permalink to &quot;请求方式&quot;">​</a></h4><ul><li>POST</li></ul><h4 id="请求头-2" tabindex="-1">请求头 <a class="header-anchor" href="#请求头-2" aria-label="Permalink to &quot;请求头&quot;">​</a></h4><ul><li><code>Authorization&#39;: token</code></li><li><code>&quot;content-type&quot;: &quot;application/json&quot;</code></li></ul><h4 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">必选</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">method</td><td style="text-align:left;">是</td><td style="text-align:left;">string</td><td>请求方法</td></tr><tr><td style="text-align:left;">path</td><td style="text-align:left;">是</td><td style="text-align:left;">string</td><td>请求路径</td></tr><tr><td style="text-align:left;">category</td><td style="text-align:left;">是</td><td style="text-align:left;">string</td><td>分组</td></tr><tr><td style="text-align:left;">desc</td><td style="text-align:left;">是</td><td style="text-align:left;">string</td><td>简介</td></tr></tbody></table><h4 id="返回示例-2" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例-2" aria-label="Permalink to &quot;返回示例&quot;">​</a></h4><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ok&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="备注-2" tabindex="-1">备注 <a class="header-anchor" href="#备注-2" aria-label="Permalink to &quot;备注&quot;">​</a></h4><p>无</p><h2 id="编辑api" tabindex="-1">编辑API <a class="header-anchor" href="#编辑api" aria-label="Permalink to &quot;编辑API&quot;">​</a></h2><h4 id="请求url-3" tabindex="-1">请求URL <a class="header-anchor" href="#请求url-3" aria-label="Permalink to &quot;请求URL&quot;">​</a></h4><ul><li><code>/api/v1/api/editApi</code></li></ul><h4 id="请求方式-3" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式-3" aria-label="Permalink to &quot;请求方式&quot;">​</a></h4><ul><li>PUT</li></ul><h4 id="请求头-3" tabindex="-1">请求头 <a class="header-anchor" href="#请求头-3" aria-label="Permalink to &quot;请求头&quot;">​</a></h4><ul><li><code>Authorization&#39;: token</code></li><li><code>&quot;content-type&quot;: &quot;application/json&quot;,</code></li></ul><h4 id="参数-1" tabindex="-1">参数 <a class="header-anchor" href="#参数-1" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">必选</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">id</td><td style="text-align:left;">是</td><td style="text-align:left;">int</td><td>ID</td></tr><tr><td style="text-align:left;">method</td><td style="text-align:left;">是</td><td style="text-align:left;">string</td><td>请求方法</td></tr><tr><td style="text-align:left;">path</td><td style="text-align:left;">是</td><td style="text-align:left;">string</td><td>请求路径</td></tr><tr><td style="text-align:left;">category</td><td style="text-align:left;">是</td><td style="text-align:left;">string</td><td>分组</td></tr><tr><td style="text-align:left;">desc</td><td style="text-align:left;">是</td><td style="text-align:left;">string</td><td>简介</td></tr></tbody></table><h4 id="返回示例-3" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例-3" aria-label="Permalink to &quot;返回示例&quot;">​</a></h4><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ok&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="备注-3" tabindex="-1">备注 <a class="header-anchor" href="#备注-3" aria-label="Permalink to &quot;备注&quot;">​</a></h4><p>无</p><h2 id="删除api" tabindex="-1">删除API <a class="header-anchor" href="#删除api" aria-label="Permalink to &quot;删除API&quot;">​</a></h2><h4 id="请求url-4" tabindex="-1">请求URL <a class="header-anchor" href="#请求url-4" aria-label="Permalink to &quot;请求URL&quot;">​</a></h4><ul><li><code>/api/v1/api/deleteApi/接口ID</code></li></ul><h4 id="请求方式-4" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式-4" aria-label="Permalink to &quot;请求方式&quot;">​</a></h4><ul><li>DELETE</li></ul><h4 id="请求头-4" tabindex="-1">请求头 <a class="header-anchor" href="#请求头-4" aria-label="Permalink to &quot;请求头&quot;">​</a></h4><ul><li><code>Authorization&#39;: token </code></li></ul><h4 id="返回示例-4" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例-4" aria-label="Permalink to &quot;返回示例&quot;">​</a></h4><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ok&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="备注-4" tabindex="-1">备注 <a class="header-anchor" href="#备注-4" aria-label="Permalink to &quot;备注&quot;">​</a></h4><p>无</p><h2 id="获取角色api" tabindex="-1">获取角色API <a class="header-anchor" href="#获取角色api" aria-label="Permalink to &quot;获取角色API&quot;">​</a></h2><h4 id="请求url-5" tabindex="-1">请求URL <a class="header-anchor" href="#请求url-5" aria-label="Permalink to &quot;请求URL&quot;">​</a></h4><ul><li><code>/api/v1/api/getRoleApi?code=角色代码 </code></li></ul><h4 id="请求方式-5" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式-5" aria-label="Permalink to &quot;请求方式&quot;">​</a></h4><ul><li>GET</li></ul><h4 id="请求头-5" tabindex="-1">请求头 <a class="header-anchor" href="#请求头-5" aria-label="Permalink to &quot;请求头&quot;">​</a></h4><ul><li><code>Authorization&#39;: token</code></li></ul><h4 id="返回示例-5" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例-5" aria-label="Permalink to &quot;返回示例&quot;">​</a></h4><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;list&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;method&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;GET&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;category&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;desc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;createdAt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2021-07-16T08:49:54Z&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ok&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="返回参数说明-2" tabindex="-1">返回参数说明 <a class="header-anchor" href="#返回参数说明-2" aria-label="Permalink to &quot;返回参数说明&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">list</td><td style="text-align:left;">object</td><td>API信息数组</td></tr></tbody></table><h5 id="api信息-2" tabindex="-1">API信息 <a class="header-anchor" href="#api信息-2" aria-label="Permalink to &quot;API信息&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">id</td><td style="text-align:left;">int</td><td>ID</td></tr><tr><td style="text-align:left;">method</td><td style="text-align:left;">string</td><td>请求方法</td></tr><tr><td style="text-align:left;">path</td><td style="text-align:left;">string</td><td>请求路径</td></tr><tr><td style="text-align:left;">category</td><td style="text-align:left;">string</td><td>分组</td></tr><tr><td style="text-align:left;">desc</td><td style="text-align:left;">string</td><td>简介</td></tr><tr><td style="text-align:left;">createdAt</td><td style="text-align:left;">string</td><td>上传时间</td></tr></tbody></table><h4 id="备注-5" tabindex="-1">备注 <a class="header-anchor" href="#备注-5" aria-label="Permalink to &quot;备注&quot;">​</a></h4><p>无</p><h2 id="编辑角色api" tabindex="-1">编辑角色API <a class="header-anchor" href="#编辑角色api" aria-label="Permalink to &quot;编辑角色API&quot;">​</a></h2><h4 id="请求url-6" tabindex="-1">请求URL <a class="header-anchor" href="#请求url-6" aria-label="Permalink to &quot;请求URL&quot;">​</a></h4><ul><li><code>/api/v1/api/editRoleApi</code></li></ul><h4 id="请求方式-6" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式-6" aria-label="Permalink to &quot;请求方式&quot;">​</a></h4><ul><li>PUT</li></ul><h4 id="请求头-6" tabindex="-1">请求头 <a class="header-anchor" href="#请求头-6" aria-label="Permalink to &quot;请求头&quot;">​</a></h4><ul><li><code>Authorization&#39;: token</code></li><li><code>&quot;content-type&quot;: &quot;application/json&quot;,</code></li></ul><h4 id="参数-2" tabindex="-1">参数 <a class="header-anchor" href="#参数-2" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">必选</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">id</td><td style="text-align:left;">是</td><td style="text-align:left;">int</td><td>角色ID</td></tr><tr><td style="text-align:left;">addIds</td><td style="text-align:left;">是</td><td style="text-align:left;">[]int</td><td>添加API ID数组</td></tr><tr><td style="text-align:left;">removeIds</td><td style="text-align:left;">是</td><td style="text-align:left;">[]int</td><td>移除API ID数组</td></tr></tbody></table><h4 id="返回示例-6" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例-6" aria-label="Permalink to &quot;返回示例&quot;">​</a></h4><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ok&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="备注-6" tabindex="-1">备注 <a class="header-anchor" href="#备注-6" aria-label="Permalink to &quot;备注&quot;">​</a></h4><p>无</p>`,98),n=[e];function h(d,p,r,k,o,E){return s(),a("div",null,n)}const y=t(l,[["render",h]]);export{u as __pageData,y as default};
