# Kataw parser test case

## Input

`````js
arr?.[i + 1]
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
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 5
                },
                "member": {
                    "kind": 134299649,
                    "text": "arr",
                    "rawText": "arr",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 203,
                        "chain": null,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "i",
                                "rawText": "i",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 7
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 9
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 11
                            },
                            "flags": 96,
                            "transformFlags": 1024,
                            "start": 6,
                            "end": 11
                        },
                        "flags": 536870944,
                        "transformFlags": 4,
                        "start": 5,
                        "end": 11
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 12
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "arr?.[i + 1]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

arr?.[i + 1];
```

### Diagnostics

```javascript
✔ No errors
```

