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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
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
                            "flags": 96,
                            "start": 3,
                            "end": 5
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
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 11,
                                            "end": 13
                                        },
                                        "flags": 32,
                                        "start": 9,
                                        "end": 13
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 14,
                                            "end": 16
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "start": 17,
                                            "end": 19
                                        },
                                        "flags": 32,
                                        "start": 14,
                                        "end": 19
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 9,
                                "end": 19
                            },
                            "flags": 48,
                            "start": 7,
                            "end": 20
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 20
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 20
            },
            "flags": 33554448,
            "start": 0,
            "end": 21
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
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
                            "flags": 96,
                            "start": 25,
                            "end": 40
                        },
                        "type": null,
                        "initializer": {
                            "kind": 205586437,
                            "flags": 96,
                            "start": 42,
                            "end": 48
                        },
                        "flags": 16,
                        "start": 25,
                        "end": 48
                    }
                ],
                "flags": 17,
                "start": 25,
                "end": 48
            },
            "flags": 33554448,
            "start": 21,
            "end": 49
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
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
                            "flags": 96,
                            "start": 55,
                            "end": 65
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 67,
                            "end": 69
                        },
                        "flags": 16,
                        "start": 55,
                        "end": 69
                    }
                ],
                "flags": 16,
                "start": 55,
                "end": 69
            },
            "flags": 16,
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
                                "flags": 64,
                                "start": 73,
                                "end": 81
                            },
                            "asteriskToken": null,
                            "name": null,
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "obj",
                                        "rawText": "obj",
                                        "flags": 96,
                                        "start": 82,
                                        "end": 85
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 82,
                                "end": 85
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 33,
                                    "start": 88,
                                    "end": 88
                                },
                                "flags": 32,
                                "start": 86,
                                "end": 90
                            },
                            "returnType": null,
                            "flags": 32,
                            "start": 73,
                            "end": 90
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "apply",
                            "rawText": "apply",
                            "flags": 96,
                            "start": 91,
                            "end": 96
                        },
                        "flags": 536870944,
                        "start": 73,
                        "end": 96
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 138477575,
                                "flags": 96,
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
                                                            "flags": 64,
                                                            "start": 105,
                                                            "end": 108
                                                        },
                                                        "argument": {
                                                            "kind": 134299649,
                                                            "text": "o",
                                                            "rawText": "o",
                                                            "flags": 96,
                                                            "start": 108,
                                                            "end": 109
                                                        },
                                                        "flags": 1073741856,
                                                        "start": 105,
                                                        "end": 109
                                                    },
                                                    {
                                                        "kind": 351,
                                                        "asyncKeyword": null,
                                                        "asteriskToken": null,
                                                        "getKeyword": {
                                                            "kind": 16498,
                                                            "flags": 96,
                                                            "start": 110,
                                                            "end": 114
                                                        },
                                                        "setKeyword": null,
                                                        "method": {
                                                            "kind": 209,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "c",
                                                                "rawText": "c",
                                                                "flags": 96,
                                                                "start": 114,
                                                                "end": 116
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameterList": {
                                                                "kind": 214,
                                                                "formalParameters": [],
                                                                "trailingComma": false,
                                                                "flags": 1056,
                                                                "start": 117,
                                                                "end": 118
                                                            },
                                                            "returnType": null,
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [],
                                                                    "flags": 32,
                                                                    "start": 120,
                                                                    "end": 120
                                                                },
                                                                "flags": 32,
                                                                "start": 118,
                                                                "end": 121
                                                            },
                                                            "flags": 1056,
                                                            "start": 116,
                                                            "end": 121
                                                        },
                                                        "flags": 32,
                                                        "start": 110,
                                                        "end": 121
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 105,
                                                "end": 121
                                            },
                                            "flags": 48,
                                            "start": 104,
                                            "end": 122
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 104,
                                    "end": 122
                                },
                                "flags": 32,
                                "start": 102,
                                "end": 123
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 97,
                        "end": 123
                    },
                    "flags": 268435488,
                    "start": 73,
                    "end": 124
                },
                "flags": 32,
                "start": 70,
                "end": 125
            },
            "flags": 16,
            "start": 70,
            "end": 126
        }
    ],
    "isModule": false,
    "source": "let o = {a: 2, b: 3};\nlet executedGetter = false;\n\n\nvar callCount = 0;\n\n(function(obj) {\n}.apply(null, [{...o, get c() {}}]));",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 126
}
```

### Printed

```javascript

let o = { a: 2, b: 3 };
let executedGetter = false;
var callCount = 0;
(function () {}.apply(null, [{ ...o, get c() {} }]));
```

### Diagnostics

```javascript
✔ No errors
```

