# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: s
> :: test: unclosed parens
> :: case: catch { try
## Options

`````js
{}
`````
## Input

`````js
{( catch { try
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
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
                                "start": 2,
                                "end": 2
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 2
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 2
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
                                "start": 2,
                                "end": 2
                            },
                            "flags": 16,
                            "start": 2,
                            "end": 2
                        },
                        "catchClause": {
                            "kind": 173,
                            "catchKeyword": {
                                "kind": 4202575,
                                "flags": 80,
                                "start": 2,
                                "end": 8
                            },
                            "catchParameter": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 159,
                                            "tryKeyword": {
                                                "kind": 37757027,
                                                "flags": 80,
                                                "start": 10,
                                                "end": 14
                                            },
                                            "block": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [],
                                                    "flags": 16,
                                                    "start": 14,
                                                    "end": 14
                                                },
                                                "flags": 16,
                                                "start": 14,
                                                "end": 14
                                            },
                                            "catchClause": null,
                                            "finallyKeyword": null,
                                            "finallyBlock": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [],
                                                    "flags": 16,
                                                    "start": 14,
                                                    "end": 14
                                                },
                                                "flags": 16,
                                                "start": 14,
                                                "end": 14
                                            },
                                            "flags": 16,
                                            "start": 10,
                                            "end": 14
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 10,
                                    "end": 14
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 14
                            },
                            "flags": 80,
                            "start": 2,
                            "end": 14
                        },
                        "finallyKeyword": null,
                        "finallyBlock": null,
                        "flags": 16,
                        "start": 2,
                        "end": 14
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "{( catch { try",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 2, end: 8
✖ 'try' expected - start: 2, end: 8
✖ Declaration or statement expected - start: 14, end: 14

```

