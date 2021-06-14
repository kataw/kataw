# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_function_bare
> :: test: should listen to use strict directive in function bare
> :: case: with
## Options

`````js
{}
`````
## Input

`````js
function f() {
  "use strict";
  with = x
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
                            "kind": 153,
                            "withKeyword": {
                                "kind": 37757029,
                                "flags": 81,
                                "start": 30,
                                "end": 37
                            },
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 37,
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
                                "start": 37,
                                "end": 41
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 41,
                                    "end": 41
                                },
                                "flags": 16,
                                "start": 41,
                                "end": 41
                            },
                            "flags": 81,
                            "start": 30,
                            "end": 41
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 41
                },
                "flags": 32,
                "start": 12,
                "end": 43
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "function f() {\n  \"use strict\";\n  with = x\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'with' statements are not allowed in strict mode. - start: 30, end: 37
✖ Missing an opening parentheses - '( - start: 38, end: 39
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 37, end: 39
✖ Declaration or statement expected - start: 42, end: 43

```

