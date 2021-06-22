# Kataw parser test case

## Input

`````js
var { ...{ x = 5 } } = {x : 1};
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
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 5,
                                            "end": 9
                                        },
                                        "left": {
                                            "kind": 16637,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 64,
                                            "start": 9,
                                            "end": 9
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 0,
                                        "start": 5,
                                        "end": 9
                                    },
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 16637,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 64,
                                            "start": 9,
                                            "end": 9
                                        },
                                        "value": {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 281,
                                                        "ellipsisToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 10,
                                                            "end": 12
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 5,
                                                            "rawText": "5",
                                                            "flags": 96,
                                                            "start": 14,
                                                            "end": 16
                                                        },
                                                        "flags": 0,
                                                        "start": 10,
                                                        "end": 16
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 10,
                                                "end": 16
                                            },
                                            "flags": 32,
                                            "start": 9,
                                            "end": 18
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 9,
                                        "end": 18
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 18
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 20
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
                                            "start": 24,
                                            "end": 25
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 27,
                                            "end": 29
                                        },
                                        "flags": 32,
                                        "start": 24,
                                        "end": 29
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 24,
                                "end": 29
                            },
                            "flags": 48,
                            "start": 22,
                            "end": 30
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 30
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "var { ...{ x = 5 } } = {x : 1};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 9, end: 10
✖ ',' expected - start: 9, end: 10

```

