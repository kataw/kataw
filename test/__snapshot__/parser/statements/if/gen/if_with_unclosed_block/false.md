# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: if with unclosed block
> :: case: false
## Input

`````js
else {} if(x) { false
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
                "flags": 768,
                "start": 7,
                "end": 10
            },
            "expression": {
                "kind": 81921,
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
                            "kind": 120,
                            "expression": {
                                "kind": 134,
                                "text": false,
                                "flags": 768,
                                "start": 15,
                                "end": 21
                            },
                            "flags": 128,
                            "start": 15,
                            "end": 21
                        }
                    ],
                    "multiLine": false,
                    "flags": 128,
                    "start": 15,
                    "end": 21
                },
                "flags": 128,
                "start": 13,
                "end": 21
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 128,
            "start": 7,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "else {} if(x) { false",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 0,
            "end": 4
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 21,
            "end": 21
        }
    ],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: if with unclosed block
> :: case: false
## Input

`````js
else {} if(x) { false
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: if with unclosed block
> :: case: false
## Input

`````js
else {} if(x) { false
`````
```

