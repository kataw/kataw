# Kataw parser test case

## Input

`````js
((...rest: Array<number>) => rest)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 271,
                    "arrowToken": null,
                    "typeParameters": null,
                    "parameters": [
                        null
                    ],
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "Array",
                                "rawText": "Array",
                                "flags": 768,
                                "start": 10,
                                "end": 16
                            },
                            "operatorToken": {
                                "kind": 536971330,
                                "flags": 768,
                                "start": 16,
                                "end": 17
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "number",
                                "rawText": "number",
                                "flags": 768,
                                "start": 17,
                                "end": 23
                            },
                            "flags": 256,
                            "start": 10,
                            "end": 23
                        },
                        "operatorToken": {
                            "kind": 34883,
                            "flags": 768,
                            "start": 23,
                            "end": 24
                        },
                        "right": {
                            "kind": 16637,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 24,
                            "end": 24
                        },
                        "flags": 256,
                        "start": 10,
                        "end": 24
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 24
                },
                "flags": 256,
                "start": 0,
                "end": 25
            },
            "flags": 128,
            "start": 0,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "rest",
                "rawText": "rest",
                "flags": 768,
                "start": 28,
                "end": 33
            },
            "flags": 128,
            "start": 28,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "((...rest: Array<number>) => rest)",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9,
            "end": 10
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9,
            "end": 10
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 24,
            "end": 25
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25,
            "end": 28
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 25,
            "end": 28
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 33,
            "end": 34
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 33,
            "end": 34
        }
    ],
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

