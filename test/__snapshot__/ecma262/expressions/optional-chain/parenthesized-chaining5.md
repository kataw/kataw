# Kataw parser test case

## Input

`````js
(a?.[b])(c)
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
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 4
                        },
                        "member": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 2
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 203,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 6
                                },
                                "flags": 32,
                                "transformFlags": 4,
                                "start": 4,
                                "end": 6
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 7
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 7
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 8
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 10
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 10
                },
                "flags": 32,
                "transformFlags": 1,
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
    "source": "(a?.[b])(c)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
(a?.[b])(c);
```

### Diagnostics

```javascript
✔ No errors
```

