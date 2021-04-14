# Kataw parser test case

## Input

`````js
x = `1 ${ yield x } 2`
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
                    "kind": 81921,
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
                        "autofix": 0,
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
                                    "kind": 81921,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 768,
                                    "start": 9,
                                    "end": 15
                                },
                                "flags": 256,
                                "start": 3,
                                "end": 15
                            }
                        ],
                        "tail": {
                            "kind": 458761,
                            "text": " } 2",
                            "rawText": " } 2",
                            "flags": 768,
                            "start": 15,
                            "end": 22
                        },
                        "flags": 256,
                        "start": 3,
                        "end": 22
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 22
                },
                "flags": 256,
                "start": 0,
                "end": 22
            },
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "x = `1 ${ yield x } 2`",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 3,
            "end": 9
        }
    ],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

