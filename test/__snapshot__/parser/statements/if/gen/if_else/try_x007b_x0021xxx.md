# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: if else
> :: case: try { !xxx
## Input

`````js
if try { !xxx else
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 2,
                "end": 2
            },
            "consequent": {
                "kind": 159,
                "tryKeyword": {
                    "kind": 37757027,
                    "flags": 768,
                    "start": 2,
                    "end": 6
                },
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 768,
                                        "start": 8,
                                        "end": 10
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "text": "xxx",
                                        "rawText": "xxx",
                                        "flags": 768,
                                        "start": 10,
                                        "end": 13
                                    },
                                    "flags": 256,
                                    "start": 8,
                                    "end": 13
                                },
                                "flags": 128,
                                "start": 8,
                                "end": 13
                            }
                        ],
                        "multiLine": false,
                        "flags": 128,
                        "start": 8,
                        "end": 13
                    },
                    "flags": 128,
                    "start": 6,
                    "end": 13
                },
                "catchClause": null,
                "finallyKeyword": null,
                "finallyBlock": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": false,
                        "flags": 128,
                        "start": 18,
                        "end": 18
                    },
                    "flags": 128,
                    "start": 18,
                    "end": 18
                },
                "flags": 128,
                "start": 2,
                "end": 18
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "if try { !xxx else",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2,
            "end": 6
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 2,
            "end": 6
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2,
            "end": 6
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 13,
            "end": 18
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 13,
            "end": 18
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 13,
            "end": 18
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 18,
            "end": 18
        }
    ],
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: if else
> :: case: try { !xxx
## Input

`````js
if try { !xxx else
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: if else
> :: case: try { !xxx
## Input

`````js
if try { !xxx else
`````
```

