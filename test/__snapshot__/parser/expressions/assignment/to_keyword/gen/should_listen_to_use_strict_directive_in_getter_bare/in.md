# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_getter_bare
> :: test: should listen to use strict directive in getter bare
> :: case: in
## Options

`````js
{}
`````
## Input

`````js
foo = {
  get x(){
    "use strict";
    in = x
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
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 16637,
                                                                "text": "",
                                                                "flags": 64,
                                                                "start": 36,
                                                                "end": 36
                                                            },
                                                            "operatorToken": {
                                                                "kind": 21006388,
                                                                "flags": 97,
                                                                "start": 36,
                                                                "end": 43
                                                            },
                                                            "right": {
                                                                "kind": 16637,
                                                                "text": "",
                                                                "flags": 64,
                                                                "start": 43,
                                                                "end": 43
                                                            },
                                                            "flags": 32,
                                                            "start": 36,
                                                            "end": 43
                                                        },
                                                        "flags": 16,
                                                        "start": 36,
                                                        "end": 43
                                                    }
                                                ],
                                                "flags": 33,
                                                "start": 18,
                                                "end": 43
                                            },
                                            "flags": 32,
                                            "start": 17,
                                            "end": 43
                                        },
                                        "flags": 1057,
                                        "start": 15,
                                        "end": 43
                                    },
                                    "flags": 32,
                                    "start": 7,
                                    "end": 43
                                }
                            ],
                            "trailingComma": false,
                            "flags": 17,
                            "start": 7,
                            "end": 43
                        },
                        "flags": 49,
                        "start": 5,
                        "end": 43
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 43,
                        "end": 45
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 45,
                        "end": 47
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 47
                },
                "flags": 32,
                "start": 0,
                "end": 47
            },
            "flags": 16,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "foo = {\n  get x(){\n    \"use strict\";\n    in = x\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 36, end: 43
✖ Identifier expected - start: 43, end: 45
✖ The left-hand side must be a variable or a property access. - start: 5, end: 45
✖ Declaration or statement expected - start: 47, end: 51
✖ Declaration or statement expected - start: 51, end: 53

```

