# Kataw parser test case

## Input

`````js
async(0,...a)
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
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 7
                    },
                    {
                        "kind": 223,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 11
                        },
                        "argument": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 12
                        },
                        "flags": 1073741856,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 12
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "flags": 268435488,
            "transformFlags": 1,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "async(0,...a)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

async(
  0,
  ...a
)
```

### Diagnostics

```javascript
✔ No errors
```

