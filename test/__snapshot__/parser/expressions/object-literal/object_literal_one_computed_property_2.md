# Kataw parser test case

## Input

`````js
x({[a]:b, [15]:d}=obj);
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
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
                                            "generatorToken": null,
                                            "left": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 4,
                                                    "end": 5
                                                },
                                                "flags": 32,
                                                "start": 3,
                                                "end": 6
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 7,
                                                "end": 8
                                            },
                                            "flags": 32,
                                            "start": 3,
                                            "end": 8
                                        },
                                        {
                                            "kind": 219,
                                            "generatorToken": null,
                                            "left": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 15,
                                                    "rawText": "15",
                                                    "flags": 96,
                                                    "start": 11,
                                                    "end": 13
                                                },
                                                "flags": 32,
                                                "start": 9,
                                                "end": 14
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 96,
                                                "start": 15,
                                                "end": 16
                                            },
                                            "flags": 32,
                                            "start": 9,
                                            "end": 16
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 3,
                                    "end": 16
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 17
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 17,
                                "end": 18
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "obj",
                                "rawText": "obj",
                                "flags": 96,
                                "start": 18,
                                "end": 21
                            },
                            "flags": 32,
                            "start": 2,
                            "end": 21
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2,
                    "end": 21
                },
                "flags": 32,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "x({[a]:b, [15]:d}=obj);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

x({ : b, : d } = obj);
```

### Diagnostics

```javascript
✔ No errors
```

