# Kataw parser test case

## Input

`````js
let {a:{}} = 0
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [],
                                                    "multiline": false,
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 8,
                                                    "end": 8
                                                },
                                                "flags": 256,
                                                "start": 7,
                                                "end": 9
                                            },
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 7,
                                            "end": 9
                                        },
                                        "flags": 256,
                                        "start": 5,
                                        "end": 9
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 5,
                                "end": 9
                            },
                            "flags": 256,
                            "start": 3,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 768,
                            "start": 12,
                            "end": 14
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 14
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 14
            },
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "let {a:{}} = 0",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

