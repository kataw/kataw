# Kataw parser test case

## Input

`````js
for(t`${x in y}`;;);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "t",
                    "rawText": "t",
                    "flags": 96,
                    "start": 4,
                    "end": 5
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "",
                            "text": "",
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 9
                                },
                                "operatorToken": {
                                    "kind": 21006388,
                                    "flags": 64,
                                    "start": 9,
                                    "end": 12
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 12,
                                    "end": 14
                                },
                                "flags": 32,
                                "start": 8,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 14
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 96,
                        "start": 14,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 16
                },
                "flags": 32,
                "start": 4,
                "end": 16
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 19,
                "end": 20
            },
            "flags": 80,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "for(t`${x in y}`;;);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

for (t`${x in y}`; ; );
```

### Diagnostics

```javascript
✔ No errors
```

