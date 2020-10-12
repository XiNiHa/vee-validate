(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{540:function(e,t,a){"use strict";a.r(t);var s=a(31),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"required-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#required-fields","aria-hidden":"true"}},[e._v("#")]),e._v(" Required Fields")]),e._v(" "),a("p",[e._v("You might've noticed that the previous examples avoided implementing the most common validation rule, the "),a("code",[e._v("required")]),e._v(" rule. This topic requires its own guide as it involves intent more than actual logic.")]),e._v(" "),a("h2",{attrs:{id:"what-makes-a-field-required"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-makes-a-field-required","aria-hidden":"true"}},[e._v("#")]),e._v(" What makes a field required")]),e._v(" "),a("p",[e._v("A field is required when your form absolutely needs that field's value "),a("strong",[e._v("to be present")]),e._v(", which brings you to another question, "),a("strong",[e._v("what does it mean for a value to be present?")])]),e._v(" "),a("p",[e._v("From vee-validate's perspective, there are a set of "),a("strong",[e._v("empty values")]),e._v(" which are not the same as "),a("strong",[e._v("falsy values")]),e._v(". These values are:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("undefined")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("null")]),e._v(".")]),e._v(" "),a("li",[e._v("Empty Strings.")]),e._v(" "),a("li",[e._v("Empty Arrays.")])]),e._v(" "),a("p",[e._v("Notice that empty arrays "),a("code",[e._v("[]")]),e._v(" are considered an empty value, this is an assumption made by vee-validate based on common use-cases. Meanwhile "),a("code",[e._v("0")]),e._v(" is a valid "),a("strong",[e._v("present")]),e._v(" value, and "),a("code",[e._v("false")]),e._v(" is also a "),a("strong",[e._v("present")]),e._v(" value.")]),e._v(" "),a("p",[e._v("For the number "),a("code",[e._v("0")]),e._v(", while it is a falsy value, it is still a perfectly valid value to be provided by the user.")]),e._v(" "),a("p",[e._v("For the boolean "),a("code",[e._v("false")]),e._v(", this is tricky because you could argue that "),a("code",[e._v("false")]),e._v(" is the "),a("strong",[e._v("unchecked")]),e._v(" value of a checkbox. A counter argument is you could have a radio button with "),a("strong",[e._v("Yes/No")]),e._v(" options and "),a("code",[e._v("false")]),e._v(" would be a valid "),a("strong",[e._v("checked")]),e._v(" value. As you could tell this subject is based on assumptions and intent, this is just a design decision for vee-validate.")]),e._v(" "),a("h2",{attrs:{id:"optional-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optional-fields","aria-hidden":"true"}},[e._v("#")]),e._v(" Optional Fields")]),e._v(" "),a("p",[e._v("Assume you apply a "),a("strong",[e._v("min:3")]),e._v(" rule to an optional field, wouldn't that invalidate the field as it is empty?")]),e._v(" "),a("p",[e._v("As you noticed from the examples presented earlier, "),a("strong",[e._v("vee-validate doesn't validate optional fields when they are empty")]),e._v(". Which makes sense, if the user didn't input any value in an optional field, it is valid. Until they've entered a non-empty value, rules won't be run.")]),e._v(" "),a("h2",{attrs:{id:"creating-a-required-rule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-required-rule","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating a required rule")]),e._v(" "),a("p",[e._v("Now that you learned the design decisions for this topic, you know that "),a("code",[e._v("required")]),e._v(" is a special rule, as it needs to report more than the validity of the value, it needs to also report the "),a("code",[e._v("required")]),e._v(" state of that value as well.")]),e._v(" "),a("p",[e._v("To create a "),a("code",[e._v("required")]),e._v(" rule, you need to add a "),a("code",[e._v("computesRequired")]),e._v(" key to the "),a("code",[e._v("extend")]),e._v(" function rule options:")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("extend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'required'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("validate")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// This rule reports the `required` state of the field.")]),e._v("\n  computesRequired"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("Then you need to actually report said state, this is done inside the "),a("code",[e._v("validate")]),e._v(" function:")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("extend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'required'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("validate")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      required"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      valid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" undefined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("indexOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  computesRequired"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("Note that the return type of the "),a("code",[e._v("validate")]),e._v(" function is now an "),a("code",[e._v("object")]),e._v(" containing:")]),e._v(" "),a("ul",[a("li",[e._v("A "),a("code",[e._v("valid")]),e._v(" key which reports the validity of the field.")]),e._v(" "),a("li",[e._v("A "),a("code",[e._v("required")]),e._v(" key which reports if the field is required or not.")])]),e._v(" "),a("p",[e._v("For the classic "),a("code",[e._v("required")]),e._v(" rule, the "),a("code",[e._v("required")]),e._v(" key will always be "),a("code",[e._v("true")]),e._v(". However, having the power to dynamically set the "),a("code",[e._v("required")]),e._v(" state for the field allows you to create really powerful and interesting rules. For an example of such a rule, see "),a("a",{attrs:{href:"https://github.com/logaretm/vee-validate/blob/master/src/rules/required_if.ts",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("required_if")]),e._v(" implementation"),a("OutboundLink")],1),e._v(".")])])},[],!1,null,null,null);t.default=n.exports}}]);