# Kataw parser test case

## Input

`````js
async(await);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "await",
                        "rawText": "await",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 11
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 0
            },
            "flags": 268435488,
            "transformFlags": 1,
            "start": 0,
            "end": 12
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 12,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "async(await);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

async(await)
```

### Diagnostics

```javascript
✔ No errors
```

