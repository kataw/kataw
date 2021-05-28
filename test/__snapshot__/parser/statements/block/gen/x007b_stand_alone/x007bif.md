# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: e
> :: test: { stand alone
> :: case: {if
## Input

`````js
{ {if
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
                            "statements": [
                                {
                                    "kind": 164,
                                    "ifKeyword": {
                                        "kind": 37757019,
                                        "flags": 0,
                                        "start": 3,
                                        "end": 5
                                    },
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 64,
                                        "start": 5,
                                        "end": 5
                                    },
                                    "consequent": {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 64,
                                            "start": 5,
                                            "end": 5
                                        },
                                        "flags": 16,
                                        "start": 5,
                                        "end": 5
                                    },
                                    "elseKeyword": null,
                                    "alternate": null,
                                    "flags": 16,
                                    "start": 3,
                                    "end": 5
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 5
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 5
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 5
        }
    ],
    "isModule": false,
    "source": "{ {if",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 5
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 5, end: 5

```

