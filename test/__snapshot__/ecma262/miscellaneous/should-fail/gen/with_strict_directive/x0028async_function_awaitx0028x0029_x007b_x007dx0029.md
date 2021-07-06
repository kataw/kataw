# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: (async function await() { })
## Options

`````js
{}
`````
## Input

`````js
"use strict"; (async function await() { })
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
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 20
                    },
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 29
                    },
                    "asteriskToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "await",
                        "rawText": "await",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 35
                    },
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 36,
                        "end": 36
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 39
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 37,
                        "end": 41
                    },
                    "returnType": null,
                    "flags": 160,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 41
                },
                "flags": 13,
                "transformFlags": 0,
                "start": 32,
                "end": 42
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (async function await() { })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'await' as a name on a async generator expression - start: 29, end: 35

```

