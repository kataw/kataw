# Kataw parser test case

## Input

`````js
type x = { [y]: z[q] | null };
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 195,
                            "protoKeyword": null,
                            "staticToken": null,
                            "name": null,
                            "key": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 12,
                                    "end": 13
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 10,
                                "end": 13
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 137,
                                    "types": [
                                        {
                                            "kind": 311,
                                            "objectType": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "z",
                                                    "rawText": "z",
                                                    "flags": 96,
                                                    "start": 15,
                                                    "end": 17
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 15,
                                                "end": 17
                                            },
                                            "indexType": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "q",
                                                        "rawText": "q",
                                                        "flags": 96,
                                                        "start": 18,
                                                        "end": 19
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 18,
                                                    "end": 19
                                                },
                                                "flags": 2097152,
                                                "start": 18,
                                                "end": 19
                                            },
                                            "flags": 0,
                                            "start": 15,
                                            "end": 22
                                        },
                                        {
                                            "kind": 138477575,
                                            "flags": 2097216,
                                            "start": 22,
                                            "end": 27
                                        }
                                    ],
                                    "flags": 2097152,
                                    "start": 20,
                                    "end": 27
                                },
                                "flags": 2097152,
                                "start": 15,
                                "end": 27
                            },
                            "flags": 2097152,
                            "start": 10,
                            "end": 27
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 29
                },
                "flags": 2097152,
                "start": 8,
                "end": 29
            },
            "flags": 2097152,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "type x = { [y]: z[q] | null };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

