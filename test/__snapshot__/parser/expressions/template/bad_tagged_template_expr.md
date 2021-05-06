# Kataw parser test case

## Input

`````js
x`foo ${a b} bar`
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
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "foo ",
                            "text": "foo ",
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 8,
                                "end": 9
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 9
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "} bar",
                        "rawText": "} bar",
                        "flags": 96,
                        "start": 9,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 17
                },
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "x`foo ${a b} bar`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

x`foo ${a}`} bar``;
```

### Diagnostics

```javascript
✔ No errors
```

