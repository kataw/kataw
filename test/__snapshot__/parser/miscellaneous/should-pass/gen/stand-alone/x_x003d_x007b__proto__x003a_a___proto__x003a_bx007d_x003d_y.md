# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: e
> :: test: stand-alone
> :: case: x = {__proto__: a, __proto__: b} = y
## Options

`````js
{}
`````
## Input

`````js
x = {__proto__: a, __proto__: b} = y
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
                    "flags": 96,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 14
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "flags": 36,
                                    "start": 5,
                                    "end": 17
                                },
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "start": 18,
                                        "end": 28
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 29,
                                        "end": 31
                                    },
                                    "flags": 36,
                                    "start": 18,
                                    "end": 31
                                }
                            ],
                            "trailingComma": false,
                            "flags": 20,
                            "start": 5,
                            "end": 31
                        },
                        "flags": 52,
                        "start": 3,
                        "end": 32
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 32,
                        "end": 34
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 34,
                        "end": 36
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 36
                },
                "flags": 32,
                "start": 0,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "x = {__proto__: a, __proto__: b} = y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

 x={ __proto__ : a, __proto__ : b }=y; 
```

### Diagnostics

```javascript
✔ No errors
```

