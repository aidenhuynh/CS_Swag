---
keywords: fastai
description: "A python quiz using stuff from 3.1 and 3.2"
title: "Week 14 - Variables, Assignments, and Data Abstractions Hacks"
toc: true
branch: master
badges: true
comments: true
permalink: /jupyter/vardata
categories: [lessons]
nb_path: _notebooks/2022-11-28-vardatahacks.ipynb
layout: notebook
---

<!--
#################################################
### THIS FILE WAS AUTOGENERATED! DO NOT EDIT! ###
#################################################
# file to edit: _notebooks/2022-11-28-vardatahacks.ipynb
-->

<div class="container" id="notebook-container">
        
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="k">def</span> <span class="nf">qAndRsp</span><span class="p">(</span><span class="n">prompt</span><span class="p">):</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Question: &quot;</span> <span class="o">+</span> <span class="n">prompt</span><span class="p">)</span>
    <span class="n">msg</span> <span class="o">=</span> <span class="nb">input</span><span class="p">(</span><span class="n">prompt</span><span class="p">)</span>
    <span class="k">return</span> <span class="n">msg</span>

<span class="n">questionsList</span> <span class="o">=</span> <span class="p">[</span>
    <span class="p">[</span><span class="s2">&quot;What language was this coded in?&quot;</span><span class="p">,</span> <span class="s2">&quot;python&quot;</span><span class="p">],</span>
    <span class="p">[</span><span class="s2">&quot;Sussy&quot;</span><span class="p">,</span> <span class="s2">&quot;among us&quot;</span><span class="p">],</span>
    <span class="p">[</span><span class="s2">&quot;What letter comes after A in the alphabet?&quot;</span><span class="p">,</span><span class="s2">&quot;b&quot;</span><span class="p">],</span>
    <span class="p">[</span><span class="s2">&quot;What is 3+4?&quot;</span><span class="p">,</span><span class="s2">&quot;7&quot;</span><span class="p">],</span>
    <span class="p">[</span><span class="s2">&quot;What is my least favorite class?&quot;</span><span class="p">,</span><span class="s2">&quot;csp&quot;</span><span class="p">],</span>
    <span class="p">[</span><span class="s2">&quot;aAAAAAaaaaaAaAaaAaaAAaaAAaaAaAaaa&quot;</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">],</span>
    <span class="p">[</span><span class="s2">&quot;I quit&quot;</span><span class="p">,</span> <span class="s2">&quot;ok&quot;</span><span class="p">],</span>
<span class="p">]</span>

<span class="n">correct</span> <span class="o">=</span> <span class="mi">0</span>
<span class="n">questions</span> <span class="o">=</span> <span class="nb">len</span><span class="p">(</span><span class="n">questionsList</span><span class="p">)</span>

<span class="k">for</span> <span class="n">QAPair</span> <span class="ow">in</span> <span class="n">questionsList</span><span class="p">:</span>

    <span class="n">question</span> <span class="o">=</span> <span class="n">QAPair</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span>
    <span class="n">answer</span> <span class="o">=</span> <span class="n">QAPair</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span>

    <span class="n">rsp</span> <span class="o">=</span> <span class="n">qAndRsp</span><span class="p">(</span><span class="n">question</span><span class="p">)</span>
    <span class="n">rspLower</span> <span class="o">=</span> <span class="n">rsp</span><span class="o">.</span><span class="n">lower</span><span class="p">()</span>
    
    <span class="k">if</span> <span class="n">rspLower</span> <span class="o">==</span> <span class="n">answer</span><span class="p">:</span>
        <span class="nb">print</span><span class="p">(</span><span class="n">rsp</span> <span class="o">+</span> <span class="s2">&quot; is correct!&quot;</span><span class="p">)</span>
        <span class="n">correct</span> <span class="o">+=</span> <span class="mi">1</span>
    <span class="k">else</span><span class="p">:</span>
        <span class="nb">print</span><span class="p">(</span><span class="n">rsp</span> <span class="o">+</span> <span class="s2">&quot; is incorrect!&quot;</span><span class="p">)</span>
        
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">)</span>

<span class="n">quotient</span><span class="o">=</span><span class="n">correct</span><span class="o">/</span><span class="n">questions</span>
<span class="n">percentage</span><span class="o">=</span><span class="nb">round</span><span class="p">((</span><span class="n">quotient</span> <span class="o">*</span> <span class="mi">100</span><span class="p">),</span> <span class="mi">2</span><span class="p">)</span>

<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;You scored &quot;</span> <span class="o">+</span> <span class="nb">str</span><span class="p">(</span><span class="n">correct</span><span class="p">)</span> <span class="o">+</span><span class="s2">&quot;/&quot;</span> <span class="o">+</span> <span class="nb">str</span><span class="p">(</span><span class="n">questions</span><span class="p">))</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;That&#39;s&quot;</span><span class="p">,</span> <span class="n">percentage</span><span class="p">,</span><span class="s2">&quot;%!&quot;</span><span class="p">)</span>

<span class="n">percentList</span> <span class="o">=</span> <span class="p">[</span>
    <span class="p">[</span><span class="mi">100</span><span class="p">,</span><span class="s2">&quot;Perfect!&quot;</span><span class="p">],</span>
    <span class="p">[</span><span class="mi">90</span><span class="p">,</span><span class="s2">&quot;Great!&quot;</span><span class="p">],</span>
    <span class="p">[</span><span class="mi">80</span><span class="p">,</span><span class="s2">&quot;Nice!&quot;</span><span class="p">],</span>
    <span class="p">[</span><span class="mi">70</span><span class="p">,</span><span class="s2">&quot;Could be better&quot;</span><span class="p">],</span>
    <span class="p">[</span><span class="mi">60</span><span class="p">,</span><span class="s2">&quot;Needs improvement&quot;</span><span class="p">],</span>
<span class="p">]</span>

<span class="k">for</span> <span class="n">numbersPair</span> <span class="ow">in</span> <span class="n">percentList</span><span class="p">:</span>
    
    <span class="n">numbers</span> <span class="o">=</span> <span class="n">numbersPair</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span>
    <span class="n">note</span> <span class="o">=</span> <span class="n">numbersPair</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span>
    
    <span class="k">if</span> <span class="n">numbers</span> <span class="o">+</span> <span class="mi">10</span> <span class="o">&gt;</span> <span class="n">percentage</span> <span class="o">&gt;=</span> <span class="n">numbers</span><span class="p">:</span>
        <span class="nb">print</span><span class="p">(</span><span class="n">note</span><span class="p">)</span>    

<span class="k">if</span> <span class="mi">60</span> <span class="o">&gt;</span> <span class="n">percentage</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">:</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Skill issue?&quot;</span><span class="p">)</span>
<span class="k">elif</span> <span class="n">percentage</span> <span class="o">==</span><span class="mi">0</span><span class="p">:</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Very cool!!&quot;</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>Question: What language was this coded in?
python is correct!

Question: Sussy
AMOGUS is incorrect!

Question: What letter comes after A in the alphabet?
b is correct!

Question: What is 3+4?
7 is correct!

Question: What is my least favorite class?
CSP is correct!

Question: aAAAAAaaaaaAaAaaAaaAAaaAAaaAaAaaa
AAAHHHH is incorrect!

Question: I quit
me too is incorrect!

You scored 4/7
That&#39;s 57.14 %!
Skill issue?
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

</div>
 

