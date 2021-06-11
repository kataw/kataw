# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_getter_bare
> :: test: should listen to use strict directive in getter bare
> :: case: function
## Options

`````js
{}
`````
## Input

`````js
foo = {
  get x(){
    "use strict";
    function = x
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
                                                        "kind": 176,
                                                        "declareKeyword": null,
                                                        "asyncKeyword": null,
                                                        "functionKeyword": {
                                                            "kind": 37822554,
                                                            "flags": 65,
                                                            "start": 36,
                                                            "end": 49
                                                        },
                                                        "generatorToken": null,
                                                        "name": null,
                                                        "formalParameters": {
                                                            "kind": 214,
                                                            "formalParameterList": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 49,
                                                            "end": 49
                                                        },
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [],
                                                                "flags": 32,
                                                                "start": 49,
                                                                "end": 49
                                                            },
                                                            "flags": 32,
                                                            "start": 49,
                                                            "end": 49
                                                        },
                                                        "typeParameters": null,
                                                        "returnType": null,
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
        }
    ],
    "isModule": false,
    "source": "foo = {\n  get x(){\n    \"use strict\";\n    function = x\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 49, end: 51
✖ Missing an opening parentheses - '( - start: 49, end: 51
✖ The left-hand side must be a variable or a property access. - start: 5, end: 51
✖ Declaration or statement expected - start: 53, end: 57
✖ Declaration or statement expected - start: 57, end: 59

```

