# Kataw parser test case

## Input

`````js
/**
 * Curried function that ends with a BEM CSS Selector
 *
 * @param {String} block - the BEM Block you'd like to select.
 * @returns {Function}
 */
const bem = block =>
  /**
   * @param {String} [element] - the BEM Element within that block; if undefined, selects the block itself.
   * @returns {Function}
   */
  element =>
    /**
     * @param {?String} [modifier] - the BEM Modifier for the Block or Element; if undefined, selects the Block or Element unmodified.
     * @returns {String}
     */
    modifier =>
      [
        ".",
        css(block),
        element ? `__${css(element)}` : "",
        modifier ? `--${css(modifier)}` : ""
      ].join("");
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 0,
                "end": 156
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "bem",
                            "rawText": "bem",
                            "flags": 96,
                            "start": 156,
                            "end": 160
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "block",
                                "rawText": "block",
                                "flags": 96,
                                "start": 162,
                                "end": 168
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 168,
                                "end": 171
                            },
                            "contents": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 134299649,
                                    "text": "element",
                                    "rawText": "element",
                                    "flags": 97,
                                    "start": 171,
                                    "end": 326
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 326,
                                    "end": 329
                                },
                                "contents": {
                                    "kind": 271,
                                    "asyncKeyword": null,
                                    "typeParameters": null,
                                    "arrowPatameterList": {
                                        "kind": 134299649,
                                        "text": "modifier",
                                        "rawText": "modifier",
                                        "flags": 97,
                                        "start": 329,
                                        "end": 518
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "start": 518,
                                        "end": 521
                                    },
                                    "contents": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [
                                                        {
                                                            "kind": 201392131,
                                                            "text": ".",
                                                            "rawText": "\".\"",
                                                            "flags": 97,
                                                            "start": 529,
                                                            "end": 541
                                                        },
                                                        {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "css",
                                                                "rawText": "css",
                                                                "flags": 97,
                                                                "start": 542,
                                                                "end": 554
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "block",
                                                                        "rawText": "block",
                                                                        "flags": 96,
                                                                        "start": 555,
                                                                        "end": 560
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 555,
                                                                "end": 560
                                                            },
                                                            "flags": 268435488,
                                                            "start": 542,
                                                            "end": 561
                                                        },
                                                        {
                                                            "kind": 197,
                                                            "shortCircuit": {
                                                                "kind": 134299649,
                                                                "text": "element",
                                                                "rawText": "element",
                                                                "flags": 97,
                                                                "start": 562,
                                                                "end": 578
                                                            },
                                                            "questionToken": {
                                                                "kind": 134217750,
                                                                "flags": 64,
                                                                "start": 578,
                                                                "end": 580
                                                            },
                                                            "consequent": {
                                                                "kind": 227,
                                                                "spans": [
                                                                    {
                                                                        "kind": 65764,
                                                                        "rawText": "__",
                                                                        "text": "__",
                                                                        "expression": {
                                                                            "kind": 131,
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "css",
                                                                                "rawText": "css",
                                                                                "flags": 96,
                                                                                "start": 586,
                                                                                "end": 589
                                                                            },
                                                                            "argumentList": {
                                                                                "kind": 256,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 134299649,
                                                                                        "text": "element",
                                                                                        "rawText": "element",
                                                                                        "flags": 96,
                                                                                        "start": 590,
                                                                                        "end": 597
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "start": 590,
                                                                                "end": 597
                                                                            },
                                                                            "flags": 268435488,
                                                                            "start": 586,
                                                                            "end": 598
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 580,
                                                                        "end": 598
                                                                    }
                                                                ],
                                                                "tail": {
                                                                    "kind": 458761,
                                                                    "text": "",
                                                                    "rawText": "",
                                                                    "flags": 96,
                                                                    "start": 598,
                                                                    "end": 600
                                                                },
                                                                "flags": 32,
                                                                "start": 580,
                                                                "end": 600
                                                            },
                                                            "colonToken": {
                                                                "kind": 21,
                                                                "flags": 64,
                                                                "start": 600,
                                                                "end": 602
                                                            },
                                                            "alternate": {
                                                                "kind": 201392131,
                                                                "text": "",
                                                                "rawText": "\"\"",
                                                                "flags": 96,
                                                                "start": 602,
                                                                "end": 605
                                                            },
                                                            "flags": 97,
                                                            "start": 562,
                                                            "end": 605
                                                        },
                                                        {
                                                            "kind": 197,
                                                            "shortCircuit": {
                                                                "kind": 134299649,
                                                                "text": "modifier",
                                                                "rawText": "modifier",
                                                                "flags": 97,
                                                                "start": 606,
                                                                "end": 623
                                                            },
                                                            "questionToken": {
                                                                "kind": 134217750,
                                                                "flags": 64,
                                                                "start": 623,
                                                                "end": 625
                                                            },
                                                            "consequent": {
                                                                "kind": 227,
                                                                "spans": [
                                                                    {
                                                                        "kind": 65764,
                                                                        "rawText": "--",
                                                                        "text": "--",
                                                                        "expression": {
                                                                            "kind": 131,
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "css",
                                                                                "rawText": "css",
                                                                                "flags": 96,
                                                                                "start": 631,
                                                                                "end": 634
                                                                            },
                                                                            "argumentList": {
                                                                                "kind": 256,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 134299649,
                                                                                        "text": "modifier",
                                                                                        "rawText": "modifier",
                                                                                        "flags": 96,
                                                                                        "start": 635,
                                                                                        "end": 643
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "start": 635,
                                                                                "end": 643
                                                                            },
                                                                            "flags": 268435488,
                                                                            "start": 631,
                                                                            "end": 644
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 625,
                                                                        "end": 644
                                                                    }
                                                                ],
                                                                "tail": {
                                                                    "kind": 458761,
                                                                    "text": "",
                                                                    "rawText": "",
                                                                    "flags": 96,
                                                                    "start": 644,
                                                                    "end": 646
                                                                },
                                                                "flags": 32,
                                                                "start": 625,
                                                                "end": 646
                                                            },
                                                            "colonToken": {
                                                                "kind": 21,
                                                                "flags": 64,
                                                                "start": 646,
                                                                "end": 648
                                                            },
                                                            "alternate": {
                                                                "kind": 201392131,
                                                                "text": "",
                                                                "rawText": "\"\"",
                                                                "flags": 96,
                                                                "start": 648,
                                                                "end": 651
                                                            },
                                                            "flags": 97,
                                                            "start": 606,
                                                            "end": 651
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 33,
                                                    "start": 529,
                                                    "end": 651
                                                },
                                                "flags": 33,
                                                "start": 521,
                                                "end": 659
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "join",
                                                "rawText": "join",
                                                "flags": 96,
                                                "start": 660,
                                                "end": 664
                                            },
                                            "flags": 33,
                                            "start": 521,
                                            "end": 664
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 201392131,
                                                    "text": "",
                                                    "rawText": "\"\"",
                                                    "flags": 96,
                                                    "start": 665,
                                                    "end": 667
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 665,
                                            "end": 667
                                        },
                                        "flags": 268435488,
                                        "start": 521,
                                        "end": 668
                                    },
                                    "flags": 32,
                                    "start": 329,
                                    "end": 668
                                },
                                "flags": 32,
                                "start": 171,
                                "end": 668
                            },
                            "flags": 32,
                            "start": 162,
                            "end": 668
                        },
                        "flags": 16,
                        "start": 156,
                        "end": 668
                    }
                ],
                "flags": 16777232,
                "start": 156,
                "end": 668
            },
            "flags": 33554448,
            "start": 0,
            "end": 669
        }
    ],
    "isModule": false,
    "source": "/**\n * Curried function that ends with a BEM CSS Selector\n *\n * @param {String} block - the BEM Block you'd like to select.\n * @returns {Function}\n */\nconst bem = block =>\n  /**\n   * @param {String} [element] - the BEM Element within that block; if undefined, selects the block itself.\n   * @returns {Function}\n   */\n  element =>\n    /**\n     * @param {?String} [modifier] - the BEM Modifier for the Block or Element; if undefined, selects the Block or Element unmodified.\n     * @returns {String}\n     */\n    modifier =>\n      [\n        \".\",\n        css(block),\n        element ? `__${css(element)}` : \"\",\n        modifier ? `--${css(modifier)}` : \"\"\n      ].join(\"\");",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 669
}
```

### Printed

```javascript

const bem = block =>  element =>  modifier =>  [
      "\".\"",
      css(block),
      element ? `__${css(element)}` : "\"\"",
      modifier ? `--${css(modifier)}` : "\"\""
    ].join("\"\"");
```

### Diagnostics

```javascript
✔ No errors
```

