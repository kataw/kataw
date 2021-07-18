# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import 'x' assert {x: 'y', x: 'y'}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": null,
            "moduleSpecifier": {
                "kind": 201392131,
                "text": "x",
                "rawText": "'x'",
                "flags": 4194400,
                "transformFlags": 0,
                "start": 6,
                "end": 10
            },
            "importClause": null,
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "assert",
                "rawText": "assert",
                "flags": 96,
                "transformFlags": 0,
                "start": 10,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 10,
            "end": 17
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 20
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 21
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 201392131,
                                        "text": "y",
                                        "rawText": "'y'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 25
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 28
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 21,
                                "end": 28
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 21,
                            "end": 28
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 28
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 19,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 17,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "y",
                "rawText": "'y'",
                "flags": 4194400,
                "transformFlags": 0,
                "start": 29,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 29,
            "end": 33
        }
    ],
    "isModule": true,
    "source": "import 'x' assert {x: 'y', x: 'y'}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '; ' expected - start: 10, end: 17
✖ '{' expected - start: 17, end: 19
✖ ':' expected - start: 28, end: 29
✖ Declaration or statement expected - start: 33, end: 34

```

