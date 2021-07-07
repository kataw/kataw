# Kataw parser test case

## Input

`````js
new obj?.()
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
                        "start": 7,
                        "end": 9
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 7
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 204,
                            "chain": null,
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 10
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 9,
                            "end": 11
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 11
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 11
                },
                "argumentList": null,
                "flags": 96,
                "transformFlags": 2048,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "new obj?.()",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid optional chain from new expression - start: 7, end: 9

```

