# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_getter_wrapped
> :: test: should listen to use strict directive in getter wrapped
> :: case: finally
## Options

`````js
{}
`````
## Input

`````js
foo = {
  get x(){
    "use strict";
    (finally = x);
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
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
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
                                                        "kind": 159,
                                                        "tryKeyword": null,
                                                        "block": {
                                                            "kind": 124,
                                                            "block": {
                                                                "kind": 249,
                                                                "statements": [],
                                                                "flags": 16,
                                                                "start": 42,
                                                                "end": 42
                                                            },
                                                            "flags": 16,
                                                            "start": 42,
                                                            "end": 42
                                                        },
                                                        "catchClause": null,
                                                        "finallyKeyword": {
                                                            "kind": 37757016,
                                                            "flags": 64,
                                                            "start": 42,
                                                            "end": 49
                                                        },
                                                        "finallyBlock": {
                                                            "kind": 124,
                                                            "block": {
                                                                "kind": 249,
                                                                "statements": [],
                                                                "flags": 16,
                                                                "start": 49,
                                                                "end": 49
                                                            },
                                                            "flags": 16,
                                                            "start": 49,
                                                            "end": 49
                                                        },
                                                        "flags": 16,
                                                        "start": 42,
                                                        "end": 49
                                                    }
                                                ],
                                                "flags": 33,
                                                "start": 18,
                                                "end": 49
                                            },
                                            "flags": 32,
                                            "start": 17,
                                            "end": 49
                                        },
                                        "flags": 1057,
                                        "start": 15,
                                        "end": 49
                                    },
                                    "flags": 32,
                                    "start": 7,
                                    "end": 49
                                }
                            ],
                            "trailingComma": false,
                            "flags": 17,
                            "start": 7,
                            "end": 49
                        },
                        "flags": 49,
                        "start": 5,
                        "end": 49
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 49,
                        "end": 51
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 51,
                        "end": 53
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 53
                },
                "flags": 32,
                "start": 0,
                "end": 53
            },
            "flags": 16,
            "start": 0,
            "end": 53
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 54,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "foo = {\n  get x(){\n    \"use strict\";\n    (finally = x);\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 42, end: 49
✖ 'try' expected - start: 42, end: 49
✖ The parser expected to find a '}' to match the '{' token here - start: 50, end: 51
✖ The left-hand side must be a variable or a property access. - start: 5, end: 51
✖ Expected a `;` - start: 53, end: 54
✖ Declaration or statement expected - start: 55, end: 59
✖ Declaration or statement expected - start: 59, end: 61

```

