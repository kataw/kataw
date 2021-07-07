# Kataw parser test case

## Input

`````js
new C?.b.d()
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
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 7
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 5
                    },
                    "chain": {
                        "kind": 202,
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
                                    "start": 7,
                                    "end": 8
                                },
                                "flags": 536870944,
                                "transformFlags": 2,
                                "start": 7,
                                "end": 8
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 8
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 10
                        },
                        "flags": 536870944,
                        "transformFlags": 2,
                        "start": 8,
                        "end": 10
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 10
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 11
                },
                "flags": 96,
                "transformFlags": 2048,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "new C?.b.d()",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid optional chain from new expression - start: 5, end: 7

```

