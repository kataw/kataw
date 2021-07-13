# Kataw parser test case

## Input

`````js
`${n
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
                "kind": 227,
                "spans": [
                    {
                        "kind": 65764,
                        "rawText": "",
                        "text": "",
                        "expression": {
                            "kind": 134299649,
                            "text": "n",
                            "rawText": "n",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 4
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 4
                    }
                ],
                "tail": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "n",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 4
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 4
        }
    ],
    "isModule": false,
    "source": "`${n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 4
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unterminated template literal - start: 4, end: 4

```

