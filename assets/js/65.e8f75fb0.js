(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1013:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ssafy-automation-with-selenium"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssafy-automation-with-selenium"}},[t._v("#")]),t._v(" SSAFY automation with Selenium")]),t._v(" "),a("blockquote",[a("p",[t._v("It's really annoying to do this everyday. Should have done this months ago but here we go.")])]),t._v(" "),a("h2",{attrs:{id:"preparation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[t._v("#")]),t._v(" Preparation")]),t._v(" "),a("p",[a("code",[t._v("pip install selenium")])]),t._v(" "),a("p",[t._v("Download chromedriver")]),t._v(" "),a("p",[t._v("Place it at "),a("code",[t._v("C:\\Program Files (x86)")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" selenium "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" webdriver\nPATH "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:\\Program Files (x86)\\chromedriver.exe"')]),t._v("\ndriver "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" webdriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Chrome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PATH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"execution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execution"}},[t._v("#")]),t._v(" Execution")]),t._v(" "),a("h3",{attrs:{id:"opening-browser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opening-browser"}},[t._v("#")]),t._v(" Opening browser")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("driver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://edu.ssafy.com/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"accessing-html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-html"}},[t._v("#")]),t._v(" Accessing HTML")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" driver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find_element_by_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npwd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" driver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find_element_by_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userPwd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("code",[t._v(".text")]),t._v(" to access inner text")]),t._v(" "),a("h3",{attrs:{id:"wait-until-present"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wait-until-present"}},[t._v("#")]),t._v(" Wait until present")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" selenium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webdriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("common"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("by "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" By\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" selenium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webdriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("support"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ui "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" WebDriverWait\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" selenium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webdriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("support "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" expected_conditions "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" EC\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    element "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WebDriverWait"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("driver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("until"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        EC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("presence_of_all_elements_located"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("By"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CLASS_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pop-event-close"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error 1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[a("img",{attrs:{src:"README.assets/image-20201230084332885.png",alt:"image-20201230084332885"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"README.assets/image-20201230084347679.png",alt:"image-20201230084347679"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"README.assets/image-20201230084417048.png",alt:"image-20201230084417048"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"README.assets/image-20201230084501571.png",alt:"image-20201230084501571"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"README.assets/image-20201230084520051.png",alt:"image-20201230084520051"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"README.assets/image-20201230084630281.png",alt:"image-20201230084630281"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"README.assets/image-20201230084645199.png",alt:"image-20201230084645199"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"README.assets/image-20201230084708242.png",alt:"image-20201230084708242"}})]),t._v(" "),a("p",[t._v("1 2 5 7 9")]),t._v(" "),a("p",[a("img",{attrs:{src:"README.assets/image-20201230084824382.png",alt:"image-20201230084824382"}})]),t._v(" "),a("h3",{attrs:{id:"typing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typing"}},[t._v("#")]),t._v(" Typing")]),t._v(" "),a("h2",{attrs:{id:"environment-variable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment-variable"}},[t._v("#")]),t._v(" Environment Variable")]),t._v(" "),a("p",[a("code",[t._v("pip install python-dotenv")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("From dotenv "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" load_dotenv\nload_dotenv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\ntoken "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api-token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('api-token = "abcdef_123456"\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);