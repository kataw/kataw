# Kataw parser test case

## Input

`````js
let tuple2: [number, boolean] = [1, true];
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
                            "text": "tuple2",
                            "rawText": "tuple2",
                            "flags": 96,
                            "start": 3,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 147,
                                "elementTypes": [
                                    {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 2097216,
                                            "start": 13,
                                            "end": 19
                                        },
                                        "flags": 2097152,
                                        "start": 13,
                                        "end": 19
                                    },
                                    {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234254,
                                            "flags": 2097216,
                                            "start": 20,
                                            "end": 28
                                        },
                                        "flags": 2097152,
                                        "start": 20,
                                        "end": 28
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 11,
                                "end": 29
                            },
                            "flags": 2097152,
                            "start": 11,
                            "end": 29
                        },
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 33,
                                        "end": 34
                                    },
                                    {
                                        "kind": 24752947,
                                        "flags": 96,
                                        "start": 35,
                                        "end": 40
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 33,
                                "end": 40
                            },
                            "flags": 32,
                            "start": 31,
                            "end": 41
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 41
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 41
            },
            "flags": 33554448,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "let tuple2: [number, boolean] = [1, true];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

let tuple2:  = [1, true];
```

### Diagnostics

```javascript
✔ No errors
```

