# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: k
> :: test: with unclosed block
> :: case: let  =
## Input

`````js
{ {} finally(x) { let  =
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
                            "flags": 0,
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
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "let",
                                            "rawText": "let",
                                            "flags": 96,
                                            "start": 17,
                                            "end": 21
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 21,
                                            "end": 24
                                        },
                                        "right": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 64,
                                            "start": 24,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 24
                                    },
                                    "flags": 16,
                                    "start": 17,
                                    "end": 24
                                }
                            ],
                            "flags": 16,
                            "start": 17,
                            "end": 24
                        },
                        "flags": 16,
                        "start": 15,
                        "end": 24
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "{ {} finally(x) { let  =",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 4, end: 12
✖ Expected a `;` - start: 15, end: 17
✖ Identifier expected - start: 24, end: 24

```

