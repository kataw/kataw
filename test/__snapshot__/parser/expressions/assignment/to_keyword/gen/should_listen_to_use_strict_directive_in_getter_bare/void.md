# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: e
> :: test: should listen to use strict directive in getter bare
> :: case: void
## Options

`````js
{}
`````
## Input

`````js
foo = {
  get x(){
    "use strict";
    void = x
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
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 126,
                                                            "operandToken": {
                                                                "kind": 138477615,
                                                                "flags": 97,
                                                                "start": 36,
                                                                "end": 45
                                                            },
                                                            "operand": {
                                                                "kind": 16637,
                                                                "text": "",
                                                                "rawText": "",
                                                                "flags": 64,
                                                                "start": 45,
                                                                "end": 45
                                                            },
                                                            "flags": 32,
                                                            "start": 36,
                                                            "end": 45
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 96,
                                                            "start": 45,
                                                            "end": 47
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 47,
                                                            "end": 49
                                                        },
                                                        "flags": 32,
                                                        "start": 36,
                                                        "end": 49
                                                    },
                                                    "flags": 16,
                                                    "start": 36,
                                                    "end": 49
                                                }
                                            ],
                                            "flags": 33,
                                            "start": 18,
                                            "end": 49
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 53
                                    },
                                    "flags": 1057,
                                    "start": 15,
                                    "end": 53
                                },
                                "flags": 32,
                                "start": 7,
                                "end": 53
                            }
                        ],
                        "trailingComma": false,
                        "flags": 17,
                        "start": 7,
                        "end": 53
                    },
                    "flags": 49,
                    "start": 5,
                    "end": 55
                },
                "flags": 32,
                "start": 0,
                "end": 55
            },
            "flags": 16,
            "start": 0,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "foo = {\n  get x(){\n    \"use strict\";\n    void = x\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 45, end: 47
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 45, end: 47

```

