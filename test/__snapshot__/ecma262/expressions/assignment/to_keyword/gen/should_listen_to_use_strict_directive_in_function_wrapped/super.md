# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_function_wrapped
> :: test: should listen to use strict directive in function wrapped
> :: case: super
## Options

`````js
{}
`````
## Input

`````js
function f() {
  "use strict";
  (super = x);
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
                                    "kind": 125,
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 4259935,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 34,
                                            "end": 39
                                        },
                                        "expression": {
                                            "kind": 16637,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 39,
                                            "end": 39
                                        },
                                        "flags": 32,
                                        "transformFlags": 2,
                                        "start": 34,
                                        "end": 39
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 39,
                                        "end": 41
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 43
                                    },
                                    "flags": 0,
                                    "transformFlags": 128,
                                    "start": 34,
                                    "end": 43
                                },
                                "flags": 30,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 44
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 30,
                            "end": 45
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 45
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 47
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "function f() {\n  \"use strict\";\n  (super = x);\n}",
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
✖ 'super' must be followed by an argument list or member access. - start: 34, end: 41
✖ Dot property must be an identifier - start: 39, end: 41
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 39, end: 41

```

