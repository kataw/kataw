# Kataw parser test case

## Input

`````js
type X = (x.y<z>);
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
                "text": "X",
                "rawText": "X",
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
                    "kind": 290,
                    "type": {
                        "kind": 144,
                        "name": {
                            "kind": 145,
                            "qualification": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 10,
                                "end": 11
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 12,
                                "end": 13
                            },
                            "flags": 2097152,
                            "start": 8,
                            "end": 13
                        },
                        "typeParameters": {
                            "kind": 310,
                            "typeInstantiations": {
                                "kind": 309,
                                "types": [
                                    {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 96,
                                                "start": 14,
                                                "end": 15
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 14,
                                            "end": 15
                                        },
                                        "flags": 2097152,
                                        "start": 14,
                                        "end": 15
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 14,
                                "end": 15
                            },
                            "flags": 2097152,
                            "start": 13,
                            "end": 16
                        },
                        "flags": 2097152,
                        "start": 8,
                        "end": 16
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 17
                },
                "flags": 2097152,
                "start": 8,
                "end": 17
            },
            "flags": 2097152,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "type X = (x.y<z>);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

  
```

### Diagnostics

```javascript
✔ No errors
```

