# Kataw parser test case

## Input

`````js
'use strict'; bar: function* x() {}

'use strict'; bar: function x() {}
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
            "rawText": "'use strict'",
            "flags": 4194400,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "transformFlags": 0,
                "start": 13,
                "end": 17
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "transformFlags": 0,
                "start": 17,
                "end": 18
            },
            "statement": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 27
                },
                "asteriskToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "transformFlags": 32,
                    "start": 27,
                    "end": 28
                },
                "name": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 30
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 31
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 34
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 35
                },
                "returnType": null,
                "flags": 272,
                "transformFlags": 0,
                "start": 18,
                "end": 35
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "'use strict'",
                "flags": 4194401,
                "transformFlags": 0,
                "start": 35,
                "end": 49
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 35,
            "end": 50
        },
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "transformFlags": 0,
                "start": 50,
                "end": 54
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "transformFlags": 0,
                "start": 54,
                "end": 55
            },
            "statement": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 55,
                    "end": 64
                },
                "asteriskToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 64,
                    "end": 66
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 67,
                    "end": 67
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 70,
                        "end": 70
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 68,
                    "end": 71
                },
                "returnType": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 55,
                "end": 71
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 50,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "'use strict'; bar: function* x() {}\n\n'use strict'; bar: function x() {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations can only be declared at top level or inside a block in strict mode - start: 18, end: 27
✖ Function declarations can only be declared at top level or inside a block in strict mode - start: 55, end: 64

```

