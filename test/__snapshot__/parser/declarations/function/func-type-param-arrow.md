# Kataw parser test case

## Input

`````js
function foo():(_:bool) => number{}

function foo(callback: (_1:bool, _2:string) => number){}

function foo(callback: (_1:bool, ...foo:Array<number>) => number){}

`````

## Output

### Hybrid CST

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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 14
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 14,
                    "end": 14
                },
                "flags": 32,
                "start": 14,
                "end": 14
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 32,
                    "start": 15,
                    "end": 17
                },
                "flags": 32,
                "start": 15,
                "end": 17
            },
            "flags": 16,
            "start": 15,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "bool",
                "rawText": "bool",
                "flags": 96,
                "start": 18,
                "end": 22
            },
            "flags": 16,
            "start": 18,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "number",
                "rawText": "number",
                "flags": 96,
                "start": 26,
                "end": 33
            },
            "flags": 16,
            "start": 26,
            "end": 33
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 34,
                "end": 34
            },
            "flags": 16,
            "start": 33,
            "end": 35
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 35,
                "end": 45
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 45,
                "end": 49
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "callback",
                            "rawText": "callback",
                            "flags": 96,
                            "start": 50,
                            "end": 58
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 50,
                        "end": 58
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 49,
                "end": 59
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 58,
                    "end": 58
                },
                "flags": 32,
                "start": 58,
                "end": 58
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 35,
            "end": 58
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 32,
                    "start": 59,
                    "end": 63
                },
                "flags": 32,
                "start": 59,
                "end": 63
            },
            "flags": 16,
            "start": 59,
            "end": 63
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "bool",
                        "rawText": "bool",
                        "flags": 96,
                        "start": 64,
                        "end": 68
                    },
                    {
                        "kind": 134299649,
                        "text": "_2",
                        "rawText": "_2",
                        "flags": 96,
                        "start": 69,
                        "end": 72
                    }
                ],
                "flags": 32,
                "start": 64,
                "end": 72
            },
            "flags": 16,
            "start": 64,
            "end": 72
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 73,
                "end": 79
            },
            "flags": 16,
            "start": 73,
            "end": 79
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "number",
                "rawText": "number",
                "flags": 96,
                "start": 83,
                "end": 90
            },
            "flags": 16,
            "start": 83,
            "end": 90
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 92,
                "end": 92
            },
            "flags": 16,
            "start": 91,
            "end": 93
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 93,
                "end": 103
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 103,
                "end": 107
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "callback",
                            "rawText": "callback",
                            "flags": 96,
                            "start": 108,
                            "end": 116
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 108,
                        "end": 116
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 107,
                "end": 117
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 116,
                    "end": 116
                },
                "flags": 32,
                "start": 116,
                "end": 116
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 93,
            "end": 116
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 32,
                    "start": 117,
                    "end": 121
                },
                "flags": 32,
                "start": 117,
                "end": 121
            },
            "flags": 16,
            "start": 117,
            "end": 121
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "bool",
                        "rawText": "bool",
                        "flags": 96,
                        "start": 122,
                        "end": 126
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 127,
                        "end": 127
                    }
                ],
                "flags": 32,
                "start": 122,
                "end": 127
            },
            "flags": 16,
            "start": 122,
            "end": 127
        },
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 131,
                "end": 134
            },
            "labels": [
                {
                    "kind": 256,
                    "label": "foo",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 131,
                    "end": 134
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 134,
                "end": 135
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "Array",
                            "rawText": "Array",
                            "flags": 96,
                            "start": 135,
                            "end": 140
                        },
                        "operatorToken": {
                            "kind": 536971330,
                            "flags": 64,
                            "start": 140,
                            "end": 141
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "number",
                            "rawText": "number",
                            "flags": 96,
                            "start": 141,
                            "end": 147
                        },
                        "flags": 32,
                        "start": 135,
                        "end": 147
                    },
                    "operatorToken": {
                        "kind": 34883,
                        "flags": 64,
                        "start": 147,
                        "end": 148
                    },
                    "right": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 148,
                        "end": 148
                    },
                    "flags": 32,
                    "start": 135,
                    "end": 148
                },
                "flags": 16,
                "start": 135,
                "end": 148
            },
            "flags": 16,
            "start": 131,
            "end": 148
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "number",
                "rawText": "number",
                "flags": 96,
                "start": 152,
                "end": 159
            },
            "flags": 16,
            "start": 152,
            "end": 159
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 161,
                "end": 161
            },
            "flags": 16,
            "start": 160,
            "end": 162
        }
    ],
    "isModule": false,
    "source": "function foo():(_:bool) => number{}\n\nfunction foo(callback: (_1:bool, _2:string) => number){}\n\nfunction foo(callback: (_1:bool, ...foo:Array<number>) => number){}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 163
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Unexpected token. - start: 14, end: 15
✖ Statement expected - start: 14, end: 15
✖ Expected a `;` - start: 17, end: 18
✖ Statement expected - start: 17, end: 18
✖ Expected a `;` - start: 22, end: 23
✖ Statement expected - start: 22, end: 23
✖ Statement expected - start: 23, end: 26
✖ Expected a `;` - start: 33, end: 34
✖ ',' expected - start: 58, end: 59
✖ Unexpected token. - start: 58, end: 59
✖ Statement expected - start: 58, end: 59
✖ Expected a `;` - start: 63, end: 64
✖ Statement expected - start: 63, end: 64
✖ Expected a `;` - start: 72, end: 73
✖ Statement expected - start: 72, end: 73
✖ Expected a `;` - start: 79, end: 80
✖ Statement expected - start: 79, end: 80
✖ Statement expected - start: 80, end: 83
✖ Expected a `;` - start: 90, end: 91
✖ Statement expected - start: 90, end: 91
✖ ',' expected - start: 116, end: 117
✖ Unexpected token. - start: 116, end: 117
✖ Statement expected - start: 116, end: 117
✖ Expected a `;` - start: 121, end: 122
✖ Statement expected - start: 121, end: 122
✖ Expression expected - start: 127, end: 131
✖ Expected a `;` - start: 127, end: 131
✖ Statement expected - start: 127, end: 131
✖ Expression expected - start: 148, end: 149
✖ Expected a `;` - start: 148, end: 149
✖ Statement expected - start: 148, end: 149
✖ Statement expected - start: 149, end: 152
✖ Expected a `;` - start: 159, end: 160
✖ Statement expected - start: 159, end: 160

```

