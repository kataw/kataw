# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: if with unclosed block
> :: case: /)finally
## Input

`````js
else {} if(x) { /)finally
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
                                "kind": 221,
                                "text": "/)finally",
                                "flags": 96,
                                "start": 15,
                                "end": 25
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 25
                        }
                    ],
                    "multiLine": false,
                    "flags": 16,
                    "start": 15,
                    "end": 25
                },
                "flags": 16,
                "start": 13,
                "end": 25
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 7,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "else {} if(x) { /)finally",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 0, end: 4
✖ Unterminated regular expression - start: 15, end: 17

```

