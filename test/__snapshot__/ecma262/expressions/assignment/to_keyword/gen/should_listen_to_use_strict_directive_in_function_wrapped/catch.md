# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_function_wrapped
> :: test: should listen to use strict directive in function wrapped
> :: case: catch
## Options

`````js
{}
`````
## Input

`````js
function f() {
  "use strict";
  (catch = x);
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
                            "kind": 159,
                            "tryKeyword": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 34
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 34
                            },
                            "catchClause": {
                                "kind": 173,
                                "catchKeyword": {
                                    "kind": 4202575,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 39
                                },
                                "catchParameter": null,
                                "block": {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 39,
                                        "end": 39
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 39
                                },
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 39
                            },
                            "finallyKeyword": null,
                            "finallyBlock": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 39
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 39
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 39
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 41,
                "end": 43
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 41,
            "end": 43
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 44,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "function f() {\n  \"use strict\";\n  (catch = x);\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 34, end: 39
✖ 'try' expected - start: 34, end: 39
✖ The parser expected to find a '}' to match the '{' token here - start: 40, end: 41
✖ Expected a `;` - start: 43, end: 44
✖ Declaration or statement expected - start: 45, end: 47

```

