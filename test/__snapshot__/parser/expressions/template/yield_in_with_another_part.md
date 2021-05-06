# Kataw parser test case

## Input

`````js
x = `1 ${ yield } 2 ${ 3 } 4`
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
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
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
                        },
                        {
                            "kind": 65764,
                            "rawText": " 2 ",
                            "text": " 2 ",
                            "expression": {
                                "kind": 201392130,
                                "text": 3,
                                "rawText": "3",
                                "flags": 96,
                                "start": 22,
                                "end": 24
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 24
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": " 4",
                        "rawText": " 4",
                        "flags": 96,
                        "start": 24,
                        "end": 29
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 29
                },
                "flags": 32,
                "start": 0,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "x = `1 ${ yield } 2 ${ 3 } 4`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

