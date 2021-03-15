# Kataw parser test case

## Input

`````js
switch (x);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "switch (x);",
    "filename": "",
    "statements": [
        {
            "kind": 2097362,
            "expression": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 10
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        },
        {
            "kind": 6291526,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 10,
            "end": 11
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 10,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

