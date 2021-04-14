# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: try { !xxx
## Input

`````js
if( try { !xxx
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
                "start": 3,
                "end": 3
            },
            "consequent": {
                "kind": 159,
                "tryKeyword": {
                    "kind": 37757027,
                    "flags": 768,
                    "start": 3,
                    "end": 7
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
                                        "start": 9,
                                        "end": 11
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "text": "xxx",
                                        "rawText": "xxx",
                                        "flags": 768,
                                        "start": 11,
                                        "end": 14
                                    },
                                    "flags": 256,
                                    "start": 9,
                                    "end": 14
                                },
                                "flags": 128,
                                "start": 9,
                                "end": 14
                            }
                        ],
                        "multiLine": false,
                        "flags": 128,
                        "start": 9,
                        "end": 14
                    },
                    "flags": 128,
                    "start": 7,
                    "end": 14
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
                        "start": 14,
                        "end": 14
                    },
                    "flags": 128,
                    "start": 14,
                    "end": 14
                },
                "flags": 128,
                "start": 3,
                "end": 14
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "if( try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 3,
            "end": 7
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 3,
            "end": 7
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 14,
            "end": 14
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 14,
            "end": 14
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 14,
            "end": 14
        }
    ],
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: try { !xxx
## Input

`````js
if( try { !xxx
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: try { !xxx
## Input

`````js
if( try { !xxx
`````
```

