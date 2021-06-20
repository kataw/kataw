# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_getter_wrapped
> :: test: should listen to use strict directive in getter wrapped
> :: case: break
## Options

`````js
{}
`````
## Input

`````js
foo = {
  get x(){
    "use strict";
    (break = x);
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
                                                        "kind": 150,
                                                        "breakKeyword": {
                                                            "kind": 37757005,
                                                            "flags": 80,
                                                            "start": 42,
                                                            "end": 47
                                                        },
                                                        "label": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "rawText": "",
                                                            "flags": 64,
                                                            "start": 47,
                                                            "end": 47
                                                        },
                                                        "flags": 16,
                                                        "start": 42,
                                                        "end": 47
                                                    }
                                                ],
                                                "flags": 33,
                                                "start": 18,
                                                "end": 47
                                            },
                                            "flags": 32,
                                            "start": 17,
                                            "end": 47
                                        },
                                        "flags": 1057,
                                        "start": 15,
                                        "end": 47
                                    },
                                    "flags": 32,
                                    "start": 7,
                                    "end": 47
                                }
                            ],
                            "trailingComma": false,
                            "flags": 17,
                            "start": 7,
                            "end": 47
                        },
                        "flags": 49,
                        "start": 5,
                        "end": 47
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
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
                    "start": 5,
                    "end": 51
                },
                "flags": 32,
                "start": 0,
                "end": 51
            },
            "flags": 16,
            "start": 0,
            "end": 51
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 52,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "foo = {\n  get x(){\n    \"use strict\";\n    (break = x);\n  }\n}",
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
✖ Identifier expected - start: 42, end: 47
✖ Identifier expected - start: 47, end: 49
✖ A 'break' statement can only jump to a label of an enclosing statement - start: 47, end: 49
✖ The left-hand side must be a variable or a property access. - start: 5, end: 49
✖ Expected a `;` - start: 51, end: 52
✖ Declaration or statement expected - start: 53, end: 57
✖ Declaration or statement expected - start: 57, end: 59

```

