# Kataw parser test case

## Input

`````js
(async <{}>(x) >> y + z);
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "kind": 121,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 96,
                        "start": 1,
                        "end": 6
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 96,
                        "start": 6,
                        "end": 8
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 9,
                                    "end": 9
                                },
                                "flags": 48,
                                "start": 8,
                                "end": 10
                            },
                            "operatorToken": {
                                "kind": 34883,
                                "flags": 96,
                                "start": 10,
                                "end": 11
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
                                        "start": 12,
                                        "end": 13
                                    },
                                    "flags": 32,
                                    "start": 11,
                                    "end": 14
                                },
                                "operatorToken": {
                                    "kind": 35141,
                                    "flags": 96,
                                    "start": 14,
                                    "end": 17
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 17,
                                    "end": 19
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 19
                            },
                            "flags": 48,
                            "start": 10,
                            "end": 19
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "start": 19,
                            "end": 21
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 21,
                            "end": 23
                        },
                        "flags": 48,
                        "start": 10,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 23
                },
                "flags": 32,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "(async <{}>(x) >> y + z);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

  (async  < {} > (x) >> y + z);

```

### Diagnostics

```javascript
✔ No errors
```

