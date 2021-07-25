# Kataw parser test case

## Input

`````js
(obj?.aaa)?.bbb
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
                    "start": 10,
                    "end": 12
                },
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 6
                        },
                        "member": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 4
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "aaa",
                                    "rawText": "aaa",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 9
                                },
                                "flags": 32,
                                "transformFlags": 2,
                                "start": 6,
                                "end": 9
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 9
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 9
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 10
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 202,
                        "chain": null,
                        "expression": {
                            "kind": 134299649,
                            "text": "bbb",
                            "rawText": "bbb",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 15
                        },
                        "flags": 32,
                        "transformFlags": 2,
                        "start": 12,
                        "end": 15
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 15
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "(obj?.aaa)?.bbb",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
(obj?.aaa)?.bbb;
```

### Diagnostics

```javascript
✔ No errors
```

