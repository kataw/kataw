# Kataw parser test case

## Input

`````js
function f() {}
// Line comment for function g:
function g() {
  // Line comment for instruction 1:
  instruction1;
  // Line comment for instruction 2:
  instruction2;
  instruction3;
  // Line comment for instruction 4:
  instruction4;
  instruction5;
  switch (value) {
    // Line comment for case 1:
    case 1:
      break;
    // Line comment for case 2:
    case 2:
      // Line comment for break:
      break;
    // Line comment for default:
    default:
      break;
  }
  // Comment above object
  var point = {
    // More line comments
    // Line comment for property x:
    x: 0,
    // Line comment for property y:
    y: 1
    // Trailing line comment of point object
  };
  // Comment after object
  // Comments before empty object
  var object = {};
  instruction6;
  // Several line comments
  // …for…
  // …instruction 7:
  instruction7;
  // Trailing line comment
  // Another comment
}
// Last line comment
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 14
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 15
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 15,
                "end": 56
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "transformFlags": 0,
                "start": 56,
                "end": 58
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 59,
                "end": 59
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "instruction1",
                                "rawText": "instruction1",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 62,
                                "end": 114
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 62,
                            "end": 115
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "instruction2",
                                "rawText": "instruction2",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 115,
                                "end": 167
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 115,
                            "end": 168
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "instruction3",
                                "rawText": "instruction3",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 168,
                                "end": 183
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 168,
                            "end": 184
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "instruction4",
                                "rawText": "instruction4",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 184,
                                "end": 236
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 184,
                            "end": 237
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "instruction5",
                                "rawText": "instruction5",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 237,
                                "end": 252
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 237,
                            "end": 253
                        },
                        {
                            "kind": 160,
                            "switchKeyword": {
                                "kind": 37757024,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 253,
                                "end": 262
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "value",
                                "rawText": "value",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 264,
                                "end": 269
                            },
                            "caseBlock": {
                                "kind": 152,
                                "clauses": [
                                    {
                                        "kind": 175,
                                        "caseKeyword": {
                                            "kind": 4194382,
                                            "flags": 81,
                                            "transformFlags": 0,
                                            "start": 272,
                                            "end": 313
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 313,
                                            "end": 315
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 315,
                                            "end": 316
                                        },
                                        "statements": [
                                            {
                                                "kind": 150,
                                                "breakKeyword": {
                                                    "kind": 37757005,
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 316,
                                                    "end": 328
                                                },
                                                "label": null,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 316,
                                                "end": 329
                                            }
                                        ],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 272,
                                        "end": 329
                                    },
                                    {
                                        "kind": 175,
                                        "caseKeyword": {
                                            "kind": 4194382,
                                            "flags": 81,
                                            "transformFlags": 0,
                                            "start": 329,
                                            "end": 370
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 370,
                                            "end": 372
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 372,
                                            "end": 373
                                        },
                                        "statements": [
                                            {
                                                "kind": 150,
                                                "breakKeyword": {
                                                    "kind": 37757005,
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 373,
                                                    "end": 418
                                                },
                                                "label": null,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 373,
                                                "end": 419
                                            }
                                        ],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 329,
                                        "end": 419
                                    },
                                    {
                                        "kind": 170,
                                        "defaultKeyword": {
                                            "kind": 4194387,
                                            "flags": 81,
                                            "transformFlags": 0,
                                            "start": 419,
                                            "end": 464
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 464,
                                            "end": 465
                                        },
                                        "statements": [
                                            {
                                                "kind": 150,
                                                "breakKeyword": {
                                                    "kind": 37757005,
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 465,
                                                    "end": 477
                                                },
                                                "label": null,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 465,
                                                "end": 478
                                            }
                                        ],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 419,
                                        "end": 478
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 272,
                                "end": 478
                            },
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 253,
                            "end": 482
                        },
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 482,
                                "end": 514
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "point",
                                            "rawText": "point",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 514,
                                            "end": 520
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 524,
                                                            "end": 592
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 0,
                                                            "rawText": "0",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 593,
                                                            "end": 595
                                                        },
                                                        "flags": 33,
                                                        "transformFlags": 128,
                                                        "start": 524,
                                                        "end": 595
                                                    },
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 596,
                                                            "end": 638
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 639,
                                                            "end": 641
                                                        },
                                                        "flags": 33,
                                                        "transformFlags": 128,
                                                        "start": 596,
                                                        "end": 641
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 17,
                                                "transformFlags": 0,
                                                "start": 524,
                                                "end": 641
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 522,
                                            "end": 690
                                        },
                                        "flags": 16,
                                        "transformFlags": 4224,
                                        "start": 514,
                                        "end": 690
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 514,
                                "end": 690
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 482,
                            "end": 691
                        },
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 691,
                                "end": 757
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "object",
                                            "rawText": "object",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 757,
                                            "end": 764
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 768,
                                                "end": 768
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 766,
                                            "end": 769
                                        },
                                        "flags": 16,
                                        "transformFlags": 4224,
                                        "start": 757,
                                        "end": 769
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 757,
                                "end": 769
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 691,
                            "end": 770
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "instruction6",
                                "rawText": "instruction6",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 770,
                                "end": 785
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 770,
                            "end": 786
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "instruction7",
                                "rawText": "instruction7",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 786,
                                "end": 860
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 786,
                            "end": 861
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 62,
                    "end": 861
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 60,
                "end": 911
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 15,
            "end": 911
        }
    ],
    "isModule": false,
    "source": "function f() {}\n// Line comment for function g:\nfunction g() {\n  // Line comment for instruction 1:\n  instruction1;\n  // Line comment for instruction 2:\n  instruction2;\n  instruction3;\n  // Line comment for instruction 4:\n  instruction4;\n  instruction5;\n  switch (value) {\n    // Line comment for case 1:\n    case 1:\n      break;\n    // Line comment for case 2:\n    case 2:\n      // Line comment for break:\n      break;\n    // Line comment for default:\n    default:\n      break;\n  }\n  // Comment above object\n  var point = {\n    // More line comments\n    // Line comment for property x:\n    x: 0,\n    // Line comment for property y:\n    y: 1\n    // Trailing line comment of point object\n  };\n  // Comment after object\n  // Comments before empty object\n  var object = {};\n  instruction6;\n  // Several line comments\n  // …for…\n  // …instruction 7:\n  instruction7;\n  // Trailing line comment\n  // Another comment\n}\n// Last line comment",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 932
}
```

### Printed

```javascript
function f() {}
// Line comment for function g:
function g() // Line comment for instruction 1:
{
  // Line comment for instruction 1:
  instruction1;
  // Line comment for instruction 2:
  instruction2;
  instruction3;
  // Line comment for instruction 4:
  instruction4;
  instruction5;
  switch (value) {
    // Line comment for case 1:
    case 1:
      break;
    // Line comment for case 2:
    case 2:
      // Line comment for break:
      break;
    // Line comment for default:
    default:
      break;
  }
  // Comment above object
  var point = {
    // More line comments
    // Line comment for property x:
    x: 0,
    // Line comment for property y:
    y: 1
  };
  // Comment after object
  // Comments before empty object
  var object = {};
  instruction6;
  // Several line comments
  // …for…
  // …instruction 7:
  instruction7;// Trailing line comment
  // Another comment

}

```

### Diagnostics

```javascript
✔ No errors
```

