# Kataw parser test case

## Input

`````js
let tuple3: [number, boolean, string] = [1, true, "three"];
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
                            "text": "tuple3",
                            "rawText": "tuple3",
                            "flags": 96,
                            "start": 3,
                            "end": 10
                        },
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
                                    },
                                    {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234347,
                                            "flags": 2097216,
                                            "start": 29,
                                            "end": 36
                                        },
                                        "flags": 2097152,
                                        "start": 29,
                                        "end": 36
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 11,
                                "end": 37
                            },
                            "flags": 2097152,
                            "start": 11,
                            "end": 37
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
                                        "start": 41,
                                        "end": 42
                                    },
                                    {
                                        "kind": 24752947,
                                        "flags": 96,
                                        "start": 43,
                                        "end": 48
                                    },
                                    {
                                        "kind": 201392131,
                                        "text": "three",
                                        "rawText": "\"three\"",
                                        "flags": 96,
                                        "start": 49,
                                        "end": 57
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 41,
                                "end": 57
                            },
                            "flags": 32,
                            "start": 39,
                            "end": 58
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 58
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 58
            },
            "flags": 33554448,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "let tuple3: [number, boolean, string] = [1, true, \"three\"];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

let tuple3:  [: number, : boolean, : string ] = [1, true, "\"three\""];
```

### Diagnostics

```javascript
✔ No errors
```

