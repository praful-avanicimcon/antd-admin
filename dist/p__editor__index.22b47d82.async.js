/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkantd_admin"] = self["webpackChunkantd_admin"] || []).push([[919],{

/***/ 58363:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditorPage; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81676);\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9041);\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71230);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15746);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97179);\n/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89265);\n/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_html__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var draftjs_to_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15158);\n/* harmony import */ var draftjs_to_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_markdown__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nclass EditorPage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n\n    this.onEditorStateChange = editorContent => {\n      this.setState({\n        editorContent\n      });\n    };\n\n    this.state = {\n      editorContent: null\n    };\n  }\n\n  render() {\n    var editorContent = this.state.editorContent;\n    var colProps = {\n      lg: 12,\n      md: 24,\n      style: {\n        marginBottom: 32\n      }\n    };\n    var textareaStyle = {\n      minHeight: 496,\n      width: '100%',\n      background: '#f7f7f7',\n      borderColor: '#F1F1F1',\n      padding: '16px 8px'\n    };\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components__WEBPACK_IMPORTED_MODULE_1__/* .Page */ .T3, {\n      inner: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {\n      gutter: 32\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, colProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {\n      title: \"Editor\",\n      style: {\n        overflow: 'visible'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components__WEBPACK_IMPORTED_MODULE_1__/* .Editor */ .ML, {\n      wrapperStyle: {\n        minHeight: 500\n      },\n      editorStyle: {\n        minHeight: 376\n      },\n      editorState: editorContent,\n      onEditorStateChange: this.onEditorStateChange\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, colProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {\n      title: \"HTML\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"textarea\", {\n      style: textareaStyle,\n      disabled: true,\n      value: editorContent ? draftjs_to_html__WEBPACK_IMPORTED_MODULE_3___default()((0,draft_js__WEBPACK_IMPORTED_MODULE_2__.convertToRaw)(editorContent.getCurrentContent())) : ''\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, colProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {\n      title: \"Markdown\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"textarea\", {\n      style: textareaStyle,\n      disabled: true,\n      value: editorContent ? draftjs_to_markdown__WEBPACK_IMPORTED_MODULE_4___default()((0,draft_js__WEBPACK_IMPORTED_MODULE_2__.convertToRaw)(editorContent.getCurrentContent())) : ''\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, colProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {\n      title: \"JSON\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"textarea\", {\n      style: textareaStyle,\n      disabled: true,\n      value: editorContent ? JSON.stringify((0,draft_js__WEBPACK_IMPORTED_MODULE_2__.convertToRaw)(editorContent.getCurrentContent())) : ''\n    })))));\n  }\n\n}\n\n//# sourceURL=webpack://antd-admin/./src/pages/editor/index.js?");

/***/ }),

/***/ 89265:
/***/ (function(module) {

eval("(function (global, factory) {\n   true ? module.exports = factory() :\n  0;\n}(this, (function () { 'use strict';\n\n  /**\n  * Utility function to execute callback for eack key->value pair.\n  */\n  function forEach(obj, callback) {\n    if (obj) {\n      for (var key in obj) {\n        // eslint-disable-line no-restricted-syntax\n        if ({}.hasOwnProperty.call(obj, key)) {\n          callback(key, obj[key]);\n        }\n      }\n    }\n  }\n  /**\n  * The function returns true if the string passed to it has no content.\n  */\n\n  function isEmptyString(str) {\n    if (str === undefined || str === null || str.length === 0 || str.trim().length === 0) {\n      return true;\n    }\n\n    return false;\n  }\n\n  /**\n  * Mapping block-type to corresponding html tag.\n  */\n\n  var blockTypesMapping = {\n    unstyled: 'p',\n    'header-one': 'h1',\n    'header-two': 'h2',\n    'header-three': 'h3',\n    'header-four': 'h4',\n    'header-five': 'h5',\n    'header-six': 'h6',\n    'unordered-list-item': 'ul',\n    'ordered-list-item': 'ol',\n    blockquote: 'blockquote',\n    code: 'pre'\n  };\n  /**\n  * Function will return HTML tag for a block.\n  */\n\n  function getBlockTag(type) {\n    return type && blockTypesMapping[type];\n  }\n  /**\n  * Function will return style string for a block.\n  */\n\n  function getBlockStyle(data) {\n    var styles = '';\n    forEach(data, function (key, value) {\n      if (value) {\n        styles += \"\".concat(key, \":\").concat(value, \";\");\n      }\n    });\n    return styles;\n  }\n  /**\n  * The function returns an array of hashtag-sections in blocks.\n  * These will be areas in block which have hashtags applicable to them.\n  */\n\n  function getHashtagRanges(blockText, hashtagConfig) {\n    var sections = [];\n\n    if (hashtagConfig) {\n      var counter = 0;\n      var startIndex = 0;\n      var text = blockText;\n      var trigger = hashtagConfig.trigger || '#';\n      var separator = hashtagConfig.separator || ' ';\n\n      for (; text.length > 0 && startIndex >= 0;) {\n        if (text[0] === trigger) {\n          startIndex = 0;\n          counter = 0;\n          text = text.substr(trigger.length);\n        } else {\n          startIndex = text.indexOf(separator + trigger);\n\n          if (startIndex >= 0) {\n            text = text.substr(startIndex + (separator + trigger).length);\n            counter += startIndex + separator.length;\n          }\n        }\n\n        if (startIndex >= 0) {\n          var endIndex = text.indexOf(separator) >= 0 ? text.indexOf(separator) : text.length;\n          var hashtag = text.substr(0, endIndex);\n\n          if (hashtag && hashtag.length > 0) {\n            sections.push({\n              offset: counter,\n              length: hashtag.length + trigger.length,\n              type: 'HASHTAG'\n            });\n          }\n\n          counter += trigger.length;\n        }\n      }\n    }\n\n    return sections;\n  }\n  /**\n  * The function returns an array of entity-sections in blocks.\n  * These will be areas in block which have same entity or no entity applicable to them.\n  */\n\n\n  function getSections(block, hashtagConfig) {\n    var sections = [];\n    var lastOffset = 0;\n    var sectionRanges = block.entityRanges.map(function (range) {\n      var offset = range.offset,\n          length = range.length,\n          key = range.key;\n      return {\n        offset: offset,\n        length: length,\n        key: key,\n        type: 'ENTITY'\n      };\n    });\n    sectionRanges = sectionRanges.concat(getHashtagRanges(block.text, hashtagConfig));\n    sectionRanges = sectionRanges.sort(function (s1, s2) {\n      return s1.offset - s2.offset;\n    });\n    sectionRanges.forEach(function (r) {\n      if (r.offset > lastOffset) {\n        sections.push({\n          start: lastOffset,\n          end: r.offset\n        });\n      }\n\n      sections.push({\n        start: r.offset,\n        end: r.offset + r.length,\n        entityKey: r.key,\n        type: r.type\n      });\n      lastOffset = r.offset + r.length;\n    });\n\n    if (lastOffset < block.text.length) {\n      sections.push({\n        start: lastOffset,\n        end: block.text.length\n      });\n    }\n\n    return sections;\n  }\n  /**\n  * Function to check if the block is an atomic entity block.\n  */\n\n\n  function isAtomicEntityBlock(block) {\n    if (block.entityRanges.length > 0 && (isEmptyString(block.text) || block.type === 'atomic')) {\n      return true;\n    }\n\n    return false;\n  }\n  /**\n  * The function will return array of inline styles applicable to the block.\n  */\n\n\n  function getStyleArrayForBlock(block) {\n    var text = block.text,\n        inlineStyleRanges = block.inlineStyleRanges;\n    var inlineStyles = {\n      BOLD: new Array(text.length),\n      ITALIC: new Array(text.length),\n      UNDERLINE: new Array(text.length),\n      STRIKETHROUGH: new Array(text.length),\n      CODE: new Array(text.length),\n      SUPERSCRIPT: new Array(text.length),\n      SUBSCRIPT: new Array(text.length),\n      COLOR: new Array(text.length),\n      BGCOLOR: new Array(text.length),\n      FONTSIZE: new Array(text.length),\n      FONTFAMILY: new Array(text.length),\n      length: text.length\n    };\n\n    if (inlineStyleRanges && inlineStyleRanges.length > 0) {\n      inlineStyleRanges.forEach(function (range) {\n        var offset = range.offset;\n        var length = offset + range.length;\n\n        for (var i = offset; i < length; i += 1) {\n          if (range.style.indexOf('color-') === 0) {\n            inlineStyles.COLOR[i] = range.style.substring(6);\n          } else if (range.style.indexOf('bgcolor-') === 0) {\n            inlineStyles.BGCOLOR[i] = range.style.substring(8);\n          } else if (range.style.indexOf('fontsize-') === 0) {\n            inlineStyles.FONTSIZE[i] = range.style.substring(9);\n          } else if (range.style.indexOf('fontfamily-') === 0) {\n            inlineStyles.FONTFAMILY[i] = range.style.substring(11);\n          } else if (inlineStyles[range.style]) {\n            inlineStyles[range.style][i] = true;\n          }\n        }\n      });\n    }\n\n    return inlineStyles;\n  }\n  /**\n  * The function will return inline style applicable at some offset within a block.\n  */\n\n\n  function getStylesAtOffset(inlineStyles, offset) {\n    var styles = {};\n\n    if (inlineStyles.COLOR[offset]) {\n      styles.COLOR = inlineStyles.COLOR[offset];\n    }\n\n    if (inlineStyles.BGCOLOR[offset]) {\n      styles.BGCOLOR = inlineStyles.BGCOLOR[offset];\n    }\n\n    if (inlineStyles.FONTSIZE[offset]) {\n      styles.FONTSIZE = inlineStyles.FONTSIZE[offset];\n    }\n\n    if (inlineStyles.FONTFAMILY[offset]) {\n      styles.FONTFAMILY = inlineStyles.FONTFAMILY[offset];\n    }\n\n    if (inlineStyles.UNDERLINE[offset]) {\n      styles.UNDERLINE = true;\n    }\n\n    if (inlineStyles.ITALIC[offset]) {\n      styles.ITALIC = true;\n    }\n\n    if (inlineStyles.BOLD[offset]) {\n      styles.BOLD = true;\n    }\n\n    if (inlineStyles.STRIKETHROUGH[offset]) {\n      styles.STRIKETHROUGH = true;\n    }\n\n    if (inlineStyles.CODE[offset]) {\n      styles.CODE = true;\n    }\n\n    if (inlineStyles.SUBSCRIPT[offset]) {\n      styles.SUBSCRIPT = true;\n    }\n\n    if (inlineStyles.SUPERSCRIPT[offset]) {\n      styles.SUPERSCRIPT = true;\n    }\n\n    return styles;\n  }\n  /**\n  * Function returns true for a set of styles if the value of these styles at an offset\n  * are same as that on the previous offset.\n  */\n\n  function sameStyleAsPrevious(inlineStyles, styles, index) {\n    var sameStyled = true;\n\n    if (index > 0 && index < inlineStyles.length) {\n      styles.forEach(function (style) {\n        sameStyled = sameStyled && inlineStyles[style][index] === inlineStyles[style][index - 1];\n      });\n    } else {\n      sameStyled = false;\n    }\n\n    return sameStyled;\n  }\n  /**\n  * Function returns html for text depending on inline style tags applicable to it.\n  */\n\n  function addInlineStyleMarkup(style, content) {\n    if (style === 'BOLD') {\n      return \"<strong>\".concat(content, \"</strong>\");\n    }\n\n    if (style === 'ITALIC') {\n      return \"<em>\".concat(content, \"</em>\");\n    }\n\n    if (style === 'UNDERLINE') {\n      return \"<ins>\".concat(content, \"</ins>\");\n    }\n\n    if (style === 'STRIKETHROUGH') {\n      return \"<del>\".concat(content, \"</del>\");\n    }\n\n    if (style === 'CODE') {\n      return \"<code>\".concat(content, \"</code>\");\n    }\n\n    if (style === 'SUPERSCRIPT') {\n      return \"<sup>\".concat(content, \"</sup>\");\n    }\n\n    if (style === 'SUBSCRIPT') {\n      return \"<sub>\".concat(content, \"</sub>\");\n    }\n\n    return content;\n  }\n  /**\n  * The function returns text for given section of block after doing required character replacements.\n  */\n\n  function getSectionText(text) {\n    if (text && text.length > 0) {\n      var chars = text.map(function (ch) {\n        switch (ch) {\n          case '\\n':\n            return '<br>';\n\n          case '&':\n            return '&amp;';\n\n          case '<':\n            return '&lt;';\n\n          case '>':\n            return '&gt;';\n\n          default:\n            return ch;\n        }\n      });\n      return chars.join('');\n    }\n\n    return '';\n  }\n  /**\n  * Function returns html for text depending on inline style tags applicable to it.\n  */\n\n\n  function addStylePropertyMarkup(styles, text) {\n    if (styles && (styles.COLOR || styles.BGCOLOR || styles.FONTSIZE || styles.FONTFAMILY)) {\n      var styleString = 'style=\"';\n\n      if (styles.COLOR) {\n        styleString += \"color: \".concat(styles.COLOR, \";\");\n      }\n\n      if (styles.BGCOLOR) {\n        styleString += \"background-color: \".concat(styles.BGCOLOR, \";\");\n      }\n\n      if (styles.FONTSIZE) {\n        styleString += \"font-size: \".concat(styles.FONTSIZE).concat(/^\\d+$/.test(styles.FONTSIZE) ? 'px' : '', \";\");\n      }\n\n      if (styles.FONTFAMILY) {\n        styleString += \"font-family: \".concat(styles.FONTFAMILY, \";\");\n      }\n\n      styleString += '\"';\n      return \"<span \".concat(styleString, \">\").concat(text, \"</span>\");\n    }\n\n    return text;\n  }\n  /**\n  * Function will return markup for Entity.\n  */\n\n  function getEntityMarkup(entityMap, entityKey, text, customEntityTransform) {\n    var entity = entityMap[entityKey];\n\n    if (typeof customEntityTransform === 'function') {\n      var html = customEntityTransform(entity, text);\n\n      if (html) {\n        return html;\n      }\n    }\n\n    if (entity.type === 'MENTION') {\n      return \"<a href=\\\"\".concat(entity.data.url, \"\\\" class=\\\"wysiwyg-mention\\\" data-mention data-value=\\\"\").concat(entity.data.value, \"\\\">\").concat(text, \"</a>\");\n    }\n\n    if (entity.type === 'LINK') {\n      var targetOption = entity.data.targetOption || '_self';\n      return \"<a href=\\\"\".concat(entity.data.url, \"\\\" target=\\\"\").concat(targetOption, \"\\\">\").concat(text, \"</a>\");\n    }\n\n    if (entity.type === 'IMAGE') {\n      var alignment = entity.data.alignment;\n\n      if (alignment && alignment.length) {\n        return \"<div style=\\\"text-align:\".concat(alignment, \";\\\"><img src=\\\"\").concat(entity.data.src, \"\\\" alt=\\\"\").concat(entity.data.alt, \"\\\" style=\\\"height: \").concat(entity.data.height, \";width: \").concat(entity.data.width, \"\\\"/></div>\");\n      }\n\n      return \"<img src=\\\"\".concat(entity.data.src, \"\\\" alt=\\\"\").concat(entity.data.alt, \"\\\" style=\\\"height: \").concat(entity.data.height, \";width: \").concat(entity.data.width, \"\\\"/>\");\n    }\n\n    if (entity.type === 'EMBEDDED_LINK') {\n      return \"<iframe width=\\\"\".concat(entity.data.width, \"\\\" height=\\\"\").concat(entity.data.height, \"\\\" src=\\\"\").concat(entity.data.src, \"\\\" frameBorder=\\\"0\\\"></iframe>\");\n    }\n\n    return text;\n  }\n  /**\n  * For a given section in a block the function will return a further list of sections,\n  * with similar inline styles applicable to them.\n  */\n\n\n  function getInlineStyleSections(block, styles, start, end) {\n    var styleSections = [];\n    var text = Array.from(block.text);\n\n    if (text.length > 0) {\n      var inlineStyles = getStyleArrayForBlock(block);\n      var section;\n\n      for (var i = start; i < end; i += 1) {\n        if (i !== start && sameStyleAsPrevious(inlineStyles, styles, i)) {\n          section.text.push(text[i]);\n          section.end = i + 1;\n        } else {\n          section = {\n            styles: getStylesAtOffset(inlineStyles, i),\n            text: [text[i]],\n            start: i,\n            end: i + 1\n          };\n          styleSections.push(section);\n        }\n      }\n    }\n\n    return styleSections;\n  }\n  /**\n  * Replace leading blank spaces by &nbsp;\n  */\n\n\n  function trimLeadingZeros(sectionText) {\n    if (sectionText) {\n      var replacedText = sectionText;\n\n      for (var i = 0; i < replacedText.length; i += 1) {\n        if (sectionText[i] === ' ') {\n          replacedText = replacedText.replace(' ', '&nbsp;');\n        } else {\n          break;\n        }\n      }\n\n      return replacedText;\n    }\n\n    return sectionText;\n  }\n  /**\n  * Replace trailing blank spaces by &nbsp;\n  */\n\n  function trimTrailingZeros(sectionText) {\n    if (sectionText) {\n      var replacedText = sectionText;\n\n      for (var i = replacedText.length - 1; i >= 0; i -= 1) {\n        if (replacedText[i] === ' ') {\n          replacedText = \"\".concat(replacedText.substring(0, i), \"&nbsp;\").concat(replacedText.substring(i + 1));\n        } else {\n          break;\n        }\n      }\n\n      return replacedText;\n    }\n\n    return sectionText;\n  }\n  /**\n  * The method returns markup for section to which inline styles\n  * like BOLD, ITALIC, UNDERLINE, STRIKETHROUGH, CODE, SUPERSCRIPT, SUBSCRIPT are applicable.\n  */\n\n  function getStyleTagSectionMarkup(styleSection) {\n    var styles = styleSection.styles,\n        text = styleSection.text;\n    var content = getSectionText(text);\n    forEach(styles, function (style, value) {\n      content = addInlineStyleMarkup(style, content);\n    });\n    return content;\n  }\n  /**\n  * The method returns markup for section to which inline styles\n  like color, background-color, font-size are applicable.\n  */\n\n\n  function getInlineStyleSectionMarkup(block, styleSection) {\n    var styleTagSections = getInlineStyleSections(block, ['BOLD', 'ITALIC', 'UNDERLINE', 'STRIKETHROUGH', 'CODE', 'SUPERSCRIPT', 'SUBSCRIPT'], styleSection.start, styleSection.end);\n    var styleSectionText = '';\n    styleTagSections.forEach(function (stylePropertySection) {\n      styleSectionText += getStyleTagSectionMarkup(stylePropertySection);\n    });\n    styleSectionText = addStylePropertyMarkup(styleSection.styles, styleSectionText);\n    return styleSectionText;\n  }\n  /*\n  * The method returns markup for an entity section.\n  * An entity section is a continuous section in a block\n  * to which same entity or no entity is applicable.\n  */\n\n\n  function getSectionMarkup(block, entityMap, section, customEntityTransform) {\n    var entityInlineMarkup = [];\n    var inlineStyleSections = getInlineStyleSections(block, ['COLOR', 'BGCOLOR', 'FONTSIZE', 'FONTFAMILY'], section.start, section.end);\n    inlineStyleSections.forEach(function (styleSection) {\n      entityInlineMarkup.push(getInlineStyleSectionMarkup(block, styleSection));\n    });\n    var sectionText = entityInlineMarkup.join('');\n\n    if (section.type === 'ENTITY') {\n      if (section.entityKey !== undefined && section.entityKey !== null) {\n        sectionText = getEntityMarkup(entityMap, section.entityKey, sectionText, customEntityTransform); // eslint-disable-line max-len\n      }\n    } else if (section.type === 'HASHTAG') {\n      sectionText = \"<a href=\\\"\".concat(sectionText, \"\\\" class=\\\"wysiwyg-hashtag\\\">\").concat(sectionText, \"</a>\");\n    }\n\n    return sectionText;\n  }\n  /**\n  * Function will return the markup for block preserving the inline styles and\n  * special characters like newlines or blank spaces.\n  */\n\n\n  function getBlockInnerMarkup(block, entityMap, hashtagConfig, customEntityTransform) {\n    var blockMarkup = [];\n    var sections = getSections(block, hashtagConfig);\n    sections.forEach(function (section, index) {\n      var sectionText = getSectionMarkup(block, entityMap, section, customEntityTransform);\n\n      if (index === 0) {\n        sectionText = trimLeadingZeros(sectionText);\n      }\n\n      if (index === sections.length - 1) {\n        sectionText = trimTrailingZeros(sectionText);\n      }\n\n      blockMarkup.push(sectionText);\n    });\n    return blockMarkup.join('');\n  }\n  /**\n  * Function will return html for the block.\n  */\n\n  function getBlockMarkup(block, entityMap, hashtagConfig, directional, customEntityTransform) {\n    var blockHtml = [];\n\n    if (isAtomicEntityBlock(block)) {\n      blockHtml.push(getEntityMarkup(entityMap, block.entityRanges[0].key, undefined, customEntityTransform));\n    } else {\n      var blockTag = getBlockTag(block.type);\n\n      if (blockTag) {\n        blockHtml.push(\"<\".concat(blockTag));\n        var blockStyle = getBlockStyle(block.data);\n\n        if (blockStyle) {\n          blockHtml.push(\" style=\\\"\".concat(blockStyle, \"\\\"\"));\n        }\n\n        if (directional) {\n          blockHtml.push(' dir = \"auto\"');\n        }\n\n        blockHtml.push('>');\n        blockHtml.push(getBlockInnerMarkup(block, entityMap, hashtagConfig, customEntityTransform));\n        blockHtml.push(\"</\".concat(blockTag, \">\"));\n      }\n    }\n\n    blockHtml.push('\\n');\n    return blockHtml.join('');\n  }\n\n  /**\n  * Function to check if a block is of type list.\n  */\n\n  function isList(blockType) {\n    return blockType === 'unordered-list-item' || blockType === 'ordered-list-item';\n  }\n  /**\n  * Function will return html markup for a list block.\n  */\n\n  function getListMarkup(listBlocks, entityMap, hashtagConfig, directional, customEntityTransform) {\n    var listHtml = [];\n    var nestedListBlock = [];\n    var previousBlock;\n    listBlocks.forEach(function (block) {\n      var nestedBlock = false;\n\n      if (!previousBlock) {\n        listHtml.push(\"<\".concat(getBlockTag(block.type), \">\\n\"));\n      } else if (previousBlock.type !== block.type) {\n        listHtml.push(\"</\".concat(getBlockTag(previousBlock.type), \">\\n\"));\n        listHtml.push(\"<\".concat(getBlockTag(block.type), \">\\n\"));\n      } else if (previousBlock.depth === block.depth) {\n        if (nestedListBlock && nestedListBlock.length > 0) {\n          listHtml.push(getListMarkup(nestedListBlock, entityMap, hashtagConfig, directional, customEntityTransform));\n          nestedListBlock = [];\n        }\n      } else {\n        nestedBlock = true;\n        nestedListBlock.push(block);\n      }\n\n      if (!nestedBlock) {\n        listHtml.push('<li');\n        var blockStyle = getBlockStyle(block.data);\n\n        if (blockStyle) {\n          listHtml.push(\" style=\\\"\".concat(blockStyle, \"\\\"\"));\n        }\n\n        if (directional) {\n          listHtml.push(' dir = \"auto\"');\n        }\n\n        listHtml.push('>');\n        listHtml.push(getBlockInnerMarkup(block, entityMap, hashtagConfig, customEntityTransform));\n        listHtml.push('</li>\\n');\n        previousBlock = block;\n      }\n    });\n\n    if (nestedListBlock && nestedListBlock.length > 0) {\n      listHtml.push(getListMarkup(nestedListBlock, entityMap, hashtagConfig, directional, customEntityTransform));\n    }\n\n    listHtml.push(\"</\".concat(getBlockTag(previousBlock.type), \">\\n\"));\n    return listHtml.join('');\n  }\n\n  /**\n  * The function will generate html markup for given draftjs editorContent.\n  */\n\n  function draftToHtml(editorContent, hashtagConfig, directional, customEntityTransform) {\n    var html = [];\n\n    if (editorContent) {\n      var blocks = editorContent.blocks,\n          entityMap = editorContent.entityMap;\n\n      if (blocks && blocks.length > 0) {\n        var listBlocks = [];\n        blocks.forEach(function (block) {\n          if (isList(block.type)) {\n            listBlocks.push(block);\n          } else {\n            if (listBlocks.length > 0) {\n              var listHtml = getListMarkup(listBlocks, entityMap, hashtagConfig, customEntityTransform); // eslint-disable-line max-len\n\n              html.push(listHtml);\n              listBlocks = [];\n            }\n\n            var blockHtml = getBlockMarkup(block, entityMap, hashtagConfig, directional, customEntityTransform);\n            html.push(blockHtml);\n          }\n        });\n\n        if (listBlocks.length > 0) {\n          var listHtml = getListMarkup(listBlocks, entityMap, hashtagConfig, directional, customEntityTransform); // eslint-disable-line max-len\n\n          html.push(listHtml);\n          listBlocks = [];\n        }\n      }\n    }\n\n    return html.join('');\n  }\n\n  return draftToHtml;\n\n})));\n\n\n//# sourceURL=webpack://antd-admin/./node_modules/draftjs-to-html/lib/draftjs-to-html.js?");

/***/ }),

/***/ 15158:
/***/ (function(module) {

eval("!function(t,e){ true?module.exports=e():0}(window,function(){return r={},o.m=n=[function(t,e,n){t.exports=n(1)},function(t,e,n){\"use strict\";function i(t,e){if(t)for(var n in t)!{}.hasOwnProperty.call(t,n)||e(n,t[n])}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e),n.d(e,\"sameStyleAsPrevious\",function(){return d}),n.d(e,\"getStylesAtOffset\",function(){return p}),n.d(e,\"addInlineStyleMarkdown\",function(){return g}),n.d(e,\"addStylePropertyMarkdown\",function(){return T}),n.d(e,\"trimLeadingZeros\",function(){return b}),n.d(e,\"trimTrailingZeros\",function(){return R}),n.d(e,\"getBlockContentMarkdown\",function(){return E}),n.d(e,\"getBlockStyle\",function(){return S}),n.d(e,\"default\",function(){return r});var l={unstyled:\"\",\"header-one\":\"# \",\"header-two\":\"## \",\"header-three\":\"### \",\"header-four\":\"#### \",\"header-five\":\"##### \",\"header-six\":\"###### \",\"unordered-list-item\":\"- \",\"ordered-list-item\":\"1. \",blockquote:\"> \",code:\"    \"};function O(t,e,n,r){var o=t[e];if(\"function\"==typeof r){var c=r(o,n);if(c)return c}return\"MENTION\"===o.type?\"[\".concat(n,\"](\").concat(o.data.url,\")\"):\"LINK\"===o.type?\"[\".concat(n,\"](\").concat(o.data.url,\")\"):\"IMAGE\"===o.type?\"![\".concat(o.data.alt||\"\",\"](\").concat(o.data.src,\")\"):\"EMBEDDED_LINK\"===o.type?'<iframe width=\"'.concat(o.data.width,'\" height=\"').concat(o.data.height,'\" src=\"').concat(o.data.src,'\" frameBorder=\"0\" allowFullScreen />'):n}function y(t,e){var n=[],r=0,o=t.entityRanges.map(function(t){return{offset:t.offset,length:t.length,key:t.key,type:\"ENTITY\"}});return(o=(o=o.concat(function(t,e){var n=[];if(e)for(var r=0,o=0,c=t,a=e.trigger||\"#\",u=e.separator||\" \";0<c.length&&0<=o;)if(c[0]===a?(r=o=0,c=c.substr(a.length)):0<=(o=c.indexOf(u+a))&&(c=c.substr(o+(u+a).length),r+=o+u.length),0<=o){var i=0<=c.indexOf(u)?c.indexOf(u):c.length,f=c.substr(0,i);f&&0<f.length&&n.push({offset:r,length:f.length+a.length,type:\"HASHTAG\"}),r+=a.length}return n}(t.text,e))).sort(function(t,e){return t.offset-e.offset})).forEach(function(t){t.offset>r&&n.push({start:r,end:t.offset-1}),n.push({start:t.offset,end:t.offset+t.length,entityKey:t.key,type:t.type}),r=t.offset+t.length}),r<t.text.length&&n.push({start:r,end:t.text.length}),n}function d(e,t,n){var r=!0;return 0<n&&n<e.length?t.forEach(function(t){r=r&&e[t][n]===e[t][n-1]}):r=!1,r}function p(t,e){var n={};return t.COLOR[e]&&(n.COLOR=t.COLOR[e]),t.BGCOLOR[e]&&(n.BGCOLOR=t.BGCOLOR[e]),t.FONTSIZE[e]&&(n.FONTSIZE=t.FONTSIZE[e]),t.FONTFAMILY[e]&&(n.FONTFAMILY=t.FONTFAMILY[e]),t.SUBSCRIPT[e]&&(n.SUBSCRIPT=!0),t.SUPERSCRIPT[e]&&(n.SUPERSCRIPT=!0),t.CODE[e]&&(n.CODE=!0),t.STRIKETHROUGH[e]&&(n.STRIKETHROUGH=!0),t.UNDERLINE[e]&&(n.UNDERLINE=!0),t.ITALIC[e]&&(n.ITALIC=!0),t.BOLD[e]&&(n.BOLD=!0),n}function h(t,e,n,r){var o,c,a,u,i=[],f=t.text;if(0<f.length)for(var s,l=(c=(o=t).text,a=o.inlineStyleRanges,u={COLOR:new Array(c.length),BGCOLOR:new Array(c.length),FONTSIZE:new Array(c.length),FONTFAMILY:new Array(c.length),SUBSCRIPT:new Array(c.length),SUPERSCRIPT:new Array(c.length),CODE:new Array(c.length),STRIKETHROUGH:new Array(c.length),UNDERLINE:new Array(c.length),ITALIC:new Array(c.length),BOLD:new Array(c.length),length:c.length},a&&0<a.length&&a.forEach(function(t){for(var e=t.offset,n=e+t.length,r=e;r<n;r+=1)0===t.style.indexOf(\"color-\")?u.COLOR[r]=t.style.substring(6):0===t.style.indexOf(\"bgcolor-\")?u.BGCOLOR[r]=t.style.substring(8):0===t.style.indexOf(\"fontsize-\")?u.FONTSIZE[r]=t.style.substring(9):0===t.style.indexOf(\"fontfamily-\")?u.FONTFAMILY[r]=t.style.substring(11):u[t.style]&&(u[t.style][r]=!0)}),u),O=n;O<r;O+=1)O!==n&&d(l,e,O)?(s.text.push(f[O]),s.end=O+1):(s={styles:p(l,O),text:[f[O]],start:O,end:O+1},i.push(s));return i}function g(t,e){return\"BOLD\"===t?\"**\".concat(e,\"**\"):\"ITALIC\"===t?\"*\".concat(e,\"*\"):\"UNDERLINE\"===t?\"__\".concat(e,\"__\"):\"STRIKETHROUGH\"===t?\"~~\".concat(e,\"~~\"):\"CODE\"===t?\"`\".concat(e,\"`\"):\"SUPERSCRIPT\"===t?\"<sup>\".concat(e,\"</sup>\"):\"SUBSCRIPT\"===t?\"<sub>\".concat(e,\"</sub>\"):e}function T(t){var e,n=t.styles,r=t.text,o=(e=r)&&0<e.length?e.map(function(t){switch(t){case\"\\n\":return\"\\\\s\\\\s\\n\";case\"&\":return\"&amp;\";case\"<\":return\"&lt;\";case\">\":return\"&gt;\";default:return t}}).join(\"\"):\"\";if(n&&(n.COLOR||n.BGCOLOR||n.FONTSIZE||n.FONTFAMILY)){var c='style=\"';return n.COLOR&&(c+=\"color: \".concat(n.COLOR,\";\")),n.BGCOLOR&&(c+=\"background-color: \".concat(n.BGCOLOR,\";\")),n.FONTSIZE&&(c+=\"font-size: \".concat(n.FONTSIZE,\"px;\")),n.FONTFAMILY&&(c+=\"font-family: \".concat(n.FONTFAMILY,\";\")),\"<span \".concat(c+='\"',\">\").concat(o,\"</span>\")}return o}function I(c,t,e,n){var r=[],o=h(c,[\"BOLD\",\"ITALIC\",\"UNDERLINE\",\"STRIKETHROUGH\",\"CODE\",\"SUPERSCRIPT\",\"SUBSCRIPT\"],e.start,e.end),a=\"\";o.forEach(function(t){var e,n,r=h(c,[\"COLOR\",\"BGCOLOR\",\"FONTSIZE\",\"FONTFAMILY\"],t.start,t.end),o=\"\";r.forEach(function(t){o+=T(t)}),a+=(e=t.styles,n=o,i(e,function(t,e){n=g(t,n)}),n)}),r.push(a);var u=r.join(\"\");return\"ENTITY\"===e.type?void 0!==e.entityKey&&null!==e.entityKey&&(u=O(t,e.entityKey,u,n)):\"HASHTAG\"===e.type&&(u=\"[\".concat(u,\"](\").concat(u,\")\")),u}function b(t){if(t){for(var e=t,n=0;n<e.length&&\" \"===t[n];n+=1)e=e.replace(\" \",\"&nbsp;\");return e}return t}function R(t){if(t){for(var e=t,n=e.length-1;0<=n&&\" \"===e[n];--n)e=\"\".concat(e.substring(0,n),\"&nbsp;\").concat(e.substring(n+1));return e}return t}function E(r,o,t,c){if(0<(e=r).entityRanges.length&&(null==(n=e.text)||0===n.length||0===n.trim().length))return O(o,r.entityRanges[0].key,void 0,c);var e,n,a=[],u=y(r,t);return u.forEach(function(t,e){var n=I(r,o,t,c);0===e&&(n=b(n)),e===u.length-1&&(n=R(n)),a.push(n)}),a.join(\"\")}function S(t){var n=\"\";return i(t,function(t,e){n+=\"\".concat(t,\":\").concat(e,\";\")}),n}function v(t,e,n,r,o,c){var a=[];a.push(e[t.type]);var u,i,f,s=E(t,n,r,o);return t.data&&(u=t.data,i=s,s=(f=S(u))?'<span style=\"'.concat(f,'\">').concat(i,\"</span>\"):i),a.push(s),a.push(c&&c.emptyLineBeforeBlock?\"\\n\\n\":\"\\n\"),a.join(\"\")}function r(t,r,o,c){var a=[];if(t){var u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},l,{},c&&c.blockTypesMapping&&c.blockTypesMapping),e=t.blocks,i=t.entityMap;e&&0<e.length&&e.forEach(function(t){var e,n=v(t,u,i,r,o,c);\"unordered-list-item\"!==(e=t.type)&&\"ordered-list-item\"!==e||(n=function(t){for(var e=\"\",n=0;n<4*t;n+=1)e+=\" \";return e}(t.depth)+n),a.push(n)})}return a.join(\"\")}}],o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(t,\"__esModule\",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,\"a\",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p=\"\",o(o.s=0);function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}var n,r});\n\n//# sourceURL=webpack://antd-admin/./node_modules/draftjs-to-markdown/lib/draftjs-to-markdown.js?");

/***/ })

}]);