# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: k
> :: test: with unclosed block
> :: case: import.call
## Options

`````js
{}
`````
## Input

`````js
{ {} finally(x) { import.call
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
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 4
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
                                "start": 4,
                                "end": 4
                            },
                            "flags": 16,
                            "start": 4,
                            "end": 4
                        },
                        "catchClause": null,
                        "finallyKeyword": {
                            "kind": 37757016,
                            "flags": 64,
                            "start": 4,
                            "end": 12
                        },
                        "finallyBlock": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 16,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 16,
                        "start": 4,
                        "end": 12
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 13,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 12,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 12,
                        "end": 15
                    },
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 299,
                                        "importKeyword": {
                                            "kind": 37814364,
                                            "flags": 80,
                                            "start": 17,
                                            "end": 24
                                        },
                                        "metaIdentifier": null,
                                        "flags": 24,
                                        "start": 96,
                                        "end": 25
                                    },
                                    "flags": 16,
                                    "start": 24,
                                    "end": 25
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "call",
                                        "rawText": "call",
                                        "flags": 96,
                                        "start": 25,
                                        "end": 29
                                    },
                                    "flags": 16,
                                    "start": 25,
                                    "end": 29
                                }
                            ],
                            "flags": 16,
                            "start": 17,
                            "end": 29
                        },
                        "flags": 16,
                        "start": 15,
                        "end": 29
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "{ {} finally(x) { import.call",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 4, end: 12
✖ Expected a `;` - start: 15, end: 17
✖ Cannot use 'import.meta' outside a module - start: 24, end: 29
✖ 'import.meta' is the only valid meta property for import - start: 24, end: 29

```

