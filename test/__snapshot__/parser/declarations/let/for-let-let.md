# Kataw parser test case

## Input

`````js
for (let {x: y = let};;) {}
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "initializer": {
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 10,
                                            "end": 12
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 768,
                                                "start": 12,
                                                "end": 14
                                            },
                                            "initializer": {
                                                "kind": 134299649,
                                                "text": "let",
                                                "rawText": "let",
                                                "flags": 768,
                                                "start": 16,
                                                "end": 20
                                            },
                                            "flags": 256,
                                            "start": 12,
                                            "end": 20
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 10,
                                        "end": 20
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 10,
                                "end": 20
                            },
                            "flags": 256,
                            "start": 8,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 8,
                        "end": 21
                    }
                ],
                "flags": 128,
                "start": 8,
                "end": 21
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 26,
                    "end": 26
                },
                "flags": 128,
                "start": 24,
                "end": 27
            },
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "for (let {x: y = let};;) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
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

