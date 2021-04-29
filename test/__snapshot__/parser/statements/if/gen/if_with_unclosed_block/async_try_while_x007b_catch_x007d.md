# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: if with unclosed block
> :: case: async try while { catch }
## Input

`````js
else {} if(x) { async try while { catch }
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
                "flags": 16,
                "start": 6,
                "end": 6
            },
            "flags": 16,
            "start": 4,
            "end": 7
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 7,
                "end": 10
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 11,
                "end": 12
            },
            "consequent": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "start": 15,
                                "end": 21
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 21
                        },
                        {
                            "kind": 159,
                            "tryKeyword": {
                                "kind": 37757027,
                                "flags": 0,
                                "start": 21,
                                "end": 25
                            },
                            "block": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 25,
                                    "end": 25
                                },
                                "flags": 16,
                                "start": 25,
                                "end": 25
                            },
                            "catchClause": null,
                            "finallyKeyword": null,
                            "finallyBlock": {
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
                                                    "flags": 16,
                                                    "start": 39,
                                                    "end": 39
                                                },
                                                "flags": 16,
                                                "start": 39,
                                                "end": 39
                                            },
                                            "catchClause": null,
                                            "finallyKeyword": null,
                                            "finallyBlock": {
                                                "kind": 249,
                                                "block": {
                                                    "kind": 124,
                                                    "statements": [],
                                                    "flags": 16,
                                                    "start": 41,
                                                    "end": 41
                                                },
                                                "flags": 16,
                                                "start": 41,
                                                "end": 41
                                            },
                                            "flags": 16,
                                            "start": 33,
                                            "end": 41
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 33,
                                    "end": 41
                                },
                                "flags": 16,
                                "start": 31,
                                "end": 41
                            },
                            "flags": 16,
                            "start": 21,
                            "end": 41
                        }
                    ],
                    "flags": 16,
                    "start": 15,
                    "end": 41
                },
                "flags": 16,
                "start": 13,
                "end": 41
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 7,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "else {} if(x) { async try while { catch }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 0, end: 4
✖ 'try' expected - start: 33, end: 39

```

