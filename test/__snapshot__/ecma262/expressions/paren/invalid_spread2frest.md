# Kataw parser test case

## Input

`````js
(...x);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 281,
                    "ellipsisToken": {
                        "kind": 524302,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 4
                    },
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 5
                    },
                    "optionalToken": null,
                    "type": null,
                    "right": null,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 5
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "(...x);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected '=>' - start: 6, end: 7

```

