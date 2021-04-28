# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: if with unclosed block
> :: case: catch try {}
## Input

`````js
else {} if(x) { catch try {}
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
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 6,
                "end": 6
            },
            "flags": 128,
            "start": 4,
            "end": 7
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 7,
                "start": 0,
                "end": 10
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 11,
                "end": 12
            },
            "consequent": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 159,
                            "tryKeyword": null,
                            "block": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "multiLine": false,
                                    "flags": 128,
                                    "start": 21,
                                    "end": 21
                                },
                                "flags": 128,
                                "start": 21,
                                "end": 21
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
                                    "start": 27,
                                    "end": 27
                                },
                                "flags": 128,
                                "start": 25,
                                "end": 28
                            },
                            "flags": 128,
                            "start": 15,
                            "end": 28
                        }
                    ],
                    "multiLine": false,
                    "flags": 128,
                    "start": 15,
                    "end": 28
                },
                "flags": 128,
                "start": 13,
                "end": 28
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 128,
            "start": 7,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "else {} if(x) { catch try {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 0, end: 4

```

