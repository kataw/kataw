# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_getter_wrapped
> :: test: should listen to use strict directive in getter wrapped
> :: case: super
## Options

`````js
{}
`````
## Input

`````js
foo = {
  get x(){
    "use strict";
    (super = x);
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
                                                            "kind": 125,
                                                            "left": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 225,
                                                                    "superKeyword": {
                                                                        "kind": 4259935,
                                                                        "flags": 96,
                                                                        "start": 42,
                                                                        "end": 47
                                                                    },
                                                                    "flags": 96,
                                                                    "start": 42,
                                                                    "end": 47
                                                                },
                                                                "expression": {
                                                                    "kind": 16637,
                                                                    "text": "",
                                                                    "flags": 64,
                                                                    "start": 47,
                                                                    "end": 47
                                                                },
                                                                "flags": 536870944,
                                                                "start": 42,
                                                                "end": 47
                                                            },
                                                            "operatorToken": {
                                                                "kind": 4125,
                                                                "flags": 64,
                                                                "start": 47,
                                                                "end": 49
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 49,
                                                                "end": 51
                                                            },
                                                            "flags": 32,
                                                            "start": 42,
                                                            "end": 51
                                                        },
                                                        "flags": 32,
                                                        "start": 36,
                                                        "end": 52
                                                    },
                                                    "flags": 16,
                                                    "start": 36,
                                                    "end": 53
                                                }
                                            ],
                                            "flags": 33,
                                            "start": 18,
                                            "end": 53
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 57
                                    },
                                    "flags": 1057,
                                    "start": 15,
                                    "end": 57
                                },
                                "flags": 32,
                                "start": 7,
                                "end": 57
                            }
                        ],
                        "trailingComma": false,
                        "flags": 17,
                        "start": 7,
                        "end": 57
                    },
                    "flags": 49,
                    "start": 5,
                    "end": 59
                },
                "flags": 32,
                "start": 0,
                "end": 59
            },
            "flags": 16,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "foo = {\n  get x(){\n    \"use strict\";\n    (super = x);\n  }\n}",
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
✖ 'super' must be followed by an argument list or member access. - start: 42, end: 49
✖ Dot property must be an identifier - start: 47, end: 49
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 47, end: 49

```

