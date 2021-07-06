# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
var vals = { x: 23 };

result = { x: x[yield] } = vals;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "vals",
                            "rawText": "vals",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 8
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 14
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 23,
                                            "rawText": "23",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 18
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 12,
                                        "end": 18
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 18
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 10,
                            "end": 20
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 20
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "result",
                    "rawText": "result",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 29
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 31
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
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 35
                                    },
                                    "right": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 38
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 39,
                                            "end": 44
                                        },
                                        "flags": 536870944,
                                        "transformFlags": 4,
                                        "start": 33,
                                        "end": 45
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 33,
                                    "end": 45
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 45
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 31,
                        "end": 47
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 47,
                        "end": 49
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "vals",
                        "rawText": "vals",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 49,
                        "end": 54
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 31,
                    "end": 54
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 21,
                "end": 54
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 21,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "var vals = { x: 23 };\n\nresult = { x: x[yield] } = vals;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript

var vals = {x: 23};
result = {x: x[yield]} = vals;

```

### Diagnostics

```javascript
✔ No errors
```

