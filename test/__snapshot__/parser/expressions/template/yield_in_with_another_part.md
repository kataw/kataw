# Kataw parser test case

## Input

`````js
x = `1 ${ yield } 2 ${ 3 } 4`
`````

## Output

### Hybrid CST

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
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 226,
                    "member": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
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
                                    "flags": 768,
                                    "start": 9,
                                    "end": 15
                                },
                                "flags": 256,
                                "start": 3,
                                "end": 15
                            },
                            {
                                "kind": 228,
                                "rawText": " 2 ",
                                "text": " 2 ",
                                "expression": {
                                    "kind": 201392130,
                                    "text": 3,
                                    "rawText": "3",
                                    "flags": 768,
                                    "start": 22,
                                    "end": 24
                                },
                                "flags": 256,
                                "start": 15,
                                "end": 24
                            }
                        ],
                        "tail": {
                            "kind": 458761,
                            "text": " 4",
                            "rawText": " 4",
                            "flags": 768,
                            "start": 24,
                            "end": 29
                        },
                        "flags": 256,
                        "start": 3,
                        "end": 29
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 29
                },
                "flags": 256,
                "start": 0,
                "end": 29
            },
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "x = `1 ${ yield } 2 ${ 3 } 4`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 3, end: 9

```

