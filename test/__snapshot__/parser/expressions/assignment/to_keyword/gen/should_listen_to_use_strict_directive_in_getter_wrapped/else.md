# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_getter_wrapped
> :: test: should listen to use strict directive in getter wrapped
> :: case: else
## Options

`````js
{}
`````
## Input

`````js
foo = {
  get x(){
    "use strict";
    (else = x);
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
                                                    }
                                                ],
                                                "flags": 33,
                                                "start": 18,
                                                "end": 42
                                            },
                                            "flags": 32,
                                            "start": 17,
                                            "end": 42
                                        },
                                        "flags": 1057,
                                        "start": 15,
                                        "end": 42
                                    },
                                    "flags": 32,
                                    "start": 7,
                                    "end": 42
                                },
                                {
                                    "kind": 134299649,
                                    "text": "else",
                                    "rawText": "else",
                                    "flags": 96,
                                    "start": 42,
                                    "end": 46
                                }
                            ],
                            "trailingComma": false,
                            "flags": 17,
                            "start": 7,
                            "end": 46
                        },
                        "flags": 49,
                        "start": 5,
                        "end": 46
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 46,
                        "end": 48
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 48,
                        "end": 50
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 50
                },
                "flags": 32,
                "start": 0,
                "end": 50
            },
            "flags": 16,
            "start": 0,
            "end": 50
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 51,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "foo = {\n  get x(){\n    \"use strict\";\n    (else = x);\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 42, end: 46
✖ Property definition expected. Did you mean to use a ':'? - start: 46, end: 48
✖ ',' expected - start: 47, end: 48
✖ The left-hand side must be a variable or a property access. - start: 5, end: 48
✖ Expected a `;` - start: 50, end: 51
✖ Declaration or statement expected - start: 52, end: 56
✖ Declaration or statement expected - start: 56, end: 58

```

