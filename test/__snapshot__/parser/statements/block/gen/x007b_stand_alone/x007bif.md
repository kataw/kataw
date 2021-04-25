# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { stand alone
> :: case: {if
## Input

`````js
{ {if
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [
                                {
                                    "kind": 164,
                                    "ifKeyword": {
                                        "kind": 37757019,
                                        "flags": 768,
                                        "start": 3,
                                        "end": 5
                                    },
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "autofix": 0,
                                        "flags": 12,
                                        "start": 5,
                                        "end": 5
                                    },
                                    "consequent": {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 16637,
                                            "text": "",
                                            "autofix": 0,
                                            "flags": 12,
                                            "start": 5,
                                            "end": 5
                                        },
                                        "flags": 128,
                                        "start": 5,
                                        "end": 5
                                    },
                                    "elseKeyword": null,
                                    "alternate": null,
                                    "flags": 128,
                                    "start": 3,
                                    "end": 5
                                }
                            ],
                            "multiLine": false,
                            "flags": 128,
                            "start": 3,
                            "end": 5
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 5
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 5
        }
    ],
    "isModule": false,
    "text": "{ {if",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 5
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 5, end: 5
@{x2716}@ Expression expected - start: 5, end: 5
@{x2716}@ Unexpected token. - start: 5, end: 5
@{x2716}@ Expression expected - start: 5, end: 5
@{x2716}@ Unexpected token. - start: 5, end: 5
@{x2716}@ Unexpected token. - start: 5, end: 5

```

