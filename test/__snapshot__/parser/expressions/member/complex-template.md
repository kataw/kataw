# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
[`a${5}b`.length] = x
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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 129,
                                "member": {
                                    "kind": 226,
                                    "member": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 12,
                                        "start": 1,
                                        "end": 1
                                    },
                                    "template": {
                                        "kind": 227,
                                        "spans": [
                                            {
                                                "kind": 228,
                                                "rawText": "a",
                                                "text": "a",
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 5,
                                                    "rawText": "5",
                                                    "flags": 768,
                                                    "start": 5,
                                                    "end": 6
                                                },
                                                "flags": 256,
                                                "start": 1,
                                                "end": 6
                                            }
                                        ],
                                        "tail": {
                                            "kind": 458761,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 6,
                                            "end": 9
                                        },
                                        "flags": 256,
                                        "start": 1,
                                        "end": 9
                                    },
                                    "flags": 256,
                                    "start": 1,
                                    "end": 9
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "length",
                                    "rawText": "length",
                                    "flags": 768,
                                    "start": 10,
                                    "end": 16
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 16
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1,
                        "end": 16
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 17
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 17,
                    "end": 19
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 19,
                    "end": 21
                },
                "flags": 256,
                "start": 0,
                "end": 21
            },
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "[`a${5}b`.length] = x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 1, end: 5

```

