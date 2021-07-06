# Kataw parser test case

## Input

`````js
([].length) => y
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
                    "kind": 129,
                    "member": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 2
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 1,
                        "end": 3
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "length",
                        "rawText": "length",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 10
                    },
                    "flags": 32,
                    "transformFlags": 2,
                    "start": 0,
                    "end": 10
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 14,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "([].length) => y",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 11, end: 14

```

