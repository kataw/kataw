# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: d
> :: test: should listen to use strict directive in getter wrapped
> :: case: if
## Options

`````js
{}
`````
## Input

`````js
foo = {
  get x(){
    "use strict";
    (if = x);
  }
}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 3,
                    "end": 5
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 97,
                                    "start": 7,
                                    "end": 13
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 13,
                                        "end": 15
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1057,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [
                                                {
                                                    "kind": 201392131,
                                                    "text": "use strict",
                                                    "rawText": "\"use strict\"",
                                                    "flags": 97,
                                                    "start": 18,
                                                    "end": 35
                                                }
                                            ],
                                            "statements": [
                                                {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "rawText": "",
                                                            "flags": 64,
                                                            "start": 42,
                                                            "end": 42
                                                        },
                                                        "flags": 32,
                                                        "start": 36,
                                                        "end": 42
                                                    },
                                                    "flags": 16,
                                                    "start": 36,
                                                    "end": 42
                                                },
                                                {
                                                    "kind": 164,
                                                    "ifKeyword": {
                                                        "kind": 37757019,
                                                        "flags": 80,
                                                        "start": 42,
                                                        "end": 44
                                                    },
                                                    "expression": {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "rawText": "",
                                                            "flags": 64,
                                                            "start": 44,
                                                            "end": 44
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 96,
                                                            "start": 44,
                                                            "end": 46
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 46,
                                                            "end": 48
                                                        },
                                                        "flags": 32,
                                                        "start": 44,
                                                        "end": 48
                                                    },
                                                    "consequent": {
                                                        "kind": 168,
                                                        "flags": 16,
                                                        "start": 49,
                                                        "end": 50
                                                    },
                                                    "elseKeyword": null,
                                                    "alternate": null,
                                                    "flags": 80,
                                                    "start": 42,
                                                    "end": 50
                                                }
                                            ],
                                            "flags": 33,
                                            "start": 18,
                                            "end": 50
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 54
                                    },
                                    "flags": 1057,
                                    "start": 15,
                                    "end": 54
                                },
                                "flags": 32,
                                "start": 7,
                                "end": 54
                            }
                        ],
                        "trailingComma": false,
                        "flags": 17,
                        "start": 7,
                        "end": 54
                    },
                    "flags": 49,
                    "start": 5,
                    "end": 56
                },
                "flags": 32,
                "start": 0,
                "end": 56
            },
            "flags": 16,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "foo = {\n  get x(){\n    \"use strict\";\n    (if = x);\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 42, end: 44
✖ Missing an opening parentheses - '( - start: 45, end: 46
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 44, end: 46

```

