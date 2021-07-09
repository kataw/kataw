# Kataw parser test case

## Input

`````js
obj?.a?.b
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
                    "start": 6,
                    "end": 8
                },
                "member": {
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
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 3
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 6
                            },
                            "flags": 536870944,
                            "transformFlags": 2,
                            "start": 5,
                            "end": 6
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 6
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 6
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 202,
                        "chain": null,
                        "expression": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 9
                        },
                        "flags": 536870944,
                        "transformFlags": 2,
                        "start": 8,
                        "end": 9
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 9
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "obj?.a?.b",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript
obj?.a?.b;
```

### Diagnostics

```javascript
✔ No errors
```

