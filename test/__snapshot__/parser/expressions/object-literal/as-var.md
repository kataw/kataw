# Kataw parser test case

## Input

`````js
var {...[]} = {}
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
                                        "kind": 204,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 5,
                                            "end": 8
                                        },
                                        "key": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 64,
                                                "start": 9,
                                                "end": 9
                                            },
                                            "flags": 32,
                                            "start": 8,
                                            "end": 10
                                        },
                                        "value": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 64,
                                            "start": 10,
                                            "end": 10
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 5,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 10
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 15,
                                "end": 15
                            },
                            "flags": 48,
                            "start": 13,
                            "end": 16
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 16
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "var {...[]} = {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 9, end: 10
✖ Binding identifier expected - start: 10, end: 11

```

