# Kataw parser test case

## Input

`````js
x({a:b, c:d}=obj);
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
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 3,
                                                "end": 4
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 5,
                                                "end": 6
                                            },
                                            "flags": 32,
                                            "start": 3,
                                            "end": 6
                                        },
                                        {
                                            "kind": 219,
                                            "generatorToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 96,
                                                "start": 7,
                                                "end": 9
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 96,
                                                "start": 10,
                                                "end": 11
                                            },
                                            "flags": 32,
                                            "start": 7,
                                            "end": 11
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 3,
                                    "end": 11
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 12
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 12,
                                "end": 13
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "obj",
                                "rawText": "obj",
                                "flags": 96,
                                "start": 13,
                                "end": 16
                            },
                            "flags": 32,
                            "start": 2,
                            "end": 16
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2,
                    "end": 16
                },
                "flags": 268435488,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "x({a:b, c:d}=obj);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

x({ a: b, c: d } = obj);
```

### Diagnostics

```javascript
✔ No errors
```

