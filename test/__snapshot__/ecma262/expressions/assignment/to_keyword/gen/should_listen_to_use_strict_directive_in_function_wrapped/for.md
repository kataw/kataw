# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_function_wrapped
> :: test: should listen to use strict directive in function wrapped
> :: case: for
## Options

`````js
{}
`````
## Input

`````js
function f() {
  "use strict";
  (for = x);
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
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 11
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
                            "transformFlags": 0,
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
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 34
                                },
                                "flags": 30,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 34
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 30,
                            "end": 34
                        },
                        {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 37
                            },
                            "initializer": {
                                "kind": 125,
                                "left": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 37
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 39
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 41
                                },
                                "flags": 0,
                                "transformFlags": 128,
                                "start": 34,
                                "end": 41
                            },
                            "condition": null,
                            "incrementor": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 41
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 43
                            },
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 43
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 43
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 45
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "function f() {\n  \"use strict\";\n  (for = x);\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 34, end: 37
✖ Missing an opening parentheses - '( - start: 38, end: 39
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 37, end: 39
✖ Identifier expected - start: 41, end: 42

```

