# Kataw parser test case

## Input

`````js
let x: [y,] = z;
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
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
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 8,
                                                "end": 9
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 8,
                                            "end": 9
                                        },
                                        "flags": 2097152,
                                        "start": 8,
                                        "end": 9
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 2097152,
                                "start": 6,
                                "end": 11
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 11
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 13,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 15
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 15
            },
            "flags": 33554448,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "let x: [y,] = z;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

let x:  = z;
```

### Diagnostics

```javascript
✔ No errors
```

