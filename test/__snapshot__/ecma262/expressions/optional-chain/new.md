# Kataw parser test case

## Input

`````js
new foo?.bar
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
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 7,
                        "end": 9
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 3,
                        "end": 7
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 9,
                                "end": 12
                            },
                            "flags": 536870944,
                            "start": 9,
                            "end": 12
                        },
                        "flags": 32,
                        "start": 9,
                        "end": 12
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 12
                },
                "argumentList": null,
                "flags": 96,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "new foo?.bar",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid optional chain from new expression - start: 7, end: 9

```

