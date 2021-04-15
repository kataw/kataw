# Kataw parser test case

## Input

`````js
wrap({[a]:b, [15]:d}=obj);
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
                    "text": "wrap",
                    "rawText": "wrap",
                    "flags": 768,
                    "start": 0,
                    "end": 4
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
                                                "start": 10,
                                                "end": 11
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 768,
                                                    "start": 7,
                                                    "end": 8
                                                },
                                                "flags": 256,
                                                "start": 6,
                                                "end": 9
                                            },
                                            "flags": 256,
                                            "start": 6,
                                            "end": 11
                                        },
                                        {
                                            "kind": 219,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 768,
                                                "start": 18,
                                                "end": 19
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": 15,
                                                    "rawText": "15",
                                                    "flags": 768,
                                                    "start": 14,
                                                    "end": 16
                                                },
                                                "flags": 256,
                                                "start": 12,
                                                "end": 17
                                            },
                                            "flags": 256,
                                            "start": 12,
                                            "end": 19
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 6,
                                    "end": 19
                                },
                                "flags": 256,
                                "start": 5,
                                "end": 20
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 768,
                                "start": 20,
                                "end": 21
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "obj",
                                "rawText": "obj",
                                "flags": 768,
                                "start": 21,
                                "end": 24
                            },
                            "flags": 256,
                            "start": 5,
                            "end": 24
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 5,
                    "end": 24
                },
                "flags": 256,
                "start": 0,
                "end": 25
            },
            "flags": 128,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "wrap({[a]:b, [15]:d}=obj);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

