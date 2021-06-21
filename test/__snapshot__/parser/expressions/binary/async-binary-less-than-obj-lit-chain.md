# Kataw parser test case

## Input

`````js
async <{}>(x) >> y + z
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
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 0,
                            "end": 5
                        },
                        "operatorToken": {
                            "kind": 536971330,
                            "flags": 96,
                            "start": 5,
                            "end": 7
                        },
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 8,
                                "end": 8
                            },
                            "flags": 48,
                            "start": 7,
                            "end": 9
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 9
                    },
                    "operatorToken": {
                        "kind": 34883,
                        "flags": 96,
                        "start": 9,
                        "end": 10
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 11,
                                "end": 12
                            },
                            "flags": 32,
                            "start": 10,
                            "end": 13
                        },
                        "operatorToken": {
                            "kind": 35141,
                            "flags": 96,
                            "start": 13,
                            "end": 16
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 16,
                            "end": 18
                        },
                        "flags": 32,
                        "start": 13,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 18
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 18,
                    "end": 20
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 20,
                    "end": 22
                },
                "flags": 32,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "async <{}>(x) >> y + z",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

 async  < {  } > (x) >> y + z; 
```

### Diagnostics

```javascript
✔ No errors
```

