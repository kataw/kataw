# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\should_listen_to_use_strict_directive_in_getter_bare
> :: test: should listen to use strict directive in getter bare
> :: case: try
## Input

`````js
foo = {
  get x(){
    "use strict";
    try = x
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
                    "flags": 64,
                    "start": 3,
                    "end": 5
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 257,
                                    "asyncKeyword": null,
                                    "generatorToken": null,
                                    "getKeyword": {
                                        "kind": 16498,
                                        "flags": 64,
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
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 1056,
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
                                                        "kind": 159,
                                                        "tryKeyword": {
                                                            "kind": 37757027,
                                                            "flags": 81,
                                                            "start": 36,
                                                            "end": 44
                                                        },
                                                        "block": {
                                                            "kind": 124,
                                                            "block": {
                                                                "kind": 249,
                                                                "statements": [],
                                                                "flags": 16,
                                                                "start": 44,
                                                                "end": 44
                                                            },
                                                            "flags": 16,
                                                            "start": 44,
                                                            "end": 44
                                                        },
                                                        "catchClause": null,
                                                        "finallyKeyword": null,
                                                        "finallyBlock": {
                                                            "kind": 124,
                                                            "block": {
                                                                "kind": 249,
                                                                "statements": [],
                                                                "flags": 16,
                                                                "start": 44,
                                                                "end": 44
                                                            },
                                                            "flags": 16,
                                                            "start": 44,
                                                            "end": 44
                                                        },
                                                        "flags": 16,
                                                        "start": 36,
                                                        "end": 44
                                                    }
                                                ],
                                                "flags": 33,
                                                "start": 18,
                                                "end": 44
                                            },
                                            "flags": 32,
                                            "start": 17,
                                            "end": 44
                                        },
                                        "flags": 1056,
                                        "start": 15,
                                        "end": 44
                                    },
                                    "flags": 32,
                                    "start": 7,
                                    "end": 44
                                }
                            ],
                            "trailingComma": false,
                            "flags": 17,
                            "start": 7,
                            "end": 44
                        },
                        "flags": 49,
                        "start": 5,
                        "end": 44
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
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
                    "start": 5,
                    "end": 48
                },
                "flags": 32,
                "start": 0,
                "end": 48
            },
            "flags": 16,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "foo = {\n  get x(){\n    \"use strict\";\n    try = x\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 44, end: 46
✖ The left-hand side must be a variable or a property access. - start: 5, end: 46
✖ Declaration or statement expected - start: 48, end: 52
✖ Declaration or statement expected - start: 52, end: 54

```

