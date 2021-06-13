# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_function_wrapped
> :: test: should listen to use strict directive in function wrapped
> :: case: new
## Options

`````js
{}
`````
## Input

`````js
function f() {
  "use strict";
  (new = x);
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 12
            },
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
                            "start": 14,
                            "end": 29
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
                                        "kind": 210,
                                        "newKeyword": {
                                            "kind": 138477661,
                                            "flags": 96,
                                            "start": 34,
                                            "end": 37
                                        },
                                        "expression": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 64,
                                            "start": 37,
                                            "end": 37
                                        },
                                        "argumentList": null,
                                        "flags": 96,
                                        "start": 34,
                                        "end": 37
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 37,
                                        "end": 39
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 39,
                                        "end": 41
                                    },
                                    "flags": 32,
                                    "start": 34,
                                    "end": 41
                                },
                                "flags": 32,
                                "start": 30,
                                "end": 42
                            },
                            "flags": 16,
                            "start": 30,
                            "end": 43
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 43
                },
                "flags": 32,
                "start": 12,
                "end": 45
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "function f() {\n  \"use strict\";\n  (new = x);\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 37, end: 39
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 37, end: 39

```

