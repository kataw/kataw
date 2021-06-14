# Kataw parser test case

## Input

`````js
let x: T[K];
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
                                "kind": 311,
                                "objectType": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "start": 6,
                                        "end": 8
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 6,
                                    "end": 8
                                },
                                "indexType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "K",
                                            "rawText": "K",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 9,
                                        "end": 10
                                    },
                                    "flags": 2097152,
                                    "start": 9,
                                    "end": 10
                                },
                                "flags": 0,
                                "start": 6,
                                "end": 12
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 11
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 11
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 11
            },
            "flags": 33554448,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "let x: T[K];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

let x;
```

### Diagnostics

```javascript
✔ No errors
```

