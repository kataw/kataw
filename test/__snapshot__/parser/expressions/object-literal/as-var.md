# Kataw parser test case

## Input

`````js
var {...[]} = {}
`````

## Output

### Hybrid CST

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
                "flags": 768,
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
                                            "flags": 768,
                                            "start": 5,
                                            "end": 8
                                        },
                                        "key": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 12,
                                                "start": 9,
                                                "end": 9
                                            },
                                            "flags": 256,
                                            "start": 8,
                                            "end": 10
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 12,
                                                "start": 10,
                                                "end": 10
                                            },
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 10,
                                            "end": 10
                                        },
                                        "flags": 256,
                                        "start": 5,
                                        "end": 10
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 5,
                                "end": 10
                            },
                            "flags": 256,
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
                                "multiline": false,
                                "flags": 0,
                                "start": 15,
                                "end": 15
                            },
                            "flags": 256,
                            "start": 13,
                            "end": 16
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 16
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "var {...[]} = {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ The binding pattern is not destructible - start: 8, end: 9
@{x2716}@ Expression expected - start: 9, end: 10
@{x2716}@ Expression expected - start: 10, end: 11

```

