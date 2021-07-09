# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_function_bare
> :: test: should listen to use strict directive in function bare
> :: case: catch
## Options

`````js
{}
`````
## Input

`````js
function f() {
  "use strict";
  catch = x
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
                            "kind": 159,
                            "tryKeyword": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 30
                                },
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 30
                            },
                            "catchClause": {
                                "kind": 173,
                                "catchKeyword": {
                                    "kind": 4202575,
                                    "flags": 81,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 38
                                },
                                "catchParameter": null,
                                "block": {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 38
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 38
                                },
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 38
                            },
                            "finallyKeyword": null,
                            "finallyBlock": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 38
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 38
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 38
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 38
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 40,
                "end": 42
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 40,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "function f() {\n  \"use strict\";\n  catch = x\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 30, end: 38
✖ The parser expected to find a '}' to match the '{' token here - start: 39, end: 40
✖ Declaration or statement expected - start: 42, end: 44

```

