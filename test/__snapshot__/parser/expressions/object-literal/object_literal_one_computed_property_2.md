# Kataw parser test case

## Input

`````js
x({[a]:b, [15]:d}=obj);
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 7,
                                                "end": 8
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 768,
                                                    "start": 4,
                                                    "end": 5
                                                },
                                                "flags": 256,
                                                "start": 3,
                                                "end": 6
                                            },
                                            "flags": 256,
                                            "start": 3,
                                            "end": 8
                                        },
                                        {
                                            "kind": 219,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 768,
                                                "start": 15,
                                                "end": 16
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 15,
                                                    "rawText": "15",
                                                    "flags": 768,
                                                    "start": 11,
                                                    "end": 13
                                                },
                                                "flags": 256,
                                                "start": 9,
                                                "end": 14
                                            },
                                            "flags": 256,
                                            "start": 9,
                                            "end": 16
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 3,
                                    "end": 16
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 17
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 768,
                                "start": 17,
                                "end": 18
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "obj",
                                "rawText": "obj",
                                "flags": 768,
                                "start": 18,
                                "end": 21
                            },
                            "flags": 256,
                            "start": 2,
                            "end": 21
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 2,
                    "end": 21
                },
                "flags": 256,
                "start": 0,
                "end": 22
            },
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "x({[a]:b, [15]:d}=obj);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
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

