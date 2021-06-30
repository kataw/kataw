# Kataw parser test case

## Input

`````js
(obj.aaa).bbb;
(obj.aaa)()
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
                "kind": 129,
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 1,
                            "end": 4
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "aaa",
                            "rawText": "aaa",
                            "flags": 96,
                            "start": 5,
                            "end": 8
                        },
                        "flags": 96,
                        "start": 0,
                        "end": 8
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 9
                },
                "expression": {
                    "kind": 134299649,
                    "text": "bbb",
                    "rawText": "bbb",
                    "flags": 96,
                    "start": 10,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 16,
                            "end": 19
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "aaa",
                            "rawText": "aaa",
                            "flags": 96,
                            "start": 20,
                            "end": 23
                        },
                        "flags": 96,
                        "start": 14,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 14,
                    "end": 24
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 25,
                    "end": 25
                },
                "flags": 268435488,
                "start": 14,
                "end": 26
            },
            "flags": 16,
            "start": 14,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "(obj.aaa).bbb;\n(obj.aaa)()",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

(obj.aaa).bbb;
(obj.aaa)();

```

### Diagnostics

```javascript
✔ No errors
```

