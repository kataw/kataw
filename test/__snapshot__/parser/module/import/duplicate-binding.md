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
                "start": 0,
                "end": 6
            },
            "fromClause": null,
            "moduleSpecifier": {
                "kind": 201392131,
                "text": "x",
                "rawText": "'x'",
                "flags": 4194400,
                "start": 6,
                "end": 10
            },
            "importClause": null,
            "flags": 16,
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
                "start": 10,
                "end": 17
            },
            "flags": 16,
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
                            "start": 19,
                            "end": 20
                        },
                        "labels": [
                            {
                                "kind": 256,
                                "label": "x",
                                "iterationStatement": false,
                                "flags": 16,
                                "start": 19,
                                "end": 20
                            }
                        ],
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
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
                                        "start": 21,
                                        "end": 25
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 26,
                                        "end": 28
                                    }
                                ],
                                "flags": 32,
                                "start": 21,
                                "end": 28
                            },
                            "flags": 16,
                            "start": 21,
                            "end": 28
                        },
                        "flags": 16,
                        "start": 19,
                        "end": 28
                    }
                ],
                "flags": 16,
                "start": 19,
                "end": 28
            },
            "flags": 16,
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
                "start": 29,
                "end": 33
            },
            "flags": 16,
            "start": 29,
            "end": 33
        }
    ],
    "isModule": true,
    "source": "import 'x' assert {x: 'y', x: 'y'}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 10, end: 17
✖ Expected a `;` - start: 17, end: 19
✖ Expected a `;` - start: 28, end: 29
✖ Declaration or statement expected - start: 33, end: 34

```

