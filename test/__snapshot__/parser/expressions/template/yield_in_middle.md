# Kataw parser test case

## Input

`````js
x = `1 ${ yield } 2`
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 226,
                    "member": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 3,
                        "end": 3
                    },
                    "template": {
                        "kind": 227,
                        "spans": [
                            {
                                "kind": 228,
                                "rawText": "1 ",
                                "text": "1 ",
                                "expression": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 15
                                },
                                "flags": 32,
                                "start": 3,
                                "end": 15
                            }
                        ],
                        "tail": {
                            "kind": 458761,
                            "text": " 2",
                            "rawText": " 2",
                            "flags": 96,
                            "start": 15,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 3,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 20
                },
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "x = `1 ${ yield } 2`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 3, end: 9

```

