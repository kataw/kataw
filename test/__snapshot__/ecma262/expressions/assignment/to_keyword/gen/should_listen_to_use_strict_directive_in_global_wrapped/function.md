# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_global_wrapped
> :: test: should listen to use strict directive in global wrapped
> :: case: function
## Options

`````js
{}
`````
## Input

`````js
"use strict"; (function = x);
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "transformFlags": 0,
            "start": 0,
            "end": 12
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
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 23
                        },
                        "asteriskToken": null,
                        "name": null,
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 23
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 23
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 23
                        },
                        "returnType": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 23
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 25
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 27
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 15,
                    "end": 27
                },
                "flags": 13,
                "transformFlags": 0,
                "start": 32,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (function = x);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 24, end: 25
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 23, end: 25

```

