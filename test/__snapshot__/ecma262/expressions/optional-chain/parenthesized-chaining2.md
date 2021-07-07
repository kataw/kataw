# Kataw parser test case

## Input

`````js
(obj.aaa)?.bbb
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
                    "start": 9,
                    "end": 11
                },
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 4
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "aaa",
                            "rawText": "aaa",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 8
                        },
                        "flags": 96,
                        "transformFlags": 2,
                        "start": 0,
                        "end": 8
                    },
                    "flags": 0,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 9
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
                            "start": 11,
                            "end": 14
                        },
                        "flags": 536870944,
                        "transformFlags": 2,
                        "start": 11,
                        "end": 14
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 14
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "(obj.aaa)?.bbb",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
(obj.aaa)?.bbb;
```

### Diagnostics

```javascript
✔ No errors
```

