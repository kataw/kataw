# Kataw parser test case

## Input

`````js
x({[a]:b}=obj);
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
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 3,
                                    "end": 8
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 9
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 9,
                                "end": 10
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "obj",
                                "rawText": "obj",
                                "flags": 96,
                                "start": 10,
                                "end": 13
                            },
                            "flags": 32,
                            "start": 2,
                            "end": 13
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "x({[a]:b}=obj);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

x({ [a]: b } = obj);
```

### Diagnostics

```javascript
✔ No errors
```

