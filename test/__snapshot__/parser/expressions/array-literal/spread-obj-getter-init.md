# Kataw parser test case

## Input

`````js
let o = {a: 2, b: 3};
let executedGetter = false;


var callCount = 0;

(function(obj) {
}.apply(null, [{...o, get c() {}}]));
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "o",
                            "rawText": "o",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 768,
                                            "start": 11,
                                            "end": 13
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "flags": 256,
                                        "start": 9,
                                        "end": 13
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 768,
                                            "start": 17,
                                            "end": 19
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 14,
                                            "end": 16
                                        },
                                        "flags": 256,
                                        "start": 14,
                                        "end": 19
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 9,
                                "end": 19
                            },
                            "flags": 256,
                            "start": 7,
                            "end": 20
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 20
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 20
            },
            "flags": 128,
            "start": 0,
            "end": 21
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
                "start": 21,
                "end": 25
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "executedGetter",
                            "rawText": "executedGetter",
                            "flags": 768,
                            "start": 25,
                            "end": 40
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134,
                            "text": false,
                            "flags": 768,
                            "start": 42,
                            "end": 48
                        },
                        "flags": 128,
                        "start": 25,
                        "end": 48
                    }
                ],
                "flags": 128,
                "start": 25,
                "end": 48
            },
            "flags": 128,
            "start": 21,
            "end": 49
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 49,
                "end": 55
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "callCount",
                            "rawText": "callCount",
                            "flags": 768,
                            "start": 55,
                            "end": 65
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 768,
                            "start": 67,
                            "end": 69
                        },
                        "flags": 128,
                        "start": 55,
                        "end": 69
                    }
                ],
                "flags": 128,
                "start": 55,
                "end": 69
            },
            "flags": 128,
            "start": 49,
            "end": 70
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 768,
                                "start": 73,
                                "end": 81
                            },
                            "generatorToken": null,
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "obj",
                                            "rawText": "obj",
                                            "flags": 768,
                                            "start": 82,
                                            "end": 85
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 82,
                                        "end": 85
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 81,
                                "end": 86
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": true,
                                    "flags": 256,
                                    "start": 88,
                                    "end": 88
                                },
                                "flags": 256,
                                "start": 86,
                                "end": 90
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 256,
                            "start": 73,
                            "end": 90
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "apply",
                            "rawText": "apply",
                            "flags": 768,
                            "start": 91,
                            "end": 96
                        },
                        "flags": 256,
                        "start": 73,
                        "end": 96
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 269,
                                "text": null,
                                "flags": 768,
                                "start": 97,
                                "end": 101
                            },
                            {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 224,
                                                        "ellipsisToken": {
                                                            "kind": 524302,
                                                            "flags": 768,
                                                            "start": 105,
                                                            "end": 108
                                                        },
                                                        "argument": {
                                                            "kind": 134299649,
                                                            "text": "o",
                                                            "rawText": "o",
                                                            "flags": 768,
                                                            "start": 108,
                                                            "end": 109
                                                        },
                                                        "flags": 256,
                                                        "start": 105,
                                                        "end": 109
                                                    },
                                                    {
                                                        "kind": 209,
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 768,
                                                            "start": 114,
                                                            "end": 116
                                                        },
                                                        "typeParameters": null,
                                                        "formalParameters": {
                                                            "kind": 214,
                                                            "formalParameterList": [],
                                                            "trailingComma": false,
                                                            "flags": 8448,
                                                            "start": 117,
                                                            "end": 118
                                                        },
                                                        "type": null,
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [],
                                                                "multiline": false,
                                                                "flags": 256,
                                                                "start": 120,
                                                                "end": 120
                                                            },
                                                            "flags": 256,
                                                            "start": 118,
                                                            "end": 121
                                                        },
                                                        "flags": 8448,
                                                        "start": 116,
                                                        "end": 121
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "start": 105,
                                                "end": 121
                                            },
                                            "flags": 256,
                                            "start": 104,
                                            "end": 122
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 104,
                                    "end": 122
                                },
                                "flags": 256,
                                "start": 102,
                                "end": 123
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 97,
                        "end": 123
                    },
                    "flags": 256,
                    "start": 73,
                    "end": 124
                },
                "flags": 256,
                "start": 70,
                "end": 125
            },
            "flags": 128,
            "start": 70,
            "end": 126
        }
    ],
    "isModule": false,
    "text": "let o = {a: 2, b: 3};\nlet executedGetter = false;\n\n\nvar callCount = 0;\n\n(function(obj) {\n}.apply(null, [{...o, get c() {}}]));",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 126
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

