# Kataw parser test case

## Input

`````js
async?.(foo)
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
                    "start": 5,
                    "end": 7
                },
                "member": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 204,
                        "chain": null,
                        "typeArguments": null,
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 11
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 11
                        },
                        "flags": 32,
                        "transformFlags": 1,
                        "start": 7,
                        "end": 12
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 12
                },
                "flags": 32,
                "transformFlags": 0,
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
    "source": "async?.(foo)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
async?.(foo);
```

### Diagnostics

```javascript
✔ No errors
```

