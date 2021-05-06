# Kataw parser test case

## Input

`````js
let z = {...x}
`````

## Output
### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 224,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 0,
                                            "start": 9,
                                            "end": 12
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 12,
                                            "end": 13
                                        },
                                        "flags": 32,
                                        "start": 9,
                                        "end": 13
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 9,
                                "end": 13
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 14
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 14
                    }
                ],
                "flags": 33554448,
                "start": 3,
                "end": 14
            },
            "flags": 33554448,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "let z = {...x}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

